import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const cardAnimation = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function MagazineCard({ magazine, compact = false }) {
  return (
    <motion.article
      variants={cardAnimation}
      whileHover={{ y: -8 }}
      transition={{
        duration: 0.35,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        group overflow-hidden rounded-2xl
        border border-slate-200 bg-white
        shadow-[0_15px_45px_-30px_rgba(10,17,40,0.35)]
        transition-shadow duration-500
        hover:shadow-[0_25px_60px_-30px_rgba(10,17,40,0.45)]
      "
    >
      {/* MAGAZINE COVER */}
      <div className="relative overflow-hidden bg-[#0A1128] p-4">
        <div className="relative overflow-hidden rounded-lg">
  {compact ? (
    <img
      src={magazine.cover}
      alt={magazine.title}
      className="aspect-[3/4] w-full object-cover transition-transform duration-700 group-hover:scale-105"
    />
  ) : (
    <iframe
      src={`${magazine.link.split("#")[0]}#p=1`}
      title={magazine.title}
      className="aspect-[3/4] w-full border-0"
      loading="lazy"
    />
  )}
</div>
      </div>

      {/* CONTENT */}
      <div className="px-6 pb-7 pt-6">
        <span className="
          inline-flex rounded-md
          bg-[#f7f3e9]
          px-3 py-1.5
          text-[10px] font-bold
          uppercase tracking-[0.18em]
          text-[#805B18]
        ">
          {magazine.month}
        </span>

        <h2 className="
          mt-4 font-serif
          text-xl font-bold
          leading-tight
          text-[#0A1128]
        ">
          {magazine.title}
        </h2>

        <p className="
          mt-3 text-sm
          leading-6 text-slate-500
        ">
          {magazine.description}
        </p>

        <a
          href={magazine.link}
          target="_blank"
          rel="noopener noreferrer"
          className="
            group/button mt-6
            inline-flex items-center gap-2
            rounded-xl
            bg-[#0A1128]
            px-5 py-3
            text-xs font-bold
            text-white
            transition-all duration-300
            hover:bg-[#C99A3B]
            hover:text-[#0A1128]
          "
        >
          Read Magazine

          <ArrowUpRight
            size={15}
            className="
              transition-transform duration-300
              group-hover/button:-translate-y-0.5
              group-hover/button:translate-x-0.5
            "
          />
        </a>
      </div>
    </motion.article>
  );
}

export default MagazineCard;