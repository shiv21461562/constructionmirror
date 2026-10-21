const body = [
  "India's construction sector is entering a decisive phase, with large-scale infrastructure programmes moving from planning to execution across the country.",
  "Officials associated with the project said the work will be carried out in phases, with priority given to corridors that ease congestion and improve freight movement.",
  "Equipment suppliers report a steady rise in orders for excavators, crushers and material-handling machines.",
  "Experts point out that skilled manpower and timely funding remain the two biggest factors behind project success.",
  "Looking ahead, stakeholders expect the sector to keep its momentum as new policy support, private investment and technology adoption come together.",
];

const guestBody = [
  "Every large infrastructure project depends on a chain of decisions that rarely make headlines. From planning and procurement to logistics and execution, small choices made early often decide whether a project finishes on time or falls behind.",
  "In this article, the author looks at the practical realities faced on the ground, and why teams that invest in preparation, clear communication and the right partners consistently deliver better outcomes.",
  "Data plays a growing role here. Projects that track equipment usage, material movement and progress in real time are able to spot delays early and correct course before costs rise.",
  "The author also highlights the importance of skilled people and safe working practices, arguing that technology alone cannot replace experience and good site leadership.",
  "The takeaway is simple: sustainable growth in the sector will come from doing the basics well, at scale, and learning quickly from every project.",
];

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

const img = (seed) => `https://picsum.photos/seed/${seed}/1200/800`;

