import { useEffect, useState } from "react";
import { getComments, postComment } from "../services/NewsApi";
import { formatDate } from "../utils/newsFormat";

const USER_KEY = "cm_comment_user";

const inputBase =
  "w-full border border-transparent bg-[#F7F7F7] px-4 py-3.5 text-sm text-slate-900 outline-none transition-colors placeholder:text-slate-500 focus:border-[#C99A3B] focus:bg-white";

const BubbleIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round">
    <path d="M4 5h16a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1h-8l-5 4v-4H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1z" />
  </svg>
);

function Field({ error, children }) {
  return (
    <div>
      {children}
      {error && <p className="mt-1.5 text-xs text-red-600">{error}</p>}
    </div>
  );
}

function CommentSection({ newsId }) {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState({ comment: "", name: "", email: "", website: "" });
  const [remember, setRemember] = useState(false);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [notice, setNotice] = useState("");

  /* Pehle save kiya hua naam/email wapas bhar do */
  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem(USER_KEY));
      if (saved) {
        setForm((f) => ({ ...f, ...saved }));
        setRemember(true);
      }
    } catch {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    getComments(newsId, controller.signal)
      .then(setComments)
      .catch(() => setComments([]))
      .finally(() => setLoading(false));
    return () => controller.abort();
  }, [newsId]);

  const update = (key) => (e) => {
    setForm((f) => ({ ...f, [key]: e.target.value }));
    if (errors[key]) setErrors((er) => ({ ...er, [key]: "" }));
  };

  function validate() {
    const e = {};
    if (form.comment.trim().length < 3) e.comment = "Please write your comment.";
    if (!form.name.trim()) e.name = "Name is required.";
    if (!/^\S+@\S+\.\S+$/.test(form.email.trim())) e.email = "Enter a valid email address.";
    if (form.website.trim() && !/^https?:\/\/.+\..+/.test(form.website.trim()))
      e.website = "Website must start with http:// or https://";
    return e;
  }

  async function handleSubmit(ev) {
    ev.preventDefault();
    setNotice("");

    const e = validate();
    setErrors(e);
    if (Object.keys(e).length) return;

    setSubmitting(true);
    try {
      const created = await postComment(newsId, {
        comment: form.comment.trim(),
        name: form.name.trim(),
        email: form.email.trim(),
        website: form.website.trim(),
      });

      setComments((prev) => [created, ...prev]);
      setForm((f) => ({ ...f, comment: "" }));

      try {
        if (remember) {
          localStorage.setItem(
            USER_KEY,
            JSON.stringify({ name: form.name, email: form.email, website: form.website })
          );
        } else {
          localStorage.removeItem(USER_KEY);
        }
      } catch {
        /* ignore */
      }

      setNotice("Thank you! Your comment has been posted.");
    } catch {
      setNotice("Comment post nahi ho paya. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section id="comments" className="mt-12 border-t border-dashed border-slate-300 pt-10">
      {/* COMMENTS LIST */}
      <h2 className="flex items-center gap-2.5 text-xl font-extrabold text-slate-900">
        <BubbleIcon />
        Comments{!loading && ` (${comments.length})`}
      </h2>

      <div className="mt-5 space-y-5">
        {loading && <p className="text-sm text-slate-500">Loading comments...</p>}

        {!loading && comments.length === 0 && (
          <p className="text-sm text-slate-500">No comments yet. Be the first to share your thoughts.</p>
        )}

        {comments.map((c) => (
          <article key={c.id} className="flex gap-3.5">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#0A1128] text-sm font-bold text-[#E6C36E]">
              {c.name?.[0]?.toUpperCase() || "?"}
            </span>
            <div className="min-w-0 flex-1 border-b border-slate-200 pb-5">
              <div className="flex flex-wrap items-baseline gap-x-3">
                <h3 className="text-sm font-bold text-slate-900">{c.name}</h3>
                <time className="text-xs text-slate-500">{formatDate(c.createdAt, true)}</time>
              </div>
              <p className="mt-1.5 whitespace-pre-line break-words text-[15px] leading-relaxed text-slate-700">
                {c.comment}
              </p>
            </div>
          </article>
        ))}
      </div>

      {/* LEAVE A COMMENT FORM */}
      <h2 className="mt-12 flex items-center gap-2.5 text-xl font-extrabold text-slate-900">
        <BubbleIcon />
        Leave a Comment
      </h2>
      <p className="mt-3 text-sm text-slate-600">
        <em>Your email address will not be published.</em> Required fields are marked{" "}
        <span className="text-red-600">*</span>
      </p>

      <form onSubmit={handleSubmit} noValidate className="mt-5 space-y-4">
        <Field error={errors.comment}>
          <textarea
            rows={7}
            value={form.comment}
            onChange={update("comment")}
            placeholder="Leave a Comment *"
            aria-label="Comment"
            className={`${inputBase} resize-y`}
          />
        </Field>

        <div className="grid gap-4 md:grid-cols-3">
          <Field error={errors.name}>
            <input type="text" value={form.name} onChange={update("name")} placeholder="Your name *" aria-label="Name" className={inputBase} />
          </Field>
          <Field error={errors.email}>
            <input type="email" value={form.email} onChange={update("email")} placeholder="Your email *" aria-label="Email" className={inputBase} />
          </Field>
          <Field error={errors.website}>
            <input type="url" value={form.website} onChange={update("website")} placeholder="Your website" aria-label="Website" className={inputBase} />
          </Field>
        </div>

        <label className="flex cursor-pointer items-start gap-2.5 text-sm text-slate-700">
          <input
            type="checkbox"
            checked={remember}
            onChange={(e) => setRemember(e.target.checked)}
            className="mt-0.5 h-4 w-4 accent-[#C99A3B]"
          />
          Save my name, email, and website in this browser for the next time I comment.
        </label>

        <div className="flex flex-wrap items-center gap-4">
     <button
  type="submit"
  disabled={submitting}
  className="
    inline-flex items-center justify-center
    rounded-2xl
    bg-[#0A1128]
    px-8 py-3.5
    text-sm font-semibold
    tracking-wide
    text-[#E6C36E]
    shadow-[0_8px_24px_rgba(10,17,40,0.18)]
    transition-all duration-300
    hover:-translate-y-0.5
    hover:bg-[#C99A3B]
    hover:text-[#0A1128]
    hover:shadow-[0_12px_28px_rgba(201,154,59,0.25)]
    active:translate-y-0
    disabled:cursor-not-allowed
    disabled:opacity-60
    disabled:hover:translate-y-0
  "
>
  {submitting ? "Posting..." : "Post Comment"}
</button>
          {notice && (
            <p role="status" className="text-sm font-medium text-[#805B18]">
              {notice}
            </p>
          )}
        </div>
      </form>
    </section>
  );
}

export default CommentSection;
