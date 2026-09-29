import { motion } from "framer-motion";

import {
  Coins,
  Factory,
  Gavel,
  Leaf,
  Settings2,
  Users,
} from "lucide-react";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const focusAreas = [
  {
    icon: Settings2,
    title: "Engineering & Technology",
  },
  {
    icon: Coins,
    title: "Project Funding",
  },
  {
    icon: Users,
    title: "Labour Challenges",
  },
  {
    icon: Gavel,
    title: "Legal Liabilities",
  },
  {
    icon: Factory,
    title: "Industry Regulations",
  },
  {
    icon: Leaf,
    title: "Environmental Impact",
  },
];

function FocusAreas() {
  return (
    <section
      className="
        bg-white
        px-5
        py-16
        sm:px-8
        lg:py-24
      "
    >
      <div className="mx-auto max-w-[1180px]">

        {/* ================= HEADING ================= */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
        >
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-[#C99A3B]" />

            <span
              className="
                text-[10px]
                font-bold
                uppercase
                tracking-[0.28em]
                text-[#805B18]
                sm:text-[11px]
              "
            >
              What We Cover
            </span>
          </div>

          <h2
            className="
              mt-4
              font-serif
              text-4xl
              font-bold
              leading-tight
              tracking-tight
              text-[#0A1128]
              sm:text-5xl
            "
          >
            Key Focus Areas
          </h2>

          <p
            className="
              mt-4
              max-w-2xl
              text-sm
              leading-7
              text-slate-500
              sm:text-base
            "
          >
            Our editorial coverage reflects the changing needs,
            opportunities and challenges across India's construction
            and infrastructure ecosystem.
          </p>
        </motion.div>


        {/* ================= CARDS ================= */}

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.12,
          }}
          className="
            mt-12
            grid
            grid-cols-2
            gap-4
            sm:grid-cols-3
            lg:grid-cols-6
            lg:gap-5
          "
        >
          {focusAreas.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                variants={fadeUp}
                whileHover={{
                  y: -7,
                }}
                transition={{
                  duration: 0.3,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  group
                  relative
                  flex
                  min-h-[175px]
                  flex-col
                  items-center
                  justify-center
                  overflow-hidden
                  rounded-2xl
                  border
                  border-slate-200
                  bg-white
                  px-5
                  py-7
                  text-center
                  shadow-[0_15px_40px_-30px_rgba(10,17,40,0.35)]
                  transition-all
                  duration-500
                  hover:border-[#0A1128]
                  hover:bg-[#0A1128]
                  hover:shadow-[0_25px_55px_-30px_rgba(10,17,40,0.55)]
                "
              >

                {/* Small number */}

                <span
                  className="
                    absolute
                    right-4
                    top-3
                    text-[9px]
                    font-bold
                    tracking-[0.15em]
                    text-slate-300
                    transition-colors
                    duration-500
                    group-hover:text-white/25
                  "
                >
                  0{index + 1}
                </span>


                {/* Icon */}

                <motion.div
                  whileHover={{
                    scale: 1.08,
                    rotate: 4,
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                  className="
                    flex
                    h-14
                    w-14
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-[#f8f3e7]
                    text-[#B27A14]
                    transition-all
                    duration-500
                    group-hover:bg-[#C99A3B]
                    group-hover:text-[#0A1128]
                    group-hover:shadow-[0_0_0_6px_rgba(201,154,59,0.12)]
                  "
                >
                  <Icon
                    size={22}
                    strokeWidth={1.8}
                  />
                </motion.div>


                {/* Title */}

                <h3
                  className="
                    mt-5
                    max-w-[145px]
                    text-[12px]
                    font-bold
                    leading-[1.5]
                    text-[#0A1128]
                    transition-colors
                    duration-500
                    group-hover:text-white
                    sm:text-[13px]
                  "
                >
                  {item.title}
                </h3>


                {/* Bottom golden line */}

                <span
                  className="
                    absolute
                    bottom-0
                    left-1/2
                    h-[3px]
                    w-0
                    -translate-x-1/2
                    rounded-full
                    bg-[#C99A3B]
                    transition-all
                    duration-500
                    group-hover:w-12
                  "
                />

              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}

export default FocusAreas;