export const newsData = [
  /* ---------- NATIONAL ---------- */
  { _id: "n1", type: "national", slug: "vo-chidambaranar-port-india-green-fuel-conclave-26", category: "National", title: "V.O. Chidambaranar Port Hosts India Green Fuel Conclave '26 in Thoothukudi", content: body, createdAt: "2026-09-24", views: 640, image: img("cm-national-1") },
  { _id: "n2", type: "national", slug: "apollo-pipes-enters-tiles-business-mazzini-tiles", category: "National", title: "Apollo Pipes Enters Tiles Business, Acquires 76% Stake in Mazzini Tiles for ₹40.42 Crore", content: body, createdAt: "2026-09-23", views: 720, image: img("cm-national-2") },
  { _id: "n3", type: "national", slug: "railway-board-approves-vande-bharat-depot-tatanagar", category: "National", title: "Railway Board Approves ₹383.78 Crore Vande Bharat Maintenance Depot at Tatanagar", content: body, createdAt: "2026-09-22", views: 905, image: img("cm-national-3") },
  { _id: "n4", type: "national", slug: "mazagon-dock-greenfield-shipyard-dugarajapatnam", category: "National", title: "Mazagon Dock to Invest ₹15,000 Crore in Greenfield Shipyard at Dugarajapatnam", content: body, createdAt: "2026-09-21", views: 1300, image: img("cm-national-4") },

  /* ---------- INTERNATIONAL ---------- */
  { _id: "i1", type: "international", slug: "global-cement-demand-rises", category: "International", title: "Global Cement Demand Rises as Infrastructure Spending Picks Up", content: body, createdAt: "2026-09-20", views: 410, image: img("cm-intl-1") },
  { _id: "i2", type: "international", slug: "singapore-new-smart-city-project", category: "International", title: "Singapore Announces New Smart City Project", content: body, createdAt: "2026-09-19", views: 520, image: img("cm-intl-2") },
  { _id: "i3", type: "international", slug: "europe-green-building-rules", category: "International", title: "Europe Tightens Green Building Rules for New Projects", content: body, createdAt: "2026-09-18", views: 480, image: img("cm-intl-3") },
  { _id: "i4", type: "international", slug: "middle-east-mega-projects-update", category: "International", title: "Middle East Mega Projects: Latest Construction Update", content: body, createdAt: "2026-09-17", views: 700, image: img("cm-intl-4") },

  /* ---------- FEATURED ---------- */
  { _id: "f1", type: "featured", slug: "a-machine-for-all-jobs-joker-in-the-pack", category: "Featured", title: "A Machine for All Jobs Like a joker in the pack - always the right card to play.", content: body, createdAt: "2026-09-20", views: 530, image: img("cm-featured-1") },
  { _id: "f2", type: "featured", slug: "empowering-kerala-industrial-landscape-hailstone", category: "Featured", title: "Empowering Kerala's Industrial Landscape: Hon'ble Minister Shri Rajeeve P Visits Hailstone Innovations", content: body, createdAt: "2026-09-19", views: 610, image: img("cm-featured-2") },
  { _id: "f3", type: "featured", slug: "india-charts-51-new-river-cruise-circuits", category: "Featured", title: "India Charts 51 New River Cruise Circuits Under Cruise Bharat Mission, Infrastructure Push by 2027", content: body, createdAt: "2026-09-18", views: 780, image: img("cm-featured-3") },
  { _id: "f4", type: "featured", slug: "nhai-invites-fresh-bids-revamped-tot-model", category: "Featured", title: "NHAI Invites Fresh Bids Under Revamped ToT Model to Boost Highway Monetisation", content: body, createdAt: "2026-09-17", views: 995, image: img("cm-featured-4") },

  /* ---------- COVER STORY ---------- */
  { _id: "c1", type: "cover", slug: "commercial-vehicles-global-registration-trends", category: "Cover Story", title: "Commercial Vehicles: Global Registration Trends and Technological Shifts in the CV Segment!", excerpt: "A detailed look at how registrations and technology are reshaping the commercial vehicle market worldwide.", content: body, author: "Construction Mirror Bureau", createdAt: "2026-09-08", views: 610, image: img("cm-cover-1") },
  { _id: "c2", type: "cover", slug: "excavators-market-dynamics-future-trends", category: "Cover Story", title: "What are the current market dynamics and future trends of Excavators Market?", excerpt: "Demand drivers, key players and what buyers can expect from excavators in the years ahead.", content: body, author: "Construction Mirror Bureau", createdAt: "2026-09-07", views: 720, image: img("cm-cover-2") },
  { _id: "c3", type: "cover", slug: "india-construction-equipment-industry-25-billion-2030", category: "Cover Story", title: "India's construction equipment industry to reach $25 b by 2030", excerpt: "Growth forecasts, policy support and the opportunities ahead for equipment makers.", content: body, author: "Construction Mirror Bureau", createdAt: "2026-09-06", views: 880, image: img("cm-cover-3") },
  { _id: "c4", type: "cover", slug: "india-steel-sector-remarkable-growth-defies-global-trends", category: "Cover Story", title: "India's Steel Sector Records Remarkable Growth: How India's Steel Production Defies Global Trends!", excerpt: "Why India's steel output keeps rising while much of the world slows down.", content: body, author: "Construction Mirror Bureau", createdAt: "2026-09-05", views: 940, image: img("cm-cover-4") },

  /* ---------- GUEST ARTICLE ---------- */
  { _id: "g1", type: "guest", slug: "moving-heavy-equipment-efficiently-invisible-journey", category: "Guest Article", title: "Moving Heavy Equipment Efficiently: The Invisible Journey Behind India's Biggest Infrastructure Projects", excerpt: "How careful logistics planning quietly decides the fate of India's largest projects.", content: guestBody, author: "Guest Author", createdAt: "2026-09-12", views: 350, image: img("cm-guest-1") },
  { _id: "g2", type: "guest", slug: "capacite-infraprojects-csr-mental-health-initiative", category: "Guest Article", title: "Capacit'e Infraprojects Ltd Strengthens CSR Commitment with Mental Health Initiative", excerpt: "A look at why worker wellbeing is becoming a serious priority on construction sites.", content: guestBody, author: "Guest Author", createdAt: "2026-09-11", views: 420, image: img("cm-guest-2") },
  { _id: "g3", type: "guest", slug: "green-steel-in-india-turning-point-sustainable-manufacturing", category: "Guest Article", title: "Green Steel in India: A Turning Point for Sustainable Manufacturing", excerpt: "What low-carbon steel means for builders, manufacturers and the wider economy.", content: guestBody, author: "Guest Author", createdAt: "2026-09-10", views: 380, image: img("cm-guest-3") },
  { _id: "g4", type: "guest", slug: "fix-the-data-fix-the-delay-infrastructure-equation", category: "Guest Article", title: "Fix the Data, Fix the Delay: The Infrastructure Equation", excerpt: "Why better project data is the fastest route to fewer delays.", content: guestBody, author: "Guest Author", createdAt: "2026-09-09", views: 460, image: img("cm-guest-4") },

  /* ---------- INTERVIEW ---------- */
  { _id: "iv1", type: "interview", slug: "er-mahesh-prajapati-stalwart-india-incorporation", category: "Interview", title: "Er. Mahesh Prajapati, Director, Stalwart India Incorporation", excerpt: "In conversation on equipment demand, technology adoption and the road ahead for Indian contractors.", content: interviewBody, author: "Construction Mirror Bureau", createdAt: "2026-09-16", views: 430, image: img("cm-interview-1") },
  { _id: "iv2", type: "interview", slug: "mr-manish-mathur-ace-action-construction-equipment", category: "Interview", title: "Mr. Manish Mathur, CEO - Cranes, ACE - Action Construction Equipment Ltd.", excerpt: "The crane market, product innovation and ACE's plans for the next phase of growth.", content: interviewBody, author: "Construction Mirror Bureau", createdAt: "2026-09-15", views: 510, image: img("cm-interview-2") },
  { _id: "iv3", type: "interview", slug: "mr-brajesh-nahar-apl-apollo-building-products", category: "Interview", title: "Mr. Brajesh Nahar, Director & COO, APL Apollo Building Products Ltd.", excerpt: "How steel-based building products are changing the way modern structures are built.", content: interviewBody, author: "Construction Mirror Bureau", createdAt: "2026-09-14", views: 470, image: img("cm-interview-3") },
  { _id: "iv4", type: "interview", slug: "mr-viren-rodrigues-bkt-mining-agri", category: "Interview", title: "Mr. Viren Rodrigues, Head of Mining & Agri Business, BKT", excerpt: "Tyre technology, mining demand and what customers expect from off-highway tyres.", content: interviewBody, author: "Construction Mirror Bureau", createdAt: "2026-09-13", views: 390, image: img("cm-interview-4") },
];

// type ke hisaab se list nikalne ka helper
export const byType = (type) => newsData.filter((n) => n.type === type);