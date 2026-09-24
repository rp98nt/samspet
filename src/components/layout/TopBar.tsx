import { ClockIcon, MailIcon, PhoneIcon } from "@/components/icons";
import { PhoneLink } from "@/components/PhoneLink";
import { site } from "@/data/site";

export function TopBar() {
  return (
    <div className="border-b border-zinc-200 bg-white text-xs text-brand-muted sm:text-sm">
      <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-2 sm:flex-row sm:items-center sm:justify-between lg:px-6">
        <p className="flex items-center gap-2">
          <ClockIcon className="h-4 w-4 shrink-0 text-brand-green-dark" />
          <span>{site.hours}</span>
        </p>
        <div className="flex flex-wrap items-center gap-4 sm:gap-6">
          <p className="flex items-center gap-2 font-medium">
            <PhoneIcon className="h-4 w-4 shrink-0 text-brand-green-dark" />
            <PhoneLink linkClassName="font-medium hover:text-brand-green-dark" />
          </p>
          <a
            href={`mailto:${site.email}`}
            className="flex items-center gap-2 hover:text-brand-green-dark"
          >
            <MailIcon className="h-4 w-4 text-brand-green-dark" />
            {site.email}
          </a>
        </div>
      </div>
    </div>
  );
}
