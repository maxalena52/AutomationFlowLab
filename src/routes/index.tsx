import { createFileRoute, Link } from "@tanstack/react-router";
import { FindingCard } from "@/components/finding-card";
import { WebsiteCheck } from "@/components/website-check";
import { auditPoints, company, exampleFindings, otherHelp, pillars, process } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Website Growth Check and Business Systems — Automation Flow Lab" },
      { name: "description", content: company.description },
    ],
  }),
  component: Home,
});

const schema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: company.name,
  url: `https://${company.domain}/`,
  email: company.email,
  areaServed: company.country,
  description: company.description,
};

function Home() {
  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="mx-auto w-full max-w-6xl px-5 pb-16 pt-12 md:pb-24 md:pt-20">
        <p className="text-sm font-semibold text-primary">Website Growth Check</p>
        <h1 className="mt-4 max-w-4xl font-display text-4xl leading-tight text-ink md:text-6xl">
          Is your website actually helping your business grow?
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-muted">
          Find out what's stopping your website from being found, trusted and turning visitors into customers.
        </p>
        <p className="mt-3 max-w-2xl text-muted">
          The Website Growth Check is the main service. Automation Flow Lab also provides a full website audit, website improvement, search growth, conversion work and monitoring, plus workflow automation, integration and configuration, SharePoint design and integration, client operation portals, Microsoft 365, Excel, Zoho, analytics and reporting.
        </p>
        <div className="mt-8 max-w-3xl">
          <WebsiteCheck source="homepage" id="check" />
        </div>
        <p className="mt-4 text-sm text-muted">No account required. Get your initial website check in moments.</p>
      </section>

      <section className="border-t border-line" aria-labelledby="missing-heading">
        <div className="mx-auto w-full max-w-6xl px-5 py-16 md:py-20">
          <h2 id="missing-heading" className="font-display text-3xl md:text-4xl">See what your website is missing</h2>
          <p className="mt-3 max-w-2xl text-muted">
            Your Website Growth Check looks for the issues most likely to affect your visibility, credibility, customer experience and growth.
          </p>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {pillars.map((item) => (
              <li key={item.name} className="rounded-xl border border-line bg-surface p-4">
                <h3 className="font-sans text-base font-semibold">{item.name}</h3>
                <p className="mt-2 text-sm text-muted">{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-line" aria-labelledby="example-heading">
        <div className="mx-auto w-full max-w-6xl px-5 py-16 md:py-20">
          <p className="text-sm font-semibold text-primary">Example</p>
          <h2 id="example-heading" className="mt-3 max-w-3xl font-display text-3xl md:text-4xl">
            Your results. Without the technical noise.
          </h2>
          <p className="mt-3 max-w-2xl text-muted">An example of how a finding is written. It is not a result from a real website.</p>
          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            {exampleFindings.map((finding) => (
              <FindingCard key={finding.area} {...finding} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line" aria-labelledby="limit-heading">
        <div className="mx-auto w-full max-w-6xl px-5 py-16 md:py-20">
          <h2 id="limit-heading" className="max-w-3xl font-display text-3xl md:text-4xl">We find what deserves your attention first.</h2>
          <p className="mt-4 max-w-2xl text-lg text-muted">
            The Website Growth Check identifies up to five of the most commercially important issues we find. It is deliberately not a full technical audit.
          </p>
          <p className="mt-3 max-w-2xl text-muted">
            This helps businesses quickly understand where they may be losing visibility, trust, enquiries or revenue.
          </p>
        </div>
      </section>

      <section className="border-t border-line" aria-labelledby="audit-heading">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-16 md:py-20 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <h2 id="audit-heading" className="font-display text-3xl md:text-4xl">Found something worth fixing?</h2>
            <p className="mt-4 text-sm font-semibold text-primary">Website Revenue & Growth Audit</p>
            <p className="mt-3 text-muted">
              The Website Growth Check is only the starting point. Our full Website Revenue & Growth Audit looks deeper into the website, competitors and commercial opportunities to determine what's holding growth back and where the strongest opportunities exist.
            </p>
            <Link to="/audit" className="mt-6 inline-flex h-12 items-center justify-center rounded-sm bg-primary px-5 text-base font-semibold text-primary-fg">
              Get my full website audit
            </Link>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2 lg:col-span-6">
            {auditPoints.map((item) => (
              <li key={item} className="rounded-xl border border-line bg-surface px-4 py-3 text-sm font-semibold">{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-line" aria-labelledby="process-heading">
        <div className="mx-auto w-full max-w-6xl px-5 py-16 md:py-20">
          <h2 id="process-heading" className="max-w-3xl font-display text-3xl md:text-4xl">We don't just find problems. We help fix them.</h2>
          <ol className="mt-10 grid gap-4 md:grid-cols-4">
            {process.map((item, index) => (
              <li key={item.name} className="rounded-xl border border-line bg-surface p-5">
                <p className="font-mono text-sm text-primary">{String(index + 1).padStart(2, "0")}</p>
                <h3 className="mt-3 font-display text-2xl">{item.name}</h3>
                <p className="mt-2 text-sm text-muted">{item.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-t border-line" aria-labelledby="other-heading">
        <div className="mx-auto w-full max-w-6xl px-5 py-16 md:py-20">
          <h2 id="other-heading" className="font-display text-3xl">Other ways we help</h2>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {otherHelp.map((item) => (
              <li key={item.hash}>
                <Link to="/services" hash={item.hash} className="block rounded-xl border border-line bg-surface p-4 hover:border-primary">
                  <h3 className="font-sans text-base font-semibold">{item.name}</h3>
                  <p className="mt-1 text-sm text-muted">{item.text}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-line" aria-labelledby="close-heading">
        <div className="mx-auto w-full max-w-6xl px-5 py-16 md:py-24">
          <h2 id="close-heading" className="max-w-3xl font-display text-3xl md:text-5xl">Your website should do more than exist.</h2>
          <p className="mt-4 text-lg">It should help people:</p>
          <ul className="mt-3 space-y-1 font-display text-2xl">
            <li>Find you.</li>
            <li>Trust you.</li>
            <li>Choose you.</li>
          </ul>
          <p className="mt-4 max-w-xl text-muted">Start by finding out what's getting in the way.</p>
          <div className="mt-8 max-w-3xl">
            <WebsiteCheck source="homepage" id="check-again" />
          </div>
          <p className="mt-8 text-sm text-muted">{company.supporting}</p>
        </div>
      </section>
    </div>
  );
}
