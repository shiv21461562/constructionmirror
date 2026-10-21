import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import gsap from "gsap";

/* Frosted white glass */
const glass =
  "border border-white/70 bg-white/60 backdrop-blur-xl shadow-[0_12px_40px_-14px_rgba(10,19,34,0.28)] ring-1 ring-slate-900/5";

const stats = [
  { value: "10+", label: "Years of Industry" },
  { value: "100K+", label: "Industry Readers" },
  { value: "Industry", label: "News & Insights" },
];

function Arrow({ className = "" }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`transition-transform duration-300 ${className}`}
      aria-hidden="true"
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

function HeroButton({ to, children }) {
  return (
    <Link
      to={to}
      className="group relative inline-flex w-full items-center justify-between gap-6 overflow-hidden rounded-full border border-[#D4AF5A]/70 bg-gradient-to-r from-[#0A1322] to-[#18263F] py-2 pl-7 pr-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[#E6C473] shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_14px_34px_-12px_rgba(10,19,34,0.55)] transition-all duration-500 hover:-translate-y-0.5 hover:border-[#E6C473] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_18px_40px_-12px_rgba(201,154,59,0.55)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C99A3B] focus-visible:ring-offset-2 sm:w-auto sm:justify-start sm:gap-5 sm:text-[12px]"
    >
      <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

      <span className="relative">{children}</span>

      <span className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#D4AF5A]/70 text-[#E6C473] transition-all duration-500 group-hover:border-[#D4AF5A] group-hover:bg-[#D4AF5A] group-hover:text-[#0A1322]">
        <Arrow className="group-hover:translate-x-0.5" />
      </span>
    </Link>
  );
}

