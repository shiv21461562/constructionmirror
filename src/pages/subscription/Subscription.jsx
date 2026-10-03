import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* =========================================================
   DATA
========================================================= */

const PLANS = {
  print: {
    type: "Print",
    tab: "Print Magazine",
    heading: "Print Magazine Subscription",
    note: "Every issue delivered directly to your doorstep.",
    what: "printed issues",
    needsAddress: true,
    icon: "▣",
    items: [
      { years: 1, issues: 12, price: 3000 },
      { years: 2, issues: 24, price: 5600 },
      { years: 3, issues: 36, price: 8200 },
    ],
  },

  digital: {
    type: "Digital",
    tab: "Digital Magazine",
    heading: "Digital Magazine Subscription",
    note: "Every issue delivered straight to your inbox.",
    what: "digital issues",
    needsAddress: false,
    icon: "◉",
    items: [
      { years: 1, issues: 12, price: 2500 },
      { years: 2, issues: 24, price: 4500 },
      { years: 3, issues: 36, price: 6000 },
    ],
  },
};

const inr = (n) => `₹${n.toLocaleString("en-IN")}`;

const yearLabel = (y) =>
  `${y} ${y === 1 ? "Year" : "Years"}`;

/* =========================================================
   ANIMATION
========================================================= */

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

const staggerContainer = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 45,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

/* =========================================================
   CHECK ICON
========================================================= */

function Check() {
  return (
    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#C99A3B]/10">
      <svg
        viewBox="0 0 24 24"
        className="h-3.5 w-3.5 text-[#C99A3B]"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M5 12.5l4.5 4.5L19 7.5" />
      </svg>
    </span>
  );
}

/* =========================================================
   FIELD
========================================================= */

