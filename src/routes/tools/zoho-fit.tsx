import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/tools/zoho-fit")({
  head: () => ({ meta: [{ title: "Zoho setup check — Automation Flow Lab" }] }),
  component: ZohoFitPage,
});

const needs = [
  { id: "email", label: "Email on your own domain" },
  { id: "shared", label: "One inbox that more than one person reads" },
  { id: "crm", label: "Customers, and where each deal stands" },
  { id: "invoice", label: "Quotes and invoices" },
  { id: "tickets", label: "A support queue, not just an inbox" },
  { id: "news", label: "Newsletters to a list" },
  { id: "projects", label: "Projects with deadlines and more than one person" },
  { id: "people", label: "Employee records and leave" },
  { id: "sign", label: "Documents people have to sign" },
  { id: "book", label: "Appointments people book themselves" },
  { id: "stock", label: "Stock you receive and issue" },
];

const owned = [
  { id: "mail", label: "Zoho Mail" },
  { id: "crm", label: "Zoho CRM" },
  { id: "books", label: "Zoho Books" },
  { id: "invoice", label: "Zoho Invoice" },
  { id: "desk", label: "Zoho Desk" },
  { id: "campaigns", label: "Zoho Campaigns" },
  { id: "projects", label: "Zoho Projects" },
  { id: "people", label: "Zoho People" },
  { id: "sign", label: "Zoho Sign" },
  { id: "bookings", label: "Zoho Bookings" },
  { id: "inventory", label: "Zoho Inventory" },
  { id: "forms", label: "Zoho Forms" },
  { id: "one", label: "Zoho One" },
  { id: "creator", label: "Zoho Creator" },
  { id: "analytics", label: "Zoho Analytics" },
  { id: "social", label: "Zoho Social" },
];

const apps = {
  mail: { name: "Zoho Mail", why: "Domain email and a shared inbox live here. A helpdesk or a CRM is not required for that.", done: ["The domain is added in Zoho Mail", "MX records point at Zoho, not the old host", "Each person who sends mail has their own mailbox"] },
  crm: { name: "Zoho CRM", why: "This is the customer list and the deal stages. A spreadsheet beside it means the CRM is not done.", done: ["One pipeline matches how you actually sell", "New enquiries land here, not in a side sheet"] },
  books: { name: "Zoho Books", why: "Quotes and invoices belong in one place. Zoho Invoice on top of Books is the same job twice.", done: ["Quotes and invoices are raised in Books", "You are not also invoicing from Zoho Invoice"] },
  desk: { name: "Zoho Desk", why: "Use this only when support is a queue with an owner. A shared mailbox is enough for a simple inbox.", done: ["There is one queue and a named owner", "The support address delivers into Desk"] },
  campaigns: { name: "Zoho Campaigns", why: "This is for a newsletter list. One-to-one mail stays in Zoho Mail.", done: ["The list is people who asked to hear from you", "Ordinary replies are still handled in Mail"] },
  projects: { name: "Zoho Projects", why: "Use this for work with a deadline and more than one person. A short task does not need its own app.", done: ["A project is a real piece of work, not every small task", "The people doing the work are on that project"] },
  people: { name: "Zoho People", why: "This is for employee records and leave. The owner’s own mailbox does not need it.", done: ["The people who take leave are in People", "Leave is requested there, not in email threads"] },
  sign: { name: "Zoho Sign", why: "Only for documents someone must sign. A PDF in email is enough when a signature is not required.", done: ["The documents that need a signature are sent from Sign"] },
  bookings: { name: "Zoho Bookings", why: "Only when people book a time themselves. Arranging a call by email does not need it.", done: ["The booking page is the way appointments are made"] },
  inventory: { name: "Zoho Inventory", why: "Use this when you receive and issue stock. A short price list belongs in Books, not a warehouse app.", done: ["Stock in and stock out are recorded here", "Invoices for those goods still go through Books"] },
} as const;

type AppId = keyof typeof apps;

function recommend(needIds: string[], haveIds: string[]) {
  const need = new Set(needIds);
  const have = new Set(haveIds);
  const wanted = new Set<AppId>();
  if (need.has("email") || need.has("shared")) wanted.add("mail");
  if (need.has("crm")) wanted.add("crm");
  if (need.has("invoice") || need.has("stock")) wanted.add("books");
  if (need.has("tickets")) wanted.add("desk");
  if (need.has("news")) wanted.add("campaigns");
  if (need.has("projects")) wanted.add("projects");
  if (need.has("people")) wanted.add("people");
  if (need.has("sign")) wanted.add("sign");
  if (need.has("book")) wanted.add("bookings");
  if (need.has("stock")) wanted.add("inventory");
  const get = [...wanted].filter((id) => !have.has(id)).map((id) => apps[id]);
  const keep = [...wanted].filter((id) => have.has(id)).map((id) => apps[id]);
  const waste: { name: string; why: string }[] = [];
  const note = (id: string, name: string, why: string) => {
    if (have.has(id) && !wanted.has(id as AppId)) waste.push({ name, why });
  };
  note("desk", "Zoho Desk", "You did not ask for a support queue. A shared mailbox covers a simple inbox.");
  note("campaigns", "Zoho Campaigns", "You did not ask for a newsletter. One-to-one mail does not need Campaigns.");
  note("projects", "Zoho Projects", "You did not ask for multi-person projects. Do not open a project app for ordinary tasks.");
  note("people", "Zoho People", "You did not ask for employee records. People is not part of getting mail working.");
  note("sign", "Zoho Sign", "You did not ask for signed documents.");
  note("bookings", "Zoho Bookings", "You did not ask for self-serve appointments.");
  note("inventory", "Zoho Inventory", "You did not ask to receive and issue stock. A price list fits in Books.");
  if (have.has("invoice")) waste.push({ name: "Zoho Invoice", why: "Books already covers quotes and invoices. Running both is the same job twice." });
  if (have.has("forms")) waste.push({ name: "Zoho Forms", why: "A form should land in Mail or CRM. A separate forms app is extra." });
  if (have.has("creator")) waste.push({ name: "Zoho Creator", why: "This builds a second system. Skip it unless Mail, CRM, and Books cannot hold the job." });
  if (have.has("analytics")) waste.push({ name: "Zoho Analytics", why: "Use the reports inside the app you already have until you are combining several of them." });
  if (have.has("social")) waste.push({ name: "Zoho Social", why: "Social posting does not make mail, sales, or invoices work." });
  if (have.has("one") && wanted.size > 0 && wanted.size <= 2) {
    waste.push({ name: "Zoho One", why: "One is the full catalogue. The work you ticked fits in one or two apps." });
  }
  return {
    get,
    keep,
    waste,
    done: [...wanted].flatMap((id) => apps[id].done.map((line) => `${apps[id].name}: ${line}`)),
    count: wanted.size,
  };
}

