/*
  LATEST NEWS API
  -------------------------------
  Abhi dummy data use ho raha hai.
  Backend ready hone par USE_DUMMY = false kar do.
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

const dummyNews = [
  {
    _id: "1",
    slug: "mega-infrastructure-project-urban-connectivity",
    category: "Projects",
    title:
      "Mega Infrastructure Project Set to Transform Urban Connectivity",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    content: body,
    author: "Construction Mirror Bureau",
    createdAt: "2026-09-28",
    views: 1200,
    image: "https://picsum.photos/seed/cm-news-1/1200/800",
  },

  {
    _id: "2",
    slug: "next-gen-construction-technologies",
    category: "Technology",
    title:
      "Next-Gen Construction Technologies Driving Efficiency",
    content: body,
    createdAt: "2026-09-27",
    views: 842,
    image: "https://picsum.photos/seed/cm-news-2/1200/800",
  },

  {
    _id: "3",
    slug: "advanced-machinery-boosts-productivity",
    category: "Equipment",
    title:
      "Advanced Machinery Boosts Productivity on Large Projects",
    content: body,
    createdAt: "2026-09-26",
    views: 1100,
    image: "https://picsum.photos/seed/cm-news-3/1200/800",
  },

  {
    _id: "4",
    slug: "new-infrastructure-policy-accelerate-growth",
    category: "Policy",
    title:
      "New Infrastructure Policy to Accelerate Growth",
    content: body,
    createdAt: "2026-09-25",
    views: 960,
    image: "https://picsum.photos/seed/cm-news-4/1200/800",
  },
];

/* =========================
   API
========================= */

export async function getLatestNews(limit = 4, signal) {
  if (USE_DUMMY) {
    await wait(600);

    return dummyNews.slice(0, limit);
  }

  const json = await request(
    `/news?limit=${limit}&sort=latest`,
    { signal }
  );

  if (Array.isArray(json)) {
    return json;
  }

  return json.data || json.news || json.results || [];
}