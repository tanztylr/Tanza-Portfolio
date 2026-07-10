export default function Hero() {
  return (
    <section className="relative overflow-hidden py-40 lg:py-52">

      <div className="absolute inset-0 -z-10">

        <div className="absolute left-[-10%] top-[-10%] h-[650px] w-[650px] rounded-full bg-[color:var(--accent)] opacity-10 blur-3xl" />

        <div className="absolute right-[-15%] top-[5%] h-[500px] w-[500px] rounded-full bg-white opacity-[0.04] blur-3xl" />

      </div>

      <div className="max-w-7xl">

        <div className="mb-12 inline-flex items-center gap-3 rounded-full border border-[color:var(--border)] bg-white px-5 py-2 text-xs font-medium uppercase tracking-[0.18em] text-[color:var(--muted)] shadow-sm">

          <span className="h-2 w-2 rounded-full bg-[#95A78D]" />

          <span>Open to Project Management Opportunities</span>

          <span>•</span>

          <span>Atlanta, GA</span>

        </div>

        <h1 className="max-w-6xl text-6xl md:text-8xl xl:text-[8rem] font-semibold leading-[0.9] tracking-tight text-[color:var(--foreground)]">
          When work gets messy,
          <br />
          I create clarity.
        </h1>

        <p className="mt-12 max-w-3xl text-xl leading-9 text-[color:var(--muted)]">
          I help organizations simplify complex work through better systems,
          thoughtful execution, and product-minded thinking.
        </p>

        <div className="mt-14 flex flex-wrap gap-5">

          <a
            href="/projects"
            className="rounded-full bg-[color:var(--accent)] px-8 py-4 text-sm font-medium text-white transition hover:shadow-lg"
          >
            View Projects
          </a>

          <a
            href="/Tanza_Taylor_Resume.pdf"
            className="rounded-full border border-[color:var(--border)] bg-white px-8 py-4 text-sm font-medium text-[color:var(--foreground)] transition hover:bg-gray-50"
          >
            Resume
          </a>

        </div>

      </div>

    </section>
  );
}
