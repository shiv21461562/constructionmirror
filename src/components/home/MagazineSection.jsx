
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

const magazines = [
  {
    id: 1,
    image: "/magazinesCover/magazine-1.webp",
    alt: "Magazine cover 1",
  },
  {
    id: 2,
    image: "/magazinesCover/magazine-2.webp",
    alt: "Magazine cover 2",
  },
  {
    id: 3,
    image: "/magazinesCover/magazine-3.webp",
    alt: "Magazine cover 3",
  },
  {
    id: 4,
    image: "/magazinesCover/magazine-4.webp",
    alt: "Magazine cover 4",
  },
];

export default function MagazineSection() {
  const [imageErrors, setImageErrors] = useState([]);

  return (
    <section className="relative overflow-hidden bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
      <div className="mx-auto max-w-[1280px]">

        {/* Center Heading */}
        <div className="mb-12 text-center sm:mb-14">
          <div className="mb-5 flex justify-center">
            <p className="inline-flex flex-col items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#9B742B]">
              Magazine
              <span className="h-[2px] w-full bg-[#C69A43]" />
            </p>
          </div>

          <h2 className="text-2xl font-extrabold tracking-tight text-[#0B1628] sm:text-3xl lg:text-4xl">
            Stories worth{" "}
            <span className="text-[#C69A43]">
              turning pages for.
            </span>
          </h2>

          <div className="mx-auto mt-5 h-[3px] w-12 bg-[#C69A43]" />
        </div>

        {/* Magazine Covers */}
        <div className="mx-auto grid max-w-[1050px] grid-cols-2 items-start justify-items-center gap-x-5 gap-y-8 sm:gap-x-8 sm:gap-y-10 lg:grid-cols-4 lg:gap-x-10">

          {magazines.map((magazine) => (
            <div
              key={magazine.id}
              className="group relative w-full max-w-[210px] cursor-pointer"
            >
              {/* Magazine Cover */}
              <div className="relative overflow-hidden border border-slate-200 bg-white p-1 shadow-[0_6px_20px_-12px_rgba(11,22,40,0.3)] transition-all duration-500 group-hover:-translate-y-2 group-hover:border-[#C69A43] group-hover:shadow-[0_18px_32px_-16px_rgba(11,22,40,0.3)] sm:p-1.5">

                {!imageErrors.includes(magazine.id) ? (
                  <img
                    src={magazine.image}
                    alt={magazine.alt}
                    loading="lazy"
                    onError={() =>
                      setImageErrors((prev) =>
                        prev.includes(magazine.id)
                          ? prev
                          : [...prev, magazine.id]
                      )
                    }
                    className="aspect-[3/4] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]"
                  />
                ) : (
                  <div className="flex aspect-[3/4] items-center justify-center bg-slate-50 text-center text-sm text-slate-400">
                    Add magazine cover
                  </div>
                )}

                {/* Hover Border */}
                <div className="pointer-events-none absolute inset-1 border border-transparent transition-colors duration-300 group-hover:border-[#C69A43]/60 sm:inset-1.5" />

                {/* Corner Icon */}
                <div className="absolute right-2 top-2 flex h-8 w-8 translate-y-1 items-center justify-center bg-white text-[#0B1628] opacity-0 shadow-sm transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 sm:right-3 sm:top-3">
                  <ArrowUpRight size={17} />
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
