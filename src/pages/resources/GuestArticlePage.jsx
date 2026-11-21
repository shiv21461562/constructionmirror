import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Check,
  FileText,
  PenLine,
  Send,
  ShieldCheck,
  TrendingUp,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";

const NAVY = "#0D1628";
const GOLD = "#C9A24A";

const benefits = [
  {
    icon: Users,
    title: "Reach the right readers",
    description:
      "Put your ideas in front of architects, engineers, developers, contractors and the people who make project decisions.",
  },
  {
    icon: ShieldCheck,
    title: "Build professional credibility",
    description:
      "A published article carries your name and your experience into the industry, and stays there as a reference.",
  },
  {
    icon: TrendingUp,
    title: "Move the industry forward",
    description:
      "Share what worked, what failed and what should change, so the next project starts a step ahead.",
  },
];

const topics = [
  "Construction & infrastructure",
  "Engineering & technology",
  "Sustainability & innovation",
  "Project management & leadership",
  "Regulations & funding",
];

const checklist = [
  {
    title: "My article is original and unpublished",
    description: "It has not appeared in another magazine, blog or website.",
  },
  {
    title: "It is relevant to the industry",
    description:
      "Construction, infrastructure, engineering, architecture, technology or a related sector.",
  },
  {
    title: "It is clearly written",
    description:
      "Professional language, a clear structure and explanations a fellow professional can follow.",
  },
  {
    title: "I have supporting material ready",
    description:
      "Photographs, charts, references and a short author bio where they apply.",
  },
];

const steps = [
  {
    icon: PenLine,
    title: "Prepare",
    description:
      "Write your original article and gather images and references.",
  },
  {
    icon: Send,
    title: "Submit",
    description: "Send your article with your professional details.",
  },
  {
    icon: FileText,
    title: "Editorial review",
    description: "Our editorial team reads and evaluates your submission.",
  },
  {
    icon: BookOpen,
    title: "Publication",
    description: "Approved articles are scheduled for publication.",
  },
];

