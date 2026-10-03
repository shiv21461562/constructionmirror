/*
  INTERNATIONAL NEWS API
*/

const USE_DUMMY = true;

const BASE_URL =
  import.meta.env.VITE_API_URL || "http://localhost:5000/api";

const wait = (ms) =>
  new Promise((resolve) => setTimeout(resolve, ms));

async function request(path, options = {}) {
  const res = await fetch(`${BASE_URL}${path}`, options);

  if (res.status === 404) {
    throw new Error("NOT_FOUND");
  }

  if (!res.ok) {
    throw new Error(`API error ${res.status}`);
  }

  return res.json();
}

/* =========================
   DUMMY DATA
========================= */

const body = [
  "India's construction sector is entering a decisive phase, with large-scale infrastructure programmes moving from planning to execution across the country.",
  "Officials associated with the project said the work will be carried out in phases, with priority given to corridors that ease congestion and improve freight movement.",
  "Equipment suppliers report a steady rise in orders for excavators, crushers and material-handling machines.",
  "Experts point out that skilled manpower and timely funding remain the two biggest factors behind project success.",
  "Looking ahead, stakeholders expect the sector to keep its momentum as new policy support, private investment and technology adoption come together.",
];

const dummyInternational = [
  {
    _id: "in1",
    slug: "global-construction-market-growth",
    category: "International",
    title:
      "Global Construction Market Continues to Expand Amid Strong Infrastructure Demand",
    content: body,
    createdAt: "2026-09-24",
    views: 820,
    image:
      "https://picsum.photos/seed/cm-international-1/1200/800",
  },

  {
    _id: "in2",
    slug: "europe-infrastructure-investment",
    category: "International",
    title:
      "Europe Steps Up Infrastructure Investment with New Development Projects",
    content: body,
    createdAt: "2026-09-23",
    views: 690,
    image:
      "https://picsum.photos/seed/cm-international-2/1200/800",
  },

  {
    _id: "in3",
    slug: "middle-east-construction-boom",
    category: "International",
    title:
      "Middle East Construction Boom Drives Demand for Advanced Equipment",
    content: body,
    createdAt: "2026-09-22",
    views: 940,
    image:
      "https://picsum.photos/seed/cm-international-3/1200/800",
  },

  {
    _id: "in4",
    slug: "global-heavy-equipment-technology",
    category: "International",
    title:
      "Global Heavy Equipment Industry Accelerates Technology Adoption",
    content: body,
    createdAt: "2026-09-21",
    views: 760,
    image:
      "https://picsum.photos/seed/cm-international-4/1200/800",
  },
];

/* =========================
   API
========================= */

export async function getInternationalNews(
  limit = 4,
  signal
) {
  if (USE_DUMMY) {
    await wait(600);

    return dummyInternational.slice(0, limit);
  }

  const json = await request(
    `/news?category=international&limit=${limit}&sort=latest`,
    { signal }
  );

  if (Array.isArray(json)) {
    return json;
  }

  return json.data || json.news || json.results || [];
}