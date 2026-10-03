import { motion } from "framer-motion";

const benefits = [
  {
    title: "Brand recognition",
    text: "Put your name in front of decision makers every month, inside a title they already trust.",
    span: "lg:col-span-2",
    icon: (
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    ),
  },
  {
    title: "Targeted reach",
    text: "Your message goes to buyers of construction equipment and infrastructure, not to a general audience.",
    span: "lg:col-span-2",
    icon: (
      <>
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
      </>
    ),
  },
  {
    title: "Reliability",
    text: "A consistent monthly magazine with expert interviews and coverage that readers come back to.",
    span: "lg:col-span-2",
    icon: (
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    ),
  },
  {
    title: "Visibility",
    text: "Magazine, website and event coverage give your products more places to be seen.",
    span: "lg:col-span-3",
    icon: (
      <>
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
        <circle cx="12" cy="12" r="3" />
      </>
    ),
  },
  {
    title: "Engagement",
    text: "Interviews, features and cover stories let you tell your story in depth, not just in a banner.",
    span: "lg:col-span-3",
    icon: (
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    ),
  },
];

/* =========================================================
   ANIMATION
========================================================= */

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 45,
    scale: 0.96,
  },

  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const headingVariants = {
  hidden: {
    opacity: 0,
    y: 30,
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

/* =========================================================
   ICON
========================================================= */

function Icon({ children }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

/* =========================================================
   COMPONENT
========================================================= */

function AdvertiseBenefits() {
  return (
    <section className="relative overflow-hidden bg-[#0B1120] px-4 py-20 sm:px-6 lg:py-28">

      {/* =====================================================
          BACKGROUND GLOW
      ====================================================== */}

      <motion.div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[-250px]
          h-[550px]
          w-[800px]
          -translate-x-1/2
          rounded-full
          bg-[#C99A3B]/[0.06]
          blur-3xl
        "
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="
          pointer-events-none
          absolute
          -bottom-64
          -left-40
          h-[500px]
          w-[500px]
          rounded-full
          bg-[#C99A3B]/[0.035]
          blur-3xl
        "
        animate={{
          x: [0, 40, 0],
          y: [0, -30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* =====================================================
          SUBTLE GRID
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.025]
          [background-image:linear-gradient(rgba(255,255,255,.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.5)_1px,transparent_1px)]
          [background-size:50px_50px]
        "
      />

      {/* =====================================================
          CONTENT
      ====================================================== */}

      <div className="relative mx-auto max-w-6xl">

        {/* ===================================================
            SECTION HEADING
        ==================================================== */}

        <motion.div
          className="mb-14 text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
        >
          {/* Small label */}
          <motion.div variants={headingVariants}>
            <span
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-[#C99A3B]/20
                bg-[#C99A3B]/[0.06]
                px-4
                py-2
                text-xs
                font-semibold
                uppercase
                tracking-[0.18em]
                text-[#D9AE55]
              "
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#C99A3B]" />

              Why advertise with us
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            variants={headingVariants}
            className="
              mx-auto
              mt-5
              max-w-3xl
              text-3xl
              font-bold
              leading-tight
              tracking-tight
              text-white
              sm:text-3xl
              lg:text-4xl
            "
          >
            More than advertising.
            <span className="text-[#C99A3B]">
              {" "}Real industry visibility.
            </span>
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={headingVariants}
            className="
              mx-auto
              mt-5
              max-w-2xl
              text-sm
              leading-7
              text-slate-400
              sm:text-base
            "
          >
            Build visibility, reach the right audience and create
            meaningful connections across India&apos;s construction
            equipment and infrastructure industry.
          </motion.p>

          {/* Divider */}
          <motion.div
            variants={headingVariants}
            className="
              mx-auto
              mt-7
              h-[3px]
              w-16
              rounded-full
              bg-gradient-to-r
              from-[#E6C473]
              to-[#A87D25]
            "
          />
        </motion.div>

        {/* ===================================================
            BENEFITS GRID
        ==================================================== */}

        <motion.div
          className="grid gap-5 lg:grid-cols-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.12,
          }}
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              variants={cardVariants}
              className={benefit.span}
            >
              <motion.div
                className="
                  group
                  relative
                  h-full
                  overflow-hidden
                  rounded-2xl
                  border
                  border-white/[0.08]
                  bg-[#111827]
                  p-7
                  transition-colors
                  duration-500
                "
                whileHover={{
                  y: -8,
                  borderColor: "rgba(201,154,59,0.45)",
                  background:
                    "linear-gradient(135deg, rgba(201,154,59,0.16), rgba(17,24,39,1) 65%)",
                  boxShadow:
                    "0 20px 50px rgba(0,0,0,0.35)",
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 22,
                }}
              >

                {/* =================================================
                    CARD HOVER GLOW
                ================================================== */}

                <motion.div
                  className="
                    pointer-events-none
                    absolute
                    -right-20
                    -top-20
                    h-40
                    w-40
                    rounded-full
                    bg-[#C99A3B]/20
                    blur-3xl
                  "
                  initial={{
                    opacity: 0,
                    scale: 0.5,
                  }}
                  whileHover={{
                    opacity: 1,
                    scale: 1.2,
                  }}
                  transition={{
                    duration: 0.5,
                  }}
                />

                {/* =================================================
                    TOP GOLD LINE
                ================================================== */}

                <motion.div
                  className="
                    absolute
                    left-0
                    top-0
                    h-[2px]
                    w-full
                    origin-left
                    bg-gradient-to-r
                    from-[#E6C473]
                    via-[#C99A3B]
                    to-transparent
                  "
                  initial={{
                    scaleX: 0,
                  }}
                  whileHover={{
                    scaleX: 1,
                  }}
                  transition={{
                    duration: 0.5,
                    ease: "easeOut",
                  }}
                />

                {/* =================================================
                    ICON
                ================================================== */}

                <motion.div
                  className="
                    relative
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-xl
                    border
                    border-[#C99A3B]/20
                    bg-[#C99A3B]/10
                    text-[#D9AE55]
                  "
                  whileHover={{
                    scale: 1.08,
                    rotate: 5,
                    backgroundColor: "#C99A3B",
                    color: "#0B1120",
                    borderColor: "#C99A3B",
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 15,
                  }}
                >
                  <Icon>{benefit.icon}</Icon>
                </motion.div>

                {/* =================================================
                    CARD NUMBER
                ================================================== */}

                <span
                  className="
                    absolute
                    right-6
                    top-6
                    text-xs
                    font-medium
                    tracking-widest
                    text-white/20
                    transition-colors
                    duration-300
                    group-hover:text-[#C99A3B]/50
                  "
                >
                  0{index + 1}
                </span>

                {/* =================================================
                    TITLE
                ================================================== */}

                <h3
                  className="
                    relative
                    mt-6
                    text-xl
                    font-semibold
                    text-white
                    transition-colors
                    duration-300
                    group-hover:text-[#E6C473]
                  "
                >
                  {benefit.title}
                </h3>

                {/* =================================================
                    DESCRIPTION
                ================================================== */}

                <p
                  className="
                    relative
                    mt-3
                    text-sm
                    leading-7
                    text-slate-400
                    transition-colors
                    duration-300
                    group-hover:text-slate-300
                  "
                >
                  {benefit.text}
                </p>

                {/* =================================================
                    BOTTOM ARROW
                ================================================== */}

                <motion.div
                  className="
                    relative
                    mt-6
                    flex
                    items-center
                    gap-2
                    text-xs
                    font-medium
                    uppercase
                    tracking-widest
                    text-white/30
                  "
                  initial={{
                    opacity: 0.5,
                  }}
                  whileHover={{
                    opacity: 1,
                  }}
                >
                  <span className="h-px w-8 bg-white/10 transition-all duration-300 group-hover:w-12 group-hover:bg-[#C99A3B]" />

                  <span className="transition-colors duration-300 group-hover:text-[#C99A3B]">
                    Explore
                  </span>
                </motion.div>

              </motion.div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

export default AdvertiseBenefits;