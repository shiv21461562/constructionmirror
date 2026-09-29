import { motion } from "framer-motion";

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

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

function OurStory() {
  return (
    <section
      id="our-story"
      className="
        relative
        overflow-hidden
        bg-white
        py-16
        sm:py-20
        lg:py-24
      "
    >

      {/* Decorative background */}

      <div
        className="
          pointer-events-none
          absolute
          left-0
          top-20
          h-64
          w-64
          rounded-full
          bg-[#E6C36E]/10
          blur-3xl
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          bottom-10
          right-0
          h-72
          w-72
          rounded-full
          bg-[#0F8B9D]/5
          blur-3xl
        "
      />


      <div
        className="
          relative
          mx-auto
          max-w-[1200px]
          px-5
          sm:px-8
          lg:px-10
        "
      >

        <div
          className="
            grid
            items-center
            gap-12
            lg:grid-cols-2
            lg:gap-16
            xl:gap-20
          "
        >

          {/* =================================================
              LEFT — IMAGE
          ================================================== */}

          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            className="relative"
          >

            {/* Gold vertical decoration */}

            <div
              className="
                absolute
                -left-3
                top-10
                h-[75%]
                w-1
                rounded-full
                bg-[#C99A3B]
                lg:-left-5
              "
            />


            {/* Gold square */}

            <div
              className="
                absolute
                -left-4
                -top-4
                h-24
                w-24
                border
                border-[#C99A3B]
                bg-[#E6C36E]/10
                sm:-left-6
                sm:-top-6
              "
            />


            {/* Image */}

            <div
              className="
                relative
                overflow-hidden
                rounded-[1.75rem]
                border
                border-slate-200
                bg-[#f7f9fa]
                shadow-[0_25px_70px_-35px_rgba(10,17,40,0.35)]
              "
            >

              <motion.img
                src="/ourstory.png"
                alt="Construction Mirror Our Story"
                whileHover={{
                  scale: 1.025,
                }}
                transition={{
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  block
                  aspect-[4/4.2]
                  h-full
                  w-full
                  object-cover
                "
              />


              {/* Overlay */}

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-[#0A1128]/35
                  via-transparent
                  to-transparent
                "
              />


              {/* Bottom information */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: 25,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: 0.3,
                  duration: 0.6,
                }}
                className="
                  absolute
                  bottom-5
                  left-5
                  right-5
                  rounded-2xl
                  border
                  border-white/15
                  bg-[#0A1128]/90
                  px-5
                  py-4
                  shadow-xl
                  backdrop-blur-md
                  sm:bottom-6
                  sm:left-6
                  sm:right-6
                "
              >

                <div
                  className="
                    grid
                    grid-cols-3
                    divide-x
                    divide-white/20
                  "
                >

                  <div className="px-3 first:pl-0">

                    <p
                      className="
                        text-[9px]
                        font-bold
                        uppercase
                        tracking-[0.12em]
                        text-[#E6C36E]
                        sm:text-[10px]
                      "
                    >
                      Monthly
                    </p>

                    <p className="mt-1 text-xs font-semibold text-white sm:text-sm">
                      Publication
                    </p>

                  </div>


                  <div className="px-3">

                    <p
                      className="
                        text-[9px]
                        font-bold
                        uppercase
                        tracking-[0.12em]
                        text-[#E6C36E]
                        sm:text-[10px]
                      "
                    >
                      Expert
                    </p>

                    <p className="mt-1 text-xs font-semibold text-white sm:text-sm">
                      Interviews
                    </p>

                  </div>


                  <div className="px-3">

                    <p
                      className="
                        text-[9px]
                        font-bold
                        uppercase
                        tracking-[0.12em]
                        text-[#E6C36E]
                        sm:text-[10px]
                      "
                    >
                      Industry
                    </p>

                    <p className="mt-1 text-xs font-semibold text-white sm:text-sm">
                      Perspectives
                    </p>

                  </div>

                </div>

              </motion.div>

            </div>

          </motion.div>


          {/* =================================================
              RIGHT — CONTENT
          ================================================== */}

          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
          >

            {/* Label */}

            <div className="flex items-center gap-3">

              <span className="h-px w-10 bg-[#C99A3B]" />

              <span
                className="
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.28em]
                  text-[#805B18]
                "
              >
                Who We Are
              </span>

            </div>


          <h2
  className="
    mt-4
    font-serif
    text-4xl
    font-bold
    leading-[0.95]
    tracking-tight
    text-[#0A1128]
    sm:text-5xl
    lg:text-6xl
  "
>
  Our{" "}
  <span className="text-[#C99A3B]">
    Story
  </span>
</h2>


            {/* Accent */}

            <div className="mt-6 flex items-center gap-2">

              <span className="h-1 w-12 rounded-full bg-[#C99A3B]" />

              <span className="h-1 w-6 rounded-full bg-[#0F8B9D]" />

            </div>


            {/* Content */}

            <div
              className="
                mt-7
                space-y-5
                text-sm
                leading-7
                text-slate-600
                sm:text-[15px]
                sm:leading-7
              "
            >

              <p>
                <strong className="font-bold text-[#0A1128]">
                  CONSTRUCTION MIRROR
                </strong>{" "}
                – An Outlook of the Construction Equipment &
                Infrastructure Industry – is a monthly magazine that
                delivers expert insights into India's construction
                and infrastructure sector.
              </p>

              <p>
                Each issue features interviews with top executives
                from successful companies, where they share best
                practices, industry experiences, and views on current
                challenges and trends.
              </p>

              <p>
                We cover a wide range of topics, including engineering
                and technology, project funding, labour challenges,
                legal liabilities, industry regulations, and
                environmental impact. Our goal is to reflect the
                evolving landscape of the construction ecosystem.
              </p>

              <p>
                Our readers are key decision-makers in the construction
                equipment and infrastructure space. This includes
                project procurement managers, purchase heads,
                consultants, contractors, senior executives, and both
                public and private project owners and regulators.
              </p>

            </div>


            {/* Stats */}

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.2,
              }}
              className="
                mt-9
                grid
                grid-cols-3
                border-t
                border-slate-200
                pt-7
              "
            >

              <motion.div
                variants={fadeUp}
                className="pr-4"
              >

                <p className="font-serif text-xl font-bold text-[#0A1128] sm:text-2xl">
                  Monthly
                </p>

                <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#C99A3B]">
                  Publication
                </p>

              </motion.div>


              <motion.div
                variants={fadeUp}
                className="border-l border-slate-200 px-4"
              >

                <p className="font-serif text-xl font-bold text-[#0A1128] sm:text-2xl">
                  Industry
                </p>

                <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#C99A3B]">
                  Leaders
                </p>

              </motion.div>


              <motion.div
                variants={fadeUp}
                className="border-l border-slate-200 pl-4"
              >

                <p className="font-serif text-xl font-bold text-[#0A1128] sm:text-2xl">
                  Growing
                </p>

                <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#C99A3B]">
                  Ecosystem
                </p>

              </motion.div>

            </motion.div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}

export default OurStory;