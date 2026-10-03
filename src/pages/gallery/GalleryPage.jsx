import { useEffect, useState } from "react";

/* ---------- Photos ----------
   Image add karne ke liye bas `src` bharo, e.g.
   src: "/gallery/expo-1.jpg"           (public/gallery folder me rakhi image)
   ya
   import expo1 from "../assets/expo-1.jpg";  ->  src: expo1

   `src` khali ho to placeholder dikhta hai. `ratio` sirf placeholder ke
   shape ke liye hai, real image apni natural height leti hai.
------------------------------------------------------------------ */

const photos = [
  { id: 1, title: "Expo floor", category: "Events", src: "", ratio: "4/3" },
  { id: 2, title: "Cover story shoot", category: "Magazine", src: "", ratio: "3/4" },
  { id: 3, title: "Interview session", category: "Interviews", src: "", ratio: "1/1" },
  { id: 4, title: "Panel discussion", category: "Events", src: "", ratio: "16/9" },
  { id: 5, title: "Magazine launch", category: "Magazine", src: "", ratio: "4/5" },
  { id: 6, title: "Booth visit", category: "Events", src: "", ratio: "4/3" },
  { id: 7, title: "In conversation", category: "Interviews", src: "", ratio: "3/4" },
  { id: 8, title: "Team at work", category: "Team", src: "", ratio: "16/9" },
  { id: 9, title: "Award moment", category: "Events", src: "", ratio: "1/1" },
];

const categories = ["All", ...Array.from(new Set(photos.map((p) => p.category)))];

/* ---------- Small pieces ---------- */

function ImageIcon({ className = "h-10 w-10" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <circle cx="8.5" cy="8.5" r="1.5" />
      <path d="M21 15l-5-5L5 21" />
    </svg>
  );
}

function Picture({ photo, className = "", zoom = false }) {
  if (photo.src) {
    return (
      <img
        src={photo.src}
        alt={photo.title}
        loading="lazy"
        className={`block w-full ${zoom ? "transition duration-700 group-hover:scale-105" : ""} ${className}`}
      />
    );
  }

  return (
    <div
      style={{ aspectRatio: photo.ratio }}
      className={`flex w-full items-center justify-center bg-gradient-to-br from-slate-100 via-slate-50 to-[#C99A3B]/25 text-[#C99A3B]/60 ${
        zoom ? "transition duration-700 group-hover:scale-105" : ""
      } ${className}`}
    >
      <ImageIcon />
    </div>
  );
}

function ArrowButton({ dir, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={dir === "prev" ? "Previous photo" : "Next photo"}
      className={`absolute top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white backdrop-blur transition hover:bg-[#C99A3B] hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C99A3B] ${
        dir === "prev" ? "left-3 sm:left-6" : "right-3 sm:right-6"
      }`}
    >
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d={dir === "prev" ? "M15 5l-7 7 7 7" : "M9 5l7 7-7 7"} />
      </svg>
    </button>
  );
}

/* ---------- Page ---------- */

