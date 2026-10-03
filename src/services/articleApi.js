/*
  ARTICLE API
  -------------------------------
  Single article
  Related articles
*/

const USE_DUMMY = true;

const BASE_URL =
  import.meta.env.VITE_API_URL || "http://localhost:5000/api";

const wait = (ms) =>
  new Promise((resolve) => setTimeout(resolve, ms));

const unwrap = (json) =>
  json?.data ?? json;

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
   DUMMY ARTICLE DATA
========================= */

const body = [
  "India's construction sector is entering a decisive phase, with large-scale infrastructure programmes moving from planning to execution across the country.",

  "Officials associated with the project said the work will be carried out in phases, with priority given to corridors that ease congestion and improve freight movement.",

  "Equipment suppliers report a steady rise in orders for excavators, crushers and material-handling machines.",

  "Experts point out that skilled manpower and timely funding remain the two biggest factors behind project success.",

  "Looking ahead, stakeholders expect the sector to keep its momentum as new policy support, private investment and technology adoption come together.",
];

const dummyArticles = [
  {
    _id: "1",
    slug:
      "mega-infrastructure-project-urban-connectivity",
    category: "Projects",
    title:
      "Mega Infrastructure Project Set to Transform Urban Connectivity",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    content: body,
    author: "Construction Mirror Bureau",
    createdAt: "2026-09-28",
    views: 1200,
    image:
      "https://picsum.photos/seed/cm-news-1/1200/800",
  },

  {
    _id: "n1",
    slug:
      "vo-chidambaranar-port-india-green-fuel-conclave-26",
    category: "National",
    title:
      "V.O. Chidambaranar Port Hosts India Green Fuel Conclave '26 in Thoothukudi",
    content: body,
    createdAt: "2026-09-24",
    views: 640,
    image:
      "https://picsum.photos/seed/cm-national-1/1200/800",
  },

  {
    _id: "in1",
    slug:
      "global-construction-market-growth",
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
    _id: "f1",
    slug:
      "a-machine-for-all-jobs-joker-in-the-pack",
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
    _id: "g1",
    slug:
      "moving-heavy-equipment-efficiently-invisible-journey",
    category: "Guest Article",
    title:
      "Moving Heavy Equipment Efficiently: The Invisible Journey Behind India's Biggest Infrastructure Projects",
    excerpt:
      "How careful logistics planning quietly decides the fate of India's largest projects.",
    content: body,
    author: "Guest Author",
    createdAt: "2026-09-12",
    views: 350,
    image:
      "https://picsum.photos/seed/cm-guest-1/1200/800",
  },

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
];

/* =========================
   SINGLE ARTICLE
========================= */

export async function getNewsBySlug(
  slug,
  signal
) {
  if (USE_DUMMY) {
    await wait(500);

    const found = dummyArticles.find(
      (article) =>
        article.slug === slug ||
        article._id === slug
    );

    if (!found) {
      throw new Error("NOT_FOUND");
    }

    return found;
  }

  return unwrap(
    await request(`/news/${slug}`, {
      signal,
    })
  );
}

/* =========================
   RELATED NEWS
========================= */

export async function getRelatedNews(
  slug,
  limit = 4,
  signal
) {
  if (USE_DUMMY) {
    await wait(300);

    return dummyArticles
      .filter(
        (article) =>
          (article.slug || article._id) !== slug
      )
      .slice(0, limit);
  }

  const json = await request(
    `/news?limit=${limit + 1}&sort=latest`,
    { signal }
  );

  const list = Array.isArray(json)
    ? json
    : json.data ||
      json.news ||
      json.results ||
      [];

  return list
    .filter(
      (article) =>
        (article.slug || article._id) !== slug
    )
    .slice(0, limit);
}