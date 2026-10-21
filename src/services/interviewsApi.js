import { byType } from "../data/news";

const wait = (ms) => new Promise((r) => setTimeout(r, ms));

export async function getInterviews(limit = 4) {
  await wait(300);
  return byType("interview").slice(0, limit);
}