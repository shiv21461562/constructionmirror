import { useState } from "react";
import { motion } from "framer-motion";

const contact = {
  name: "Ms. Neha Chauhan",
  role: "Marketing Head",
  phones: ["+91 9873168426", "+91 7428693331"],
  emails: [
    "neha@constructionmirror.com",
    "neha.renewablemirror@gmail.com",
  ],
};

/* =========================================================
   ANIMATIONS
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

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const slideLeft = {
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

const slideRight = {
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
}) {
  return (
    <label className="group relative block">
      <input
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        placeholder=" "
        className="
          peer
          w-full
          rounded-xl
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
          placeholder:text-transparent
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
          peer-focus:font-medium
          peer-focus:text-[#A87D25]
          peer-[:not(:placeholder-shown)]:top-2
          peer-[:not(:placeholder-shown)]:text-[11px]
          peer-[:not(:placeholder-shown)]:font-medium
        "
      >
        {label}
        {required && " *"}
      </span>
    </label>
  );
}

/* =========================================================
   SUCCESS MESSAGE
========================================================= */

function SuccessMessage({ onReset }) {
  return (
    <motion.div
      className="
        flex
        min-h-[430px]
        flex-col
        items-center
        justify-center
        text-center
      "
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Success icon */}
      <motion.div
        variants={fadeUp}
        className="
          flex
          h-20
          w-20
          items-center
          justify-center
          rounded-full
          bg-emerald-50
          ring-8
          ring-emerald-50/50
        "
      >
        <motion.svg
          viewBox="0 0 24 24"
          className="h-10 w-10 text-emerald-600"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{
            pathLength: 0,
          }}
          animate={{
            pathLength: 1,
          }}
          transition={{
            duration: 0.7,
            delay: 0.25,
          }}
        >
          <motion.path d="M5 12.5l4.5 4.5L19 7.5" />
        </motion.svg>
      </motion.div>

      <motion.h3
        variants={fadeUp}
        className="mt-6 text-2xl font-semibold text-slate-900"
      >
        Message sent
      </motion.h3>

      <motion.p
        variants={fadeUp}
        className="mt-2 max-w-sm text-sm leading-6 text-slate-500"
      >
        Thanks for reaching out. Our representative will contact you
        shortly.
      </motion.p>

      <motion.button
        variants={fadeUp}
        type="button"
        onClick={onReset}
        className="
          mt-6
          rounded-full
          border
          border-slate-200
          px-5
          py-2.5
          text-sm
          font-medium
          text-slate-700
          transition-all
          hover:-translate-y-0.5
          hover:border-[#C99A3B]
          hover:text-[#A87D25]
          hover:shadow-sm
        "
        whileTap={{ scale: 0.96 }}
      >
        Send another message
      </motion.button>
    </motion.div>
  );
}

/* =========================================================
   COMPONENT
========================================================= */

