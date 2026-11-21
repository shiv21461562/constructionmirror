import { motion } from "framer-motion";

const ResourcesHero = () => {
  return (
    <section className="relative overflow-hidden bg-white py-14 sm:py-16 lg:py-20">
      <div className="pointer-events-none absolute -right-32 -top-24 h-[340px] w-[340px] rounded-full bg-[#C99A3B]/10 blur-3xl" />

      <div className="pointer-events-none absolute -bottom-32 -left-24 h-[280px] w-[280px] rounded-full bg-[#F7F8FA] blur-3xl" />

      <div className="relative mx-auto max-w-[1220px] px-5 sm:px-8 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="max-w-2xl"
        >
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-9 bg-[#C99A3B]" />

            <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#A77B24]">
              Resources
            </span>
          </div>

          <h3 className="font-serif text-[24px] font-bold leading-[1.05] tracking-[-0.035em] text-[#0A1128] sm:text-[24px] lg:text-[32px]">
            Knowledge for those who build
            <span className="text-[#C99A3B]">.</span>
          </h3>

          <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600">
            Reports, guides, market data and past editions of Construction
            Mirror, collected in one place for the construction industry.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ResourcesHero;