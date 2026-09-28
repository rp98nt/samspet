import Image from "next/image";
import Link from "next/link";
import { aboutPage } from "@/data/site";

function ValueIcon({ type }: { type: (typeof aboutPage.values)[number]["icon"] }) {
  const className = "h-8 w-8 shrink-0 text-brand-green";
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
    <div id="about">
      <section className="relative overflow-hidden bg-[#141f14]">
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

        <div className="relative mx-auto grid max-w-7xl items-center gap-8 px-4 py-14 sm:py-16 lg:grid-cols-2 lg:gap-12 lg:px-6 lg:py-20">
          <div className="text-white">
            <h2
              className="font-[family-name:var(--font-montserrat)] text-4xl font-bold sm:text-5xl lg:text-[3.25rem]"
            >
              {hero.title}
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-white/90 sm:text-lg">
              {hero.subtitle}
            </p>
          </div>
          <div className="relative mx-auto aspect-[4/3] w-full max-w-lg lg:mx-0 lg:ml-auto lg:aspect-auto lg:h-[280px] lg:max-w-none">
            <Image
              src={hero.portraitImage}
              alt="Doberman portrait"
              fill
              className="object-contain object-center lg:object-right"
              sizes="(max-width: 1024px) 90vw, 480px"
            />
          </div>
        </div>
      </section>

      <section className="bg-white py-14 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-4">
              <h3
                className="font-[family-name:var(--font-montserrat)] text-3xl font-bold text-zinc-900 sm:text-4xl"
              >
                {story.title}
              </h3>
              <div className="mt-6 space-y-4 text-sm leading-relaxed text-brand-muted sm:text-base">
                {story.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                ))}
              </div>
              <Link
                href={story.ctaHref}
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand-green px-8 py-3 font-[family-name:var(--font-montserrat)] text-xs font-bold uppercase tracking-wide text-black transition hover:bg-brand-green-dark sm:text-sm"
              >
                {story.cta}
                <span aria-hidden>→</span>
              </Link>
            </div>

            <div className="relative aspect-[3/4] overflow-hidden rounded-2xl shadow-lg lg:col-span-4 lg:aspect-auto lg:min-h-[420px]">
              <Image
                src={story.trainerImage}
                alt="Trainer with a dog"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
            </div>

            <div
              className="rounded-2xl bg-[#1a2618] px-5 py-6 shadow-xl sm:px-6 sm:py-8 lg:col-span-4"
            >
              <ul className="space-y-6">
                {values.map((item) => (
                  <li key={item.title} className="flex gap-4">
                    <ValueIcon type={item.icon} />
                    <div>
                      <p
                        className="font-[family-name:var(--font-montserrat)] text-sm font-bold text-brand-green sm:text-base"
                      >
                        {item.title}
                      </p>
                      <p className="mt-1 text-sm text-white/85">{item.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-zinc-200 bg-[#f3f4f2] py-10 lg:py-12">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 sm:grid-cols-3 sm:gap-4 lg:px-6">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`flex flex-col items-center text-center ${
                index > 0 ? "sm:border-l sm:border-zinc-300" : ""
              }`}
            >
              <p
                className="font-[family-name:var(--font-montserrat)] text-4xl font-bold text-zinc-900 sm:text-5xl"
              >
                {stat.value}
              </p>
              <p className="mt-2 text-sm text-brand-muted sm:text-base">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
