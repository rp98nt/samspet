import Image from "next/image";
import Link from "next/link";

const beagleImage =
  "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?auto=format&fit=crop&w=400&q=80";

export function ConsultationBanner() {
  return (
    <section className="bg-brand-green py-8 lg:py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 lg:flex-row lg:justify-between lg:px-6">
        <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-full border-4 border-white/40 lg:h-32 lg:w-32">
          <Image
            src={beagleImage}
            alt="Beagle looking at camera"
            fill
            className="object-cover"
            sizes="128px"
          />
        </div>
        <p className="max-w-2xl text-center text-lg font-medium text-zinc-800 lg:text-left">
          Set up a free consultation to see what level of dog training your best
          friend needs.
        </p>
        <Link
          href="#consultation"
          className="shrink-0 rounded-md bg-brand-charcoal px-8 py-3 text-sm font-bold uppercase tracking-wide text-white hover:bg-black"
        >
          Request a Consultation
        </Link>
      </div>
    </section>
  );
}
