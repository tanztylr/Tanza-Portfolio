export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-24 pb-40 lg:pt-28 lg:pb-48">

      <div className="max-w-6xl">

        <h1 className="text-6xl font-semibold leading-[0.9] tracking-tight md:text-8xl xl:text-[8rem]">
          TANZA
          <br />
          TAYLOR
        </h1>

        <p className="mt-8 text-sm uppercase tracking-[0.35em] text-[color:var(--accent)]">
          Atlanta, Georgia
        </p>

        <h2 className="mt-14 max-w-3xl text-4xl font-semibold leading-tight md:text-5xl">
          When work gets messy,
          <br />
          I create clarity.
        </h2>

        <div className="mt-12 flex gap-5">

          <a
            href="/projects"
            className="inline-flex min-w-[170px] justify-center rounded-full bg-[color:var(--foreground)] px-8 py-4 text-sm font-medium text-[color:var(--background)] transition hover:opacity-90"
          >
            View Projects
          </a>

          <a
            href="/Tanza_Taylor_Resume.pdf"
            className="inline-flex min-w-[170px] justify-center rounded-full border border-[color:var(--border)] bg-white px-8 py-4 text-sm font-medium transition hover:bg-[color:var(--card)]"
          >
            Resume
          </a>

        </div>

      </div>

    </section>
  );
}
