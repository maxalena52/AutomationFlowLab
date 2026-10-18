import { createFileRoute } from "@tanstack/react-router";
import { PolicyDocument, policies } from "@/components/policy-document";

export const Route = createFileRoute("/legal-safety")({
  head: () => ({ meta: [{ title: "Legal and Safety — Automation Flow Lab" }] }),
  component: () => <PolicyDocument page={policies.safety} />,
});
