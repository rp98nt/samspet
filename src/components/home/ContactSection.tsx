import Image from "next/image";
import { ClockIcon, MailIcon, PhoneIcon } from "@/components/icons";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { PhoneLink } from "@/components/PhoneLink";
import { contactPage, site } from "@/data/site";

function mapEmbedSrc(query: string) {
  return `https://maps.google.com/maps?q=${encodeURIComponent(query)}&z=14&output=embed`;
}

function LocationIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 21s7-4.5 7-10a7 7 0 1 0-14 0c0 5.5 7 10 7 10Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <circle cx="12" cy="11" r="2.5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function ContactIconBadge({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-green text-zinc-900 max-lg:h-[clamp(1.5rem,3.8svh,2rem)] max-lg:w-[clamp(1.5rem,3.8svh,2rem)] sm:h-9 sm:w-9"
    >
      {children}
    </span>
  );
}

function ContactDetailsPanel() {
  return (
    <div
      className="flex h-full min-h-0 w-full flex-col justify-center gap-3 rounded-2xl bg-white px-3 py-2.5 shadow-sm ring-1 ring-zinc-200 max-lg:grid max-lg:grid-cols-2 max-lg:content-between max-lg:gap-x-3 max-lg:gap-y-[var(--m-gap)] max-lg:p-[var(--m-pad)] sm:gap-3 sm:bg-transparent sm:p-0 sm:shadow-none sm:ring-0 lg:flex lg:flex-col"
    >
      <div className="flex min-w-0 items-start gap-2.5">
        <ContactIconBadge>
          <PhoneIcon className="h-4 w-4" />
        </ContactIconBadge>
        <div className="min-w-0 text-xs text-zinc-800 max-lg:text-[length:var(--m-fs-sm)] max-lg:leading-snug sm:text-sm">
          <p className="font-semibold text-zinc-900">Phone</p>
          <PhoneLink
            className="mt-0.5 block text-brand-muted"
            linkClassName="hover:text-brand-green-dark"
          />
        </div>
      </div>
      <div className="flex min-w-0 items-start gap-2.5">
        <ContactIconBadge>
          <MailIcon className="h-4 w-4" />
        </ContactIconBadge>
        <div className="min-w-0 text-xs text-zinc-800 max-lg:text-[length:var(--m-fs-sm)] max-lg:leading-snug sm:text-sm">
          <p className="font-semibold text-zinc-900">Email</p>
          <a
            href={`mailto:${site.email}`}
            className="mt-0.5 block break-all text-brand-muted hover:text-brand-green-dark"
          >
            {site.email}
          </a>
        </div>
      </div>
      <div className="flex min-w-0 items-start gap-2.5">
        <ContactIconBadge>
          <LocationIcon className="h-4 w-4" />
        </ContactIconBadge>
        <div className="min-w-0 text-xs text-zinc-800 max-lg:text-[length:var(--m-fs-sm)] max-lg:leading-snug sm:text-sm">
          <p className="font-semibold text-zinc-900">Location</p>
          <p className="mt-0.5 text-brand-muted">{site.city}</p>
        </div>
      </div>
      <div className="flex min-w-0 items-start gap-2.5">
        <ContactIconBadge>
          <ClockIcon className="h-4 w-4" />
        </ContactIconBadge>
        <div className="min-w-0 text-xs text-zinc-800 max-lg:text-[length:var(--m-fs-sm)] max-lg:leading-snug sm:text-sm">
          <p className="font-semibold text-zinc-900">Hours</p>
          <p className="mt-0.5 text-brand-muted">{site.hours}</p>
        </div>
      </div>
    </div>
  );
}

