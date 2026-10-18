export const company = {
  name: "Automation Flow Lab",
  email: "Automationflowlab.info@proton.me",
  domain: "automationflowlab.com",
  legalName: "AUTOMATIONFLOWLAB (PTY) LTD",
  registration: "2026/796103/07",
  country: "South Africa",
  positioning:
    "We find what's stopping your business from growing online, then build the systems to fix it.",
  supporting: "Find it. Fix it. Grow it.",
  description:
    "Website Growth Check: be found, trusted and chosen. Also website audits, search growth, automation, SharePoint, client portals, Microsoft 365, Excel, Zoho and reporting.",
};

export const pillars = [
  { name: "Visibility", text: "Can potential customers actually find you?" },
  { name: "Trust", text: "Does your website give people confidence to choose you?" },
  { name: "Conversion", text: "Does the website turn visitors into enquiries, bookings or customers?" },
  { name: "Technical quality", text: "Are hidden website problems holding performance back?" },
  { name: "Growth", text: "Are there opportunities your business is currently missing?" },
];

export const exampleFindings = [
  {
    status: "CRITICAL" as const,
    area: "Content Trust",
    summary:
      "Website content may contain inconsistencies, outdated information or credibility problems that could make customers hesitate.",
    meaning: "Even good traffic may fail to convert if visitors do not fully trust what they are reading.",
  },
  {
    status: "NEEDS WORK" as const,
    area: "SEO Structure",
    summary:
      "Important products or services may not be structured strongly enough for search engines to understand their commercial importance.",
    meaning: "The website may struggle to compete for valuable customer searches.",
  },
  {
    status: "NEEDS WORK" as const,
    area: "Technical Quality",
    summary: "Underlying website issues may be affecting usability, indexing or search performance.",
    meaning: "Some website problems may be invisible to customers while still limiting growth.",
  },
  {
    status: "WORKING" as const,
    area: "Offer Clarity",
    summary: "Visitors can understand what the business offers relatively quickly.",
    meaning: "Clear positioning makes it easier for potential customers to decide whether the business is relevant to them.",
  },
];

export const auditPoints = [
  "Customer drop-off points",
  "Search visibility problems",
  "Content and trust weaknesses",
  "Technical issues",
  "Conversion opportunities",
  "Competitor gaps",
  "Market opportunities",
  "Growth priorities",
];

export const auditPagePoints = [
  "Customer drop-off points",
  "Search visibility problems",
  "Content and trust weaknesses",
  "Technical issues that may be limiting use or discovery",
  "Conversion opportunities",
  "Competitor gaps",
  "Market opportunities",
  "A short list of growth priorities",
];

export const process = [
  { name: "Audit", text: "Find what's holding the business back." },
  { name: "Fix", text: "Correct the problems affecting trust, visibility and conversion." },
  { name: "Grow", text: "Improve search visibility, customer journeys and market reach." },
  { name: "Monitor", text: "Track performance, issues and new opportunities." },
];

export const otherHelp = [
  {
    name: "Automation integration & troubleshooting",
    text: "Connect systems, repair broken workflows and remove repetitive work.",
    hash: "systems-integration",
  },
  {
    name: "SharePoint Design and Integration",
    text: "Build cleaner SharePoint environments around how teams actually work.",
    hash: "sharepoint",
  },
  {
    name: "Client Operation Portals",
    text: "Bring client information, processes and workflows into one organised workspace.",
    hash: "client-portal",
  },
  {
    name: "Workflow & process automation",
    text: "Replace repetitive manual work with reliable business workflows.",
    hash: "ai-workflow-automation",
  },
  {
    name: "Excel rescue & automation",
    text: "Repair fragile spreadsheets and reduce manual spreadsheet work.",
    hash: "excel",
  },
  {
    name: "Request & approval systems",
    text: "Create structured request, approval and notification processes.",
    hash: "request-approval",
  },
  {
    name: "Analytics & reporting",
    text: "Turn business and website data into useful decisions.",
    hash: "analytics",
  },
  {
    name: "Website improvement & search growth",
    text: "Improve visibility, usability, conversion and long-term search performance.",
    hash: "search-growth",
  },
  {
    name: "Microsoft 365 solutions",
    text: "Improve how businesses use Microsoft 365 tools together.",
    hash: "microsoft-365",
  },
  {
    name: "Zoho setup & optimisation",
    text: "Help businesses choose, configure and simplify their Zoho environment.",
    hash: "zoho",
  },
];

export type ServiceItem = {
  slug: string;
  name: string;
  summary: string;
  enquiryTopic: string;
  href?: string;
};

