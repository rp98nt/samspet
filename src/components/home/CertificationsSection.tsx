import { certifications } from "@/data/site";

export function CertificationsSection() {
  return (
    <section className="section-viewport wood-texture border-y border-zinc-200">
      <div className="section-viewport-inner">
        <div
          className="mx-auto flex h-full max-w-7xl w-full flex-col items-center justify-center gap-4 lg:flex-row lg:justify-between"
        >
          <h2
            className="font-[family-name:var(--font-montserrat)] text-sm font-bold uppercase tracking-wide text-zinc-700 sm:text-base"
          >
            Licenses &amp; Certifications
          </h2>
          <ul className="flex flex-wrap items-center justify-center gap-3 lg:gap-6">
            {certifications.map((name) => (
              <li
                key={name}
                className="rounded border border-zinc-300 bg-white/70 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wide text-zinc-600 grayscale sm:text-xs"
              >
                {name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
