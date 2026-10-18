import { Link } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import { company } from "@/lib/site";

const fieldClass = "h-11 w-full rounded-sm border border-line bg-surface px-3 font-sans text-base text-ink placeholder:text-muted";
const areaClass = "min-h-32 w-full rounded-sm border border-line bg-surface px-3 py-3 font-sans text-base text-ink placeholder:text-muted";

const plans = [
  { id: "care", label: "Care — one system" },
  { id: "operations", label: "Operations — several systems" },
];

function Field({
  id,
  label,
  error,
  hint,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  hint?: string;
  children: ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block font-sans text-sm font-semibold text-ink">
        {label}
      </label>
      {children}
      {hint ? <p className="mt-1 text-sm text-muted">{hint}</p> : null}
      {error ? (
        <p className="mt-1 text-sm text-danger" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}

export function EnquiryForm({
  kind,
  topic = "",
  plan = "",
  heading = "Send an enquiry",
  intro,
}: {
  kind: "contact" | "custom" | "plan" | "tool";
  topic?: string;
  plan?: string;
  heading?: string;
  intro?: string;
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [organisation, setOrganisation] = useState("");
  const [subject, setSubject] = useState(topic);
  const [chosenPlan, setChosenPlan] = useState(plan);
  const [problem, setProblem] = useState("");
  const [tools, setTools] = useState("");
  const [outcome, setOutcome] = useState("");
  const [deadline, setDeadline] = useState("");
  const [budget, setBudget] = useState("");
  const [message, setMessage] = useState("");
  const [consent, setConsent] = useState(false);
  const [honeypot, setHoneypot] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formError, setFormError] = useState("");
  const [sent, setSent] = useState(false);

  useEffect(() => setSubject(topic), [topic]);
  useEffect(() => setChosenPlan(plan), [plan]);

  if (sent) {
    return (
      <div className="rounded-xl border border-line bg-surface p-6" role="status">
        <h2 className="font-display text-2xl">Enquiry ready to send</h2>
        <p className="mt-3 text-muted">
          Your email program should open with this enquiry addressed to{" "}
          <a className="font-semibold text-ink underline decoration-line underline-offset-4" href={`mailto:${company.email}`}>
            {company.email}
          </a>
          . Send that email to complete the request. Nothing is saved as an account on this website.
        </p>
      </div>
    );
  }

  function submit(event: React.FormEvent) {
    event.preventDefault();
    const next: Record<string, string> = {};
    if (!name.trim()) next.name = "Enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) next.email = "Enter an email address we can reply to.";
    if (kind === "contact" && !subject.trim()) next.topic = "Say what this is about.";
    if (kind === "plan" && !chosenPlan) next.plan = "Choose a plan.";
    if (kind === "custom") {
      if (!problem.trim()) next.businessProblem = "Describe the business problem.";
      if (!tools.trim()) next.existingTools = "Name the tools you use, or say you are starting from scratch.";
      if (!outcome.trim()) next.desiredOutcome = "Describe the outcome you want.";
      if (!deadline.trim()) next.deadline = "Give a date, a month, or “no fixed date”.";
    }
    if (kind !== "custom" && !message.trim()) next.message = "Write a short message.";
    if (!consent) next.consent = "Confirm that we may use these details to reply.";
    setErrors(next);
    if (Object.keys(next).length) {
      setFormError("");
      return;
    }
    if (honeypot) {
      setSent(true);
      return;
    }
    const lines = [
      `Name: ${name.trim()}`,
      `Email: ${email.trim()}`,
      phone.trim() ? `Phone: ${phone.trim()}` : "",
      organisation.trim() ? `Organisation: ${organisation.trim()}` : "",
      kind === "contact" || kind === "tool" ? `Topic: ${subject.trim()}` : "",
      kind === "plan" ? `Plan: ${chosenPlan}` : "",
      kind === "custom" ? `Business problem: ${problem.trim()}` : "",
      kind === "custom" ? `Existing tools: ${tools.trim()}` : "",
      kind === "custom" ? `Desired outcome: ${outcome.trim()}` : "",
      kind === "custom" ? `Deadline: ${deadline.trim()}` : "",
      kind === "custom" && budget.trim() ? `Budget: ${budget.trim()}` : "",
      "",
      message.trim(),
    ].filter(Boolean);
    const mailSubject = encodeURIComponent(
      kind === "plan" ? `Support plan enquiry — ${chosenPlan}` : `Enquiry — ${subject.trim() || kind}`,
    );
    const href = `mailto:${company.email}?subject=${mailSubject}&body=${encodeURIComponent(lines.join("\n"))}`;
    window.location.href = href;
    setFormError("");
    setSent(true);
  }

  return (
    <form className="relative rounded-xl border border-line bg-surface p-6" onSubmit={submit} noValidate>
      <h2 className="font-display text-2xl">{heading}</h2>
      {intro ? <p className="mt-2 text-muted">{intro}</p> : null}
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label>
          Website
          <input value={honeypot} onChange={(event) => setHoneypot(event.target.value)} tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      <div className="mt-6 grid gap-4">
        <Field id="enquiry-name" label="Name" error={errors.name}>
          <input id="enquiry-name" name="name" autoComplete="name" value={name} aria-invalid={!!errors.name} onChange={(event) => setName(event.target.value)} className={fieldClass} />
        </Field>
        <Field id="enquiry-email" label="Email" error={errors.email}>
          <input id="enquiry-email" name="email" type="email" autoComplete="email" inputMode="email" value={email} aria-invalid={!!errors.email} onChange={(event) => setEmail(event.target.value)} className={fieldClass} />
        </Field>
        <Field id="enquiry-phone" label="Phone (optional)" error={errors.phone}>
          <input id="enquiry-phone" name="phone" type="tel" autoComplete="tel" value={phone} onChange={(event) => setPhone(event.target.value)} className={fieldClass} />
        </Field>
        <Field id="enquiry-org" label="Organisation (optional)">
          <input id="enquiry-org" name="organisation" autoComplete="organization" value={organisation} onChange={(event) => setOrganisation(event.target.value)} className={fieldClass} />
        </Field>
        {kind === "contact" ? (
          <Field id="enquiry-topic" label="What is this about?" error={errors.topic}>
            <input id="enquiry-topic" value={subject} onChange={(event) => setSubject(event.target.value)} className={fieldClass} />
          </Field>
        ) : null}
        {kind === "plan" ? (
          <Field id="enquiry-plan" label="Plan" error={errors.plan}>
            <select id="enquiry-plan" className={fieldClass} value={chosenPlan} aria-invalid={!!errors.plan} onChange={(event) => setChosenPlan(event.target.value)}>
              <option value="">Choose a plan</option>
              {plans.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.label}
                </option>
              ))}
            </select>
          </Field>
        ) : null}
        {kind === "custom" ? (
          <>
            <Field id="enquiry-problem" label="Business problem" error={errors.businessProblem}>
              <textarea id="enquiry-problem" value={problem} aria-invalid={!!errors.businessProblem} onChange={(event) => setProblem(event.target.value)} className={areaClass} />
            </Field>
            <Field id="enquiry-tools" label="Existing tools" error={errors.existingTools} hint="Name what you use today, or say that you are starting from scratch.">
              <textarea id="enquiry-tools" value={tools} aria-invalid={!!errors.existingTools} onChange={(event) => setTools(event.target.value)} className={areaClass} />
            </Field>
            <Field id="enquiry-outcome" label="Desired outcome" error={errors.desiredOutcome}>
              <textarea id="enquiry-outcome" value={outcome} aria-invalid={!!errors.desiredOutcome} onChange={(event) => setOutcome(event.target.value)} className={areaClass} />
            </Field>
            <Field id="enquiry-deadline" label="Deadline" error={errors.deadline} hint="A date, a month, or “no fixed date”.">
              <input id="enquiry-deadline" value={deadline} aria-invalid={!!errors.deadline} onChange={(event) => setDeadline(event.target.value)} className={fieldClass} />
            </Field>
            <Field id="enquiry-budget" label="Budget range (optional)" hint="Leave this blank if you do not have one.">
              <input id="enquiry-budget" value={budget} onChange={(event) => setBudget(event.target.value)} className={fieldClass} />
            </Field>
          </>
        ) : null}
        <Field id="enquiry-message" label={kind === "custom" ? "Anything else (optional)" : "Message"} error={errors.message}>
          <textarea id="enquiry-message" value={message} aria-invalid={!!errors.message} onChange={(event) => setMessage(event.target.value)} className={areaClass} />
        </Field>
        <div>
          <label className="flex items-start gap-3 text-sm text-ink">
            <input type="checkbox" className="mt-1 size-5 accent-primary" checked={consent} onChange={(event) => setConsent(event.target.checked)} />
            <span>
              I agree that Automation Flow Lab may use these details to reply to this enquiry. This is not consent to marketing.{" "}
              <Link to="/privacy" className="font-semibold underline decoration-line underline-offset-4">
                Privacy Policy
              </Link>
              .
            </span>
          </label>
          {errors.consent ? <p className="mt-1 text-sm text-danger">{errors.consent}</p> : null}
          <p className="mt-3 text-sm text-muted">
            This website sends the enquiry as an email to {company.email}. It is not saved as an account. To ask about a
            message you already sent, email that address.
          </p>
        </div>
        {formError ? (
          <p className="text-sm text-danger" role="alert">
            {formError}
          </p>
        ) : null}
        <button type="submit" className="inline-flex h-12 items-center justify-center rounded-sm bg-primary px-5 text-base font-semibold text-primary-fg">
          Send enquiry
        </button>
      </div>
    </form>
  );
}
