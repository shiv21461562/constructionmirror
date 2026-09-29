function Header() {
  const ads = [
    {
      image: "/banner/GS-caltex.webp",
      link: "https://example.com",
    },
    {
      image: "/banner/GS-caltex.webp",
      link: "https://example.com",
    },
  ];

  return (
    <section className="relative bg-[#0A1128] py-3 sm:py-4">
      <div className="mx-auto w-full max-w-[1000px] px-4 sm:px-6">

        {/* SECTION LABEL */}
        <div className="mb-2.5 flex items-center justify-center gap-3">
          <span className="h-px w-6 bg-[#D4AF5A]/60 sm:w-8" />
          <span className="text-[8px] font-bold uppercase tracking-[0.3em] text-[#E6C36E]">
            Industry Partners
          </span>
          <span className="h-px w-6 bg-[#D4AF5A]/60 sm:w-8" />
        </div>

        {/* AD STRIPS */}
        <div className="grid grid-cols-1 gap-2 sm:gap-3 lg:grid-cols-2">
          {ads.map((ad, index) => (
            <a
              key={index}
              href={ad.link}
              target="_blank"
              rel="noopener noreferrer"
              className="
                group relative mx-auto block w-full max-w-[560px] overflow-hidden lg:max-w-none
                border-2 border-[#D4AF5A] bg-[#0A1128]
                shadow-[0_6px_18px_-10px_rgba(212,175,90,0.35)]
                transition-all duration-500
                hover:-translate-y-0.5 hover:border-[#F0D283]
                hover:shadow-[0_10px_24px_-10px_rgba(212,175,90,0.55)]
              "
            >
              {/* BANNER: original ratio 1600 × 250, never cropped */}
              <div className="relative aspect-[1600/250] w-full">
                <img
                  src={ad.image}
                  alt="Industry Advertisement"
                  width={1600}
                  height={250}
                  loading="lazy"
                  className="
                    absolute inset-0 h-full w-full
                    object-contain object-center
                    transition-transform duration-700 ease-out
                    group-hover:scale-[1.015]
                  "
                />

                {/* Hover Arrow */}
                <div
                  className="
                    absolute right-2 top-1/2 flex h-6 w-6
                    -translate-y-1/2 translate-x-2
                    items-center justify-center
                    border border-[#D4AF5A] bg-[#0A1128]/90 text-[#E6C36E]
                    opacity-0 shadow-[0_4px_12px_rgba(0,0,0,0.4)]
                    transition-all duration-500
                    group-hover:translate-x-0 group-hover:opacity-100
                  "
                >
                  <span className="text-xs leading-none">→</span>
                </div>

                {/* Gold Bottom Accent */}
                <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#F0D283] transition-all duration-700 group-hover:w-full" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Header;