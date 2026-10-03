import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const YEAR = 2026;

const events = [
  {
    name: "Jharkhand Mining & Construction Show 2026",
    start: "2026-01-29",
    end: "2026-01-31",
    dateLabel: "29-31 January 2026",
    venue: "Ranchi, Jharkhand",
  },
  {
    name: "ICME 2026",
    start: "2026-02-24",
    end: "2026-02-26",
    dateLabel: "24-26 February 2026",
    venue: "Biswa Bangla Exhibition Centre, Kolkata",
  },
  {
    name: "STEEL Construction Expo 2026",
    start: "2026-02-26",
    end: "2026-02-28",
    dateLabel: "26-28 February 2026",
    venue: "Chennai Trade Centre, Chennai",
  },
  {
    name: "Smart Cities India Expo 2026",
    start: "2026-03-23",
    end: "2026-03-25",
    dateLabel: "23-25 March 2026",
    venue: "New Delhi",
  },
  {
    name: "Convergence India 2026",
    start: "2026-03-23",
    end: "2026-03-25",
    dateLabel: "23-25 March 2026",
    venue: "New Delhi",
  },
  {
    name: "Bharat Steel 2026",
    start: "2026-04-16",
    end: "2026-04-17",
    dateLabel: "16-17 April 2026",
    venue: "Bharat Mandapam, New Delhi",
  },
  {
    name: "Bharat Buildcon 2026",
    start: "2026-04-29",
    end: "2026-05-02",
    dateLabel: "29 April - 02 May 2026",
    venue: "Yashobhoomi, New Delhi",
  },
  {
    name: "World of Concrete India 2026",
    start: "2026-06-03",
    end: "2026-06-05",
    dateLabel: "03-05 June 2026",
    venue: "Bombay Exhibition Centre, Mumbai",
  },
  {
    name: "Earthcon Expo 2026",
    start: "2026-06-19",
    end: "2026-06-21",
    dateLabel: "19-21 June 2026",
    venue: "Hitex Exhibition Centre, Hyderabad",
  },
  {
    name: "India Prefab Expo 2026",
    start: "2026-08-11",
    end: "2026-08-13",
    dateLabel: "11-13 August 2026",
    venue: "Yashobhoomi, New Delhi",
  },
  {
    name: "Lubricant India Expo 2026",
    start: "2026-09-24",
    end: "2026-09-26",
    dateLabel: "24-26 September 2026",
    venue: "Yashobhoomi, New Delhi",
  },
  {
    name: "bauma CONEXPO INDIA 2026",
    start: "2026-09-28",
    end: "2026-10-01",
    dateLabel: "28 September - 01 October 2026",
    venue: "India Expo Centre, Greater Noida",
  },
  {
    name: "IMME – International Mining & Machinery Exhibition 2026",
    start: "2026-11-01",
    end: "2026-11-30",
    dateLabel: "November 2026",
    venue: "To be announced",
    tba: true,
  },
];

const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const tabs = [
  { id: "all", label: "All Events" },
  { id: "upcoming", label: "Upcoming" },
  { id: "completed", label: "Completed" },
];

function getStatus(ev, now) {
  const start = new Date(`${ev.start}T00:00:00`);
  const end = new Date(`${ev.end}T23:59:59`);

  if (now < start) return "upcoming";
  if (now > end) return "completed";

  return "ongoing";
}

const statusConfig = {
  upcoming: {
    label: "Upcoming",
    className: "border-emerald-200 bg-emerald-50 text-emerald-700",
    dot: "bg-emerald-500",
  },
  ongoing: {
    label: "Happening Now",
    className: "border-[#C99A3B]/30 bg-[#C99A3B]/10 text-[#A87D25]",
    dot: "bg-[#C99A3B]",
  },
  completed: {
    label: "Completed",
    className: "border-slate-200 bg-slate-100 text-slate-600",
    dot: "bg-slate-400",
  },
};

function CalendarIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-4 w-4"
    >
      <rect x="3" y="4" width="18" height="17" rx="2" />
      <path d="M16 2v4M8 2v4M3 9h18" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-4 w-4"
    >
      <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="h-4 w-4"
    >
      <path d="M5 12h13M13 6l6 6-6 6" />
    </svg>
  );
}

function EventCard({ event, index }) {
  const date = new Date(`${event.start}T00:00:00`);
  const config = statusConfig[event.status];

  const isCompleted = event.status === "completed";
  const isOngoing = event.status === "ongoing";

  return (
    <motion.li
      layout
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{
        duration: 0.3,
        delay: index * 0.035,
        ease: "easeOut",
      }}
      whileHover={{
        y: -3,
        transition: { duration: 0.2 },
      }}
      className={`group relative overflow-hidden rounded-2xl border bg-white transition-all duration-300 ${
        isOngoing
          ? "border-[#C99A3B]/50 shadow-[0_12px_35px_rgba(201,154,59,0.10)]"
          : "border-slate-200 shadow-[0_4px_20px_rgba(15,23,42,0.04)] hover:border-slate-300 hover:shadow-[0_12px_30px_rgba(15,23,42,0.08)]"
      }`}
    >
      {/* Ongoing Accent */}
      {isOngoing && (
        <div className="absolute inset-x-0 top-0 h-[3px] bg-[#C99A3B]" />
      )}

      <div className="flex flex-col gap-5 p-5 sm:flex-row sm:items-center">
        {/* Date */}
        <div
          className={`flex h-[82px] w-[82px] shrink-0 flex-col items-center justify-center rounded-2xl border ${
            isCompleted
              ? "border-slate-200 bg-slate-50"
              : "border-slate-800 bg-slate-950"
          }`}
        >
          <span
            className={`text-[11px] font-bold uppercase tracking-[0.18em] ${
              isCompleted ? "text-slate-500" : "text-[#D9AE55]"
            }`}
          >
            {MONTHS[date.getMonth()]}
          </span>

          <span
            className={`mt-1 text-2xl font-bold tracking-tight ${
              isCompleted ? "text-slate-700" : "text-white"
            }`}
          >
            {event.tba ? "TBA" : String(date.getDate()).padStart(2, "0")}
          </span>
        </div>

        {/* Main Info */}
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-start gap-3">
            <h2
              className={`max-w-2xl text-[17px] font-bold leading-6 tracking-[-0.01em] ${
                isCompleted ? "text-slate-700" : "text-slate-950"
              }`}
            >
              {event.name}
            </h2>
          </div>

          <div className="mt-3 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-5 sm:gap-y-2">
            <div className="flex items-center gap-2 text-sm font-semibold text-[#A87D25]">
              <CalendarIcon />
              <span>{event.dateLabel}</span>
            </div>

            <div className="hidden h-1 w-1 rounded-full bg-slate-300 sm:block" />

            <div className="flex items-center gap-2 text-sm font-medium text-slate-600">
              <LocationIcon />
              <span>{event.venue}</span>
            </div>
          </div>
        </div>

        {/* Status + Arrow */}
        <div className="flex shrink-0 items-center justify-between gap-4 sm:flex-col sm:items-end">
          <span
            className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-bold ${config.className}`}
          >
            <span className={`h-1.5 w-1.5 rounded-full ${config.dot}`} />
            {config.label}
          </span>

          <div className="hidden text-slate-300 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#C99A3B] sm:block">
            <ArrowIcon />
          </div>
        </div>
      </div>
    </motion.li>
  );
}

function Events() {
  const [tab, setTab] = useState("all");
  const now = new Date();

  const list = events
    .map((event) => ({
      ...event,
      status: getStatus(event, now),
    }))
    .filter((event) => {
      if (tab === "all") return true;

      if (tab === "upcoming") {
        return event.status !== "completed";
      }

      return event.status === "completed";
    });

  const upcomingCount = events.filter(
    (event) => getStatus(event, now) !== "completed"
  ).length;

  const completedCount = events.filter(
    (event) => getStatus(event, now) === "completed"
  ).length;

  return (
    <section className="relative overflow-hidden bg-white px-4 py-16 sm:px-6 lg:py-24">
      {/* Very subtle background */}
      <div className="pointer-events-none absolute right-0 top-0 h-80 w-80 rounded-full bg-[#C99A3B]/[0.035] blur-3xl" />

      <div className="relative mx-auto max-w-6xl">
        {/* ================= HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="max-w-3xl"
        >
          {/* Badge */}
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#C99A3B]/25 bg-[#C99A3B]/[0.07] px-3.5 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-[#C99A3B]" />

            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#A87D25]">
              Industry Events
            </span>
          </div>

          <h1 className="text-4xl font-bold tracking-[-0.035em] text-slate-950 sm:text-5xl lg:text-[56px] lg:leading-[1.08]">
            Industry Events{" "}
            <span className="text-[#C99A3B]">{YEAR}</span>
          </h1>

          <p className="mt-5 max-w-2xl text-[16px] leading-7 text-slate-600">
            Trade shows and exhibitions from the construction, mining, steel
            and infrastructure industry that Construction Mirror covers this
            year.
          </p>

          {/* Gold line */}
          <div className="mt-7 h-[3px] w-16 rounded-full bg-[#C99A3B]" />
        </motion.div>

        {/* ================= STATS ================= */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.12 }}
          className="mt-9 flex flex-wrap gap-3"
        >
          <div className="rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
            <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
              Total Events
            </p>
            <p className="mt-1 text-xl font-bold text-slate-950">
              {events.length}
            </p>
          </div>

          <div className="rounded-xl border border-emerald-100 bg-emerald-50/60 px-4 py-3">
            <p className="text-[11px] font-bold uppercase tracking-wider text-emerald-700">
              Upcoming
            </p>
            <p className="mt-1 text-xl font-bold text-emerald-800">
              {upcomingCount}
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
            <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
              Completed
            </p>
            <p className="mt-1 text-xl font-bold text-slate-800">
              {completedCount}
            </p>
          </div>
        </motion.div>

        {/* ================= FILTER ================= */}
        <div className="mt-14 flex flex-col gap-5 border-b border-slate-200 pb-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#A87D25]">
              Event Calendar
            </p>

            <h2 className="mt-1.5 text-2xl font-bold tracking-tight text-slate-950">
              Find an industry event
            </h2>
          </div>

          <div className="inline-flex w-fit rounded-xl border border-slate-200 bg-slate-100 p-1">
            {tabs.map((item) => {
              const active = tab === item.id;

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setTab(item.id)}
                  className={`relative rounded-lg px-4 py-2 text-sm font-semibold transition-all duration-200 ${
                    active
                      ? "text-slate-950"
                      : "text-slate-500 hover:text-slate-800"
                  }`}
                >
                  {active && (
                    <motion.span
                      layoutId="activeEventTab"
                      className="absolute inset-0 rounded-lg bg-white shadow-sm"
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 30,
                      }}
                    />
                  )}

                  <span className="relative z-10">{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ================= LIST ================= */}
        <div className="mt-6">
          <AnimatePresence mode="popLayout">
            {list.length > 0 ? (
              <motion.ul
                layout
                className="space-y-3"
              >
                {list.map((event, index) => (
                  <EventCard
                    key={event.name}
                    event={event}
                    index={index}
                  />
                ))}
              </motion.ul>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 px-6 py-14 text-center"
              >
                <p className="text-base font-semibold text-slate-700">
                  No events in this list.
                </p>

                <p className="mt-1 text-sm text-slate-500">
                  Try selecting another filter.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* ================= FOOTER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45 }}
          className="mt-12 rounded-2xl border border-slate-200 bg-slate-50 px-6 py-7 sm:px-8"
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-bold text-slate-950">
                Stay connected with the industry
              </p>

              <p className="mt-1 text-sm leading-6 text-slate-600">
                Follow Construction Mirror for event coverage, industry news
                and updates.
              </p>
            </div>

            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-950 text-[#D9AE55]">
              <ArrowIcon />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Events;