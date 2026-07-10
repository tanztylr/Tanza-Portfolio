import Navigation from "../components/Navigation";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[color:var(--background)] text-white">

      <Navigation />

      <div className="mx-auto max-w-7xl px-8 py-24">

        <p className="mb-4 text-sm uppercase tracking-[0.25em] text-white/50">
          About
        </p>

        <h1 className="max-w-5xl text-5xl font-semibold leading-tight md:text-7xl">
          I build structure where
          there wasn't any before.
        </h1>

        <p className="mt-10 max-w-3xl text-xl leading-relaxed text-white/70">
          My career has never followed one straight path—and that's become one
          of my biggest strengths. I've worked in operations, customer
          experience, nonprofit leadership, and project coordination. Across
          every role, I found myself doing the same thing: bringing clarity to
          complicated work.
        </p>

        <section className="mt-32 grid gap-20 lg:grid-cols-[1fr_2fr]">

          <div>

            <p className="text-sm uppercase tracking-[0.25em] text-white/50">
              My Approach
            </p>

          </div>

          <div>

            <p className="leading-8 text-white/70">
              I enjoy stepping into projects that feel overwhelming and turning
              them into something people can actually understand, use, and
              improve. Whether that means organizing a workflow, planning an
              initiative, or designing a product, I naturally look for patterns,
              remove unnecessary complexity, and create systems people enjoy
              working with.
            </p>

            <p className="mt-8 leading-8 text-white/70">
              That mindset shows up everywhere—from building AuraCare to support
              people living with epilepsy, to helping nonprofits expand their
              impact, to creating personal tools simply because I believe a
              better solution should exist.
            </p>

          </div>

        </section>

        <section className="mt-32 grid gap-12 md:grid-cols-3">

          <article className="rounded-3xl border border-white/10 bg-white/5 p-8">

            <h2 className="text-2xl font-semibold">
              Simplify
            </h2>

            <p className="mt-4 leading-8 text-white/70">
              I believe the best solutions remove friction instead of adding
              more features.
            </p>

          </article>

          <article className="rounded-3xl border border-white/10 bg-white/5 p-8">

            <h2 className="text-2xl font-semibold">
              Organize
            </h2>

            <p className="mt-4 leading-8 text-white/70">
              Whether it's projects, teams, or ideas, I enjoy creating systems
              that help work move forward with confidence.
            </p>

          </article>

          <article className="rounded-3xl border border-white/10 bg-white/5 p-8">

            <h2 className="text-2xl font-semibold">
              Improve
            </h2>

            <p className="mt-4 leading-8 text-white/70">
              I rarely accept "this is how we've always done it." I'm always
              looking for thoughtful ways to make work better.
            </p>

          </article>

        </section>

      </div>

    </main>
  );
}
