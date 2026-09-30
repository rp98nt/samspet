import Image from "next/image";
import Link from "next/link";
import { CopyEmailLink } from "@/components/CopyEmailLink";
import { MailIcon, PhoneIcon } from "@/components/icons";
import { PhoneLink } from "@/components/PhoneLink";
import { site, socialLinks } from "@/data/site";

type SiteFooterProps = {
  compact?: boolean;
  embedded?: boolean;
  className?: string;
};

export function SiteFooter({
  compact = false,
  embedded = false,
  className = "",
}: SiteFooterProps) {
  const tight = compact && embedded;
  const iconClass = tight ? "h-6 w-6" : "h-8 w-8";
  const linkClass = tight ? "text-sm font-semibold" : "text-lg font-semibold";
  const mobileTightIcon = tight ? "max-lg:h-4 max-lg:w-4" : "";
  const mobileTightLabel = tight
    ? "max-lg:text-[10px] max-lg:tracking-wide"
    : "";
  const mobileTightLink = tight ? "max-lg:text-[11px] max-lg:font-semibold" : "";
  const tightContactCol = tight
    ? "max-lg:col-span-1 max-lg:flex max-lg:flex-col max-lg:items-center max-lg:text-center"
    : "max-lg:col-span-1";
  const tightContactHead = tight
    ? "max-lg:flex max-lg:items-center max-lg:justify-center max-lg:gap-1.5"
    : "";
  const tightContactAlign = tight
    ? "max-lg:text-center max-lg:leading-snug lg:text-left"
    : "";

  return (
    <footer className={`bg-brand-charcoal text-white ${className}`.trim()}>
      <div
        className={`mx-auto grid w-full max-w-7xl px-4 sm:grid-cols-3 lg:px-6 ${
          tight
            ? "max-lg:grid-cols-2 max-lg:gap-x-3 max-lg:gap-y-2 max-lg:py-1.5 gap-2 py-3 sm:gap-4 sm:py-3.5"
            : compact
              ? "gap-4 py-5 sm:gap-6 sm:py-6"
              : "gap-10 py-12"
        }`}
      >
        <div
          className={`text-center ${tight ? "lg:text-left" : "sm:text-left"} ${tightContactCol}`}
        >
          <div className={tightContactHead}>
            <PhoneIcon
              className={`mx-auto shrink-0 text-brand-green ${tight ? "lg:mx-0" : "sm:mx-0"} ${iconClass} ${mobileTightIcon}`}
            />
            <p
              className={`text-xs font-bold uppercase tracking-widest ${mobileTightLabel} ${
                tight ? "max-lg:mt-0 mt-1.5" : "mt-3"
              }`}
            >
              Call Us
            </p>
          </div>
          <PhoneLink
            className={`mt-1.5 block ${linkClass} ${mobileTightLink} max-lg:mt-0.5 ${tightContactAlign}`}
            linkClassName="hover:text-brand-green"
          />
        </div>
        <div
          className={`text-center ${tight ? "lg:text-left" : "sm:text-left"} ${tightContactCol}`}
        >
          <div className={tightContactHead}>
            <MailIcon
              className={`mx-auto shrink-0 text-brand-green ${tight ? "lg:mx-0" : "sm:mx-0"} ${iconClass} ${mobileTightIcon}`}
            />
            <p
              className={`text-xs font-bold uppercase tracking-widest ${mobileTightLabel} ${
                tight ? "max-lg:mt-0 mt-1.5" : "mt-3"
              }`}
            >
              Email Us
            </p>
          </div>
          <CopyEmailLink
            className={`mt-1.5 block cursor-pointer border-0 bg-transparent p-0 font-semibold text-brand-link no-underline hover:text-brand-green ${tight ? "text-sm" : "text-lg"} ${mobileTightLink} max-lg:mt-0.5 ${tight ? "max-lg:text-center max-lg:break-all lg:text-left" : "text-left"}`}
          />
        </div>
        <div
          className={`text-center ${tight ? "lg:text-right max-lg:col-span-2 max-lg:flex max-lg:flex-col max-lg:items-center" : "sm:text-right max-lg:col-span-2"}`}
        >
          <div
            className={
              tight
                ? "max-lg:flex max-lg:w-full max-lg:items-center max-lg:justify-center max-lg:gap-2.5 lg:block"
                : ""
            }
          >
            <p
              className={`shrink-0 text-xs font-bold uppercase tracking-widest ${mobileTightLabel}`}
            >
              Follow Us
            </p>
            <ul
              className={`flex flex-wrap justify-center gap-2 ${
                tight ? "max-lg:mt-0 max-lg:justify-center lg:mt-2 lg:justify-end" : "mt-4 sm:justify-end"
              }`}
            >
              {socialLinks.map((social) => (
                <li key={social.label}>
                  <Link
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex opacity-90 transition hover:opacity-100"
                    aria-label={social.label}
                  >
                    <Image
                      src={social.iconSrc}
                      alt=""
                      width={24}
                      height={24}
                      unoptimized
                      className={`shrink-0 ${tight ? "h-6 w-6 max-lg:h-5 max-lg:w-5" : "h-6 w-6"}`}
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div
        className={`border-t border-white/10 px-4 text-zinc-400 lg:px-6 ${
          tight
            ? "max-lg:py-1 max-lg:text-[9px] py-2 text-[10px] sm:text-[11px]"
            : compact
              ? "py-2.5 text-xs sm:py-3"
              : "py-4 text-xs"
        }`}
      >
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 sm:flex-row max-lg:gap-1">
          <p className="text-center sm:text-left">
            © 2026 {site.name}. All rights reserved.
          </p>
          <p className="text-center sm:text-right">Designed by AlienCore</p>
        </div>
      </div>
    </footer>
  );
}
