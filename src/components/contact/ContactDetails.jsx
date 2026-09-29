import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock3,
} from "lucide-react";

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

function ContactDetails() {
  return (
    <section
      className="
        border-y
        border-slate-100
        bg-[#f8fafb]
      "
    >
      <div
        className="
          mx-auto
          max-w-[1180px]
          px-5
          py-16
          sm:px-8
          lg:py-20
        "
      >

        {/* Intro */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          className="max-w-4xl"
        >

          <div className="mb-5 flex items-center gap-3">

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
              About Construction Mirror
            </span>

          </div>


          <h2
            className="
              font-serif
              text-3xl
              font-bold
              leading-tight
              text-[#0A1128]
              sm:text-4xl
            "
          >
            Connecting the Construction

            <span className="block text-[#C99A3B]">
  & Infrastructure Industry
</span>
          </h2>


          <p
            className="
              mt-6
              text-sm
              leading-7
              text-slate-600
              sm:text-base
            "
          >
            Construction Mirror is a leading Indian magazine focused
            on the construction and infrastructure sector, bringing
            the latest industry news, expert insights, project
            updates, policy developments and interviews to
            professionals across the sector.
          </p>


          <p
            className="
              mt-4
              text-sm
              leading-7
              text-slate-600
              sm:text-base
            "
          >
            Operating since 2013, Construction Mirror has grown into
            a trusted industry resource for professionals, companies,
            manufacturers, contractors, consultants and decision-makers
            across the construction and infrastructure ecosystem.
          </p>


          <p
            className="
              mt-4
              text-sm
              leading-7
              text-slate-600
              sm:text-base
            "
          >
            The magazine is published by{" "}
            <strong className="font-semibold text-[#0A1128]">
              Tresub Media Pvt. Ltd.
            </strong>
          </p>

        </motion.div>


        {/* Contact Cards */}

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
            amount: 0.15,
          }}
          className="
            mt-12
            grid
            gap-5
            md:grid-cols-3
          "
        >

          {/* Address */}

          <motion.div
            variants={fadeUp}
            className="
              rounded-2xl
              border
              border-slate-200
              bg-white
              p-6
              shadow-[0_15px_40px_-30px_rgba(10,17,40,0.3)]
              transition
              duration-300
              hover:-translate-y-1
              hover:shadow-[0_20px_45px_-30px_rgba(10,17,40,0.4)]
            "
          >

            <div
              className="
                mb-5
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-xl
                bg-[#0F8B9D]/10
                text-[#0F8B9D]
              "
            >
              <MapPin size={20} />
            </div>

            <p
              className="
                text-[10px]
                font-bold
                uppercase
                tracking-[0.2em]
                text-[#C99A3B]
              "
            >
              Our Office
            </p>

            <h3 className="mt-1 text-sm font-bold text-[#0A1128]">
              Greater Noida
            </h3>

            <p className="mt-2 text-xs leading-6 text-slate-500">
              Gaur City Mall, 14th Floor, Office No. 14130 / 14130-A,
              Sector-04, Greater Noida (West) - 201301, Uttar Pradesh,
              India
            </p>

          </motion.div>


          {/* Phone */}

          <motion.div
            variants={fadeUp}
            className="
              rounded-2xl
              border
              border-slate-200
              bg-white
              p-6
              shadow-[0_15px_40px_-30px_rgba(10,17,40,0.3)]
              transition
              duration-300
              hover:-translate-y-1
              hover:shadow-[0_20px_45px_-30px_rgba(10,17,40,0.4)]
            "
          >

            <div
              className="
                mb-5
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-xl
                bg-[#0F8B9D]/10
                text-[#0F8B9D]
              "
            >
              <Phone size={20} />
            </div>

            <p
              className="
                text-[10px]
                font-bold
                uppercase
                tracking-[0.2em]
                text-[#C99A3B]
              "
            >
              Call Us
            </p>

            <h3 className="mt-1 text-sm font-bold text-[#0A1128]">
              Office Number
            </h3>

            <a
              href="tel:+911205162126"
              className="
                mt-2
                block
                text-sm
                text-slate-500
                transition
                hover:text-[#0F8B9D]
              "
            >
              +91 120-5162126
            </a>

          </motion.div>


          {/* Email */}

          <motion.div
            variants={fadeUp}
            className="
              rounded-2xl
              border
              border-slate-200
              bg-white
              p-6
              shadow-[0_15px_40px_-30px_rgba(10,17,40,0.3)]
              transition
              duration-300
              hover:-translate-y-1
              hover:shadow-[0_20px_45px_-30px_rgba(10,17,40,0.4)]
            "
          >

            <div
              className="
                mb-5
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-xl
                bg-[#0F8B9D]/10
                text-[#0F8B9D]
              "
            >
              <Mail size={20} />
            </div>

            <p
              className="
                text-[10px]
                font-bold
                uppercase
                tracking-[0.2em]
                text-[#C99A3B]
              "
            >
              Email Us
            </p>

            <h3 className="mt-1 text-sm font-bold text-[#0A1128]">
              Official Email
            </h3>

            <a
              href="mailto:neha@constructionmirror.com"
              className="
                mt-2
                block
                break-all
                text-sm
                text-slate-500
                transition
                hover:text-[#0F8B9D]
              "
            >
              neha@constructionmirror.com
            </a>

          </motion.div>

        </motion.div>


        {/* Office Hours */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
          }}
          className="
            mt-6
            inline-flex
            items-center
            gap-3
            rounded-full
            border
            border-slate-200
            bg-white
            px-4
            py-2.5
          "
        >
          <Clock3
            size={15}
            className="text-[#C99A3B]"
          />

          <span className="text-[11px] font-medium text-slate-500">
            Monday – Friday
          </span>

        </motion.div>

      </div>
    </section>
  );
}

export default ContactDetails;