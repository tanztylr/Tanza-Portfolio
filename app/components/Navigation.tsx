export default function Navigation() {
  return (
    <header className="sticky top-0 z-50">

      <nav className="border-b border-[color:var(--border)] bg-[rgba(250,247,242,0.82)] backdrop-blur-xl">

        <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-6 lg:px-10">

          <a
            href="/"
            className="text-xl font-semibold tracking-[0.25em] text-[color:var(--foreground)] transition-opacity hover:opacity-70"
          >
            TANZA
          </a>

          <div className="flex items-center gap-10 text-sm font-medium text-[color:var(--muted)]">

            <a
              href="/about"
              className="transition-colors hover:text-[color:var(--foreground)]"
            >
              About
            </a>

            <a
              href="/projects"
              className="transition-colors hover:text-[color:var(--foreground)]"
            >
              Work
            </a>

            <a
              href="/experience"
              className="transition-colors hover:text-[color:var(--foreground)]"
            >
              Experience
            </a>

            <a
              href="/beyond"
              className="transition-colors hover:text-[color:var(--foreground)]"
            >
              Beyond
            </a>

            <a
              href="/contact"
              className="rounded-full border border-[color:var(--border)] bg-white px-5 py-2 transition hover:bg-[color:var(--card)] hover:text-[color:var(--foreground)]"
            >
              Contact
            </a>

          </div>

        </div>

      </nav>

    </header>
  );
}