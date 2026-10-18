import { i as __toESM } from "../_runtime.mjs";
import { i as company } from "./site-BaGvWwC4.mjs";
import { J as require_react, x as require_jsx_runtime, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/enquiry-form-O-rF8n8U.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var fieldClass = "h-11 w-full rounded-sm border border-line bg-surface px-3 font-sans text-base text-ink placeholder:text-muted";
var areaClass = "min-h-32 w-full rounded-sm border border-line bg-surface px-3 py-3 font-sans text-base text-ink placeholder:text-muted";
var plans = [{
	id: "care",
	label: "Care — one system"
}, {
	id: "operations",
	label: "Operations — several systems"
}];
function Field({ id, label, error, hint, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
			htmlFor: id,
			className: "mb-1.5 block font-sans text-sm font-semibold text-ink",
			children: label
		}),
		children,
		hint ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-1 text-sm text-muted",
			children: hint
		}) : null,
		error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-1 text-sm text-danger",
			role: "alert",
			children: error
		}) : null
	] });
}
function EnquiryForm({ kind, topic = "", plan = "", heading = "Send an enquiry", intro }) {
	const [name, setName] = (0, import_react.useState)("");
	const [email, setEmail] = (0, import_react.useState)("");
	const [phone, setPhone] = (0, import_react.useState)("");
	const [organisation, setOrganisation] = (0, import_react.useState)("");
	const [subject, setSubject] = (0, import_react.useState)(topic);
	const [chosenPlan, setChosenPlan] = (0, import_react.useState)(plan);
	const [problem, setProblem] = (0, import_react.useState)("");
	const [tools, setTools] = (0, import_react.useState)("");
	const [outcome, setOutcome] = (0, import_react.useState)("");
	const [deadline, setDeadline] = (0, import_react.useState)("");
	const [budget, setBudget] = (0, import_react.useState)("");
	const [message, setMessage] = (0, import_react.useState)("");
	const [consent, setConsent] = (0, import_react.useState)(false);
	const [honeypot, setHoneypot] = (0, import_react.useState)("");
	const [errors, setErrors] = (0, import_react.useState)({});
	const [formError, setFormError] = (0, import_react.useState)("");
	const [sent, setSent] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => setSubject(topic), [topic]);
	(0, import_react.useEffect)(() => setChosenPlan(plan), [plan]);
	if (sent) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-xl border border-line bg-surface p-6",
		role: "status",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "font-display text-2xl",
			children: "Enquiry ready to send"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-3 text-muted",
			children: "Your email program should open with this enquiry. Send that email to complete the request. Nothing is saved as an account on this website."
		})]
	});
	function submit(event) {
		event.preventDefault();
		const next = {};
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
			message.trim()
		].filter(Boolean);
		const mailSubject = encodeURIComponent(kind === "plan" ? `Support plan enquiry — ${chosenPlan}` : `Enquiry — ${subject.trim() || kind}`);
		const href = `mailto:${company.email}?subject=${mailSubject}&body=${encodeURIComponent(lines.join("\n"))}`;
		window.location.href = href;
		setFormError("");
		setSent(true);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		className: "relative rounded-xl border border-line bg-surface p-6",
		onSubmit: submit,
		noValidate: true,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-2xl",
				children: heading
			}),
			intro ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-muted",
				children: intro
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute -left-[9999px]",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: ["Website", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					value: honeypot,
					onChange: (event) => setHoneypot(event.target.value),
					tabIndex: -1,
					autoComplete: "off"
				})] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 grid gap-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						id: "enquiry-name",
						label: "Name",
						error: errors.name,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							id: "enquiry-name",
							name: "name",
							autoComplete: "name",
							value: name,
							"aria-invalid": !!errors.name,
							onChange: (event) => setName(event.target.value),
							className: fieldClass
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						id: "enquiry-email",
						label: "Email",
						error: errors.email,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							id: "enquiry-email",
							name: "email",
							type: "email",
							autoComplete: "email",
							inputMode: "email",
							value: email,
							"aria-invalid": !!errors.email,
							onChange: (event) => setEmail(event.target.value),
							className: fieldClass
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						id: "enquiry-phone",
						label: "Phone (optional)",
						error: errors.phone,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							id: "enquiry-phone",
							name: "phone",
							type: "tel",
							autoComplete: "tel",
							value: phone,
							onChange: (event) => setPhone(event.target.value),
							className: fieldClass
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						id: "enquiry-org",
						label: "Organisation (optional)",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							id: "enquiry-org",
							name: "organisation",
							autoComplete: "organization",
							value: organisation,
							onChange: (event) => setOrganisation(event.target.value),
							className: fieldClass
						})
					}),
					kind === "contact" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						id: "enquiry-topic",
						label: "What is this about?",
						error: errors.topic,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							id: "enquiry-topic",
							value: subject,
							onChange: (event) => setSubject(event.target.value),
							className: fieldClass
						})
					}) : null,
					kind === "plan" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						id: "enquiry-plan",
						label: "Plan",
						error: errors.plan,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
							id: "enquiry-plan",
							className: fieldClass,
							value: chosenPlan,
							"aria-invalid": !!errors.plan,
							onChange: (event) => setChosenPlan(event.target.value),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "",
								children: "Choose a plan"
							}), plans.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: item.id,
								children: item.label
							}, item.id))]
						})
					}) : null,
					kind === "custom" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							id: "enquiry-problem",
							label: "Business problem",
							error: errors.businessProblem,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								id: "enquiry-problem",
								value: problem,
								"aria-invalid": !!errors.businessProblem,
								onChange: (event) => setProblem(event.target.value),
								className: areaClass
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							id: "enquiry-tools",
							label: "Existing tools",
							error: errors.existingTools,
							hint: "Name what you use today, or say that you are starting from scratch.",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								id: "enquiry-tools",
								value: tools,
								"aria-invalid": !!errors.existingTools,
								onChange: (event) => setTools(event.target.value),
								className: areaClass
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							id: "enquiry-outcome",
							label: "Desired outcome",
							error: errors.desiredOutcome,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								id: "enquiry-outcome",
								value: outcome,
								"aria-invalid": !!errors.desiredOutcome,
								onChange: (event) => setOutcome(event.target.value),
								className: areaClass
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							id: "enquiry-deadline",
							label: "Deadline",
							error: errors.deadline,
							hint: "A date, a month, or “no fixed date”.",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								id: "enquiry-deadline",
								value: deadline,
								"aria-invalid": !!errors.deadline,
								onChange: (event) => setDeadline(event.target.value),
								className: fieldClass
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							id: "enquiry-budget",
							label: "Budget range (optional)",
							hint: "Leave this blank if you do not have one.",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								id: "enquiry-budget",
								value: budget,
								onChange: (event) => setBudget(event.target.value),
								className: fieldClass
							})
						})
					] }) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						id: "enquiry-message",
						label: kind === "custom" ? "Anything else (optional)" : "Message",
						error: errors.message,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							id: "enquiry-message",
							value: message,
							"aria-invalid": !!errors.message,
							onChange: (event) => setMessage(event.target.value),
							className: areaClass
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "flex items-start gap-3 text-sm text-ink",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "checkbox",
								className: "mt-1 size-5 accent-primary",
								checked: consent,
								onChange: (event) => setConsent(event.target.checked)
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
								"I agree that Automation Flow Lab may use these details to reply to this enquiry. This is not consent to marketing.",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/privacy",
									className: "font-semibold underline decoration-line underline-offset-4",
									children: "Privacy Policy"
								}),
								"."
							] })]
						}),
						errors.consent ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-danger",
							children: errors.consent
						}) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm text-muted",
							children: "This website sends the enquiry as an email. It is not saved as an account. To ask about a message you already sent, use the contact form."
						})
					] }),
					formError ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-danger",
						role: "alert",
						children: formError
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "submit",
						className: "inline-flex h-12 items-center justify-center rounded-sm bg-primary px-5 text-base font-semibold text-primary-fg",
						children: "Send enquiry"
					})
				]
			})
		]
	});
}
//#endregion
export { EnquiryForm as t };
