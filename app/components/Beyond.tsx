export default function Beyond() {
  return (
    <section className="py-40">

      <div className="max-w-6xl">

        <p className="mb-5 text-sm uppercase tracking-[0.25em] text-[color:var(--accent)]">
          Beyond
        </p>

        <h2 className="max-w-5xl text-6xl font-semibold leading-[0.95] md:text-7xl xl:text-[5.5rem]">
          Work is only one
          <br />
          part of the story.
        </h2>

      </div>

      <div className="mt-24 grid gap-20 lg:grid-cols-2">

        <div>

          <p className="text-sm uppercase tracking-[0.25em] text-[color:var(--muted)]">
            Writing
          </p>

          <h3 className="mt-5 text-4xl font-semibold">
            Fine, I'll Say It
          </h3>

          <p className="mt-6 text-lg leading-9 text-[color:var(--muted)]">
            Essays on career growth, project management, technology, and the
            conversations people usually keep to themselves.
          </p>

        </div>

        <div>

          <p className="text-sm uppercase tracking-[0.25em] text-[color:var(--muted)]">
            Outside of Work
          </p>

          <h3 className="mt-5 text-4xl font-semibold">
            Always Building
          </h3>

          <p className="mt-6 text-lg leading-9 text-[color:var(--muted)]">
            Personal projects, nonprofits, creative ideas, and hobbies all feed
            the way I think about solving problems.
          </p>

        </div>

      </div>

      <a
        href="/beyond"
        className="mt-24 inline-flex rounded-full border border-[color:var(--border)] px-8 py-4 transition-all hover:border-[color:var(--foreground)] hover:bg-[color:var(--foreground)] hover:text-[color:var(--background)]"
      >
        Explore Beyond →
      </a>

    </section>
  );
}
