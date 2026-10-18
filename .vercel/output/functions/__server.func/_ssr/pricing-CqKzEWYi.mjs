import { o as monthlyPrices, s as oneOffPrices } from "./site-BaGvWwC4.mjs";
import { x as require_jsx_runtime, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as PageHeader } from "./router-DHNGeeho.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/pricing-CqKzEWYi.js
var import_jsx_runtime = require_jsx_runtime();
var how = [
	{
		title: "Tell us the problem",
		text: "Describe what is happening, what you use now, and what you want to improve. You do not need to write a technical specification."
	},
	{
		title: "Receive a scope and quote",
		text: "We confirm what we will deliver, the fee, the payment stages, and anything we need from your team."
	},
	{
		title: "Decide on support",
		text: "Once the work is handed over, you can manage it yourself or ask us to look after the named systems on a monthly plan."
	}
];
var faqs = [
	{
		q: "Do I have to take a support plan after a build?",
		a: "No. Support is optional and priced separately."
	},
	{
		q: "Can you fix one problem without rebuilding everything?",
		a: "Yes. Excel repairs, analytics fixes, and automation troubleshooting can be scoped as individual jobs."
	},
	{
		q: "Why is a custom webapp quoted individually?",
		a: "An app for one internal task has a different scope from a portal with logins, permissions, integrations, and ongoing usage. Scoping establishes what you actually need before we price the build."
	},
	{
		q: "Can you support systems you did not build?",
		a: "Often, yes. We first need to see how they are configured, who owns them, and what access is available. We will tell you if an assessment is needed before support starts."
	},
	{
		q: "Are software subscriptions included?",
		a: "No, unless your written quote says otherwise. Licences, hosting, and usage-based services remain visible costs so you can see what you are paying for."
	}
];
function PricingPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "pb-20",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				eyebrow: "Pricing",
				title: "Clear starting prices for practical business systems.",
				lede: "Tell us what you need, and we’ll confirm the final scope and price before work begins. Website growth work is quoted from the audit. Other starting prices are below."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto w-full max-w-6xl space-y-4 px-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "max-w-3xl text-sm text-muted",
					children: "Automation Flow Lab’s self-service checks on this website are free to use. Professional services are separately quoted and charged under an accepted proposal or service agreement. Online payment is not on this website."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "max-w-3xl text-sm text-muted",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-semibold text-ink",
						children: "Future prices — not currently effective. "
					}), "Paid plans may be introduced in future. You will be informed and asked to agree before any charges apply."]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mx-auto w-full max-w-6xl px-5",
				"aria-labelledby": "services-price-heading",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						id: "services-price-heading",
						className: "font-display text-3xl",
						children: "One-off services"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6 overflow-x-auto rounded-xl border border-line",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
							className: "w-full min-w-[36rem] text-left text-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("caption", {
									className: "sr-only",
									children: "Starting prices for one-off services"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
									className: "bg-surface",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										scope: "col",
										className: "px-4 py-3 font-semibold",
										children: "Service"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										scope: "col",
										className: "px-4 py-3 font-semibold",
										children: "Price"
									})] })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: oneOffPrices.map(([name, price]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
									className: "border-t border-line",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										scope: "row",
										className: "px-4 py-3 font-semibold",
										children: name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-4 py-3 text-muted",
										children: price
									})]
								}, name)) })
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-3xl text-sm text-muted",
						children: "A starting price applies to a clearly defined piece of work. We will give you a written quote if the job needs more systems, users, data cleanup, or development than the starting scope allows."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/custom-builds",
						className: "mt-4 inline-flex h-11 items-center font-semibold text-primary",
						children: "Request a project quote"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mx-auto mt-16 w-full max-w-6xl px-5",
				"aria-labelledby": "support-price-heading",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						id: "support-price-heading",
						className: "font-display text-3xl",
						children: "Monthly support"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 max-w-3xl text-muted",
						children: "Your build is a one-off project. If you want us to maintain it, investigate issues, and make small changes afterwards, choose a monthly support plan."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6 overflow-x-auto rounded-xl border border-line",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
							className: "w-full min-w-[40rem] text-left text-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("caption", {
									className: "sr-only",
									children: "Monthly support plans"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
									className: "bg-surface",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
											scope: "col",
											className: "px-4 py-3 font-semibold",
											children: "Plan"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
											scope: "col",
											className: "px-4 py-3 font-semibold",
											children: "Price"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
											scope: "col",
											className: "px-4 py-3 font-semibold",
											children: "Covers"
										})
									] })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: monthlyPrices.map(([name, price, covers]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
									className: "border-t border-line align-top",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
											scope: "row",
											className: "px-4 py-3 font-semibold",
											children: name
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "px-4 py-3 text-muted",
											children: price
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "px-4 py-3 text-muted",
											children: covers
										})
									]
								}, name)) })
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-3xl text-sm text-muted",
						children: "Your support agreement will list the systems covered and the work included. Support is optional after a build."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/support-plans",
						search: { plan: "" },
						hash: "request",
						className: "mt-4 inline-flex h-11 items-center font-semibold text-primary",
						children: "Ask about a support plan"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mx-auto mt-16 w-full max-w-6xl px-5",
				"aria-labelledby": "how-heading",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						id: "how-heading",
						className: "font-display text-3xl",
						children: "How pricing works"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
						className: "mt-6 max-w-3xl space-y-5",
						children: how.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-mono text-sm text-primary",
								children: String(index + 1).padStart(2, "0")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-1 font-semibold",
								children: item.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-muted",
								children: item.text
							})
						] }, item.title))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 max-w-3xl space-y-4 text-sm text-muted",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Prices are in South African rand and are subject to terms and conditions. Final project prices depend on the agreed scope. Third-party software, hosting, and usage fees are separate unless included in your quote. VAT applies where required." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Support hours apply to the systems named in your agreement and do not roll over. A response target, where one is agreed, means we will acknowledge and assess the issue within that time; it is not a promise that every issue will be resolved by then. No general support timetable is promised on this page." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "New features, major changes, and work on systems outside your plan receive a separate quote. Additional support time is R1,500 per hour, approved by you before it is used. If we did not build a system, we may need to assess it before confirming its support plan and price." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Project quotes and support fees exclude third-party licences, hosting, and usage charges unless the quote expressly includes them. VAT is added if applicable. We confirm payment terms and any post-launch defect period in the project agreement." })
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mx-auto mt-16 w-full max-w-6xl px-5",
				"aria-labelledby": "faq-heading",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					id: "faq-heading",
					className: "font-display text-3xl",
					children: "Frequently asked questions"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6 max-w-3xl divide-y divide-line border-y border-line",
					children: faqs.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", {
						className: "group py-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("summary", {
							className: "font-semibold",
							children: item.q
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted",
							children: item.a
						})]
					}, item.q))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mx-auto mt-16 w-full max-w-6xl px-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl",
						children: "Bring us the process that is slowing you down"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 max-w-2xl text-muted",
						children: "Tell us what breaks, what gets repeated, or what your team has outgrown. We will suggest a defined first step and give you a price before work starts."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 flex flex-wrap gap-x-6 gap-y-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/custom-builds",
							className: "inline-flex h-11 items-center font-semibold text-primary",
							children: "Start a project enquiry"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/support-plans",
							search: { plan: "" },
							hash: "request",
							className: "inline-flex h-11 items-center font-semibold text-primary",
							children: "Request monthly support"
						})]
					})
				]
			})
		]
	});
}
//#endregion
export { PricingPage as component };
