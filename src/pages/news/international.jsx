import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { getInternationalNews } from "../../services/NewsApi";
import { normalizeNews } from "../../utils/newsFormat";

/* =========================================================
   SKELETON
========================================================= */

function InternationalSkeleton() {
  return (
    <div className="grid animate-pulse grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {[0, 1, 2, 3].map((i) => (
        <div key={i}>
          <div className="aspect-[16/10] w-full rounded-md bg-slate-200" />

          <div className="mt-3 h-4 w-11/12 rounded bg-slate-200" />

          <div className="mt-2 h-4 w-3/4 rounded bg-slate-200" />
        </div>
      ))}
    </div>
  );
}

/* =========================================================
   INTERNATIONAL NEWS
========================================================= */

function InternationalNews() {
  const [items, setItems] = useState([]);
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    const controller = new AbortController();

    getInternationalNews(4, controller.signal)
      .then((data) => {
        setItems(data.map(normalizeNews));
        setStatus("success");
      })
      .catch((err) => {
        if (err.name !== "AbortError") {
          setStatus("error");
        }
      });

    return () => controller.abort();
  }, []);

  return (
    <section className="bg-white py-6 sm:py-8">
      <div className="mx-auto w-full max-w-[1500px] px-4 sm:px-6 lg:px-8">

        {/* ================= HEADER ================= */}

        <div className="mb-4 flex items-center justify-between">

          <div className="flex items-center gap-2.5">
            <span className="h-4 w-[3px] bg-[#C99A3B]" />

            <h2 className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-900">
              International News
            </h2>
          </div>

          <Link
            to="/news/international"
            className="group flex items-center gap-1.5 border-b border-[#C99A3B] pb-0.5 text-[11px] font-semibold text-slate-900 transition-colors hover:text-[#805B18]"
          >
            View All

            <span className="text-[#C99A3B] transition-transform duration-300 group-hover:translate-x-0.5">
              →
            </span>
          </Link>

        </div>

        {/* ================= LOADING ================= */}

        {status === "loading" && <InternationalSkeleton />}

        {/* ================= ERROR ================= */}

        {status === "error" && (
          <p className="rounded-md border border-slate-200 py-10 text-center text-sm text-slate-500">
            International news load nahi ho payi. Thodi der baad dobara try karein.
          </p>
        )}

        {/* ================= EMPTY ================= */}

        {status === "success" && items.length === 0 && (
          <p className="rounded-md border border-slate-200 py-10 text-center text-sm text-slate-500">
            Abhi koi international news available nahi hai.
          </p>
        )}

        {/* ================= NEWS GRID ================= */}

        {status === "success" && items.length > 0 && (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">

            {items.map((item) => (
              <Link
                key={item.id}
                to={item.link}
                className="group flex flex-col overflow-hidden rounded-md border border-slate-200/80 bg-white shadow-[0_8px_22px_-16px_rgba(15,23,42,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#C99A3B]/60"
              >

                {/* IMAGE */}

                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">

                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#C99A3B] transition-all duration-700 group-hover:w-full" />

                </div>

                {/* CONTENT */}

                <div className="flex flex-1 flex-col p-3.5">

                  <h3 className="line-clamp-3 text-[15px] font-bold leading-snug text-slate-900 transition-colors group-hover:text-[#805B18]">
                    {item.title}
                  </h3>

                  <span className="mt-auto pt-3 text-[11px] font-medium text-slate-500">
                    {item.date}
                  </span>

                </div>

              </Link>
            ))}

          </div>
        )}

      </div>
    </section>
  );
}

export default InternationalNews;