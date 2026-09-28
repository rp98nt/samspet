import Image from "next/image";
import { StarIcon } from "@/components/icons";
import { site, testimonials } from "@/data/site";

export function TestimonialsSection() {
  return (
    <section className="section-viewport bg-white">
      <div className="section-viewport-inner">
        <div className="mx-auto flex h-full max-w-7xl min-h-0 w-full flex-col">
          <h2
            className="shrink-0 text-center font-[family-name:var(--font-montserrat)] text-[clamp(1.25rem,3vh,1.875rem)] font-bold"
          >
            Our Satisfied Customers
          </h2>
          <p
            className="mx-auto mt-2 max-w-3xl shrink-0 text-center text-[clamp(0.75rem,1.6vh,0.95rem)] text-brand-muted"
          >
            We believe we offer the best dog training in {site.city}, Don&apos;t
            just take our word for it – here is what our clients have to say.
          </p>

          <div className="mt-3 grid min-h-0 flex-1 gap-4 md:grid-cols-3 md:gap-5">
            {testimonials.map((item) => (
              <article key={item.author} className="flex min-h-0 flex-col text-center">
                <div className="relative mx-auto h-14 w-14 shrink-0 overflow-hidden rounded-full sm:h-16 sm:w-16">
                  <Image
                    src={item.image}
                    alt={item.author}
                    fill
                    className="object-cover"
                    sizes="80px"
                  />
                </div>
                <div className="mt-2 flex justify-center gap-1 text-brand-green">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <StarIcon key={i} className="h-3.5 w-3.5" />
                  ))}
                </div>
                <p
                  className="mt-2 min-h-0 flex-1 overflow-hidden font-serif text-[clamp(0.65rem,1.4vh,0.8rem)] leading-snug text-zinc-700"
                >
                  {item.quote}
                </p>
                <p className="mt-2 shrink-0 text-[10px] font-semibold uppercase tracking-wide text-zinc-500">
                  — {item.author} —
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
