"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function PageMotion() {
  const pathname = usePathname();

  useEffect(() => {
    const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)");
    const desktop = matchMedia("(min-width: 768px) and (pointer: fine)");
    const main = document.querySelector("main");
    if (!main) return;

    const seen = new WeakSet();
    const pending = new Set();
    const animations = new Set();
    let frame = 0;
    let scanFrame = 0;
    let inView = false;
    const perspective = main.querySelector("#perspective");

    function reveal(element, delay = 0) {
      element.removeAttribute("data-motion-pending");
      pending.delete(element);
      if (reducedMotion.matches || !element.animate) return;
      const animation = element.animate(
        [{ opacity: 0, transform: "translateY(16px)" }, { opacity: 1, transform: "translateY(0)" }],
        { duration: 200, delay, easing: "ease-out", fill: "backwards" }
      );
      animations.add(animation);
      animation.finished.then(() => animations.delete(animation), () => animations.delete(animation));
    }

    const observer = new IntersectionObserver(entries => {
      let order = 0;
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        observer.unobserve(entry.target);
        reveal(entry.target, Math.min(order++ * 30, 90));
      }
    }, { threshold: 0, rootMargin: "0px 0px -16px 0px" });

    function scan() {
      scanFrame = 0;
      let order = 0;
      for (const element of main.querySelectorAll("h1, h2, h3, p, figcaption")) {
        // Live quiz feedback and controls must remain immediately readable.
        if (seen.has(element) || element.closest("a, button, summary, [aria-live], .diagnosis-quiz, details:not([open])")) continue;
        const rect = element.getBoundingClientRect();
        if (!rect.height || !rect.width) continue;
        seen.add(element);
        if (reducedMotion.matches || rect.bottom <= 0) continue;
        if (rect.top < innerHeight - 16) reveal(element, Math.min(order++ * 30, 90));
        else {
          element.setAttribute("data-motion-pending", "");
          pending.add(element);
          observer.observe(element);
        }
      }
    }

    function scheduleScan() {
      if (!scanFrame) scanFrame = requestAnimationFrame(scan);
    }

    function updateParallax() {
      frame = 0;
      if (!perspective) return;
      if (reducedMotion.matches || !desktop.matches) {
        perspective.style.removeProperty("--parallax-y");
        return;
      }
      if (!inView) return;
      const rect = perspective.getBoundingClientRect();
      const offset = Math.max(-56, Math.min(56, (innerHeight / 2 - rect.top - rect.height / 2) * 0.12));
      perspective.style.setProperty("--parallax-y", `${offset.toFixed(2)}px`);
    }

    function scheduleParallax() {
      if (!frame) frame = requestAnimationFrame(updateParallax);
    }

    const sectionObserver = new IntersectionObserver(entries => {
      inView = entries[0]?.isIntersecting ?? false;
      scheduleParallax();
    });
    if (perspective) sectionObserver.observe(perspective);

    function showPending() {
      for (const element of pending) element.removeAttribute("data-motion-pending");
      pending.clear();
      observer.disconnect();
      for (const animation of animations) animation.cancel();
      animations.clear();
    }

    function preferenceChanged() {
      if (reducedMotion.matches) showPending();
      scheduleParallax();
    }

    const mutations = new MutationObserver(scheduleScan);
    mutations.observe(main, { childList: true, subtree: true });
    main.addEventListener("toggle", scheduleScan, true);
    // Anchor navigation and keyboard focus must never land on hidden copy.
    main.addEventListener("focusin", showPending);
    window.addEventListener("hashchange", showPending);
    window.addEventListener("scroll", scheduleParallax, { passive: true });
    window.addEventListener("resize", scheduleParallax, { passive: true });
    reducedMotion.addEventListener("change", preferenceChanged);
    desktop.addEventListener("change", preferenceChanged);
    scan();

    return () => {
      showPending();
      sectionObserver.disconnect();
      mutations.disconnect();
      cancelAnimationFrame(frame);
      cancelAnimationFrame(scanFrame);
      perspective?.style.removeProperty("--parallax-y");
      main.removeEventListener("toggle", scheduleScan, true);
      main.removeEventListener("focusin", showPending);
      window.removeEventListener("hashchange", showPending);
      window.removeEventListener("scroll", scheduleParallax);
      window.removeEventListener("resize", scheduleParallax);
      reducedMotion.removeEventListener("change", preferenceChanged);
      desktop.removeEventListener("change", preferenceChanged);
    };
  }, [pathname]);

  return null;
}
