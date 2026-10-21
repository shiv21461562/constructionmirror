import { byType } from "../data/news";

const wait = (ms) => new Promise((r) => setTimeout(r, ms));

export async function getGuestArticles(limit = 4) {
  await wait(300);
  return byType("guest").slice(0, limit);
}