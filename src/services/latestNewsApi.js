import { newsData } from "../data/news";

const wait = (ms) => new Promise((r) => setTimeout(r, ms));

export async function getLatestNews(limit = 4) {
  await wait(300);
  return [...newsData]
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    .slice(0, limit);
}