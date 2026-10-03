/*
  EXCLUSIVE INTERVIEWS / VIDEOS API
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
   DUMMY VIDEOS
========================= */

const dummyExclusive = [
  {
    _id: "v1",
    title: "Tata Hitachi",
    videoId: "n7OejtslT4o",
    thumbnail:
      "https://picsum.photos/seed/cm-video-1/800/450",
  },

  {
    _id: "v2",
    title: "Tridant",
    videoId: "aqz-KE-bpKQ",
    thumbnail:
      "https://picsum.photos/seed/cm-video-2/800/450",
  },

  {
    _id: "v3",
    title: "Rubber King",
    videoId: "aqz-KE-bpKQ",
    thumbnail:
      "https://picsum.photos/seed/cm-video-3/800/450",
  },

  {
    _id: "v4",
    title: "Peri India",
    videoId: "aqz-KE-bpKQ",
    thumbnail:
      "https://picsum.photos/seed/cm-video-4/800/450",
  },
];

/* =========================
   API
========================= */

export async function getExclusiveInterviews(
  limit = 4,
  signal
) {
  if (USE_DUMMY) {
    await wait(600);

    return dummyExclusive.slice(0, limit);
  }

  const json = await request(
    `/videos?type=exclusive-interview&limit=${limit}&sort=latest`,
    { signal }
  );

  if (Array.isArray(json)) {
    return json;
  }

  return json.data || json.videos || json.results || [];
}