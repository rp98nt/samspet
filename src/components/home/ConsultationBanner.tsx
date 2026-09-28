import Image from "next/image";
import Link from "next/link";

const beagleImage =
  "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?auto=format&fit=crop&w=400&q=80";

export function ConsultationBanner() {
  return (
    <section className="section-viewport bg-brand-green">
      <div className="section-viewport-inner">
        <div
          className="mx-auto flex h-full max-w-7xl w-full flex-col items-center justify-center gap-4 lg:flex-row lg:justify-between"
        >
          <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full border-4 border-white/40 lg:h-24 lg:w-24">
            <Image
              src={beagleImage}
              alt="Beagle looking at camera"
              fill
              className="object-cover"
              sizes="128px"
            />
          </div>
          <p
            className="max-w-2xl text-center text-[clamp(0.9rem,2vh,1.125rem)] font-medium text-zinc-800 lg:text-left"
          >
            Set up a free consultation to see what level of dog training your best
            friend needs.
          </p>
          <Link
            href="#consultation"
            className="shrink-0 rounded-md bg-brand-charcoal px-6 py-2.5 text-xs font-bold uppercase tracking-wide text-white hover:bg-black sm:text-sm"
          >
            Request a Consultation
          </Link>
        </div>
      </div>
    </section>
  );
}
