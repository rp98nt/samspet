import Image from "next/image";
import { ConsultationForm } from "@/components/home/ConsultationForm";
import { HeroCopy } from "@/components/home/HeroCopy";
import { HeroFeatureBar } from "@/components/home/HeroFeatureBar";

const heroImageDesktop = "/images/hero/man-with-dog.png";
const heroImageMobile = "/images/hero/man-with-dog-mobile.png";

/** man-with-dog.png from media/manWithDog2.png — fixed px frame, scaled for display */
const HERO_BG_NATIVE_WIDTH_PX = 1959;
const HERO_BG_NATIVE_HEIGHT_PX = 725;
const HERO_BG_DISPLAY_SCALE = 0.8;
const HERO_BG_WIDTH_PX = Math.round(
  HERO_BG_NATIVE_WIDTH_PX * HERO_BG_DISPLAY_SCALE,
);
const HERO_BG_HEIGHT_PX = Math.round(
  HERO_BG_NATIVE_HEIGHT_PX * HERO_BG_DISPLAY_SCALE,
);
const HERO_BG_OFFSET_DOWN_PX = 35;

export function Hero() {
  return (
    <section
      id="home"
      className="section-viewport relative flex flex-col bg-brand-charcoal"
    >
      {/* Mobile: one viewport — image + copy, form, feature bar */}
      <div
        className="grid min-h-0 flex-1 grid-rows-[minmax(0,34%)_minmax(0,1fr)_auto] lg:hidden"
      >
        <div className="relative min-h-0 w-full bg-[#1a1a1a]">
          <Image
            src={heroImageMobile}
            alt="Dog trainer standing with a Doberman"
            fill
            priority
            className="object-contain object-center"
            sizes="100vw"
          />
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/80 via-black/25 to-transparent"
            aria-hidden
          />
          <div className="absolute inset-x-0 top-0 z-10 px-3 pb-2 pt-3 sm:px-4">
            <HeroCopy layout="mobile" />
          </div>
        </div>
        <div className="flex min-h-0 items-center bg-brand-charcoal px-3 py-1 sm:px-4">
          <ConsultationForm fitViewport />
        </div>
        <div className="row-start-3">
          <HeroFeatureBar />
        </div>
      </div>

      {/* Desktop: main hero + feature strip (both inside one viewport) */}
      <div className="relative hidden min-h-0 flex-1 lg:grid lg:grid-rows-[1fr_auto]">
        <div className="relative flex min-h-0 flex-col overflow-hidden">
          <div className="absolute inset-0 bg-[#1a1a1a]">
            <div
              className="absolute left-1/2 top-1/2"
              style={{
                width: HERO_BG_WIDTH_PX,
                height: HERO_BG_HEIGHT_PX,
                transform: `translate(-50%, calc(-50% + ${HERO_BG_OFFSET_DOWN_PX}px))`,
              }}
            >
              <Image
                src={heroImageDesktop}
                alt="Dog trainer standing with a Doberman"
                fill
                priority
                className="object-contain object-center"
                sizes={`${HERO_BG_WIDTH_PX}px`}
              />
            </div>
          </div>

          <div
            className="pointer-events-none absolute inset-0 z-[1]"
            aria-hidden
          >
            <div
              className="absolute inset-y-0 left-0 w-[min(100%,42%)] bg-gradient-to-r from-black/80 via-black/55 to-transparent"
            />
            <div
              className="absolute inset-y-0 right-0 w-[min(100%,42%)] bg-gradient-to-l from-black/80 via-black/55 to-transparent"
            />
          </div>

          <div
            className="relative z-10 mx-auto flex w-full max-w-7xl min-h-0 flex-1 flex-col px-4 lg:px-6 lg:py-0"
          >
            <div className="grid min-h-0 flex-1 grid-cols-12 gap-4 lg:items-stretch lg:gap-6">
              <div className="flex items-center lg:col-span-4">
                <HeroCopy layout="desktop" />
              </div>
              <div className="hidden lg:block lg:col-span-4" aria-hidden />
              <div className="flex h-full min-h-0 items-center justify-end lg:col-span-4 lg:py-1">
                <ConsultationForm />
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-10 row-start-2 bg-brand-charcoal">
          <HeroFeatureBar />
        </div>
      </div>
    </section>
  );
}
