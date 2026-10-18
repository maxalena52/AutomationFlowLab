import { createFileRoute } from "@tanstack/react-router";
import { PolicyDocument, policies } from "@/components/policy-document";

export const Route = createFileRoute("/privacy")({
  head: () => ({ meta: [{ title: "Privacy Policy — Automation Flow Lab" }] }),
  component: () => <PolicyDocument page={policies.privacy} />,
});
