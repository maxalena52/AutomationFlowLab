import { m as tools } from "./site-As1DZcAK.mjs";
import { x as require_jsx_runtime, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as PageHeader } from "./router-D7jmreRG.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/tools-BiyR5zMN.js
var import_jsx_runtime = require_jsx_runtime();
var href = {
	certflow: "/tools/certflow",
	"growth-check": "/tools/growth-check",
	"license-compare": "/tools/license-compare",
	"zoho-fit": "/tools/zoho-fit"
};
function ToolsPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "pb-20",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			eyebrow: "Tools",
			title: "Tools",
			lede: "Practical tools from Automation Flow Lab to help businesses make better technology and growth decisions."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "mx-auto grid w-full max-w-6xl gap-4 px-5 md:grid-cols-2",
			children: tools.map((tool) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "flex flex-col rounded-xl border border-line bg-surface p-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl",
						children: tool.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 flex-1 text-sm text-muted",
						children: tool.summary
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: href[tool.slug],
						className: "mt-5 inline-flex h-11 items-center font-semibold text-primary",
						children: ["Open ", tool.name]
					})
				]
			}, tool.slug))
		})]
	});
}
//#endregion
export { ToolsPage as component };
