import { r as buildSteps } from "./site-BaGvWwC4.mjs";
import { x as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as PageHeader } from "./router-DM88CS5m.mjs";
import { t as EnquiryForm } from "./enquiry-form-D_8611aM.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/custom-builds-DzL8VxMT.js
var import_jsx_runtime = require_jsx_runtime();
function CustomBuildsPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "pb-20",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			eyebrow: "Custom Builds",
			title: "When a product on the shelf is the wrong shape",
			lede: "We start from the job that is eating time, agree what will be built, build that, and hand it over. Support afterwards is optional."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid w-full max-w-6xl gap-10 px-5 lg:grid-cols-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "space-y-6 lg:col-span-6",
				children: buildSteps.map((step, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "border-t border-line pt-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono text-sm text-primary",
							children: String(index + 1).padStart(2, "0")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-1 font-display text-2xl",
							children: step.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-muted",
							children: step.text
						})
					]
				}, step.name))
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "lg:col-span-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EnquiryForm, {
					kind: "custom",
					heading: "Project enquiry",
					intro: "Budget is optional. Deadline can be “no fixed date” if you do not have one."
				})
			})]
		})]
	});
}
//#endregion
export { CustomBuildsPage as component };
