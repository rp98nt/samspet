import Link from "next/link";
import { MailIcon, PhoneIcon } from "@/components/icons";
import { site, socialLinks } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="bg-brand-charcoal text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:grid-cols-3 lg:px-6">
        <div className="text-center sm:text-left">
          <PhoneIcon className="mx-auto h-8 w-8 text-brand-green sm:mx-0" />
          <p className="mt-3 text-xs font-bold uppercase tracking-widest">Call Us</p>
          <a
            href={site.phoneHref}
            className="mt-2 block text-lg font-semibold hover:text-brand-green"
          >
            {site.phone}
          </a>
        </div>
        <div className="text-center">
          <MailIcon className="mx-auto h-8 w-8 text-brand-green" />
          <p className="mt-3 text-xs font-bold uppercase tracking-widest">Email Us</p>
          <a
            href={`mailto:${site.email}`}
            className="mt-2 inline-block text-brand-link hover:underline"
          >
            {site.email}
          </a>
        </div>
        <div className="text-center sm:text-right">
          <p className="text-xs font-bold uppercase tracking-widest">Follow Us</p>
          <ul className="mt-4 flex flex-wrap justify-center gap-2 sm:justify-end">
            {socialLinks.map((social) => (
              <li key={social.label}>
                <Link
                  href={social.href}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-brand-link/20 text-xs font-bold text-brand-link hover:bg-brand-link/30"
                  aria-label={social.label}
                >
                  {social.label[0]}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-4 text-xs text-zinc-400 lg:px-6">
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
