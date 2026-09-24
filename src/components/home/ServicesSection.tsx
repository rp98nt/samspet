import Image from "next/image";
import Link from "next/link";
import { services, site } from "@/data/site";

export function ServicesSection() {
  return (
    <section id="services" className="wood-texture">
      <div className="picket-top" aria-hidden />
      <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
        <h2 className="text-center font-[family-name:var(--font-montserrat)] text-3xl font-semibold text-zinc-800">
          Services We Offer
        </h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <article
              key={service.title}
              className="group relative aspect-[4/5] overflow-hidden rounded-sm shadow-md"
            >
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover transition duration-300 group-hover:scale-105"
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-brand-teal/95 to-brand-teal/70 px-4 py-4">
                <h3 className="text-center font-[family-name:var(--font-montserrat)] text-sm font-bold uppercase tracking-wide text-white sm:text-base">
                  {service.title}
                </h3>
              </div>
            </article>
          ))}
        </div>
        <p className="mt-10 text-center text-brand-muted">
          <Link href="#consultation" className="underline hover:text-brand-green-dark">
            Sign Up
          </Link>{" "}
          for a Customized Consultation or give us a call{" "}
          <a href={site.phoneHref} className="font-semibold text-brand-green-dark">
            {site.phone}
          </a>
        </p>
      </div>
    </section>
  );
}