function HeroSection() {
  const heroRef = useRef(null);
  const imageRef = useRef(null);
  const shineRef = useRef(null);

  useEffect(() => {
    const hero = heroRef.current;
    const image = imageRef.current;
    const shine = shineRef.current;

    if (!hero || !image) return;

    // Desktop only
    const media = window.matchMedia("(min-width: 1024px)");

    if (!media.matches) return;

    const ctx = gsap.context(() => {
      // Initial state
      gsap.set(image, {
        scale: 1.03,
        x: 0,
        y: 0,
        rotateX: 0,
        rotateY: 0,
        transformPerspective: 1200,
      });

      if (shine) {
        gsap.set(shine, {
          x: 0,
          y: 0,
          opacity: 0,
        });
      }

      const moveX = gsap.quickTo(image, "x", {
        duration: 0.9,
        ease: "power3.out",
      });

      const moveY = gsap.quickTo(image, "y", {
        duration: 0.9,
        ease: "power3.out",
      });

      const rotateX = gsap.quickTo(image, "rotationX", {
        duration: 0.9,
        ease: "power3.out",
      });

      const rotateY = gsap.quickTo(image, "rotationY", {
        duration: 0.9,
        ease: "power3.out",
      });

      const shineX = shine
        ? gsap.quickTo(shine, "x", {
            duration: 0.7,
            ease: "power3.out",
          })
        : null;

      const shineY = shine
        ? gsap.quickTo(shine, "y", {
            duration: 0.7,
            ease: "power3.out",
          })
        : null;

      const handleMouseMove = (e) => {
        const rect = hero.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const percentX = x / rect.width - 0.5;
        const percentY = y / rect.height - 0.5;

        // Main parallax
        moveX(percentX * -28);
        moveY(percentY * -18);

        // Very subtle 3D rotation
        rotateY(percentX * 3);
        rotateX(percentY * -2.5);

        // Light movement
        if (shine) {
          shineX(percentX * 100);
          shineY(percentY * 60);
        }
      };

      const handleMouseEnter = () => {
        gsap.to(image, {
          scale: 1.07,
          duration: 1.2,
          ease: "power3.out",
        });

        if (shine) {
          gsap.to(shine, {
            opacity: 0.5,
            duration: 0.5,
          });
        }
      };

      const handleMouseLeave = () => {
        gsap.to(image, {
          x: 0,
          y: 0,
          rotationX: 0,
          rotationY: 0,
          scale: 1.03,
          duration: 1.2,
          ease: "power3.out",
        });

        if (shine) {
          gsap.to(shine, {
            x: 0,
            y: 0,
            opacity: 0,
            duration: 0.7,
            ease: "power3.out",
          });
        }
      };

      hero.addEventListener("mousemove", handleMouseMove);
      hero.addEventListener("mouseenter", handleMouseEnter);
      hero.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        hero.removeEventListener("mousemove", handleMouseMove);
        hero.removeEventListener("mouseenter", handleMouseEnter);
        hero.removeEventListener("mouseleave", handleMouseLeave);
      };
    }, hero);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative overflow-hidden bg-white">
      {/* Animations */}
      <style>{`
        @keyframes hero-up {
          from {
            opacity: 0;
            transform: translateY(22px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .hero-in {
          opacity: 0;
          animation: hero-up 0.8s cubic-bezier(.2,.7,.2,1) forwards;
        }

        @keyframes hero-line {
          0%, 100% {
            transform: scaleY(0.4);
            opacity: 0.5;
          }

          50% {
            transform: scaleY(1);
            opacity: 1;
          }
        }

        .hero-line {
          transform-origin: top;
          animation: hero-line 2s ease-in-out infinite;
        }

        .hero-image {
          will-change: transform;
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-in {
            animation: none;
            opacity: 1;
          }

          .hero-line {
            animation: none;
          }

          .hero-image {
            transform: none !important;
          }
        }
      `}</style>

      {/* =========================================
          BACKGROUND IMAGE
      ========================================== */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Main Image */}
        <img
          ref={imageRef}
          src="/hero/hero-bg.png"
          alt="Construction Industry"
          className="hero-image h-full w-full object-cover"
        />

        {/* Main Hero Video */}
        {/* <video
          ref={imageRef}
          autoPlay
          muted
          loop
          playsInline
          className="hero-image h-full w-full object-cover saturate-[1.35] contrast-[1.12] brightness-[1.03]"
        >
          <source src="/hero/videos/hero.mp4" type="video/mp4" />
        </video>  */}

        {/* LEFT SIDE ONLY - White Fade */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-[55%] bg-gradient-to-r from-white via-white/95 to-transparent" />

        {/* Cursor Light / Shine */}
        <div
          ref={shineRef}
          className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#E6C473]/20 blur-[100px]"
        />

        {/* Bottom Fade */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </div>

      {/* =========================================
          CONTENT
      ========================================== */}
      <div className="relative mx-auto grid min-h-[640px] max-w-[1400px] items-center gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:min-h-[740px] lg:grid-cols-[1.3fr_0.7fr] lg:gap-16 lg:px-10">
        {/* LEFT */}
        <div className="max-w-3xl sm:ml-2 lg:ml-10 xl:ml-24">
          {/* Badge */}
          <div
            className={`hero-in mb-7 inline-flex items-center gap-3 rounded-full px-4 py-2 ${glass}`}
            style={{ animationDelay: "0ms" }}
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#C99A3B] opacity-70" />

              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#C99A3B]" />
            </span>

            <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#8A6218] sm:text-[11px]">
              Construction &amp; Infrastructure
            </span>
          </div>

          {/* Heading */}
          <p
            className="hero-in text-[2rem] font-bold leading-[1.08] tracking-tight text-[#0A1322] sm:text-3xl lg:text-4xl xl:text-5xl"
            style={{ animationDelay: "120ms" }}
          >
            Building the Future of
            <span className="block bg-gradient-to-r from-[#B8862C] via-[#C99A3B] to-[#D9B45E] bg-clip-text font-bold text-transparent">
              Construction Industry.
            </span>
          </p>

          {/* Description */}
          <p
            className="hero-in mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8"
            style={{ animationDelay: "240ms" }}
          >
            Stay connected with the latest news, innovations, machinery,
            technology, projects and people shaping India&apos;s construction
            and infrastructure ecosystem.
          </p>

          {/* Buttons */}
          {/* Buttons */}
          <div
            className="
    hero-in mt-9
    flex flex-col gap-3
    sm:flex-row sm:flex-wrap sm:items-center sm:gap-4
    font-light
    text-[10px]
    tracking-[0.08em]
  "
            style={{ animationDelay: "360ms" }}
          >
            <HeroButton to="/news">Latest News</HeroButton>

            <HeroButton to="/magazines">View Magazine</HeroButton>
          </div>

          {/* Stats */}
          <div
            className="hero-in mt-12 grid max-w-xl grid-cols-3 gap-3 sm:gap-4"
            style={{ animationDelay: "480ms" }}
          >
            {stats.map((s) => (
              <div
                key={s.label}
                className={`rounded-2xl px-3 py-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#C99A3B]/60 sm:px-5 ${glass}`}
              >
                <p className="text-xl font-bold text-[#0A1322] sm:text-2xl">
                  {s.value}
                </p>

                <p className="mt-1 text-[9px] uppercase leading-4 tracking-[0.16em] text-slate-500 sm:text-[10px]">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-7 right-8 hidden items-center gap-3 text-[9px] uppercase tracking-[0.25em] text-slate-500 xl:flex">
        <span>Scroll to explore</span>

        <span className="hero-line h-9 w-px bg-[#C99A3B]" />
      </div>
    </section>
  );
}

export default HeroSection;

// import { Link } from "react-router-dom";
// import { useEffect, useRef } from "react";
// import gsap from "gsap";

// const glass =
//   "border border-white/70 bg-white/65 backdrop-blur-xl shadow-[0_18px_50px_-18px_rgba(10,19,34,0.25)]";

// const stats = [
//   {
//     value: "10+",
//     label: "Years of Industry",
//   },
//   {
//     value: "100K+",
//     label: "Industry Readers",
//   },
//   {
//     value: "Industry",
//     label: "News & Insights",
//   },
// ];

// function Arrow({ className = "" }) {
//   return (
//     <svg
//       width="16"
//       height="16"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       className={`transition-transform duration-300 ${className}`}
//     >
//       <path d="M5 12h14" />
//       <path d="m13 6 6 6-6 6" />
//     </svg>
//   );
// }

// function HeroButton({ to, children }) {
//   return (
//     <Link
//       to={to}
//       className="
//         group relative inline-flex items-center justify-between
//         gap-5 overflow-hidden rounded-full
//         border border-[#C99A3B]/70
//         bg-[#091525]
//         py-[7px] pl-7 pr-2
//         text-[11px] font-bold uppercase
//         tracking-[0.2em] text-[#E6C473]
//         shadow-[0_15px_35px_-15px_rgba(10,19,34,.55)]
//         transition-all duration-500
//         hover:-translate-y-1
//         hover:border-[#E6C473]
//         hover:shadow-[0_20px_45px_-15px_rgba(201,154,59,.4)]
//         sm:text-[12px]
//       "
//     >
//       {/* Shine */}
//       <span
//         className="
//           pointer-events-none absolute inset-y-0 -left-[100%]
//           w-[70%]
//           rotate-12
//           bg-gradient-to-r
//           from-transparent
//           via-white/15
//           to-transparent
//           transition-all duration-700
//           group-hover:left-[130%]
//         "
//       />

//       <span className="relative z-10">{children}</span>

//       <span
//         className="
//           relative z-10 flex h-10 w-10 shrink-0
//           items-center justify-center
//           rounded-full
//           border border-[#C99A3B]/60
//           text-[#E6C473]
//           transition-all duration-500
//           group-hover:border-[#E6C473]
//           group-hover:bg-[#C99A3B]
//           group-hover:text-[#081321]
//         "
//       >
//         <Arrow className="group-hover:translate-x-1" />
//       </span>
//     </Link>
//   );
// }

// function HeroSection() {
//   const heroRef = useRef(null);
//   const imageRef = useRef(null);
//   const glowRef = useRef(null);
//   const lightRef = useRef(null);

//   useEffect(() => {
//     const hero = heroRef.current;
//     const image = imageRef.current;
//     const glow = glowRef.current;
//     const light = lightRef.current;

//     if (!hero || !image) return;

//     const desktop = window.matchMedia("(min-width: 1024px)");

//     if (!desktop.matches) return;

//     const ctx = gsap.context(() => {
//       /*
//        * Initial state
//        */
//       gsap.set(image, {
//         scale: 1.08,
//         x: 0,
//         y: 0,
//         rotationX: 0,
//         rotationY: 0,
//         transformPerspective: 1400,
//         transformOrigin: "center center",
//       });

//       gsap.set(glow, {
//         opacity: 0,
//         scale: 0.7,
//       });

//       gsap.set(light, {
//         opacity: 0,
//       });

//       /*
//        * Smooth mouse movement
//        */
//       const moveX = gsap.quickTo(image, "x", {
//         duration: 0.8,
//         ease: "power3.out",
//       });

//       const moveY = gsap.quickTo(image, "y", {
//         duration: 0.8,
//         ease: "power3.out",
//       });

//       const rotateX = gsap.quickTo(image, "rotationX", {
//         duration: 0.8,
//         ease: "power3.out",
//       });

//       const rotateY = gsap.quickTo(image, "rotationY", {
//         duration: 0.8,
//         ease: "power3.out",
//       });

//       const glowX = gsap.quickTo(glow, "left", {
//         duration: 0.45,
//         ease: "power2.out",
//       });

//       const glowY = gsap.quickTo(glow, "top", {
//         duration: 0.45,
//         ease: "power2.out",
//       });

//       const handleMove = (event) => {
//         const rect = hero.getBoundingClientRect();

//         const mouseX = event.clientX - rect.left;
//         const mouseY = event.clientY - rect.top;

//         const percentX = mouseX / rect.width - 0.5;
//         const percentY = mouseY / rect.height - 0.5;

//         /*
//          * Image parallax
//          */
//         moveX(percentX * -55);
//         moveY(percentY * -32);

//         /*
//          * 3D tilt
//          */
//         rotateY(percentX * 4);
//         rotateX(percentY * -3);

//         /*
//          * Gold cursor light
//          */
//         glowX(mouseX);
//         glowY(mouseY);
//       };

//       const handleEnter = () => {
//         gsap.to(image, {
//           scale: 1.13,
//           duration: 1,
//           ease: "power3.out",
//         });

//         gsap.to(glow, {
//           opacity: 0.8,
//           scale: 1,
//           duration: 0.6,
//           ease: "power3.out",
//         });

//         gsap.to(light, {
//           opacity: 0.35,
//           duration: 0.5,
//         });
//       };

//       const handleLeave = () => {
//         gsap.to(image, {
//           x: 0,
//           y: 0,
//           rotationX: 0,
//           rotationY: 0,
//           scale: 1.08,
//           duration: 1.2,
//           ease: "power3.out",
//         });

//         gsap.to(glow, {
//           opacity: 0,
//           scale: 0.7,
//           duration: 0.7,
//         });

//         gsap.to(light, {
//           opacity: 0,
//           duration: 0.6,
//         });
//       };

//       hero.addEventListener("mousemove", handleMove);
//       hero.addEventListener("mouseenter", handleEnter);
//       hero.addEventListener("mouseleave", handleLeave);

//       return () => {
//         hero.removeEventListener("mousemove", handleMove);
//         hero.removeEventListener("mouseenter", handleEnter);
//         hero.removeEventListener("mouseleave", handleLeave);
//       };
//     }, hero);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <section
//       ref={heroRef}
//       className="
//         relative min-h-[680px]
//         overflow-hidden bg-white
//         lg:min-h-[740px]
//       "
//     >
//       {/* =========================================
//           BACKGROUND
//       ========================================== */}

//       <div className="absolute inset-0 overflow-hidden">
//         {/* Main Construction Image */}
//         <img
//           ref={imageRef}
//           src="/hero/hero-bg.png"
//           alt="Construction and infrastructure"
//           className="
//             hero-image
//             absolute inset-[-7%]
//             h-[114%] w-[114%]
//             max-w-none
//             object-cover
//             will-change-transform
//           "
//         />

//         {/* LEFT SIDE WHITE FADE */}
//         <div
//           className="
//             pointer-events-none
//             absolute inset-y-0 left-0
//             w-[58%]
//             bg-gradient-to-r
//             from-white
//             via-white/95
//             to-transparent
//           "
//         />

//         {/* Soft bottom fade */}
//         <div
//           className="
//             pointer-events-none
//             absolute inset-x-0 bottom-0
//             h-32
//             bg-gradient-to-t
//             from-white
//             to-transparent
//           "
//         />

//         {/* Cursor Gold Glow */}
//         <div
//           ref={glowRef}
//           className="
//             pointer-events-none
//             absolute left-0 top-0
//             h-[280px] w-[280px]
//             -translate-x-1/2
//             -translate-y-1/2
//             rounded-full
//             bg-[#E6C473]/25
//             blur-[90px]
//           "
//         />

//         {/* Cinematic Light */}
//         <div
//           ref={lightRef}
//           className="
//             pointer-events-none
//             absolute right-[10%] top-[15%]
//             h-[420px] w-[420px]
//             rounded-full
//             bg-[#F6D98A]/20
//             blur-[120px]
//           "
//         />

//         {/* Subtle gold line */}
//         <div
//           className="
//             pointer-events-none
//             absolute right-[4%] top-[18%]
//             h-[1px] w-[250px]
//             rotate-[-18deg]
//             bg-gradient-to-r
//             from-transparent
//             via-[#D4AF5A]/60
//             to-transparent
//           "
//         />
//       </div>

//       {/* =========================================
//           CONTENT
//       ========================================== */}

//       <div
//         className="
//           relative z-10 mx-auto
//           flex min-h-[680px]
//           max-w-[1450px]
//           items-center
//           px-5 py-20
//           sm:px-8
//           lg:min-h-[740px]
//           lg:px-10
//         "
//       >
//         <div
//           className="
//             max-w-[720px]
//             lg:ml-10
//             xl:ml-20
//           "
//         >
//           {/* =================================
//               BADGE
//           ================================= */}

//           <div
//             className="
//               mb-7 inline-flex items-center
//               gap-3 rounded-full
//               border border-[#D4AF5A]/25
//               bg-white/70
//               px-4 py-2
//               shadow-[0_8px_30px_-12px_rgba(10,19,34,.2)]
//               backdrop-blur-xl
//             "
//           >
//             <span className="relative flex h-2 w-2">
//               <span
//                 className="
//                   absolute h-full w-full
//                   animate-ping rounded-full
//                   bg-[#C99A3B]/60
//                 "
//               />

//               <span className="relative h-2 w-2 rounded-full bg-[#C99A3B]" />
//             </span>

//          <span
//   className="
//     -translate-y-0.5
//     text-[10px]
//     font-bold
//     uppercase
//     tracking-[0.24em]
//     text-[#805B18]
//     sm:text-[11px]
//   "
// >
//   Construction &amp; Infrastructure
// </span>
//           </div>

//           {/* =================================
//               HEADING
//           ================================= */}
//           <h1
//             className="
//     text-[2rem]
//     font-extrabold
//     leading-[1.08]
//     tracking-[-0.035em]
//     text-[#081321]
//     sm:text-3xl
//     lg:text-[3.2rem]
//     xl:text-[3.2rem]
//   "
//           >
//             Building the Future of
//             <span
//               className="
//       mt-1 block
//       bg-gradient-to-r
//       from-[#A87520]
//       via-[#C99A3B]
//       to-[#E1C06C]
//       bg-clip-text
//       text-transparent
//     "
//             >
//               Construction Industry.
//             </span>
//           </h1>

//           {/* Small gold line */}
//           <div
//             className="
//               mt-6 h-[3px] w-20
//               rounded-full
//               bg-gradient-to-r
//               from-[#C99A3B]
//               to-transparent
//             "
//           />

//           {/* =================================
//               DESCRIPTION
//           ================================= */}

//           <p
//             className="
//               mt-6 max-w-[650px]
//               text-[15px]
//               leading-7
//               text-[#52627A]
//               sm:text-[17px]
//               sm:leading-8
//             "
//           >
//             Stay connected with the latest news, innovations, machinery,
//             technology, projects and people shaping India&apos;s construction
//             and infrastructure ecosystem.
//           </p>

//           {/* =================================
//               BUTTONS
//           ================================= */}

//           <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:gap-4">
//             <HeroButton to="/news">Latest News</HeroButton>

//             <HeroButton to="/magazines">View Magazine</HeroButton>
//           </div>

//           {/* =================================
//               STATS
//           ================================= */}

//           <div
//             className="
//               mt-12 grid
//               max-w-[680px]
//               grid-cols-3
//               gap-3
//               sm:gap-4
//             "
//           >
//             {stats.map((item) => (
//               <div
//                 key={item.label}
//                 className="
//                   group rounded-2xl
//                   border border-white/80
//                   bg-white/65
//                   px-3 py-4
//                   shadow-[0_15px_40px_-20px_rgba(10,19,34,.3)]
//                   backdrop-blur-xl
//                   transition-all duration-500
//                   hover:-translate-y-1
//                   hover:border-[#C99A3B]/40
//                   hover:shadow-[0_20px_45px_-18px_rgba(201,154,59,.28)]
//                   sm:px-5 sm:py-5
//                 "
//               >
//                 <div
//                   className="
//                     text-xl font-extrabold
//                     tracking-tight
//                     text-[#081321]
//                     sm:text-2xl
//                   "
//                 >
//                   {item.value}
//                 </div>

//                 <div
//                   className="
//                     mt-1.5
//                     text-[8px]
//                     font-semibold
//                     uppercase
//                     leading-4
//                     tracking-[0.17em]
//                     text-[#64748B]
//                     sm:text-[9px]
//                   "
//                 >
//                   {item.label}
//                 </div>

//                 {/* tiny gold indicator */}
//                 <div
//                   className="
//                     mt-3 h-[2px] w-7
//                     rounded-full
//                     bg-[#C99A3B]/70
//                     transition-all duration-300
//                     group-hover:w-12
//                   "
//                 />
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* =========================================
//           SCROLL INDICATOR
//       ========================================== */}

//       <div
//         className="
//           absolute bottom-7 right-8
//           hidden items-center gap-3
//           text-[9px]
//           font-medium
//           uppercase
//           tracking-[0.28em]
//           text-slate-500
//           xl:flex
//         "
//       >
//         <span>Scroll to explore</span>

//         <span className="relative h-10 w-px overflow-hidden bg-[#D4AF5A]/30">
//           <span
//             className="
//               absolute left-0 top-0
//               h-1/2 w-full
//               animate-pulse
//               bg-[#C99A3B]
//             "
//           />
//         </span>
//       </div>
//     </section>
//   );
// }

// export default HeroSection;
