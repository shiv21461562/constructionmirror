/*
  NEWS API SERVICE
  ------------------------------------------------------------
  Abhi dummy data dikh raha hai.
  Backend ready hone par sirf USE_DUMMY = false kar do.
  Components mein kuch badalne ki zarurat nahi.

  Backend se ye endpoints chahiye honge:
    GET  /news?limit=4&sort=latest        -> latest news list
    GET  /news/:slug                      -> single article
    GET  /news/:id/comments               -> comments list
    POST /news/:id/comments               -> naya comment {name,email,website,comment}
*/

const USE_DUMMY = true;

const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const unwrap = (json) => json?.data ?? json;

/* ---------------- DUMMY DATA (API jaisa hi shape) ---------------- */
const body = [
  "India's construction sector is entering a decisive phase, with large-scale infrastructure programmes moving from planning to execution across the country. Industry leaders say the coming quarters will test how quickly contractors, equipment makers and policymakers can align on delivery timelines.",
  "Officials associated with the project said the work will be carried out in phases, with priority given to corridors that ease congestion and improve freight movement. Modern equipment, digital monitoring and stricter safety practices are expected to reduce delays on site.",
  "Equipment suppliers report a steady rise in orders for excavators, crushers and material-handling machines, driven by road, rail and urban development projects. Many are also expanding service networks to keep machines running through long project cycles.",
  "Experts point out that skilled manpower and timely funding remain the two biggest factors behind project success. Training programmes and clearer payment cycles, they say, could unlock faster progress than any single technology upgrade.",
  "Looking ahead, stakeholders expect the sector to keep its momentum as new policy support, private investment and technology adoption come together. Construction Mirror will continue to track the developments as they unfold.",
];

const dummyNews = [
  {
    _id: "1",
    slug: "mega-infrastructure-project-urban-connectivity",
    category: "Projects",
    title: "Mega Infrastructure Project Set to Transform Urban Connectivity",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
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
    title: "Next-Gen Construction Technologies Driving Efficiency",
    content: body,
    createdAt: "2026-09-27",
    views: 842,
    image: "https://picsum.photos/seed/cm-news-2/1200/800",
  },
  {
    _id: "3",
    slug: "advanced-machinery-boosts-productivity",
    category: "Equipment",
    title: "Advanced Machinery Boosts Productivity on Large Projects",
    content: body,
    createdAt: "2026-09-26",
    views: 1100,
    image: "https://picsum.photos/seed/cm-news-3/1200/800",
  },
  {
    _id: "4",
    slug: "new-infrastructure-policy-accelerate-growth",
    category: "Policy",
    title: "New Infrastructure Policy to Accelerate Growth",
    content: body,
    createdAt: "2026-09-25",
    views: 960,
    image: "https://picsum.photos/seed/cm-news-4/1200/800",
  },
];

const dummyNational = [
  {
    _id: "n1",
    slug: "vo-chidambaranar-port-india-green-fuel-conclave-26",
    category: "National",
    title: "V.O. Chidambaranar Port Hosts India Green Fuel Conclave '26 in Thoothukudi",
    content: body,
    createdAt: "2026-09-24",
    views: 640,
    image: "https://picsum.photos/seed/cm-national-1/1200/800",
  },
  {
    _id: "n2",
    slug: "apollo-pipes-enters-tiles-business-mazzini-tiles",
    category: "National",
    title: "Apollo Pipes Enters Tiles Business, Acquires 76% Stake in Mazzini Tiles for \u20b940.42 Crore",
    content: body,
    createdAt: "2026-09-23",
    views: 720,
    image: "https://picsum.photos/seed/cm-national-2/1200/800",
  },
  {
    _id: "n3",
    slug: "railway-board-approves-vande-bharat-depot-tatanagar",
    category: "National",
    title: "Railway Board Approves \u20b9383.78 Crore Vande Bharat Maintenance Depot at Tatanagar",
    content: body,
    createdAt: "2026-09-22",
    views: 905,
    image: "https://picsum.photos/seed/cm-national-3/1200/800",
  },
  {
    _id: "n4",
    slug: "mazagon-dock-greenfield-shipyard-dugarajapatnam",
    category: "National",
    title: "Mazagon Dock to Invest \u20b915,000 Crore in Greenfield Shipyard at Dugarajapatnam",
    content: body,
    createdAt: "2026-09-21",
    views: 1300,
    image: "https://picsum.photos/seed/cm-national-4/1200/800",
  },
];