function AdvertiseContact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    website: "",
    message: "",
  });

  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    setForm((current) => ({
      ...current,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setStatus("sending");

    // TODO: API call yahan lagana hai

    setTimeout(() => {
      setStatus("sent");

      setForm({
        name: "",
        email: "",
        phone: "",
        website: "",
        message: "",
      });
    }, 1200);
  };

  return (
    <section
      id="contact"
      className="
        relative
        overflow-hidden
        bg-white
        px-4
        pb-20
        pt-20
        sm:px-6
        lg:pb-28
        lg:pt-24
      "
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <motion.div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[-250px]
          h-[500px]
          w-[800px]
          -translate-x-1/2
          rounded-full
          bg-[#C99A3B]/[0.035]
          blur-3xl
        "
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="relative mx-auto max-w-6xl">

        {/* ===================================================
            HEADING
        ==================================================== */}

        <motion.div
          className="mb-12 max-w-3xl"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
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
                text-xs
                font-semibold
                uppercase
                tracking-[0.18em]
                text-[#A87D25]
              "
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#C99A3B]" />
              Let&apos;s talk
            </span>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="
              mt-5
              text-3xl
              font-bold
              leading-tight
              tracking-tight
              text-slate-900
              sm:text-4xl
            "
          >
            Fill the form and our team
            <span className="text-[#C99A3B]">
              {" "}will get back to you.
            </span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="
              mt-4
              max-w-2xl
              text-sm
              leading-7
              text-slate-500
              sm:text-base
            "
          >
            For advertising rates, brand promotion options and the
            detailed media kit, write to us or contact the marketing
            head directly.
          </motion.p>
        </motion.div>

        {/* ===================================================
            CONTACT + FORM
        ==================================================== */}

        <div className="grid gap-6 lg:grid-cols-[360px_1fr]">

          {/* =================================================
              CONTACT CARD
          ================================================== */}

          <motion.div
            variants={slideLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.15,
            }}
          >
            <motion.div
              className="
                relative
                h-full
                min-h-[500px]
                overflow-hidden
                rounded-3xl
                bg-[#0B1120]
                p-8
                text-white
                shadow-[0_20px_60px_rgba(15,23,42,0.14)]
              "
              whileHover={{
                y: -4,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 25,
              }}
            >

              {/* Gold glow */}
              <motion.div
                className="
                  pointer-events-none
                  absolute
                  -right-24
                  -top-24
                  h-64
                  w-64
                  rounded-full
                  bg-[#C99A3B]/20
                  blur-3xl
                "
                animate={{
                  scale: [1, 1.15, 1],
                  opacity: [0.4, 0.7, 0.4],
                }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Small decorative circle */}
              <motion.div
                className="
                  absolute
                  bottom-[-80px]
                  right-[-60px]
                  h-48
                  w-48
                  rounded-full
                  border
                  border-[#C99A3B]/10
                "
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 10, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              <div className="relative z-10">

                <p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-400">
                  Contact person
                </p>

                <h3 className="mt-3 text-2xl font-semibold">
                  {contact.name}
                </h3>

                <p className="mt-1 text-sm font-medium text-[#D9AE55]">
                  {contact.role}
                </p>

                {/* Divider */}
                <div className="my-8 h-px bg-white/10" />

                {/* Phone */}
                <div>
                  <p className="text-xs uppercase tracking-wider text-slate-500">
                    Phone
                  </p>

                  <div className="mt-3 space-y-2">
                    {contact.phones.map((phone) => (
                      <motion.a
                        key={phone}
                        href={`tel:${phone.replace(/\s/g, "")}`}
                        className="
                          block
                          w-fit
                          text-base
                          text-slate-200
                          transition-colors
                          hover:text-[#E6C473]
                        "
                        whileHover={{ x: 5 }}
                      >
                        {phone}
                      </motion.a>
                    ))}
                  </div>
                </div>

                {/* Email */}
                <div className="mt-8">
                  <p className="text-xs uppercase tracking-wider text-slate-500">
                    Email
                  </p>

                  <div className="mt-3 space-y-2">
                    {contact.emails.map((email) => (
                      <motion.a
                        key={email}
                        href={`mailto:${email}`}
                        className="
                          block
                          w-fit
                          break-all
                          text-sm
                          text-slate-200
                          transition-colors
                          hover:text-[#E6C473]
                        "
                        whileHover={{ x: 5 }}
                      >
                        {email}
                      </motion.a>
                    ))}
                  </div>
                </div>

                {/* Bottom text */}
                <div className="mt-12 flex items-center gap-3 text-xs text-slate-500">
                  <span className="h-px w-8 bg-[#C99A3B]/50" />
                  <span>We&apos;re here to help</span>
                </div>

              </div>
            </motion.div>
          </motion.div>

          {/* =================================================
              FORM CARD
          ================================================== */}

          <motion.div
            variants={slideRight}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.15,
            }}
          >
            <motion.div
              className="
                relative
                overflow-hidden
                rounded-3xl
                border
                border-slate-200
                bg-white
                p-6
                shadow-[0_20px_60px_rgba(15,23,42,0.07)]
                sm:p-8
              "
              whileHover={{
                borderColor: "rgba(201,154,59,0.25)",
                boxShadow:
                  "0 25px 70px rgba(15,23,42,0.09)",
              }}
              transition={{
                duration: 0.3,
              }}
            >

              {status === "sent" ? (
                <SuccessMessage
                  onReset={() => setStatus("idle")}
                />
              ) : (
                <motion.form
                  onSubmit={handleSubmit}
                  className="space-y-5"
                  initial="hidden"
                  animate="visible"
                  variants={containerVariants}
                >

                  <motion.div
                    variants={fadeUp}
                    className="mb-2"
                  >
                    <h3 className="text-lg font-semibold text-slate-900">
                      Tell us about your requirement
                    </h3>

                    <p className="mt-1 text-sm text-slate-400">
                      Fill in your details and our team will connect with you.
                    </p>
                  </motion.div>

                  {/* Fields */}
                  <div className="grid gap-4 sm:grid-cols-2">

                    <motion.div variants={fadeUp}>
                      <Field
                        label="Name"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                      />
                    </motion.div>

                    <motion.div variants={fadeUp}>
                      <Field
                        label="Email"
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                      />
                    </motion.div>

                    <motion.div variants={fadeUp}>
                      <Field
                        label="Phone number"
                        name="phone"
                        type="tel"
                        value={form.phone}
                        onChange={handleChange}
                      />
                    </motion.div>

                    <motion.div variants={fadeUp}>
                      <Field
                        label="Website"
                        name="website"
                        value={form.website}
                        onChange={handleChange}
                      />
                    </motion.div>

                  </div>

                  {/* Message */}
                  <motion.label
                    variants={fadeUp}
                    className="relative block"
                  >
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      placeholder=" "
                      className="
                        peer
                        w-full
                        resize-none
                        rounded-xl
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
                        peer-focus:font-medium
                        peer-focus:text-[#A87D25]
                        peer-[:not(:placeholder-shown)]:top-2
                        peer-[:not(:placeholder-shown)]:text-[11px]
                        peer-[:not(:placeholder-shown)]:font-medium
                      "
                    >
                      Message *
                    </span>
                  </motion.label>

                  {/* Submit */}
                  <motion.button
                    variants={fadeUp}
                    type="submit"
                    disabled={status === "sending"}
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
                      bg-[#0B1120]
                      px-8
                      text-sm
                      font-semibold
                      text-white
                      shadow-lg
                      shadow-slate-900/10
                      transition-all
                      duration-300
                      hover:bg-[#C99A3B]
                      hover:text-slate-900
                      focus:outline-none
                      focus-visible:ring-4
                      focus-visible:ring-[#C99A3B]/20
                      disabled:cursor-not-allowed
                      disabled:opacity-70
                    "
                    whileHover={{
                      y: -3,
                      scale: 1.02,
                    }}
                    whileTap={{
                      scale: 0.97,
                    }}
                  >

                    {/* Shine */}
                    <motion.span
                      className="
                        pointer-events-none
                        absolute
                        inset-y-0
                        left-[-70%]
                        w-[40%]
                        skew-x-[-20deg]
                        bg-gradient-to-r
                        from-transparent
                        via-white/30
                        to-transparent
                      "
                      animate={{
                        left: ["-70%", "150%"],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        repeatDelay: 2,
                        ease: "easeInOut",
                      }}
                    />

                    {status === "sending" && (
                      <span className="relative z-10 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                    )}

                    <span className="relative z-10">
                      {status === "sending"
                        ? "Sending..."
                        : "Leave a message"}
                    </span>

                    {status !== "sending" && (
                      <motion.span
                        className="relative z-10"
                        animate={{
                          x: [0, 3, 0],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                        }}
                      >
                        →
                      </motion.span>
                    )}
                  </motion.button>

                </motion.form>
              )}

            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default AdvertiseContact;