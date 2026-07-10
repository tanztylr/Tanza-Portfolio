export default function HowIThink() {
  return (
    <section className="py-40">

      <div className="mb-24 max-w-6xl">

        <p className="mb-5 text-sm uppercase tracking-[0.25em] text-[color:var(--accent)]">
          How I Work
        </p>

        <h2 className="max-w-6xl text-6xl md:text-7xl xl:text-[5.5rem] font-semibold leading-[0.95] tracking-tight text-[color:var(--foreground)]">
          My approach to
          <br />
          solving complex
          <br />
          problems.
        </h2>

        <p className="mt-10 max-w-4xl text-xl leading-9 text-[color:var(--muted)]">
          Whether I'm improving a workflow, managing a project, or designing a
          product, these principles guide every decision I make.
        </p>

      </div>

      <div className="space-y-10">

        <article className="rounded-[36px] border border-[color:var(--border)] bg-white p-14 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">

          <div className="grid gap-10 md:grid-cols-[140px_1fr]">

            <p className="text-6xl font-light leading-none text-[color:var(--accent)]">
              01
            </p>

            <div>

              <h3 className="text-4xl font-semibold text-[color:var(--foreground)]">
                Start with the problem.
              </h3>

              <p className="mt-6 max-w-4xl text-lg leading-9 text-[color:var(--muted)]">
                Before proposing solutions, I spend time understanding what is
                actually broken. Good systems solve real problems—not imaginary
                ones.
              </p>

            </div>

          </div>

        </article>

        <article className="rounded-[36px] border border-[color:var(--border)] bg-white p-14 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">

          <div className="grid gap-10 md:grid-cols-[140px_1fr]">

            <p className="text-6xl font-light leading-none text-[color:var(--accent)]">
              02
            </p>

            <div>

              <h3 className="text-4xl font-semibold text-[color:var(--foreground)]">
                Create clarity.
              </h3>

              <p className="mt-6 max-w-4xl text-lg leading-9 text-[color:var(--muted)]">
                I simplify complexity into workflows, documentation, and
                products that people can understand without needing a manual.
              </p>

            </div>

          </div>

        </article>

        <article className="rounded-[36px] border border-[color:var(--border)] bg-white p-14 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">

          <div className="grid gap-10 md:grid-cols-[140px_1fr]">

            <p className="text-6xl font-light leading-none text-[color:var(--accent)]">
              03
            </p>

            <div>

              <h3 className="text-4xl font-semibold text-[color:var(--foreground)]">
                Leave it better.
              </h3>

              <p className="mt-6 max-w-4xl text-lg leading-9 text-[color:var(--muted)]">
                My goal is to create systems that continue delivering value
                long after implementation, making work easier for everyone who
                comes next.
              </p>

            </div>

          </div>

        </article>

      </div>

    </section>
  );
}
