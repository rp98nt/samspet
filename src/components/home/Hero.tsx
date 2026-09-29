import Image from "next/image";
import { HeroCopy } from "@/components/home/HeroCopy";
import { HeroFeatureBar } from "@/components/home/HeroFeatureBar";

const heroImage = "/images/hero/man-with-dog.png";
const HERO_IMAGE_WIDTH = 1657;
const HERO_IMAGE_HEIGHT = 702;
const heroImageWidthCss = `calc(100cqh * ${HERO_IMAGE_WIDTH} / ${HERO_IMAGE_HEIGHT})`;

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex h-full min-h-0 flex-col overflow-hidden bg-black"
    >
      <div className="relative flex min-h-0 min-w-0 flex-1 flex-col">
        <div
          className="pointer-events-none absolute inset-0 overflow-hidden [container-type:size]"
        >
          <div
            className="absolute top-0 left-1/2 h-full -translate-x-1/2"
            style={{ width: `max(100cqw, ${heroImageWidthCss})` }}
          >
            <Image
              src={heroImage}
              alt="Dog trainer standing with a Doberman"
              fill
              priority
              quality={90}
              className="object-contain object-center"
              sizes="100vw"
            />
          </div>
        </div>

        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/15 to-black/65" />
          <div
            className="absolute inset-0 bg-[radial-gradient(ellipse_90%_120%_at_0%_50%,rgba(0,0,0,0.5)_0%,rgba(0,0,0,0.18)_42%,transparent_72%)]"
          />
        </div>

        <div className="site-container relative z-10 flex min-h-0 flex-1 flex-col justify-center overflow-visible py-8 sm:py-10">
          <HeroCopy />
        </div>
      </div>

      <HeroFeatureBar />
    </section>
  );
}
