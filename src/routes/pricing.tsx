import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/site-shell";
import { monthlyPrices, oneOffPrices } from "@/lib/site";

export const Route = createFileRoute("/pricing")({
  head: () => ({ meta: [{ title: "Pricing — Automation Flow Lab" }] }),
  component: PricingPage,
});

const how = [
  { title: "Tell us the problem", text: "Describe what is happening, what you use now, and what you want to improve. You do not need to write a technical specification." },
  { title: "Receive a scope and quote", text: "We confirm what we will deliver, the fee, the payment stages, and anything we need from your team." },
  { title: "Decide on support", text: "Once the work is handed over, you can manage it yourself or ask us to look after the named systems on a monthly plan." },
];

const faqs = [
  { q: "Do I have to take a support plan after a build?", a: "No. Support is optional and priced separately." },
  { q: "Can you fix one problem without rebuilding everything?", a: "Yes. Excel repairs, analytics fixes, and automation troubleshooting can be scoped as individual jobs." },
  { q: "Why is a custom webapp quoted individually?", a: "An app for one internal task has a different scope from a portal with logins, permissions, integrations, and ongoing usage. Scoping establishes what you actually need before we price the build." },
  { q: "Can you support systems you did not build?", a: "Often, yes. We first need to see how they are configured, who owns them, and what access is available. We will tell you if an assessment is needed before support starts." },
  { q: "Are software subscriptions included?", a: "No, unless your written quote says otherwise. Licences, hosting, and usage-based services remain visible costs so you can see what you are paying for." },
];

