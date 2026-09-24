import Image from "next/image";
import Link from "next/link";
import { CheckIcon, PlayIcon } from "@/components/icons";
import { site, whyChoosePoints } from "@/data/site";

const videoThumb =
  "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=900&q=80";

export function WhyChooseSection() {
  return (
    <section id="about" className="bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <h2 className="text-center font-[family-name:var(--font-montserrat)] text-3xl font-bold text-zinc-900">
          Why Choose {site.name}
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-center leading-relaxed text-brand-muted">
          {site.name} is your trusted pet training partner in {site.city}, with
          years of experience helping dogs and families thrive through
          compassionate, science-based methods.
        </p>

        <div className="mt-12 grid items-center gap-10 lg:grid-cols-2">
          <button
            type="button"
            className="group relative aspect-video w-full overflow-hidden rounded-md shadow-lg"
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
              <PlayIcon className="h-16 w-16" />
            </span>
          </button>

          <ul className="space-y-4">
            {whyChoosePoints.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <CheckIcon className="mt-0.5 h-6 w-6 shrink-0 text-brand-green" />
                <span className="text-lg text-zinc-800">{point}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-12 rounded-md bg-brand-charcoal px-6 py-5 text-center text-white sm:flex sm:items-center sm:justify-between sm:text-left">
          <p className="text-sm uppercase tracking-wide text-zinc-300">
            Ready to start training?
          </p>
          <Link
            href={site.phoneHref}
            className="mt-2 block font-[family-name:var(--font-montserrat)] text-2xl font-bold text-brand-green sm:mt-0"
          >
            {site.phone}
          </Link>
        </div>
      </div>
    </section>
  );
}
