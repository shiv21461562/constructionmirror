/*
  COMMENTS API
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
   DUMMY COMMENTS
========================= */

const seedComments = [
  {
    id: "c1",
    newsId: "1",
    name: "Rohit Sharma",
    comment:
      "Good to see such projects moving ahead. Hope the timelines are followed.",
    createdAt: "2026-09-28T10:30:00",
  },

  {
    id: "c2",
    newsId: "1",
    name: "Anita Verma",
    comment:
      "Very informative article. Waiting for more updates on this.",
    createdAt: "2026-09-28T14:10:00",
  },
];

/* =========================
   LOCAL STORAGE
========================= */

const commentsKey = (newsId) =>
  `cm_dummy_comments_${newsId}`;

function readStoredComments(newsId) {
  try {
    return (
      JSON.parse(
        localStorage.getItem(commentsKey(newsId))
      ) || []
    );
  } catch {
    return [];
  }
}

/* =========================
   GET COMMENTS
========================= */

export async function getComments(newsId, signal) {
  if (USE_DUMMY) {
    await wait(300);

    const all = [
      ...seedComments.filter(
        (comment) => comment.newsId === newsId
      ),

      ...readStoredComments(newsId),
    ];

    return all.sort(
      (a, b) =>
        new Date(b.createdAt) -
        new Date(a.createdAt)
    );
  }

  const json = await request(
    `/news/${newsId}/comments`,
    { signal }
  );

  if (Array.isArray(json)) {
    return json;
  }

  return json.data || json.comments || [];
}

/* =========================
   POST COMMENT
========================= */

export async function postComment(
  newsId,
  payload
) {
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
      const stored =
        readStoredComments(newsId);

      localStorage.setItem(
        commentsKey(newsId),
        JSON.stringify([
          ...stored,
          created,
        ])
      );
    } catch {
      // storage unavailable
    }

    return created;
  }

  const json = await request(
    `/news/${newsId}/comments`,
    {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(payload),
    }
  );

  return unwrap(json);
}