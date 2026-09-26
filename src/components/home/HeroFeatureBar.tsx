import { heroFeatures } from "@/data/site";

function FeatureIcon({ type }: { type: (typeof heroFeatures)[number]["icon"] }) {
  const className = "h-5 w-5 shrink-0 text-brand-green";
  switch (type) {
    case "shield":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M12 3 5 6v6c0 4.5 3 7.5 7 9 4-1.5 7-4.5 7-9V6l-7-3Z"
            stroke="currentColor"
            strokeWidth="1.5"
          />
        </svg>
      );
    case "paw":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <circle cx="8" cy="8" r="2" />
          <circle cx="16" cy="8" r="2" />
          <circle cx="6" cy="13" r="2" />
          <circle cx="18" cy="13" r="2" />
          <path d="M12 11c-2.5 0-4.5 1.5-5 4 2 .5 4 .5 5 0 .5 2.5 3 4 5 4-.5-2.5-2.5-4-5-4Z" />
        </svg>
      );
    case "brain":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M8 5a3 3 0 0 0-3 3v1a2 2 0 0 0 0 4v1a3 3 0 0 0 3 3m8-12a3 3 0 0 1 3 3v1a2 2 0 0 1 0 4v1a3 3 0 0 1-3 3M12 5v14"
            stroke="currentColor"
            strokeWidth="1.5"
          />
        </svg>
      );
    case "house":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M4 10.5 12 4l8 6.5V20a1 1 0 0 1-1 1h-5v-6H10v6H5a1 1 0 0 1-1-1v-9.5Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </svg>
      );
  }
}

export function HeroFeatureBar() {
  return (
    <div className="relative z-10 border-t border-white/10 bg-black/55 backdrop-blur-sm">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-3 px-4 py-4 min-[480px]:grid-cols-2 lg:grid-cols-4 lg:gap-4 lg:px-6 lg:py-5">
        {heroFeatures.map((feature) => (
          <div
            key={feature.label}
            className="flex items-center justify-center gap-2 text-center min-[480px]:justify-start lg:justify-start"
          >
            <FeatureIcon type={feature.icon} />
            <span className="font-[family-name:var(--font-montserrat)] text-[10px] font-bold uppercase leading-snug tracking-wide text-white sm:text-xs">
              {feature.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
