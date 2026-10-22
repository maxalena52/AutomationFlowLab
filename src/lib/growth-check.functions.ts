import { lookup } from "node:dns/promises";
import { createServerFn } from "@tanstack/react-start";

export type FindingStatus = "CRITICAL" | "NEEDS WORK" | "WORKING";

export type Finding = {
  status: FindingStatus;
  area: string;
  summary: string;
  meaning: string;
};

type CheckResult = {
  overall: FindingStatus;
  findings: Finding[];
  source?: "live" | "archive" | "pasted";
};

const OVERALL: Record<FindingStatus, string> = {
  CRITICAL:
    "We identified issues that may be stopping this website from being found, trusted, or chosen.",
  "NEEDS WORK":
    "We identified several areas that may be limiting this website’s ability to attract, convince, or convert potential customers.",
  WORKING:
    "This initial check did not find a critical issue on the page we read. A full audit can still find opportunities this short check does not cover.",
};

export function overallCopy(status: FindingStatus) {
  return OVERALL[status];
}

function privateIPv4(a: number, b: number, c: number, d: number) {
  if ([a, b, c, d].some((n) => !Number.isInteger(n) || n < 0 || n > 255)) return true;
  if (a === 0 || a === 10 || a === 127) return true;
  if (a === 100 && b >= 64 && b <= 127) return true;
  if (a === 169 && b === 254) return true;
  if (a === 172 && b >= 16 && b <= 31) return true;
  if (a === 192 && b === 168) return true;
  if (a === 192 && b === 0 && (c === 0 || c === 2)) return true;
  if (a === 198 && (b === 18 || b === 19)) return true;
  if (a === 198 && b === 51 && c === 100) return true;
  if (a === 203 && b === 0 && c === 113) return true;
  if (a >= 224) return true;
  return false;
}

function expandIPv6(address: string) {
  const input = address.toLowerCase().split("%")[0] ?? "";
  const halves = input.split("::");
  if (halves.length > 2) return null;
  const part = (value: string) =>
    value
      ? value.split(":").map((piece) => (/^[0-9a-f]{1,4}$/.test(piece) ? Number.parseInt(piece, 16) : Number.NaN))
      : [];
  const left = part(halves[0] ?? "");
  const right = halves.length === 2 ? part(halves[1] ?? "") : [];
  if ([...left, ...right].some((n) => Number.isNaN(n))) return null;
  if (halves.length === 1) return left.length === 8 ? left : null;
  const missing = 8 - left.length - right.length;
  if (missing < 0) return null;
  return [...left, ...Array(missing).fill(0), ...right];
}

function privateIp(address: string): boolean {
  const value = address.toLowerCase().split("%")[0] ?? "";
  if (value.startsWith("::ffff:") && value.includes(".")) return privateIp(value.slice(7));
  if (value.includes(".")) {
    const parts = value.split(".").map((part) => Number(part));
    if (parts.length !== 4) return true;
    return privateIPv4(parts[0] ?? -1, parts[1] ?? -1, parts[2] ?? -1, parts[3] ?? -1);
  }
  const v6 = expandIPv6(value);
  if (!v6) return true;
  if (v6.every((n) => n === 0)) return true;
  if (v6.slice(0, 7).every((n) => n === 0) && v6[7] === 1) return true;
  if ((v6[0]! & 0xfe00) === 0xfc00) return true;
  if ((v6[0]! & 0xffc0) === 0xfe80 || (v6[0]! & 0xffc0) === 0xfec0) return true;
  if ((v6[0]! & 0xff00) === 0xff00) return true;
  if (v6[0] === 0x100 && v6.slice(1, 4).every((n) => n === 0)) return true;
  const mapped = v6.slice(0, 5).every((n) => n === 0) && v6[5] === 0xffff;
  const nat64 = v6[0] === 0x64 && v6[1] === 0xff9b && v6.slice(2, 6).every((n) => n === 0);
  if (mapped || nat64) {
    return privateIPv4(v6[6]! >> 8, v6[6]! & 0xff, v6[7]! >> 8, v6[7]! & 0xff);
  }
  return false;
}

