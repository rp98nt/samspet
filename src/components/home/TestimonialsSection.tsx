import Image from "next/image";
import { StarIcon } from "@/components/icons";
import { testimonials } from "@/data/site";

export function TestimonialsSection() {
  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <h2 className="text-center font-[family-name:var(--font-montserrat)] text-3xl font-bold">
          Our Satisfied Customers
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-center text-brand-muted">
          We believe we offer the best dog training in Austin, TX. Don&apos;t just
          take our word for it – here is what our clients have to say.
        </p>

        <div className="mt-12 grid gap-10 md:grid-cols-3">
          {testimonials.map((item) => (
            <article key={item.author} className="text-center">
              <div className="relative mx-auto h-20 w-20 overflow-hidden rounded-full">
                <Image
                  src={item.image}
                  alt={item.author}
                  fill
                  className="object-cover"
                  sizes="80px"
                />
              </div>
              <div className="mt-4 flex justify-center gap-1 text-brand-green">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon key={i} className="h-4 w-4" />
                ))}
              </div>
              <p className="mt-4 font-serif text-sm leading-relaxed text-zinc-700">
                {item.quote}
              </p>
              <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-zinc-500">
                — {item.author} —
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
