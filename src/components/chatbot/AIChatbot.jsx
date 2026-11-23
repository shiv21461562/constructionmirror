
import { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ReactMarkdown from "react-markdown";
import {
  X,
  Send,
  Sparkles,
  Plus,
} from "lucide-react";

const API_URL =
  import.meta.env.VITE_API_URL || "http://localhost:5000";

// Place the generated mascot at public/images/construction-mirror-ai.png
const AI_MASCOT_IMAGE = "/images/construction-mirror-ai.png";

const welcomeMessage = {
  role: "assistant",
  content:
    "Hello! Welcome to Construction Mirror. I'm your AI assistant. Ask me anything about construction, infrastructure, technology, business or any other topic. How can I help you today?",
};


export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState([welcomeMessage]);

  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
  }, [messages, loading]);

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        inputRef.current?.focus();
      }, 300);

      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const sendMessage = async (text = message) => {
    const question = text.trim();

    if (!question || loading) return;

    setMessages((prev) => [
      ...prev,
      { role: "user", content: question },
    ]);

    setMessage("");
    setLoading(true);

    try {
      const response = await fetch(
        `${API_URL}/api/chat/message`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            message: question,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok || data.success === false) {
        throw new Error(
          data.message || "Unable to get AI response"
        );
      }

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            data.reply ||
            "Sorry, I could not generate a response.",
        },
      ]);
    } catch (error) {
      console.error("Chatbot error:", error);

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "I'm unable to connect right now. Please try again in a moment.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const resetChat = () => {
    if (loading) return;

    setMessages([welcomeMessage]);
    setMessage("");
  };

  return (
    <>
      {/* CHAT WINDOW */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{
              opacity: 0,
              y: 35,
              scale: 0.92,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: 25,
              scale: 0.95,
            }}
            transition={{
              duration: 0.28,
              ease: "easeOut",
            }}
            className="
              fixed bottom-24 right-4 z-[9999]
              flex h-[min(680px,calc(100dvh-120px))]
              w-[420px] max-w-[calc(100vw-24px)]
              flex-col overflow-hidden
              rounded-[26px]
              border border-[#D6A84B]/25
              bg-[#F8F9FC]
              shadow-[0_25px_90px_rgba(0,0,0,0.30)]
              sm:right-7
            "
          >
            {/* HEADER */}
            <div className="relative shrink-0 overflow-hidden bg-[#111827] px-5 py-5">
              <div className="absolute -right-12 -top-20 h-48 w-48 rounded-full bg-[#D6A84B]/10 blur-3xl" />

              <div className="relative flex items-center gap-3">
                <div className="relative flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-[#D6A84B]/50 bg-white shadow-[0_0_22px_rgba(230,185,74,0.16)]">
                  <img
                    src={AI_MASCOT_IMAGE}
                    alt="Construction Mirror AI robot"
                    className="h-full w-full object-contain"
                  />
                </div>

                <div className="min-w-0 flex-1">
                  <h3 className="text-[17px] font-bold tracking-tight text-white">
                    Construction Mirror
                  </h3>

                  <div className="mt-1 flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34D399]" />
                    <span className="text-xs text-gray-300">
                      AI Assistant · Online
                    </span>
                  </div>
                </div>

                <button
                  onClick={resetChat}
                  disabled={loading}
                  title="New conversation"
                  aria-label="New conversation"
                  className="
                    rounded-xl p-2 text-gray-400
                    transition hover:bg-white/10
                    hover:text-[#E6B94A]
                    disabled:opacity-40
                  "
                >
                  <Plus size={20} />
                </button>

                <button
                  onClick={() => setIsOpen(false)}
                  title="Close chat"
                  aria-label="Close chatbot"
                  className="
                    rounded-xl p-2 text-gray-400
                    transition hover:bg-white/10
                    hover:text-white
                  "
                >
                  <X size={21} />
                </button>
              </div>

              <div className="relative mt-5 flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.05] px-3 py-2.5">
                <div className="flex items-center gap-2">
                  <img src={AI_MASCOT_IMAGE} alt="" className="h-6 w-6 rounded-full bg-white object-contain" />
                  <span className="text-xs text-gray-300">
                    Your Construction Industry AI Expert
                  </span>
                </div>

                <Sparkles
                  size={15}
                  className="text-[#E6B94A]"
                />
              </div>
            </div>

            {/* CHAT BODY */}
            <div
              className="
                min-h-0 flex-1 space-y-5 overflow-y-auto
                bg-[#F6F7FA] px-4 py-5
                [scrollbar-width:thin]
                [scrollbar-color:#D1D5DB_transparent]
              "
            >
              <div className="flex justify-center">
                <span
                  className="
                    rounded-full border border-gray-200
                    bg-white px-3 py-1.5
                    text-[10px] font-semibold tracking-[1.5px]
                    text-gray-400
                  "
                >
                  YOUR AI CONVERSATION
                </span>
              </div>

              {/* MESSAGES */}
              {messages.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    y: 10,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  className={`flex items-end gap-2.5 ${
                    item.role === "user"
                      ? "justify-end"
                      : "justify-start"
                  }`}
                >
                  {item.role === "assistant" && (
                    <div className="h-9 w-9 shrink-0 overflow-hidden rounded-full border border-[#D6A84B]/50 bg-white shadow-sm">
                      <img
                        src={AI_MASCOT_IMAGE}
                        alt="AI assistant"
                        className="h-full w-full object-contain"
                      />
                    </div>
                  )}

                  <div
                    className={`
                      max-w-[84%] rounded-2xl
                      px-4 py-3.5 text-[13px]
                      leading-[1.8] shadow-sm
                      ${
                        item.role === "user"
                          ? "rounded-br-md bg-[#111827] text-white"
                          : "rounded-bl-md border border-gray-100 bg-white text-[#374151]"
                      }
                    `}
                  >
                    {item.role === "assistant" ? (
                      <div
                        className="
                          break-words
                          [&_p]:mb-3
                          [&_p:last-child]:mb-0
                          [&_strong]:font-bold
                          [&_strong]:text-[#111827]
                          [&_ul]:my-3
                          [&_ul]:list-disc
                          [&_ul]:space-y-1
                          [&_ul]:pl-5
                          [&_ol]:my-3
                          [&_ol]:list-decimal
                          [&_ol]:space-y-1
                          [&_ol]:pl-5
                          [&_li]:pl-1
                          [&_a]:font-semibold
                          [&_a]:text-[#A77920]
                          [&_a]:underline
                          [&_h1]:mb-2
                          [&_h1]:font-bold
                          [&_h2]:mb-2
                          [&_h2]:font-bold
                          [&_h3]:mb-2
                          [&_h3]:font-semibold
                          [&_code]:rounded
                          [&_code]:bg-gray-100
                          [&_code]:px-1
                          [&_code]:py-0.5
                          [&_code]:text-[#9A742C]
                          [&_pre]:my-3
                          [&_pre]:overflow-x-auto
                          [&_pre]:rounded-xl
                          [&_pre]:bg-[#111827]
                          [&_pre]:p-3
                          [&_pre]:text-white
                        "
                      >
                        <ReactMarkdown>
                          {item.content}
                        </ReactMarkdown>
                      </div>
                    ) : (
                      <p className="whitespace-pre-wrap break-words">
                        {item.content}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}

              {/* TYPING INDICATOR */}
              {loading && (
                <div className="flex items-end gap-2.5">
                  <div className="h-9 w-9 shrink-0 overflow-hidden rounded-full border border-[#D6A84B]/50 bg-white shadow-sm">
                    <img
                      src={AI_MASCOT_IMAGE}
                      alt="AI assistant is typing"
                      className="h-full w-full object-contain"
                    />
                  </div>

                  <div
                    className="
                      flex items-center gap-1.5
                      rounded-2xl rounded-bl-md
                      border border-gray-100 bg-white
                      px-4 py-4 shadow-sm
                    "
                  >
                    {[0, 1, 2].map((item) => (
                      <span
                        key={item}
                        className="
                          h-2 w-2 animate-bounce
                          rounded-full bg-[#C49A45]
                        "
                        style={{
                          animationDelay: `${item * 150}ms`,
                        }}
                      />
                    ))}
                  </div>
                </div>
              )}

              <div ref={bottomRef} />
            </div>

            {/* MESSAGE INPUT */}
            <div
              className="
                shrink-0 border-t border-gray-100
                bg-white p-4
              "
            >
              <form
                onSubmit={(event) => {
                  event.preventDefault();
                  sendMessage();
                }}
                className="
                  flex items-center gap-2
                  rounded-2xl border border-gray-200
                  bg-[#F8F9FB] p-1.5
                  transition focus-within:border-[#D6A84B]
                  focus-within:bg-white
                  focus-within:shadow-[0_0_0_3px_rgba(214,168,75,0.10)]
                "
              >
                <input
                  ref={inputRef}
                  value={message}
                  onChange={(event) =>
                    setMessage(event.target.value)
                  }
                  placeholder="Ask anything..."
                  disabled={loading}
                  className="
                    min-w-0 flex-1 bg-transparent
                    px-3 py-2.5 text-[13px]
                    text-gray-800 outline-none
                    placeholder:text-gray-400
                  "
                />

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.92 }}
                  type="submit"
                  disabled={!message.trim() || loading}
                  aria-label="Send message"
                  className="
                    flex h-10 w-10 shrink-0
                    items-center justify-center
                    rounded-xl bg-[#111827]
                    text-[#E6B94A]
                    transition hover:bg-[#D6A84B]
                    hover:text-[#111827]
                    disabled:cursor-not-allowed
                    disabled:opacity-40
                  "
                >
                  <Send size={17} />
                </motion.button>
              </form>

              <div className="mt-3 flex items-center justify-center gap-1.5">
                <Sparkles
                  size={11}
                  className="text-[#C49A45]"
                />
                <p className="text-[10px] text-gray-400">
                  Powered by{" "}
                  <span className="font-semibold text-[#9A742C]">
                    Construction Mirror AI
                  </span>
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>





      {/* FLOATING AI BUTTON */}
    {/* FLOATING AI BUTTON */}
<div className="fixed bottom-5 right-5 z-[9999] sm:right-7">

  <AnimatePresence>
    {!isOpen && (
      <motion.div
        initial={{ opacity: 0, x: 15, scale: 0.9 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        exit={{ opacity: 0, x: 15, scale: 0.9 }}
className="
  absolute bottom-0 right-[105px]
  translate-y-3
  flex items-center gap-3 whitespace-nowrap
  rounded-2xl border border-[#D6A84B]/50
  bg-[#111827] px-4 py-3 text-white
  shadow-[0_12px_35px_rgba(0,0,0,0.25)]
"
      >
        <span className="h-12 w-12 shrink-0">
      <img
  src={AI_MASCOT_IMAGE}
  alt="Construction Mirror AI"
  className="
    h-[65px] w-[78px]
    object-contain
    scale-110
  "
/>
        </span>

        <span className="flex flex-col">
          <span className="text-sm font-bold tracking-wide">
            Ask our AI Assistant
          </span>

          <span className="mt-1 text-[10px] text-gray-300">
            Construction insights, news & more
          </span>
        </span>
      </motion.div>
    )}
  </AnimatePresence>

  <motion.button
    whileHover={{ scale: 1.08 }}
    whileTap={{ scale: 0.92 }}
    onClick={() => setIsOpen((prev) => !prev)}
    aria-label="Open AI Assistant"
    aria-expanded={isOpen}
    className="
      group relative
      flex h-[120px] w-[120px]
      items-center justify-center
      overflow-visible
      border-0 bg-transparent
      p-0 outline-none
      shadow-none
      cursor-pointer
    "
  >

    {/* SOFT GOLD GLOW */}
    <span className="
      pointer-events-none absolute inset-2
      rounded-full bg-[#D6A84B]/10
      blur-2xl opacity-70
    " />

    <AnimatePresence mode="wait">
      {isOpen ? (
        <motion.span
          key="close"
          initial={{ rotate: -90, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          exit={{ rotate: 90, opacity: 0 }}
          className="
            relative z-10 flex h-full w-full
            items-center justify-center
            bg-transparent text-[#E6B94A]
          "
        >
          <X size={32} />
        </motion.span>
      ) : (
        <motion.span
          key="robot"
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.7, opacity: 0 }}
          className="
            relative z-10 flex h-full w-full
            items-center justify-center
            overflow-visible bg-transparent
          "
        >
      <img
  src={AI_MASCOT_IMAGE}
  alt="Construction Mirror AI Robot"
  className="
    h-full w-full
    translate-y-3
    scale-110 object-contain
  
   
  "
/>
         
        </motion.span>
      )}
    </AnimatePresence>

    {/* ONLINE STATUS */}
    {!isOpen && (
      <span className="
        absolute right-3 top-3
        h-[17px] w-[17px]
        rounded-full
        bg-emerald-400
        shadow-[0_0_12px_rgba(52,211,153,0.8)]
      " />
    )}

  </motion.button>
</div>




    </>
  );
}
