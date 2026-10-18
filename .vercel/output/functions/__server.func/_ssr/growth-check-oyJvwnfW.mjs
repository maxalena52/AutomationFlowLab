import { x as require_jsx_runtime, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as WebsiteCheck } from "./website-check-BP_kMtaU.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/growth-check-oyJvwnfW.js
var import_jsx_runtime = require_jsx_runtime();
function GrowthCheckPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto w-full max-w-3xl px-5 py-12 md:py-16",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm font-semibold text-primary",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					children: "Automation Flow Lab"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-3 font-display text-4xl md:text-5xl",
				children: "Website Growth Check"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-lg text-muted",
				children: "Find out what's stopping your website from being found, trusted and turning visitors into customers."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-sm text-muted",
				children: "You get up to five findings. The check is not a full audit, and it does not include a repair guide."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WebsiteCheck, {
					source: "tool",
					id: "check"
				})
			})
		]
	});
}
//#endregion
export { GrowthCheckPage as component };