function Field({
  label,
  name,
  type = "text",
  value,
  onChange,
  required,
  autoFocus,
}) {
  return (
    <label className="relative block">
      <input
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        autoFocus={autoFocus}
        placeholder=" "
        className="
          peer
          w-full
          rounded-2xl
          border
          border-slate-200
          bg-slate-50
          px-4
          pb-2
          pt-6
          text-sm
          text-slate-900
          outline-none
          transition-all
          duration-300
          focus:border-[#C99A3B]
          focus:bg-white
          focus:ring-4
          focus:ring-[#C99A3B]/10
        "
      />

      <span
        className="
          pointer-events-none
          absolute
          left-4
          top-4
          text-sm
          text-slate-400
          transition-all
          duration-200
          peer-focus:top-2
          peer-focus:text-[11px]
          peer-focus:font-semibold
          peer-focus:text-[#A87D25]
          peer-[:not(:placeholder-shown)]:top-2
          peer-[:not(:placeholder-shown)]:text-[11px]
          peer-[:not(:placeholder-shown)]:font-semibold
        "
      >
        {label}
        {required && " *"}
      </span>
    </label>
  );
}

/* =========================================================
   SUBSCRIBE MODAL
========================================================= */

function SubscribeModal({ selection, onClose }) {
  const { mode, plan } = selection;
  const cfg = PLANS[mode];

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const [status, setStatus] = useState("idle");

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", onKey);

    return () => {
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  const handleChange = (e) => {
    setForm((current) => ({
      ...current,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setStatus("sending");

    // TODO:
    // API / payment integration yahan add karna hai

    setTimeout(() => {
      setStatus("sent");
    }, 1200);
  };

  return (
    <motion.div
      className="
        fixed
        inset-0
        z-50
        flex
        items-center
        justify-center
        bg-slate-950/35
        p-4
        backdrop-blur-md
      "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-label="Subscribe"
        onClick={(e) => e.stopPropagation()}
        initial={{
          opacity: 0,
          y: 30,
          scale: 0.96,
        }}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        exit={{
          opacity: 0,
          y: 20,
          scale: 0.97,
        }}
        transition={{
          duration: 0.35,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          w-full
          max-w-lg
          overflow-hidden
          rounded-[28px]
          border
          border-white
          bg-white
          shadow-[0_30px_100px_rgba(15,23,42,0.20)]
        "
      >
        {status === "sent" ? (
          <div className="flex flex-col items-center px-6 py-14 text-center sm:px-10">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 250,
                damping: 16,
              }}
              className="
                flex
                h-20
                w-20
                items-center
                justify-center
                rounded-full
                bg-emerald-50
                ring-8
                ring-emerald-50/60
              "
            >
              <svg
                viewBox="0 0 24 24"
                className="h-10 w-10 text-emerald-600"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <motion.path
                  d="M5 12.5l4.5 4.5L19 7.5"
                  initial={{
                    pathLength: 0,
                  }}
                  animate={{
                    pathLength: 1,
                  }}
                  transition={{
                    duration: 0.7,
                    delay: 0.2,
                  }}
                />
              </svg>
            </motion.div>

            <h3 className="mt-7 text-2xl font-bold text-slate-900">
              Request received
            </h3>

            <p className="mt-3 max-w-sm text-sm leading-6 text-slate-500">
              Our team will contact you shortly to confirm your{" "}
              {yearLabel(plan.years).toLowerCase()}{" "}
              {cfg.tab.toLowerCase()} plan.
            </p>

            <button
              type="button"
              onClick={onClose}
              className="
                mt-7
                rounded-full
                bg-[#0B1120]
                px-7
                py-3
                text-sm
                font-semibold
                text-white
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:bg-[#C99A3B]
                hover:text-slate-900
              "
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="border-b border-slate-100 px-6 py-5 sm:px-8">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="mb-2 inline-flex rounded-full bg-[#C99A3B]/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[#A87D25]">
                    {cfg.type} Subscription
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900">
                    Complete your subscription
                  </h3>

                  <p className="mt-1 text-sm text-slate-500">
                    {yearLabel(plan.years)} for{" "}
                    <span className="font-bold text-[#C99A3B]">
                      {inr(plan.price)}
                    </span>
                  </p>
                </div>

                <button
                  type="button"
                  onClick={onClose}
                  aria-label="Close"
                  className="
                    rounded-full
                    p-2
                    text-slate-400
                    transition
                    hover:bg-slate-100
                    hover:text-slate-700
                  "
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  >
                    <path d="M6 6l12 12M18 6L6 18" />
                  </svg>
                </button>
              </div>
            </div>

            <div className="space-y-4 px-6 py-6 sm:px-8">
              <Field
                label="Name"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                autoFocus
              />

              <div className="grid gap-4 sm:grid-cols-2">
                <Field
                  label="Email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />

                <Field
                  label="Phone number"
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              {cfg.needsAddress && (
                <label className="relative block">
                  <textarea
                    name="address"
                    value={form.address}
                    onChange={handleChange}
                    required
                    rows={3}
                    placeholder=" "
                    className="
                      peer
                      w-full
                      resize-none
                      rounded-2xl
                      border
                      border-slate-200
                      bg-slate-50
                      px-4
                      pb-3
                      pt-7
                      text-sm
                      text-slate-900
                      outline-none
                      transition-all
                      duration-300
                      focus:border-[#C99A3B]
                      focus:bg-white
                      focus:ring-4
                      focus:ring-[#C99A3B]/10
                    "
                  />

                  <span
                    className="
                      pointer-events-none
                      absolute
                      left-4
                      top-4
                      text-sm
                      text-slate-400
                      transition-all
                      duration-200
                      peer-focus:top-2
                      peer-focus:text-[11px]
                      peer-focus:font-semibold
                      peer-focus:text-[#A87D25]
                      peer-[:not(:placeholder-shown)]:top-2
                      peer-[:not(:placeholder-shown)]:text-[11px]
                      peer-[:not(:placeholder-shown)]:font-semibold
                    "
                  >
                    Delivery address *
                  </span>
                </label>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="
                  inline-flex
                  w-full
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  bg-[#C99A3B]
                  px-8
                  py-3.5
                  text-sm
                  font-bold
                  text-slate-900
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:bg-[#D8AB4D]
                  hover:shadow-lg
                  hover:shadow-[#C99A3B]/20
                  focus:outline-none
                  focus-visible:ring-4
                  focus-visible:ring-[#C99A3B]/30
                  disabled:cursor-not-allowed
                  disabled:opacity-70
                "
              >
                {status === "sending" && (
                  <span
                    className="
                      h-4
                      w-4
                      animate-spin
                      rounded-full
                      border-2
                      border-current
                      border-t-transparent
                    "
                  />
                )}

                {status === "sending"
                  ? "Sending..."
                  : "Subscribe now"}
              </button>
            </div>
          </form>
        )}
      </motion.div>
    </motion.div>
  );
}

/* =========================================================
   PLAN CARD
========================================================= */

function PlanCard({
  plan,
  cfg,
  best,
  saving,
  onSubscribe,
  index,
}) {
  const perIssue = plan.price / plan.issues;

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{
        y: -8,
      }}
      transition={{
        type: "spring",
        stiffness: 280,
        damping: 22,
      }}
      className="h-full"
    >
      <div
        className={`
          relative
          flex
          h-full
          flex-col
          overflow-hidden
          rounded-[28px]
          border
          p-7
          transition-all
          duration-300
          ${
            best
              ? `
                border-[#C99A3B]/30
                bg-[#0B1120]
                text-white
                shadow-[0_25px_70px_rgba(15,23,42,0.14)]
              `
              : `
                border-slate-200
                bg-white
                text-slate-900
                shadow-[0_15px_50px_rgba(15,23,42,0.05)]
                hover:border-[#C99A3B]/40
                hover:shadow-[0_25px_70px_rgba(201,154,59,0.10)]
              `
          }
        `}
      >
        {/* Decorative gold line */}

        <motion.div
          className="
            absolute
            left-0
            top-0
            h-1
            w-full
            origin-left
            bg-[#C99A3B]
          "
          initial={{
            scaleX: 0,
          }}
          whileInView={{
            scaleX: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
            delay: index * 0.08,
          }}
        />

        {best && (
          <span
            className="
              absolute
              right-5
              top-5
              rounded-full
              bg-[#C99A3B]
              px-3
              py-1
              text-[10px]
              font-bold
              uppercase
              tracking-wider
              text-slate-900
            "
          >
            Best Value
          </span>
        )}

        <div className="mb-5 flex items-center gap-3">
          <div
            className={`
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-2xl
              text-lg
              ${
                best
                  ? "bg-[#C99A3B]/15 text-[#E6C473]"
                  : "bg-[#C99A3B]/10 text-[#A87D25]"
              }
            `}
          >
            {cfg.icon}
          </div>

          <div>
            <p
              className={`
                text-[10px]
                font-bold
                uppercase
                tracking-[0.18em]
                ${
                  best
                    ? "text-[#D9AE55]"
                    : "text-[#A87D25]"
                }
              `}
            >
              {cfg.type}
            </p>

            <h3 className="mt-0.5 text-lg font-bold">
              {yearLabel(plan.years)}
            </h3>
          </div>
        </div>

        <p
          className={`
            text-4xl
            font-bold
            tracking-tight
            ${
              best
                ? "text-[#E6C473]"
                : "text-[#C99A3B]"
            }
          `}
        >
          {inr(plan.price)}
        </p>

        <p
          className={`
            mt-2
            text-sm
            ${
              best
                ? "text-slate-400"
                : "text-slate-500"
            }
          `}
        >
          ≈ {inr(Math.round(perIssue))} per issue
        </p>

        <div className="my-6 h-px bg-current opacity-[0.08]" />

        <ul
          className={`
            flex-1
            space-y-4
            text-sm
            ${
              best
                ? "text-slate-300"
                : "text-slate-600"
            }
          `}
        >
          <li className="flex gap-3">
            <Check />

            <span>
              {plan.issues} {cfg.what}
            </span>
          </li>

          <li className="flex gap-3">
            <Check />

            <span>
              {cfg.type === "Print"
                ? "Delivered to your doorstep"
                : "Delivered straight to your inbox"}
            </span>
          </li>

          {saving > 0 && (
            <li className="flex gap-3">
              <Check />

              <span>
                Save {inr(saving)} compared to yearly renewals
              </span>
            </li>
          )}
        </ul>

        <button
          type="button"
          onClick={onSubscribe}
          className={`
            mt-8
            w-full
            rounded-full
            px-6
            py-3.5
            text-sm
            font-bold
            transition-all
            duration-300
            ${
              best
                ? `
                  bg-[#C99A3B]
                  text-slate-900
                  hover:-translate-y-0.5
                  hover:bg-[#D8AB4D]
                  hover:shadow-lg
                  hover:shadow-[#C99A3B]/20
                `
                : `
                  bg-[#0B1120]
                  text-white
                  hover:-translate-y-0.5
                  hover:bg-[#C99A3B]
                  hover:text-slate-900
                `
            }
          `}
        >
          Subscribe now
        </button>
      </div>
    </motion.div>
  );
}

/* =========================================================
   PAGE
========================================================= */

function Subscription() {
  const [selection, setSelection] = useState(null);

  return (
    <main className="min-h-screen overflow-hidden bg-white text-slate-900">
      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative overflow-hidden bg-white px-4 pb-20 pt-24 sm:px-6 lg:pb-24 lg:pt-32">
        {/* Soft background shapes */}

        <motion.div
          className="
            pointer-events-none
            absolute
            -left-40
            -top-40
            h-[420px]
            w-[420px]
            rounded-full
            bg-[#C99A3B]/[0.055]
            blur-3xl
          "
          animate={{
            x: [0, 35, 0],
            y: [0, 25, 0],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="
            pointer-events-none
            absolute
            -right-40
            top-20
            h-[450px]
            w-[450px]
            rounded-full
            bg-slate-100/70
            blur-3xl
          "
          animate={{
            x: [0, -30, 0],
            y: [0, 35, 0],
            scale: [1, 1.06, 1],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Small decorative dots */}

        <motion.span
          className="
            absolute
            left-[8%]
            top-[28%]
            h-2
            w-2
            rounded-full
            bg-[#C99A3B]/40
          "
          animate={{
            y: [0, -12, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.span
          className="
            absolute
            right-[12%]
            top-[25%]
            h-3
            w-3
            rounded-full
            bg-[#C99A3B]/25
          "
          animate={{
            y: [0, 15, 0],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="
            relative
            mx-auto
            max-w-5xl
            text-center
          "
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={fadeUp}>
            <span
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-[#C99A3B]/20
                bg-[#C99A3B]/[0.05]
                px-4
                py-2
                text-[10px]
                font-bold
                uppercase
                tracking-[0.2em]
                text-[#A87D25]
              "
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#C99A3B]" />

              Construction Mirror
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="
              mx-auto
              mt-7
              max-w-4xl
              text-4xl
              font-bold
              leading-[1.05]
              tracking-tight
              text-[#0B1120]
              sm:text-5xl
              lg:text-6xl
            "
          >
            Stay ahead with
            <span className="text-[#C99A3B]">
              {" "}Construction Mirror
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="
              mx-auto
              mt-6
              max-w-2xl
              text-sm
              leading-7
              text-slate-500
              sm:text-base
              lg:text-lg
            "
          >
            Get trusted insights, industry updates and
            the latest developments from India&apos;s
            construction equipment and infrastructure
            industry.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mx-auto mt-8 flex items-center justify-center gap-3"
          >
            <span className="h-px w-12 bg-slate-200" />

            <span className="text-xs font-medium tracking-wide text-slate-400">
              Choose your subscription
            </span>

            <span className="h-px w-12 bg-slate-200" />
          </motion.div>
        </motion.div>
      </section>

      {/* =====================================================
          ALL PLANS
      ====================================================== */}

      <section className="relative px-4 pb-24 sm:px-6 lg:pb-32">
        <div className="mx-auto max-w-7xl">
          {/* PRINT */}

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.15,
            }}
          >
            <motion.div
              variants={fadeUp}
              className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between"
            >
              <div>
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#C99A3B]/10 text-[#A87D25]">
                    ▣
                  </span>

                  <h2 className="text-2xl font-bold tracking-tight text-[#0B1120] sm:text-3xl">
                    Print Magazine
                  </h2>
                </div>

                <p className="mt-2 pl-0 text-sm text-slate-500 sm:pl-[52px]">
                  Every issue delivered directly to your doorstep.
                </p>
              </div>

              <span className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-400">
                12 issues / year
              </span>
            </motion.div>

            <div className="grid gap-5 md:grid-cols-3">
              {PLANS.print.items.map((plan, index) => {
                const base = PLANS.print.items[0].price;
                const perIssue = plan.price / plan.issues;
                const bestPerIssue = Math.min(
                  ...PLANS.print.items.map(
                    (p) => p.price / p.issues
                  )
                );

                return (
                  <PlanCard
                    key={`print-${plan.years}`}
                    plan={plan}
                    cfg={PLANS.print}
                    best={perIssue === bestPerIssue}
                    saving={base * plan.years - plan.price}
                    index={index}
                    onSubscribe={() =>
                      setSelection({
                        mode: "print",
                        plan,
                      })
                    }
                  />
                );
              })}
            </div>
          </motion.div>

          {/* DIVIDER */}

          <div className="my-20 flex items-center gap-5">
            <div className="h-px flex-1 bg-slate-200" />

            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-300">
              OR
            </span>

            <div className="h-px flex-1 bg-slate-200" />
          </div>

          {/* DIGITAL */}

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.15,
            }}
          >
            <motion.div
              variants={fadeUp}
              className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between"
            >
              <div>
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#C99A3B]/10 text-[#A87D25]">
                    ◉
                  </span>

                  <h2 className="text-2xl font-bold tracking-tight text-[#0B1120] sm:text-3xl">
                    Digital Magazine
                  </h2>
                </div>

                <p className="mt-2 text-sm text-slate-500 sm:pl-[52px]">
                  Every issue delivered straight to your inbox.
                </p>
              </div>

              <span className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-400">
                Read anywhere
              </span>
            </motion.div>

            <div className="grid gap-5 md:grid-cols-3">
              {PLANS.digital.items.map((plan, index) => {
                const base = PLANS.digital.items[0].price;
                const perIssue = plan.price / plan.issues;
                const bestPerIssue = Math.min(
                  ...PLANS.digital.items.map(
                    (p) => p.price / p.issues
                  )
                );

                return (
                  <PlanCard
                    key={`digital-${plan.years}`}
                    plan={plan}
                    cfg={PLANS.digital}
                    best={perIssue === bestPerIssue}
                    saving={base * plan.years - plan.price}
                    index={index}
                    onSubscribe={() =>
                      setSelection({
                        mode: "digital",
                        plan,
                      })
                    }
                  />
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          BOTTOM CTA
      ====================================================== */}

      <section className="px-4 pb-24 sm:px-6">
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.7,
          }}
          className="
            relative
            mx-auto
            max-w-7xl
            overflow-hidden
            rounded-[32px]
            bg-[#0B1120]
            px-6
            py-12
            text-center
            sm:px-10
            lg:py-16
          "
        >
          <motion.div
            className="
              pointer-events-none
              absolute
              -right-20
              -top-32
              h-72
              w-72
              rounded-full
              bg-[#C99A3B]/10
              blur-3xl
            "
            animate={{
              scale: [1, 1.15, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <div className="relative">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#D9AE55]">
              Construction Mirror
            </span>

            <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Keep your finger on the pulse of the industry.
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-slate-400">
              Choose a plan that fits the way you want to
              stay connected with the construction industry.
            </p>
          </div>
        </motion.div>
      </section>

      {/* =====================================================
          MODAL
      ====================================================== */}

      <AnimatePresence>
        {selection && (
          <SubscribeModal
            selection={selection}
            onClose={() => setSelection(null)}
          />
        )}
      </AnimatePresence>
    </main>
  );
}

export default Subscription;