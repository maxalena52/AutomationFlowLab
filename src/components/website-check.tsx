import { Link } from "@tanstack/react-router";
import { useId, useState } from "react";
import { FindingCard } from "@/components/finding-card";
import { overallCopy, runGrowthCheck, type Finding, type FindingStatus } from "@/lib/growth-check.functions";

export function WebsiteCheck({ source, id = "website-check" }: { source: string; id?: string }) {
  const fieldId = useId();
  const [url, setUrl] = useState("");
  const [sourceHtml, setSourceHtml] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [result, setResult] = useState<{ overall: FindingStatus; findings: Finding[]; source?: "live" | "archive" | "pasted" } | null>(null);
  const blocked = /security check|paste it below/i.test(error);

  return (
    <div id={id}>
      <form
        className="rounded-xl border border-line bg-surface p-4 sm:p-5"
        onSubmit={async (event) => {
          event.preventDefault();
          setError("");
          setResult(null);
          let parsed: URL;
          try {
            parsed = new URL(url.trim().startsWith("http") ? url.trim() : `https://${url.trim()}`);
          } catch {
            setError("Enter a website address, such as yourbusiness.com.");
            return;
          }
          if (parsed.protocol !== "http:" && parsed.protocol !== "https:") {
            setError("Enter a public website address.");
            return;
          }
          setBusy(true);
          try {
            const data = await runGrowthCheck({ data: { url: parsed.toString(), source, html: sourceHtml } });
            if (data.error || !data.findings?.length || !data.overall) {
              setError(data.error ?? "The check could not be completed.");
            } else {
              setResult({ overall: data.overall, findings: data.findings.slice(0, 5), source: data.source });
            }
          } catch {
            setError("The check could not be completed.");
          } finally {
            setBusy(false);
          }
        }}
      >
        <label htmlFor={fieldId} className="text-sm font-semibold">
          Website address
        </label>
        <div className="mt-2 flex flex-col gap-3 sm:flex-row">
          <input
            id={fieldId}
            name="url"
            type="url"
            inputMode="url"
            autoComplete="url"
            required
            value={url}
            onChange={(event) => setUrl(event.target.value)}
            placeholder="https://yourwebsite.com"
            aria-invalid={error ? true : undefined}
            aria-describedby={error ? `${fieldId}-error` : `${fieldId}-note`}
            className="h-12 w-full rounded-sm border border-line bg-paper px-3 text-base"
          />
          <button
            type="submit"
            disabled={busy}
            className="inline-flex h-12 shrink-0 items-center justify-center rounded-sm bg-primary px-5 text-base font-semibold text-primary-fg sm:min-w-48"
          >
            {busy ? "Checking" : "Check my website"}
          </button>
        </div>
        <p id={`${fieldId}-note`} className="mt-3 text-sm text-muted">
          The address is used to read the public page and is not saved as an account.{" "}
          <Link to="/privacy" className="font-semibold underline decoration-line underline-offset-4">
            Privacy Policy
          </Link>
          .
        </p>
      </form>
      {error ? (
        <p id={`${fieldId}-error`} role="alert" className="mt-3 text-sm text-danger">
          {error}
        </p>
      ) : null}
      {blocked ? (
        <div className="mt-4 rounded-xl border border-line bg-surface p-4">
          <label htmlFor={`${fieldId}-source`} className="text-sm font-semibold">
            Page source
          </label>
          <p className="mt-1 text-sm text-muted">
            In your browser, open the page, then view source (Ctrl+U or Cmd+Option+U), select all, and paste it here.
          </p>
          <textarea
            id={`${fieldId}-source`}
            value={sourceHtml}
            onChange={(event) => setSourceHtml(event.target.value)}
            rows={8}
            className="mt-3 w-full rounded-sm border border-line bg-paper px-3 py-2 font-mono text-xs"
            placeholder="<!DOCTYPE html>..."
          />
          <button
            type="button"
            disabled={busy || sourceHtml.trim().length < 40}
            onClick={async () => {
              const form = document.getElementById(id)?.querySelector("form");
              form?.requestSubmit();
            }}
            className="mt-3 inline-flex h-12 items-center justify-center rounded-sm bg-primary px-5 text-base font-semibold text-primary-fg disabled:opacity-60"
          >
            {busy ? "Checking" : "Check pasted page"}
          </button>
        </div>
      ) : null}
      {result ? (
        <section className="mt-8" aria-live="polite">
          <p className="text-sm font-semibold text-primary">Your website status</p>
          {result.source === "archive" ? (
            <p className="mt-2 text-sm text-muted">The live site blocked the read. This check used the newest public Internet Archive copy of the page.</p>
          ) : null}
          {result.source === "pasted" ? (
            <p className="mt-2 text-sm text-muted">This check used the page source you pasted.</p>
          ) : null}
          <p className="mt-2 font-display text-4xl">{result.overall}</p>
          <p className="mt-3 max-w-2xl text-muted">{overallCopy(result.overall)}</p>
          <div className="mt-6 grid gap-4">
            {result.findings.map((finding) => (
              <FindingCard key={`${finding.area}-${finding.status}`} {...finding} />
            ))}
          </div>
          <div className="mt-8 rounded-xl border border-line bg-paper p-5">
            <h2 className="font-display text-3xl">This is only your initial check.</h2>
            <p className="mt-3 max-w-2xl text-muted">
              We found the issues most deserving your attention first. A full Website Revenue & Growth Audit looks
              deeper into search visibility, conversion, technical health, content, trust, competitors, and growth
              opportunities.
            </p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/audit"
                className="inline-flex h-12 items-center justify-center rounded-sm bg-primary px-5 text-base font-semibold text-primary-fg"
              >
                Get my full website audit
              </Link>
              <Link
                to="/contact"
                search={{ topic: "Website Revenue & Growth Audit" }}
                className="inline-flex h-12 items-center justify-center rounded-sm border border-line bg-surface px-5 text-base font-semibold"
              >
                Talk to Automation Flow Lab
              </Link>
            </div>
          </div>
        </section>
      ) : null}
    </div>
  );
}
