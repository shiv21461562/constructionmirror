import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, ArrowUpRight } from "lucide-react";
const WHATSAPP_NUMBER = "919873168426";

const HEADING = "Welcome to Construction Mirror! 👋";
const BODY =
  "Looking for industry news, magazines or advertising opportunities? Drop us a message.";

const HEADING_CHARS = Array.from(HEADING);
const BODY_CHARS = Array.from(BODY);
const ALL_CHARS = [...HEADING_CHARS, ...BODY_CHARS];
const TOTAL = ALL_CHARS.length;

/* Letter-by-letter typing bubble (replays every time popup opens) */
function TypingBubble({ active }) {
  const [count, setCount] = useState(0);
  const [showDots, setShowDots] = useState(true);

  useEffect(() => {
    if (!active) {
      setCount(0);
      setShowDots(true);
      return;
    }

    let i = 0;
    let timer;
    setCount(0);
    setShowDots(true);

    const typeNext = () => {
      i += 1;
      setCount(i);
      if (i >= TOTAL) return;

      // Human jaisa: har letter ka thoda alag time + punctuation par pause
      const ch = ALL_CHARS[i - 1];
      let delay = 90 + Math.random() * 70; // ~90-160ms per letter
      if (ch === " ") delay += 40;
      if (".!?,".includes(ch)) delay += 350;
      timer = setTimeout(typeNext, delay);
    };

    // pehle "typing..." dots, phir letters
    const start = setTimeout(() => {
      setShowDots(false);
      typeNext();
    }, 1300);

    return () => {
      clearTimeout(start);
      clearTimeout(timer);
    };
  }, [active]);

  const typingDone = count >= TOTAL;
  const inHeading = count < HEADING_CHARS.length;
  const headingShown = HEADING_CHARS.slice(0, count).join("");
  const bodyShown = BODY_CHARS.slice(
    0,
    Math.max(0, count - HEADING_CHARS.length)
  ).join("");

  const Cursor = () => (
    <span className="ml-0.5 inline-block h-3 w-[2px] translate-y-[2px] animate-pulse bg-[#25D366]" />
  );

  return (
    <div className="relative max-w-[255px] rounded-xl rounded-tl-sm border border-gray-100 bg-white p-3 shadow-sm">
      {/* Invisible full text: bubble ka size fix rakhta hai (no jumping) */}
      <div className="invisible" aria-hidden="true">
        <p className="text-sm font-semibold">{HEADING}</p>
        <p className="mt-1.5 text-xs leading-5">{BODY}</p>
      </div>

      {/* Screen readers ko full text milega */}
      <span className="sr-only">
        {HEADING} {BODY}
      </span>

      <div className="absolute inset-0 p-3" aria-hidden="true">
        {showDots ? (
          <div className="flex h-5 items-center gap-1">
            {[0, 1, 2].map((d) => (
              <span
                key={d}
                className="h-1.5 w-1.5 animate-bounce rounded-full bg-gray-400"
                style={{ animationDelay: `${d * 150}ms` }}
              />
            ))}
          </div>
        ) : (
          <>
            <p className="text-sm font-semibold text-gray-800">
              {headingShown}
              {inHeading && !typingDone && <Cursor />}
            </p>
            <p className="mt-1.5 text-xs leading-5 text-gray-600">
              {bodyShown}
              {!inHeading && !typingDone && <Cursor />}
            </p>
          </>
        )}
      </div>
    </div>
  );
}

