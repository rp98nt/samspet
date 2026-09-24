export function Footer() {
  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800">
      <div className="mx-auto max-w-5xl px-6 py-8 text-sm text-zinc-600 dark:text-zinc-400">
        © {new Date().getFullYear()} Sam&apos;s Pet
      </div>
    </footer>
  );
}
