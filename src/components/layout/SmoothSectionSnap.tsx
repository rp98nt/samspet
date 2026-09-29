"use client";

import { useEffect } from "react";

const MAIN_SELECTOR = ".site-scroll-main";
const SECTION_SELECTOR = ".snap-section";
/** Slightly slower than native snap, still responsive per wheel tick */
const SNAP_DURATION_MS = 460;

function easeOutCubic(progress: number) {
  return 1 - (1 - progress) ** 3;
}

function getSections(main: HTMLElement) {
  return Array.from(main.querySelectorAll<HTMLElement>(SECTION_SELECTOR));
}

function sectionIndexAtScroll(sections: HTMLElement[], scrollTop: number) {
  let index = 0;
  for (let i = 0; i < sections.length; i++) {
    const top = sections[i].offsetTop;
    if (top <= scrollTop + 12) index = i;
  }
  return index;
}

export function SmoothSectionSnap() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    if (!finePointer.matches) {
      return;
    }

    const main = document.querySelector<HTMLElement>(MAIN_SELECTOR);
    if (!main) return;

    let sections = getSections(main);
    let targetIndex = sectionIndexAtScroll(sections, main.scrollTop);
    let isAnimating = false;
    let frameId = 0;
    let snapSuspended = false;

    const refreshSections = () => {
      sections = getSections(main);
      targetIndex = Math.min(targetIndex, sections.length - 1);
    };

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

    const cancelAnimation = () => {
      cancelAnimationFrame(frameId);
      frameId = 0;
    };

    const goToIndex = (index: number) => {
      refreshSections();
      if (sections.length === 0) return;

      const nextIndex = Math.max(0, Math.min(index, sections.length - 1));
      targetIndex = nextIndex;
      const targetTop = sections[nextIndex].offsetTop;

      cancelAnimation();
      isAnimating = true;
      suspendSnap();

      const startTop = main.scrollTop;
      const distance = targetTop - startTop;
      if (Math.abs(distance) < 2) {
        isAnimating = false;
        restoreSnap();
        return;
      }

      const startTime = performance.now();

      const step = (now: number) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / SNAP_DURATION_MS, 1);
        main.scrollTop = startTop + distance * easeOutCubic(progress);

        if (progress < 1) {
          frameId = requestAnimationFrame(step);
        } else {
          main.scrollTop = targetTop;
          isAnimating = false;
          restoreSnap();
        }
      };

      frameId = requestAnimationFrame(step);
    };

    const onWheel = (event: WheelEvent) => {
      if (event.ctrlKey) return;

      const delta = event.deltaY;
      if (delta === 0) return;

      event.preventDefault();

      refreshSections();
      if (sections.length === 0) return;

      const direction = delta > 0 ? 1 : -1;
      const baseIndex = isAnimating
        ? targetIndex
        : sectionIndexAtScroll(sections, main.scrollTop);
      const nextIndex = baseIndex + direction;

      if (nextIndex < 0 || nextIndex >= sections.length) {
        return;
      }

      goToIndex(nextIndex);
    };

    const onResize = () => {
      refreshSections();
      if (isAnimating) return;
      const idx = sectionIndexAtScroll(sections, main.scrollTop);
      const section = sections[idx];
      if (section) main.scrollTop = section.offsetTop;
    };

    main.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimation();
      main.removeEventListener("wheel", onWheel);
      window.removeEventListener("resize", onResize);
      restoreSnap();
    };
  }, []);

  return null;
}
