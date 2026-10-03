import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import { getLatestNews } from "../../services/NewsApi";

import { getLatestNews } from "../../services/latestNewsApi";

/* =========================================================
   API DATA -> UI DATA
   Backend ke field names alag hon to sirf yahin badalna hai.
========================================================= */
const IMAGE_BASE = import.meta.env.VITE_IMAGE_URL || "";

function formatDate(value) {
  if (!value) return "";
  return new Date(value).toLocaleDateString("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  });
}

function formatViews(n = 0) {
  return n >= 1000 ? `${(n / 1000).toFixed(1)}K Views` : `${n} Views`;
}

function resolveImage(src) {
  if (!src) return "/news/placeholder.webp";
  return src.startsWith("http") ? src : `${IMAGE_BASE}${src}`;
}

function normalize(n) {
  const id = n._id || n.id;
  return {
    id,
    category: n.category?.name || n.category || "News",
    title: n.title,
    excerpt: n.excerpt || n.description || n.summary || "",
    date: formatDate(n.publishedAt || n.createdAt || n.date),
    views: formatViews(n.views ?? n.viewCount ?? 0),
    image: resolveImage(n.image || n.thumbnail || n.featuredImage),
    link: `/news/${n.slug || id}`,
  };
}

/* =========================================================
   ICONS
========================================================= */
const CalendarIcon = () => (
  <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="3" y="5" width="18" height="16" rx="2" />
    <path d="M3 10h18M8 3v4M16 3v4" />
  </svg>
);

const EyeIcon = () => (
  <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

function Meta({ date, views, light = false }) {
  return (
    <div className={`flex items-center gap-2.5 text-[10px] font-medium ${light ? "text-white/80" : "text-slate-500"}`}>
      <span className="flex items-center gap-1.5">
        <CalendarIcon />
        {date}
      </span>
      <span className={`h-3 w-px ${light ? "bg-white/30" : "bg-slate-300"}`} />
      <span className="flex items-center gap-1.5">
        <EyeIcon />
        {views}
      </span>
    </div>
  );
}

/* =========================================================
   LOADING SKELETON
========================================================= */
function NewsSkeleton() {
  return (
    <div className="grid animate-pulse gap-3 lg:grid-cols-[1.9fr_1fr]">
      <div className="min-h-[280px] rounded-md bg-slate-200 sm:min-h-[340px] lg:min-h-[420px]" />
      <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
        {[0, 1, 2].map((i) => (
          <div key={i} className="h-28 rounded-md bg-slate-200 lg:h-auto" />
        ))}
      </div>
    </div>
  );
}

/* =========================================================
   MAIN COMPONENT
========================================================= */
function LatestNews() {
  const [items, setItems] = useState([]);
  const [status, setStatus] = useState("loading"); // loading | success | error

  useEffect(() => {
    const controller = new AbortController();

    getLatestNews(4, controller.signal)
      .then((data) => {
        setItems(data.map(normalize));
        setStatus("success");
      })
      .catch((err) => {
        if (err.name !== "AbortError") setStatus("error");
      });

    return () => controller.abort();
  }, []);

  const [featured, ...side] = items;

  return (
    <section className="bg-white py-6 sm:py-8">
      <div className="mx-auto w-full max-w-[1500px] px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="h-4 w-[3px] bg-[#C99A3B]" />
            <h2 className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-900">
              Latest News
            </h2>
          </div>

          <Link
            to="/news"
            className="group flex items-center gap-1.5 border-b border-[#C99A3B] pb-0.5 text-[11px] font-semibold text-slate-900 transition-colors hover:text-[#805B18]"
          >
            View All
            <span className="text-[#C99A3B] transition-transform duration-300 group-hover:translate-x-0.5">→</span>
          </Link>
        </div>

        {status === "loading" && <NewsSkeleton />}

        {status === "error" && (
          <p className="rounded-md border border-slate-200 py-10 text-center text-sm text-slate-500">
            News load nahi ho payi. Thodi der baad dobara try karein.
          </p>
        )}

        {status === "success" && !featured && (
          <p className="rounded-md border border-slate-200 py-10 text-center text-sm text-slate-500">
            Abhi koi news available nahi hai.
          </p>
        )}

        {status === "success" && featured && (
          <div className="grid gap-3 lg:grid-cols-[1.9fr_1fr]">
            {/* FEATURED */}
            <Link
              to={featured.link}
              className="group relative block min-h-[280px] overflow-hidden rounded-md bg-slate-900 shadow-[0_10px_30px_-18px_rgba(15,23,42,0.5)] sm:min-h-[340px] lg:min-h-[420px]"
            >
              <img
                src={featured.image}
                alt={featured.title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1128] via-[#0A1128]/55 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 p-4 pr-16 sm:p-6 sm:pr-24">
                <span className="mb-3 inline-block rounded-full bg-[#C99A3B] px-3 py-1 text-[10px] font-bold text-[#3a2a08]">
                  {featured.category}
                </span>

                <h3 className="max-w-xl text-lg font-bold leading-snug text-white sm:text-2xl">
                  {featured.title}
                </h3>

                {featured.excerpt && (
                  <p className="mt-2 hidden max-w-xl text-[12px] leading-relaxed text-white/75 sm:line-clamp-2 sm:block">
                    {featured.excerpt}
                  </p>
                )}

                <div className="mt-3">
                  <Meta date={featured.date} views={featured.views} light />
                </div>
              </div>

              <span className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full border border-[#D4AF5A] bg-[#0A1128]/60 text-[#E6C36E] backdrop-blur-sm transition-all duration-300 group-hover:bg-[#D4AF5A] group-hover:text-[#0A1128] sm:bottom-6 sm:right-6 sm:h-11 sm:w-11">
                <ArrowIcon />
              </span>
            </Link>

            {/* SIDE LIST */}
            {side.length > 0 && (
              <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
                {side.slice(0, 3).map((item) => (
                  <Link
                    key={item.id}
                    to={item.link}
                    className="group relative flex flex-col overflow-hidden rounded-md border border-slate-200/80 bg-white shadow-[0_8px_22px_-16px_rgba(15,23,42,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#C99A3B]/60 lg:flex-row"
                  >
                    <div className="relative aspect-[16/10] w-full shrink-0 overflow-hidden lg:aspect-auto lg:w-[42%]">
                      <img
                        src={item.image}
                        alt={item.title}
                        loading="lazy"
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                    </div>

                    <div className="relative flex flex-1 flex-col justify-center gap-1.5 p-3 pr-12 lg:p-4 lg:pr-14">
                      <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#C99A3B]">
                        {item.category}
                      </span>
                      <h3 className="line-clamp-2 text-[13px] font-bold leading-snug text-slate-900 sm:text-sm">
                        {item.title}
                      </h3>
                      <Meta date={item.date} views={item.views} />

                      <span className="absolute bottom-3 right-3 flex h-8 w-8 items-center justify-center rounded-full border border-[#D4AF5A]/70 text-[#C99A3B] transition-all duration-300 group-hover:bg-[#C99A3B] group-hover:text-white lg:bottom-1/2 lg:translate-y-1/2">
                        <ArrowIcon />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}

export default LatestNews;
