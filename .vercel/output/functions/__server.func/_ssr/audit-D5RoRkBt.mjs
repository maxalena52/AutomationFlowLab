import { t as auditPagePoints } from "./site-BaGvWwC4.mjs";
import { x as require_jsx_runtime, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as PageHeader } from "./router-DM88CS5m.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/audit-D5RoRkBt.js
var import_jsx_runtime = require_jsx_runtime();
function AuditPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "pb-20",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			eyebrow: "Full audit",
			title: "Website Revenue & Growth Audit",
			lede: "The Website Growth Check is the starting point. The audit looks deeper into the website, competitors and commercial opportunities, then sets out what is holding growth back."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid w-full max-w-6xl gap-10 px-5 lg:grid-cols-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "lg:col-span-7",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl",
						children: "What the audit is for"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-4 grid gap-3 sm:grid-cols-2",
						children: auditPagePoints.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							className: "rounded-xl border border-line bg-surface px-4 py-3 text-sm font-semibold",
							children: item
						}, item))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 max-w-2xl text-sm text-muted",
						children: "The audit is professional work, quoted before it starts. It does not guarantee a search ranking, a traffic figure, or a revenue increase. It identifies barriers and opportunities so the fix can be scoped properly."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 max-w-2xl text-sm text-muted",
						children: "Self-service tools on this website, including the Website Growth Check, are free to use. The audit and any implementation after it are separate professional services."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 flex flex-col gap-3 sm:flex-row",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/contact",
							search: { topic: "Website Revenue & Growth Audit" },
							className: "inline-flex h-12 items-center justify-center rounded-sm bg-primary px-5 text-base font-semibold text-primary-fg",
							children: "Get my full website audit"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/tools/growth-check",
							className: "inline-flex h-12 items-center justify-center rounded-sm border border-line bg-surface px-5 text-base font-semibold",
							children: "Run the free check first"
						})]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
				className: "lg:col-span-5",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-xl border border-line bg-surface p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-2xl",
							children: "After the audit"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
							className: "mt-4 space-y-4 text-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-semibold",
									children: "Fix"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-muted",
									children: "Correct the problems affecting trust, visibility and conversion."
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-semibold",
									children: "Grow"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-muted",
									children: "Improve search visibility, customer journeys and market reach."
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-semibold",
									children: "Monitor"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-muted",
									children: "Track performance, issues and new opportunities."
								})] })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/pricing",
							className: "mt-6 inline-flex h-11 items-center text-sm font-semibold text-primary",
							children: "See starting prices for other work"
						})
					]
				})
			})]
		})]
	});
}
//#endregion
export { AuditPage as component };
