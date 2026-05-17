import { useEffect } from "react";
import { useLocation } from "@tanstack/react-router";

function observeReveals() {
  const els = document.querySelectorAll<HTMLElement>(".reveal:not(.in)");
  if (els.length === 0) return () => {};

  if (typeof IntersectionObserver === "undefined") {
    els.forEach((el) => el.classList.add("in"));
    return () => {};
  }

  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          io.unobserve(e.target);
        }
      }
    },
    { threshold: 0.08, rootMargin: "0px 0px -40px 0px" },
  );

  els.forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      el.classList.add("in");
    } else {
      io.observe(el);
    }
  });

  return () => io.disconnect();
}

export function useReveal() {
  const { pathname } = useLocation();

  useEffect(() => {
    let cancelled = false;
    let disconnectIo = () => {};
    let safety: ReturnType<typeof setTimeout> | undefined;

    const run = () => {
      if (cancelled) return;
      disconnectIo();
      disconnectIo = observeReveals();
    };

    // Wait for React to commit the new route, then retry while content streams in.
    const raf = requestAnimationFrame(() => {
      requestAnimationFrame(run);
    });
    const t0 = window.setTimeout(run, 0);
    const t1 = window.setTimeout(run, 50);
    const t2 = window.setTimeout(run, 150);

    safety = window.setTimeout(() => {
      if (cancelled) return;
      document.querySelectorAll<HTMLElement>(".reveal:not(.in)").forEach((el) => {
        el.classList.add("in");
      });
    }, 600);

    return () => {
      cancelled = true;
      cancelAnimationFrame(raf);
      window.clearTimeout(t0);
      window.clearTimeout(t1);
      window.clearTimeout(t2);
      if (safety) window.clearTimeout(safety);
      disconnectIo();
    };
  }, [pathname]);
}