function MapCard({
  title,
  query,
}: {
  title: string;
  query: string;
}) {
  return (
    <div className="flex min-h-0 flex-1 flex-col">
      <p
        className="mb-1 shrink-0 font-[family-name:var(--font-montserrat)] max-lg:mb-[calc(var(--m-gap)*0.5)] text-[11px] font-bold uppercase tracking-wide text-zinc-700 sm:text-xs"
      >
        {title}
      </p>
      <div
        className="relative min-h-0 flex-1 overflow-hidden rounded-xl bg-white shadow-md ring-1 ring-zinc-200 max-lg:min-h-[5rem]"
      >
        <iframe
          title={`Map: ${title}`}
          src={mapEmbedSrc(query)}
          className="absolute inset-0 h-full w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
}

function VisitCard({
  visit,
}: {
  visit: (typeof contactPage.maps)[number]["visit"];
}) {
  return (
    <div
      className="flex shrink-0 gap-2 rounded-2xl bg-[#141f14] p-2 shadow-lg max-lg:items-center max-lg:gap-[calc(var(--m-gap)*1.5)] max-lg:p-[calc(var(--m-pad)*0.75)] sm:gap-3 sm:p-3"
    >
      <div
        className="relative h-10 w-10 shrink-0 overflow-hidden rounded-lg max-lg:h-[clamp(2rem,5svh,2.5rem)] max-lg:w-[clamp(2rem,5svh,2.5rem)] sm:h-14 sm:w-14"
      >
        <Image
          src={visit.image}
          alt=""
          fill
          className="object-cover"
          sizes="56px"
        />
      </div>
      <div className="min-w-0 text-white">
        <h3
          className="font-[family-name:var(--font-montserrat)] text-xs font-bold max-lg:text-[length:var(--m-fs-sm)] sm:text-sm"
        >
          {visit.title}
        </h3>
        <p className="mt-0.5 text-[11px] leading-snug text-white/85 max-lg:text-[length:var(--m-fs-sm)] sm:text-xs">
          {visit.description}
        </p>
      </div>
    </div>
  );
}

function MapLocationColumn({
  location,
}: {
  location: (typeof contactPage.maps)[number];
}) {
  return (
    <div className="flex min-h-0 flex-1 flex-col gap-2 max-lg:gap-[var(--m-gap)]">
      <MapCard title={location.title} query={location.query} />
      <VisitCard visit={location.visit} />
    </div>
  );
}

export function ContactSection() {
  const { hero, maps } = contactPage;

  return (
    <section
      id="contact"
      className="snap-section flex w-full min-h-0 flex-col overflow-hidden bg-[#f0f1ee]"
      aria-labelledby="contact-hero-title"
    >
      <div
        className="relative h-[6.25rem] w-full shrink-0 overflow-hidden max-lg:h-[clamp(4rem,10svh,5.5rem)] sm:h-[7rem] lg:h-[7.25rem]"
      >
        <Image
          src={hero.image}
          alt=""
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/25" />
        <div className="absolute inset-0 flex items-center">
          <div className="site-container w-full py-2 text-center max-lg:py-0 sm:py-3 sm:text-left">
            <h2
              id="contact-hero-title"
              className="font-[family-name:var(--font-montserrat)] text-xl font-bold text-white max-lg:text-[length:var(--m-fs-h2)] max-lg:leading-tight sm:text-2xl lg:text-3xl"
            >
              {hero.title}
            </h2>
            <p className="mx-auto mt-0.5 max-w-lg text-xs text-white/90 max-lg:text-[length:var(--m-fs-sm)] sm:mx-0 sm:mt-1 sm:text-sm">
              {hero.subtitle}
            </p>
          </div>
        </div>
      </div>

      <div className="section-body-scroll flex min-h-0 w-full flex-1 flex-col overflow-hidden">
        <div
          className="site-container flex min-h-0 w-full flex-1 flex-col py-1.5 max-lg:flex-1 max-lg:py-[var(--m-gap)] sm:py-2"
        >
          <div
            className="grid min-h-0 flex-1 gap-2.5 max-lg:flex max-lg:flex-col max-lg:gap-[var(--m-gap)] sm:grid-cols-2 sm:gap-3 lg:grid-cols-12 lg:items-stretch lg:gap-4"
          >
            <div
              className="order-2 flex min-h-0 flex-1 flex-col max-lg:min-h-[8rem] sm:order-none sm:col-span-2 lg:col-span-8 lg:h-full"
            >
              <div className="flex min-h-0 flex-1 flex-col">
                {maps.map((location) => (
                  <MapLocationColumn key={location.title} location={location} />
                ))}
              </div>
            </div>

            <div className="order-1 flex min-h-0 max-lg:shrink-0 sm:order-none sm:col-span-2 lg:col-span-4 lg:h-full">
              <ContactDetailsPanel />
            </div>
          </div>
        </div>

        <SiteFooter compact embedded className="mt-auto w-full shrink-0" />
      </div>
    </section>
  );
}
