import Image from "next/image";
import Link from "next/link";
import { aboutPage } from "@/data/site";

function ValueIcon({ type }: { type: (typeof aboutPage.values)[number]["icon"] }) {
  const className = "h-7 w-7 shrink-0 text-brand-green sm:h-8 sm:w-8";
  switch (type) {
    case "paw-gear":
      return (
        <svg className={className} viewBox="0 0 32 32" fill="none" aria-hidden>
          <circle cx="16" cy="16" r="10" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="12" cy="12" r="2" fill="currentColor" />
          <circle cx="20" cy="12" r="2" fill="currentColor" />
          <path
            d="M11 18c1.5 2 4.5 2.5 5 2.5s3.5-.5 5-2.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      );
    case "trainer":
      return (
        <svg className={className} viewBox="0 0 32 32" fill="none" aria-hidden>
          <circle cx="11" cy="10" r="3" stroke="currentColor" strokeWidth="1.5" />
          <path
            d="M6 24c0-3.5 2.5-6 5-6s5 2.5 5 6"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <circle cx="22" cy="14" r="2.5" fill="currentColor" />
          <path
            d="M18 22c1-2 2.5-3 4-3 2 0 3.5 2 4 5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      );
    case "shield":
      return (
        <svg className={className} viewBox="0 0 32 32" fill="none" aria-hidden>
          <path
            d="M16 4 8 7.5v7c0 5 4 8.5 8 10 4-1.5 8-5 8-10v-7L16 4Z"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <circle cx="13" cy="14" r="1.5" fill="currentColor" />
          <circle cx="19" cy="14" r="1.5" fill="currentColor" />
        </svg>
      );
    case "support":
      return (
        <svg className={className} viewBox="0 0 32 32" fill="none" aria-hidden>
          <path
            d="M6 14a10 10 0 0 1 20 0v2a3 3 0 0 1-3 3h-1.5l-2 3v-5H11a3 3 0 0 1-3-3v-2Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <path d="M12 22v2a2 2 0 0 0 2 2h1" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      );
  }
}

export function AboutUsSection() {
  const { hero, story, values, stats } = aboutPage;

  return (
    <section
      id="about"
      className="flex h-[100svh] w-full min-h-0 flex-col overflow-hidden"
    >
      <div className="relative w-full shrink-0 overflow-hidden bg-[#141f14]">
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
          className="site-container relative grid items-center gap-3 py-4 sm:gap-4 sm:py-5 lg:grid-cols-2 lg:py-6"
        >
          <div className="text-white">
            <h2
              className="font-[family-name:var(--font-montserrat)] text-xl font-bold sm:text-2xl lg:text-[1.75rem]"
            >
              {hero.title}
            </h2>
            <p className="mt-1.5 max-w-md text-xs leading-relaxed text-white/90 sm:text-sm">
              {hero.subtitle}
            </p>
          </div>
          <div
            className="relative mx-auto aspect-[4/3] w-full max-w-[220px] sm:max-w-xs lg:mx-0 lg:ml-auto lg:aspect-auto lg:h-[7.5rem] lg:max-w-none"
          >
            <Image
              src={hero.portraitImage}
              alt="Doberman portrait"
              fill
              className="object-contain object-center lg:object-right"
              sizes="(max-width: 1024px) 40vw, 480px"
            />
          </div>
        </div>
      </div>

      <div className="flex min-h-0 w-full flex-1 flex-col bg-white">
        <div className="site-container flex min-h-0 flex-1 items-stretch py-4 sm:py-5 lg:py-6">
          <div className="grid min-h-0 w-full flex-1 grid-cols-1 items-stretch gap-5 lg:grid-cols-12 lg:gap-5">
            <div className="flex min-h-0 flex-col lg:col-span-4">
              <h3
                className="font-[family-name:var(--font-montserrat)] text-2xl font-bold text-zinc-900 sm:text-3xl"
              >
                {story.title}
              </h3>
              <div className="mt-3 min-h-0 flex-1 space-y-2 overflow-y-auto text-sm leading-relaxed text-brand-muted sm:text-base">
                {story.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                ))}
              </div>
              <Link
                href={story.ctaHref}
                className="mt-4 inline-flex w-fit shrink-0 items-center gap-2 rounded-full bg-brand-green px-6 py-2 font-[family-name:var(--font-montserrat)] text-xs font-bold uppercase tracking-wide text-black transition hover:bg-brand-green-dark sm:text-sm"
              >
                {story.cta}
                <span aria-hidden>→</span>
              </Link>
            </div>

            <div className="relative min-h-[10rem] overflow-hidden rounded-2xl shadow-lg sm:min-h-[12rem] lg:col-span-4 lg:min-h-0">
              <Image
                src={story.trainerImage}
                alt="Trainer with a dog"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
            </div>

            <div
              className="flex min-h-0 flex-col justify-center rounded-2xl bg-[#1a2618] px-4 py-3 shadow-xl sm:px-5 sm:py-4 lg:col-span-4"
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

      <div className="w-full shrink-0 border-t border-zinc-200 bg-[#f3f4f2] py-4 sm:py-5">
        <div className="site-container">
          <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`flex flex-col items-center text-center ${
                  index > 0 ? "sm:border-l sm:border-zinc-300" : ""
                }`}
              >
                <p
                  className="font-[family-name:var(--font-montserrat)] text-2xl font-bold text-zinc-900 sm:text-3xl"
                >
                  {stat.value}
                </p>
                <p className="mt-1 text-xs text-brand-muted sm:text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
