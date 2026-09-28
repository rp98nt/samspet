import Image from "next/image";
import Link from "next/link";
import { aboutPage } from "@/data/site";

function ValueIcon({ type }: { type: (typeof aboutPage.values)[number]["icon"] }) {
  const className = "h-6 w-6 shrink-0 text-brand-green sm:h-7 sm:w-7";
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
    <section id="about" className="section-viewport flex flex-col bg-white">
      <div className="relative min-h-0 shrink-0 basis-[22%] overflow-hidden bg-[#141f14]">
        <div className="absolute inset-0">
          <Image
            src={hero.backgroundImage}
            alt=""
            fill
            className="object-cover object-center opacity-50 blur-sm"
            sizes="100vw"
          />
          <div
            className="absolute inset-0 bg-gradient-to-r from-[#141f14]/95 via-[#141f14]/75 to-[#141f14]/40"
            aria-hidden
          />
        </div>
        <div
          className="relative mx-auto flex h-full max-w-7xl items-center gap-4 px-4 lg:grid lg:grid-cols-2 lg:gap-8 lg:px-6"
        >
          <div className="text-white">
            <h2
              className="font-[family-name:var(--font-montserrat)] text-[clamp(1.5rem,4vh,2.5rem)] font-bold"
            >
              {hero.title}
            </h2>
            <p className="mt-1 max-w-md text-[clamp(0.75rem,1.8vh,1rem)] leading-snug text-white/90">
              {hero.subtitle}
            </p>
          </div>
          <div className="relative hidden h-full min-h-[80px] lg:block">
            <Image
              src={hero.portraitImage}
              alt="Doberman portrait"
              fill
              className="object-contain object-right"
              sizes="320px"
            />
          </div>
        </div>
      </div>

      <div className="flex min-h-0 flex-1 flex-col justify-center py-2">
        <div className="mx-auto grid h-full max-h-full w-full max-w-7xl min-h-0 grid-cols-1 gap-3 px-4 lg:grid-cols-12 lg:items-stretch lg:gap-4 lg:px-6">
          <div className="flex min-h-0 flex-col justify-center lg:col-span-4">
            <h3
              className="font-[family-name:var(--font-montserrat)] text-[clamp(1.25rem,2.5vh,2rem)] font-bold text-zinc-900"
            >
              {story.title}
            </h3>
            <div className="mt-2 space-y-2 text-[clamp(0.7rem,1.5vh,0.875rem)] leading-snug text-brand-muted">
              {story.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 40)} className="line-clamp-3 lg:line-clamp-none">
                  {paragraph}
                </p>
              ))}
            </div>
            <Link
              href={story.ctaHref}
              className="mt-3 inline-flex w-fit items-center gap-2 rounded-full bg-brand-green px-5 py-2 font-[family-name:var(--font-montserrat)] text-[10px] font-bold uppercase tracking-wide text-black transition hover:bg-brand-green-dark sm:text-xs"
            >
              {story.cta}
              <span aria-hidden>→</span>
            </Link>
          </div>

          <div className="relative min-h-[120px] overflow-hidden rounded-xl shadow-lg lg:col-span-4 lg:min-h-0 lg:h-full">
            <Image
              src={story.trainerImage}
              alt="Trainer with a dog"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 33vw"
            />
          </div>

          <div
            className="flex min-h-0 flex-col justify-center rounded-xl bg-[#1a2618] px-4 py-3 shadow-xl sm:px-5 lg:col-span-4 lg:py-4"
          >
            <ul className="space-y-3">
              {values.map((item) => (
                <li key={item.title} className="flex gap-3">
                  <ValueIcon type={item.icon} />
                  <div>
                    <p
                      className="font-[family-name:var(--font-montserrat)] text-xs font-bold text-brand-green sm:text-sm"
                    >
                      {item.title}
                    </p>
                    <p className="text-[11px] text-white/85 sm:text-xs">{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="shrink-0 border-t border-zinc-200 bg-[#f3f4f2] py-3 lg:py-4">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-4 px-4 sm:grid-cols-3 sm:gap-2 lg:px-6">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`flex flex-col items-center text-center ${
                index > 0 ? "sm:border-l sm:border-zinc-300" : ""
              }`}
            >
              <p
                className="font-[family-name:var(--font-montserrat)] text-[clamp(1.5rem,3.5vh,2.5rem)] font-bold text-zinc-900"
              >
                {stat.value}
              </p>
              <p className="text-[11px] text-brand-muted sm:text-xs">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
