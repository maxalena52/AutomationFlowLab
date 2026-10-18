import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/site-shell";
import { tools } from "@/lib/site";

export const Route = createFileRoute("/tools/")({
  head: () => ({ meta: [{ title: "Tools — Automation Flow Lab" }] }),
  component: ToolsPage,
});

const href = {
  certflow: "/tools/certflow",
  "growth-check": "/tools/growth-check",
  "license-compare": "/tools/license-compare",
  "zoho-fit": "/tools/zoho-fit",
} as const;

function ToolsPage() {
  return (
    <div className="pb-20">
      <PageHeader
        eyebrow="Tools"
        title="Tools"
        lede="Practical tools from Automation Flow Lab to help businesses make better technology and growth decisions."
      />
      <ul className="mx-auto grid w-full max-w-6xl gap-4 px-5 md:grid-cols-2">
        {tools.map((tool) => (
          <li key={tool.slug} className="flex flex-col rounded-xl border border-line bg-surface p-6">
            <h2 className="font-display text-2xl">{tool.name}</h2>
            <p className="mt-3 flex-1 text-sm text-muted">{tool.summary}</p>
            <Link to={href[tool.slug as keyof typeof href]} className="mt-5 inline-flex h-11 items-center font-semibold text-primary">
              Open {tool.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
