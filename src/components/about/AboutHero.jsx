import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const fadeLeft = {
  hidden: {
    opacity: 0,
    x: -45,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const fadeRight = {
  hidden: {
    opacity: 0,
    x: 45,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Decorative glow */}

      <div
        className="
          pointer-events-none
          absolute
          -left-32
          top-10
          h-80
          w-80
          rounded-full
          bg-white
          blur-3xl
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-32
          bottom-0
          h-96
          w-96
          rounded-full
          bg-[#C99A3B]/10
          blur-3xl
        "
      />

      <div
        className="
          relative
          mx-auto
          grid
          max-w-[1280px]
          items-center
          gap-10
          px-5
          py-14
          sm:px-8
          lg:grid-cols-[0.85fr_1.15fr]
          lg:gap-12
          lg:px-10
          lg:py-16
        "
      >
        {/* LEFT CONTENT */}

        <motion.div
          variants={fadeLeft}
          initial="hidden"
          animate="visible"
          className="relative z-10"
        >
          {/* Heading */}
          <h1
            className="
    font-serif
    text-5xl
    font-bold
    leading-[0.95]
    tracking-tight
    text-[#0A1128]
    sm:text-4xl
    lg:text-4xl
  "
          >
            About <span className="text-[#C99A3B]">Us</span>
          </h1>

          {/* Intro */}

          <div
            className="
    mt-6
    max-w-xl
    text-sm
    leading-7
    text-slate-600
    sm:text-base
  "
          >
            <p>
              <strong className="font-bold text-[#C99A3B]">
                CONSTRUCTION MIRROR
              </strong>{" "}
              – An Outlook of the Construction Equipment & Infrastructure
              Industry – is a monthly magazine that delivers expert insights
              into India’s construction and infrastructure sector. Each issue
              features interviews with top executives from successful companies,
              where they share best practices, industry experiences, and views
              on current challenges and trends.
            </p>

            <p className="mt-5">
              We cover a wide range of topics, including engineering and
              technology, project funding, labour challenges, legal liabilities,
              industry regulations, and environmental impact. Our goal is to
              reflect the evolving landscape of the construction ecosystem.
            </p>

            <p className="mt-5">
              Our readers are key decision-makers in the construction equipment
              and infrastructure space. This includes project procurement
              managers, purchase heads, consultants, contractors, senior
              executives, and both public and private project owners and
              regulators.
            </p>
          </div>

          {/* Button */}

          <motion.a
            href="#our-story"
            whileHover={{
              x: 4,
            }}
            className="
              group
              mt-8
              inline-flex
              items-center
              gap-3
              rounded-full
              bg-[#0A1128]
              px-6
              py-3.5
              text-sm
              font-bold
              text-white
              transition
              duration-300
              hover:bg-[#C99A3B]
            "
          >
            Explore Our Story
            <ArrowRight
              size={16}
              className="
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            />
          </motion.a>
        </motion.div>

        {/* RIGHT IMAGE */}

        <motion.div
          variants={fadeRight}
          initial="hidden"
          animate="visible"
          className="
            relative
            min-h-[360px]
            overflow-hidden
            rounded-[2rem]
            bg-[#0A1128]
            shadow-[0_30px_80px_-35px_rgba(10,17,40,0.45)]
            sm:min-h-[450px]
            lg:min-h-[500px]
          "
        >
          <img
            src="/aboutpage1.png"
            alt="Construction Mirror"
            className="
              absolute
              inset-0
              h-full
              w-full
              object-cover
            "
          />

          {/* Image overlay */}

          <div
            className="
              absolute
              inset-0
              bg-gradient-to-t
              from-[#0A1128]/60
              via-transparent
              to-transparent
            "
          />
        </motion.div>
      </div>
    </section>
  );
}

export default AboutHero;