function PricingPage() {
  return (
    <div className="pb-20">
      <PageHeader
        eyebrow="Pricing"
        title="Clear starting prices for practical business systems."
        lede="Tell us what you need, and we’ll confirm the final scope and price before work begins. Website growth work is quoted from the audit. Other starting prices are below."
      />
      <div className="mx-auto w-full max-w-6xl space-y-4 px-5">
        <p className="max-w-3xl text-sm text-muted">
          Automation Flow Lab’s self-service checks on this website are free to use. Professional services are separately quoted and charged under an accepted proposal or service agreement. Online payment is not on this website.
        </p>
        <p className="max-w-3xl text-sm text-muted">
          <span className="font-semibold text-ink">Future prices — not currently effective. </span>
          Paid plans may be introduced in future. You will be informed and asked to agree before any charges apply.
        </p>
      </div>
      <section className="mx-auto w-full max-w-6xl px-5" aria-labelledby="services-price-heading">
        <h2 id="services-price-heading" className="font-display text-3xl">One-off services</h2>
        <div className="mt-6 overflow-x-auto rounded-xl border border-line">
          <table className="w-full min-w-[36rem] text-left text-sm">
            <caption className="sr-only">Starting prices for one-off services</caption>
            <thead className="bg-surface">
              <tr>
                <th scope="col" className="px-4 py-3 font-semibold">Service</th>
                <th scope="col" className="px-4 py-3 font-semibold">Price</th>
              </tr>
            </thead>
            <tbody>
              {oneOffPrices.map(([name, price]) => (
                <tr key={name} className="border-t border-line">
                  <th scope="row" className="px-4 py-3 font-semibold">{name}</th>
                  <td className="px-4 py-3 text-muted">{price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 max-w-3xl text-sm text-muted">
          A starting price applies to a clearly defined piece of work. We will give you a written quote if the job needs more systems, users, data cleanup, or development than the starting scope allows.
        </p>
        <Link to="/custom-builds" className="mt-4 inline-flex h-11 items-center font-semibold text-primary">
          Request a project quote
        </Link>
      </section>
      <section className="mx-auto mt-16 w-full max-w-6xl px-5" aria-labelledby="support-price-heading">
        <h2 id="support-price-heading" className="font-display text-3xl">Monthly support</h2>
        <p className="mt-3 max-w-3xl text-muted">
          Your build is a one-off project. If you want us to maintain it, investigate issues, and make small changes afterwards, choose a monthly support plan.
        </p>
        <div className="mt-6 overflow-x-auto rounded-xl border border-line">
          <table className="w-full min-w-[40rem] text-left text-sm">
            <caption className="sr-only">Monthly support plans</caption>
            <thead className="bg-surface">
              <tr>
                <th scope="col" className="px-4 py-3 font-semibold">Plan</th>
                <th scope="col" className="px-4 py-3 font-semibold">Price</th>
                <th scope="col" className="px-4 py-3 font-semibold">Covers</th>
              </tr>
            </thead>
            <tbody>
              {monthlyPrices.map(([name, price, covers]) => (
                <tr key={name} className="border-t border-line align-top">
                  <th scope="row" className="px-4 py-3 font-semibold">{name}</th>
                  <td className="px-4 py-3 text-muted">{price}</td>
                  <td className="px-4 py-3 text-muted">{covers}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 max-w-3xl text-sm text-muted">
          Your support agreement will list the systems covered and the work included. Support is optional after a build.
        </p>
        <Link to="/support-plans" search={{ plan: "" }} hash="request" className="mt-4 inline-flex h-11 items-center font-semibold text-primary">
          Ask about a support plan
        </Link>
      </section>
      <section className="mx-auto mt-16 w-full max-w-6xl px-5" aria-labelledby="how-heading">
        <h2 id="how-heading" className="font-display text-3xl">How pricing works</h2>
        <ol className="mt-6 max-w-3xl space-y-5">
          {how.map((item, index) => (
            <li key={item.title}>
              <p className="font-mono text-sm text-primary">{String(index + 1).padStart(2, "0")}</p>
              <h3 className="mt-1 font-semibold">{item.title}</h3>
              <p className="mt-1 text-sm text-muted">{item.text}</p>
            </li>
          ))}
        </ol>
        <div className="mt-8 max-w-3xl space-y-4 text-sm text-muted">
          <p>Prices are in South African rand and are subject to terms and conditions. Final project prices depend on the agreed scope. Third-party software, hosting, and usage fees are separate unless included in your quote. VAT applies where required.</p>
          <p>Support hours apply to the systems named in your agreement and do not roll over. A response target, where one is agreed, means we will acknowledge and assess the issue within that time; it is not a promise that every issue will be resolved by then. No general support timetable is promised on this page.</p>
          <p>New features, major changes, and work on systems outside your plan receive a separate quote. Additional support time is R1,500 per hour, approved by you before it is used. If we did not build a system, we may need to assess it before confirming its support plan and price.</p>
          <p>Project quotes and support fees exclude third-party licences, hosting, and usage charges unless the quote expressly includes them. VAT is added if applicable. We confirm payment terms and any post-launch defect period in the project agreement.</p>
        </div>
      </section>
      <section className="mx-auto mt-16 w-full max-w-6xl px-5" aria-labelledby="faq-heading">
        <h2 id="faq-heading" className="font-display text-3xl">Frequently asked questions</h2>
        <div className="mt-6 max-w-3xl divide-y divide-line border-y border-line">
          {faqs.map((item) => (
            <details key={item.q} className="group py-4">
              <summary className="font-semibold">{item.q}</summary>
              <p className="mt-2 text-sm text-muted">{item.a}</p>
            </details>
          ))}
        </div>
      </section>
      <section className="mx-auto mt-16 w-full max-w-6xl px-5">
        <h2 className="font-display text-3xl">Bring us the process that is slowing you down</h2>
        <p className="mt-3 max-w-2xl text-muted">
          Tell us what breaks, what gets repeated, or what your team has outgrown. We will suggest a defined first step and give you a price before work starts.
        </p>
        <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
          <Link to="/custom-builds" className="inline-flex h-11 items-center font-semibold text-primary">Start a project enquiry</Link>
          <Link to="/support-plans" search={{ plan: "" }} hash="request" className="inline-flex h-11 items-center font-semibold text-primary">Request monthly support</Link>
        </div>
      </section>
    </div>
  );
}
