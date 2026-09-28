import { scheduleColumns } from "@/data/site";

export function ScheduleSection() {
  return (
    <section id="schedule" className="section-viewport bg-brand-sky">
      <div className="section-viewport-inner">
        <div className="mx-auto flex h-full max-w-7xl min-h-0 w-full flex-col">
          <h2
            className="shrink-0 text-center font-[family-name:var(--font-montserrat)] text-[clamp(1.25rem,3vh,1.875rem)] font-semibold text-zinc-800"
          >
            Schedule &amp; Upcoming Classes
          </h2>

          <div className="relative mt-3 flex min-h-0 flex-1 flex-col justify-center">
            <div className="rounded-lg border-[8px] border-white/90 bg-white/40 p-2 shadow-xl sm:border-[10px] sm:p-3">
              <div className="chalkboard flex min-h-0 flex-1 flex-col justify-center rounded-md px-3 py-5 text-white sm:px-5 sm:py-6">
                <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                  {scheduleColumns.map((title) => (
                    <div key={title}>
                      <h3
                        className="font-[family-name:var(--font-montserrat)] text-xs font-bold uppercase text-brand-chalk-accent sm:text-sm"
                      >
                        {title}
                      </h3>
                    </div>
                  ))}
                </div>
                <p
                  className="mt-4 text-center font-[family-name:var(--font-montserrat)] text-[10px] font-bold uppercase tracking-widest sm:mt-6 sm:text-xs"
                >
                  All Breeds • All Sizes • All Temperaments
                </p>
              </div>
            </div>
            <p className="mt-2 shrink-0 text-center text-2xl sm:text-3xl" aria-hidden>🐕 🐶 🐩 🦴</p>
          </div>
        </div>
      </div>
    </section>
  );
}
