/*
  INTERVIEWS API
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
   INTERVIEW CONTENT
========================= */

const interviewBody = [
  "Q. How would you describe the current state of the construction and infrastructure sector in India?",
  "A. The sector is seeing strong momentum. Large public projects, growing private investment and faster approvals are together creating steady demand for modern equipment and skilled teams.",

  "Q. What are the biggest challenges you see for the industry today?",
  "A. Timely funding, availability of skilled manpower and supply-chain stability remain the key concerns.",

  "Q. How is technology changing the way projects are executed?",
  "A. Digital monitoring, telematics and better machine efficiency are helping teams save time and fuel.",

  "Q. What is your outlook for the coming years?",
  "A. We are optimistic. With continued policy support and a strong project pipeline, the next few years should be a period of solid and sustainable growth for the industry.",
];

const dummyInterviews = [
  {
    _id: "i1",
    slug:
      "er-mahesh-prajapati-stalwart-india-incorporation",
    category: "Interview",
    title:
      "Er. Mahesh Prajapati, Director, Stalwart India Incorporation",
    excerpt:
      "In conversation on equipment demand, technology adoption and the road ahead for Indian contractors.",
    content: interviewBody,
    author: "Construction Mirror Bureau",
    createdAt: "2026-09-16",
    views: 430,
    image:
      "https://picsum.photos/seed/cm-interview-1/1200/800",
  },

  {
    _id: "i2",
    slug:
      "mr-manish-mathur-ace-action-construction-equipment",
    category: "Interview",
    title:
      "Mr. Manish Mathur, CEO - Cranes, ACE - Action Construction Equipment Ltd.",
    excerpt:
      "The crane market, product innovation and ACE's plans for the next phase of growth.",
    content: interviewBody,
    author: "Construction Mirror Bureau",
    createdAt: "2026-09-15",
    views: 510,
    image:
      "https://picsum.photos/seed/cm-interview-2/1200/800",
  },

  {
    _id: "i3",
    slug:
      "mr-brajesh-nahar-apl-apollo-building-products",
    category: "Interview",
    title:
      "Mr. Brajesh Nahar, Director & COO, APL Apollo Building Products Ltd.",
    excerpt:
      "How steel-based building products are changing the way modern structures are built.",
    content: interviewBody,
    author: "Construction Mirror Bureau",
    createdAt: "2026-09-14",
    views: 470,
    image:
      "https://picsum.photos/seed/cm-interview-3/1200/800",
  },

  {
    _id: "i4",
    slug: "mr-viren-rodrigues-bkt-mining-agri",
    category: "Interview",
    title:
      "Mr. Viren Rodrigues, Head of Mining & Agri Business, BKT",
    excerpt:
      "Tyre technology, mining demand and what customers expect from off-highway tyres.",
    content: interviewBody,
    author: "Construction Mirror Bureau",
    createdAt: "2026-09-13",
    views: 390,
    image:
      "https://picsum.photos/seed/cm-interview-4/1200/800",
  },
];

/* =========================
   API
========================= */

export async function getInterviews(
  limit = 4,
  signal
) {
  if (USE_DUMMY) {
    await wait(600);

    return dummyInterviews.slice(0, limit);
  }

  const json = await request(
    `/news?category=interview&limit=${limit}&sort=latest`,
    { signal }
  );

  if (Array.isArray(json)) {
    return json;
  }

  return json.data || json.news || json.results || [];
}