export const serviceGroups: { id: string; name: string; items: ServiceItem[] }[] = [
  {
    id: "website",
    name: "Website and growth",
    items: [
      {
        slug: "website-audit",
        name: "Website Revenue & Growth Audit",
        summary: "A deeper look at what is holding the website back, and where the stronger opportunities are.",
        enquiryTopic: "Website Revenue & Growth Audit",
        href: "/audit",
      },
      {
        slug: "website-improvement",
        name: "Website improvement",
        summary: "Clearer pages, fewer points of confusion, and a site that is easier to use.",
        enquiryTopic: "Website improvement",
      },
      {
        slug: "search-growth",
        name: "SEO and search growth",
        summary: "Improve visibility and the ability to compete for searches that can bring customers.",
        enquiryTopic: "SEO and search growth",
      },
      {
        slug: "conversion",
        name: "Conversion improvement",
        summary: "Make it easier for a visitor who is already interested to enquire, book, or buy.",
        enquiryTopic: "Conversion improvement",
      },
      {
        slug: "international-search",
        name: "International search expansion",
        summary: "Prepare the website to be understood in more than one market.",
        enquiryTopic: "International search expansion",
      },
      {
        slug: "website-monitoring",
        name: "Website monitoring",
        summary: "Watch for issues and new opportunities after the work is live.",
        enquiryTopic: "Website monitoring",
      },
    ],
  },
  {
    id: "automation",
    name: "Automation and operations",
    items: [
      {
        slug: "ai-workflow-automation",
        name: "Workflow automation",
        summary: "Replace repetitive manual work with a workflow the team can rely on.",
        enquiryTopic: "Workflow automation",
      },
      {
        slug: "automation-troubleshooting",
        name: "Automation troubleshooting",
        summary: "Find why a workflow stopped and put the hand-off back in order.",
        enquiryTopic: "Automation troubleshooting",
      },
      {
        slug: "systems-integration",
        name: "Systems integration",
        summary: "Connect the systems that should already be passing work to each other.",
        enquiryTopic: "Systems integration",
      },
      {
        slug: "integration-config",
        name: "Integration and Config",
        summary: "Configure the tools a business already uses and connect them so work is not left half-finished.",
        enquiryTopic: "Integration and Config",
      },
      {
        slug: "request-approval",
        name: "Request and approval systems",
        summary: "Give requests a status, an owner, and a recorded decision.",
        enquiryTopic: "Request and approval systems",
      },
      {
        slug: "custom-webapps",
        name: "Custom systems",
        summary: "When a spreadsheet or an email chain needs a proper screen and a clear status.",
        enquiryTopic: "Custom webapp",
      },
    ],
  },
  {
    id: "systems",
    name: "Business systems",
    items: [
      {
        slug: "microsoft-365",
        name: "Microsoft 365",
        summary: "Help a business use the Microsoft 365 tools it already pays for, together.",
        enquiryTopic: "Microsoft 365",
      },
      {
        slug: "sharepoint",
        name: "SharePoint Design and Integration",
        summary: "Design a SharePoint environment and connect it to the way the team already works.",
        enquiryTopic: "SharePoint Design and Integration",
      },
      {
        slug: "client-portal",
        name: "Client Operation Portals",
        summary: "Bring client information, processes and workflows into organised portals.",
        enquiryTopic: "Client Operation Portals",
      },
      {
        slug: "excel",
        name: "Excel automation",
        summary: "Repair a fragile workbook and reduce the manual work around it.",
        enquiryTopic: "Excel troubleshooting",
      },
      {
        slug: "zoho",
        name: "Zoho setup and optimisation",
        summary: "Choose, configure, and simplify the Zoho apps the business actually needs.",
        enquiryTopic: "Zoho configuration",
      },
    ],
  },
  {
    id: "insight",
    name: "Data and insight",
    items: [
      {
        slug: "analytics",
        name: "Analytics",
        summary: "Set up or repair measurement so the website’s numbers can be trusted.",
        enquiryTopic: "Website analytics",
      },
      {
        slug: "reporting",
        name: "Reporting",
        summary: "Turn the numbers you already have into a report someone can act on.",
        enquiryTopic: "Reporting",
      },
      {
        slug: "dashboards",
        name: "Business dashboards",
        summary: "Put the few figures that matter where the people who decide can see them.",
        enquiryTopic: "Business dashboards",
      },
      {
        slug: "performance-monitoring",
        name: "Performance monitoring",
        summary: "Notice when a workflow, a form, or a report stops doing its job.",
        enquiryTopic: "Performance monitoring",
      },
    ],
  },
];

