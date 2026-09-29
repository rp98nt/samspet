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
      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-green text-zinc-900 sm:h-10 sm:w-10"
    >
      {children}
    </span>
  );
}

function ContactDetailsPanel() {
  return (
    <div
      className="flex h-full min-h-0 w-full flex-col justify-center gap-3 sm:gap-4 lg:gap-5"
    >
      <div className="flex min-w-0 items-start gap-3">
        <ContactIconBadge>
          <PhoneIcon className="h-4 w-4 sm:h-5 sm:w-5" />
        </ContactIconBadge>
        <div className="min-w-0 text-xs text-zinc-800 sm:text-sm">
          <p className="font-semibold text-zinc-900">Phone</p>
          <PhoneLink
            className="mt-0.5 block text-brand-muted"
            linkClassName="hover:text-brand-green-dark"
          />
        </div>
      </div>
      <div className="flex min-w-0 items-start gap-3">
        <ContactIconBadge>
          <MailIcon className="h-4 w-4 sm:h-5 sm:w-5" />
        </ContactIconBadge>
        <div className="min-w-0 text-xs text-zinc-800 sm:text-sm">
          <p className="font-semibold text-zinc-900">Email</p>
          <a
            href={`mailto:${site.email}`}
            className="mt-0.5 block break-all text-brand-muted hover:text-brand-green-dark"
          >
            {site.email}
          </a>
        </div>
      </div>
      <div className="flex min-w-0 items-start gap-3">
        <ContactIconBadge>
          <LocationIcon className="h-4 w-4 sm:h-5 sm:w-5" />
        </ContactIconBadge>
        <div className="min-w-0 text-xs text-zinc-800 sm:text-sm">
          <p className="font-semibold text-zinc-900">Location</p>
          <p className="mt-0.5 text-brand-muted">{site.city}</p>
        </div>
      </div>
      <div className="flex min-w-0 items-start gap-3">
        <ContactIconBadge>
          <ClockIcon className="h-4 w-4 sm:h-5 sm:w-5" />
        </ContactIconBadge>
        <div className="min-w-0 text-xs text-zinc-800 sm:text-sm">
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
        className="mb-1.5 shrink-0 font-[family-name:var(--font-montserrat)] text-xs font-bold uppercase tracking-wide text-zinc-700 sm:text-sm"
      >
        {title}
      </p>
      <div
        className="relative min-h-[8rem] flex-1 overflow-hidden rounded-xl bg-white shadow-md ring-1 ring-zinc-200 lg:min-h-[9rem]"
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
      className="flex shrink-0 gap-3 rounded-2xl bg-[#141f14] p-3 shadow-lg sm:gap-4 sm:p-4"
    >
      <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-lg sm:h-16 sm:w-16">
        <Image
          src={visit.image}
          alt=""
          fill
          className="object-cover"
          sizes="64px"
        />
      </div>
      <div className="min-w-0 text-white">
        <h3
          className="font-[family-name:var(--font-montserrat)] text-sm font-bold sm:text-base"
        >
          {visit.title}
        </h3>
        <p className="mt-1 text-xs leading-relaxed text-white/85 sm:text-sm">
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
    <div className="flex min-h-0 flex-1 flex-col gap-2 sm:gap-3">
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
      <div className="relative w-full shrink-0 overflow-hidden">
        <div className="relative min-h-[6.5rem] w-full sm:min-h-[7rem] lg:min-h-[7.5rem]">
          <Image
            src={hero.image}
            alt=""
            fill
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/25" />
          <div className="absolute inset-0 flex items-center">
            <div className="site-container w-full py-3 sm:py-4">
              <h2
                id="contact-hero-title"
                className="font-[family-name:var(--font-montserrat)] text-2xl font-bold text-white sm:text-3xl lg:text-4xl"
              >
                {hero.title}
              </h2>
              <p className="mt-1 max-w-lg text-sm text-white/90 sm:mt-2 sm:text-base">
                {hero.subtitle}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex min-h-0 w-full flex-1 flex-col overflow-hidden">
        <div className="site-container flex min-h-0 w-full flex-1 flex-col py-2 sm:py-3 lg:py-4">
          <div
            className="grid min-h-0 flex-1 gap-3 sm:grid-cols-2 lg:grid-cols-12 lg:items-stretch lg:gap-4"
          >
            <div
              className="flex min-h-0 flex-col gap-2 sm:col-span-2 lg:col-span-8 lg:h-full sm:gap-3"
            >
              <div className="flex min-h-0 flex-1 flex-col gap-2 sm:gap-3">
                {maps.map((location) => (
                  <MapLocationColumn key={location.title} location={location} />
                ))}
              </div>
            </div>

            <div
              className="flex min-h-0 sm:col-span-2 lg:col-span-4 lg:h-full lg:items-stretch"
            >
              <ContactDetailsPanel />
            </div>
          </div>
        </div>

        <SiteFooter compact className="w-full shrink-0" />
      </div>
    </section>
  );
}
