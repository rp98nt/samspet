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

  return (
    <footer className={`bg-brand-charcoal text-white ${className}`.trim()}>
      <div
        className={`mx-auto grid w-full max-w-7xl px-4 sm:grid-cols-3 lg:px-6 ${
          tight
            ? "gap-2 py-3 sm:gap-4 sm:py-3.5"
            : compact
              ? "gap-4 py-5 sm:gap-6 sm:py-6"
              : "gap-10 py-12"
        }`}
      >
        <div className="text-center sm:text-left">
          <PhoneIcon className={`mx-auto text-brand-green sm:mx-0 ${iconClass}`} />
          <p className={`text-xs font-bold uppercase tracking-widest ${tight ? "mt-1.5" : "mt-3"}`}>
            Call Us
          </p>
          <PhoneLink
            className={`mt-1.5 block ${linkClass}`}
            linkClassName="hover:text-brand-green"
          />
        </div>
        <div className="text-center">
          <MailIcon className={`mx-auto text-brand-green ${iconClass}`} />
          <p className={`text-xs font-bold uppercase tracking-widest ${tight ? "mt-1.5" : "mt-3"}`}>
            Email Us
          </p>
          <CopyEmailLink
            className={`mt-1.5 inline-block cursor-pointer border-0 bg-transparent p-0 font-semibold text-brand-link no-underline hover:text-brand-green ${tight ? "text-sm" : "text-lg"}`}
          />
        </div>
        <div className="text-center sm:text-right">
          <p className="text-xs font-bold uppercase tracking-widest">Follow Us</p>
          <ul
            className={`flex flex-wrap justify-center gap-2 sm:justify-end ${tight ? "mt-2" : "mt-4"}`}
          >
            {socialLinks.map((social) => (
              <li key={social.label}>
                <Link
                  href={social.href}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-brand-link/20 hover:bg-brand-link/30"
                  aria-label={social.label}
                >
                  <Image
                    src={social.iconSrc}
                    alt=""
                    width={20}
                    height={20}
                    unoptimized
                    className="h-5 w-5 shrink-0"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div
        className={`border-t border-white/10 px-4 text-zinc-400 lg:px-6 ${
          tight ? "py-2 text-[10px] sm:text-[11px]" : compact ? "py-2.5 text-xs sm:py-3" : "py-4 text-xs"
        }`}
      >
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 sm:flex-row">
          <p className="text-center sm:text-left">
            © 2026 {site.name}. All rights reserved.
          </p>
          <p className="text-center sm:text-right">
            Designed with{" "}
            <span className="text-red-500" aria-hidden="true">♥</span> by AlienCore.
          </p>
        </div>
      </div>
    </footer>
  );
}
