import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BarChart3,
  BookOpen,
  Download,
  FileText,
  Mail,
  Newspaper,
  Search,
} from "lucide-react";
import { Link } from "react-router-dom";

/* ================= DATA (apni real resources yahan edit karo) ================= */

const CATEGORIES = ["All", "Magazines", "Reports", "Guides", "Market Data"];

const RESOURCES = [
  {
    id: 1,
    category: "Magazines",
    icon: Newspaper,
    title: "Construction Mirror Magazine Archive",
    desc: "Browse every past edition with industry news, interviews and project stories.",
    meta: "Digital editions",
    cta: "Read online",
    to: "/magazines",
  },
  {
    id: 2,
    category: "Reports",
    icon: FileText,
    title: "India Construction Industry Outlook",
    desc: "Key trends, growth drivers and challenges shaping the sector this year.",
    meta: "PDF · Annual report",
    cta: "Download",
    to: "#",
  },
  {
    id: 3,
    category: "Market Data",
    icon: BarChart3,
    title: "Cement & Steel Price Tracker",
    desc: "Monthly price movement of core materials, region by region.",
    meta: "Updated monthly",
    cta: "View data",
    to: "#",
  },
  {
    id: 4,
    category: "Guides",
    icon: BookOpen,
    title: "Contractor's Guide to Tenders",
    desc: "A practical walkthrough of finding, bidding for and winning infrastructure tenders.",
    meta: "PDF · Guide",
    cta: "Download",
    to: "#",
  },
  {
    id: 5,
    category: "Reports",
    icon: FileText,
    title: "Infrastructure Projects Watch",
    desc: "Ongoing and upcoming roads, rail, metro and housing projects in one summary.",
    meta: "PDF · Quarterly",
    cta: "Download",
    to: "#",
  },
  {
    id: 6,
    category: "Guides",
    icon: BookOpen,
    title: "Construction Technology Primer",
    desc: "BIM, drones, prefab and green building materials explained for site teams.",
    meta: "PDF · Guide",
    cta: "Download",
    to: "#",
  },
];

/* ================= PAGE ================= */