const GuestArticlePage = () => {
  const reduce = useReducedMotion();
  const [checked, setChecked] = useState([]);

  const toggle = (i) =>
    setChecked((c) => (c.includes(i) ? c.filter((x) => x !== i) : [...c, i]));

  const ready = checked.length === checklist.length;

  const rise = (delay = 0) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 22 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
        };

  return (
    <main className="overflow-hidden bg-[#FAF9F6] text-[#0D1628]">




      {/* ================= HERO ================= */}
      <section className="text-white" style={{ backgroundColor: NAVY }}>
        <div className="mx-auto grid max-w-[1450px] lg:min-h-[700px] lg:grid-cols-[1fr_0.95fr]">
          <div className="flex flex-col justify-center px-6 py-20 sm:px-12 lg:px-16 xl:px-24 lg:py-28">
            <motion.p
              {...rise(0)}
              className="flex items-center gap-3 text-sm text-[#C9A24A]"
            >
              <span className="h-px w-10 bg-[#C9A24A]" />
              Write for Construction Mirror
            </motion.p>
            <motion.p
              {...rise(0.1)}
              className="mx-auto mt-7 max-w-[340px] text-center font-serif text-5xl font-bold leading-[1.06] tracking-tight sm:max-w-[680px] sm:text-5xl xl:mx-0 xl:text-left xl:text-[60px]"
            >
              Your experience belongs in print.
            </motion.p>

            <motion.p
              {...rise(0.2)}
              className="mt-8 max-w-[500px] text-base leading-8 text-slate-300"
            >
              Every project teaches something. Turn what you have learned into
              an article that thousands of industry professionals will read.
            </motion.p>

            {/* buttons */}

            <motion.div
              {...rise(0.3)}
              className="mt-10 flex flex-wrap justify-center gap-4 xl:justify-start"
            >
              {/* Primary button */}
              <Link
                to="/contact"
                className="group inline-flex items-center gap-5 rounded-full bg-[#C9A24A] py-2 pl-8 pr-2 text-sm font-bold text-[#0D1628] shadow-[0_10px_30px_-12px_rgba(201,162,74,0.55)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#DDB85F] hover:shadow-[0_16px_36px_-12px_rgba(201,162,74,0.8)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Submit your article
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#0D1628] text-[#C9A24A] transition-colors duration-300 group-hover:bg-white group-hover:text-[#0D1628]">
                  <ArrowUpRight
                    size={18}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </span>
              </Link>

              {/* Secondary button */}
              <a
                href="#checklist"
                className="group inline-flex items-center gap-5 rounded-full border border-white/30 py-2 pl-8 pr-2 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-white hover:bg-white hover:text-[#0D1628] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Check the guidelines
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 transition-colors duration-300 group-hover:border-transparent group-hover:bg-[#0D1628] group-hover:text-[#C9A24A]">
                  <ArrowRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-0.5"
                  />
                </span>
              </a>
            </motion.div>
          </div>

          {/* image + manuscript card */}
          <motion.div
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative min-h-[460px] lg:min-h-full"
          >
            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=85"
              alt="Modern architectural construction"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div
              className="absolute inset-0"
              style={{
                background: `linear-gradient(to top, ${NAVY} 0%, rgba(13,22,40,0.1) 55%), linear-gradient(to right, ${NAVY} 0%, transparent 35%)`,
              }}
            />

            <motion.div
              initial={reduce ? false : { opacity: 0, y: 30, rotate: 0 }}
              animate={{ opacity: 1, y: 0, rotate: -2 }}
              transition={{ duration: 0.9, delay: 0.5, ease: "easeOut" }}
              className="absolute bottom-10 left-6 right-6 max-w-sm bg-[#FAF9F6] p-7 text-[#0D1628] shadow-2xl sm:left-12 sm:right-auto"
            >
              <p className="text-xs font-semibold text-[#8A6A1F]">
                Sample submission
              </p>
              <p className="mt-3 font-serif text-xl font-bold leading-snug">
                What three metro projects taught us about site logistics
              </p>
              <p className="mt-3 text-sm text-slate-500">
                By a project director · 1,200 words · 4 photographs
              </p>
              <div className="mt-5 flex items-center gap-2 border-t border-[#0D1628]/10 pt-4 text-xs font-medium">
                <span className="rounded-full bg-[#0D1628] px-3 py-1 text-white">
                  Submitted
                </span>
                <span className="h-px w-3 bg-slate-300" />
                <span className="rounded-full border border-slate-300 px-3 py-1 text-slate-500">
                  In review
                </span>
                <span className="h-px w-3 bg-slate-300" />
                <span className="rounded-full border border-slate-300 px-3 py-1 text-slate-500">
                  Published
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>




      {/* ================= WHY CONTRIBUTE ================= */}
      <section className="mx-auto max-w-[1350px] px-6 py-24 sm:px-12 lg:px-16 lg:py-32">
        <div className="max-w-2xl">
          <p className="font-serif text-3xl font-bold leading-[1.15] tracking-tight sm:text-4xl">
            Your knowledge has value for the whole industry.
          </p>
          <p className="mt-6 max-w-lg text-base leading-8 text-slate-600">
            The most useful industry conversations start with people willing to
            share what they know.
          </p>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {benefits.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="group relative cursor-pointer overflow-hidden rounded-2xl border border-[#0D1628]/15 bg-transparent p-8 transition-colors duration-500 hover:border-[#0D1628] sm:p-10"
              >
                {/* dark fill, left se right aata hai */}
                <span className="absolute inset-0 origin-left scale-x-0 bg-[#0D1628] transition-transform duration-500 ease-out group-hover:scale-x-100" />

                <div className="relative z-10">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0D1628] text-[#C9A24A] transition-colors duration-500 group-hover:bg-[#C9A24A] group-hover:text-[#0D1628]">
                    <Icon size={22} strokeWidth={1.5} />
                  </span>

                  <h3 className="mt-8 font-serif text-xl font-bold text-[#0D1628] transition-colors duration-500 group-hover:text-white">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600 transition-colors duration-500 group-hover:text-slate-300">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ================= CHECKLIST ================= */}
      <section
        id="checklist"
        className="relative scroll-mt-24 overflow-hidden text-white"
        style={{ backgroundColor: NAVY }}
      >
        {/* depth: soft gold glow + faint grid + top gold line */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#C9A24A]/60 to-transparent" />
        <div className="pointer-events-none absolute -left-40 top-1/3 h-[420px] w-[420px] rounded-full bg-[#C9A24A]/10 blur-3xl" />
        <div className="pointer-events-none absolute -right-40 bottom-0 h-[360px] w-[360px] rounded-full bg-[#2A4A8A]/20 blur-3xl" />
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage:
              "radial-gradient(ellipse at 50% 50%, black 30%, transparent 80%)",
            WebkitMaskImage:
              "radial-gradient(ellipse at 50% 50%, black 30%, transparent 80%)",
          }}
        />

        <div className="relative mx-auto max-w-[1350px] px-6 py-24 sm:px-12 lg:px-16 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-16">
            {/* ---------- left: heading + progress panel ---------- */}
            <div className="lg:sticky lg:top-28 lg:self-start">
              <h2 className="font-serif text-3xl font-bold leading-tight sm:text-5xl">
                Is your article ready to submit?
              </h2>
              <p className="mt-5 max-w-md text-base leading-8 text-slate-300">
                Tick each point that is true for your article. It takes a minute
                and saves time in editorial review.
              </p>

              <div className="relative mt-10 max-w-md overflow-hidden rounded-3xl border border-[#C9A24A]/40 bg-gradient-to-br from-white/[0.09] to-white/[0.02] p-8 shadow-[0_30px_60px_-30px_rgba(0,0,0,0.6)] sm:p-9">
                <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full border border-[#C9A24A]/25" />
                <div className="pointer-events-none absolute -right-8 -top-8 h-48 w-48 rounded-full border border-[#C9A24A]/10" />

                <div className="relative flex items-center gap-6">
                  {/* progress ring */}
                  <div className="relative h-28 w-28 shrink-0">
                    <svg
                      viewBox="0 0 120 120"
                      className="h-full w-full -rotate-90"
                    >
                      <circle
                        cx="60"
                        cy="60"
                        r="52"
                        fill="none"
                        stroke="rgba(255,255,255,0.14)"
                        strokeWidth="8"
                      />
                      <circle
                        cx="60"
                        cy="60"
                        r="52"
                        fill="none"
                        stroke="#C9A24A"
                        strokeWidth="8"
                        strokeLinecap="round"
                        strokeDasharray={2 * Math.PI * 52}
                        strokeDashoffset={
                          2 *
                          Math.PI *
                          52 *
                          (1 - checked.length / checklist.length)
                        }
                        style={{ transition: "stroke-dashoffset 0.6s ease" }}
                      />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="font-serif text-3xl font-bold leading-none">
                        {checked.length}/{checklist.length}
                      </span>
                      <span className="mt-1 text-xs text-slate-400">ready</span>
                    </div>
                  </div>

                  <div>
                    <p className="font-serif text-xl font-bold leading-snug">
                      {ready
                        ? "Your article is ready."
                        : checked.length === 0
                          ? "Let's check your article."
                          : "Almost there."}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      {ready
                        ? "Send it to our editorial team."
                        : `${checklist.length - checked.length} more to confirm before you submit.`}
                    </p>
                  </div>
                </div>

                <Link
                  to="/contact"
                  aria-disabled={!ready}
                  tabIndex={ready ? 0 : -1}
                  onClick={(e) => !ready && e.preventDefault()}
                  className={`group relative mt-8 inline-flex w-full items-center justify-between rounded-full py-2 pl-7 pr-2 text-sm font-bold transition-all duration-300 ${
                    ready
                      ? "bg-[#C9A24A] text-[#0D1628] hover:bg-[#DDB85F]"
                      : "cursor-not-allowed border border-white/15 bg-white/[0.06] text-white/50"
                  }`}
                >
                  Submit your article
                  <span
                    className={`flex h-11 w-11 items-center justify-center rounded-full transition-colors duration-300 ${
                      ready
                        ? "bg-[#0D1628] text-[#C9A24A] group-hover:bg-white group-hover:text-[#0D1628]"
                        : "bg-white/10 text-white/50"
                    }`}
                  >
                    <ArrowUpRight size={18} />
                  </span>
                </Link>
              </div>
            </div>

            {/* ---------- right: compact checklist cards ---------- */}
            <ul className="space-y-3">
              {checklist.map((item, i) => {
                const on = checked.includes(i);
                return (
                  <li key={item.title}>
                    <button
                      type="button"
                      role="checkbox"
                      aria-checked={on}
                      onClick={() => toggle(i)}
                      className={`group relative flex w-full items-center gap-4 overflow-hidden rounded-xl border px-5 py-4 text-left shadow-[0_18px_40px_-28px_rgba(0,0,0,0.7)] transition-colors duration-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C9A24A] sm:px-6 ${
                        on
                          ? "border-[#C9A24A] bg-[#C9A24A] text-[#0D1628]"
                          : "border-white/25 bg-white/[0.06] text-white hover:border-[#C9A24A]"
                      }`}
                    >
                      {/* gold wash on hover, left se right */}
                      {!on && (
                        <span className="absolute inset-0 origin-left scale-x-0 bg-[#C9A24A]/20 transition-transform duration-500 ease-out group-hover:scale-x-100" />
                      )}

                      <span
                        className={`relative z-10 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 transition-all duration-300 ${
                          on
                            ? "border-[#0D1628] bg-[#0D1628] text-[#C9A24A]"
                            : "border-white/40 group-hover:border-[#C9A24A]"
                        }`}
                      >
                        {on && <Check size={14} strokeWidth={3} />}
                      </span>

                      <span className="relative z-10">
                        <span className="block font-serif text-lg font-bold leading-snug sm:text-[19px]">
                          {item.title}
                        </span>
                        <span
                          className={`mt-1 block text-[13px] leading-5 transition-colors duration-500 ${
                            on ? "text-[#0D1628]/80" : "text-slate-300"
                          }`}
                        >
                          {item.description}
                        </span>
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>





      {/* ================= FINAL CTA ================= */}
      <section className="px-6 py-20 sm:px-12 lg:px-16 lg:py-28">
        <div
          className="relative mx-auto max-w-[1350px] overflow-hidden rounded-[2rem] px-7 py-16 text-white sm:px-14 lg:px-20 lg:py-20"
          style={{ backgroundColor: NAVY }}
        >
          {/* one subtle detail: thin gold line at the top */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#C9A24A]/70 to-transparent" />

          <div className="relative flex flex-col justify-between gap-10 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <p className="font-serif text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                Have a story worth sharing?
              </p>

              <p className="mt-6 max-w-lg text-base leading-8 text-slate-300">
                Bring your knowledge and perspective to a magazine read by the
                people shaping India's construction industry.
              </p>
            </div>

            <div className="shrink-0">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-5 rounded-full bg-[#C9A24A] py-2 pl-8 pr-2 text-sm font-bold text-[#0D1628] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#DDB85F] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Start your contribution
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0D1628] text-[#C9A24A] transition-colors duration-300 group-hover:bg-white group-hover:text-[#0D1628]">
                  <ArrowUpRight
                    size={19}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </span>
              </Link>
              <p className="mt-4 text-sm text-slate-400">
                You will be connected with our editorial team.
              </p>
            </div>
          </div>
        </div>
      </section>



      
    </main>
  );
};

export default GuestArticlePage;
