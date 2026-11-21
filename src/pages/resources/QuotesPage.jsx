import { useCallback, useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  ArrowDown,
  Quote,
  Building2,
  Lightbulb,
  HardHat,
  Leaf,
  Globe2,
  Sparkles,
  Copy,
  Check,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const NAVY = "#0D1628";
const GOLD = "#C9A24A";

const quotes = [
  {
    id: 1,
    category: "Infrastructure",
    quote:
      "Infrastructure is not just about building roads and bridges; it is about creating opportunities for generations to come.",
    icon: Building2,
  },
  {
    id: 2,
    category: "Innovation",
    quote:
      "The future of construction belongs to those who embrace technology, rethink processes and turn new ideas into reality.",
    icon: Lightbulb,
  },
  {
    id: 3,
    category: "Leadership",
    quote:
      "Strong projects are built with more than materials. They are built through vision, collaboration and leadership.",
    icon: HardHat,
  },
  {
    id: 4,
    category: "Sustainability",
    quote:
      "Building for tomorrow means making responsible decisions today. Sustainability must be part of every development journey.",
    icon: Leaf,
  },

  {
    id: 6,
    category: "Innovation",
    quote:
      "Every breakthrough begins with a question, every innovation with an idea and every transformation with the courage to begin.",
    icon: Sparkles,
  },
];

const categories = ["All", ...Array.from(new Set(quotes.map((q) => q.category)))];

// Column spans for the 6-col desktop grid when "All" is selected
const spanPattern = [
  "lg:col-span-4",
  "lg:col-span-2",
  "lg:col-span-2",
  "lg:col-span-4",
  "lg:col-span-3",
  "lg:col-span-3",
];

/* ---------- small helpers ---------- */

const CopyButton = ({ text, dark = false }) => {
  const [copied, setCopied] = useState(false);

  const handle = async () => {
    try {
      await navigator.clipboard.writeText(`"${text}" — Construction Mirror`);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch (e) {
      /* clipboard unavailable, ignore */
    }
  };

  return (
    <button
      type="button"
      onClick={handle}
      aria-label="Copy quote"
      className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-xs font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C9A24A] ${
        dark
          ? "border-white/20 text-white/80 hover:border-[#C9A24A] hover:text-[#C9A24A]"
          : "border-[#0D1628]/15 text-[#0D1628]/70 hover:border-[#C9A24A] hover:text-[#8A6A1F]"
      }`}
    >
      {copied ? <Check size={14} /> : <Copy size={14} />}
      {copied ? "Copied" : "Copy"}
    </button>
  );
};

/* ---------- hero quote rotator ---------- */

const HeroRotator = () => {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const go = useCallback(
    (dir) => setIndex((i) => (i + dir + quotes.length) % quotes.length),
    []
  );

  useEffect(() => {
    if (paused || reduce) return;
    const t = setInterval(() => go(1), 7000);
    return () => clearInterval(t);
  }, [paused, reduce, go]);

  const current = quotes[index];

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      {/* blueprint corner marks */}
      <span className="absolute -left-3 -top-3 h-6 w-6 border-l border-t border-[#C9A24A]" />
      <span className="absolute -right-3 -top-3 h-6 w-6 border-r border-t border-[#C9A24A]" />
      <span className="absolute -bottom-3 -left-3 h-6 w-6 border-b border-l border-[#C9A24A]" />
      <span className="absolute -bottom-3 -right-3 h-6 w-6 border-b border-r border-[#C9A24A]" />

      <div className="flex min-h-[420px] flex-col border border-white/10 bg-white/[0.04] p-8 backdrop-blur-sm sm:p-11">
        <Quote size={36} fill={GOLD} strokeWidth={0} />

        <div className="mt-6 flex-1" aria-live="polite">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: reduce ? 0 : 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: reduce ? 0 : -10 }}
              transition={{ duration: 0.4 }}
            >
              <p className="font-serif text-2xl leading-[1.45] text-white sm:text-[28px]">
                {current.quote}
              </p>
              <p className="mt-6 text-sm text-[#C9A24A]">{current.category}</p>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-5">
          <div className="flex items-center gap-2">
            {quotes.map((q, i) => (
              <button
                key={q.id}
                type="button"
                aria-label={`Show quote ${i + 1}`}
                onClick={() => setIndex(i)}
                className={`h-1.5 rounded-full transition-all ${
                  i === index ? "w-7 bg-[#C9A24A]" : "w-1.5 bg-white/25 hover:bg-white/50"
                }`}
              />
            ))}
          </div>

          <div className="flex items-center gap-2">
            {[
              { dir: -1, Icon: ChevronLeft, label: "Previous quote" },
              { dir: 1, Icon: ChevronRight, label: "Next quote" },
            ].map(({ dir, Icon, label }) => (
              <button
                key={label}
                type="button"
                aria-label={label}
                onClick={() => go(dir)}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/80 transition-colors hover:border-[#C9A24A] hover:text-[#C9A24A] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C9A24A]"
              >
                <Icon size={16} />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

/* ---------- page ---------- */

const QuotesPage = () => {
  const reduce = useReducedMotion();
  const [active, setActive] = useState("All");

  const filtered =
    active === "All" ? quotes : quotes.filter((q) => q.category === active);

  const spanFor = (i) => (active === "All" ? spanPattern[i] : "lg:col-span-3");

  return (
    <main className="bg-[#F7F5F0] text-[#0D1628]">



{/* ================= HERO ================= */}
<section
  className="relative overflow-hidden text-white"
  style={{ backgroundColor: NAVY }}
>

  <div className="pointer-events-none absolute -right-32 -top-32 h-[480px] w-[480px] rounded-full bg-[#C9A24A]/10 blur-3xl" />

  <div className="relative mx-auto max-w-[1350px] px-6 py-20 sm:px-12 lg:px-20 lg:py-28">
    <div className="grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >



      <p className="flex items-center justify-center gap-3 text-sm text-[#C9A24A] lg:justify-start">
  <span className="h-px w-10 bg-[#C9A24A]" />
  The Quote Journal
</p>





<p className="mt-7 text-center font-serif text-5xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-left lg:text-[63px]">
  Ideas that
  <br />
  build the
  <br />
  industry.
</p>

      <p className="mx-auto mt-8 max-w-lg text-center text-base font-bold leading-8 text-slate-200 lg:mx-0 lg:text-left">
  Short, sharp perspectives on construction and infrastructure
  from the Construction Mirror editorial desk. Read them, copy
  them, share them.
</p>


{/* buttons */}

      <div className="mt-10 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
  {/* Primary button */}
  <a
    href="#collection"
    className="group inline-flex items-center gap-5 rounded-full bg-[#C9A24A] py-2 pl-8 pr-2 text-sm font-bold text-[#0D1628] shadow-[0_10px_30px_-12px_rgba(201,162,74,0.55)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#DDB85F] hover:shadow-[0_16px_36px_-12px_rgba(201,162,74,0.8)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
  >
    Browse the collection
    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#0D1628] text-[#C9A24A] transition-colors duration-300 group-hover:bg-white group-hover:text-[#0D1628]">
      <ArrowDown
        size={18}
        className="transition-transform duration-300 group-hover:translate-y-0.5"
      />
    </span>
  </a>

  {/* Secondary button */}
  <a
    href="/contact"
    className="group inline-flex items-center gap-5 rounded-full border border-white/30 py-2 pl-8 pr-2 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-white hover:bg-white hover:text-[#0D1628] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
  >
    Contribute a perspective
    <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 transition-colors duration-300 group-hover:border-transparent group-hover:bg-[#0D1628] group-hover:text-[#C9A24A]">
      <ArrowRight
        size={18}
        className="transition-transform duration-300 group-hover:translate-x-0.5"
      />
    </span>
  </a>
</div>



      </motion.div>

      <motion.div
        initial={reduce ? false : { opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.15, ease: "easeOut" }}
        className="mx-auto w-full max-w-[520px]"
      >
        <HeroRotator />
      </motion.div>
    </div>
  </div>
</section>



   {/* ================= FEATURED PERSPECTIVE ================= */}
<section className="bg-[#F7F8FA] px-5 py-20 sm:px-10 lg:py-28">

  <div className="mx-auto max-w-[1350px]">

    {/* Section Heading */}
    <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
      <div>
        <p className="mb-4 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-[#9A762B]">
          <span className="h-[1px] w-8 bg-[#C9A24A]"></span>
          Editor's Selection
        </p>

        <p className="font-serif text-3xl font-bold tracking-tight text-[#0D1628] sm:text-4xl">
          A Perspective Worth Sharing.
        </p>
      </div>

      <p className="max-w-sm text-sm leading-7 text-slate-500">
        Thoughts that inspire progress, challenge perspectives and
        reflect the future of construction and infrastructure.
      </p>
    </div>

    {/* Featured Quote Card */}
    <div className="relative overflow-hidden bg-[#0D1628]">

      {/* Decorative Elements */}
      <div className="absolute right-0 top-0 h-full w-[35%] border-l border-white/[0.05]"></div>
      <div className="absolute -right-20 -top-28 h-80 w-80 rounded-full border border-[#C9A24A]/10"></div>
      <div className="absolute -right-10 -top-16 h-60 w-60 rounded-full border border-[#C9A24A]/10"></div>

      <div className="relative z-10 grid gap-8 p-8 sm:p-12 lg:grid-cols-[100px_1fr] lg:gap-12 lg:p-16">

        {/* Quote Icon */}
        <div className="flex items-start">
         
        </div>

        {/* Quote Content */}
        <div>
          <p className="mb-7 text-xs font-semibold uppercase tracking-[0.25em] text-[#C9A24A]">
            The Featured Thought
          </p>

          <blockquote className="max-w-5xl font-serif text-3xl font-medium leading-[1.35] tracking-tight text-white sm:text-4xl lg:text-[52px]">
            The true measure of development is not just what we build,
            <span className="text-[#C9A24A]">
              {" "}but the lasting impact we create.
            </span>
          </blockquote>

          {/* Bottom Details */}
          <div className="mt-12 flex flex-col justify-between gap-6 border-t border-white/15 pt-7 sm:flex-row sm:items-center">

            <div>
              <p className="text-sm font-bold tracking-wide text-white">
                Construction Mirror
              </p>
              <p className="mt-1 text-xs tracking-wide text-slate-400">
                Construction & Infrastructure
              </p>
            </div>

            <CopyButton text="The true measure of development is not just what we build, but the lasting impact we create." />

          </div>
        </div>

      </div>

      {/* Bottom Gold Line */}
      <div className="h-[3px] w-full bg-[#C9A24A]"></div>

    </div>
  </div>
</section>


      

 {/* ================= COLLECTION ================= */}
<section id="collection" className="scroll-mt-24 bg-[#F9F8F5] py-20 lg:py-28">
  <div className="mx-auto max-w-[1200px] px-6 sm:px-12 lg:px-16">
    {/* header */}
    <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
      <div>
        <p className="font-serif text-3xl font-bold text-[#0D1628] sm:text-4xl">
          Perspectives
        </p>
        <div className="mt-5 h-[3px] w-14 bg-[#C9A24A]" />
        <p className="mt-5 max-w-md text-base leading-7 text-slate-600">
          Short thoughts on the ideas shaping our industry.
        </p>
      </div>

      {/* filters */}
      <div
        role="tablist"
        aria-label="Filter by topic"
        className="flex flex-wrap gap-x-6 gap-y-2 border-b border-[#0D1628]/10"
      >
        {categories.map((c) => (
          <button
            key={c}
            type="button"
            role="tab"
            aria-selected={active === c}
            onClick={() => setActive(c)}
            className={`-mb-px border-b-2 pb-3 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C9A24A] ${
              active === c
                ? "border-[#C9A24A] text-[#0D1628]"
                : "border-transparent text-[#0D1628]/50 hover:text-[#0D1628]"
            }`}
          >
            {c}
          </button>
        ))}
      </div>
    </div>

    {/* cards */}
    <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      <AnimatePresence mode="popLayout">
        {filtered.map((item, i) => {
        
          const featured = active === "All" && i === 0;

          return (
            <motion.article
              key={item.id}
              layout={!reduce}
              initial={reduce ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className={`group relative flex min-h-[260px] flex-col overflow-hidden p-8 sm:p-10 ${
                featured
                  ? "text-white md:col-span-2"
                  : "border border-[#0D1628]/10 bg-white text-[#0D1628] transition-colors hover:border-[#C9A24A]"
              }`}
              style={featured ? { backgroundColor: NAVY } : undefined}
            >
              {/* gold edge */}
              <span
                aria-hidden
                className={`absolute left-0 top-0 h-full w-[3px] bg-[#C9A24A] ${
                  featured
                    ? ""
                    : "origin-top scale-y-0 transition-transform duration-300 group-hover:scale-y-100"
                }`}
              />

        

              <blockquote
                className={`mt-6 flex-1 font-serif font-semibold leading-[1.45] ${
                  featured ? "text-2xl sm:text-[30px]" : "text-lg sm:text-xl"
                }`}
              >
                {item.quote}
              </blockquote>

              <div
                className={`mt-8 flex items-center justify-between border-t pt-5 ${
                  featured ? "border-white/15" : "border-[#0D1628]/10"
                }`}
              >
                <span
                  className={`inline-flex items-center gap-2 text-sm font-medium ${
                    featured ? "text-[#C9A24A]" : "text-[#8A6A1F]"
                  }`}
                >
             
                  {item.category}
                </span>
                <CopyButton text={item.quote} dark={featured} />
              </div>
            </motion.article>
          );
        })}
      </AnimatePresence>
    </div>
  </div>
</section>










{/* ================= CLOSING ================= */}
<section className="px-5 py-20 sm:px-10 lg:px-16 lg:py-28">
  <div
    className="relative mx-auto max-w-[1350px] overflow-hidden rounded-3xl border border-[#C9A24A]/30 px-8 py-16 text-white shadow-[0_25px_60px_-30px_rgba(13,22,40,0.3)] sm:px-14 sm:py-20 lg:px-20"
    style={{ backgroundColor: NAVY }}
  >
    {/* Decorative Circle */}
    <div className="pointer-events-none absolute -right-24 -top-32 h-80 w-80 rounded-full border border-[#C9A24A]/15" />
    <div className="pointer-events-none absolute -right-12 -top-20 h-56 w-56 rounded-full border border-[#C9A24A]/15" />

    <div className="relative flex flex-col gap-10 md:flex-row md:items-center md:justify-between">

      {/* Content */}
      <div className="max-w-2xl">
        <p className="mb-5 text-xs font-bold uppercase tracking-[0.25em] text-[#C9A24A]">
          Let's Connect
        </p>

        <p className="font-serif text-3xl font-bold leading-tight tracking-tight sm:text-3xl lg:text-4xl">
          Ideas shape industries.
          <span className="mt-2 block text-[#C9A24A]">
            Perspectives shape the future.
          </span>
        </p>

        <p className="mt-6 max-w-xl text-sm leading-7 text-slate-300 sm:text-base sm:leading-8">
          Have a thought the construction community should hear?
          We'd love to hear your perspective. Connect with our editorial team.
        </p>
      </div>

      {/* CTA Button */}
      <a
        href="/contact"
        className="group inline-flex w-fit shrink-0 items-center justify-center gap-4 rounded-full bg-[#C9A24A] px-8 py-4 text-sm font-bold text-[#0D1628] transition-all duration-300 hover:-translate-y-1 hover:bg-[#DDB85F] hover:shadow-[0_12px_30px_-10px_rgba(201,162,74,0.5)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
      >
        Connect with us

        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0D1628] text-white transition-transform duration-300 group-hover:translate-x-1">
          <ArrowRight size={15} />
        </span>
      </a>

    </div>

    {/* Bottom Accent */}
    <div className="absolute bottom-0 left-10 right-10 h-[2px] rounded-full bg-[#C9A24A]/50 sm:left-14 sm:right-14 lg:left-20 lg:right-20" />

  </div>
</section>



    </main>
  );
};

export default QuotesPage;