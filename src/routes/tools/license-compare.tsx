import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import catalogFile from "@/content/license-catalog.json";

export const Route = createFileRoute("/tools/license-compare")({
  head: () => ({ meta: [{ title: "Microsoft licence comparison — Automation Flow Lab" }] }),
  component: LicenseComparePage,
});

type Product = {
  id: string;
  name: string;
  price: number;
  group: string;
  unit: "user-month" | "pack" | string;
  unitLabel: string;
  seatMin: number | null;
  seatCap: number | null;
  covers: string[];
  note: string;
  features: string[];
};

type Rate = { country: string; currency: string; rate: number };
type Catalog = { source: string; fetchedAt?: string; products: Product[]; rates: Rate[] };

const catalogs = catalogFile as unknown as Record<string, Catalog>;

const regions = [
  { id: "with-teams", label: "Most countries, suites with Teams", detail: "The public commercial list Microsoft publishes in US dollars for suites that include Teams." },
  { id: "no-teams", label: "EEA and Switzerland, suites without Teams", detail: "The public list for suites sold without Teams. Teams is a separate licence there." },
];

const needLabels: Record<string, string> = {
  email: "Mailbox and web apps",
  desktop: "Desktop Word, Excel, and PowerPoint",
  teams: "Teams included in the suite",
  security: "Advanced security",
  devices: "Device management",
  server: "A Windows Server or SQL Server licence",
};

const money = (value: number, currency: string) =>
  new Intl.NumberFormat("en", { style: "currency", currency, maximumFractionDigits: 0 }).format(value);

function compare(input: {
  products: Product[];
  leftId: string;
  rightId: string;
  seats: number;
  budget: number | null;
  needs: string[];
}) {
  const picked = [input.leftId, input.rightId].map((id) => input.products.find((item) => item.id === id)).filter(Boolean) as Product[];
  const seats = Math.max(1, Math.round(input.seats));
  const rows = picked.map((product) => {
    const covers = product.covers.map((id) => needLabels[id]);
    const missing = input.needs.filter((id) => !product.covers.includes(id)).map((id) => needLabels[id]);
    const underMin = product.seatMin != null && seats < product.seatMin;
    const overCap = product.seatCap != null && seats > product.seatCap;
    const seatRule = underMin
      ? `Enterprise suites are for organisations past the Business limit of 300 users. ${seats} is below that.`
      : overCap
        ? `This suite stops at ${product.seatCap} users. ${seats} is over that.`
        : product.group === "Enterprise"
          ? "Quantity is above 300, which is the range these enterprise suites are for."
          : product.seatCap
            ? `Published for 1–${product.seatCap} users.`
            : product.group === "Server"
              ? "Sold as a pack or server licence, not per user."
              : "No 300-user business cap on this suite.";
    const overBudget = product.unit === "user-month" && input.budget != null && product.price > input.budget;
    return {
      ...product,
      covers,
      missing,
      monthly: product.price,
      total: Math.round(product.price * seats * 100) / 100,
      overBudget,
      underMin,
      overCap,
      seatRule,
    };
  });
  const scored = rows.map((row) => {
    let score = 0;
    if (!row.missing.length) score += 50;
    score -= row.missing.length * 15;
    if (row.overBudget) score -= 20;
    if (row.underMin) score -= 30;
    if (row.overCap) score -= 40;
    score -= row.monthly;
    return { ...row, score };
  }).sort((a, b) => b.score - a.score);
  const winner = scored[0];
  const other = scored[1];
  const reasons = [winner.note];
  if (winner.missing.length) reasons.push(`It still does not cover: ${winner.missing.join(", ")}.`);
  else if (input.needs.length) reasons.push("It covers every need you ticked.");
  if (winner.overBudget) reasons.push(`It is above the ${input.budget} per user budget you entered.`);
  if (winner.overCap || winner.underMin) reasons.push(winner.seatRule);
  if (other) {
    const gap = Math.round((other.monthly - winner.monthly) * 100) / 100;
    if (gap > 0) reasons.push(`${other.name} costs ${gap} more per user and ${other.missing.length ? `still misses ${other.missing.join(", ")}` : "does not buy a need you ticked"}.`);
    if (gap < 0) reasons.push(`${other.name} is cheaper, but it misses ${other.missing.join(", ") || "the fit on seats or budget"}.`);
    if (gap === 0) reasons.push(`${other.name} is the same published price, with a weaker fit for what you ticked.`);
  }
  const mixedUnits = picked.length === 2 && picked[0].unit !== picked[1].unit;
  return {
    headline: mixedUnits
      ? `${winner.name} fits more of what you ticked. These are not both a per-user monthly price.`
      : `${winner.name} is the better fit of the two.`,
    reasons,
    rows,
  };
}

