import { ClockIcon, MailIcon, PhoneIcon } from "@/components/icons";
import { PhoneLink } from "@/components/PhoneLink";
import { site } from "@/data/site";

export function TopBar() {
  return (
    <div className="border-b border-zinc-200 bg-white text-xs text-brand-muted sm:text-sm">
      <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-2 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left lg:px-6">
        <p className="flex items-center justify-center gap-2 sm:justify-start">
          <ClockIcon className="h-4 w-4 shrink-0 text-brand-green-dark" />
          <span className="text-[11px] leading-snug sm:text-inherit">{site.hours}</span>
        </p>
        <div className="flex flex-col items-center gap-2 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4 sm:gap-y-1 lg:gap-6">
          <p className="flex items-center justify-center gap-2 font-medium sm:justify-start">
            <PhoneIcon className="h-4 w-4 shrink-0 text-brand-green-dark" />
            <PhoneLink
              className="text-[11px] leading-snug sm:text-inherit"
              linkClassName="font-medium hover:text-brand-green-dark"
            />
          </p>
          <a
            href={`mailto:${site.email}`}
            className="flex items-center justify-center gap-2 text-[11px] leading-snug hover:text-brand-green-dark sm:justify-start sm:text-inherit"
          >
            <MailIcon className="h-4 w-4 shrink-0 text-brand-green-dark" />
            <span className="break-all sm:break-normal">{site.email}</span>
          </a>
        </div>
      </div>
    </div>
  );
}
