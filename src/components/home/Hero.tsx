import Image from "next/image";
import { ConsultationForm } from "@/components/home/ConsultationForm";
import { HeroCopy } from "@/components/home/HeroCopy";
import { HeroFeatureBar } from "@/components/home/HeroFeatureBar";
import { SiteHeader } from "@/components/layout/SiteHeader";

const heroImageDesktop = "/images/hero/man-with-dog.png";
const heroImageMobile = "/images/hero/man-with-dog-mobile.png";

/** Fixed px size — desktop background does not shrink with viewport */
const HERO_BG_WIDTH_PX = 1659;
const HERO_BG_HEIGHT_PX = 598;
const HERO_BG_OFFSET_LEFT_PX = 20;
const HERO_BG_OFFSET_DOWN_PX = 5;

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex flex-col bg-brand-charcoal lg:h-[720px] lg:overflow-hidden"
    >
      <SiteHeader />

      {/* Mobile: hero image as background; copy + form overlay (may overlap image) */}
      <div className="flex flex-col lg:hidden">
        <div className="relative flex min-h-[calc(100vw*725/575)] flex-col">
          <div className="pointer-events-none absolute inset-0 z-0 bg-[#1a1a1a]">
            <Image
              src={heroImageMobile}
              alt="Dog trainer standing with a Doberman"
              fill
              priority
              className="object-contain object-center"
              sizes="100vw"
            />
          </div>
          <div
            className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-black/75 via-black/35 to-black/65"
            aria-hidden
          />
          <div className="relative z-10 flex flex-col">
            <div className="px-4 py-6 sm:px-5">
              <HeroCopy layout="mobile" />
            </div>
            <div className="px-4 pb-5 pt-2 sm:px-5">
              <ConsultationForm />
            </div>
          </div>
        </div>
        <HeroFeatureBar />
      </div>

      {/* Desktop: hero image + copy/form live above the feature bar (image not behind strip) */}
      <div className="relative hidden min-h-0 flex-1 flex-col lg:flex">
        <div className="relative flex min-h-0 flex-1 flex-col overflow-hidden">
          <div className="absolute inset-0 bg-[#1a1a1a]">
            <div
              className="absolute left-1/2 top-1/2"
              style={{
                width: HERO_BG_WIDTH_PX,
                height: HERO_BG_HEIGHT_PX,
                transform: `translate(calc(-50% - ${HERO_BG_OFFSET_LEFT_PX}px), calc(-50% + ${HERO_BG_OFFSET_DOWN_PX}px))`,
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
            className="relative z-10 mx-auto flex w-full max-w-7xl min-h-0 flex-1 flex-col px-6 lg:py-0"
          >
            <div className="grid min-h-0 flex-1 grid-cols-12 gap-6 lg:items-stretch">
              <div className="flex items-center lg:col-span-4">
                <HeroCopy layout="desktop" />
              </div>
              <div className="hidden lg:block lg:col-span-4" aria-hidden />
              <div className="flex h-full min-h-0 items-center justify-end lg:col-span-4">
                <ConsultationForm />
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-10 shrink-0 bg-brand-charcoal">
          <HeroFeatureBar />
        </div>
      </div>
    </section>
  );
}
