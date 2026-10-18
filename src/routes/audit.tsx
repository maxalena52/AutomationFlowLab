import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/site-shell";
import { auditPagePoints } from "@/lib/site";

export const Route = createFileRoute("/audit")({
  head: () => ({ meta: [{ title: "Website Revenue & Growth Audit — Automation Flow Lab" }] }),
  component: AuditPage,
});

function AuditPage() {
  return (
    <div className="pb-20">
      <PageHeader
        eyebrow="Full audit"
        title="Website Revenue & Growth Audit"
        lede="The Website Growth Check is the starting point. The audit looks deeper into the website, competitors and commercial opportunities, then sets out what is holding growth back."
      />
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <h2 className="font-display text-2xl">What the audit is for</h2>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {auditPagePoints.map((item) => (
              <li key={item} className="rounded-xl border border-line bg-surface px-4 py-3 text-sm font-semibold">{item}</li>
            ))}
          </ul>
          <p className="mt-6 max-w-2xl text-sm text-muted">
            The audit is professional work, quoted before it starts. It does not guarantee a search ranking, a traffic figure, or a revenue increase. It identifies barriers and opportunities so the fix can be scoped properly.
          </p>
          <p className="mt-3 max-w-2xl text-sm text-muted">
            Self-service tools on this website, including the Website Growth Check, are free to use. The audit and any implementation after it are separate professional services.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link to="/contact" search={{ topic: "Website Revenue & Growth Audit" }} className="inline-flex h-12 items-center justify-center rounded-sm bg-primary px-5 text-base font-semibold text-primary-fg">
              Get my full website audit
            </Link>
            <Link to="/tools/growth-check" className="inline-flex h-12 items-center justify-center rounded-sm border border-line bg-surface px-5 text-base font-semibold">
              Run the free check first
            </Link>
          </div>
        </div>
        <aside className="lg:col-span-5">
          <div className="rounded-xl border border-line bg-surface p-5">
            <h2 className="font-display text-2xl">After the audit</h2>
            <ol className="mt-4 space-y-4 text-sm">
              <li>
                <p className="font-semibold">Fix</p>
                <p className="text-muted">Correct the problems affecting trust, visibility and conversion.</p>
              </li>
              <li>
                <p className="font-semibold">Grow</p>
                <p className="text-muted">Improve search visibility, customer journeys and market reach.</p>
              </li>
              <li>
                <p className="font-semibold">Monitor</p>
                <p className="text-muted">Track performance, issues and new opportunities.</p>
              </li>
            </ol>
            <Link to="/pricing" className="mt-6 inline-flex h-11 items-center text-sm font-semibold text-primary">
              See starting prices for other work
            </Link>
          </div>
        </aside>
      </div>
    </div>
  );
}
