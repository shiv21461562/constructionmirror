
import { useState, useEffect, useRef } from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const animationRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);

      if (animationRef.current !== null) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  const scrollToTop = () => {
    if (animationRef.current !== null) {
      cancelAnimationFrame(animationRef.current);
    }

    const startPosition = window.scrollY;
    const duration = 2000;
    let startTime = null;

    const animateScroll = (currentTime) => {
      if (startTime === null) {
        startTime = currentTime;
      }

      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Smooth ease-in-out movement
      const easedProgress =
        progress < 0.5
          ? 4 * progress * progress * progress
          : 1 - Math.pow(-2 * progress + 2, 3) / 2;

      window.scrollTo(
        0,
        Math.max(0, startPosition * (1 - easedProgress))
      );

      if (progress < 1) {
        animationRef.current =
          requestAnimationFrame(animateScroll);
      } else {
        animationRef.current = null;
        window.scrollTo(0, 0);
      }
    };

    animationRef.current =
      requestAnimationFrame(animateScroll);
  };

  if (!isVisible) return null;

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Back to top"
      title="Back to top"
      className="group fixed bottom-6 left-6 z-[90] flex h-14 w-14 items-center justify-center rounded-full border-2 border-[#E8C66A] bg-[#D6AD4D] text-[#0B1628] shadow-[0_5px_22px_rgba(11,22,40,0.22)] transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-105 hover:border-[#F5D989] hover:bg-[#F0D078] hover:shadow-[0_8px_28px_rgba(214,173,77,0.4)] active:scale-95"
    >
      <ArrowUp
        size={25}
        strokeWidth={2.8}
        className="transition-transform duration-300 group-hover:-translate-y-1"
      />
    </button>
  );
}
