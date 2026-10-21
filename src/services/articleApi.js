import { newsData } from "../data/news";

const wait = (ms) => new Promise((r) => setTimeout(r, ms));

export async function getNewsBySlug(slug) {
  await wait(300);
  const item = newsData.find((n) => n.slug === slug || n._id === slug);
  if (!item) throw new Error("NOT_FOUND");
  return item;
}

export async function getRelatedNews(slug, limit = 4) {
  await wait(300);
  return newsData.filter((n) => n.slug !== slug).slice(0, limit);
}