"use client";

import { useEffect } from "react";

const MAIN_SELECTOR = ".site-scroll-main";
const SECTION_SELECTOR = ".snap-section";
const SCROLL_SETTLE_MS = 140;
const SNAP_DURATION_MS = 720;

function easeOutCubic(progress: number) {
  return 1 - (1 - progress) ** 3;
}

function animateScrollTo(main: HTMLElement, targetTop: number) {
  const startTop = main.scrollTop;
  const distance = targetTop - startTop;
  if (Math.abs(distance) < 2) return;

  const startTime = performance.now();
  let frameId = 0;

  const step = (now: number) => {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / SNAP_DURATION_MS, 1);
    main.scrollTop = startTop + distance * easeOutCubic(progress);

    if (progress < 1) {
      frameId = requestAnimationFrame(step);
    }
  };

  cancelAnimationFrame(frameId);
  frameId = requestAnimationFrame(step);
}

function getNearestSectionTop(main: HTMLElement) {
  const sections = Array.from(
    main.querySelectorAll<HTMLElement>(SECTION_SELECTOR),
  );
  if (sections.length === 0) return null;

  const scrollTop = main.scrollTop;
  let nearest = sections[0];
  let nearestDistance = Math.abs(nearest.offsetTop - scrollTop);

  for (const section of sections.slice(1)) {
    const distance = Math.abs(section.offsetTop - scrollTop);
    if (distance < nearestDistance) {
      nearest = section;
      nearestDistance = distance;
    }
  }

  return { top: nearest.offsetTop, distance: nearestDistance };
}

export function SmoothSectionSnap() {
  useEffect(() => {
    const main = document.querySelector<HTMLElement>(MAIN_SELECTOR);
    if (!main) return;

    let settleTimer: ReturnType<typeof setTimeout> | undefined;
    let isAnimating = false;

    const snapToNearest = () => {
      if (isAnimating) return;

      const nearest = getNearestSectionTop(main);
      if (!nearest) return;

      const maxSnapDistance = main.clientHeight * 0.55;
      if (nearest.distance < 4 || nearest.distance > maxSnapDistance) return;

      isAnimating = true;
      animateScrollTo(main, nearest.top);

      window.setTimeout(() => {
        isAnimating = false;
      }, SNAP_DURATION_MS + 40);
    };

    const onScroll = () => {
      if (isAnimating) return;
      if (settleTimer) clearTimeout(settleTimer);
      settleTimer = setTimeout(snapToNearest, SCROLL_SETTLE_MS);
    };

    main.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      if (settleTimer) clearTimeout(settleTimer);
      main.removeEventListener("scroll", onScroll);
    };
  }, []);

  return null;
}
