import { motion } from "framer-motion";

/* =========================================================
   DATA
========================================================= */

const YEAR = 2026;

const calendar = [
  {
    month: "January",
    cover: "Lubricant Industry / Construction Equipment",
    features: [
      "Road Construction & Highway",
      "Mobile Crushing Equipment & Sand Washing Plant",
      "Asphalt Batch Mix Plant",
      "Material Handling Equipment",
    ],
    focus: [
      "Mobile Impact Crushers",
      "Excavators / Cranes",
      "Paver Sensor Machine",
      "Steel Industries",
      "Wheel Loader, Compactors",
      "Tyre, Commercial Vehicles",
      "Concrete Batching Solutions",
    ],
    events: [
      {
        name: "Jharkhand Mining & Construction Show",
        date: "29-31 Jan 2026",
        place: "Ranchi, Jharkhand",
      },
    ],
  },

  {
    month: "February",
    cover: "Commercial Vehicles",
    features: [
      "Concrete Machinery, Semi Mobile Series",
      "Road Paver Sensor Machine",
      "Excavators, Cement",
      "Construction Equipment",
    ],
    focus: [
      "Concrete Mixer Truck, Cranes",
      "Mining, Concrete Batching Plant",
      "Asphalt Equipment, Compactors",
      "Crushers, Hydraulic Machines",
    ],
    events: [
      {
        name: "ICME 2026",
        date: "24-26 Feb",
        place: "Kolkata",
      },
      {
        name: "STEEL Construction Expo",
        date: "26-28 Feb",
        place: "Chennai",
      },
    ],
  },

  {
    month: "March",
    cover: "Road Construction & Highway",
    features: [
      "Port Machinery",
      "Infrastructure Equipment",
      "Rebar Processing Machines",
      "Drilling Machine",
      "Excavators, Backhoe Loaders, Tyres",
    ],
    focus: [
      "Wind Turbine",
      "Crushing Equipment & Sand Washing Plant",
      "Safety Product",
      "Underground Logistics",
      "Steel Tubes",
      "Material Handling Equipment",
    ],
    events: [
      {
        name: "Smart Cities India Expo 2026",
        date: "23-25 Mar",
        place: "New Delhi",
      },
      {
        name: "Convergence India 2026",
        date: "23-25 Mar",
        place: "New Delhi",
      },
    ],
  },

  {
    month: "April",
    cover: "Mining Equipment",
    features: [
      "Steel Industry",
      "Washing Systems",
      "Building Machinery",
      "Concrete Batching Plant",
    ],
    focus: [
      "Motor Graders",
      "Asphalt Equipment",
      "Compactors",
      "Tyre Industry",
    ],
    events: [
      {
        name: "Bharat Steel 2026",
        date: "16-17 Apr",
        place: "Bharat Mandapam",
      },
    ],
  },

  {
    month: "May",
    cover: "Construction Equipment",
    features: [
      "Road Construction & Highway",
      "Concrete Spraying Equipment",
    ],
    focus: [
      "Cranes, Mobile Cranes",
      "Paver Sensor Machine",
      "Piling Rigs",
      "Skid Loader",
    ],
    events: [
      {
        name: "Bharat Buildcon",
        date: "29 Apr - 02 May",
        place: "New Delhi",
      },
    ],
  },

  {
    month: "June",
    cover: "Excavators / Lubricant Industry",
    features: [
      "Cranes",
      "Cement",
      "Door Automation",
      "Steel Industry",
      "Scaffolding & Formwork",
    ],
    focus: [
      "Airports",
      "Tyre Industry",
      "Motor Graders",
      "Crushing & Sand Washing Equipment",
    ],
    events: [
      {
        name: "World of Concrete India 2026",
        date: "03-05 Jun",
        place: "Mumbai",
      },
      {
        name: "Earthcon Expo 2026",
        date: "19-21 Jun",
        place: "Hyderabad",
      },
    ],
  },

  {
    month: "July",
    cover: "Mining Equipment",
    features: [
      "Road Construction & Highway",
      "Automobiles",
      "Impactors",
      "Asphalt Batch Mix Plant",
    ],
    focus: [
      "Paver Sensor Machine",
      "Concrete Boom Pumps",
      "Backhoe Loaders",
      "Mining Material Handling Equipment",
    ],
    events: [],
  },

  {
    month: "August",
    cover: "Construction Equipment",
    features: [
      "Crushing Equipment & Sand Washing Plant",
      "Tyre Industry",
      "Cement Industries",
    ],
    focus: [
      "Compactors",
      "Dump Trucks",
      "Crushers",
      "Concrete Transportation Equipment",
      "Hydraulic Machines",
      "Steel Industries",
    ],
    events: [
      {
        name: "India Prefab Expo 2026",
        date: "11-13 Aug",
        place: "New Delhi",
      },
    ],
  },

  {
    month: "September",
    cover: "Commercial Vehicles & Infrastructure Equipment",
    features: [
      "Asphalt Batch Mix Plant",
      "Road Construction & Highway",
      "Cement",
      "Concrete Mixer Truck",
      "Material Handling Equipment",
    ],
    focus: [
      "Paver Sensor Machine",
      "Backhoe Loader",
      "Wheel Loaders",
      "Lubricants",
      "Underground Logistics",
    ],
    events: [
      {
        name: "Lubricant India Expo",
        date: "24-26 Sep",
        place: "New Delhi",
      },
      {
        name: "bauma CONEXPO INDIA 2026",
        date: "28 Sep - 01 Oct",
        place: "Greater Noida",
      },
    ],
  },

  {
    month: "October",
    cover: "Lubricant Industry",
    features: [
      "Mobile Crushers & Semi Mobile",
      "Crawler Excavators",
      "Compactors",
      "Hydraulic Pneumatic Equipment",
      "Passenger Cum Material Hoists",
      "Mining Safety Product",
    ],
    focus: [
      "Road Machinery",
      "Cold Milling Machines",
      "Concrete Batching Plant",
      "Hydraulic Machines",
      "Paver Sensor Machine",
      "Steel Industries",
      "Crushing & Sand Washing Equipment",
    ],
    events: [],
  },

  {
    month: "November",
    cover: "Anniversary Golden Issue",
    coverNote: "All topic cover",
    features: [
      "Steel Industry",
      "Road Building Construction Equipment",
      "Heavy Construction Equipment",
      "Commercial Vehicles",
      "Lubricants",
      "Real Estate",
    ],
    focus: [
      "Mining & Tunneling",
      "Crushers",
      "Excavators / Cranes",
      "Concrete Batching Solutions",
      "Wheel Loader",
      "Compactors",
      "Commercial Vehicles",
      "Concrete Transportation Equipment",
    ],
    events: [
      {
        name: "IMME 2026",
        date: "",
        place: "International Mining & Machinery Exhibition",
      },
    ],
  },

  {
    month: "December",
    cover: "Heavy Construction Equipment Market",
    features: [
      "Mining",
      "Feeders & Screens",
      "Steel Industry",
      "Lubricants",
      "Concrete Spraying Equipment",
    ],
    focus: [
      "Crushing Equipment & Sand Washing Plant",
      "Hydraulic Machines",
      "Concrete Mixer Truck",
    ],
    events: [],
  },
];

