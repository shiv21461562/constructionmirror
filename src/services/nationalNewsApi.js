/*
  NATIONAL NEWS API
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

const dummyNational = [
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
    _id: "n2",
    slug:
      "apollo-pipes-enters-tiles-business-mazzini-tiles",
    category: "National",
    title:
      "Apollo Pipes Enters Tiles Business, Acquires 76% Stake in Mazzini Tiles for ₹40.42 Crore",
    content: body,
    createdAt: "2026-09-23",
    views: 720,
    image:
      "https://picsum.photos/seed/cm-national-2/1200/800",
  },

  {
    _id: "n3",
    slug:
      "railway-board-approves-vande-bharat-depot-tatanagar",
    category: "National",
    title:
      "Railway Board Approves ₹383.78 Crore Vande Bharat Maintenance Depot at Tatanagar",
    content: body,
    createdAt: "2026-09-22",
    views: 905,
    image:
      "https://picsum.photos/seed/cm-national-3/1200/800",
  },

  {
    _id: "n4",
    slug:
      "mazagon-dock-greenfield-shipyard-dugarajapatnam",
    category: "National",
    title:
      "Mazagon Dock to Invest ₹15,000 Crore in Greenfield Shipyard at Dugarajapatnam",
    content: body,
    createdAt: "2026-09-21",
    views: 1300,
    image:
      "https://picsum.photos/seed/cm-national-4/1200/800",
  },
];

/* =========================
   API
========================= */

export async function getNationalNews(limit = 4, signal) {
  if (USE_DUMMY) {
    await wait(600);

    return dummyNational.slice(0, limit);
  }

  const json = await request(
    `/news?category=national&limit=${limit}&sort=latest`,
    { signal }
  );

  if (Array.isArray(json)) {
    return json;
  }

  return json.data || json.news || json.results || [];
}