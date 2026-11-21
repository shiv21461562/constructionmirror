import { useRef, useState, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const clients = [
  {
    name: "APL Apollo",
    category: "Steel Pipes",
    logo: "/clients/apl-apollo.webp",
  },
  { name: "BKT", category: "Off-Highway Tyres", logo: "/clients/bkt.webp" },
  {
    name: "Tata Hitachi",
    category: "Construction Equipment",
    logo: "/clients/Tata_Hitachi.webp",
  },
  { name: "BEML", category: "Heavy Equipment", logo: "/clients/BEML.webp" },
  {
    name: "CASE Construction",
    category: "Construction Machinery",
    logo: "/clients/Case.webp",
  },
  {
    name: "Gainwell CAT",
    category: "Heavy Equipment",
    logo: "/clients/gainwell-cat.webp",
  },

  {
    name: "Larsen & Toubro",
    category: "Engineering & Infrastructure",
    logo: "/clients/larsen-toubro.webp",
  },

  {
    name: "Escorts Kubota",
    category: "Construction Equipment",
    logo: "/clients/Kubota.webp",
  },
  {
    name: "GS Caltex",
    category: "Lubricants & Energy",
    logo: "/clients/gs_caltex.webp",
  },
  {
    name: "Jindal Steel & Power",
    category: "Steel & Infrastructure",
    logo: "/clients/Jindal_Steel_and_Power.webp",
  },
  {
    name: "Layher",
    category: "Scaffolding Systems",
    logo: "/clients/Layher.webp",
  },
  {
    name: "Honda",
    category: "Engineering & Equipment",
    logo: "/clients/Honda.webp",
  },
  { name: "Magna", category: "Steel TMT Bars", logo: "/clients/Magna.webp" },
  {
    name: "Mahindra Construction",
    category: "Construction Equipment",
    logo: "/clients/mahindra.webp",
  },
  {
    name: "MB Crusher",
    category: "Crushing Equipment",
    logo: "/clients/mb_crusher.webp",
  },
  {
    name: "Nilang Group",
    category: "Industrial Solutions",
    logo: "/clients/nilang.webp",
  },
  {
    name: "Propel Industries",
    category: "Crushing & Screening",
    logo: "/clients/propel.webp",
  },
  { name: "SANY", category: "Heavy Machinery", logo: "/clients/Sany.webp" },
  {
    name: "Ingersoll Rand",
    category: "Industrial Equipment",
    logo: "/clients/ingersoll.webp",
  },
  { name: "Veedol", category: "Lubricants", logo: "/clients/veedol.webp" },
  {
    name: "Ammann",
    category: "Road Construction Equipment",
    logo: "/clients/Ammann.webp",
  },
];

const rowOne = clients.slice(0, 12);
const rowTwo = clients.slice(12);

/* ---------- Logo tile (original colours, always) ---------- */
function ClientCard({ client }) {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="group relative mr-3 flex h-[92px] w-[136px] shrink-0 select-none flex-col items-center justify-between overflow-hidden rounded-xl bg-white px-3 pb-2 pt-3 ring-1 ring-white/10 transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-[0_14px_30px_-8px_rgba(198,154,67,0.55)] hover:ring-2 hover:ring-[#C69A43] sm:mr-4 sm:h-[110px] sm:w-[168px] sm:px-4 sm:pt-4">
      <div className="flex h-full w-full items-center justify-center">
        {!imageError ? (
          <img
            src={client.logo}
            alt={`${client.name} logo`}
            loading="lazy"
            draggable="false"
            onError={() => setImageError(true)}
            className={`object-contain transition-transform duration-500 group-hover:scale-110 ${
              [
                "Gainwell CAT",
                "Larsen & Toubro",
                "GS Caltex",
                "BKT",
                "Mahindra Construction",
                "Veedol",
                "Ingersoll Rand",
              ].includes(client.name)
                ? "h-[65px] max-h-[65px] w-[150px] max-w-none sm:h-[80px] sm:max-h-[80px] sm:w-[185px]"
                : "max-h-[40px] max-w-[88%] sm:max-h-[52px]"
            }`}
          />
        ) : (
          <span className="text-center text-sm font-bold text-[#0B1628]">
            {client.name}
          </span>
        )}
      </div>

      <span className="pointer-events-none absolute bottom-0 left-0 h-[3px] w-0 bg-gradient-to-r from-[#C69A43] to-[#F0D48A] transition-all duration-500 group-hover:w-full" />
    </div>
  );
}

