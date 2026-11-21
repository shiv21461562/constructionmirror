/*
  ============================================================
  ADS MANAGER: 6 strips x 2 banners = 12 slots
  ============================================================
  Har slot me seedha image path likha hai.
  Bas `image` ka path badlo, website par wahi image aa jayegi.
  Images yahan rakho: public/banner/   (size 1600 x 250, webp)

  Slot khali karna ho -> image: ""  (khali) likh do
*/

const STRIPS = {
  /* ---------- 1. TOP (Hero section ke andar) ---------- */
  header: {
    left: { image: "/banner/GS-caltex.webp", link: "https://example.com" }, // Slot 1
    right: { image: "/banner/TCI.webp", link: "/contact" }, // Slot 2
  },

  /* ---------- 2. Hero ke neeche (Latest News se pehle) ---------- */

  afterHero: {
    left: { image: "/banner/GS-caltex.webp", link: "/contact" }, // Slot 3
    right: { image: "/banner/TCI.webp", link: "https://example.com" }, // Slot 4
  },

  /* ---------- 3. National News ke neeche ---------- */
  afterNational: {
    left: { image: "/banner/GS-caltex.webp", link: "/contact" }, // Slot 5
    right: { image: "/banner/GS-caltex.webp", link: "https://example.com" }, // Slot 6
  },

  /* ---------- 4. Interviews ke neeche ---------- */
  afterInterviews: {
    left: { image: "/banner/GS-caltex.webp", link: "https://example.com" }, // Slot 7
    right: { image: "/banner/GS-caltex.webp", link: "https://example.com" }, // Slot 8
  },

  /* ---------- 5. Exclusive Interviews ke neeche ---------- */
  afterExclusive: {
    left: { image: "/banner/GS-caltex.webp", link: "https://example.com" }, // Slot 9
    right: { image: "/banner/GS-caltex.webp", link: "https://example.com" }, // Slot 10
  },

  /* ---------- 6. Cover Story ke neeche ---------- */
  afterCoverStory: {
    left: { image: "/banner/GS-caltex.webp", link: "https://example.com" }, // Slot 11
    right: { image: "/banner/GS-caltex.webp", link: "https://example.com" }, // Slot 12
  },
};

/* ---------- Isse neeche kuch change mat karo ---------- */
const ads = {};

Object.keys(STRIPS).forEach((strip) => {
  ads[strip] = [STRIPS[strip].left, STRIPS[strip].right]
    .filter((slot) => slot && slot.image)
    .map((slot) => ({
      image: slot.image,
      link: slot.link || "#",
      alt: slot.alt || "Advertisement",
      active: true,
    }));
});

export default ads;
