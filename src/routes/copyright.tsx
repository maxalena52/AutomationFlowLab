import { createFileRoute } from "@tanstack/react-router";
import { PolicyDocument, policies } from "@/components/policy-document";

export const Route = createFileRoute("/copyright")({
  head: () => ({ meta: [{ title: "Copyright Policy — Automation Flow Lab" }] }),
  component: () => <PolicyDocument page={policies.copyright} />,
});
