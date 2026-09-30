import { aboutPage } from "@/data/site";

export function ValueIcon({
  type,
}: {
  type: (typeof aboutPage.values)[number]["icon"];
}) {
  const className = "h-7 w-7 shrink-0 text-brand-green sm:h-8 sm:w-8";
  switch (type) {
    case "paw-gear":
      return (
        <svg className={className} viewBox="0 0 32 32" fill="none" aria-hidden>
          <circle cx="16" cy="16" r="10" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="12" cy="12" r="2" fill="currentColor" />
          <circle cx="20" cy="12" r="2" fill="currentColor" />
          <path
            d="M11 18c1.5 2 4.5 2.5 5 2.5s3.5-.5 5-2.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      );
    case "trainer":
      return (
        <svg className={className} viewBox="0 0 32 32" fill="none" aria-hidden>
          <circle cx="11" cy="10" r="3" stroke="currentColor" strokeWidth="1.5" />
          <path
            d="M6 24c0-3.5 2.5-6 5-6s5 2.5 5 6"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <circle cx="22" cy="14" r="2.5" fill="currentColor" />
          <path
            d="M18 22c1-2 2.5-3 4-3 2 0 3.5 2 4 5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      );
    case "shield":
      return (
        <svg className={className} viewBox="0 0 32 32" fill="none" aria-hidden>
          <path
            d="M16 4 8 7.5v7c0 5 4 8.5 8 10 4-1.5 8-5 8-10v-7L16 4Z"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <circle cx="13" cy="14" r="1.5" fill="currentColor" />
          <circle cx="19" cy="14" r="1.5" fill="currentColor" />
        </svg>
      );
    case "support":
      return (
        <svg className={className} viewBox="0 0 32 32" fill="none" aria-hidden>
          <path
            d="M6 14a10 10 0 0 1 20 0v2a3 3 0 0 1-3 3h-1.5l-2 3v-5H11a3 3 0 0 1-3-3v-2Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <path d="M12 22v2a2 2 0 0 0 2 2h1" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      );
  }
}
