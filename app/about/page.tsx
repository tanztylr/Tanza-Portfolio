import Navigation from "../components/Navigation";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[color:var(--background)] text-[color:var(--foreground)]">
      <div className="flex">

        <Navigation />

        <div className="flex-1">

          <div className="mx-auto max-w-5xl px-20 py-24 xl:px-32">

            {/* Hero */}

            <section className="max-w-4xl">

              <h1 className="text-6xl font-semibold leading-[0.95] tracking-tight md:text-8xl">
                I never planned to become a project manager.
              </h1>

              <p className="mt-12 text-2xl leading-10 text-[color:var(--muted)]">
                Looking back, the signs were always there.
              </p>

            </section>

            {/* Story */}

            <section className="mt-28 border-t border-[color:var(--border)] pt-20 space-y-10">

              <p className="text-xl leading-10 text-[color:var(--muted)]">
                My career has taken me through operations, customer service,
                nonprofit work, and project coordination. The job titles
                changed, but the work stayed surprisingly consistent.
              </p>

              <p className="text-xl leading-10 text-[color:var(--muted)]">
                I kept finding myself organizing messy projects, improving
                workflows, documenting processes, and helping people move work
                forward when priorities shifted.
              </p>

              <p className="text-xl leading-10 text-[color:var(--muted)]">
                Long before I knew there was a name for it, I was doing project
                management.
              </p>

              <p className="text-xl leading-10 text-[color:var(--muted)]">
                Today, I enjoy creating clarity where complexity exists. Whether
                it's launching a side project, supporting a nonprofit, or
                improving how a team works together, I'm most energized by
                building systems that make work feel simpler.
              </p>

            </section>

            {/* How I Work */}

            <section className="mt-32">

              <h2 className="text-5xl font-semibold">
                How I work
              </h2>

              <div className="mt-16 grid gap-8 md:grid-cols-3">

                <div className="rounded-[32px] border border-[color:var(--border)] p-8">

                  <div className="text-4xl">🧩</div>

                  <h3 className="mt-6 text-2xl font-semibold">
                    Create clarity
                  </h3>

                  <p className="mt-5 leading-8 text-[color:var(--muted)]">
                    I enjoy turning scattered information into organized,
                    actionable plans that people can actually use.
                  </p>

                </div>

                <div className="rounded-[32px] border border-[color:var(--border)] p-8">

                  <div className="text-4xl">🔍</div>

                  <h3 className="mt-6 text-2xl font-semibold">
                    Stay curious
                  </h3>

                  <p className="mt-5 leading-8 text-[color:var(--muted)]">
                    Most of my favorite projects began with one simple question:
                    "Can this be done better?"
                  </p>

                </div>

                <div className="rounded-[32px] border border-[color:var(--border)] p-8">

                  <div className="text-4xl">🤝</div>

                  <h3 className="mt-6 text-2xl font-semibold">
                    Build for people
                  </h3>

                  <p className="mt-5 leading-8 text-[color:var(--muted)]">
                    Great systems aren't successful because they're complicated.
                    They're successful because people enjoy using them.
                  </p>

                </div>

              </div>

            </section>

            {/* Beyond Work */}

            <section className="mt-32 border-t border-[color:var(--border)] pt-20">

              <h2 className="text-5xl font-semibold">
                Beyond the job title
              </h2>

              <p className="mt-10 text-xl leading-10 text-[color:var(--muted)]">
                Outside of work you'll usually find me building side projects,
                writing on Substack, researching nonprofit strategy, organizing
                fictional worlds in The Sims, or learning something that
                definitely wasn't on my schedule. Curiosity has always been the
                common thread behind everything I do.
              </p>

            </section>

            {/* Looking Ahead */}

            <section className="mt-32 border-t border-[color:var(--border)] pt-20">

              <h2 className="text-5xl font-semibold">
                What's next?
              </h2>

              <p className="mt-10 text-xl leading-10 text-[color:var(--muted)]">
                I'm looking for opportunities where I can help teams bring
                structure to ambitious ideas, improve how work gets done, and
                continue growing as a project manager while building products
                and systems that make people's lives a little easier.
              </p>

            </section>

          </div>

        </div>

      </div>

    </main>
  );
}
