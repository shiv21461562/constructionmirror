/*
  COVER STORY API
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

const dummyCover = [
  {
    _id: "c-1",
    slug:
      "commercial-vehicles-global-registration-trends",
    category: "Cover Story",
    title:
      "Commercial Vehicles: Global Registration Trends and Technological Shifts in the CV Segment!",
    excerpt:
      "A detailed look at how registrations and technology are reshaping the commercial vehicle market worldwide.",
    content: body,
    author: "Construction Mirror Bureau",
    createdAt: "2026-09-08",
    views: 610,
    image:
      "https://picsum.photos/seed/cm-cover-1/1200/800",
  },

  {
    _id: "c-2",
    slug:
      "excavators-market-dynamics-future-trends",
    category: "Cover Story",
    title:
      "What are the current market dynamics and future trends of Excavators Market?",
    excerpt:
      "Demand drivers, key players and what buyers can expect from excavators in the years ahead.",
    content: body,
    author: "Construction Mirror Bureau",
    createdAt: "2026-09-07",
    views: 720,
    image:
      "https://picsum.photos/seed/cm-cover-2/1200/800",
  },

  {
    _id: "c-3",
    slug:
      "india-construction-equipment-industry-25-billion-2030",
    category: "Cover Story",
    title:
      "India's construction equipment industry to reach $25 b by 2030",
    excerpt:
      "Growth forecasts, policy support and the opportunities ahead for equipment makers.",
    content: body,
    author: "Construction Mirror Bureau",
    createdAt: "2026-09-06",
    views: 880,
    image:
      "https://picsum.photos/seed/cm-cover-3/1200/800",
  },

  {
    _id: "c-4",
    slug:
      "india-steel-sector-remarkable-growth-defies-global-trends",
    category: "Cover Story",
    title:
      "India's Steel Sector Records Remarkable Growth: How India's Steel Production Defies Global Trends!",
    excerpt:
      "Why India's steel output keeps rising while much of the world slows down.",
    content: body,
    author: "Construction Mirror Bureau",
    createdAt: "2026-09-05",
    views: 940,
    image:
      "https://picsum.photos/seed/cm-cover-4/1200/800",
  },
];

/* =========================
   API
========================= */

export async function getCoverStories(
  limit = 4,
  signal
) {
  if (USE_DUMMY) {
    await wait(600);

    return dummyCover.slice(0, limit);
  }

  const json = await request(
    `/news?category=cover-story&limit=${limit}&sort=latest`,
    { signal }
  );

  if (Array.isArray(json)) {
    return json;
  }

  return json.data || json.news || json.results || [];
}