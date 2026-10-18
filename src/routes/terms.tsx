import { createFileRoute } from "@tanstack/react-router";
import { PolicyDocument, policies } from "@/components/policy-document";

export const Route = createFileRoute("/terms")({
  head: () => ({ meta: [{ title: "Terms of Service — Automation Flow Lab" }] }),
  component: () => <PolicyDocument page={policies.terms} />,
});
