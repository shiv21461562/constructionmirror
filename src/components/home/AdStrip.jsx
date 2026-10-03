// import ads from "../data/ads";

// /*
//   Use: <AdStrip name="afterNational" />
//   Kaunsi ad dikhegi ye src/data/ads.js se aata hai.
// */

// function AdStrip({ name }) {
//   const list = (ads[name] || []).filter((ad) => ad.active);

//   if (list.length === 0) return null;

//   return (
//     <section
//       className="
//         border-y border-[#0A1128]/50
//         bg-white
//         py-6 sm:py-7
//       "
//     >
//       <div className="mx-auto w-full max-w-[1000px] px-4 sm:px-6">
//         <div className="grid grid-cols-1 gap-2 sm:gap-3 lg:grid-cols-2">

//           {list.map((ad, index) => (
//             <a
//               key={index}
//               href={ad.link}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="
//                 group relative mx-auto block w-full max-w-[560px]
//                 overflow-hidden lg:max-w-none

//                 bg-[#070D1A]
//                 shadow-[0_6px_18px_-10px_rgba(10,17,40,0.35)]
//                 transition-all duration-500
//                 hover:-translate-y-0.5
//                 hover:border-[#0A1128]/40
//               "
//             >
//               {/* Banner size unchanged */}
//               <div className="relative aspect-[1600/250] w-full">

//                 <img
//                   src={ad.image}
//                   alt={ad.alt || "Advertisement"}
//                   width={1600}
//                   height={250}
//                   loading="lazy"
//                   className="
//                     absolute inset-0 h-full w-full
//                     object-contain object-center
//                   "
//                 />

//                 <span
//                   className="
//                     absolute bottom-0 left-0
//                     h-[2px] w-0
//                     bg-[#0A1128]
//                     transition-all duration-700
//                     group-hover:w-full
//                   "
//                 />

//               </div>
//             </a>
//           ))}

//         </div>
//       </div>
//     </section>
//   );
// }

// export default AdStrip;

import ads from "../../data/ads";

/*
  Use: <AdStrip name="afterNational" />
  Kaunsi ad dikhegi ye src/data/ads.js se aata hai.
*/

function AdStrip({ name }) {
  const list = (ads[name] || []).filter((ad) => ad.active);

  if (list.length === 0) return null;

  return (
    <section
      className="
        relative overflow-hidden
        border-y border-white/10
        bg-gradient-to-b from-[#0A1128]/80 via-[#0A1128]/70 to-[#070D1A]/85
        backdrop-blur-xl backdrop-saturate-150
        shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08),inset_0_-1px_0_0_rgba(0,0,0,0.4)]
        py-6 sm:py-7
      "
    >
      {/* soft glass glow */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute inset-0
          bg-[radial-gradient(60%_120%_at_50%_0%,rgba(255,255,255,0.08),transparent_70%)]
        "
      />

      <div className="relative mx-auto w-full max-w-[1000px] px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-8 sm:gap-7 lg:grid-cols-2">
          {list.map((ad, index) => (
            <a
              key={index}
              href={ad.link}
              target="_blank"
              rel="noopener noreferrer"
              className="
                group relative mx-auto block w-full max-w-[560px]
                overflow-hidden lg:max-w-none

                bg-[#070D1A]
                shadow-[0_6px_18px_-10px_rgba(10,17,40,0.35)]
                transition-all duration-500
                hover:-translate-y-0.5
                hover:border-[#0A1128]/40
              "
            >
              {/* Banner size unchanged */}
              <div className="relative aspect-[1600/250] w-full">
                <img
                  src={ad.image}
                  alt={ad.alt || "Advertisement"}
                  width={1600}
                  height={250}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-contain object-center"
                />

                <span
                  className="
                    absolute bottom-0 left-0
                    h-[2px] w-0
                    bg-[#0A1128]
                    transition-all duration-700
                    group-hover:w-full
                  "
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AdStrip;
