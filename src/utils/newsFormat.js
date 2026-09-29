/*
  NEWS FORMAT HELPERS
  Backend ke field names alag hon to sirf normalizeNews() badalna hai.
*/

const IMAGE_BASE = import.meta.env.VITE_IMAGE_URL || "";

export function formatDate(value, withTime = false) {
  if (!value) return "";
  const opts = { month: "short", day: "2-digit", year: "numeric" };
  if (withTime) Object.assign(opts, { hour: "2-digit", minute: "2-digit" });
  return new Date(value).toLocaleString("en-US", opts);
}

export function formatViews(n = 0) {
  return n >= 1000 ? `${(n / 1000).toFixed(1)}K Views` : `${n} Views`;
}

export function resolveImage(src) {
  if (!src) return "/news/placeholder.webp";
  return src.startsWith("http") ? src : `${IMAGE_BASE}${src}`;
}

function estimateReadTime(content) {
  const text = Array.isArray(content)
    ? content.join(" ")
    : String(content || "").replace(/<[^>]+>/g, " ");
  const words = text.split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 200));
}

export function normalizeNews(n) {
  const id = n._id || n.id;
  const content = n.content || n.body || n.description || "";

  return {
    id,
    slug: n.slug || id,
    category: n.category?.name || n.category || "News",
    title: n.title,
    excerpt: n.excerpt || n.summary || "",
    content,
    author: n.author?.name || n.author || "Construction Mirror Bureau",
    readTime: n.readTime || estimateReadTime(content),
    date: formatDate(n.publishedAt || n.createdAt || n.date),
    views: formatViews(n.views ?? n.viewCount ?? 0),
    image: resolveImage(n.image || n.thumbnail || n.featuredImage),
    link: `/news/${n.slug || id}`,
  };
}
