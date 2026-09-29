import { useEffect, useRef, useState } from "react";
import { getExclusiveInterviews } from "../../services/NewsApi";

/* =========================================================
   YOUTUBE HELPERS
========================================================= */

function getYouTubeId(input = "") {
  const value = String(input).trim();

  const match = value.match(
    /(?:youtu\.be\/|youtube\.com\/watch\?v=|youtube\.com\/embed\/|youtube\.com\/shorts\/)([A-Za-z0-9_-]{11})/
  );

  if (match) return match[1];

  return /^[A-Za-z0-9_-]{11}$/.test(value) ? value : "";
}

function normalizeVideo(v) {
  const videoId = getYouTubeId(
    v.videoId || v.youtubeUrl || v.url
  );

  return {
    id: v._id || v.id || videoId,
    title: v.title || "Exclusive Interview",
    videoId,
  };
}

/* =========================================================
   YOUTUBE EMBED
========================================================= */

function embedUrl(videoId) {
  const params = new URLSearchParams({
    autoplay: "1",
    mute: "1",
    loop: "1",
    playlist: videoId,
    playsinline: "1",

    // YouTube controls hover par naturally show karega
    controls: "1",

    rel: "0",
    enablejsapi: "1",
    modestbranding: "1",
  });

  return `https://www.youtube-nocookie.com/embed/${videoId}?${params.toString()}`;
}

/* =========================================================
   YOUTUBE COMMAND
========================================================= */

function sendCommand(frame, func) {
  try {
    frame?.contentWindow?.postMessage(
      JSON.stringify({
        event: "command",
        func,
        args: [],
      }),
      "*"
    );
  } catch {
    // iframe ready nahi hua
  }
}

/* =========================================================
   SKELETON
========================================================= */

function VideoSkeleton() {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {[0, 1, 2, 3].map((i) => (
        <div
          key={i}
          className="
            aspect-video
            w-full
            animate-pulse
            rounded-xl
            bg-slate-200
          "
        />
      ))}
    </div>
  );
}

/* =========================================================
   SECTION
========================================================= */

function ExclusiveInterviews() {
  const sectionRef = useRef(null);

  // All YouTube iframe references
  const frames = useRef({});

  const [videos, setVideos] = useState([]);
  const [status, setStatus] = useState("loading");
  const [inView, setInView] = useState(false);

  /* =======================================================
     FETCH VIDEOS
  ======================================================= */

  useEffect(() => {
    const controller = new AbortController();

    getExclusiveInterviews(4, controller.signal)
      .then((data) => {
        const normalized = Array.isArray(data)
          ? data.map(normalizeVideo).filter((v) => v.videoId)
          : [];

        setVideos(normalized);
        setStatus("success");
      })
      .catch((err) => {
        if (err?.name !== "AbortError") {
          setStatus("error");
        }
      });

    return () => controller.abort();
  }, []);

  /* =======================================================
     AUTO PLAY / PAUSE ON SCROLL
  ======================================================= */

  useEffect(() => {
    const section = sectionRef.current;

    if (!section || status !== "success") return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const visible = entry.isIntersecting;

        setInView(visible);

        Object.values(frames.current).forEach((frame) => {
          if (!frame) return;

          if (visible) {
            sendCommand(frame, "playVideo");
          } else {
            sendCommand(frame, "pauseVideo");
          }
        });
      },
      {
        /*
          Section ka 25% screen mein aate hi
          videos play ho jayengi.
        */
        threshold: 0.25,
      }
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, [status]);

  /* =======================================================
     IFRAME LOAD
  ======================================================= */

  const handleVideoLoad = (id) => {
    const frame = frames.current[id];

    if (!frame) return;

    if (inView) {
      setTimeout(() => {
        sendCommand(frame, "playVideo");
      }, 200);
    }
  };

  /* =======================================================
     RENDER
  ======================================================= */

  return (
    <section
      ref={sectionRef}
      className="
        bg-white
        py-8
        sm:py-10
        lg:py-12
      "
    >
      <div
        className="
          mx-auto
          w-full
          max-w-[1500px]
          px-4
          sm:px-6
          lg:px-8
        "
      >
        {/* =================================================
            HEADER
        ================================================= */}

        <div className="mb-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="h-5 w-[3px] bg-[#C99A3B]" />

            <h2
              className="
                text-[11px]
                font-bold
                uppercase
                tracking-[0.22em]
                text-[#0A1128]
                sm:text-xs
              "
            >
              Exclusive Interviews
            </h2>
          </div>

          {/* Auto indicator */}
          <div
            className="
              flex
              items-center
              gap-2
              text-[9px]
              font-semibold
              uppercase
              tracking-[0.16em]
              text-slate-400
            "
          >
            <span
              className={`
                h-1.5
                w-1.5
                rounded-full
                transition-all
                duration-300
                ${
                  inView
                    ? "bg-[#C99A3B] shadow-[0_0_8px_rgba(201,154,59,0.7)]"
                    : "bg-slate-300"
                }
              `}
            />

            {inView ? "Playing" : "Auto Play"}
          </div>
        </div>

        {/* =================================================
            VIDEO PANEL
        ================================================= */}

        <div
          className="
            rounded-2xl
            border
            border-slate-200
            bg-[#F7F7F7]
            p-3
            shadow-[0_10px_40px_-25px_rgba(15,23,42,0.25)]
            sm:p-4
          "
        >
          {/* Loading */}
          {status === "loading" && <VideoSkeleton />}

          {/* Error */}
          {status === "error" && (
            <p className="py-12 text-center text-sm text-slate-500">
              Videos load nahi ho paye. Thodi der baad dobara try karein.
            </p>
          )}

          {/* Empty */}
          {status === "success" && videos.length === 0 && (
            <p className="py-12 text-center text-sm text-slate-500">
              Abhi koi exclusive interview available nahi hai.
            </p>
          )}

          {/* Videos */}
          {status === "success" && videos.length > 0 && (
            <div
              className="
                grid
                grid-cols-1
                gap-4
                sm:grid-cols-2
                lg:grid-cols-4
              "
            >
              {videos.map((video) => (
                <div
                  key={video.id}
                  className="
                    group
                    relative
                    aspect-video
                    w-full
                    overflow-hidden
                    rounded-xl
                    bg-[#0A1128]
                    shadow-[0_10px_25px_-15px_rgba(15,23,42,0.7)]
                  "
                >
                  <iframe
                    ref={(node) => {
                      if (node) {
                        frames.current[video.id] = node;
                      }
                    }}
                    src={embedUrl(video.videoId)}
                    title={video.title}
                    allow="
                      autoplay;
                      encrypted-media;
                      picture-in-picture;
                      fullscreen
                    "
                    allowFullScreen
                    onLoad={() => handleVideoLoad(video.id)}
                    className="
                      absolute
                      inset-0
                      h-full
                      w-full
                    "
                  />

                  {/* Subtle bottom shadow */}
                  <div
                    className="
                      pointer-events-none
                      absolute
                      inset-x-0
                      bottom-0
                      h-12
                      bg-gradient-to-t
                      from-black/15
                      to-transparent
                    "
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default ExclusiveInterviews;