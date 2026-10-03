import { useEffect } from "react";

// Elements that fade/slide in as they scroll into view.
const REVEAL_SELECTORS = [
  ".section-heading",
  ".stat-card",
  ".about-image",
  ".about-content",
  ".esg-card",
  ".esg-showcase",
  ".product-image",
  ".product-content",
  ".product-spec-card",
  ".process-navigation",
  ".process-showcase",
  ".gallery-folder",
  ".plant-video-card",
  ".calculator-card",
  ".contact-card",
  ".contact-form",
  ".map-wrapper",
].join(",");

// Adds a gentle fade/slide-in to content as it scrolls into view.
// Content stays fully visible if JavaScript or IntersectionObserver is
// unavailable, and for visitors who prefer reduced motion.
function useScrollReveal() {
  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduceMotion || !("IntersectionObserver" in window)) return;

    const elements = [...document.querySelectorAll(REVEAL_SELECTORS)];

    // Items already on screen at load stay visible (no flash).
    const below = elements.filter(
      (el) => el.getBoundingClientRect().top > window.innerHeight
    );

    below.forEach((el) => {
      // Stagger siblings (e.g. a row of cards) slightly.
      const siblings = [...el.parentElement.children].filter((c) =>
        c.matches(REVEAL_SELECTORS)
      );
      const index = Math.min(siblings.indexOf(el), 5);
      el.style.setProperty("--reveal-delay", `${index * 80}ms`);
      el.classList.add("reveal");
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target;
            el.classList.add("revealed");
            observer.unobserve(el);

            // Once shown, drop the animation classes so the element's own
            // hover effects and transitions work as before.
            const cleanUp = () => {
              el.classList.remove("reveal", "revealed");
              el.style.removeProperty("--reveal-delay");
              el.removeEventListener("transitionend", onEnd);
            };
            // ignore transitions bubbling up from child elements
            const onEnd = (e) => {
              if (e.target === el) cleanUp();
            };
            el.addEventListener("transitionend", onEnd);
            setTimeout(cleanUp, 1500);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 }
    );

    below.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}

export default useScrollReveal;
