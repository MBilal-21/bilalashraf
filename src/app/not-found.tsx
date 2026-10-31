import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[80vh] flex-col items-center justify-center px-4 pt-28 pb-16 text-center">
      <p className="font-display text-[30vw] leading-none font-bold text-accent md:text-[14rem]">404</p>
      <h1 className="mt-4 font-display text-3xl uppercase tracking-tight text-ink md:text-5xl">Page not found</h1>
      <p className="mt-3 max-w-sm text-sm text-muted">The page you&apos;re looking for doesn&apos;t exist or has moved.</p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link href="/" className="rounded-full bg-accent px-6 py-2 text-on-accent transition-opacity hover:opacity-85">
          Go home
        </Link>
        <Link href="/projects" className="rounded-full border border-ink px-6 py-2 text-ink transition-colors hover:bg-ink hover:text-bg">
          View projects
        </Link>
      </div>
    </main>
  );
}
