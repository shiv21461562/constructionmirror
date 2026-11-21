import { useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

import {
  ArrowUpRight,
  BarChart3,
  BookOpen,
  Download,
  FileText,
  Newspaper,
  Search,
  X,
} from "lucide-react";

import { Link } from "react-router-dom";

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

// Works for both internal routes (react-router) and plain links
const ResourceLink = ({ to, className, children }) =>
  to.startsWith("/") ? (
    <Link to={to} className={className}>
      {children}
    </Link>
  ) : (
    <a href={to} className={className}>
      {children}
    </a>
  );

const ActionIcon = ({ cta, className = "" }) =>
  cta === "Download" ? (
    <Download size={14} className={className} />
  ) : (
    <ArrowUpRight
      size={14}
      className={`transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 ${className}`}
    />
  );

// A small magazine cover drawn with CSS
const MagazineCover = () => (
  <div className="relative mx-auto aspect-[3/4] w-44 rotate-[-4deg] rounded-sm bg-gradient-to-b from-[#16224A] to-[#0A1128] p-4 shadow-[0_30px_50px_-20px_rgba(0,0,0,0.7)] ring-1 ring-white/10 transition-transform duration-500 group-hover:rotate-0 sm:w-52">
    <p className="font-serif text-[15px] font-black leading-none tracking-tight text-[#E6C473]">
      Construction
      <br />
      Mirror
    </p>
    <div className="mt-3 h-px w-full bg-[#C99A3B]/60" />
    <div className="mt-4 h-24 rounded-sm bg-[#C99A3B]/15 ring-1 ring-[#C99A3B]/30" />
    <div className="mt-4 space-y-1.5">
      <div className="h-1.5 w-full rounded bg-white/20" />
      <div className="h-1.5 w-5/6 rounded bg-white/20" />
      <div className="h-1.5 w-2/3 rounded bg-white/20" />
    </div>
    <p className="absolute bottom-3 left-4 text-[9px] font-semibold text-[#E6C473]">
      Latest edition
    </p>
  </div>
);

const ResourcesContent = () => {
  const [active, setActive] = useState("All");
  const [query, setQuery] = useState("");
  const reduce = useReducedMotion();

  const q = query.trim().toLowerCase();

  const filtered = useMemo(
    () =>
      RESOURCES.filter(
        (r) =>
          (active === "All" || r.category === active) &&
          (!q || `${r.title} ${r.desc}`.toLowerCase().includes(q))
      ),
    [active, q]
  );

  const counts = useMemo(() => {
    const c = { All: RESOURCES.length };
    RESOURCES.forEach((r) => (c[r.category] = (c[r.category] || 0) + 1));
    return c;
  }, []);

  // The lead story is shown big when it is part of the current results
  const lead = filtered.find((r) => r.id === 1);
  const grid = lead ? filtered.filter((r) => r.id !== lead.id) : filtered;

  return (
    <>


    
      {/* FILTER BAR */}
      <section className="sticky top-0 z-20 border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-[1220px] flex-col gap-3 px-5 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10">
          <div
            className="-mx-1 flex gap-1 overflow-x-auto px-1"
            role="tablist"
            aria-label="Resource categories"
          >
            {CATEGORIES.map((c) => (
              <button
                key={c}
                type="button"
                role="tab"
                aria-selected={active === c}
                onClick={() => setActive(c)}
                className={`relative whitespace-nowrap px-4 py-4 text-sm font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C99A3B] ${
                  active === c
                    ? "text-[#0A1128]"
                    : "text-slate-500 hover:text-[#0A1128]"
                }`}
              >
                {c}
                <span className="ml-1.5 text-xs font-normal text-slate-400">
                  {counts[c] || 0}
                </span>
                {active === c && (
                  <motion.span
                    layoutId="tab-underline"
                    className="absolute inset-x-3 bottom-0 h-[3px] rounded-t bg-[#C99A3B]"
                    transition={{ duration: reduce ? 0 : 0.3 }}
                  />
                )}
              </button>
            ))}
          </div>

          <label className="relative mb-3 block w-full lg:mb-0 lg:w-72">
            <span className="sr-only">Search resources</span>
            <Search
              size={15}
              className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search reports, guides, data"
              className="w-full rounded-full border border-slate-200 bg-slate-50 py-2.5 pl-10 pr-4 text-sm text-[#0A1128] placeholder:text-slate-400 focus:border-[#C99A3B] focus:bg-white focus:outline-none"
            />
          </label>
        </div>
      </section>






      <section className="mx-auto max-w-[1220px] px-5 py-10 sm:px-8 lg:px-10">
        {/* Result summary */}
        <div className="mb-6 flex items-center justify-between gap-4">
          <p className="text-sm text-slate-500" aria-live="polite">
            Showing{" "}
            <span className="font-semibold text-[#0A1128]">
              {filtered.length}
            </span>{" "}
            of {RESOURCES.length} resources
          </p>
          {(active !== "All" || q) && (
            <button
              type="button"
              onClick={() => {
                setActive("All");
                setQuery("");
              }}
              className="inline-flex items-center gap-1 text-sm font-semibold text-[#805B18] hover:text-[#0A1128] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C99A3B]"
            >
              <X size={14} /> Clear filters
            </button>
          )}
        </div>

        {filtered.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-slate-300 bg-white py-16 text-center">
            <p className="font-serif text-2xl font-bold text-[#0A1128]">
              No resources found
            </p>
            <p className="mt-2 text-sm text-slate-500">
              Try another category or a different search word.
            </p>
          </div>
        ) : (
          <>
            {/* LEAD STORY */}
            {lead && (
              <motion.div
                initial={reduce ? false : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-8"
              >
                <ResourceLink
                  to={lead.to}
                  className="group grid overflow-hidden rounded-3xl bg-[#0A1128] text-white shadow-[0_30px_60px_-35px_rgba(10,17,40,0.9)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C99A3B] md:grid-cols-[1.4fr_1fr]"
                >
                  <div className="flex flex-col justify-center p-8 sm:p-12">
                    <span className="inline-flex w-fit items-center gap-2 rounded-full bg-[#C99A3B] px-3 py-1 text-xs font-bold text-[#0A1128]">
                      <Newspaper size={13} /> Featured
                    </span>
                    <h2 className="mt-5 font-serif text-3xl font-bold leading-tight tracking-[-0.02em] sm:text-4xl lg:text-[44px]">
                      {lead.title}
                    </h2>
                    <p className="mt-4 max-w-xl text-base leading-7 text-slate-300">
                      {lead.desc}
                    </p>
                    <span className="mt-8 inline-flex w-fit items-center gap-2 rounded-full border border-[#C99A3B] px-6 py-3 text-sm font-semibold text-[#E6C473] transition-colors duration-300 group-hover:bg-[#C99A3B] group-hover:text-[#0A1128]">
                      {lead.cta}
                      <ActionIcon cta={lead.cta} />
                    </span>
                  </div>

                  <div className="relative flex items-center justify-center bg-gradient-to-br from-[#16224A] to-[#0A1128] px-6 py-12 md:py-0">
                    <div className="pointer-events-none absolute inset-0 opacity-[0.07] [background-image:repeating-linear-gradient(0deg,#fff_0,#fff_1px,transparent_1px,transparent_28px)]" />
                    <MagazineCover />
                  </div>
                </ResourceLink>
              </motion.div>
            )}

            {/* RESOURCE GRID */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <AnimatePresence mode="popLayout">
                {grid.map((r) => {
                  const Icon = r.icon;
                  return (
                    <motion.div
                      key={r.id}
                      layout={!reduce}
                      initial={reduce ? false : { opacity: 0, scale: 0.97 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.97 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ResourceLink
                        to={r.to}
                        className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#C99A3B]/70 hover:shadow-[0_24px_50px_-28px_rgba(10,17,40,0.45)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C99A3B]"
                      >
                        {/* gold edge that grows on hover */}
                        <span className="absolute left-0 top-0 h-full w-1 origin-top scale-y-0 bg-[#C99A3B] transition-transform duration-300 group-hover:scale-y-100" />

                        <div className="flex items-center justify-between">
                          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#0A1128] text-[#E6C473] transition-colors duration-300 group-hover:bg-[#C99A3B] group-hover:text-[#0A1128]">
                            <Icon size={19} strokeWidth={1.8} />
                          </span>
                          <span className="rounded-full bg-[#C99A3B]/10 px-3 py-1 text-xs font-semibold text-[#805B18]">
                            {r.category}
                          </span>
                        </div>

                        <h3 className="mt-6 font-serif text-[21px] font-bold leading-snug tracking-[-0.02em] text-[#0A1128]">
                          {r.title}
                        </h3>

                        <p className="mt-3 flex-1 text-[15px] leading-7 text-slate-500">
                          {r.desc}
                        </p>

                        <div className="mt-7 flex items-center justify-between border-t border-slate-100 pt-4">
                          <span className="text-xs text-slate-400">
                            {r.meta}
                          </span>
                          <span className="flex items-center gap-1.5 text-sm font-semibold text-[#0A1128]">
                            {r.cta}
                            <ActionIcon cta={r.cta} />
                          </span>
                        </div>
                      </ResourceLink>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
          </>
        )}
      </section>



    </>
  );
};

export default ResourcesContent;