const dummyInternational = [
  {
    _id: "in1",
    slug: "global-construction-market-growth",
    category: "International",
    title: "Global Construction Market Continues to Expand Amid Strong Infrastructure Demand",
    content: body,
    createdAt: "2026-09-24",
    views: 820,
    image: "https://picsum.photos/seed/cm-international-1/1200/800",
  },
  {
    _id: "in2",
    slug: "europe-infrastructure-investment",
    category: "International",
    title: "Europe Steps Up Infrastructure Investment with New Development Projects",
    content: body,
    createdAt: "2026-09-23",
    views: 690,
    image: "https://picsum.photos/seed/cm-international-2/1200/800",
  },
  {
    _id: "in3",
    slug: "middle-east-construction-boom",
    category: "International",
    title: "Middle East Construction Boom Drives Demand for Advanced Equipment",
    content: body,
    createdAt: "2026-09-22",
    views: 940,
    image: "https://picsum.photos/seed/cm-international-3/1200/800",
  },
  {
    _id: "in4",
    slug: "global-heavy-equipment-technology",
    category: "International",
    title: "Global Heavy Equipment Industry Accelerates Technology Adoption",
    content: body,
    createdAt: "2026-09-21",
    views: 760,
    image: "https://picsum.photos/seed/cm-international-4/1200/800",
  },
];

const dummyFeatured = [
  {
    _id: "f1",
    slug: "a-machine-for-all-jobs-joker-in-the-pack",
    category: "Featured",
    title: "A Machine for All Jobs Like a joker in the pack - always the right card to play.",
    content: body,
    createdAt: "2026-09-20",
    views: 530,
    image: "https://picsum.photos/seed/cm-featured-1/1200/800",
  },
  {
    _id: "f2",
    slug: "empowering-kerala-industrial-landscape-hailstone",
    category: "Featured",
    title: "Empowering Kerala's Industrial Landscape: Hon'ble Minister Shri Rajeeve P Visits Hailstone Innovations",
    content: body,
    createdAt: "2026-09-19",
    views: 610,
    image: "https://picsum.photos/seed/cm-featured-2/1200/800",
  },
  {
    _id: "f3",
    slug: "india-charts-51-new-river-cruise-circuits",
    category: "Featured",
    title: "India Charts 51 New River Cruise Circuits Under Cruise Bharat Mission, Infrastructure Push by 2027",
    content: body,
    createdAt: "2026-09-18",
    views: 780,
    image: "https://picsum.photos/seed/cm-featured-3/1200/800",
  },
  {
    _id: "f4",
    slug: "nhai-invites-fresh-bids-revamped-tot-model",
    category: "Featured",
    title: "NHAI Invites Fresh Bids Under Revamped ToT Model to Boost Highway Monetisation",
    content: body,
    createdAt: "2026-09-17",
    views: 995,
    image: "https://picsum.photos/seed/cm-featured-4/1200/800",
  },
];

const interviewBody = [
  "Q. How would you describe the current state of the construction and infrastructure sector in India?",
  "A. The sector is seeing strong momentum. Large public projects, growing private investment and faster approvals are together creating steady demand for modern equipment and skilled teams.",
  "Q. What are the biggest challenges you see for the industry today?",
  "A. Timely funding, availability of skilled manpower and supply-chain stability remain the key concerns. Companies that plan early and invest in training are handling these much better.",
  "Q. How is technology changing the way projects are executed?",
  "A. Digital monitoring, telematics and better machine efficiency are helping teams save time and fuel. Buyers now look at total cost of ownership, not just the purchase price.",
  "Q. What is your outlook for the coming years?",
  "A. We are optimistic. With continued policy support and a strong project pipeline, the next few years should be a period of solid and sustainable growth for the industry.",
];

