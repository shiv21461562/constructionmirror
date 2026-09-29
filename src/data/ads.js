/*
  ============================================================
  ADS MANAGER: saare ad strips yahin se change hoti hain
  ============================================================
  Har strip mein 2 banners hote hain (left, right).
  Banner size: 1600 x 250 (webp)
  Images rakho: public/banner/

  Ad badalne ke liye sirf `image` aur `link` badlo.
  Ad band karna ho to `active: false` kar do.

  Strip name  ->  Website par kahan dikhta hai
  ------------------------------------------------------------
  header            -> Top (logo ke bagal mein)
  afterNational     -> National News ke neeche
  afterInterviews   -> Interviews ke neeche
  afterExclusive    -> Exclusive Interviews ke neeche
  afterCoverStory   -> Cover Story ke neeche
*/

const ads = {
  header: [
    { image: "/banner/GS-caltex.webp", link: "https://example.com", alt: "GS Caltex", active: true },
    { image: "/banner/GS-caltex.webp", link: "/contact", alt: "Advertise with us", active: true },
  ],

  afterNational: [
   { image: "/banner/GS-caltex.webp", link: "https://example.com", alt: "GS Caltex", active: true },
    { image: "/banner/GS-caltex.webp", link: "/contact", alt: "Advertise with us", active: true },
  ],

  afterInterviews: [
    { image: "/banner/GS-caltex.webp", link: "https://example.com", alt: "GS Caltex", active: true },
    { image: "/banner/GS-caltex.webp", link: "/contact", alt: "Advertise with us", active: true },
  ],

  afterExclusive: [
  { image: "/banner/GS-caltex.webp", link: "https://example.com", alt: "GS Caltex", active: true },
    { image: "/banner/GS-caltex.webp", link: "/contact", alt: "Advertise with us", active: true },
  ],

  afterCoverStory: [
 { image: "/banner/GS-caltex.webp", link: "https://example.com", alt: "GS Caltex", active: true },
    { image: "/banner/GS-caltex.webp", link: "/contact", alt: "Advertise with us", active: true },
  ],
};

export default ads;
