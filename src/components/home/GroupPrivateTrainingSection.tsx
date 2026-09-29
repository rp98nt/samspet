import Image from "next/image";
import Link from "next/link";
import { groupPrivateTrainingPage } from "@/data/site";

function GroupIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="8" cy="8" r="3" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="16" cy="8" r="3" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M4 18c0-2.5 2-4.5 4-4.5s4 2 4 4.5M12 18c0-2.5 2-4.5 4-4.5s4 2 4 4.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function PrivateIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="8" r="3.5" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M6 20c0-3.5 2.5-6 6-6s6 2.5 6 6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function PawAccent({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <ellipse cx="7" cy="8" rx="2.2" ry="2.8" />
      <ellipse cx="12" cy="6" rx="2.2" ry="2.8" />
      <ellipse cx="17" cy="8" rx="2.2" ry="2.8" />
      <path d="M6 12c1.5 4 4.5 6 6 6s4.5-2 6-6c-2.5 1.5-9.5 1.5-12 0Z" />
    </svg>
  );
}

type TrainingCardProps = {
  icon: "group" | "private";
  title: string;
  tagline: string;
  items: readonly string[];
  cta: string;
  ctaHref: string;
};

function TrainingCard({ icon, title, tagline, items, cta, ctaHref }: TrainingCardProps) {
  const Icon = icon === "group" ? GroupIcon : PrivateIcon;

  return (
    <article
      className="flex h-full min-h-0 flex-col rounded-2xl border border-white/10 bg-black/75 px-5 py-5 shadow-xl backdrop-blur-md sm:px-6 sm:py-6 lg:px-8 lg:py-7"
    >
      <div className="flex items-start gap-3">
        <Icon className="mt-0.5 h-7 w-7 shrink-0 text-brand-green sm:h-8 sm:w-8" />
        <div>
          <h3
            className="font-[family-name:var(--font-montserrat)] text-base font-bold leading-snug text-white sm:text-lg lg:text-xl"
          >
            {title}
          </h3>
          <p className="mt-1 text-sm text-white/70 sm:text-base">{tagline}</p>
        </div>
      </div>
      <ul className="mt-5 flex min-h-0 flex-1 flex-col justify-evenly py-1 sm:mt-6 sm:py-2">
        {items.map((item) => (
          <li
            key={item}
            className="flex items-center gap-3 text-base font-medium leading-relaxed text-white/95 sm:gap-3.5 sm:text-lg"
          >
            <span
              className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-green text-[11px] font-bold text-black sm:h-7 sm:w-7 sm:text-xs"
              aria-hidden
            >
              ✓
            </span>
            <span className="min-w-0 flex-1">{item}</span>
          </li>
        ))}
      </ul>
      <Link
        href={ctaHref}
        className="mt-5 inline-flex w-full shrink-0 items-center justify-center gap-2 rounded-full bg-brand-green px-5 py-3 font-[family-name:var(--font-montserrat)] text-xs font-bold uppercase tracking-wide text-black transition hover:bg-brand-green-dark sm:mt-6 sm:py-3.5 sm:text-sm"
      >
        {cta}
        <span aria-hidden>→</span>
      </Link>
    </article>
  );
}

export function GroupPrivateTrainingSection() {
  const { hero, group, private: privateTraining, quote } = groupPrivateTrainingPage;

  return (
    <section
      id="group-private-training"
      className="snap-section flex w-full min-h-0 flex-col overflow-hidden bg-[#0a120a]"
      aria-labelledby="group-private-training-title"
    >
      <div className="relative flex min-h-0 w-full flex-1 flex-col">
        <Image
          src={hero.image}
          alt=""
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/45 to-black/80" />

        <div className="site-container relative z-10 flex min-h-0 flex-1 flex-col pb-3 sm:pb-4 lg:pb-5">
          <div className="shrink-0 pt-5 sm:pt-6 lg:pt-8">
            <h2
              id="group-private-training-title"
              className="max-w-3xl font-[family-name:var(--font-montserrat)] text-xl font-bold leading-tight text-white sm:text-2xl lg:text-3xl xl:text-4xl"
            >
              {hero.title}
            </h2>
            <p className="mt-1 text-sm text-white/90 sm:mt-2 sm:text-base lg:text-lg">
              {hero.subtitle}
            </p>
          </div>

          <div
            className="mt-4 grid min-h-0 flex-1 auto-rows-fr gap-4 sm:mt-5 sm:grid-cols-2 sm:gap-5 lg:mt-6 lg:gap-6"
          >
            <TrainingCard
              icon="group"
              title={group.title}
              tagline={group.tagline}
              items={group.items}
              cta={group.cta}
              ctaHref={group.ctaHref}
            />
            <TrainingCard
              icon="private"
              title={privateTraining.title}
              tagline={privateTraining.tagline}
              items={privateTraining.items}
              cta={privateTraining.cta}
              ctaHref={privateTraining.ctaHref}
            />
          </div>
        </div>
      </div>

      <div
        className="relative z-10 w-full shrink-0 bg-[#141f14]/95"
      >
        <div className="site-container flex h-14 w-full items-center gap-4 sm:h-16 lg:h-[4.5rem]">
        <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full border-2 border-brand-green/40 sm:h-12 sm:w-12">
          <Image
            src={quote.portrait}
            alt=""
            fill
            className="object-cover"
            sizes="48px"
          />
        </div>
        <p
          className="ml-auto flex items-center gap-2 text-right font-[family-name:var(--font-montserrat)] text-sm italic text-white sm:text-base lg:text-lg"
        >
          {quote.text}
          <PawAccent className="h-5 w-5 shrink-0 text-brand-green sm:h-6 sm:w-6" />
        </p>
        </div>
      </div>
    </section>
  );
}