const dummyInterviews = [
  {
    _id: "i1",
    slug: "er-mahesh-prajapati-stalwart-india-incorporation",
    category: "Interview",
    title: "Er. Mahesh Prajapati, Director, Stalwart India Incorporation",
    excerpt: "In conversation on equipment demand, technology adoption and the road ahead for Indian contractors.",
    content: interviewBody,
    author: "Construction Mirror Bureau",
    createdAt: "2026-09-16",
    views: 430,
    image: "https://picsum.photos/seed/cm-interview-1/1200/800",
  },
  {
    _id: "i2",
    slug: "mr-manish-mathur-ace-action-construction-equipment",
    category: "Interview",
    title: "Mr. Manish Mathur, CEO - Cranes, ACE - Action Construction Equipment Ltd.",
    excerpt: "The crane market, product innovation and ACE's plans for the next phase of growth.",
    content: interviewBody,
    author: "Construction Mirror Bureau",
    createdAt: "2026-09-15",
    views: 510,
    image: "https://picsum.photos/seed/cm-interview-2/1200/800",
  },
  {
    _id: "i3",
    slug: "mr-brajesh-nahar-apl-apollo-building-products",
    category: "Interview",
    title: "Mr. Brajesh Nahar, Director & COO, APL Apollo Building Products Ltd.",
    excerpt: "How steel-based building products are changing the way modern structures are built.",
    content: interviewBody,
    author: "Construction Mirror Bureau",
    createdAt: "2026-09-14",
    views: 470,
    image: "https://picsum.photos/seed/cm-interview-3/1200/800",
  },
  {
    _id: "i4",
    slug: "mr-viren-rodrigues-bkt-mining-agri",
    category: "Interview",
    title: "Mr. Viren Rodrigues, Head of Mining & Agri Business, BKT",
    excerpt: "Tyre technology, mining demand and what customers expect from off-highway tyres.",
    content: interviewBody,
    author: "Construction Mirror Bureau",
    createdAt: "2026-09-13",
    views: 390,
    image: "https://picsum.photos/seed/cm-interview-4/1200/800",
  },
];

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
    slug: "moving-heavy-equipment-efficiently-invisible-journey",
    category: "Guest Article",
    title: "Moving Heavy Equipment Efficiently: The Invisible Journey Behind India's Biggest Infrastructure Projects",
    excerpt: "How careful logistics planning quietly decides the fate of India's largest projects.",
    content: guestBody,
    author: "Guest Author",
    createdAt: "2026-09-12",
    views: 350,
    image: "https://picsum.photos/seed/cm-guest-1/1200/800",
  },
  {
    _id: "g2",
    slug: "capacite-infraprojects-csr-mental-health-initiative",
    category: "Guest Article",
    title: "Capacit'e Infraprojects Ltd Strengthens CSR Commitment with Mental Health Initiative",
    excerpt: "A look at why worker wellbeing is becoming a serious priority on construction sites.",
    content: guestBody,
    author: "Guest Author",
    createdAt: "2026-09-11",
    views: 420,
    image: "https://picsum.photos/seed/cm-guest-2/1200/800",
  },
  {
    _id: "g3",
    slug: "green-steel-in-india-turning-point-sustainable-manufacturing",
    category: "Guest Article",
    title: "Green Steel in India: A Turning Point for Sustainable Manufacturing",
    excerpt: "What low-carbon steel means for builders, manufacturers and the wider economy.",
    content: guestBody,
    author: "Guest Author",
    createdAt: "2026-09-10",
    views: 380,
    image: "https://picsum.photos/seed/cm-guest-3/1200/800",
  },
  {
    _id: "g4",
    slug: "fix-the-data-fix-the-delay-infrastructure-equation",
    category: "Guest Article",
    title: "Fix the Data, Fix the Delay: The Infrastructure Equation",
    excerpt: "Why better project data is the fastest route to fewer delays.",
    content: guestBody,
    author: "Guest Author",
    createdAt: "2026-09-09",
    views: 460,
    image: "https://picsum.photos/seed/cm-guest-4/1200/800",
  },
];

