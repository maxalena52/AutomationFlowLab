import { d as serviceGroups } from "./site-BaGvWwC4.mjs";
import { x as require_jsx_runtime, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as PageHeader } from "./router-DM88CS5m.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/services-CcJFju9T.js
var import_jsx_runtime = require_jsx_runtime();
function ServicesPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "pb-20",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			eyebrow: "Services",
			title: "Help organised around the result",
			lede: "The main service is the Website Growth Check. Around it: a full website audit, search growth, conversion and monitoring, then workflow automation, integration and configuration, SharePoint design and integration, client operation portals, Microsoft 365, Excel, Zoho, analytics and reporting."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex w-full max-w-6xl flex-col gap-12 px-5",
			children: [serviceGroups.map((group) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				"aria-labelledby": `${group.id}-heading`,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					id: `${group.id}-heading`,
					className: "font-display text-3xl",
					children: group.name
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-4 divide-y divide-line border-y border-line",
					children: group.items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						id: item.slug,
						className: "scroll-mt-24 grid gap-2 py-4 sm:grid-cols-12 sm:items-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "sm:col-span-8",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-sans text-base font-semibold",
								children: item.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-muted",
								children: item.summary
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex gap-4 sm:col-span-4 sm:justify-end",
							children: [item.href ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/audit",
								className: "inline-flex h-11 items-center text-sm font-semibold text-primary",
								children: "Read the audit"
							}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/contact",
								search: { topic: item.enquiryTopic },
								className: "inline-flex h-11 items-center text-sm font-semibold text-primary",
								children: "Enquire"
							})]
						})]
					}, item.slug))
				})]
			}, group.id)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "max-w-2xl text-sm text-muted",
				children: [
					"Starting prices for defined pieces of work are on the ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/pricing",
						className: "font-semibold text-primary",
						children: "pricing"
					}),
					" page. A final fee is confirmed in writing. We do not guarantee a ranking, a traffic number, or a revenue figure."
				]
			})]
		})]
	});
}
//#endregion
export { ServicesPage as component };