function toggle(list: string[], id: string) {
  return list.includes(id) ? list.filter((item) => item !== id) : [...list, id];
}

function ZohoFitPage() {
  const [need, setNeed] = useState<string[]>([]);
  const [have, setHave] = useState<string[]>([]);
  const [shown, setShown] = useState(false);
  const result = recommend(need, have);

  return (
    <div className="mx-auto w-full max-w-6xl px-5 py-10">
      <Link to="/tools" className="text-sm font-semibold text-primary">All tools</Link>
      <h1 className="mt-3 font-display text-4xl">Zoho setup check</h1>
      <p className="mt-2 max-w-2xl text-muted">
        Tick the work you need, and what you already pay for. This shows the smallest Zoho set, and the extras that do not earn their place. It does not sign into Zoho.
      </p>
      <form
        className="mt-8 grid gap-6 rounded-xl border border-line bg-surface p-5"
        onSubmit={(event) => {
          event.preventDefault();
          setShown(true);
        }}
      >
        <fieldset>
          <legend className="text-sm font-semibold">What do you actually need?</legend>
          <div className="mt-3 grid gap-2 sm:grid-cols-2">
            {needs.map((item) => (
              <label key={item.id} className="flex items-start gap-2 text-sm">
                <input type="checkbox" checked={need.includes(item.id)} onChange={() => { setNeed((current) => toggle(current, item.id)); setShown(false); }} />
                {item.label}
              </label>
            ))}
          </div>
        </fieldset>
        <fieldset>
          <legend className="text-sm font-semibold">What do you already have? Optional.</legend>
          <div className="mt-3 grid gap-2 sm:grid-cols-2">
            {owned.map((item) => (
              <label key={item.id} className="flex items-start gap-2 text-sm">
                <input type="checkbox" checked={have.includes(item.id)} onChange={() => { setHave((current) => toggle(current, item.id)); setShown(false); }} />
                {item.label}
              </label>
            ))}
          </div>
        </fieldset>
        <button type="submit" className="inline-flex h-11 items-center justify-center rounded-sm bg-primary px-4 text-sm font-semibold text-primary-fg">
          Show what to get
        </button>
      </form>
      {shown && result.count === 0 ? <p className="mt-4 text-sm text-danger">Tick at least one thing you need. An empty list cannot tell you what to buy.</p> : null}
      {shown && result.count > 0 ? (
        <div className="mt-8 grid gap-4">
          <section className="rounded-xl border border-line p-5">
            <h2 className="font-display text-2xl">Get this</h2>
            <p className="mt-2 text-sm text-muted">
              {result.count === 1 ? "One app covers what you ticked." : `${result.count} apps cover what you ticked. You do not need the rest of the catalogue.`}
            </p>
            <ul className="mt-4 space-y-3 text-sm">
              {result.get.map((item) => (
                <li key={item.name}>
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-muted">{item.why}</p>
                </li>
              ))}
              {result.get.length === 0 ? <li className="text-muted">You already have the apps that match what you ticked. Do not add more.</li> : null}
            </ul>
          </section>
          {result.keep.length ? (
            <section className="rounded-xl border border-line p-5">
              <h2 className="font-display text-2xl">Keep</h2>
              <ul className="mt-4 space-y-2 text-sm">
                {result.keep.map((item) => (
                  <li key={item.name}>
                    <span className="font-semibold">{item.name}. </span>
                    <span className="text-muted">{item.why}</span>
                  </li>
                ))}
              </ul>
            </section>
          ) : null}
          {result.waste.length ? (
            <section className="rounded-xl border border-line p-5">
              <h2 className="font-display text-2xl">Wasting time</h2>
              <ul className="mt-4 space-y-2 text-sm">
                {result.waste.map((item) => (
                  <li key={item.name}>
                    <span className="font-semibold">{item.name}. </span>
                    <span className="text-muted">{item.why}</span>
                  </li>
                ))}
              </ul>
            </section>
          ) : null}
          <section className="rounded-xl border border-line p-5">
            <h2 className="font-display text-2xl">Done looks like this</h2>
            <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-muted">
              {result.done.map((line) => <li key={line}>{line}</li>)}
            </ul>
          </section>
          <p className="text-sm text-muted">This is not a quote and it does not see your Zoho account. Configuring it is separate work.</p>
          <Link to="/contact" search={{ topic: "Zoho configuration" }} className="inline-flex h-11 w-fit items-center rounded-sm bg-primary px-4 text-sm font-semibold text-primary-fg">
            Ask for the Zoho setup
          </Link>
        </div>
      ) : null}
    </div>
  );
}
