/*
  FEATURED NEWS API
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

const dummyFeatured = [
  {
    _id: "f1",
    slug: "a-machine-for-all-jobs-joker-in-the-pack",
    category: "Featured",
    title:
      "A Machine for All Jobs Like a joker in the pack - always the right card to play.",
    content: body,
    createdAt: "2026-09-20",
    views: 530,
    image:
      "https://picsum.photos/seed/cm-featured-1/1200/800",
  },

  {
    _id: "f2",
    slug:
      "empowering-kerala-industrial-landscape-hailstone",
    category: "Featured",
    title:
      "Empowering Kerala's Industrial Landscape: Hon'ble Minister Shri Rajeeve P Visits Hailstone Innovations",
    content: body,
    createdAt: "2026-09-19",
    views: 610,
    image:
      "https://picsum.photos/seed/cm-featured-2/1200/800",
  },

  {
    _id: "f3",
    slug: "india-charts-51-new-river-cruise-circuits",
    category: "Featured",
    title:
      "India Charts 51 New River Cruise Circuits Under Cruise Bharat Mission, Infrastructure Push by 2027",
    content: body,
    createdAt: "2026-09-18",
    views: 780,
    image:
      "https://picsum.photos/seed/cm-featured-3/1200/800",
  },

  {
    _id: "f4",
    slug:
      "nhai-invites-fresh-bids-revamped-tot-model",
    category: "Featured",
    title:
      "NHAI Invites Fresh Bids Under Revamped ToT Model to Boost Highway Monetisation",
    content: body,
    createdAt: "2026-09-17",
    views: 995,
    image:
      "https://picsum.photos/seed/cm-featured-4/1200/800",
  },
];

/* =========================
   API
========================= */

export async function getFeaturedNews(
  limit = 4,
  signal
) {
  if (USE_DUMMY) {
    await wait(600);

    return dummyFeatured.slice(0, limit);
  }

  const json = await request(
    `/news?featured=true&limit=${limit}&sort=latest`,
    { signal }
  );

  if (Array.isArray(json)) {
    return json;
  }

  return json.data || json.news || json.results || [];
}