export default function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const popupRef = useRef(null);
  const closeTimer = useRef(null);

  const openPopup = () => {
    clearTimeout(closeTimer.current);
    setIsOpen(true);
  };

  const scheduleClose = () => {
    clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setIsOpen(false), 250);
  };

  useEffect(() => {
    return () => clearTimeout(closeTimer.current);
  }, []);

  const sendWhatsApp = (text = message) => {
    if (WHATSAPP_NUMBER.includes("X")) {
      alert("Please add your WhatsApp number in WhatsAppButton.jsx");
      return;
    }

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      text.trim() ||
        "Hello Construction Mirror! I would like to know more."
    )}`;

    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div
      ref={popupRef}
      className="fixed bottom-6 right-5 z-[100] sm:right-7"
      onMouseEnter={openPopup}
      onMouseLeave={scheduleClose}
    >
      {/* Small Chat Popup */}
      <div
        className={`absolute bottom-[72px] right-0 w-[310px] max-w-[calc(100vw-32px)] origin-bottom-right rounded-2xl border border-gray-200 bg-white shadow-[0_12px_45px_rgba(0,0,0,0.16)] transition-all duration-200 ${
          isOpen
            ? "visible translate-y-0 scale-100 opacity-100"
            : "invisible pointer-events-none translate-y-2 scale-95 opacity-0"
        }`}
      >
        {/* Compact Header */}
        <div className="flex items-center gap-3 rounded-t-2xl bg-[#075E46] px-4 py-3.5 text-white">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15">
            <MessageCircle size={21} />
          </div>

          <div className="min-w-0 flex-1">
            <h3 className="text-sm font-semibold">Construction Mirror</h3>
            <p className="mt-0.5 flex items-center gap-1.5 text-[11px] text-white/80">
              <span className="h-1.5 w-1.5 rounded-full bg-[#45E58B]" />
              How can we help you?
            </p>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen(false)}
            aria-label="Close chat"
            className="rounded-full p-1.5 transition hover:bg-white/15"
          >
            <X size={17} />
          </button>
        </div>

        {/* Welcome Message (typing effect) */}
        <div className="bg-[#F5F7F5] p-3.5">
          <TypingBubble active={isOpen} />
        </div>

        {/* Message Input */}
        <form
          className="flex items-center gap-2 border-t border-gray-100 bg-white p-3"
          onSubmit={(event) => {
            event.preventDefault();
            sendWhatsApp();
          }}
        >
          <input
            type="text"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            placeholder="Type your message..."
            aria-label="Your message"
            className="min-w-0 flex-1 rounded-full border border-gray-200 bg-gray-50 px-3.5 py-2.5 text-xs text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-[#25D366] focus:bg-white"
          />

          <button
            type="submit"
            aria-label="Send message on WhatsApp"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#25D366] text-white transition hover:bg-[#1DA851] active:scale-95"
          >
            <Send size={17} />
          </button>
        </form>

        <div className="border-t border-gray-100 px-3 py-2 text-center">
          <button
            type="button"
            onClick={() =>
              sendWhatsApp(
                message || "Hello Construction Mirror! How can you help me?"
              )
            }
            className="inline-flex items-center gap-1 text-[11px] font-medium text-[#16865B] transition hover:text-[#075E46]"
          >
            Continue on WhatsApp
            <ArrowUpRight size={13} />
          </button>
        </div>
      </div>

      {/* WhatsApp Floating Button */}
      <button
        type="button"
        onClick={() => setIsOpen((previous) => !previous)}
        aria-label="Open Construction Mirror WhatsApp chat"
        aria-expanded={isOpen}
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-all duration-300 hover:scale-110 hover:bg-[#20BD5A] active:scale-95"
      >
        {isOpen ? (
          <X size={25} />
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            width="34"
            height="34"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M16.01 3C8.84 3 3.01 8.76 3.01 15.84c0 2.27.61 4.48 1.77 6.43L3 29l6.96-1.81a13.1 13.1 0 0 0 6.06 1.49h.01c7.17 0 13-5.76 13-12.84C29.03 8.76 23.2 3 16.01 3Zm0 23.52h-.01a10.9 10.9 0 0 1-5.52-1.5l-.4-.23-4.13 1.08 1.1-4.01-.26-.41a10.6 10.6 0 0 1-1.63-5.61c0-5.94 4.87-10.77 10.85-10.77 2.9 0 5.62 1.12 7.67 3.16a10.65 10.65 0 0 1 3.18 7.61c0 5.94-4.87 10.78-10.85 10.78Zm5.96-8.06c-.33-.16-1.94-.95-2.24-1.06-.3-.11-.52-.16-.74.16-.22.33-.85 1.06-1.04 1.28-.19.22-.38.25-.71.08-.33-.16-1.39-.51-2.65-1.63-.98-.86-1.64-1.92-1.83-2.25-.19-.33-.02-.51.14-.67.15-.14.33-.38.49-.57.16-.19.22-.33.33-.55.11-.22.06-.41-.03-.57-.08-.16-.74-1.77-1.01-2.43-.27-.64-.54-.55-.74-.56h-.63c-.22 0-.57.08-.87.41-.3.33-1.15 1.12-1.15 2.73s1.18 3.17 1.34 3.39c.16.22 2.32 3.51 5.61 4.92.78.33 1.39.53 1.87.68.79.25 1.51.21 2.08.13.63-.09 1.94-.79 2.21-1.56.27-.76.27-1.42.19-1.56-.08-.14-.3-.22-.63-.38Z" />
          </svg>
        )}
      </button>
    </div>
  );
}