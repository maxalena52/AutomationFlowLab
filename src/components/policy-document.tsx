import { Link } from "@tanstack/react-router";
import legal from "@/content/legal.json";

export type PolicyPage = {
  title: string;
  description: string;
  sections: { id: string; heading: string; paragraphs: string[] }[];
};

const meta = legal.meta;
const linkRe = /(https?:\/\/[^\s]+|Automationflowlab\.info@proton\.me)/g;

function looksLikeHeading(text: string) {
  const value = text.trim();
  if (value.length > 72 || value.length < 3) return false;
  if (/[.!?:]$/.test(value) || value.startsWith("_") || value.startsWith("http") || value.includes("@")) return false;
  return /^[A-Z]/.test(value);
}

function RichText({ text }: { text: string }) {
  const parts = text.split(linkRe);
  return (
    <>
      {parts.map((part, index) => {
        if (part.startsWith("http://") || part.startsWith("https://")) {
          const clean = part.replace(/[).,;]+$/, "");
          const rest = part.slice(clean.length);
          return (
            <span key={index}>
              <a className="font-semibold text-ink underline decoration-line underline-offset-4" href={clean}>
                {clean}
              </a>
              {rest}
            </span>
          );
        }
        if (part === meta.email) {
          return (
            <a key={index} className="font-semibold text-ink underline decoration-line underline-offset-4" href={`mailto:${meta.email}`}>
              {meta.email}
            </a>
          );
        }
        return <span key={index}>{part}</span>;
      })}
    </>
  );
}

export function PolicyDocument({ page }: { page: PolicyPage }) {
  return (
    <article className="pb-20">
      <header className="mx-auto w-full max-w-3xl px-5 pb-8 pt-12 md:pt-16">
        <Link to="/legal" className="text-sm font-semibold text-primary">
          Legal and Policies
        </Link>
        <h1 className="mt-4 font-display text-4xl text-ink md:text-5xl">{page.title}</h1>
        <p className="mt-4 text-sm text-muted">Version {meta.version}</p>
        <p className="text-sm text-muted">Effective {meta.effectiveDate}</p>
        <p className="mt-4 text-lg text-muted">{page.description}</p>
      </header>
      <nav className="mx-auto w-full max-w-3xl px-5" aria-label="On this page">
        <h2 className="font-semibold">On this page</h2>
        <ol className="mt-3 space-y-2 text-sm">
          {page.sections.map((section) => (
            <li key={section.id}>
              <a className="font-semibold text-primary" href={`#${section.id}`}>
                {section.heading}
              </a>
            </li>
          ))}
        </ol>
      </nav>
      <div className="mx-auto mt-10 w-full max-w-3xl space-y-10 px-5">
        {page.sections.map((section) => (
          <section key={section.id} id={section.id} className="scroll-mt-24">
            <h2 className="font-display text-2xl">{section.heading}</h2>
            <div className="mt-4 space-y-4 leading-relaxed text-muted">
              {section.paragraphs.map((paragraph) =>
                looksLikeHeading(paragraph) ? (
                  <h3 key={paragraph} className="pt-2 font-display text-xl text-ink">
                    {paragraph}
                  </h3>
                ) : (
                  <p key={paragraph}>
                    <RichText text={paragraph} />
                  </p>
                ),
              )}
            </div>
          </section>
        ))}
      </div>
      <p className="mx-auto mt-12 w-full max-w-3xl px-5">
        <Link to="/legal" className="font-semibold text-primary">
          Back to Legal and Policies
        </Link>
      </p>
    </article>
  );
}

export const policies = {
  terms: legal.terms as PolicyPage,
  privacy: legal.privacy as PolicyPage,
  cookies: legal.cookies as PolicyPage,
  community: legal.community as PolicyPage,
  copyright: legal.copyright as PolicyPage,
  safety: legal.safety as PolicyPage,
  contact: legal.contact as PolicyPage,
};

export const legalIndex = legal.index as { to: string; title: string; text: string; hash?: string }[];
