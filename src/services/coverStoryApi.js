import { byType } from "../data/news";

const wait = (ms) => new Promise((r) => setTimeout(r, ms));

export async function getCoverStories(limit = 4) {
  await wait(300);
  return byType("cover").slice(0, limit);
}