/* =========================================================
   ICONS
========================================================= */

function CalendarIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <rect x="3" y="4" width="18" height="17" rx="2" />
      <path d="M8 2v4M16 2v4M3 9h18" />
    </svg>
  );
}

function MapPinIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-3.5 w-3.5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

/* =========================================================
   TOPIC LIST
========================================================= */

function TopicList({ items, gold = false }) {
  return (
    <div className="space-y-2.5">
      {items.map((item, index) => (
        <motion.div
          key={`${item}-${index}`}
          initial={{ opacity: 0, x: -5 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.25,
            delay: index * 0.025,
          }}
          className="flex items-start gap-2.5"
        >
          <span
            className={`mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full ${
              gold ? "bg-[#C99A3B]" : "bg-slate-300"
            }`}
          />

          <span className="text-[13px] font-medium leading-5 text-slate-700">
            {item}
          </span>
        </motion.div>
      ))}
    </div>
  );
}

/* =========================================================
   EVENTS
========================================================= */

function EventList({ events }) {
  if (!events.length) {
    return (
      <span className="text-[13px] font-medium text-slate-400">
        No events scheduled
      </span>
    );
  }

  return (
    <div className="space-y-4">
      {events.map((event, index) => (
        <motion.div
          key={`${event.name}-${index}`}
          initial={{ opacity: 0, y: 5 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          className="border-l-2 border-[#C99A3B]/40 pl-3.5"
        >
          <p className="text-[13px] font-bold leading-5 text-slate-800">
            {event.name}
          </p>

          {event.date && (
            <div className="mt-1 flex items-center gap-1.5">
              <CalendarIcon />

              <span className="text-[11px] font-bold text-[#A87D25]">
                {event.date}
              </span>
            </div>
          )}

          <div className="mt-1 flex items-start gap-1.5 text-[11px] font-medium leading-5 text-slate-500">
            <MapPinIcon />

            <span>{event.place}</span>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

/* =========================================================
   MAIN
========================================================= */

function Editorial() {
  const now = new Date();

  const currentIndex =
    now.getFullYear() === YEAR ? now.getMonth() : -1;

  return (
    <main className="min-h-screen bg-[#F8FAFC] text-slate-900">
      {/* =====================================================
          HEADER
      ====================================================== */}

      <section className="border-b border-slate-200 bg-white px-4 pb-10 pt-16 sm:px-6 lg:pb-12 lg:pt-20">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            {/* Badge */}
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#C99A3B]/25 bg-[#C99A3B]/[0.06] px-4 py-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#C99A3B]" />

              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#9A7024]">
                Editorial Planning
              </span>
            </div>

            <h1 className="text-4xl font-bold tracking-[-0.04em] text-[#0B1120] sm:text-5xl">
              Editorial Calendar{" "}
              <span className="text-[#C99A3B]">- {YEAR}</span>
            </h1>

            <p className="mx-auto mt-4 max-w-2xl text-sm font-medium leading-6 text-slate-600">
              Month-wise editorial planning covering industry features,
              focus areas, cover stories and major industry events.
            </p>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          TABLE
      ====================================================== */}

      <section className="px-3 py-8 sm:px-5 lg:px-8 lg:py-12">
        <div className="mx-auto max-w-[1500px]">
          {/* Table wrapper */}
          <div className="overflow-hidden rounded-xl border border-slate-300 bg-white shadow-[0_8px_35px_rgba(15,23,42,0.06)]">
            {/* Mobile scroll */}
            <div className="overflow-x-auto">
              <table className="w-full min-w-[1150px] border-collapse table-fixed">
                {/* =================================================
                    TABLE HEADER
                ================================================== */}

                <thead>
                  <tr className="bg-[#062447] text-white">
                    {/* Issue */}
                    <th className="w-[12%] border-r border-white/20 px-5 py-5 text-left align-middle">
                      <div className="flex items-center gap-2">
                        <CalendarIcon />

                        <span className="text-[12px] font-bold uppercase tracking-wide">
                          Issue Date
                        </span>
                      </div>
                    </th>

                    {/* Cover */}
                    <th className="w-[21%] border-r border-white/20 px-5 py-5 text-left align-middle">
                      <span className="text-[12px] font-bold uppercase tracking-wide">
                        Cover Story
                      </span>
                    </th>

                    {/* Features */}
                    <th className="w-[23%] border-r border-white/20 px-5 py-5 text-left align-middle">
                      <span className="text-[12px] font-bold uppercase tracking-wide">
                        Industry Features
                      </span>
                    </th>

                    {/* Focus */}
                    <th className="w-[23%] border-r border-white/20 px-5 py-5 text-left align-middle">
                      <span className="text-[12px] font-bold uppercase tracking-wide">
                        Industry Focus
                      </span>
                    </th>

                    {/* Events */}
                    <th className="w-[21%] px-5 py-5 text-left align-middle">
                      <span className="text-[12px] font-bold uppercase tracking-wide">
                        Events
                      </span>
                    </th>
                  </tr>
                </thead>

                {/* =================================================
                    TABLE BODY
                ================================================== */}

                <tbody>
                  {calendar.map((item, index) => {
                    const isCurrent = index === currentIndex;

                    return (
                      <motion.tr
                        key={item.month}
                        initial={{
                          opacity: 0,
                          y: 8,
                        }}
                        whileInView={{
                          opacity: 1,
                          y: 0,
                        }}
                        viewport={{
                          once: true,
                          amount: 0.05,
                        }}
                        transition={{
                          duration: 0.35,
                          delay: index * 0.025,
                        }}
                        className={`group border-b border-slate-200 last:border-b-0 ${
                          isCurrent
                            ? "bg-[#FFFBF2]"
                            : index % 2 === 0
                              ? "bg-white"
                              : "bg-[#FAFAFA]"
                        }`}
                      >
                        {/* =========================================
                            ISSUE DATE
                        ========================================== */}

                        <td
                          className={`border-r border-slate-200 px-5 py-6 align-top ${
                            isCurrent ? "border-l-4 border-l-[#C99A3B]" : ""
                          }`}
                        >
                          <div className="flex flex-col gap-2">
                            <span
                              className={`text-[14px] font-bold ${
                                isCurrent
                                  ? "text-[#A87520]"
                                  : "text-[#E58B16]"
                              }`}
                            >
                              {item.month}-{YEAR}
                            </span>

                            {isCurrent && (
                              <span className="w-fit rounded-full bg-[#C99A3B] px-2.5 py-1 text-[9px] font-bold uppercase tracking-wide text-white">
                                Current
                              </span>
                            )}
                          </div>
                        </td>

                        {/* =========================================
                            COVER STORY
                        ========================================== */}

                        <td className="border-r border-slate-200 px-5 py-6 align-top">
                          <p className="text-[14px] font-semibold leading-6 text-[#17304F]">
                            {item.cover}
                          </p>

                          {item.coverNote && (
                            <p className="mt-2 text-xs font-medium text-slate-500">
                              {item.coverNote}
                            </p>
                          )}
                        </td>

                        {/* =========================================
                            FEATURES
                        ========================================== */}

                        <td className="border-r border-slate-200 px-5 py-6 align-top">
                          <TopicList items={item.features} gold />
                        </td>

                        {/* =========================================
                            FOCUS
                        ========================================== */}

                        <td className="border-r border-slate-200 px-5 py-6 align-top">
                          <TopicList items={item.focus} />
                        </td>

                        {/* =========================================
                            EVENTS
                        ========================================== */}

                        <td className="px-5 py-6 align-top">
                          <EventList events={item.events} />
                        </td>
                      </motion.tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

          {/* Mobile hint */}
          <div className="mt-3 flex items-center justify-center gap-2 text-[11px] font-medium text-slate-400 lg:hidden">
            <span>←</span>
            <span>Swipe horizontally to view the complete calendar</span>
            <span>→</span>
          </div>
        </div>
      </section>

      {/* =====================================================
          BOTTOM
      ====================================================== */}

      <section className="border-t border-slate-200 bg-white px-4 py-12 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl bg-[#062447] text-[#D9AE55]">
            <CalendarIcon />
          </div>

          <h2 className="mt-4 text-xl font-bold text-[#0B1120] sm:text-2xl">
            Construction Mirror Editorial Calendar
          </h2>

          <p className="mt-2 text-sm font-medium leading-6 text-slate-500">
            A structured overview of the stories, topics and events planned
            throughout {YEAR}.
          </p>
        </div>
      </section>
    </main>
  );
}

export default Editorial;