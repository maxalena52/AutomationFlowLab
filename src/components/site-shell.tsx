import { Link, useRouter } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import type { ReactNode } from "react";
import { company } from "@/lib/site";

function active(pathname: string, to: string, exact = false) {
  if (exact) return pathname === to;
  return pathname === to || pathname.startsWith(`${to}/`);
}

function NavLinks({ pathname }: { pathname: string }) {
  const base = "inline-flex h-11 items-center rounded-sm px-3 text-sm font-semibold";
  const items = [
    { to: "/tools/growth-check" as const, label: "Website Growth Check" },
    { to: "/audit" as const, label: "Full Audit" },
    { to: "/services" as const, label: "Services", exact: true },
    { to: "/about" as const, label: "About" },
    { to: "/contact" as const, label: "Contact" },
  ];
  return (
    <>
      {items.map((item) => {
        const on = active(pathname, item.to, item.exact);
        return (
          <Link
            key={item.to}
            to={item.to}
            search={item.to === "/contact" ? { topic: "" } : undefined}
            aria-current={on ? "page" : undefined}
            className={`${base} ${on ? "bg-surface text-ink" : "text-muted hover:text-ink"}`}
          >
            {item.label}
          </Link>
        );
      })}
    </>
  );
}

function CheckButton({ pathname, block = false }: { pathname: string; block?: boolean }) {
  const className = `inline-flex h-12 items-center justify-center rounded-sm bg-primary px-4 text-sm font-semibold text-primary-fg ${block ? "w-full" : ""}`;
  if (pathname === "/") {
    return (
      <a href="#check" className={className}>
        Check my website
      </a>
    );
  }
  return (
    <Link to="/tools/growth-check" className={className}>
      Check my website
    </Link>
  );
}

export function SiteShell({ children }: { children: ReactNode }) {
  const router = useRouter();
  const pathname = router.state.location.pathname;

  function back() {
    if (typeof window !== "undefined" && window.history.length > 1) {
      router.history.back();
      return;
    }
    router.navigate({ to: pathname.startsWith("/tools/") ? "/tools" : "/" });
  }

  return (
    <div className="flex min-h-screen flex-col bg-paper text-ink">
      <a href="#content" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-surface focus:px-3 focus:py-2">
        Skip to content
      </a>
      <header className="sticky top-0 z-40 border-b border-line bg-paper">
        <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center gap-x-3 gap-y-2 py-3 pl-5 pr-8">
          <div className="flex min-w-0 items-center gap-2">
            {pathname === "/" ? null : (
              <button type="button" onClick={back} className="grid size-11 shrink-0 place-items-center rounded-sm border border-line bg-surface text-ink">
                <ArrowLeft aria-hidden="true" />
                <span className="sr-only">Back</span>
              </button>
            )}
            <Link to="/" className="flex min-w-0 items-center">
              <img src="/logo.png" alt="Automation Flow Lab" className="h-auto w-40 sm:w-52" />
            </Link>
          </div>
          <nav className="flex flex-wrap items-center gap-1" aria-label="Primary">
            <NavLinks pathname={pathname} />
            <CheckButton pathname={pathname} />
          </nav>
        </div>
      </header>
      <main id="content" className="flex-1">
        {children}
      </main>
      <footer className="border-t border-line">
        <div className="mx-auto grid w-full max-w-6xl gap-8 px-5 py-12 md:grid-cols-3">
          <div>
            <img src="/logo.png" alt="Automation Flow Lab" className="h-auto w-52" />
            <p className="mt-2 max-w-sm text-sm text-muted">{company.supporting}</p>
            <p className="mt-2 max-w-sm text-sm text-muted">{company.positioning}</p>
            <p className="mt-4 text-sm">
              <Link to="/contact" search={{ topic: "" }} className="font-semibold underline decoration-line underline-offset-4">
                Contact form
              </Link>
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold">Automation Flow Lab</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li><Link to="/tools/growth-check" className="text-muted hover:text-ink">Website Growth Check</Link></li>
              <li><Link to="/audit" className="text-muted hover:text-ink">Full Website Audit</Link></li>
              <li><Link to="/services" className="text-muted hover:text-ink">Services</Link></li>
              <li><Link to="/about" className="text-muted hover:text-ink">About</Link></li>
              <li><Link to="/contact" search={{ topic: "" }} className="text-muted hover:text-ink">Contact</Link></li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold">Resources</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li><Link to="/tools" className="text-muted hover:text-ink">Tools</Link></li>
              <li><Link to="/pricing" className="text-muted hover:text-ink">Pricing</Link></li>
            </ul>
          </div>
        </div>
        <nav className="mx-auto flex w-full max-w-6xl flex-wrap gap-x-4 gap-y-2 px-5 pb-4 text-sm" aria-label="Legal">
          <Link to="/privacy" className="font-semibold text-muted hover:text-ink">Privacy</Link>
          <Link to="/terms" className="font-semibold text-muted hover:text-ink">Terms</Link>
          <Link to="/cookies" className="font-semibold text-muted hover:text-ink">Cookies</Link>
          <Link to="/community-standards" className="font-semibold text-muted hover:text-ink">Community Standards</Link>
          <Link to="/copyright" className="font-semibold text-muted hover:text-ink">Copyright</Link>
          <Link to="/legal-safety" className="font-semibold text-muted hover:text-ink">Legal & Safety</Link>
          <Link to="/legal" className="font-semibold text-muted hover:text-ink">Legal</Link>
          <Link to="/contact" search={{ topic: "Staff enquiry" }} className="font-semibold text-muted hover:text-ink">Staff inbox</Link>
        </nav>
        <p className="mx-auto w-full max-w-6xl px-5 pb-2 text-xs text-muted">
          {company.legalName} · Company registration {company.registration} · {company.country}
        </p>
        <p className="mx-auto w-full max-w-6xl px-5 pb-8 text-xs text-muted">
          Information on this site is for general use at your own discretion. Automation Flow Lab is not liable for any loss, cost, or decision made from it. Check the original source before you buy or rely on a figure.
        </p>
      </footer>
    </div>
  );
}

export function PageHeader({ eyebrow, title, lede }: { eyebrow: string; title: string; lede: string }) {
  return (
    <header className="mx-auto w-full max-w-6xl px-5 pb-10 pt-12 md:pt-16">
      <p className="text-sm font-semibold text-primary">{eyebrow}</p>
      <h1 className="mt-3 max-w-3xl font-display text-4xl text-ink md:text-5xl">{title}</h1>
      <p className="mt-4 max-w-2xl text-lg text-muted">{lede}</p>
    </header>
  );
}