const dummyCover = [
  {
    _id: "c-1",
    slug: "commercial-vehicles-global-registration-trends",
    category: "Cover Story",
    title: "Commercial Vehicles: Global Registration Trends and Technological Shifts in the CV Segment!",
    excerpt: "A detailed look at how registrations and technology are reshaping the commercial vehicle market worldwide.",
    content: body,
    author: "Construction Mirror Bureau",
    createdAt: "2026-09-08",
    views: 610,
    image: "https://picsum.photos/seed/cm-cover-1/1200/800",
  },
  {
    _id: "c-2",
    slug: "excavators-market-dynamics-future-trends",
    category: "Cover Story",
    title: "What are the current market dynamics and future trends of Excavators Market?",
    excerpt: "Demand drivers, key players and what buyers can expect from excavators in the years ahead.",
    content: body,
    author: "Construction Mirror Bureau",
    createdAt: "2026-09-07",
    views: 720,
    image: "https://picsum.photos/seed/cm-cover-2/1200/800",
  },
  {
    _id: "c-3",
    slug: "india-construction-equipment-industry-25-billion-2030",
    category: "Cover Story",
    title: "India's construction equipment industry to reach $25 b by 2030",
    excerpt: "Growth forecasts, policy support and the opportunities ahead for equipment makers.",
    content: body,
    author: "Construction Mirror Bureau",
    createdAt: "2026-09-06",
    views: 880,
    image: "https://picsum.photos/seed/cm-cover-3/1200/800",
  },
  {
    _id: "c-4",
    slug: "india-steel-sector-remarkable-growth-defies-global-trends",
    category: "Cover Story",
    title: "India's Steel Sector Records Remarkable Growth: How India's Steel Production Defies Global Trends!",
    excerpt: "Why India's steel output keeps rising while much of the world slows down.",
    content: body,
    author: "Construction Mirror Bureau",
    createdAt: "2026-09-05",
    views: 940,
    image: "https://picsum.photos/seed/cm-cover-4/1200/800",
  },
];

const seedComments = [
  {
    id: "c1",
    newsId: "1",
    name: "Rohit Sharma",
    comment: "Good to see such projects moving ahead. Hope the timelines are followed.",
    createdAt: "2026-09-28T10:30:00",
  },
  {
    id: "c2",
    newsId: "1",
    name: "Anita Verma",
    comment: "Very informative article. Waiting for more updates on this.",
    createdAt: "2026-09-28T14:10:00",
  },
];

/* Dummy comments browser ke localStorage mein save hote hain */
const commentsKey = (newsId) => `cm_dummy_comments_${newsId}`;

function readStoredComments(newsId) {
  try {
    return JSON.parse(localStorage.getItem(commentsKey(newsId))) || [];
  } catch {
    return [];
  }
}

/* ---------------- REAL API ---------------- */
async function request(path, options = {}) {
  const res = await fetch(`${BASE_URL}${path}`, options);
  if (res.status === 404) throw new Error("NOT_FOUND");
  if (!res.ok) throw new Error(`API error ${res.status}`);
  return res.json();
}

/* ---------------- LATEST NEWS ---------------- */
export async function getLatestNews(limit = 4, signal) {
  if (USE_DUMMY) {
    await wait(600);
    return dummyNews.slice(0, limit);
  }

  const json = await request(`/news?limit=${limit}&sort=latest`, { signal });
  if (Array.isArray(json)) return json;
  return json.data || json.news || json.results || [];
}

/* ---------------- NATIONAL NEWS ---------------- */
export async function getNationalNews(limit = 4, signal) {
  if (USE_DUMMY) {
    await wait(600);
    return dummyNational.slice(0, limit);
  }

  const json = await request(`/news?category=national&limit=${limit}&sort=latest`, { signal });
  if (Array.isArray(json)) return json;
  return json.data || json.news || json.results || [];
}

/* ---------------- INTERNATIONAL NEWS ---------------- */
export async function getInternationalNews(limit = 4, signal) {
  if (USE_DUMMY) {
    await wait(600);
    return dummyInternational.slice(0, limit);
  }

  const json = await request(`/news?category=international&limit=${limit}&sort=latest`, { signal });
  if (Array.isArray(json)) return json;
  return json.data || json.news || json.results || [];
}

/* ---------------- FEATURED NEWS ---------------- */
export async function getFeaturedNews(limit = 4, signal) {
  if (USE_DUMMY) {
    await wait(600);
    return dummyFeatured.slice(0, limit);
  }

  const json = await request(`/news?featured=true&limit=${limit}&sort=latest`, { signal });
  if (Array.isArray(json)) return json;
  return json.data || json.news || json.results || [];
}