function LicenseComparePage() {
  const [region, setRegion] = useState("with-teams");
  const catalog = catalogs[region] ?? catalogs["with-teams"];
  const products = catalog.products;
  const rates = (catalog.rates ?? []).filter((rate) => typeof rate.rate === "number");
  const [left, setLeft] = useState(products[0]?.id ?? "");
  const [right, setRight] = useState(products[1]?.id ?? products[0]?.id ?? "");
  const [seats, setSeats] = useState(10);
  const [budget, setBudget] = useState("");
  const [needs, setNeeds] = useState<string[]>(["email", "desktop"]);
  const [error, setError] = useState("");
  const [result, setResult] = useState<ReturnType<typeof compare> | null>(null);
  const groups = useMemo(() => ["Business", "Enterprise", "Frontline", "Server"].filter((group) => products.some((item) => item.group === group)), [products]);
  const field = "mt-1 h-11 w-full rounded-sm border border-line bg-surface px-3 text-sm";

  function onRegion(next: string) {
    setRegion(next);
    const nextProducts = (catalogs[next] ?? catalogs["with-teams"]).products;
    setLeft(nextProducts[0]?.id ?? "");
    setRight(nextProducts[1]?.id ?? nextProducts[0]?.id ?? "");
    setResult(null);
    setError("");
  }

  return (
    <div className="mx-auto w-full max-w-6xl px-5 py-10">
      <Link to="/tools" className="text-sm font-semibold text-primary">All tools</Link>
      <h1 className="mt-3 font-display text-4xl">Microsoft licence comparison</h1>
      <p className="mt-2 max-w-2xl text-muted">
        Free. The figures are Microsoft’s published commercial prices. Nothing on this page is a quote, and Microsoft does not offer a public price API without a partner login.
      </p>
      <p className="mt-4 max-w-2xl rounded-lg border border-line bg-surface p-4 text-sm text-muted">
        Read this at your own discretion. Prices, taxes, currency, and what a suite includes can change, and they can differ from the price Microsoft or a reseller offers you. Automation Flow Lab is not liable for any loss, cost, or decision that follows from using this comparison.
        {catalog.fetchedAt ? ` List read ${catalog.fetchedAt}.` : ""}
      </p>
      <form
        className="mt-8 grid gap-4 rounded-xl border border-line bg-surface p-5"
        onSubmit={(event) => {
          event.preventDefault();
          if (left === right) {
            setError("Pick two different products.");
            setResult(null);
            return;
          }
          setError("");
          const parsed = budget.trim() ? Number(budget) : null;
          setResult(compare({
            products,
            leftId: left,
            rightId: right,
            seats,
            budget: parsed != null && Number.isFinite(parsed) ? parsed : null,
            needs,
          }));
        }}
      >
        <label className="text-sm font-semibold">
          Where the licences are bought
          <select className={field} value={region} onChange={(event) => onRegion(event.target.value)}>
            {regions.map((item) => <option key={item.id} value={item.id}>{item.label}</option>)}
          </select>
        </label>
        <p className="text-sm text-muted">{regions.find((item) => item.id === region)?.detail}</p>
        <div className="grid gap-3 sm:grid-cols-2">
          <label className="text-sm font-semibold">
            First product
            <select className={field} value={left} onChange={(event) => setLeft(event.target.value)}>
              {groups.map((group) => (
                <optgroup key={group} label={group}>
                  {products.filter((item) => item.group === group).map((item) => <option key={item.id} value={item.id}>{item.name}</option>)}
                </optgroup>
              ))}
            </select>
          </label>
          <label className="text-sm font-semibold">
            Second product
            <select className={field} value={right} onChange={(event) => setRight(event.target.value)}>
              {groups.map((group) => (
                <optgroup key={group} label={group}>
                  {products.filter((item) => item.group === group).map((item) => <option key={item.id} value={item.id}>{item.name}</option>)}
                </optgroup>
              ))}
            </select>
          </label>
          <label className="text-sm font-semibold">
            Quantity
            <input className={field} type="number" min={1} value={seats} onChange={(event) => setSeats(Number(event.target.value))} />
            <span className="mt-1 block text-xs font-normal text-muted">Business suites are published for 1–300 users. Enterprise suites are for above that.</span>
          </label>
          <label className="text-sm font-semibold">
            Budget per user / month (optional)
            <input className={field} inputMode="decimal" value={budget} onChange={(event) => setBudget(event.target.value)} placeholder="Leave blank if you have no cap" />
          </label>
        </div>
        <fieldset>
          <legend className="text-sm font-semibold">What the licence has to cover</legend>
          <div className="mt-2 grid gap-2 sm:grid-cols-2">
            {Object.keys(needLabels).map((id) => (
              <label key={id} className="flex items-center gap-2 text-sm">
                <input
                  type="checkbox"
                  checked={needs.includes(id)}
                  onChange={(event) => setNeeds((current) => event.target.checked ? [...current, id] : current.filter((item) => item !== id))}
                />
                {needLabels[id]}
              </label>
            ))}
          </div>
        </fieldset>
        <button type="submit" disabled={products.length < 2} className="inline-flex h-11 items-center justify-center rounded-sm bg-primary px-4 text-sm font-semibold text-primary-fg">
          Compare
        </button>
      </form>
      {error ? <p className="mt-4 text-sm text-danger">{error}</p> : null}
      {result ? (
        <section className="mt-6 rounded-xl border border-line bg-surface p-5">
          <h2 className="font-display text-2xl">{result.headline}</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-muted">
            {result.reasons.map((line) => <li key={line}>{line}</li>)}
          </ul>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {result.rows.map((row) => (
              <article key={row.id} className="rounded-lg border border-line p-3 text-sm">
                <p className="font-semibold">{row.name}</p>
                <p className="text-muted">{row.group}</p>
                <p className="mt-2">{money(row.monthly, "USD")} {row.unitLabel}</p>
                <ul className="mt-2 space-y-1 text-muted">
                  {rates.map((rate) => (
                    <li key={rate.currency}>
                      {rate.country}: {money(row.monthly * rate.rate, rate.currency)}
                      {row.unit === "user-month" ? " per user / month" : ""}
                    </li>
                  ))}
                </ul>
                <p className="mt-2">{row.note}</p>
                <p className="mt-3 text-sm font-semibold">Published with</p>
                <ul className="mt-1 list-disc space-y-1 pl-5 text-muted">
                  {row.features.map((feature) => <li key={feature}>{feature}</li>)}
                </ul>
                <p className="mt-2 text-muted">Against the boxes you ticked: {row.covers.join(", ") || "none of those."}</p>
                <p className="text-muted">{row.missing.length ? `Does not include: ${row.missing.join(", ")}` : "Covers the needs you ticked."}</p>
                <p className={row.underMin || row.overCap ? "mt-2 font-semibold" : "mt-2 text-muted"}>{row.seatRule}</p>
                <p className="text-muted">
                  {row.unit === "pack"
                    ? "Pack or server price. It is not scored against a per-user budget."
                    : row.overBudget
                      ? "Over the per-user budget you entered."
                      : budget.trim()
                        ? "Inside the per-user budget you entered."
                        : "No per-user budget was set."}
                </p>
              </article>
            ))}
          </div>
          {catalog.source ? (
            <a className="mt-4 inline-flex text-sm font-semibold text-primary" href={catalog.source}>Public list this was read from</a>
          ) : null}
        </section>
      ) : null}
    </div>
  );
}
