import { createFileRoute, Link } from "@tanstack/react-router";
import { legalIndex } from "@/components/policy-document";

export const Route = createFileRoute("/legal")({
  head: () => ({ meta: [{ title: "Legal and Policies — Automation Flow Lab" }] }),
  component: LegalPage,
});

function LegalPage() {
  return (
    <div className="pb-20">
      <header className="mx-auto w-full max-w-6xl px-5 pb-8 pt-12 md:pt-16">
        <p className="text-sm font-semibold text-primary">Legal and Policies</p>
        <h1 className="mt-3 max-w-3xl font-display text-4xl md:text-5xl">Using Automation Flow Lab</h1>
        <p className="mt-4 max-w-2xl text-lg text-muted">
          Find information about our professional services and self-service tools, how we process information, responsible use and how to contact us.
        </p>
      </header>
      <ul className="mx-auto grid w-full max-w-6xl gap-4 px-5 md:grid-cols-2">
        {legalIndex.map((item) => (
          <li key={`${item.to}-${item.title}`}>
            <Link
              to={item.to as "/privacy"}
              hash={item.hash}
              className="flex h-full flex-col rounded-xl border border-line bg-surface p-6"
            >
              <h2 className="font-display text-2xl">{item.title}</h2>
              <p className="mt-2 text-sm text-muted">{item.text}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
