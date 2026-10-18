import { createFileRoute } from "@tanstack/react-router";
import { PolicyDocument, policies } from "@/components/policy-document";

export const Route = createFileRoute("/cookies")({
  head: () => ({ meta: [{ title: "Cookie Policy — Automation Flow Lab" }] }),
  component: () => <PolicyDocument page={policies.cookies} />,
});
