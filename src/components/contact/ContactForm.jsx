import { motion } from "framer-motion";
import { Send, CheckCircle2 } from "lucide-react";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  show: {
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
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

function ContactForm({
  formData,
  submitting,
  submitted,
  handleChange,
  handleSubmit,
}) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{
        once: true,
        amount: 0.2,
      }}
      className="
        rounded-3xl
        border
        border-slate-200
        bg-white
        p-6
        shadow-[0_25px_70px_-40px_rgba(10,17,40,0.35)]
        sm:p-7
        lg:p-8
      "
    >

      {/* Success Message */}

      {submitted && (
        <motion.div
          initial={{
            opacity: 0,
            y: -10,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          className="
            mb-5
            flex
            items-start
            gap-3
            rounded-xl
            border
            border-emerald-200
            bg-emerald-50
            p-3.5
            text-emerald-700
          "
        >
          <CheckCircle2
            size={18}
            className="mt-0.5 shrink-0"
          />

          <div>
            <p className="text-sm font-semibold">
              Message sent successfully!
            </p>

            <p className="mt-1 text-xs text-emerald-600">
              Thank you for contacting Construction Mirror.
            </p>
          </div>
        </motion.div>
      )}


      {/* Heading */}

      <div className="mb-5">

        <p
          className="
            text-[10px]
            font-bold
            uppercase
            tracking-[0.28em]
            text-[#C99A3B]
          "
        >
          Send Us A Message
        </p>

        <h2
          className="
            mt-1.5
            font-serif
            text-2xl
            font-bold
            text-[#0A1128]
            sm:text-3xl
          "
        >
          How can we help?
        </h2>

        <p
          className="
            mt-2
            max-w-lg
            text-xs
            leading-5
            text-slate-500
          "
        >
          Have a business enquiry, advertising requirement,
          editorial request or partnership opportunity?
          Send us a message.
        </p>

      </div>


      {/* Form */}

      <motion.form
        onSubmit={handleSubmit}
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        className="space-y-4"
      >

        {/* Name */}

        <motion.div variants={fadeUp}>

          <label
            htmlFor="firstName"
            className="
              mb-1.5
              block
              text-[10px]
              font-bold
              uppercase
              tracking-[0.12em]
              text-[#0A1128]
            "
          >
            Name <span className="text-red-500">*</span>
          </label>

          <div className="grid gap-3 sm:grid-cols-2">

            <div>

              <input
                id="firstName"
                name="firstName"
                type="text"
                required
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First Name"
                className="
                  h-11
                  w-full
                  rounded-xl
                  border
                  border-slate-200
                  bg-slate-50
                  px-4
                  text-sm
                  text-[#0A1128]
                  outline-none
                  transition
                  placeholder:text-slate-400
                  focus:border-[#0F8B9D]
                  focus:bg-white
                  focus:ring-4
                  focus:ring-[#0F8B9D]/10
                "
              />

              <span className="mt-1 block text-[9px] text-slate-400">
                First
              </span>

            </div>


            <div>

              <input
                id="lastName"
                name="lastName"
                type="text"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last Name"
                className="
                  h-11
                  w-full
                  rounded-xl
                  border
                  border-slate-200
                  bg-slate-50
                  px-4
                  text-sm
                  text-[#0A1128]
                  outline-none
                  transition
                  placeholder:text-slate-400
                  focus:border-[#0F8B9D]
                  focus:bg-white
                  focus:ring-4
                  focus:ring-[#0F8B9D]/10
                "
              />

              <span className="mt-1 block text-[9px] text-slate-400">
                Last
              </span>

            </div>

          </div>

        </motion.div>


        {/* Email */}

        <motion.div variants={fadeUp}>

          <label
            htmlFor="email"
            className="
              mb-1.5
              block
              text-[10px]
              font-bold
              uppercase
              tracking-[0.12em]
              text-[#0A1128]
            "
          >
            Email <span className="text-red-500">*</span>
          </label>

          <input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="your@email.com"
            className="
              h-11
              w-full
              rounded-xl
              border
              border-slate-200
              bg-slate-50
              px-4
              text-sm
              text-[#0A1128]
              outline-none
              transition
              placeholder:text-slate-400
              focus:border-[#0F8B9D]
              focus:bg-white
              focus:ring-4
              focus:ring-[#0F8B9D]/10
            "
          />

        </motion.div>


        {/* Message */}

        <motion.div variants={fadeUp}>

          <label
            htmlFor="message"
            className="
              mb-1.5
              block
              text-[10px]
              font-bold
              uppercase
              tracking-[0.12em]
              text-[#0A1128]
            "
          >
            Comment or Message
          </label>

          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            placeholder="Write your message here..."
            className="
              w-full
              resize-none
              rounded-xl
              border
              border-slate-200
              bg-slate-50
              px-4
              py-3
              text-sm
              leading-6
              text-[#0A1128]
              outline-none
              transition
              placeholder:text-slate-400
              focus:border-[#0F8B9D]
              focus:bg-white
              focus:ring-4
              focus:ring-[#0F8B9D]/10
            "
          />

        </motion.div>

{/* Submit */}

<motion.div variants={fadeUp}>
  <button
    type="submit"
    disabled={submitting}
    className="
      group
      inline-flex
      h-11
      items-center
      justify-center
      gap-3
      rounded-xl
      border
      border-[#C99A3B]
      bg-transparent
      px-6
      text-sm
      font-bold
      text-[#C99A3B]
      transition-all
      duration-300
      hover:bg-[#C99A3B]
      hover:text-white
      disabled:cursor-not-allowed
      disabled:opacity-60
    "
  >
    {submitting ? "Sending..." : "Send Message"}

    {!submitting && (
      <Send
        size={15}
        className="
          transition-transform
          duration-300
          group-hover:translate-x-1
        "
      />
    )}
  </button>
</motion.div>

      </motion.form>

    </motion.div>
  );
}

export default ContactForm;