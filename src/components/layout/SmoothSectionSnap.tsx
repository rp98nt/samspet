"use client";

import { useEffect } from "react";

const MAIN_SELECTOR = ".site-scroll-main";
const SECTION_SELECTOR = ".snap-section";
const SCROLL_SETTLE_MS = 130;
const SNAP_DURATION_MS = 680;

function easeOutCubic(progress: number) {
  return 1 - (1 - progress) ** 3;
}

function animateScrollTo(
  main: HTMLElement,
  targetTop: number,
  onComplete?: () => void,
) {
  const startTop = main.scrollTop;
  const distance = targetTop - startTop;
  if (Math.abs(distance) < 2) {
    onComplete?.();
    return;
  }

  const startTime = performance.now();
  let frameId = 0;

  const step = (now: number) => {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / SNAP_DURATION_MS, 1);
    main.scrollTop = startTop + distance * easeOutCubic(progress);

    if (progress < 1) {
      frameId = requestAnimationFrame(step);
    } else {
      onComplete?.();
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
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const main = document.querySelector<HTMLElement>(MAIN_SELECTOR);
    if (!main) return;

    let settleTimer: ReturnType<typeof setTimeout> | undefined;
    let isAnimating = false;
    let snapSuspended = false;

    const suspendSnap = () => {
      if (snapSuspended) return;
      snapSuspended = true;
      main.style.scrollSnapType = "none";
    };

    const restoreSnap = () => {
      if (!snapSuspended) return;
      snapSuspended = false;
      main.style.scrollSnapType = "";
    };

    const snapToNearest = () => {
      if (isAnimating) return;

      const nearest = getNearestSectionTop(main);
      if (!nearest) {
        restoreSnap();
        return;
      }

      const maxSnapDistance = main.clientHeight * 0.6;
      if (nearest.distance < 2) {
        restoreSnap();
        return;
      }
      if (nearest.distance > maxSnapDistance) {
        restoreSnap();
        return;
      }

      isAnimating = true;
      suspendSnap();
      animateScrollTo(main, nearest.top, () => {
        isAnimating = false;
        restoreSnap();
      });
    };

    const scheduleSettle = () => {
      if (isAnimating) return;
      suspendSnap();
      if (settleTimer) clearTimeout(settleTimer);
      settleTimer = setTimeout(snapToNearest, SCROLL_SETTLE_MS);
    };

    const onScroll = () => {
      if (isAnimating) return;
      scheduleSettle();
    };

    const onPointerDown = () => {
      if (isAnimating) return;
      suspendSnap();
    };

    main.addEventListener("scroll", onScroll, { passive: true });
    main.addEventListener("wheel", scheduleSettle, { passive: true });
    main.addEventListener("pointerdown", onPointerDown, { passive: true });
    main.addEventListener("touchend", scheduleSettle, { passive: true });

    return () => {
      if (settleTimer) clearTimeout(settleTimer);
      main.removeEventListener("scroll", onScroll);
      main.removeEventListener("wheel", scheduleSettle);
      main.removeEventListener("pointerdown", onPointerDown);
      main.removeEventListener("touchend", scheduleSettle);
      restoreSnap();
    };
  }, []);

  return null;
}
