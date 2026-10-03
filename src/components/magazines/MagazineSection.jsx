import { motion } from "framer-motion";
import { ArrowUpRight, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

import magazines from "../../data/magazines";
import MagazineCard from "./MagazineCard";

function MagazineSection() {
  return (
    <section className="relative overflow-hidden bg-[#F7F8FA] py-16 sm:py-20 lg:py-24">

      {/* ================= BACKGROUND GLOW ================= */}

      <div
        className="
          pointer-events-none absolute
          -right-40 top-10
          h-[360px] w-[360px]
          rounded-full
          bg-[#C99A3B]/[0.055]
          blur-3xl
        "
      />

      <div
        className="
          pointer-events-none absolute
          -left-40 bottom-0
          h-[300px] w-[300px]
          rounded-full
          bg-[#0A1128]/[0.025]
          blur-3xl
        "
      />

      {/* ================= CONTAINER ================= */}

      <div className="relative mx-auto max-w-[1220px] px-5 sm:px-8 lg:px-10">

        {/* ================= HEADER ================= */}

        <div className="mb-9 flex flex-col gap-6 sm:mb-11 lg:flex-row lg:items-end lg:justify-between">

          {/* LEFT CONTENT */}

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="max-w-2xl"
          >

            {/* Label */}

            <div className="mb-4 flex items-center gap-3">

              <span className="h-px w-9 bg-[#C99A3B]" />

              <span
                className="
                  text-[9px]
                  font-bold
                  uppercase
                  tracking-[0.28em]
                  text-[#805B18]
                  sm:text-[10px]
                "
              >
                Our Publications
              </span>

              <BookOpen
                size={13}
                strokeWidth={1.8}
                className="text-[#C99A3B]"
              />

            </div>

            {/* Heading */}

            <h2
              className="
                max-w-xl
                font-serif
                text-[34px]
                font-bold
                leading-[1]
                tracking-[-0.035em]
                text-[#0A1128]
                sm:text-[32px]
                lg:text-[38px]
              "
            >
              Industry
              <span className="text-[#C99A3B]">.</span>{" "}

              Insight
              <span className="text-[#C99A3B]">.</span>{" "}

              Impact
              <span className="text-[#C99A3B]">.</span>
            </h2>

      

          </motion.div>

          {/* ================= VIEW ALL ================= */}

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: 0.1,
            }}
          >

            <Link
              to="/magazines"
              className="
                group
                inline-flex
                items-center
                gap-2.5
                rounded-full
                border
                border-[#C99A3B]/40
                bg-white
                px-4
                py-2.5
                text-[9px]
                font-bold
                uppercase
                tracking-[0.18em]
                text-[#0A1128]
                shadow-[0_12px_30px_-22px_rgba(10,17,40,0.45)]
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:border-[#C99A3B]
              "
            >
              View All Editions

              <span
                className="
                  flex
                  h-7
                  w-7
                  items-center
                  justify-center
                  rounded-full
                  bg-[#0A1128]
                  text-[#E6C473]
                  transition-all
                  duration-300
                  group-hover:bg-[#C99A3B]
                  group-hover:text-[#0A1128]
                "
              >
                <ArrowUpRight size={13} />
              </span>

            </Link>

          </motion.div>

        </div>

        {/* ================= MAGAZINES ================= */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.08,
          }}
          transition={{
            staggerChildren: 0.12,
          }}
          className="
            grid
            grid-cols-1
            justify-items-center
            gap-5
            sm:grid-cols-2
            lg:grid-cols-3
          "
        >

          {magazines.slice(0, 3).map((magazine) => (
            <div
              key={magazine.id}
              className="
                w-full
                max-w-[310px]
              "
            >
              <MagazineCard
                magazine={magazine}
                compact
              />
            </div>
          ))}

        </motion.div>

        {/* ================= BOTTOM ================= */}

        <div
          className="
            mt-10
            flex
            items-center
            justify-between
            border-t
            border-slate-200
            pt-5
          "
        >

          <span
            className="
              text-[8px]
              font-bold
              uppercase
              tracking-[0.24em]
              text-slate-400
              sm:text-[9px]
            "
          >
            Construction Mirror Publications
          </span>

          <Link
            to="/magazines"
            className="
              group
              flex
              items-center
              gap-1.5
              text-[8px]
              font-bold
              uppercase
              tracking-[0.18em]
              text-[#805B18]
              sm:text-[9px]
            "
          >
            Explore All

            <ArrowUpRight
              size={12}
              className="
                transition-transform
                duration-300
                group-hover:-translate-y-0.5
                group-hover:translate-x-0.5
              "
            />

          </Link>

        </div>

      </div>
    </section>
  );
}

export default MagazineSection;