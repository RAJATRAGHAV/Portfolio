import Link from "next/link";

export default function NotFound() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[var(--bg)] px-6 py-24 text-[var(--ink)]">
      <div className="pointer-events-none absolute inset-0 select-none">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-[clamp(22rem,55vw,48rem)] leading-none text-[var(--surface-muted)]">
          404
        </div>
      </div>

      <div className="relative z-10 max-w-xl text-center">
        <div className="mono text-[var(--muted)]">
          Error / page not found
        </div>
        <h1 className="display mt-6 text-[clamp(3rem,9vw,7rem)] leading-[0.95]">
          Lost in <span className="italic-serif">transit.</span>
        </h1>
        <p className="mx-auto mt-8 max-w-md text-[16px] leading-[1.6] text-[var(--ink-soft)]">
          The page you&rsquo;re after either moved, was renamed, or never
          existed. Here&rsquo;s the exit.
        </p>
        <div className="mt-10 flex items-center justify-center gap-3">
          <Link href="/" className="btn-primary">
            Back home
            <span aria-hidden>↗</span>
          </Link>
          <a href="mailto:rajatraghav07@gmail.com" className="btn-ghost">
            Tell me what broke
          </a>
        </div>
      </div>
    </div>
  );
}
