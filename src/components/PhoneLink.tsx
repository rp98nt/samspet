import { site } from "@/data/site";

type PhoneLinkProps = {
  className?: string;
  linkClassName?: string;
  separatorClassName?: string;
};

export function PhoneLink({
  className,
  linkClassName = "hover:text-brand-green-dark",
  separatorClassName,
}: PhoneLinkProps) {
  return (
    <span className={className}>
      {site.phones.map((entry, index) => (
        <span key={entry.href}>
          {index > 0 && (
            <span className={separatorClassName ?? undefined}> / </span>
          )}
          <a href={entry.href} className={linkClassName}>{entry.display}</a>
        </span>
      ))}
    </span>
  );
}
