import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

function ContactMap() {
  return (
    <section
      className="
        mx-auto
        max-w-[1180px]
        px-5
        py-16
        sm:px-8
        lg:py-24
      "
    >

      <motion.div
        initial={{
          opacity: 0,
          y: 35,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.15,
        }}
        transition={{
          duration: 0.7,
        }}
      >

        {/* Heading */}

        <div className="mb-7">

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
              Find Us
            </span>

          </div>

          <h2
            className="
              mt-3
              font-serif
              text-3xl
              font-bold
              text-[#0A1128]
              sm:text-4xl
            "
          >
            Visit Our Office
          </h2>

        </div>


        {/* Map */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.97,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
          className="
            group
            relative
            overflow-hidden
            rounded-3xl
            border
            border-slate-200
            bg-white
            shadow-[0_20px_60px_-35px_rgba(10,17,40,0.35)]
          "
        >

          {/* Map Label */}

          <div
            className="
              absolute
              left-5
              top-5
              z-10
              flex
              items-center
              gap-2
              rounded-full
              border
              border-white/70
              bg-white/95
              px-4
              py-2.5
              text-xs
              font-semibold
              text-[#0A1128]
              shadow-lg
              backdrop-blur-md
            "
          >

            <MapPin
              size={15}
              className="text-[#C99A3B]"
            />

            Greater Noida, Uttar Pradesh

          </div>


          <iframe
            title="Construction Mirror Office Location"
            src="https://www.google.com/maps?q=Gaur%20City%20Mall%2C%20Greater%20Noida%2C%20Uttar%20Pradesh&output=embed"
            className="
              h-[340px]
              w-full
              border-0
              grayscale-[10%]
              transition
              duration-700
              group-hover:grayscale-0
              sm:h-[430px]
              lg:h-[480px]
            "
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />

        </motion.div>

      </motion.div>

    </section>
  );
}

export default ContactMap;