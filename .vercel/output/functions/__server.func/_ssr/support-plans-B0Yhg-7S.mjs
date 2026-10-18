import { f as supportDisclaimer, p as supportPlans } from "./site-BaGvWwC4.mjs";
import { x as require_jsx_runtime, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as PageHeader, n as Route$6 } from "./router-DhDi7psx.mjs";
import { t as EnquiryForm } from "./enquiry-form-D_8611aM.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/support-plans-B0Yhg-7S.js
var import_jsx_runtime = require_jsx_runtime();
function SupportPlansPage() {
	const { plan } = Route$6.useSearch();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "pb-20",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				eyebrow: "Support Plans",
				title: "Stay on after the build, if you want to",
				lede: "Care covers one system. Operations covers connected systems. Starting prices are on the Pricing page. The agreement is what makes a plan binding."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mx-auto -mt-6 w-full max-w-6xl px-5 text-sm",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/pricing",
					className: "font-semibold text-primary",
					children: "See starting prices"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mx-auto mt-8 grid w-full max-w-6xl gap-4 px-5 md:grid-cols-2",
				children: supportPlans.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex flex-col rounded-xl border border-line bg-surface p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-3xl",
							children: item.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-muted",
							children: item.for
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-5 font-sans text-sm font-semibold",
							children: "Proposed inclusions"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-2 list-disc space-y-2 pl-5 text-sm text-muted",
							children: item.includes.map((line) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: line }, line))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-5 font-sans text-sm font-semibold",
							children: "Not in this scope"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-2 list-disc space-y-2 pl-5 text-sm text-muted",
							children: item.notIncluded.map((line) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: line }, line))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/support-plans",
							search: { plan: item.id },
							hash: "request",
							className: "mt-6 inline-flex h-11 items-center font-semibold text-primary",
							children: ["Request ", item.name]
						})
					]
				}, item.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mx-auto mt-8 w-full max-w-6xl px-5 text-sm text-muted",
				children: supportDisclaimer
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				id: "request",
				className: "mx-auto mt-10 w-full max-w-6xl scroll-mt-24 px-5",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EnquiryForm, {
					kind: "plan",
					plan,
					heading: "Request a plan",
					intro: "Say which systems you want looked after. We will reply with what a plan would cover. We will not quote a response time or a fee on this form."
				})
			})
		]
	});
}
//#endregion
export { SupportPlansPage as component };