function GalleryPage() {
  const [filter, setFilter] = useState("All");
  const [active, setActive] = useState(null); // index in `list`

  const list = filter === "All" ? photos : photos.filter((p) => p.category === filter);
  const current = active !== null ? list[active] : null;

  // Keyboard controls + scroll lock while lightbox is open
  useEffect(() => {
    if (active === null) return;

    const onKey = (e) => {
      if (e.key === "Escape") setActive(null);
      if (e.key === "ArrowRight") setActive((i) => (i + 1) % list.length);
      if (e.key === "ArrowLeft") setActive((i) => (i - 1 + list.length) % list.length);
    };

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [active, list.length]);

  const go = (step) => setActive((i) => (i + step + list.length) % list.length);

  return (
    <div className="bg-white text-slate-900">
      <style>{`
        @keyframes gal-rise { from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes gal-fade { from { opacity: 0; } to { opacity: 1; } }
        @keyframes gal-pop { from { opacity: 0; transform: scale(.94); } to { opacity: 1; transform: scale(1); } }
        @keyframes gal-float { 0%,100% { transform: translate(0,0) scale(1); } 50% { transform: translate(40px,30px) scale(1.15); } }
        @keyframes gal-grow { from { transform: scaleX(0); } to { transform: scaleX(1); } }

        .gal-rise { opacity: 0; animation: gal-rise .7s cubic-bezier(.2,.7,.2,1) forwards; }
        .gal-fade { animation: gal-fade .25s ease-out; }
        .gal-pop { animation: gal-pop .3s cubic-bezier(.2,.9,.3,1.1); }
        .gal-blob { animation: gal-float 14s ease-in-out infinite; }
        .gal-grow { transform-origin: left; transform: scaleX(0); animation: gal-grow .9s .5s cubic-bezier(.2,.7,.2,1) forwards; }

        @media (prefers-reduced-motion: reduce) {
          .gal-rise, .gal-fade, .gal-pop, .gal-blob { animation: none; opacity: 1; }
          .gal-grow { animation: none; transform: none; }
        }
      `}</style>

      {/* Hero */}
 <section className="relative overflow-hidden bg-white px-4 py-20 sm:px-6 lg:py-28">
  {/* Decorative Gold Blob */}
  <div className="gal-blob pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-[#C99A3B]/10 blur-3xl" />

  <div className="relative mx-auto max-w-3xl text-center">

    {/* Heading */}
    <h1 className="gal-rise text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl">
      <span className="text-[#C99A3B]">G</span>allery
    </h1>

    {/* Gold Line */}
    <div className="gal-grow mx-auto mt-6 h-1 w-20 rounded-full bg-[#C99A3B]" />

    {/* Description */}
    <p
      className="gal-rise mt-6 text-lg leading-8 text-slate-600"
      style={{ animationDelay: "250ms" }}
    >
      Moments from events, interviews and the making of every issue.
    </p>
  </div>
</section>

      {/* Filters + grid */}
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:py-16">
        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {categories.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setFilter(c)}
              aria-pressed={filter === c}
              className={`rounded-full px-5 py-2 text-sm font-medium transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C99A3B] ${
                filter === c
                  ? "bg-slate-900 text-white"
                  : "border border-slate-200 text-slate-600 hover:border-[#C99A3B] hover:text-[#C99A3B]"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div key={filter} className="columns-1 gap-4 sm:columns-2 lg:columns-3">
          {list.map((photo, i) => (
            <button
              key={photo.id}
              type="button"
              onClick={() => setActive(i)}
              className="gal-rise group relative mb-4 block w-full overflow-hidden rounded-2xl text-left focus:outline-none focus-visible:ring-4 focus-visible:ring-[#C99A3B]/50"
              style={{ animationDelay: `${Math.min(i, 8) * 70}ms`, breakInside: "avoid" }}
            >
              <Picture photo={photo} zoom />

              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-slate-900/80 via-slate-900/0 to-transparent p-5 opacity-0 transition duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
                <div className="translate-y-2 transition duration-300 group-hover:translate-y-0">
                  <p className="font-semibold text-white">{photo.title}</p>
                  <p className="text-sm text-[#C99A3B]">{photo.category}</p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      {current && (
        <div
          className="gal-fade fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 p-4 backdrop-blur-sm"
          onClick={() => setActive(null)}
          role="dialog"
          aria-modal="true"
          aria-label={current.title}
        >
          <button
            type="button"
            onClick={() => setActive(null)}
            aria-label="Close"
            className="absolute right-4 top-4 z-10 rounded-full bg-white/10 p-3 text-white backdrop-blur transition hover:bg-[#C99A3B] hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C99A3B] sm:right-6 sm:top-6"
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>

          {list.length > 1 && (
            <>
              <ArrowButton dir="prev" onClick={(e) => { e.stopPropagation(); go(-1); }} />
              <ArrowButton dir="next" onClick={(e) => { e.stopPropagation(); go(1); }} />
            </>
          )}

          <figure
            key={current.id}
            className="gal-pop flex max-h-full w-full max-w-4xl flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-full overflow-hidden rounded-2xl bg-white/5">
              {current.src ? (
                <img
                  src={current.src}
                  alt={current.title}
                  className="mx-auto max-h-[75vh] w-auto max-w-full object-contain"
                />
              ) : (
                <Picture photo={current} className="max-h-[75vh]" />
              )}
            </div>

            <figcaption className="mt-4 text-center">
              <p className="text-lg font-semibold text-white">{current.title}</p>
              <p className="text-sm text-slate-400">
                {current.category} · {active + 1} of {list.length}
              </p>
            </figcaption>
          </figure>
        </div>
      )}
    </div>
  );
}

export default GalleryPage;
