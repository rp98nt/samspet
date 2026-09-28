import Image from "next/image";
import { CheckIcon, PlayIcon } from "@/components/icons";
import { PhoneLink } from "@/components/PhoneLink";
import { site, whyChoosePoints } from "@/data/site";

const videoThumb =
  "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=900&q=80";

export function WhyChooseSection() {
  return (
    <section id="why-choose" className="section-viewport bg-white">
      <div className="section-viewport-inner">
        <div className="mx-auto flex h-full max-w-7xl min-h-0 w-full flex-col">
          <h2
            className="shrink-0 text-center font-[family-name:var(--font-montserrat)] text-[clamp(1.25rem,3vh,1.875rem)] font-bold text-zinc-900"
          >
            Why Choose {site.name}
          </h2>
          <p
            className="mx-auto mt-2 max-w-3xl shrink-0 text-center text-[clamp(0.75rem,1.6vh,0.95rem)] leading-snug text-brand-muted"
          >
            {site.name} is your trusted pet training partner in {site.city}, with
            years of experience helping dogs and families thrive through
            compassionate, science-based methods.
          </p>

          <div className="mt-3 grid min-h-0 flex-1 items-center gap-4 lg:grid-cols-2 lg:gap-6">
            <button
              type="button"
              className="group relative min-h-0 h-full max-h-[38vh] w-full overflow-hidden rounded-md shadow-lg lg:max-h-none"
              aria-label="Play introduction video"
            >
              <Image
                src={videoThumb}
                alt="Trainer walking a dog in the park"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <span className="absolute inset-0 flex items-center justify-center bg-black/20 transition group-hover:bg-black/30">
                <PlayIcon className="h-12 w-12 lg:h-16 lg:w-16" />
              </span>
            </button>

            <ul className="min-h-0 space-y-2 overflow-hidden lg:space-y-2.5">
              {whyChoosePoints.map((point) => (
                <li key={point} className="flex items-start gap-2">
                  <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-brand-green" />
                  <span className="text-[clamp(0.75rem,1.5vh,1rem)] text-zinc-800">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div
            className="mt-2 shrink-0 rounded-md bg-brand-charcoal px-4 py-3 text-center text-white sm:flex sm:items-center sm:justify-between sm:text-left"
          >
            <p className="text-[10px] uppercase tracking-wide text-zinc-300 sm:text-xs">
              Ready to start training?
            </p>
            <PhoneLink
              className="mt-1 block font-[family-name:var(--font-montserrat)] text-base font-bold sm:mt-0 sm:text-lg"
              linkClassName="text-brand-green hover:underline"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
