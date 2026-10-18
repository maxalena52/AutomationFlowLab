import type { FindingStatus } from "@/lib/growth-check.functions";

const badge: Record<FindingStatus, string> = {
  CRITICAL: "bg-primary text-primary-fg",
  "NEEDS WORK": "border border-primary text-primary",
  WORKING: "border border-line text-ink",
};

export function StatusBadge({ status }: { status: FindingStatus }) {
  return (
    <span className={`inline-flex rounded-sm px-2 py-1 text-xs font-semibold ${badge[status]}`}>{status}</span>
  );
}

export function FindingCard({
  status,
  area,
  summary,
  meaning,
}: {
  status: FindingStatus;
  area: string;
  summary: string;
  meaning: string;
}) {
  return (
    <article className="rounded-xl border border-line bg-surface p-5">
      <div className="flex flex-wrap items-center gap-3">
        <StatusBadge status={status} />
        <h3 className="font-sans text-base font-semibold">{area}</h3>
      </div>
      <p className="mt-3 text-sm">{summary}</p>
      <p className="mt-3 text-sm font-semibold">What this may mean</p>
      <p className="mt-1 text-sm text-muted">{meaning}</p>
    </article>
  );
}
