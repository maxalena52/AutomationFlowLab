import { x as require_jsx_runtime, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as legalIndex } from "./policy-document-Dcqg04lk.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/legal-CCFVUtI4.js
var import_jsx_runtime = require_jsx_runtime();
function LegalPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "pb-20",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "mx-auto w-full max-w-6xl px-5 pb-8 pt-12 md:pt-16",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm font-semibold text-primary",
					children: "Legal and Policies"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-3 max-w-3xl font-display text-4xl md:text-5xl",
					children: "Using Automation Flow Lab"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-2xl text-lg text-muted",
					children: "Find information about our professional services and self-service tools, how we process information, responsible use and how to contact us."
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "mx-auto grid w-full max-w-6xl gap-4 px-5 md:grid-cols-2",
			children: legalIndex.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: item.to,
				hash: item.hash,
				className: "flex h-full flex-col rounded-xl border border-line bg-surface p-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl",
					children: item.title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted",
					children: item.text
				})]
			}) }, `${item.to}-${item.title}`))
		})]
	});
}
//#endregion
export { LegalPage as component };
