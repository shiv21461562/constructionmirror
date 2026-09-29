import { motion } from "framer-motion";

const fadeRight = {
  hidden: {
    opacity: 0,
    x: 45,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function ContactImage() {
  return (
    <motion.div
      variants={fadeRight}
      initial="hidden"
      whileInView="show"
      viewport={{
        once: true,
        amount: 0.2,
      }}
      className="
        relative
        flex
        min-h-[520px]
        items-end
        justify-center
        overflow-hidden
        rounded-[2rem]
        bg-[#eef8f8]
      "
    >

      {/* Decorative circles */}

      <div
        className="
          pointer-events-none
          absolute
          -right-20
          -top-20
          h-72
          w-72
          rounded-full
          bg-[#0F8B9D]/15
          blur-2xl
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -bottom-24
          -left-20
          h-72
          w-72
          rounded-full
          bg-[#E6C36E]/20
          blur-3xl
        "
      />


      {/* Badge */}

      <motion.div
        initial={{
          opacity: 0,
          y: -15,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.7,
          duration: 0.6,
        }}
        className="
          absolute
          left-6
          top-6
          z-20
          rounded-full
          border
          border-white/80
          bg-white/90
          px-4
          py-2.5
          text-xs
          font-semibold
          text-[#0A1128]
          shadow-lg
          backdrop-blur-md
        "
      >
        Let's Talk
      </motion.div>


      {/* Girl Image */}

      <motion.img
        src="/contactpage.png"
        alt="Contact Construction Mirror"
        initial={{
          opacity: 0,
          scale: 0.92,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1,
          delay: 0.15,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          relative
          z-10
          h-full
          w-full
          object-contain
          object-bottom
          drop-shadow-[0_25px_35px_rgba(10,17,40,0.16)]
        "
      />

    </motion.div>
  );
}

export default ContactImage;