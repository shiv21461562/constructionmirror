import { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";


import CommentSection from "../../components/common/CommentSection";
import {
  getNewsBySlug,
  getRelatedNews,
} from "../../services/articleApi";
import { normalizeNews } from "../../utils/newsFormat";


/* ---------------- SMALL PIECES ---------------- */
function ArticleBody({ content }) {
  if (Array.isArray(content)) {
    return content.map((p, i) => <p key={i}>{p}</p>);
  }
  // Real API se HTML aaye to DOMPurify se sanitize karke hi dikhana
  return <div dangerouslySetInnerHTML={{ __html: content }} />;
}

function DetailSkeleton() {
  return (
    <div className="animate-pulse space-y-4">
      <div className="h-4 w-40 rounded bg-slate-200" />
      <div className="h-9 w-4/5 rounded bg-slate-200" />
      <div className="h-4 w-64 rounded bg-slate-200" />
      <div className="aspect-[16/9] w-full rounded-md bg-slate-200" />
      <div className="h-4 w-full rounded bg-slate-200" />
      <div className="h-4 w-full rounded bg-slate-200" />
      <div className="h-4 w-3/4 rounded bg-slate-200" />
    </div>
  );
}

function ShareBar({ title }) {
  const [copied, setCopied] = useState(false);
  const url = typeof window !== "undefined" ? window.location.href : "";
  const text = encodeURIComponent(title);
  const link = encodeURIComponent(url);

  const btn =
    "border border-slate-300 px-3.5 py-2 text-xs font-semibold text-slate-700 transition-colors hover:border-[#C99A3B] hover:text-[#805B18]";

  async function copy() {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard blocked */
    }
  }

  return (
    <div className="mt-8 flex flex-wrap items-center gap-2">
      <span className="mr-1 text-xs font-semibold text-slate-500">Share</span>
      <a className={btn} target="_blank" rel="noopener noreferrer" href={`https://wa.me/?text=${text}%20${link}`}>WhatsApp</a>
      <a className={btn} target="_blank" rel="noopener noreferrer" href={`https://www.linkedin.com/sharing/share-offsite/?url=${link}`}>LinkedIn</a>
      <a className={btn} target="_blank" rel="noopener noreferrer" href={`https://twitter.com/intent/tweet?text=${text}&url=${link}`}>X</a>
      <button type="button" onClick={copy} className={btn}>
        {copied ? "Link copied" : "Copy link"}
      </button>
    </div>
  );
}

