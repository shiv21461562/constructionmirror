import { motion } from "framer-motion";

/* =========================================================
   ANIMATION VARIANTS
========================================================= */

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

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

const fadeUpSlow = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const scaleIn = {
  hidden: {
    opacity: 0,
    scale: 0.75,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

/* =========================================================
   COMPONENT
========================================================= */

function AdvertiseHero() {
  return (
    <section className="relative isolate overflow-hidden bg-white px-4 py-24 sm:px-6 lg:py-32">

 

 



 


      {/* =====================================================
          DECORATIVE FLOATING DOT - LEFT
      ====================================================== */}

      <motion.div
        className="
          pointer-events-none
          absolute
          left-[8%]
          top-[28%]
          hidden
          h-3
          w-3
          rounded-full
          bg-[#C99A3B]/50
          shadow-[0_0_20px_rgba(201,154,59,0.35)]
          lg:block
        "
        animate={{
          y: [0, -20, 0],
          opacity: [0.3, 1, 0.3],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* =====================================================
          DECORATIVE FLOATING DOT - RIGHT
      ====================================================== */}

      <motion.div
        className="
          pointer-events-none
          absolute
          right-[10%]
          top-[32%]
          hidden
          h-2
          w-2
          rounded-full
          bg-[#C99A3B]/40
          lg:block
        "
        animate={{
          y: [0, 25, 0],
          opacity: [0.2, 0.8, 0.2],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}

      <motion.div
        className="relative mx-auto max-w-5xl text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >

        {/* =====================================================
            BADGE
        ====================================================== */}

        <motion.div
          variants={fadeUp}
          className="mb-7"
        >
          <motion.span
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-[#C99A3B]/20
              bg-[#C99A3B]/[0.045]
              px-4
              py-2
              text-xs
              font-semibold
              uppercase
              tracking-[0.18em]
              text-[#A87D25]
            "
            whileHover={{
              scale: 1.04,
              borderColor: "rgba(201,154,59,0.45)",
              backgroundColor: "rgba(201,154,59,0.08)",
            }}
            transition={{
              duration: 0.25,
            }}
          >
            {/* Animated Dot */}
            <motion.span
              className="h-1.5 w-1.5 rounded-full bg-[#C99A3B]"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.6, 1, 0.6],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            Advertise with Construction Mirror
          </motion.span>
        </motion.div>

        {/* =====================================================
            HEADING
        ====================================================== */}

        <motion.h1
          variants={fadeUpSlow}
          className="
            mx-auto
            max-w-4xl
            text-4xl
            font-bold
            leading-[1.08]
            tracking-[-0.035em]
            text-slate-900
            sm:text-4xl
            lg:text-5xl
          "
        >
          Put your brand in front{" "}

          <motion.span
            className="
              relative
              inline-block
              text-[#C99A3B]
            "
            initial={{
              opacity: 0,
              x: 20,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              delay: 0.75,
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            of industry decision-makers.

            {/* Animated Underline */}
            <motion.span
              className="
                absolute
                -bottom-2
                left-0
                h-[3px]
                rounded-full
                bg-gradient-to-r
                from-[#E6C473]
                via-[#C99A3B]
                to-transparent
              "
              initial={{
                width: 0,
                opacity: 0,
              }}
              animate={{
                width: "75%",
                opacity: 1,
              }}
              transition={{
                delay: 1.15,
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
            />
          </motion.span>
        </motion.h1>

        {/* =====================================================
            GOLD DIVIDER
        ====================================================== */}

        <motion.div
          variants={scaleIn}
          className="
            mx-auto
            mt-8
            h-1
            w-20
            origin-center
            rounded-full
            bg-gradient-to-r
            from-[#E6C473]
            via-[#C99A3B]
            to-[#A87D25]
          "
        />

        {/* =====================================================
            DESCRIPTION
        ====================================================== */}

        <motion.p
          variants={fadeUp}
          className="
            mx-auto
            mt-7
            max-w-2xl
            text-base
            leading-7
            text-slate-600
            sm:text-lg
            sm:leading-8
          "
        >
          Reach the people who buy, build and run India&apos;s
          construction equipment and infrastructure industry.
          Connect your brand with a highly relevant professional audience.
        </motion.p>

        {/* =====================================================
            CTA BUTTONS
        ====================================================== */}

        <motion.div
          variants={fadeUp}
          className="
            mt-10
            flex
            flex-col
            items-center
            justify-center
            gap-4
            sm:flex-row
          "
        >

          {/* ===================================================
              PRIMARY BUTTON
          ==================================================== */}

          <motion.a
            href="#contact"
            className="
              group
              relative
              inline-flex
              h-12
              items-center
              justify-center
              gap-2
              overflow-hidden
              rounded-full
              bg-gradient-to-r
              from-[#E6C473]
              to-[#C99A3B]
              px-7
              text-sm
              font-semibold
              text-slate-900
              shadow-[0_10px_30px_rgba(201,154,59,0.22)]
            "
            whileHover={{
              y: -4,
              scale: 1.03,
              boxShadow:
                "0 18px 40px rgba(201,154,59,0.30)",
            }}
            whileTap={{
              scale: 0.97,
            }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 20,
            }}
          >

            {/* Button Shine */}
            <motion.span
              className="
                pointer-events-none
                absolute
                inset-y-0
                left-[-80%]
                w-[45%]
                skew-x-[-20deg]
                bg-gradient-to-r
                from-transparent
                via-white/60
                to-transparent
              "
              animate={{
                left: ["-80%", "150%"],
              }}
              transition={{
                duration: 2.8,
                repeat: Infinity,
                repeatDelay: 1.5,
                ease: "easeInOut",
              }}
            />

            <span className="relative z-10">
              Talk to our team
            </span>

            {/* Animated Arrow */}
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="relative z-10 h-4 w-4"
              animate={{
                x: [0, 4, 0],
              }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 12h14M13 6l6 6-6 6"
              />
            </motion.svg>
          </motion.a>

          {/* ===================================================
              SECONDARY BUTTON
          ==================================================== */}

          <motion.a
            href="#advertise"
            className="
              inline-flex
              h-12
              items-center
              justify-center
              rounded-full
              border
              border-slate-200
              bg-white
              px-7
              text-sm
              font-medium
              text-slate-700
              shadow-sm
            "
            whileHover={{
              y: -4,
              scale: 1.02,
              borderColor: "rgba(201,154,59,0.45)",
              color: "#A87D25",
              boxShadow:
                "0 12px 30px rgba(15,23,42,0.08)",
            }}
            whileTap={{
              scale: 0.97,
            }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 22,
            }}
          >
            Explore advertising options
          </motion.a>

        </motion.div>

        {/* =====================================================
            TRUST LINE
        ====================================================== */}

        <motion.div
          variants={fadeUp}
          className="mt-12"
        >
          <div
            className="
              mx-auto
              flex
              max-w-xl
              items-center
              justify-center
              gap-4
              text-xs
              text-slate-400
            "
          >

            <motion.span
              className="h-px flex-1 bg-slate-200"
              initial={{
                scaleX: 0,
              }}
              animate={{
                scaleX: 1,
              }}
              transition={{
                delay: 1.3,
                duration: 0.8,
              }}
            />

            <span className="whitespace-nowrap">
              Connect • Engage • Grow
            </span>

            <motion.span
              className="h-px flex-1 bg-slate-200"
              initial={{
                scaleX: 0,
              }}
              animate={{
                scaleX: 1,
              }}
              transition={{
                delay: 1.3,
                duration: 0.8,
              }}
            />

          </div>
        </motion.div>

      </motion.div>

     

  

    </section>
  );
}

export default AdvertiseHero;