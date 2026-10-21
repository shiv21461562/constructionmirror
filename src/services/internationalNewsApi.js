import { byType } from "../data/news";

const wait = (ms) => new Promise((r) => setTimeout(r, ms));

export async function getInternationalNews(limit = 4) {
  await wait(300);
  return byType("international").slice(0, limit);
}