/* ---------------- INTERVIEWS ---------------- */
export async function getInterviews(limit = 4, signal) {
  if (USE_DUMMY) {
    await wait(600);
    return dummyInterviews.slice(0, limit);
  }

  const json = await request(`/news?category=interview&limit=${limit}&sort=latest`, { signal });
  if (Array.isArray(json)) return json;
  return json.data || json.news || json.results || [];
}

/* ---------------- GUEST ARTICLES ---------------- */
export async function getGuestArticles(limit = 4, signal) {
  if (USE_DUMMY) {
    await wait(600);
    return dummyGuest.slice(0, limit);
  }

  const json = await request(`/news?category=guest-article&limit=${limit}&sort=latest`, { signal });
  if (Array.isArray(json)) return json;
  return json.data || json.news || json.results || [];
}

/* ---------------- COVER STORY ---------------- */
export async function getCoverStories(limit = 4, signal) {
  if (USE_DUMMY) {
    await wait(600);
    return dummyCover.slice(0, limit);
  }

  const json = await request(`/news?category=cover-story&limit=${limit}&sort=latest`, { signal });
  if (Array.isArray(json)) return json;
  return json.data || json.news || json.results || [];
}

/* ---------------- EXCLUSIVE INTERVIEWS (VIDEOS) ---------------- */
// videoId ki jagah poora YouTube link bhi daal sakte ho.
// Dummy mein ek sample video (Big Buck Bunny) lagi hai, asli video ID se badal dena.
const dummyExclusive = [
  { _id: "v1", title: "Tata Hitachi", videoId: "aqz-KE-bpKQ", thumbnail: "https://picsum.photos/seed/cm-video-1/800/450" },
  { _id: "v2", title: "Tridant", videoId: "aqz-KE-bpKQ", thumbnail: "https://picsum.photos/seed/cm-video-2/800/450" },
  { _id: "v3", title: "Rubber King", videoId: "aqz-KE-bpKQ", thumbnail: "https://picsum.photos/seed/cm-video-3/800/450" },
  { _id: "v4", title: "Peri India", videoId: "aqz-KE-bpKQ", thumbnail: "https://picsum.photos/seed/cm-video-4/800/450" },
];

export async function getExclusiveInterviews(limit = 4, signal) {
  if (USE_DUMMY) {
    await wait(600);
    return dummyExclusive.slice(0, limit);
  }

  const json = await request(`/videos?type=exclusive-interview&limit=${limit}&sort=latest`, { signal });
  if (Array.isArray(json)) return json;
  return json.data || json.videos || json.results || [];
}

/* ---------------- SINGLE ARTICLE ---------------- */
export async function getNewsBySlug(slug, signal) {
  if (USE_DUMMY) {
    await wait(500);
    const found = [
      ...dummyNews,
      ...dummyNational,
      ...dummyInternational,
      ...dummyFeatured,
      ...dummyInterviews,
      ...dummyGuest,
      ...dummyCover,
    ].find((n) => n.slug === slug || n._id === slug);
    if (!found) throw new Error("NOT_FOUND");
    return found;
  }

  return unwrap(await request(`/news/${slug}`, { signal }));
}

/* ---------------- RELATED / MORE NEWS ---------------- */
export async function getRelatedNews(slug, limit = 4, signal) {
  const list = await getLatestNews(limit + 1, signal);
  return list.filter((n) => (n.slug || n._id) !== slug).slice(0, limit);
}

/* ---------------- COMMENTS ---------------- */
export async function getComments(newsId, signal) {
  if (USE_DUMMY) {
    await wait(300);
    const all = [
      ...seedComments.filter((c) => c.newsId === newsId),
      ...readStoredComments(newsId),
    ];
    return all.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  }

  const json = await request(`/news/${newsId}/comments`, { signal });
  return Array.isArray(json) ? json : json.data || json.comments || [];
}

export async function postComment(newsId, payload) {
  if (USE_DUMMY) {
    await wait(500);
    const created = {
      id: `local-${Date.now()}`,
      newsId,
      name: payload.name,
      comment: payload.comment,
      createdAt: new Date().toISOString(),
    };
    try {
      const stored = readStoredComments(newsId);
      localStorage.setItem(commentsKey(newsId), JSON.stringify([...stored, created]));
    } catch {
      /* storage full / blocked: comment phir bhi screen par dikhega */
    }
    return created;
  }

  const json = await request(`/news/${newsId}/comments`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  return unwrap(json);
}