function blockedName(hostname: string) {
  const host = hostname.toLowerCase().replace(/\.$/, "");
  if (!host || host.includes("%")) return true;
  if (
    host === "localhost" ||
    host.endsWith(".localhost") ||
    host.endsWith(".local") ||
    host.endsWith(".internal") ||
    host.endsWith(".localdomain") ||
    host.endsWith(".home") ||
    host.endsWith(".lan") ||
    host === "metadata.google.internal" ||
    host.endsWith(".metadata.google.internal")
  ) {
    return true;
  }
  if (/^\d+(\.\d+){0,3}$/.test(host)) return host.split(".").length !== 4 || privateIp(host);
  if (host.includes(":")) return privateIp(host);
  return false;
}

async function resolvesPrivate(hostname: string) {
  if (blockedName(hostname)) return "private" as const;
  try {
    const records = await Promise.race([
      lookup(hostname, { all: true, verbatim: true }),
      new Promise<never>((_, reject) => setTimeout(() => reject(new Error("timeout")), 4000)),
    ]);
    if (!records.length || records.some((record) => privateIp(record.address))) return "private" as const;
    return "public" as const;
  } catch {
    return "failed" as const;
  }
}

async function publicWebUrl(url: URL) {
  if (url.protocol !== "http:" && url.protocol !== "https:") return "Enter a public website address.";
  if (url.username || url.password) return "Enter a public website address.";
  if (url.port && url.port !== "80" && url.port !== "443") return "Enter a public website address.";
  const resolved = await resolvesPrivate(url.hostname);
  if (resolved === "private") return "Enter a public website address.";
  if (resolved === "failed") return "The check could not be completed.";
  return "";
}

function isChallenge(status: number, headers: Headers, html: string) {
  if (headers.get("cf-mitigated")) return true;
  if (headers.get("server")?.toLowerCase() === "cloudflare" && status === 403) return true;
  return /cf-challenge|challenges\.cloudflare\.com|just a moment|attention required|verify you are human|cf-turnstile/i.test(html);
}

function textOf(html: string, tag: string) {
  const re = new RegExp(`<${tag}\\b[^>]*>([\\s\\S]*?)</${tag}>`, "i");
  const match = re.exec(html);
  if (!match) return "";
  return match[1].replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
}

async function readLimited(response: Response, limit: number) {
  const reader = response.body?.getReader();
  if (!reader) return "";
  const decoder = new TextDecoder();
  let out = "";
  while (out.length < limit) {
    const { done, value } = await reader.read();
    if (done) break;
    out += decoder.decode(value, { stream: true });
  }
  reader.cancel().catch(() => undefined);
  return out.slice(0, limit);
}

async function readPublicPage(raw: string) {
  let current: URL;
  try {
    current = new URL(raw);
  } catch {
    return { error: "Enter a website address, such as yourbusiness.com." };
  }
  if (current.protocol !== "http:" && current.protocol !== "https:") {
    return { error: "Enter a public website address.", blocked: true };
  }
  for (let hop = 0; hop < 4; hop += 1) {
    const refused = await publicWebUrl(current);
    if (refused) return { error: refused, blocked: refused === "Enter a public website address." };
    let response: Response;
    try {
      response = await fetch(current, {
        redirect: "manual",
        signal: AbortSignal.timeout(8000),
        headers: {
          accept: "text/html,application/xhtml+xml",
          "user-agent": "AutomationFlowLab-WebsiteGrowthCheck/1.0",
        },
      });
    } catch {
      return { error: "The check could not be completed." };
    }
    if (response.status >= 300 && response.status < 400) {
      const next = response.headers.get("location");
      if (!next) return { error: "The check could not be completed." };
      try {
        current = new URL(next, current);
      } catch {
        return { error: "The check could not be completed." };
      }
      continue;
    }
    if (!response.ok) {
      const body = await readLimited(response, 20_000);
      if (isChallenge(response.status, response.headers, body)) {
        return { error: "This site uses a security check that blocks automated reads. Open the page in your browser, copy the page source, and paste it below." };
      }
      return { error: "The check could not be completed." };
    }
    const type = response.headers.get("content-type") ?? "";
    if (!/text\/html|application\/xhtml/i.test(type) && type !== "") {
      return { error: "That address did not return a public web page." };
    }
    const html = await readLimited(response, 400_000);
    if (isChallenge(response.status, response.headers, html)) {
      return { error: "This site uses a security check that blocks automated reads. Open the page in your browser, copy the page source, and paste it below." };
    }
    return { html, finalUrl: current };
  }
  return { error: "The check could not be completed." };
}

