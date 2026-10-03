/*
  GUEST ARTICLE API
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
   DUMMY CONTENT
========================= */

const guestBody = [
  "Every large infrastructure project depends on a chain of decisions that rarely make headlines. From planning and procurement to logistics and execution, small choices made early often decide whether a project finishes on time or falls behind.",

  "In this article, the author looks at the practical realities faced on the ground, and why teams that invest in preparation, clear communication and the right partners consistently deliver better outcomes.",

  "Data plays a growing role here. Projects that track equipment usage, material movement and progress in real time are able to spot delays early and correct course before costs rise.",

  "The author also highlights the importance of skilled people and safe working practices, arguing that technology alone cannot replace experience and good site leadership.",

  "The takeaway is simple: sustainable growth in the sector will come from doing the basics well, at scale, and learning quickly from every project.",
];

const dummyGuest = [
  {
    _id: "g1",
    slug:
      "moving-heavy-equipment-efficiently-invisible-journey",
    category: "Guest Article",
    title:
      "Moving Heavy Equipment Efficiently: The Invisible Journey Behind India's Biggest Infrastructure Projects",
    excerpt:
      "How careful logistics planning quietly decides the fate of India's largest projects.",
    content: guestBody,
    author: "Guest Author",
    createdAt: "2026-09-12",
    views: 350,
    image:
      "https://picsum.photos/seed/cm-guest-1/1200/800",
  },

  {
    _id: "g2",
    slug:
      "capacite-infraprojects-csr-mental-health-initiative",
    category: "Guest Article",
    title:
      "Capacit'e Infraprojects Ltd Strengthens CSR Commitment with Mental Health Initiative",
    excerpt:
      "A look at why worker wellbeing is becoming a serious priority on construction sites.",
    content: guestBody,
    author: "Guest Author",
    createdAt: "2026-09-11",
    views: 420,
    image:
      "https://picsum.photos/seed/cm-guest-2/1200/800",
  },

  {
    _id: "g3",
    slug:
      "green-steel-in-india-turning-point-sustainable-manufacturing",
    category: "Guest Article",
    title:
      "Green Steel in India: A Turning Point for Sustainable Manufacturing",
    excerpt:
      "What low-carbon steel means for builders, manufacturers and the wider economy.",
    content: guestBody,
    author: "Guest Author",
    createdAt: "2026-09-10",
    views: 380,
    image:
      "https://picsum.photos/seed/cm-guest-3/1200/800",
  },

  {
    _id: "g4",
    slug:
      "fix-the-data-fix-the-delay-infrastructure-equation",
    category: "Guest Article",
    title:
      "Fix the Data, Fix the Delay: The Infrastructure Equation",
    excerpt:
      "Why better project data is the fastest route to fewer delays.",
    content: guestBody,
    author: "Guest Author",
    createdAt: "2026-09-09",
    views: 460,
    image:
      "https://picsum.photos/seed/cm-guest-4/1200/800",
  },
];

/* =========================
   API
========================= */

export async function getGuestArticles(
  limit = 4,
  signal
) {
  if (USE_DUMMY) {
    await wait(600);

    return dummyGuest.slice(0, limit);
  }

  const json = await request(
    `/news?category=guest-article&limit=${limit}&sort=latest`,
    { signal }
  );

  if (Array.isArray(json)) {
    return json;
  }

  return json.data || json.news || json.results || [];
}