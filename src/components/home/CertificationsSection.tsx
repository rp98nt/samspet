import { certifications } from "@/data/site";

export function CertificationsSection() {
  return (
    <section className="wood-texture border-y border-zinc-200 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 px-4 lg:flex-row lg:justify-between lg:px-6">
        <h2 className="font-[family-name:var(--font-montserrat)] text-lg font-bold uppercase tracking-wide text-zinc-700">
          Licenses &amp; Certifications
        </h2>
        <ul className="flex flex-wrap items-center justify-center gap-6 lg:gap-10">
          {certifications.map((name) => (
            <li
              key={name}
              className="rounded border border-zinc-300 bg-white/70 px-4 py-2 text-xs font-bold uppercase tracking-wide text-zinc-600 grayscale"
            >
              {name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
