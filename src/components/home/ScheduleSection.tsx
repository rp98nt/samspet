import Link from "next/link";
import { scheduleColumns } from "@/data/site";

export function ScheduleSection() {
  return (
    <section id="schedule" className="bg-brand-sky py-14 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <h2 className="text-center font-[family-name:var(--font-montserrat)] text-3xl font-semibold text-zinc-800">
          Schedule &amp; Upcoming Classes
        </h2>

        <div className="relative mt-10">
          <div className="rounded-lg border-[10px] border-white/90 bg-white/40 p-3 shadow-xl sm:p-4">
            <div className="chalkboard rounded-md px-4 py-8 text-white sm:px-6 sm:py-10">
              <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
                {scheduleColumns.map((column) => (
                  <div key={column.title}>
                    <h3 className="font-[family-name:var(--font-montserrat)] text-sm font-bold uppercase text-brand-chalk-accent">
                      {column.title}
                    </h3>
                    <ul className="mt-3 space-y-2 text-sm leading-relaxed">
                      {column.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                    <Link
                      href={column.link}
                      className="mt-4 inline-block text-sm text-brand-link underline"
                    >
                      Find out more
                    </Link>
                  </div>
                ))}
              </div>
              <p className="mt-10 text-center font-[family-name:var(--font-montserrat)] text-sm font-bold uppercase tracking-widest">
                All Breeds • All Sizes • All Temperaments
              </p>
            </div>
          </div>
          <p className="mt-6 text-center text-4xl" aria-hidden>🐕 🐶 🐩 🦴</p>
        </div>
      </div>
    </section>
  );
}
