import Image from "next/image";
import Link from "next/link";
import { PhoneLink } from "@/components/PhoneLink";
import { services } from "@/data/site";

export function ServicesSection() {
  return (
    <section id="services" className="section-viewport wood-texture">
      <div className="picket-top shrink-0" aria-hidden />
      <div className="section-viewport-inner">
        <div className="mx-auto flex h-full max-w-7xl min-h-0 w-full flex-col">
          <h2
            className="shrink-0 text-center font-[family-name:var(--font-montserrat)] text-[clamp(1.25rem,3vh,1.875rem)] font-semibold text-zinc-800"
          >
            Services We Offer
          </h2>
          <div className="mt-3 grid min-h-0 flex-1 grid-cols-2 gap-2 sm:gap-3 lg:grid-cols-4 lg:gap-4">
            {services.map((service) => (
              <article
                key={service.title}
                className="group relative min-h-0 overflow-hidden rounded-sm shadow-md"
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition duration-300 group-hover:scale-105"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-brand-teal/95 to-brand-teal/70 px-2 py-2 sm:px-3 sm:py-3">
                  <h3
                    className="text-center font-[family-name:var(--font-montserrat)] text-[10px] font-bold uppercase tracking-wide text-white sm:text-xs lg:text-sm"
                  >
                    {service.title}
                  </h3>
                </div>
              </article>
            ))}
          </div>
          <p className="mt-2 shrink-0 text-center text-[11px] text-brand-muted sm:text-xs">
            <Link href="#consultation" className="underline hover:text-brand-green-dark">
              Sign Up
            </Link>{" "}
            for a Customized Consultation or give us a call{" "}
            <PhoneLink linkClassName="font-semibold text-brand-green-dark hover:underline" />
          </p>
        </div>
      </div>
    </section>
  );
}
