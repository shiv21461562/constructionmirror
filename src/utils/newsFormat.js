const IMAGE_BASE = import.meta.env.VITE_IMAGE_URL || "";

export function formatDate(value) {
  if (!value) return "";
  return new Date(value).toLocaleDateString("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  });
}

export function formatViews(n = 0) {
  return n >= 1000 ? `${(n / 1000).toFixed(1)}K Views` : `${n} Views`;
}

export function resolveImage(src) {
  if (!src) return "/news/placeholder.webp";
  return src.startsWith("http") ? src : `${IMAGE_BASE}${src}`;
}

export function normalizeNews(n) {
  const id = n._id || n.id;
  const slug = n.slug || id;               // slug nahi mila to id fallback

  return {
    id,
    slug,
    category: n.category?.name || n.category || "News",
    title: n.title,
    excerpt: n.excerpt || n.description || n.summary || "",
    content: n.content || n.body || "",
    author: n.author?.name || n.author || "Construction Mirror",
    readTime: n.readTime || 3,
    date: formatDate(n.publishedAt || n.createdAt || n.date),
    views: formatViews(n.views ?? n.viewCount ?? 0),
    image: resolveImage(n.image || n.thumbnail || n.featuredImage),
    link: `/news/${slug}`,                 // sab jagah same link format
  };
}