/* ---------- Smooth marquee: auto-scroll + arrow glide + drag ---------- */
function MarqueeRow({ items, direction = 1, speed = 45, controlRef }) {
  const trackRef = useRef(null);
  const offsetRef = useRef(0);
  const impulseRef = useRef(0);
  const lastTimeRef = useRef(null);
  const draggingRef = useRef(false);
  const dragXRef = useRef(0);
  const [paused, setPaused] = useState(false);
  const [loopWidth, setLoopWidth] = useState(0);

  const COPIES = 4;
  const repeated = Array.from({ length: COPIES }, () => items).flat();

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const measure = () => {
      const second = track.children[items.length];
      const w = second ? second.offsetLeft - track.children[0].offsetLeft : 0;
      if (w > 0) setLoopWidth(w);
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(track);
    return () => ro.disconnect();
  }, []);

  const wrap = (v) => ((v % loopWidth) + loopWidth) % loopWidth;
  const paint = () => {
    if (trackRef.current) {
      trackRef.current.style.transform = `translate3d(${-offsetRef.current}px,0,0)`;
    }
  };

  useEffect(() => {
    if (loopWidth && offsetRef.current === 0) {
      offsetRef.current = loopWidth; // start in the middle so both directions are seamless
      paint();
    }
    // eslint-disable-next-line
  }, [loopWidth]);

  useEffect(() => {
    if (!loopWidth) return;
    let frame;

    const tick = (time) => {
      if (lastTimeRef.current === null) lastTimeRef.current = time;
      const delta = Math.min(time - lastTimeRef.current, 32);
      lastTimeRef.current = time;

      let move = 0;
      if (!paused && !draggingRef.current) {
        move += (direction * delta * speed) / 1000;
      }
      // glide for arrow clicks (eased)
      if (Math.abs(impulseRef.current) > 0.5) {
        const step = impulseRef.current * 0.1;
        impulseRef.current -= step;
        move += step;
      } else {
        impulseRef.current = 0;
      }

      if (move !== 0) {
        offsetRef.current = wrap(offsetRef.current + move);
        paint();
      }
      frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(frame);
      lastTimeRef.current = null;
    };
    // eslint-disable-next-line
  }, [paused, loopWidth, direction, speed]);

  useEffect(() => {
    if (!controlRef) return;
    controlRef.current = (dir) => {
      impulseRef.current += dir * 420;
    };
  }, [controlRef]);

  const onPointerDown = (e) => {
    draggingRef.current = true;
    dragXRef.current = e.clientX;
    e.currentTarget.setPointerCapture?.(e.pointerId);
  };
  const onPointerMove = (e) => {
    if (!draggingRef.current || !loopWidth) return;
    const dx = e.clientX - dragXRef.current;
    dragXRef.current = e.clientX;
    offsetRef.current = wrap(offsetRef.current - dx);
    paint();
  };
  const endDrag = () => {
    draggingRef.current = false;
  };

  return (
    <div
      className="cursor-grab py-2 active:cursor-grabbing"
      style={{ touchAction: "pan-y" }}
      onPointerEnter={(e) => e.pointerType === "mouse" && setPaused(true)}
      onPointerLeave={() => setPaused(false)}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onPointerCancel={endDrag}
    >
      <div ref={trackRef} className="flex w-max will-change-transform">
        {repeated.map((client, i) => (
          <ClientCard key={`${client.name}-${i}`} client={client} />
        ))}
      </div>
    </div>
  );
}

/* ---------- Reveal on scroll (used once, on the whole block) ---------- */
function useReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return [ref, visible];
}

export default function ClientsSection() {
  const rowOneControl = useRef(null);
  const rowTwoControl = useRef(null);
  const [wrapRef, visible] = useReveal();

  const move = (dir) => {
    rowOneControl.current?.(dir);
    rowTwoControl.current?.(-dir);
  };

  return (
    <section className="relative overflow-hidden bg-[#0B1628] py-16 sm:py-20 lg:py-28">
      <div
        ref={wrapRef}
        className={`relative transition-all duration-1000 ease-out ${
          visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        {/* Heading */}
        <div className="mx-auto mb-12 flex max-w-[1500px] flex-col items-center gap-8 px-5 text-center sm:px-8 lg:mb-16 lg:flex-row lg:items-end lg:justify-between lg:px-12 lg:text-left">
          <div className="max-w-[760px]">
            <p className="mx-auto mb-5 inline-flex items-center justify-center gap-2 rounded-full border border-[#C69A43]/40 bg-[#C69A43]/10 px-4 py-1.5 text-xs font-semibold text-[#E6C77A] lg:mx-0">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#E6C77A]" />
              Our clients
            </p>

            <p className="max-w-[700px] text-center text-4xl font-bold leading-[1.12] tracking-[-0.035em] text-white sm:text-5xl lg:text-left lg:text-[40px]">
              Trusted by the
              <br className="hidden sm:block" />
              brands that{" "}
              <span className="whitespace-nowrap bg-gradient-to-r from-[#E6C77A] via-[#C69A43] to-[#E6C77A] bg-clip-text text-transparent">
                build India.
              </span>
            </p>
          </div>

          <div className="flex w-full flex-col items-center gap-6 sm:flex-row sm:items-center lg:w-auto lg:items-end lg:gap-10">
            <p className="max-w-[360px] text-center text-sm leading-7 text-slate-300 sm:text-base lg:text-left">
              We connect the construction and infrastructure ecosystem with the
              companies shaping India's industrial future.
            </p>

            <div className="flex shrink-0 items-center justify-center gap-5">
              <div className="text-center leading-none">
                <div className="text-4xl font-bold text-white sm:text-5xl">
                  {clients.length}
                  <span className="text-[#C69A43]">+</span>
                </div>
                <div className="mt-1 text-xs text-slate-400">
                  Brand partners
                </div>
              </div>

              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => move(-1)}
                  aria-label="Previous clients"
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white backdrop-blur transition-all duration-300 hover:border-[#C69A43] hover:bg-[#C69A43] hover:text-[#0B1628] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#E6C77A] active:scale-90"
                >
                  <ArrowLeft size={19} />
                </button>

                <button
                  type="button"
                  onClick={() => move(1)}
                  aria-label="Next clients"
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white backdrop-blur transition-all duration-300 hover:border-[#C69A43] hover:bg-[#C69A43] hover:text-[#0B1628] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#E6C77A] active:scale-90"
                >
                  <ArrowRight size={19} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Two-row full-width marquee */}
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-[#0B1628] to-transparent sm:w-40" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-[#0B1628] to-transparent sm:w-40" />

          <MarqueeRow
            items={rowOne}
            direction={1}
            speed={55}
            controlRef={rowOneControl}
          />
          <MarqueeRow
            items={rowTwo}
            direction={-1}
            speed={55}
            controlRef={rowTwoControl}
          />
        </div>
      </div>
    </section>
  );
}
