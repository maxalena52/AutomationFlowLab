import { x as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as Route$15 } from "./router-496UPTLt.mjs";
import { t as EnquiryForm } from "./enquiry-form-D_8611aM.mjs";
import { r as policies, t as PolicyDocument } from "./policy-document-Dcqg04lk.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-DhwOo1Oh.js
var import_jsx_runtime = require_jsx_runtime();
function ContactPage() {
	const { topic } = Route$15.useSearch();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mx-auto w-full max-w-3xl px-5 pb-4 pt-12 md:pt-16",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EnquiryForm, {
			kind: "contact",
			topic,
			heading: "Send an enquiry",
			intro: topic ? `This form is prefilled for “${topic}”. Change that if it is not right. An enquiry does not create a payment obligation.` : "Use this form for a service enquiry or a complaint. An enquiry does not create a payment obligation. Do not include passwords, tokens or card details."
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PolicyDocument, { page: policies.contact })] });
}
//#endregion
export { ContactPage as component };
