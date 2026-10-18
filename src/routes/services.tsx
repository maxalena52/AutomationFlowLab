import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/site-shell";
import { serviceGroups } from "@/lib/site";

export const Route = createFileRoute("/services")({
  head: () => ({ meta: [{ title: "Services — Automation Flow Lab" }] }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <div className="pb-20">
      <PageHeader
        eyebrow="Services"
        title="Help organised around the result"
        lede="The main service is the Website Growth Check. Around it: a full website audit, search growth, conversion and monitoring, then workflow automation, integration and configuration, SharePoint design and integration, client operation portals, Microsoft 365, Excel, Zoho, analytics and reporting."
      />
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-5">
        {serviceGroups.map((group) => (
          <section key={group.id} aria-labelledby={`${group.id}-heading`}>
            <h2 id={`${group.id}-heading`} className="font-display text-3xl">{group.name}</h2>
            <ul className="mt-4 divide-y divide-line border-y border-line">
              {group.items.map((item) => (
                <li key={item.slug} id={item.slug} className="scroll-mt-24 grid gap-2 py-4 sm:grid-cols-12 sm:items-center">
                  <div className="sm:col-span-8">
                    <h3 className="font-sans text-base font-semibold">{item.name}</h3>
                    <p className="mt-1 text-sm text-muted">{item.summary}</p>
                  </div>
                  <div className="flex gap-4 sm:col-span-4 sm:justify-end">
                    {item.href ? (
                      <Link to="/audit" className="inline-flex h-11 items-center text-sm font-semibold text-primary">
                        Read the audit
                      </Link>
                    ) : null}
                    <Link to="/contact" search={{ topic: item.enquiryTopic }} className="inline-flex h-11 items-center text-sm font-semibold text-primary">
                      Enquire
                    </Link>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        ))}
        <p className="max-w-2xl text-sm text-muted">
          Starting prices for defined pieces of work are on the <Link to="/pricing" className="font-semibold text-primary">pricing</Link> page. A final fee is confirmed in writing. We do not guarantee a ranking, a traffic number, or a revenue figure.
        </p>
      </div>
    </div>
  );
}
