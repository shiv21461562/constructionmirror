import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 35,
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

function AboutCTA() {
  return (
    <section className="px-5 pb-16 sm:px-8 lg:pb-24">

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.2,
        }}
        className="
          relative
          mx-auto
          max-w-[1180px]
          overflow-hidden
          rounded-[2rem]
          bg-[#0A1128]
          px-7
          py-12
          sm:px-10
          lg:px-14
          lg:py-14
        "
      >

        {/* Glow */}

        <div
          className="
            pointer-events-none
            absolute
            -right-20
            -top-32
            h-80
            w-80
            rounded-full
            bg-[#0F8B9D]/20
            blur-3xl
          "
        />


        <div
          className="
            relative
            z-10
            flex
            flex-col
            justify-between
            gap-8
            md:flex-row
            md:items-center
          "
        >

          {/* Content */}

          <div>

            <p
              className="
                text-[10px]
                font-bold
                uppercase
                tracking-[0.28em]
                text-[#E6C36E]
              "
            >
              Stay Informed. Stay Ahead.
            </p>


            <h2
              className="
                mt-3
                max-w-2xl
                font-serif
                text-3xl
                font-bold
                leading-tight
                text-white
                sm:text-4xl
              "
            >
              Be a Part of India's Construction
              & Infrastructure Dialogue
            </h2>


            <p
              className="
                mt-4
                max-w-xl
                text-sm
                leading-6
                text-white/65
              "
            >
              Get the latest industry news, expert insights,
              project updates and exclusive interviews from
              Construction Mirror.
            </p>

          </div>


          {/* Button */}

          <a
            href="/contact"
            className="
              group
              inline-flex
              shrink-0
              items-center
              justify-center
              gap-3
              rounded-xl
              bg-[#E6C36E]
              px-6
              py-3.5
              text-sm
              font-bold
              text-[#0A1128]
              transition
              hover:bg-white
            "
          >
            Connect With Us

            <ArrowRight
              size={16}
              className="
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            />
          </a>

        </div>

      </motion.div>

    </section>
  );
}

export default AboutCTA;