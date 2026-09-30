import Image from "next/image";
import Link from "next/link";
import { ValueIcon } from "@/components/about/ValueIcon";
import { aboutPage } from "@/data/site";

export function AboutUsSection() {
  const { hero, story, values, stats } = aboutPage;

  return (
    <section
      id="about"
      className="snap-section flex w-full min-h-0 flex-col overflow-hidden"
    >
      <div
        className="relative w-full shrink-0 overflow-hidden bg-[#141f14] max-lg:max-h-[7.5rem]"
      >
        <div className="absolute inset-0">
          <Image
            src={hero.backgroundImage}
            alt=""
            fill
            className="object-cover object-center opacity-50 blur-sm"
            sizes="100vw"
            priority={false}
          />
          <div
            className="absolute inset-0 bg-gradient-to-r from-[#141f14]/95 via-[#141f14]/75 to-[#141f14]/40"
            aria-hidden
          />
        </div>

        <div
          className="site-container relative grid max-lg:max-h-[7.5rem] max-lg:grid-cols-[minmax(0,1fr)_auto] max-lg:items-center max-lg:gap-2.5 max-lg:py-2 max-lg:text-left grid-cols-1 items-center gap-3 py-3 text-center sm:gap-4 sm:py-5 lg:grid-cols-2 lg:py-6 lg:text-left"
        >
          <div className="min-w-0 text-white max-lg:pr-1">
            <h2
              className="font-[family-name:var(--font-montserrat)] font-bold max-lg:text-left max-lg:text-base max-lg:leading-tight text-xl sm:text-2xl lg:text-[1.75rem]"
            >
              {hero.title}
            </h2>
            <p
              className="mx-auto max-w-md max-lg:mx-0 max-lg:mt-0.5 max-lg:line-clamp-3 max-lg:text-left max-lg:text-[10px] max-lg:leading-snug mt-1.5 text-xs leading-relaxed text-white/90 sm:text-sm"
            >
              {hero.subtitle}
            </p>
          </div>
          <div
            className="relative mx-auto aspect-[4/3] w-full max-w-[220px] shrink-0 max-lg:mx-0 max-lg:h-[4.5rem] max-lg:w-[5.25rem] max-lg:justify-self-end sm:max-w-xs lg:mx-0 lg:ml-auto lg:aspect-auto lg:h-[7.5rem] lg:max-w-none"
          >
            <Image
              src={hero.portraitImage}
              alt="Doberman portrait"
              fill
              className="object-contain object-center max-lg:object-right lg:object-right"
              sizes="(max-width: 1024px) 28vw, 480px"
            />
          </div>
        </div>
      </div>

      <div
        className="flex min-h-0 w-full flex-1 flex-col bg-white max-lg:overflow-visible lg:min-h-0 lg:flex-1 lg:overflow-y-auto"
      >
        <div
          className="site-container flex min-h-0 flex-1 items-stretch py-2 max-lg:flex-none max-lg:overflow-visible max-lg:py-2 sm:py-5 lg:py-6"
        >
          <div
            className="grid w-full grid-cols-1 items-stretch gap-3 max-lg:flex-none max-lg:gap-2.5 max-lg:overflow-visible sm:gap-5 lg:min-h-0 lg:flex-1 lg:grid-cols-12 lg:gap-5"
          >
            <div
              className="flex flex-col max-lg:order-2 max-lg:rounded-2xl max-lg:border max-lg:border-zinc-200/90 max-lg:bg-gradient-to-b max-lg:from-white max-lg:to-[#f5f6f4] max-lg:px-3 max-lg:py-3 max-lg:shadow-sm lg:col-span-4 lg:min-h-0"
            >
              <div className="max-lg:mb-3 lg:contents">
                <h3
                  className="font-[family-name:var(--font-montserrat)] text-2xl font-bold text-zinc-900 max-lg:text-left max-lg:text-lg max-lg:tracking-tight sm:text-3xl"
                >
                  {story.title}
                </h3>
                <span
                  className="mt-2 hidden h-1 w-10 rounded-full bg-brand-green max-lg:block"
                  aria-hidden
                />
              </div>
              <div
                className="mt-3 min-h-0 flex-1 space-y-2 overflow-y-auto text-sm leading-relaxed text-brand-muted max-lg:mt-0 max-lg:flex-none max-lg:overflow-visible max-lg:text-[0.9375rem] max-lg:leading-[1.65] max-lg:text-zinc-700 lg:hidden sm:text-base"
              >
                <p>{story.mobileSummary}</p>
              </div>
              <div
                className="mt-3 hidden min-h-0 flex-1 space-y-2 text-sm leading-relaxed text-brand-muted sm:text-base lg:block lg:overflow-y-auto"
              >
                {story.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                ))}
              </div>
              <Link
                href={story.ctaHref}
                className="mt-4 inline-flex w-fit shrink-0 items-center justify-center gap-2 rounded-full bg-brand-green px-6 py-2 font-[family-name:var(--font-montserrat)] text-xs font-bold uppercase tracking-wide text-black transition hover:bg-brand-green-dark max-lg:mt-5 max-lg:w-full max-lg:py-2.5 sm:text-sm lg:mt-4 lg:w-fit"
              >
                {story.cta}
                <span aria-hidden>→</span>
              </Link>
            </div>

            <div
              className="relative min-h-[8.5rem] overflow-hidden rounded-2xl shadow-lg max-lg:order-1 max-lg:shrink-0 sm:min-h-[11rem] lg:col-span-4 lg:min-h-0"
            >
              <Image
                src={story.trainerImage}
                alt="Trainer with a dog"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
            </div>

            <div
              className="hidden min-h-0 flex-col justify-center rounded-2xl bg-[#1a2618] px-4 py-3 shadow-xl sm:px-5 sm:py-4 lg:col-span-4 lg:flex"
            >
              <ul className="space-y-3">
                {values.map((item) => (
                  <li key={item.title} className="flex gap-3">
                    <ValueIcon type={item.icon} />
                    <div>
                      <p
                        className="font-[family-name:var(--font-montserrat)] text-sm font-bold text-brand-green"
                      >
                        {item.title}
                      </p>
                      <p className="mt-0.5 text-xs text-white/85 sm:text-sm">
                        {item.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div
        className="w-full shrink-0 border-t border-zinc-200 bg-[#f3f4f2] py-2.5 max-lg:py-[0.4375rem] sm:py-5"
      >
        <div className="site-container max-lg:px-3">
          <div
            className="mx-auto grid w-full max-w-6xl grid-cols-2 gap-2 max-lg:gap-1.5 sm:gap-2 lg:grid-cols-4"
          >
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`flex flex-col items-center justify-center text-center ${
                  index % 2 === 1 ? "border-l border-zinc-300" : ""
                } ${index > 0 ? "lg:border-l lg:border-zinc-300" : ""}`}
              >
                <p
                  className="font-[family-name:var(--font-montserrat)] text-2xl font-bold leading-none text-zinc-900 max-lg:text-lg sm:text-3xl"
                >
                  {stat.value}
                </p>
                <p
                  className="mt-1 text-xs leading-tight text-brand-muted max-lg:mt-0.5 max-lg:text-[10px] sm:text-sm"
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
