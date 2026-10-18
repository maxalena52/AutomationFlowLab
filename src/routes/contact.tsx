import { createFileRoute } from "@tanstack/react-router";
import { EnquiryForm } from "@/components/enquiry-form";
import { PolicyDocument, policies } from "@/components/policy-document";

export const Route = createFileRoute("/contact")({
  validateSearch: (search: Record<string, unknown>) => ({
    topic: typeof search.topic === "string" ? search.topic : "",
  }),
  head: () => ({ meta: [{ title: "Contact — Automation Flow Lab" }] }),
  component: ContactPage,
});

function ContactPage() {
  const { topic } = Route.useSearch();
  return (
    <div>
      <PolicyDocument page={policies.contact} />
      <div className="mx-auto -mt-8 w-full max-w-3xl px-5 pb-20">
        <EnquiryForm
          kind="contact"
          topic={topic}
          heading="Send an enquiry"
          intro={
            topic
              ? `This form is prefilled for “${topic}”. Change that if it is not right. An enquiry does not create a payment obligation.`
              : "Use this form for a service enquiry or a complaint. An enquiry does not create a payment obligation. Do not include passwords, tokens or card details."
          }
        />
      </div>
    </div>
  );
}
