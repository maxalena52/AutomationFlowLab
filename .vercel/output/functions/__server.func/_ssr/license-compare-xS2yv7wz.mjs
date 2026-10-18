import { i as __toESM } from "../_runtime.mjs";
import { J as require_react, x as require_jsx_runtime, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/license-compare-xS2yv7wz.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var catalogs = {
	"with-teams": {
		"source": "https://www.microsoft.com/en-us/licensing/news/2026-m365-packaging-pricing-updates",
		"region": "with-teams",
		"currency": "USD",
		"billing": "per user / month, annual commitment, published commercial list",
		"fetchedAt": "2026-10-15T21:10:12.021Z",
		"products": [
			{
				"id": "Office 365 E1",
				"name": "Office 365 E1",
				"price": 10,
				"group": "Enterprise",
				"unit": "user-month",
				"unitLabel": "per user / month",
				"seatMin": 301,
				"covers": ["email", "teams"],
				"seatCap": null,
				"note": "Web apps, mailbox, and Teams. No desktop apps and no device management.",
				"features": [
					"Office on the web only — no desktop Office apps",
					"Exchange Online Plan 1 mailbox",
					"Teams, SharePoint Plan 1, OneDrive",
					"Viva Engage, Forms",
					"No Intune, no Windows Enterprise, no Power BI",
					"Enterprise suite: aimed at more than 300 users"
				]
			},
			{
				"id": "Office 365 E3",
				"name": "Office 365 E3",
				"price": 26,
				"group": "Enterprise",
				"unit": "user-month",
				"unitLabel": "per user / month",
				"seatMin": 301,
				"covers": [
					"email",
					"desktop",
					"teams"
				],
				"seatCap": null,
				"note": "Desktop apps, mailbox, and Teams. Not Microsoft 365 device security.",
				"features": [
					"Desktop Office apps",
					"Exchange Online Plan 2 (100 GB mailbox)",
					"Teams, SharePoint Plan 2, OneDrive",
					"eDiscovery and compliance basics in Office 365",
					"No Intune, no Windows Enterprise, no Defender for Endpoint",
					"Enterprise suite: aimed at more than 300 users"
				]
			},
			{
				"id": "Office 365 E5",
				"name": "Office 365 E5",
				"price": 41,
				"group": "Enterprise",
				"unit": "user-month",
				"unitLabel": "per user / month",
				"seatMin": 301,
				"covers": [
					"email",
					"desktop",
					"teams",
					"security"
				],
				"seatCap": null,
				"note": "E3 plus the advanced Office 365 security and compliance stack.",
				"features": [
					"Everything in Office 365 E3",
					"Defender for Office 365 Plan 2",
					"Advanced compliance, eDiscovery Premium, Audit Premium",
					"Power BI Pro",
					"Phone System and Audio Conferencing",
					"No Intune and no Windows Enterprise",
					"Enterprise suite: aimed at more than 300 users"
				]
			},
			{
				"id": "Microsoft 365 E3",
				"name": "Microsoft 365 E3",
				"price": 39,
				"group": "Enterprise",
				"unit": "user-month",
				"unitLabel": "per user / month",
				"seatMin": 301,
				"covers": [
					"email",
					"desktop",
					"teams",
					"devices"
				],
				"seatCap": null,
				"note": "Desktop apps, mailbox, Teams, and device management.",
				"features": [
					"Office 365 E3 services plus desktop apps",
					"Windows Enterprise",
					"Intune device management and Entra ID P1",
					"Information protection",
					"No Power BI Pro, no Phone System, no Defender for Endpoint P2",
					"Enterprise suite: aimed at more than 300 users"
				]
			},
			{
				"id": "Microsoft 365 E5",
				"name": "Microsoft 365 E5",
				"price": 60,
				"group": "Enterprise",
				"unit": "user-month",
				"unitLabel": "per user / month",
				"seatMin": 301,
				"covers": [
					"email",
					"desktop",
					"teams",
					"security",
					"devices"
				],
				"seatCap": null,
				"note": "E3 plus the advanced security and compliance stack.",
				"features": [
					"Everything in Microsoft 365 E3",
					"Defender for Endpoint, Identity, Office, and Cloud Apps",
					"Entra ID P2, advanced compliance",
					"Power BI Pro",
					"Phone System and Audio Conferencing",
					"Enterprise suite: aimed at more than 300 users"
				]
			},
			{
				"id": "Microsoft 365 Business Basic",
				"name": "Microsoft 365 Business Basic",
				"price": 7,
				"group": "Business",
				"unit": "user-month",
				"unitLabel": "per user / month",
				"seatMin": null,
				"covers": ["email", "teams"],
				"seatCap": 300,
				"note": "Web and mobile apps, mailbox, and Teams. No desktop Office apps.",
				"features": [
					"Word, Excel, PowerPoint on the web and mobile only",
					"Exchange Online mailbox",
					"Teams, SharePoint, OneDrive (1 TB)",
					"Forms, Viva Engage",
					"No desktop Office apps",
					"No Intune device management",
					"No Defender for Business / Azure Information Protection",
					"Maximum 300 users"
				]
			},
			{
				"id": "Microsoft 365 Business Standard",
				"name": "Microsoft 365 Business Standard",
				"price": 14,
				"group": "Business",
				"unit": "user-month",
				"unitLabel": "per user / month",
				"seatMin": null,
				"covers": [
					"email",
					"desktop",
					"teams"
				],
				"seatCap": 300,
				"note": "Desktop apps, mailbox, and Teams. Not the advanced security stack.",
				"features": [
					"Desktop Word, Excel, PowerPoint, Outlook on up to 5 PCs or Macs",
					"Exchange Online mailbox",
					"Teams, SharePoint, OneDrive (1 TB)",
					"Forms, Viva Engage, Bookings",
					"No Intune device management",
					"No Defender for Business / Azure Information Protection",
					"Maximum 300 users"
				]
			},
			{
				"id": "Microsoft 365 Business Premium",
				"name": "Microsoft 365 Business Premium",
				"price": 22,
				"group": "Business",
				"unit": "user-month",
				"unitLabel": "per user / month",
				"seatMin": null,
				"covers": [
					"email",
					"desktop",
					"teams",
					"security",
					"devices"
				],
				"seatCap": 300,
				"note": "Standard, plus device management and the business security stack.",
				"features": [
					"Everything in Business Standard",
					"Intune device management",
					"Defender for Business and Defender for Office 365 Plan 1",
					"Azure Information Protection and data loss prevention",
					"Conditional access",
					"Maximum 300 users"
				]
			},
			{
				"id": "Microsoft 365 F1",
				"name": "Microsoft 365 F1",
				"price": 3,
				"group": "Frontline",
				"unit": "user-month",
				"unitLabel": "per user / month",
				"seatMin": null,
				"covers": ["teams"],
				"seatCap": null,
				"note": "A frontline suite. It is not a full desktop Office licence.",
				"features": [
					"Teams and Office on the web",
					"No Exchange mailbox on F1",
					"Small OneDrive allocation",
					"No desktop Office apps",
					"Built for frontline workers, not office staff"
				]
			},
			{
				"id": "Microsoft 365 F3",
				"name": "Microsoft 365 F3",
				"price": 10,
				"group": "Frontline",
				"unit": "user-month",
				"unitLabel": "per user / month",
				"seatMin": null,
				"covers": ["email", "teams"],
				"seatCap": null,
				"note": "A frontline suite with a mailbox and Teams. Desktop apps are limited.",
				"features": [
					"Kiosk Exchange mailbox (2 GB)",
					"Teams, SharePoint, Office on the web",
					"Intune P1 in the published F3 stack",
					"No full desktop Office apps",
					"Built for frontline workers"
				]
			},
			{
				"id": "Windows Server 2025 Standard",
				"name": "Windows Server 2025 Standard",
				"price": 1176,
				"group": "Server",
				"unit": "pack",
				"unitLabel": "published pack or server price",
				"covers": ["server"],
				"seatMin": null,
				"seatCap": null,
				"note": "Suggested retail price published for Windows Server 2025 Standard. Core-based, and it still needs Windows Server CALs.",
				"features": [
					"Published suggested retail or pack price from Microsoft’s server pages",
					"Core-based or server licence, not a Microsoft 365 user suite",
					"Windows Server still needs CALs"
				]
			},
			{
				"id": "Windows Server 2025 Datacenter",
				"name": "Windows Server 2025 Datacenter",
				"price": 6771,
				"group": "Server",
				"unit": "pack",
				"unitLabel": "published pack or server price",
				"covers": ["server"],
				"seatMin": null,
				"seatCap": null,
				"note": "Suggested retail price published for Windows Server 2025 Datacenter. Core-based, and it still needs Windows Server CALs.",
				"features": [
					"Published suggested retail or pack price from Microsoft’s server pages",
					"Core-based or server licence, not a Microsoft 365 user suite",
					"Windows Server still needs CALs"
				]
			},
			{
				"id": "SQL Server Enterprise, 2-core pack",
				"name": "SQL Server Enterprise, 2-core pack",
				"price": 15123,
				"group": "Server",
				"unit": "pack",
				"unitLabel": "published pack or server price",
				"covers": ["server"],
				"seatMin": null,
				"seatCap": null,
				"note": "Published 2-core pack price for SQL Server Enterprise.",
				"features": [
					"Published suggested retail or pack price from Microsoft’s server pages",
					"Core-based or server licence, not a Microsoft 365 user suite",
					"Windows Server still needs CALs"
				]
			},
			{
				"id": "SQL Server Standard, server",
				"name": "SQL Server Standard, server",
				"price": 989,
				"group": "Server",
				"unit": "pack",
				"unitLabel": "published pack or server price",
				"covers": ["server"],
				"seatMin": null,
				"seatCap": null,
				"note": "Published server licence price for SQL Server Standard.",
				"features": [
					"Published suggested retail or pack price from Microsoft’s server pages",
					"Core-based or server licence, not a Microsoft 365 user suite",
					"Windows Server still needs CALs"
				]
			}
		],
		"rates": [
			{
				"country": "South Africa",
				"currency": "ZAR",
				"rate": 16.5568
			},
			{
				"country": "United Kingdom",
				"currency": "GBP",
				"rate": .75491
			},
			{
				"country": "Euro area",
				"currency": "EUR",
				"rate": .89222
			},
			{
				"country": "India",
				"currency": "INR",
				"rate": 95.06
			},
			{
				"country": "Australia",
				"currency": "AUD",
				"rate": 1.447
			},
			{
				"country": "Canada",
				"currency": "CAD",
				"rate": 1.4207
			}
		]
	},
	"no-teams": {
		"source": "https://www.microsoft.com/en-us/licensing/news/2026-m365-packaging-pricing-updates",
		"region": "no-teams",
		"currency": "USD",
		"billing": "per user / month, annual commitment, published commercial list",
		"fetchedAt": "2026-10-15T21:10:50.536Z",
		"products": [
			{
				"id": "Microsoft 365 Business Basic (no Teams)",
				"name": "Microsoft 365 Business Basic (no Teams)",
				"price": 5.4,
				"group": "Business",
				"unit": "user-month",
				"unitLabel": "per user / month",
				"seatMin": null,
				"covers": ["email"],
				"seatCap": 300,
				"note": "Mailbox and web apps. Teams is not in this suite.",
				"features": [
					"Word, Excel, PowerPoint on the web and mobile only",
					"Exchange Online mailbox",
					"SharePoint, OneDrive (1 TB)",
					"Teams is not included",
					"Maximum 300 users"
				]
			},
			{
				"id": "Microsoft 365 Business Standard (no Teams)",
				"name": "Microsoft 365 Business Standard (no Teams)",
				"price": 10.79,
				"group": "Business",
				"unit": "user-month",
				"unitLabel": "per user / month",
				"seatMin": null,
				"covers": ["email", "desktop"],
				"seatCap": 300,
				"note": "Desktop apps and mailbox. Teams is not in this suite.",
				"features": [
					"Desktop Office apps",
					"Exchange Online mailbox",
					"SharePoint, OneDrive (1 TB)",
					"Teams is not included",
					"Maximum 300 users"
				]
			},
			{
				"id": "Microsoft 365 Business Premium (no Teams)",
				"name": "Microsoft 365 Business Premium (no Teams)",
				"price": 18.79,
				"group": "Business",
				"unit": "user-month",
				"unitLabel": "per user / month",
				"seatMin": null,
				"covers": [
					"email",
					"desktop",
					"security",
					"devices"
				],
				"seatCap": 300,
				"note": "Desktop apps, security, and device management. Teams is not in this suite.",
				"features": [
					"Desktop Office apps",
					"Intune, Defender for Business, information protection",
					"Teams is not included",
					"Maximum 300 users"
				]
			}
		],
		"rates": [
			{
				"country": "South Africa",
				"currency": "ZAR",
				"rate": 16.5568
			},
			{
				"country": "United Kingdom",
				"currency": "GBP",
				"rate": .75491
			},
			{
				"country": "Euro area",
				"currency": "EUR",
				"rate": .89222
			},
			{
				"country": "India",
				"currency": "INR",
				"rate": 95.06
			},
			{
				"country": "Australia",
				"currency": "AUD",
				"rate": 1.447
			},
			{
				"country": "Canada",
				"currency": "CAD",
				"rate": 1.4207
			}
		]
	}
};
var regions = [{
	id: "with-teams",
	label: "Most countries, suites with Teams",
	detail: "The public commercial list Microsoft publishes in US dollars for suites that include Teams."
}, {
	id: "no-teams",
	label: "EEA and Switzerland, suites without Teams",
	detail: "The public list for suites sold without Teams. Teams is a separate licence there."
}];
var needLabels = {
	email: "Mailbox and web apps",
	desktop: "Desktop Word, Excel, and PowerPoint",
	teams: "Teams included in the suite",
	security: "Advanced security",
	devices: "Device management",
	server: "A Windows Server or SQL Server licence"
};
var money = (value, currency) => new Intl.NumberFormat("en", {
	style: "currency",
	currency,
	maximumFractionDigits: 0
}).format(value);
function compare(input) {
	const picked = [input.leftId, input.rightId].map((id) => input.products.find((item) => item.id === id)).filter(Boolean);
	const seats = Math.max(1, Math.round(input.seats));
	const rows = picked.map((product) => {
		const covers = product.covers.map((id) => needLabels[id]);
		const missing = input.needs.filter((id) => !product.covers.includes(id)).map((id) => needLabels[id]);
		const underMin = product.seatMin != null && seats < product.seatMin;
		const overCap = product.seatCap != null && seats > product.seatCap;
		const seatRule = underMin ? `Enterprise suites are for organisations past the Business limit of 300 users. ${seats} is below that.` : overCap ? `This suite stops at ${product.seatCap} users. ${seats} is over that.` : product.group === "Enterprise" ? "Quantity is above 300, which is the range these enterprise suites are for." : product.seatCap ? `Published for 1–${product.seatCap} users.` : product.group === "Server" ? "Sold as a pack or server licence, not per user." : "No 300-user business cap on this suite.";
		const overBudget = product.unit === "user-month" && input.budget != null && product.price > input.budget;
		return {
			...product,
			covers,
			missing,
			monthly: product.price,
			total: Math.round(product.price * seats * 100) / 100,
			overBudget,
			underMin,
			overCap,
			seatRule
		};
	});
	const scored = rows.map((row) => {
		let score = 0;
		if (!row.missing.length) score += 50;
		score -= row.missing.length * 15;
		if (row.overBudget) score -= 20;
		if (row.underMin) score -= 30;
		if (row.overCap) score -= 40;
		score -= row.monthly;
		return {
			...row,
			score
		};
	}).sort((a, b) => b.score - a.score);
	const winner = scored[0];
	const other = scored[1];
	const reasons = [winner.note];
	if (winner.missing.length) reasons.push(`It still does not cover: ${winner.missing.join(", ")}.`);
	else if (input.needs.length) reasons.push("It covers every need you ticked.");
	if (winner.overBudget) reasons.push(`It is above the ${input.budget} per user budget you entered.`);
	if (winner.overCap || winner.underMin) reasons.push(winner.seatRule);
	if (other) {
		const gap = Math.round((other.monthly - winner.monthly) * 100) / 100;
		if (gap > 0) reasons.push(`${other.name} costs ${gap} more per user and ${other.missing.length ? `still misses ${other.missing.join(", ")}` : "does not buy a need you ticked"}.`);
		if (gap < 0) reasons.push(`${other.name} is cheaper, but it misses ${other.missing.join(", ") || "the fit on seats or budget"}.`);
		if (gap === 0) reasons.push(`${other.name} is the same published price, with a weaker fit for what you ticked.`);
	}
	return {
		headline: picked.length === 2 && picked[0].unit !== picked[1].unit ? `${winner.name} fits more of what you ticked. These are not both a per-user monthly price.` : `${winner.name} is the better fit of the two.`,
		reasons,
		rows
	};
}
function LicenseComparePage() {
	const [region, setRegion] = (0, import_react.useState)("with-teams");
	const catalog = catalogs[region] ?? catalogs["with-teams"];
	const products = catalog.products;
	const rates = (catalog.rates ?? []).filter((rate) => typeof rate.rate === "number");
	const [left, setLeft] = (0, import_react.useState)(products[0]?.id ?? "");
	const [right, setRight] = (0, import_react.useState)(products[1]?.id ?? products[0]?.id ?? "");
	const [seats, setSeats] = (0, import_react.useState)(10);
	const [budget, setBudget] = (0, import_react.useState)("");
	const [needs, setNeeds] = (0, import_react.useState)(["email", "desktop"]);
	const [error, setError] = (0, import_react.useState)("");
	const [result, setResult] = (0, import_react.useState)(null);
	const groups = (0, import_react.useMemo)(() => [
		"Business",
		"Enterprise",
		"Frontline",
		"Server"
	].filter((group) => products.some((item) => item.group === group)), [products]);
	const field = "mt-1 h-11 w-full rounded-sm border border-line bg-surface px-3 text-sm";
	function onRegion(next) {
		setRegion(next);
		const nextProducts = (catalogs[next] ?? catalogs["with-teams"]).products;
		setLeft(nextProducts[0]?.id ?? "");
		setRight(nextProducts[1]?.id ?? nextProducts[0]?.id ?? "");
		setResult(null);
		setError("");
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto w-full max-w-6xl px-5 py-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/tools",
				className: "text-sm font-semibold text-primary",
				children: "All tools"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-3 font-display text-4xl",
				children: "Microsoft licence comparison"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 max-w-2xl text-muted",
				children: "Free. The figures are Microsoft’s published commercial prices. Nothing on this page is a quote, and Microsoft does not offer a public price API without a partner login."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-4 max-w-2xl rounded-lg border border-line bg-surface p-4 text-sm text-muted",
				children: ["Read this at your own discretion. Prices, taxes, currency, and what a suite includes can change, and they can differ from the price Microsoft or a reseller offers you. Automation Flow Lab is not liable for any loss, cost, or decision that follows from using this comparison.", catalog.fetchedAt ? ` List read ${catalog.fetchedAt}.` : ""]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "mt-8 grid gap-4 rounded-xl border border-line bg-surface p-5",
				onSubmit: (event) => {
					event.preventDefault();
					if (left === right) {
						setError("Pick two different products.");
						setResult(null);
						return;
					}
					setError("");
					const parsed = budget.trim() ? Number(budget) : null;
					setResult(compare({
						products,
						leftId: left,
						rightId: right,
						seats,
						budget: parsed != null && Number.isFinite(parsed) ? parsed : null,
						needs
					}));
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "text-sm font-semibold",
						children: ["Where the licences are bought", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
							className: field,
							value: region,
							onChange: (event) => onRegion(event.target.value),
							children: regions.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: item.id,
								children: item.label
							}, item.id))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted",
						children: regions.find((item) => item.id === region)?.detail
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-3 sm:grid-cols-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "text-sm font-semibold",
								children: ["First product", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
									className: field,
									value: left,
									onChange: (event) => setLeft(event.target.value),
									children: groups.map((group) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("optgroup", {
										label: group,
										children: products.filter((item) => item.group === group).map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: item.id,
											children: item.name
										}, item.id))
									}, group))
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "text-sm font-semibold",
								children: ["Second product", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
									className: field,
									value: right,
									onChange: (event) => setRight(event.target.value),
									children: groups.map((group) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("optgroup", {
										label: group,
										children: products.filter((item) => item.group === group).map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: item.id,
											children: item.name
										}, item.id))
									}, group))
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "text-sm font-semibold",
								children: [
									"Quantity",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										className: field,
										type: "number",
										min: 1,
										value: seats,
										onChange: (event) => setSeats(Number(event.target.value))
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "mt-1 block text-xs font-normal text-muted",
										children: "Business suites are published for 1–300 users. Enterprise suites are for above that."
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "text-sm font-semibold",
								children: ["Budget per user / month (optional)", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									className: field,
									inputMode: "decimal",
									value: budget,
									onChange: (event) => setBudget(event.target.value),
									placeholder: "Leave blank if you have no cap"
								})]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", {
						className: "text-sm font-semibold",
						children: "What the licence has to cover"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-2 grid gap-2 sm:grid-cols-2",
						children: Object.keys(needLabels).map((id) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "flex items-center gap-2 text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "checkbox",
								checked: needs.includes(id),
								onChange: (event) => setNeeds((current) => event.target.checked ? [...current, id] : current.filter((item) => item !== id))
							}), needLabels[id]]
						}, id))
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "submit",
						disabled: products.length < 2,
						className: "inline-flex h-11 items-center justify-center rounded-sm bg-primary px-4 text-sm font-semibold text-primary-fg",
						children: "Compare"
					})
				]
			}),
			error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-sm text-danger",
				children: error
			}) : null,
			result ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-6 rounded-xl border border-line bg-surface p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl",
						children: result.headline
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-3 list-disc space-y-2 pl-5 text-sm text-muted",
						children: result.reasons.map((line) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: line }, line))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 grid gap-3 sm:grid-cols-2",
						children: result.rows.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "rounded-lg border border-line p-3 text-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-semibold",
									children: row.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-muted",
									children: row.group
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-2",
									children: [
										money(row.monthly, "USD"),
										" ",
										row.unitLabel
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "mt-2 space-y-1 text-muted",
									children: rates.map((rate) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
										rate.country,
										": ",
										money(row.monthly * rate.rate, rate.currency),
										row.unit === "user-month" ? " per user / month" : ""
									] }, rate.currency))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2",
									children: row.note
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-sm font-semibold",
									children: "Published with"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "mt-1 list-disc space-y-1 pl-5 text-muted",
									children: row.features.map((feature) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: feature }, feature))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-2 text-muted",
									children: ["Against the boxes you ticked: ", row.covers.join(", ") || "none of those."]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-muted",
									children: row.missing.length ? `Does not include: ${row.missing.join(", ")}` : "Covers the needs you ticked."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: row.underMin || row.overCap ? "mt-2 font-semibold" : "mt-2 text-muted",
									children: row.seatRule
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-muted",
									children: row.unit === "pack" ? "Pack or server price. It is not scored against a per-user budget." : row.overBudget ? "Over the per-user budget you entered." : budget.trim() ? "Inside the per-user budget you entered." : "No per-user budget was set."
								})
							]
						}, row.id))
					}),
					catalog.source ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						className: "mt-4 inline-flex text-sm font-semibold text-primary",
						href: catalog.source,
						children: "Public list this was read from"
					}) : null
				]
			}) : null
		]
	});
}
//#endregion
export { LicenseComparePage as component };
