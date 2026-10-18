import { createFileRoute } from "@tanstack/react-router";
import { PolicyDocument, policies } from "@/components/policy-document";

export const Route = createFileRoute("/community-standards")({
  head: () => ({ meta: [{ title: "Community Standards — Automation Flow Lab" }] }),
  component: () => <PolicyDocument page={policies.community} />,
});