/* ---------------- PAGE ---------------- */
function NewsDetail() {
  const { slug } = useParams();
  const articleRef = useRef(null);

  const [article, setArticle] = useState(null);
  const [related, setRelated] = useState([]);
  const [status, setStatus] = useState("loading"); // loading | success | notfound | error
  const [progress, setProgress] = useState(0);

  /* Article load */
  useEffect(() => {
    const controller = new AbortController();
    window.scrollTo(0, 0);
    setStatus("loading");

    getNewsBySlug(slug, controller.signal)
      .then((data) => {
        const a = normalizeNews(data);
        setArticle(a);
        setStatus("success");
        document.title = `${a.title} | Construction Mirror`;
      })
      .catch((err) => {
        if (err.name === "AbortError") return;
        setStatus(err.message === "NOT_FOUND" ? "notfound" : "error");
      });

    getRelatedNews(slug, 4, controller.signal)
      .then((list) => setRelated(list.map(normalizeNews)))
      .catch(() => setRelated([]));

    return () => controller.abort();
  }, [slug]);

  /* Reading progress bar */
  useEffect(() => {
    function onScroll() {
      const el = articleRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      const pct = total <= 0 ? 100 : (-rect.top / total) * 100;
      setProgress(Math.min(100, Math.max(0, pct)));
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [article]);

  return (
    <div className="min-h-screen bg-white">
      

      {/* Reading progress */}
      <div className="fixed inset-x-0 top-0 z-50 h-[3px]">
        <div
          className="h-full origin-left bg-[#C99A3B]"
          style={{ transform: `scaleX(${progress / 100})` }}
        />
      </div>

      <main className="pb-16 pt-6 sm:pt-8">
        <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8">
          {status === "loading" && <DetailSkeleton />}

          {(status === "notfound" || status === "error") && (
            <div className="py-24 text-center">
              <h1 className="text-2xl font-extrabold text-slate-900">
                {status === "notfound" ? "News not found" : "Something went wrong"}
              </h1>
              <p className="mt-2 text-sm text-slate-600">
                {status === "notfound"
                  ? "Ye news hata di gayi hai ya link galat hai."
                  : "News load nahi ho payi. Thodi der baad dobara try karein."}
              </p>
              <Link
                to="/"
                className="mt-6 inline-block bg-[#0A1128] px-6 py-3 text-sm font-semibold text-[#E6C36E] hover:bg-[#C99A3B] hover:text-[#0A1128]"
              >
                Back to Home
              </Link>
            </div>
          )}

          {status === "success" && article && (
            <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_320px]">
              {/* LEFT: ARTICLE + COMMENTS */}
              <div>
                <nav aria-label="Breadcrumb" className="mb-4 flex flex-wrap items-center gap-2 text-xs text-slate-500">
                  <Link to="/" className="hover:text-[#805B18]">Home</Link>
                  <span>/</span>
                  <Link to="/news" className="hover:text-[#805B18]">News</Link>
                  <span>/</span>
                  <span className="text-slate-700">{article.category}</span>
                </nav>

                <article ref={articleRef}>
                  <span className="inline-block rounded-full bg-[#C99A3B] px-3 py-1 text-[11px] font-bold text-[#3a2a08]">
                    {article.category}
                  </span>

                  <h1 className="mt-3 text-2xl font-extrabold leading-tight text-slate-900 sm:text-4xl">
                    {article.title}
                  </h1>

                  <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 border-y border-slate-200 py-3 text-xs text-slate-600">
                    <span className="font-semibold text-slate-900">{article.author}</span>
                    <span>{article.date}</span>
                    <span>{article.readTime} min read</span>
                    <span>{article.views}</span>
                    <a href="#comments" className="ml-auto font-semibold text-[#805B18] hover:underline">
                      Jump to comments
                    </a>
                  </div>

                  <img
                    src={article.image}
                    alt={article.title}
                    className="mt-6 aspect-[16/9] w-full rounded-md object-cover"
                  />

                  {article.excerpt && (
                    <p className="mt-6 border-l-[3px] border-[#C99A3B] pl-4 text-[17px] font-medium leading-relaxed text-slate-800">
                      {article.excerpt}
                    </p>
                  )}

                  <div className="mt-6 space-y-5 text-[16px] leading-[1.85] text-slate-700 sm:text-[17px] [&_a]:text-[#805B18] [&_a]:underline [&_h2]:mt-8 [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-slate-900 [&_img]:rounded-md">
                    <ArticleBody content={article.content} />
                  </div>
                </article>

                <ShareBar title={article.title} />

                <CommentSection newsId={article.id} />
              </div>

              {/* RIGHT: MORE NEWS */}
              <aside className="lg:sticky lg:top-6 lg:self-start">
                <div className="mb-4 flex items-center gap-2.5">
                  <span className="h-4 w-[3px] bg-[#C99A3B]" />
                  <h2 className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-900">More News</h2>
                </div>

                <div className="space-y-3">
                  {related.map((item) => (
                    <Link
                      key={item.id}
                      to={item.link}
                      className="group flex gap-3 border border-slate-200/80 bg-white p-2.5 transition-colors hover:border-[#C99A3B]/60"
                    >
                      <img
                        src={item.image}
                        alt=""
                        loading="lazy"
                        className="h-16 w-24 shrink-0 rounded object-cover"
                      />
                      <div className="min-w-0">
                        <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#C99A3B]">
                          {item.category}
                        </span>
                        <h3 className="line-clamp-2 text-[13px] font-bold leading-snug text-slate-900 group-hover:text-[#805B18]">
                          {item.title}
                        </h3>
                        <span className="text-[10px] text-slate-500">{item.date}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </aside>
            </div>
          )}
        </div>
      </main>

   
    </div>
  );
}

export default NewsDetail;
