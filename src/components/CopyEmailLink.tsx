"use client";

import { useCallback, useState } from "react";
import { site } from "@/data/site";

type CopyEmailLinkProps = {
  className?: string;
};

export function CopyEmailLink({ className }: CopyEmailLinkProps) {
  const [copied, setCopied] = useState(false);

  const handleClick = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }, []);

  return (
    <button
      type="button"
      onClick={handleClick}
      className={className}
      aria-label={
        copied ? "Email address copied to clipboard" : `Copy ${site.email} to clipboard`
      }
    >
      {copied ? "Copied to clipboard" : site.email}
    </button>
  );
}
