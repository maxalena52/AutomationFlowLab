import { createFileRoute } from "@tanstack/react-router";
import { EnquiryForm } from "@/components/enquiry-form";
import { tools } from "@/lib/site";
import { Link } from "@tanstack/react-router";

const tool = tools.find((item) => item.slug === "certflow")!;

export const Route = createFileRoute("/tools/certflow")({
  head: () => ({ meta: [{ title: "Certflow — Automation Flow Lab" }] }),
  component: CertflowPage,
});

function CertflowPage() {
  return (
    <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-12 md:grid-cols-12 md:py-16">
      <article className="md:col-span-7">
        <Link to="/tools" className="text-sm font-semibold text-primary">All tools</Link>
        <h1 className="mt-4 font-display text-4xl md:text-5xl">{tool.name}</h1>
        <p className="mt-4 text-lg text-muted">{tool.summary}</p>
        <p className="mt-4 text-sm text-muted">
          Certflow is described here as a service. This website does not run the certificate generator, sign-in, or a send queue.
        </p>
        <h2 className="mt-10 font-display text-2xl">Who it is for</h2>
        <p className="mt-3 text-muted">{tool.audience}</p>
        <h2 className="mt-8 font-display text-2xl">What it is meant to do</h2>
        <p className="mt-3 text-muted">{tool.outcome}</p>
        <h2 className="mt-8 font-display text-2xl">What it includes</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-muted">
          {tool.features.map((feature) => <li key={feature}>{feature}</li>)}
        </ul>
      </article>
      <div className="md:col-span-5">
        <EnquiryForm kind="tool" topic={tool.name} heading="Ask about this tool" intro="Tell us what you want to use it for." />
      </div>
    </div>
  );
}
