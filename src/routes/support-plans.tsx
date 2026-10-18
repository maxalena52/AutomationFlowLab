import { createFileRoute, Link } from "@tanstack/react-router";
import { EnquiryForm } from "@/components/enquiry-form";
import { PageHeader } from "@/components/site-shell";
import { supportDisclaimer, supportPlans } from "@/lib/site";

export const Route = createFileRoute("/support-plans")({
  validateSearch: (search: Record<string, unknown>) => ({
    plan: typeof search.plan === "string" ? search.plan : "",
  }),
  head: () => ({ meta: [{ title: "Support Plans — Automation Flow Lab" }] }),
  component: SupportPlansPage,
});

function SupportPlansPage() {
  const { plan } = Route.useSearch();
  return (
    <div className="pb-20">
      <PageHeader
        eyebrow="Support Plans"
        title="Stay on after the build, if you want to"
        lede="Care covers one system. Operations covers connected systems. Starting prices are on the Pricing page. The agreement is what makes a plan binding."
      />
      <p className="mx-auto -mt-6 w-full max-w-6xl px-5 text-sm">
        <Link to="/pricing" className="font-semibold text-primary">See starting prices</Link>
      </p>
      <ul className="mx-auto mt-8 grid w-full max-w-6xl gap-4 px-5 md:grid-cols-2">
        {supportPlans.map((item) => (
          <li key={item.id} className="flex flex-col rounded-xl border border-line bg-surface p-6">
            <h2 className="font-display text-3xl">{item.name}</h2>
            <p className="mt-2 text-muted">{item.for}</p>
            <h3 className="mt-5 font-sans text-sm font-semibold">Proposed inclusions</h3>
            <ul className="mt-2 list-disc space-y-2 pl-5 text-sm text-muted">
              {item.includes.map((line) => <li key={line}>{line}</li>)}
            </ul>
            <h3 className="mt-5 font-sans text-sm font-semibold">Not in this scope</h3>
            <ul className="mt-2 list-disc space-y-2 pl-5 text-sm text-muted">
              {item.notIncluded.map((line) => <li key={line}>{line}</li>)}
            </ul>
            <Link to="/support-plans" search={{ plan: item.id }} hash="request" className="mt-6 inline-flex h-11 items-center font-semibold text-primary">
              Request {item.name}
            </Link>
          </li>
        ))}
      </ul>
      <p className="mx-auto mt-8 w-full max-w-6xl px-5 text-sm text-muted">{supportDisclaimer}</p>
      <div id="request" className="mx-auto mt-10 w-full max-w-6xl scroll-mt-24 px-5">
        <EnquiryForm
          kind="plan"
          plan={plan}
          heading="Request a plan"
          intro="Say which systems you want looked after. We will reply with what a plan would cover. We will not quote a response time or a fee on this form."
        />
      </div>
    </div>
  );
}