async function readArchive(raw: string) {
  try {
    const available = await fetch(`https://archive.org/wayback/available?url=${encodeURIComponent(raw)}`, {
      signal: AbortSignal.timeout(8000),
    });
    if (!available.ok) return null;
    const data = (await available.json()) as { archived_snapshots?: { closest?: { available?: boolean; timestamp?: string } } };
    const snap = data.archived_snapshots?.closest;
    if (!snap?.available || !snap.timestamp) return null;
    const response = await fetch(`https://web.archive.org/web/${snap.timestamp}id_/${raw}`, {
      signal: AbortSignal.timeout(10000),
      headers: { accept: "text/html,application/xhtml+xml" },
    });
    if (!response.ok) return null;
    const html = await readLimited(response, 400_000);
    if (!/<(html|head|body|title)\b/i.test(html) || isChallenge(response.status, response.headers, html)) return null;
    return { html, finalUrl: new URL(raw) };
  } catch {
    return null;
  }
}

function analyse(html: string, finalUrl: URL): CheckResult {
  const title = textOf(html, "title");
  const description = (() => {
    const named = /<meta\b[^>]*name\s*=\s*["']description["'][^>]*content\s*=\s*["']([^"']*)["'][^>]*>/i.exec(html)
      ?? /<meta\b[^>]*content\s*=\s*["']([^"']*)["'][^>]*name\s*=\s*["']description["'][^>]*>/i.exec(html);
    return named?.[1]?.trim() ?? "";
  })();
  const h1 = textOf(html, "h1");
  const lower = html.toLowerCase();
  const hasContact = /mailto:|tel:|\bcontact\b|\benquir/i.test(html);
  const hasCta = /<(a|button)\b[^>]*>[\s\S]{0,80}(contact|book|buy|enquir|get started|call|quote|sign up)/i.test(html)
    || /\b(contact us|book now|get a quote|request a quote)\b/i.test(lower);
  const hasViewport = /name\s*=\s*["']viewport["']/i.test(html);
  const images = [...html.matchAll(/<img\b[^>]*>/gi)];
  const missingAlt = images.filter((img) => !/\balt\s*=\s*["'][^"']+["']/i.test(img[0])).length;

  const issues: Finding[] = [];
  const goods: Finding[] = [];

  if (finalUrl.protocol !== "https:") {
    issues.push({
      status: "CRITICAL",
      area: "Technical Quality",
      summary: "The page is not served over HTTPS, so browsers may warn visitors before they read it.",
      meaning: "People may leave before they see the offer, and search engines may treat the site as less trustworthy.",
    });
  } else {
    goods.push({
      status: "WORKING",
      area: "Secure address",
      summary: "The page is served over HTTPS.",
      meaning: "Visitors are less likely to be stopped by a browser warning before they read the offer.",
    });
  }

  if (title.length < 8) {
    issues.push({
      status: "CRITICAL",
      area: "Visibility",
      summary: "The public page does not have a clear title that says what the business is.",
      meaning: "Potential customers may not recognise the business when it appears in search or in a browser tab.",
    });
  } else {
    goods.push({
      status: "WORKING",
      area: "Visibility",
      summary: "The page has a title that search results and browser tabs can show.",
      meaning: "A clear title makes it easier for someone searching to tell what the page is about.",
    });
  }

  if (description.length < 40) {
    issues.push({
      status: "NEEDS WORK",
      area: "SEO Structure",
      summary: "The page does not publish a useful meta description for search listings.",
      meaning: "The website may struggle to win the click even when it is indexed.",
    });
  } else {
    goods.push({
      status: "WORKING",
      area: "SEO Structure",
      summary: "The page includes a meta description that can explain the offer in search.",
      meaning: "Search listings have a short line of copy, which can help a relevant visitor choose the result.",
    });
  }

  if (h1.length < 8) {
    issues.push({
      status: "NEEDS WORK",
      area: "Offer Clarity",
      summary: "The page does not lead with a clear main heading about what is offered.",
      meaning: "Visitors may not decide quickly enough whether the business is relevant to them.",
    });
  } else {
    goods.push({
      status: "WORKING",
      area: "Offer Clarity",
      summary: "Visitors can see a main heading that states what the page is about.",
      meaning: "Clear positioning makes it easier for potential customers to decide whether the business is relevant to them.",
    });
  }

  if (!hasContact) {
    issues.push({
      status: "NEEDS WORK",
      area: "Content Trust",
      summary: "The page we read does not show an obvious email, phone number, or contact path.",
      meaning: "Even good traffic may fail to convert if visitors cannot see how to reach a real business.",
    });
  } else {
    goods.push({
      status: "WORKING",
      area: "Content Trust",
      summary: "The page shows a way for a visitor to reach the business.",
      meaning: "A visible contact path gives people more confidence to continue.",
    });
  }

  if (!hasCta) {
    issues.push({
      status: "NEEDS WORK",
      area: "Conversion",
      summary: "The page does not show a clear next step such as an enquiry, booking, or purchase.",
      meaning: "Visitors who are already interested may leave without becoming customers.",
    });
  } else {
    goods.push({
      status: "WORKING",
      area: "Conversion",
      summary: "The page offers a visible next step.",
      meaning: "A clear action makes it easier for an interested visitor to enquire, book, or buy.",
    });
  }

  if (!hasViewport) {
    issues.push({
      status: "NEEDS WORK",
      area: "Technical Quality",
      summary: "The page does not declare a mobile viewport, so phones may be shown a desktop layout.",
      meaning: "Hidden usability problems can still limit enquiries from people on a phone.",
    });
  }

  if (images.length > 0 && missingAlt >= Math.ceil(images.length / 2)) {
    issues.push({
      status: "NEEDS WORK",
      area: "Technical Quality",
      summary: "Several images on the page do not have alternative text.",
      meaning: "Search engines and some visitors may miss what those images are meant to explain.",
    });
  }

  const findings = [...issues, ...goods].slice(0, 5);
  const overall: FindingStatus = findings.some((item) => item.status === "CRITICAL")
    ? "CRITICAL"
    : findings.some((item) => item.status === "NEEDS WORK")
      ? "NEEDS WORK"
      : "WORKING";
  return { overall, findings };
}

const checkGate = globalThis as typeof globalThis & { __growthCheckRunning?: boolean };

export const runGrowthCheck = createServerFn({ method: "POST" })
  .validator((input: unknown) => {
    const obj = typeof input === "object" && input ? (input as Record<string, unknown>) : {};
    const url = String(obj.url ?? "").trim();
    const html = typeof obj.html === "string" ? obj.html.slice(0, 400_000) : "";
    return { url, html };
  })
  .handler(async ({ data }): Promise<CheckResult & { error?: string }> => {
    if (checkGate.__growthCheckRunning) {
      return {
        overall: "NEEDS WORK",
        findings: [],
        error: "A check is already running. Wait until it finishes, then try again.",
      };
    }
    checkGate.__growthCheckRunning = true;
    try {
      let pageUrl: URL;
      try {
        pageUrl = new URL(data.url);
      } catch {
        return { overall: "NEEDS WORK", findings: [], error: "Enter a website address, such as yourbusiness.com." };
      }
      const refused = await publicWebUrl(pageUrl);
      if (refused) return { overall: "NEEDS WORK", findings: [], error: refused };
      if (data.html && /<(html|head|body|title)\b/i.test(data.html)) {
        return { ...analyse(data.html, pageUrl), source: "pasted" };
      }
      const read = await readPublicPage(data.url);
      if ("html" in read && read.html) return { ...analyse(read.html, read.finalUrl), source: "live" };
      if ("blocked" in read && read.blocked) {
        return { overall: "NEEDS WORK", findings: [], error: read.error };
      }
      const archived = await readArchive(data.url);
      if (archived) return { ...analyse(archived.html, archived.finalUrl), source: "archive" };
      return { overall: "NEEDS WORK", findings: [], error: ("error" in read && read.error) || "The check could not be completed." };
    } finally {
      checkGate.__growthCheckRunning = false;
    }
  });
