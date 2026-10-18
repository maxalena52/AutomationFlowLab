import { i as __toESM } from "../_runtime.mjs";
import { i as company } from "./site-BaGvWwC4.mjs";
import { J as require_react, _ as createFileRoute, b as useRouter, d as Scripts, f as HeadContent, g as lazyRouteComponent, h as Outlet, m as createRouter, v as createRootRoute, x as require_jsx_runtime, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as ArrowLeft, t as TriangleAlert } from "../_libs/lucide-react.mjs";
import { a as union, i as string, n as number, r as object, t as literal } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-DM88CS5m.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
var FALLBACK_MESSAGE = "An unexpected error occurred. Try reloading the page.";
function errorMessage(error) {
	if (error instanceof Error && error.message) return error.message;
	if (typeof error === "string" && error) return error;
	return FALLBACK_MESSAGE;
}
function AppErrorComponent({ error }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "flex min-h-screen flex-col items-center justify-center gap-3 px-6 text-center bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-red-500",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, {
					className: "size-10",
					strokeWidth: 2
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-lg font-semibold",
				children: "Something went wrong"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-md text-sm break-words text-zinc-500 dark:text-zinc-400",
				children: errorMessage(error)
			})
		]
	});
}
/**
* Path-based preview hosts serve the dev server under `/{port_id}/` and strip
* that prefix before forwarding, so SSR sees `/` while the browser URL keeps the
* prefix. TanStack Start resets `basepath` on hydration, so a `rewrite` keeps
* client routing and generated links aligned with the public URL.
*/
var PATH_BASED_PREVIEW_HOSTS = /* @__PURE__ */ new Set([
	"preview.grok.genai.mil",
	"preview.grok.mil",
	"preview.grokgsac.com"
]);
var PORT_ID_PREFIX = /^\/hds-[a-z0-9]+-\d+-[a-z0-9]+(?=\/|$)/i;
function previewPathPrefix(hostname, pathname) {
	if (!PATH_BASED_PREVIEW_HOSTS.has(hostname.toLowerCase())) return void 0;
	return PORT_ID_PREFIX.exec(pathname)?.[0];
}
function prefixRewrite(prefix) {
	return {
		input: ({ url }) => {
			if (url.pathname === prefix) url.pathname = "/";
			else if (url.pathname.startsWith(`${prefix}/`)) url.pathname = url.pathname.slice(prefix.length);
			return url;
		},
		output: ({ url }) => {
			url.pathname = `${prefix}${url.pathname}`;
			return url;
		}
	};
}
function previewPathRewrite() {
	if (typeof window === "undefined") return void 0;
	const prefix = previewPathPrefix(window.location.hostname, window.location.pathname);
	return prefix ? prefixRewrite(prefix) : void 0;
}
/**
* App-wide client provider mounted once near the root (in `src/routes/__root.tsx`):
*
*   <AuthProvider><Outlet /></AuthProvider>
*
* Better Auth's React client (`@/lib/auth/client`) needs NO context provider —
* its `useSession()` works standalone — so this is a passthrough today. It's
* kept as the single, stable mount point for any future client-side providers
* (e.g. a toast or theme provider) without churning the root shell.
*/
function AuthProvider({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
}
var CONNECTOR_TOKEN_READY_EVENT = "grok:connector-token-ready";
function isGrokEmbedderOrigin(origin) {
	try {
		const url = new URL(origin);
		if (url.protocol !== "https:" && url.protocol !== "http:") return false;
		const host = url.hostname.toLowerCase();
		if (host === "grok.com" || host.endsWith(".grok.com")) return true;
		if (host === "localhost" || host === "127.0.0.1" || host === "[::1]") return true;
		return false;
	} catch {
		return false;
	}
}
function isSandboxPreviewGuestHost(hostname) {
	const host = hostname.toLowerCase();
	return host === "grok-sandbox.com" || host.endsWith(".grok-sandbox.com");
}
function isRemintPreviewPair(guestHost, parentHost) {
	const guest = guestHost.toLowerCase();
	const parent = parentHost.toLowerCase();
	const i = guest.indexOf(".preview.");
	if (i <= 0) return false;
	const label = guest.slice(0, i);
	const rest = guest.slice(i + 9);
	if (label.includes(".") || !rest.includes(".")) return false;
	return parent === rest || parent === `grok.${rest}`;
}
function resolveParentEmbedderOrigin(parentIsSelf, referrer, ancestorOrigin, guestHostname = "") {
	if (parentIsSelf) return null;
	for (const candidate of [referrer, ancestorOrigin ?? ""].filter(Boolean)) try {
		const url = new URL(candidate.includes("://") ? candidate : `https://${candidate}`);
		if (url.protocol !== "https:" && url.protocol !== "http:") continue;
		if (isGrokEmbedderOrigin(url.origin)) return url.origin;
		if (isSandboxPreviewGuestHost(guestHostname) || isRemintPreviewPair(guestHostname, url.hostname)) return url.origin;
	} catch {}
	return null;
}
/**
* Guest side of the grok-web ↔ sandbox preview postMessage bridge.
*
* Activates only when this page is framed by an allowlisted Grok embedder.
* Top-level runs (download/export, local `npm run dev`, deployed sites) noop.
*/
var PREVIEW_BRIDGE_CHANNEL = "grok-preview-bridge";
var EnvelopeSchema = object({
	channel: literal(PREVIEW_BRIDGE_CHANNEL),
	version: number().int().positive(),
	type: string().min(1)
});
var HelloSchema = EnvelopeSchema.extend({ type: literal("hello") });
var NavigateSchema = EnvelopeSchema.extend({
	type: literal("navigate"),
	path: string().min(1)
});
var HistorySchema = EnvelopeSchema.extend({
	type: literal("history"),
	delta: union([literal(-1), literal(1)])
});
var ConnectorTokenReadySchema = EnvelopeSchema.extend({ type: literal("connector-token-ready") });
function isSafeBridgePath(path) {
	if (!path.startsWith("/") || path.startsWith("//") || path.includes("\\")) return false;
	try {
		return new URL(path, "https://preview.invalid").origin === "https://preview.invalid";
	} catch {
		return false;
	}
}
/**
* Origin of the Grok embedder framing this page, or null when the page runs
* top-level (download/export, local `npm run dev`, deployed sites) or under a
* non-Grok parent. Client-only; null during SSR.
*/
function resolveCurrentEmbedderOrigin() {
	if (typeof window === "undefined") return null;
	const ancestorOrigin = typeof location.ancestorOrigins !== "undefined" && location.ancestorOrigins.length > 0 ? location.ancestorOrigins[0] : null;
	return resolveParentEmbedderOrigin(window.parent === window, document.referrer, ancestorOrigin, window.location.hostname);
}
/**
* Install host↔guest messaging. Returns a dispose function.
* Noops (returns a no-op dispose) when not embedded under a Grok parent.
*/
function installPreviewHostBridge(options = {}) {
	const parentOrigin = resolveCurrentEmbedderOrigin();
	if (parentOrigin === null) return () => {};
	const ROOT_STATE_KEY = "__grokPreviewBridgeRoot";
	const originalPushState = window.history.pushState.bind(window.history);
	const originalReplaceState = window.history.replaceState.bind(window.history);
	const isAtHistoryRoot = () => {
		const state = window.history.state;
		return Boolean(state && typeof state === "object" && state[ROOT_STATE_KEY] === true);
	};
	try {
		const current = window.history.state;
		if (!(current !== null && typeof current === "object" && Object.prototype.hasOwnProperty.call(current, ROOT_STATE_KEY))) {
			const isRoot = window.history.length <= 1;
			originalReplaceState(current && typeof current === "object" ? {
				...current,
				[ROOT_STATE_KEY]: isRoot
			} : { [ROOT_STATE_KEY]: isRoot }, "", window.location.href);
		}
	} catch {}
	const post = (message) => {
		window.parent.postMessage(message, parentOrigin);
	};
	const reportLocation = () => {
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "location",
			path: window.location.pathname || "/",
			search: window.location.search,
			hash: window.location.hash
		});
	};
	const reportRoutes = () => {
		const paths = options.getRoutePaths?.() ?? [];
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "routes",
			paths
		});
	};
	const defaultNavigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		try {
			const url = new URL(path, window.location.origin);
			if (url.origin !== window.location.origin) return;
			const next = `${url.pathname}${url.search}${url.hash}`;
			window.history.pushState(window.history.state, "", next);
			window.dispatchEvent(new PopStateEvent("popstate", { state: window.history.state }));
		} catch {}
	};
	const navigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		if (options.navigate) {
			options.navigate(path);
			return;
		}
		defaultNavigate(path);
	};
	const announce = () => {
		reportLocation();
		reportRoutes();
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "ready"
		});
	};
	const onHello = (data) => {
		if (!HelloSchema.safeParse(data).success) return;
		announce();
	};
	const onNavigate = (data) => {
		const parsed = NavigateSchema.safeParse(data);
		if (!parsed.success) return;
		navigate(parsed.data.path);
		queueMicrotask(reportLocation);
	};
	const onHistory = (data) => {
		const parsed = HistorySchema.safeParse(data);
		if (!parsed.success) return;
		if (parsed.data.delta === -1 && isAtHistoryRoot()) return;
		window.history.go(parsed.data.delta);
	};
	const onConnectorTokenReady = (data) => {
		if (!ConnectorTokenReadySchema.safeParse(data).success) return;
		window.dispatchEvent(new Event(CONNECTOR_TOKEN_READY_EVENT));
	};
	const hostMessageHandlers = /* @__PURE__ */ new Map([
		["hello", onHello],
		["navigate", onNavigate],
		["history", onHistory],
		["connector-token-ready", onConnectorTokenReady]
	]);
	const onMessage = (event) => {
		if (event.source !== window.parent) return;
		if (event.origin !== parentOrigin) return;
		const envelope = EnvelopeSchema.safeParse(event.data);
		if (!envelope.success || envelope.data.version !== 1) return;
		hostMessageHandlers.get(envelope.data.type)?.(event.data);
	};
	const onPopState = () => {
		reportLocation();
	};
	const onHashChange = () => {
		reportLocation();
	};
	window.history.pushState = (data, unused, url) => {
		const next = data && typeof data === "object" ? {
			...data,
			[ROOT_STATE_KEY]: false
		} : data;
		originalPushState(next, unused, url);
		reportLocation();
	};
	window.history.replaceState = (data, unused, url) => {
		const next = isAtHistoryRoot() ? {
			...data && typeof data === "object" ? data : {},
			[ROOT_STATE_KEY]: true
		} : data;
		originalReplaceState(next, unused, url);
		reportLocation();
	};
	window.addEventListener("message", onMessage);
	window.addEventListener("popstate", onPopState);
	window.addEventListener("hashchange", onHashChange);
	announce();
	return () => {
		window.removeEventListener("message", onMessage);
		window.removeEventListener("popstate", onPopState);
		window.removeEventListener("hashchange", onHashChange);
		window.history.pushState = originalPushState;
		window.history.replaceState = originalReplaceState;
	};
}
/** Collect static path patterns from a TanStack route tree (best-effort). */
function collectRoutePathsFromTree(routeTree) {
	const paths = /* @__PURE__ */ new Set();
	const walk = (node) => {
		if (!node || typeof node !== "object") return;
		const record = node;
		const full = typeof record.fullPath === "string" ? record.fullPath : typeof record.path === "string" ? record.path : null;
		if (full !== null && full !== "") paths.add(full.startsWith("/") ? full : `/${full}`);
		else if (full === "") paths.add("/");
		const children = record.children;
		if (Array.isArray(children)) for (const child of children) walk(child);
		else if (children && typeof children === "object") for (const child of Object.values(children)) walk(child);
	};
	walk(routeTree);
	return [...paths];
}
/**
* Mount once in `__root.tsx` so the Grok preview chrome can drive navigation
* (and later receive registered routes). Noops when the app is not embedded.
*/
function PreviewHostBridge() {
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		return installPreviewHostBridge({
			navigate: (path) => {
				router.history.push(path);
			},
			getRoutePaths: () => collectRoutePathsFromTree(router.routeTree)
		});
	}, [router]);
	return null;
}
function active(pathname, to, exact = false) {
	if (exact) return pathname === to;
	return pathname === to || pathname.startsWith(`${to}/`);
}
function NavLinks({ pathname }) {
	const base = "inline-flex h-11 items-center rounded-sm px-3 text-sm font-semibold";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: [
		{
			to: "/tools/growth-check",
			label: "Website Growth Check"
		},
		{
			to: "/audit",
			label: "Full Audit"
		},
		{
			to: "/services",
			label: "Services",
			exact: true
		},
		{
			to: "/about",
			label: "About"
		},
		{
			to: "/contact",
			label: "Contact"
		}
	].map((item) => {
		const on = active(pathname, item.to, item.exact);
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: item.to,
			search: item.to === "/contact" ? { topic: "" } : void 0,
			"aria-current": on ? "page" : void 0,
			className: `${base} ${on ? "bg-surface text-ink" : "text-muted hover:text-ink"}`,
			children: item.label
		}, item.to);
	}) });
}
function CheckButton({ pathname, block = false }) {
	const className = `inline-flex h-12 items-center justify-center rounded-sm bg-primary px-4 text-sm font-semibold text-primary-fg ${block ? "w-full" : ""}`;
	if (pathname === "/") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
		href: "#check",
		className,
		children: "Check my website"
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to: "/tools/growth-check",
		className,
		children: "Check my website"
	});
}
function SiteShell({ children }) {
	const router = useRouter();
	const pathname = router.state.location.pathname;
	function back() {
		if (typeof window !== "undefined" && window.history.length > 1) {
			router.history.back();
			return;
		}
		router.navigate({ to: pathname.startsWith("/tools/") ? "/tools" : "/" });
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-screen flex-col bg-paper text-ink",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "#content",
				className: "sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-surface focus:px-3 focus:py-2",
				children: "Skip to content"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
				className: "sticky top-0 z-40 border-b border-line bg-paper",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex w-full max-w-6xl flex-wrap items-center gap-x-3 gap-y-2 py-3 pl-5 pr-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex min-w-0 items-center gap-2",
						children: [pathname === "/" ? null : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: back,
							className: "grid size-11 shrink-0 place-items-center rounded-sm border border-line bg-surface text-ink",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { "aria-hidden": "true" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "sr-only",
								children: "Back"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/",
							className: "flex min-w-0 items-center",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: "/logo.png",
								alt: "Automation Flow Lab",
								className: "h-auto w-40 sm:w-52"
							})
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
						className: "flex flex-wrap items-center gap-1",
						"aria-label": "Primary",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavLinks, { pathname }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckButton, { pathname })]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				id: "content",
				className: "flex-1",
				children
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
				className: "border-t border-line",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto grid w-full max-w-6xl gap-8 px-5 py-12 md:grid-cols-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: "/logo.png",
									alt: "Automation Flow Lab",
									className: "h-auto w-52"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 max-w-sm text-sm text-muted",
									children: company.supporting
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 max-w-sm text-sm text-muted",
									children: company.positioning
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-4 text-sm",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										className: "font-semibold underline decoration-line underline-offset-4",
										href: `mailto:${company.email}`,
										children: company.email
									})
								})
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-semibold",
								children: "Automation Flow Lab"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
								className: "mt-3 space-y-2 text-sm",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/tools/growth-check",
										className: "text-muted hover:text-ink",
										children: "Website Growth Check"
									}) }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/audit",
										className: "text-muted hover:text-ink",
										children: "Full Website Audit"
									}) }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/services",
										className: "text-muted hover:text-ink",
										children: "Services"
									}) }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/about",
										className: "text-muted hover:text-ink",
										children: "About"
									}) }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/contact",
										search: { topic: "" },
										className: "text-muted hover:text-ink",
										children: "Contact"
									}) })
								]
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-semibold",
								children: "Resources"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
								className: "mt-3 space-y-2 text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/tools",
									className: "text-muted hover:text-ink",
									children: "Tools"
								}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/pricing",
									className: "text-muted hover:text-ink",
									children: "Pricing"
								}) })]
							})] })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
						className: "mx-auto flex w-full max-w-6xl flex-wrap gap-x-4 gap-y-2 px-5 pb-4 text-sm",
						"aria-label": "Legal",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/privacy",
								className: "font-semibold text-muted hover:text-ink",
								children: "Privacy"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/terms",
								className: "font-semibold text-muted hover:text-ink",
								children: "Terms"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/cookies",
								className: "font-semibold text-muted hover:text-ink",
								children: "Cookies"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/community-standards",
								className: "font-semibold text-muted hover:text-ink",
								children: "Community Standards"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/copyright",
								className: "font-semibold text-muted hover:text-ink",
								children: "Copyright"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/legal-safety",
								className: "font-semibold text-muted hover:text-ink",
								children: "Legal & Safety"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/legal",
								className: "font-semibold text-muted hover:text-ink",
								children: "Legal"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/contact",
								search: { topic: "Staff enquiry" },
								className: "font-semibold text-muted hover:text-ink",
								children: "Staff inbox"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mx-auto w-full max-w-6xl px-5 pb-2 text-xs text-muted",
						children: [
							company.legalName,
							" · Company registration ",
							company.registration,
							" · ",
							company.country
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mx-auto w-full max-w-6xl px-5 pb-8 text-xs text-muted",
						children: "Information on this site is for general use at your own discretion. Automation Flow Lab is not liable for any loss, cost, or decision made from it. Check the original source before you buy or rely on a figure."
					})
				]
			})
		]
	});
}
function PageHeader({ eyebrow, title, lede }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "mx-auto w-full max-w-6xl px-5 pb-10 pt-12 md:pt-16",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm font-semibold text-primary",
				children: eyebrow
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-3 max-w-3xl font-display text-4xl text-ink md:text-5xl",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 max-w-2xl text-lg text-muted",
				children: lede
			})
		]
	});
}
var styles_default = "/assets/styles-CcuNVG7E.css";
var Route$20 = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Automation Flow Lab" },
			{
				name: "description",
				content: "Website Growth Check: be found, trusted and chosen. Also website audits, search growth, automation, SharePoint, client portals, Microsoft 365, Excel, Zoho and reporting."
			},
			{
				name: "theme-color",
				content: "#c4004f"
			}
		],
		links: [
			{
				rel: "icon",
				href: "/favicon.ico",
				sizes: "48x48"
			},
			{
				rel: "apple-touch-icon",
				sizes: "180x180",
				href: "/__grok/icon-180.png"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600&family=Source+Sans+3:ital,wght@0,400;0,600;1,400&display=swap"
			}
		]
	}),
	component: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		suppressHydrationWarning: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreviewHostBridge, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) }) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})
		] })]
	})
});
var $$splitComponentImporter$19 = () => import("./routes-hHkxT97z.mjs");
var Route$19 = createFileRoute("/")({
	head: () => ({ meta: [{ title: "Website Growth Check and Business Systems — Automation Flow Lab" }, {
		name: "description",
		content: company.description
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$19, "component")
});
var $$splitComponentImporter$18 = () => import("./about-C7woWPDu.mjs");
var Route$18 = createFileRoute("/about")({
	head: () => ({ meta: [{ title: "About — Automation Flow Lab" }] }),
	component: lazyRouteComponent($$splitComponentImporter$18, "component")
});
var $$splitComponentImporter$17 = () => import("./audit-D5RoRkBt.mjs");
var Route$17 = createFileRoute("/audit")({
	head: () => ({ meta: [{ title: "Website Revenue & Growth Audit — Automation Flow Lab" }] }),
	component: lazyRouteComponent($$splitComponentImporter$17, "component")
});
var $$splitComponentImporter$16 = () => import("./community-standards-BNBKZoBF.mjs");
var Route$16 = createFileRoute("/community-standards")({
	head: () => ({ meta: [{ title: "Community Standards — Automation Flow Lab" }] }),
	component: lazyRouteComponent($$splitComponentImporter$16, "component")
});
var $$splitComponentImporter$15 = () => import("./contact-HgASb-Jj.mjs");
var Route$15 = createFileRoute("/contact")({
	validateSearch: (search) => ({ topic: typeof search.topic === "string" ? search.topic : "" }),
	head: () => ({ meta: [{ title: "Contact — Automation Flow Lab" }] }),
	component: lazyRouteComponent($$splitComponentImporter$15, "component")
});
var $$splitComponentImporter$14 = () => import("./cookies-BW8L_Cvc.mjs");
var Route$14 = createFileRoute("/cookies")({
	head: () => ({ meta: [{ title: "Cookie Policy — Automation Flow Lab" }] }),
	component: lazyRouteComponent($$splitComponentImporter$14, "component")
});
var $$splitComponentImporter$13 = () => import("./copyright-tp126UfS.mjs");
var Route$13 = createFileRoute("/copyright")({
	head: () => ({ meta: [{ title: "Copyright Policy — Automation Flow Lab" }] }),
	component: lazyRouteComponent($$splitComponentImporter$13, "component")
});
var $$splitComponentImporter$12 = () => import("./custom-builds-DzL8VxMT.mjs");
var Route$12 = createFileRoute("/custom-builds")({
	head: () => ({ meta: [{ title: "Custom Builds — Automation Flow Lab" }] }),
	component: lazyRouteComponent($$splitComponentImporter$12, "component")
});
var $$splitComponentImporter$11 = () => import("./legal-CCFVUtI4.mjs");
var Route$11 = createFileRoute("/legal")({
	head: () => ({ meta: [{ title: "Legal and Policies — Automation Flow Lab" }] }),
	component: lazyRouteComponent($$splitComponentImporter$11, "component")
});
var $$splitComponentImporter$10 = () => import("./legal-safety-C9a8rZnC.mjs");
var Route$10 = createFileRoute("/legal-safety")({
	head: () => ({ meta: [{ title: "Legal and Safety — Automation Flow Lab" }] }),
	component: lazyRouteComponent($$splitComponentImporter$10, "component")
});
var $$splitComponentImporter$9 = () => import("./pricing-BcBNJPvv.mjs");
var Route$9 = createFileRoute("/pricing")({
	head: () => ({ meta: [{ title: "Pricing — Automation Flow Lab" }] }),
	component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
var $$splitComponentImporter$8 = () => import("./privacy-Cs5qZd61.mjs");
var Route$8 = createFileRoute("/privacy")({
	head: () => ({ meta: [{ title: "Privacy Policy — Automation Flow Lab" }] }),
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
var $$splitComponentImporter$7 = () => import("./services-CcJFju9T.mjs");
var Route$7 = createFileRoute("/services")({
	head: () => ({ meta: [{ title: "Services — Automation Flow Lab" }] }),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("./support-plans-YQncy4th.mjs");
var Route$6 = createFileRoute("/support-plans")({
	validateSearch: (search) => ({ plan: typeof search.plan === "string" ? search.plan : "" }),
	head: () => ({ meta: [{ title: "Support Plans — Automation Flow Lab" }] }),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./terms-DX6g7suk.mjs");
var Route$5 = createFileRoute("/terms")({
	head: () => ({ meta: [{ title: "Terms of Service — Automation Flow Lab" }] }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./tools-Ddil5E8o.mjs");
var Route$4 = createFileRoute("/tools/")({
	head: () => ({ meta: [{ title: "Tools — Automation Flow Lab" }] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./certflow-DlUDy4ni.mjs");
var Route$3 = createFileRoute("/tools/certflow")({
	head: () => ({ meta: [{ title: "Certflow — Automation Flow Lab" }] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./growth-check-CkOFe7K8.mjs");
var Route$2 = createFileRoute("/tools/growth-check")({
	head: () => ({ meta: [{ title: "Website Growth Check — Automation Flow Lab" }] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./license-compare-xS2yv7wz.mjs");
var Route$1 = createFileRoute("/tools/license-compare")({
	head: () => ({ meta: [{ title: "Microsoft licence comparison — Automation Flow Lab" }] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./zoho-fit-D7JIJy80.mjs");
var Route = createFileRoute("/tools/zoho-fit")({
	head: () => ({ meta: [{ title: "Zoho setup check — Automation Flow Lab" }] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var IndexRoute = Route$19.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$20
});
var AboutRoute = Route$18.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$20
});
var AuditRoute = Route$17.update({
	id: "/audit",
	path: "/audit",
	getParentRoute: () => Route$20
});
var CommunityStandardsRoute = Route$16.update({
	id: "/community-standards",
	path: "/community-standards",
	getParentRoute: () => Route$20
});
var ContactRoute = Route$15.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$20
});
var CookiesRoute = Route$14.update({
	id: "/cookies",
	path: "/cookies",
	getParentRoute: () => Route$20
});
var CopyrightRoute = Route$13.update({
	id: "/copyright",
	path: "/copyright",
	getParentRoute: () => Route$20
});
var CustomBuildsRoute = Route$12.update({
	id: "/custom-builds",
	path: "/custom-builds",
	getParentRoute: () => Route$20
});
var LegalRoute = Route$11.update({
	id: "/legal",
	path: "/legal",
	getParentRoute: () => Route$20
});
var LegalSafetyRoute = Route$10.update({
	id: "/legal-safety",
	path: "/legal-safety",
	getParentRoute: () => Route$20
});
var PricingRoute = Route$9.update({
	id: "/pricing",
	path: "/pricing",
	getParentRoute: () => Route$20
});
var PrivacyRoute = Route$8.update({
	id: "/privacy",
	path: "/privacy",
	getParentRoute: () => Route$20
});
var ServicesRoute = Route$7.update({
	id: "/services",
	path: "/services",
	getParentRoute: () => Route$20
});
var SupportPlansRoute = Route$6.update({
	id: "/support-plans",
	path: "/support-plans",
	getParentRoute: () => Route$20
});
var TermsRoute = Route$5.update({
	id: "/terms",
	path: "/terms",
	getParentRoute: () => Route$20
});
var ToolsIndexRoute = Route$4.update({
	id: "/tools/",
	path: "/tools/",
	getParentRoute: () => Route$20
});
var rootRouteChildren = {
	IndexRoute,
	AboutRoute,
	AuditRoute,
	CommunityStandardsRoute,
	ContactRoute,
	CookiesRoute,
	CopyrightRoute,
	CustomBuildsRoute,
	LegalRoute,
	LegalSafetyRoute,
	PricingRoute,
	PrivacyRoute,
	ServicesRoute,
	SupportPlansRoute,
	TermsRoute,
	ToolsCertflowRoute: Route$3.update({
		id: "/tools/certflow",
		path: "/tools/certflow",
		getParentRoute: () => Route$20
	}),
	ToolsGrowthCheckRoute: Route$2.update({
		id: "/tools/growth-check",
		path: "/tools/growth-check",
		getParentRoute: () => Route$20
	}),
	ToolsLicenseCompareRoute: Route$1.update({
		id: "/tools/license-compare",
		path: "/tools/license-compare",
		getParentRoute: () => Route$20
	}),
	ToolsZohoFitRoute: Route.update({
		id: "/tools/zoho-fit",
		path: "/tools/zoho-fit",
		getParentRoute: () => Route$20
	}),
	ToolsIndexRoute
};
var routeTree = Route$20._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
function getRouter() {
	return createRouter({
		routeTree,
		rewrite: previewPathRewrite(),
		defaultErrorComponent: AppErrorComponent
	});
}
//#endregion
export { PageHeader as i, Route$6 as n, Route$15 as r, router_exports as t };