export const buildSteps = [
  {
    name: "Discovery",
    text: "We talk through the problem, who does the work today, and what a better week would look like. You do not need a specification to start.",
  },
  {
    name: "Scoping",
    text: "We write what will be built, what will not, and what we need from you. You can decide whether to go ahead before any build starts.",
  },
  {
    name: "Build",
    text: "We design and build the agreed thing, and show you progress you can react to. The length depends on the work — we do not publish a fixed timeline here.",
  },
  {
    name: "Handover",
    text: "You get the working system, notes on how to use it, and what to do if it breaks.",
  },
  {
    name: "Optional support",
    text: "If you want us to stay on, we agree a support plan. Support is optional. It is not bundled into the build unless we say so in the scope.",
  },
];

export const supportPlans = [
  {
    id: "care",
    name: "Care",
    for: "Maintenance and support for one system.",
    includes: [
      "Fixes and small adjustments to that one system",
      "Answers about how that system works",
      "A named point of contact for it",
    ],
    notIncluded: ["Other systems", "New projects or a feature backlog", "Monitoring across several tools"],
  },
  {
    id: "operations",
    name: "Operations",
    for: "Several connected systems, plus monitoring.",
    includes: [
      "Care-level maintenance for each system named in the agreement",
      "Agreed checks so a failed hand-off is noticed",
      "A note to you when one of those checks fails",
    ],
    notIncluded: ["A standing backlog of new features", "Systems that are not named in the agreement"],
  },
];

export const supportDisclaimer =
  "These are proposed plan scopes, not a contract. Exact response times, working hours, exclusions, and fees are set in each client agreement. Nothing on this page is a price or a guarantee.";

export const tools = [
  {
    slug: "certflow",
    name: "Certflow",
    summary: "Training teams that need to generate and send certificates efficiently.",
    audience: "Training teams who still build hundreds of certificates by hand or through a flow that dies halfway.",
    outcome:
      "Upload the list, check the certificate with the logo, download the PDFs, and retry only the rows that did not send.",
    features: [
      "Excel or CSV in, with column mapping",
      "Live PDF preview, logo on the left or right, three layouts and three colours",
      "One PDF per learner in a ZIP, plus a result sheet",
      "A row that fails or is throttled does not stop the rest",
    ],
  },
  {
    slug: "growth-check",
    name: "Website Growth Check",
    summary: "Find the most important problems affecting a website's visibility, trust, conversion and growth.",
    audience: "A business owner who wants a clear first read of the website before a paid audit.",
    outcome:
      "Up to five findings, ordered by commercial importance, and a path to the full Website Revenue & Growth Audit.",
    features: [
      "A check of the public page, with no account",
      "Up to five findings: status, area, and why it may matter",
      "Not a full audit, and not a repair guide",
      "The paid audit, the fix, the growth work, and monitoring are booked separately",
    ],
  },
  {
    slug: "license-compare",
    name: "Microsoft licence comparison",
    summary: "Compare Microsoft 365 options based on business requirements and budget.",
    audience: "Anyone choosing a Microsoft suite on budget, what it has to cover, and where it is bought.",
    outcome: "A plain answer on which of the two fits better, and why, from the prices Microsoft publishes.",
    features: [
      "A read of Microsoft’s public commercial price list",
      "Two products, a user count, and an optional per-user budget",
      "Suites with Teams, or the EEA and Switzerland suites without Teams",
      "Free. US dollars, before tax, and not a quote or a partner discount",
    ],
  },
  {
    slug: "zoho-fit",
    name: "Zoho setup check",
    summary: "Identify which Zoho applications may suit a business and where unnecessary subscriptions may exist.",
    audience: "Anyone about to buy Zoho, or already paying for apps they do not open.",
    outcome: "The smallest set for the work you named, and the few setup steps that mean it is actually done.",
    features: [
      "You tick the work, not a product catalogue",
      "A short list of what to get, what to keep, and what to skip",
      "A note when Zoho One, a second invoicing app, or a side tool is extra",
      "It does not sign into Zoho and it is not a quote",
    ],
  },
];

export const oneOffPrices: [string, string][] = [
  ["Excel problem diagnosis", "From R2,000"],
  ["Excel workbook or reporting repair", "From R3,000"],
  ["Website analytics setup or repair", "From R5,000"],
  ["Workflow automation assessment", "From R4,000"],
  ["Workflow automation build", "From R12,500"],
  ["Zoho configuration and integrations", "From R15,000"],
  ["SharePoint workspace and library design", "From R15,000"],
  ["Custom webapp scoping", "From R7,500"],
  ["Custom webapp design and build", "From R25,000"],
];

export const monthlyPrices: [string, string, string][] = [
  ["Care", "R3,500/month", "Ongoing maintenance and support for one agreed system."],
  ["Operations", "From R8,000/month", "Support for connected systems, with agreed workflow checks and issue alerts."],
];
