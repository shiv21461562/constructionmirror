import { motion } from "framer-motion";
import { ArrowDown, BookOpen, Sparkles } from "lucide-react";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const fadeRight = {
  hidden: {
    opacity: 0,
    x: 35,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      delay: 0.15,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function MagazineHero() {
  return (
    <section className="relative overflow-hidden bg-[#F7F8FA]">
 

      <div
        className="
          pointer-events-none absolute
          -right-40 top-20
          h-[420px] w-[420px]
          rounded-full
          bg-[#0A1128]/[0.04]
          blur-3xl
        "
      />

 

      <div className="relative mx-auto max-w-[1240px] px-5 sm:px-8">
        <div className="grid min-h-[470px] items-center gap-12 py-16 lg:grid-cols-[1fr_auto] lg:py-20">

          {/* LEFT CONTENT */}
          <div>
            {/* Editorial Label */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="mb-7 flex items-center gap-3"
            >
              <span className="h-px w-12 bg-[#C99A3B]" />

              <span
                className="
                  text-[10px] font-bold
                  uppercase tracking-[0.3em]
                  text-[#805B18]
                  sm:text-[11px]
                "
              >
                Construction Mirror
              </span>

              <span className="rounded-full bg-[#0A1128] px-2 py-1 text-[8px] font-bold uppercase tracking-[0.15em] text-white">
                Archive
              </span>
            </motion.div>

           <motion.h1
  variants={fadeUp}
  initial="hidden"
  animate="visible"
  className="
    max-w-[800px]
    font-serif
    text-[38px]
    font-bold
    leading-[0.95]
    tracking-[-0.035em]
    text-[#0A1128]
    sm:text-[48px]
    lg:text-[60px]
  "
>
  Our{" "}
  <span className="relative inline-block text-[#C99A3B]">
    Magazines
    <span
      className="
        absolute -bottom-2 left-1/2
        h-[3px] w-12
        -translate-x-1/2
        rounded-full
        bg-[#C99A3B]
        sm:-bottom-3
      "
    />
  </span>
</motion.h1>

            {/* Description */}
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="
                mt-7 max-w-[620px]
                text-sm leading-7
                text-slate-500
                sm:text-base
                sm:leading-8
              "
            >
              Explore the latest editions of{" "}
              <span className="font-semibold text-[#0A1128]">
                Construction Mirror
              </span>{" "}
              — bringing together industry news, expert interviews,
              project developments, technology and insights from
              India&apos;s construction and infrastructure sector.
            </motion.p>

            {/* Bottom Meta */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="mt-9 flex flex-wrap items-center gap-6"
            >
              <div className="flex items-center gap-2">
                <BookOpen
                  size={16}
                  strokeWidth={1.7}
                  className="text-[#C99A3B]"
                />

                <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#0A1128]">
                  Latest Editions
                </span>
              </div>

              <span className="h-4 w-px bg-slate-300" />

              <span className="text-[11px] font-medium uppercase tracking-[0.16em] text-slate-400">
                May — July 2026
              </span>
            </motion.div>
          </div>

          {/* RIGHT EDITORIAL BLOCK */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            animate="visible"
            className="hidden lg:block"
          >
            <div className="relative h-[260px] w-[210px]">
              {/* Back Paper */}
              <div
                className="
                  absolute right-7 top-7
                  h-full w-full
                  rotate-[8deg]
                  rounded-sm
                  border border-slate-200
                  bg-white
                  shadow-[0_25px_60px_-30px_rgba(10,17,40,0.35)]
                "
              />

              {/* Main Paper */}
              <div
                className="
                  absolute inset-0
                  -rotate-[3deg]
                  overflow-hidden
                  rounded-sm
                  border border-slate-200
                  bg-[#0A1128]
                  shadow-[0_30px_70px_-25px_rgba(10,17,40,0.45)]
                "
              >
                <div className="flex h-full flex-col justify-between p-6">
                  <div>
                    <span className="text-[8px] font-bold uppercase tracking-[0.25em] text-[#C99A3B]">
                      Construction Mirror
                    </span>

                    <div className="mt-5 h-px w-10 bg-[#C99A3B]" />
                  </div>

                  <div>
                    <p className="font-serif text-3xl font-bold leading-[0.95] text-white">
                      Industry.
                      <br />
                      Insight.
                      <br />
                      Impact.
                    </p>

                    <p className="mt-4 text-[8px] uppercase tracking-[0.2em] text-white/40">
                      Construction & Infrastructure
                    </p>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-[8px] font-bold uppercase tracking-[0.2em] text-white/40">
                      2026 Edition
                    </span>

                    <Sparkles
                      size={15}
                      className="text-[#C99A3B]"
                    />
                  </div>
                </div>
              </div>

              {/* Floating Number */}
              <div
                className="
                  absolute -bottom-5 -left-10
                  flex h-14 w-14
                  items-center justify-center
                  rounded-full
                  border border-[#C99A3B]/30
                  bg-white
                  shadow-[0_15px_40px_-20px_rgba(10,17,40,0.35)]
                "
              >
                <span className="font-serif text-lg font-bold text-[#0A1128]">
                  03
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="
            flex items-center justify-center
            border-t border-slate-200/80
            py-5
          "
        >
          <div className="flex items-center gap-3">
            <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-slate-400">
              Explore Editions
            </span>

            <ArrowDown
              size={13}
              className="animate-bounce text-[#C99A3B]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default MagazineHero;