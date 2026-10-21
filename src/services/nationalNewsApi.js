import { byType } from "../data/news";

const wait = (ms) => new Promise((r) => setTimeout(r, ms));

export async function getNationalNews(limit = 4) {
  await wait(300);
  return byType("national").slice(0, limit);
}