function ResourcesPage() {
  const [active, setActive] = useState("All");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return RESOURCES.filter(
      (r) =>
        (active === "All" || r.category === active) &&
        (!q || `${r.title} ${r.desc}`.toLowerCase().includes(q))
    );
  }, [active, query]);

  return (
    <div className="bg-[#F7F8FA]">

      {/* ================= HERO ================= */}
<section className="relative overflow-hidden bg-white py-14 sm:py-16 lg:py-20">
  {/* Decorative Background */}
  <div className="pointer-events-none absolute -right-32 -top-24 h-[340px] w-[340px] rounded-full bg-[#C99A3B]/10 blur-3xl" />
  <div className="pointer-events-none absolute -bottom-32 -left-24 h-[280px] w-[280px] rounded-full bg-[#F7F8FA] blur-3xl" />

  <div className="relative mx-auto max-w-[1220px] px-5 sm:px-8 lg:px-10">
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="max-w-2xl"
    >
      {/* Eyebrow */}
      <div className="mb-4 flex items-center gap-3">
        <span className="h-px w-9 bg-[#C99A3B]" />

        <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#A77B24]">
          Resources
        </span>
      </div>

      {/* Heading */}
      <h3 className="font-serif text-[24px] font-bold leading-[1.05] tracking-[-0.035em] text-[#0A1128] sm:text-[24px] lg:text-[32px]">
        Knowledge for those who build
        <span className="text-[#C99A3B]">.</span>
      </h3>

      {/* Description */}
      <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600">
        Reports, guides, market data and past editions of Construction
        Mirror, collected in one place for the construction industry.
      </p>
    </motion.div>
  </div>
</section>

      {/* ================= FILTER BAR ================= */}

      <section className="relative mx-auto max-w-[1220px] px-5 pt-8 sm:px-8 lg:px-10">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setActive(c)}
                aria-pressed={active === c}
                className={`rounded-full border px-4 py-2 text-[10px] font-bold uppercase tracking-[0.16em] transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C99A3B] ${
                  active === c
                    ? "border-[#0A1128] bg-[#0A1128] text-[#E6C473]"
                    : "border-slate-200 bg-white text-slate-600 hover:border-[#C99A3B]"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <label className="relative block w-full lg:w-72">
            <span className="sr-only">Search resources</span>
            <Search
              size={15}
              className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search resources"
              className="w-full rounded-full border border-slate-200 bg-white py-2.5 pl-10 pr-4 text-sm text-[#0A1128] placeholder:text-slate-400 focus:border-[#C99A3B] focus:outline-none"
            />
          </label>
        </div>
      </section>

      {/* ================= GRID ================= */}

      <section className="mx-auto max-w-[1220px] px-5 py-8 sm:px-8 lg:px-10">
        {filtered.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-slate-300 bg-white py-14 text-center">
            <p className="font-serif text-xl font-bold text-[#0A1128]">
              No resources found
            </p>
            <p className="mt-2 text-sm text-slate-500">
              Try another category or a different search word.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((r, i) => {
              const Icon = r.icon;
              const Wrapper = r.to.startsWith("/") ? Link : "a";
              const linkProps = r.to.startsWith("/") ? { to: r.to } : { href: r.to };

              return (
                <motion.div
                  key={r.id}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                >
                  <Wrapper
                    {...linkProps}
                    className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_18px_40px_-30px_rgba(10,17,40,0.4)] transition-all duration-300 hover:-translate-y-1 hover:border-[#C99A3B]/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C99A3B]"
                  >
                    <div className="flex items-center justify-between">
                      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#0A1128] text-[#E6C473] transition-colors duration-300 group-hover:bg-[#C99A3B] group-hover:text-[#0A1128]">
                        <Icon size={19} strokeWidth={1.8} />
                      </span>
                      <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#805B18]">
                        {r.category}
                      </span>
                    </div>

                    <h3 className="mt-5 font-serif text-[20px] font-bold leading-snug tracking-[-0.02em] text-[#0A1128]">
                      {r.title}
                    </h3>

                    <p className="mt-2 flex-1 text-sm leading-6 text-slate-500">
                      {r.desc}
                    </p>

                    <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4">
                      <span className="text-xs text-slate-400">{r.meta}</span>
                      <span className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-[#0A1128]">
                        {r.cta}
                        {r.cta === "Download" ? (
                          <Download size={13} />
                        ) : (
                          <ArrowUpRight
                            size={13}
                            className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                          />
                        )}
                      </span>
                    </div>
                  </Wrapper>
                </motion.div>
              );
            })}
          </div>
        )}
      </section>

      {/* ================= NEWSLETTER ================= */}

      <section className="mx-auto max-w-[1220px] px-5 pb-14 sm:px-8 lg:px-10 lg:pb-20">
        <div className="relative overflow-hidden rounded-3xl bg-[#0A1128] px-6 py-9 sm:px-10 sm:py-11">
          <div className="pointer-events-none absolute -right-20 -top-20 h-[260px] w-[260px] rounded-full bg-[#C99A3B]/20 blur-3xl" />

          <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-md">
              <div className="mb-3 flex items-center gap-2 text-[#E6C473]">
                <Mail size={16} strokeWidth={1.8} />
                <span className="text-[10px] font-bold uppercase tracking-[0.24em]">
                  Newsletter
                </span>
              </div>
              <h2 className="font-serif text-2xl font-bold leading-tight tracking-[-0.025em] text-white sm:text-3xl">
                Get new resources in your inbox
              </h2>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                New editions, reports and guides, sent when they are published.
              </p>
            </div>

            <div className="flex w-full flex-col gap-3 sm:flex-row lg:max-w-md">
              <label className="flex-1">
                <span className="sr-only">Email address</span>
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full rounded-full border border-white/15 bg-white/10 px-5 py-3 text-sm text-white placeholder:text-slate-400 focus:border-[#C99A3B] focus:outline-none"
                />
              </label>
              <button
                type="button"
                className="rounded-full bg-[#C99A3B] px-6 py-3 text-[11px] font-bold uppercase tracking-[0.16em] text-[#0A1128] transition-colors duration-300 hover:bg-[#E6C473] focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ResourcesPage;
