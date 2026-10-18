import { createFileRoute, Link } from "@tanstack/react-router";
import { WebsiteCheck } from "@/components/website-check";

export const Route = createFileRoute("/tools/growth-check")({
  head: () => ({ meta: [{ title: "Website Growth Check — Automation Flow Lab" }] }),
  component: GrowthCheckPage,
});

function GrowthCheckPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-5 py-12 md:py-16">
      <p className="text-sm font-semibold text-primary">
        <Link to="/">Automation Flow Lab</Link>
      </p>
      <h1 className="mt-3 font-display text-4xl md:text-5xl">Website Growth Check</h1>
      <p className="mt-4 text-lg text-muted">
        Find out what's stopping your website from being found, trusted and turning visitors into customers.
      </p>
      <p className="mt-3 text-sm text-muted">
        You get up to five findings. The check is not a full audit, and it does not include a repair guide.
      </p>
      <div className="mt-8">
        <WebsiteCheck source="tool" id="check" />
      </div>
    </div>
  );
}
