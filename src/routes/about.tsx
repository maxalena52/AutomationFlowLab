import { createFileRoute, Link } from "@tanstack/react-router";
import { company, process, serviceGroups } from "@/lib/site";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: [{ title: "About — Automation Flow Lab" }] }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="pb-20">
      <header className="mx-auto w-full max-w-6xl px-5 pb-10 pt-12 md:pt-16">
        <p className="text-sm font-semibold text-primary">About</p>
        <h1 className="mt-3 max-w-3xl font-display text-4xl text-ink md:text-5xl">Find it. Fix it. Grow it.</h1>
        <p className="mt-4 max-w-2xl text-lg text-muted">{company.positioning}</p>
      </header>
      <div className="mx-auto w-full max-w-6xl space-y-10 px-5">
        <section className="max-w-3xl">
          <h2 className="font-display text-2xl">What we do</h2>
          <p className="mt-3 text-muted">
            The first step for most businesses is a Website Growth Check, then a paid audit where the findings justify it. Implementation can be the website itself, or the systems around the work: workflows, Microsoft 365, SharePoint, Excel, Zoho, analytics, portals and monitoring.
          </p>
          <p className="mt-3 text-muted">Automation remains part of the work. It is not the whole of the company.</p>
        </section>
        <section className="max-w-3xl">
          <h2 className="font-display text-2xl">How a website engagement runs</h2>
          <ol className="mt-4 space-y-3 text-muted">
            {process.map((step) => (
              <li key={step.name}>
                <span className="font-semibold text-ink">{step.name}. </span>
                {step.text}
              </li>
            ))}
          </ol>
          <Link to="/tools/growth-check" className="mt-4 inline-flex h-11 items-center font-semibold text-primary">
            Start with the Website Growth Check
          </Link>
        </section>
        <section className="max-w-3xl">
          <h2 className="font-display text-2xl">The work, by outcome</h2>
          <ul className="mt-4 space-y-4">
            {serviceGroups.map((group) => (
              <li key={group.id}>
                <p className="font-semibold">{group.name}</p>
                <p className="text-sm text-muted">{group.items.map((item) => item.name).join(" · ")}</p>
              </li>
            ))}
          </ul>
          <Link to="/services" className="mt-4 inline-flex h-11 items-center font-semibold text-primary">
            See services
          </Link>
        </section>
        <section className="max-w-3xl">
          <h2 className="font-display text-2xl">Contact</h2>
          <p className="mt-3 text-muted">
            Email{" "}
            <a className="font-semibold text-ink underline decoration-line underline-offset-4" href={`mailto:${company.email}`}>
              {company.email}
            </a>{" "}
            or use the contact form.
          </p>
        </section>
      </div>
    </div>
  );
}
