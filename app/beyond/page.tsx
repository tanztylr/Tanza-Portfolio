import Navigation from "../components/Navigation";
import FadeIn from "../components/FadeIn";

export default function BeyondPage() {
  return (
    <main className="min-h-screen bg-[color:var(--background)] text-[color:var(--foreground)]">

      <div className="flex">

        <Navigation />

        <div className="flex-1">

          <div className="mx-auto max-w-7xl px-20 py-24 xl:px-32">

            {/* Hero */}

            <FadeIn>

              <section>

                <h1 className="max-w-6xl text-6xl font-semibold leading-[0.95] tracking-tight md:text-8xl">
                  Curiosity doesn't clock out at 5 PM.
                </h1>

                <p className="mt-10 max-w-4xl text-xl leading-9 text-[color:var(--muted)]">
                  My best ideas rarely begin with work. They usually begin with
                  curiosity. This is where experiments, side projects, writing,
                  and continuous learning come together.
                </p>

              </section>

            </FadeIn>

            {/* Cards */}

            <FadeIn>

              <section className="mt-28 grid gap-10 lg:grid-cols-2">

                <div className="rounded-[36px] border border-[color:var(--border)] p-12 transition-all duration-300 hover:-translate-y-2 hover:border-[color:var(--accent)] hover:bg-[color:var(--accent)]/5">

                  <p className="text-sm uppercase tracking-[0.3em] text-[color:var(--accent)]">
                    Writing
                  </p>

                  <h2 className="mt-6 text-4xl font-semibold">
                    Fine, I'll Say It
                  </h2>

                  <p className="mt-8 leading-8 text-[color:var(--muted)]">
                    Thoughts on project management, technology, career growth,
                    systems thinking, and the conversations people usually keep
                    to themselves.
                  </p>

                </div>

                <div className="rounded-[36px] border border-[color:var(--border)] p-12 transition-all duration-300 hover:-translate-y-2 hover:border-[color:var(--accent)] hover:bg-[color:var(--accent)]/5">

                  <p className="text-sm uppercase tracking-[0.3em] text-[color:var(--accent)]">
                    Building
                  </p>

                  <h2 className="mt-6 text-4xl font-semibold">
                    Personal Projects
                  </h2>

                  <p className="mt-8 leading-8 text-[color:var(--muted)]">
                    From AuraCare to The Sim File, I enjoy building products,
                    systems, and experiences simply because I believe there is
                    almost always a better solution.
                  </p>

                </div>

              </section>

            </FadeIn>

            {/* Currently Exploring */}

            <FadeIn>

              <section className="mt-32 border-t border-[color:var(--border)] pt-24">

                <p className="text-sm uppercase tracking-[0.3em] text-[color:var(--accent)]">
                  Currently Exploring
                </p>

                <div className="mt-10 grid gap-8 md:grid-cols-2">

                  <div className="rounded-[28px] border border-[color:var(--border)] p-8">
                    <h3 className="text-2xl font-semibold">
                      Product Thinking
                    </h3>

                    <p className="mt-4 leading-8 text-[color:var(--muted)]">
                      Learning how thoughtful products solve meaningful problems.
                    </p>
                  </div>

                  <div className="rounded-[28px] border border-[color:var(--border)] p-8">
                    <h3 className="text-2xl font-semibold">
                      Front-End Development
                    </h3>

                    <p className="mt-4 leading-8 text-[color:var(--muted)]">
                      Building interfaces that communicate ideas clearly.
                    </p>
                  </div>

                  <div className="rounded-[28px] border border-[color:var(--border)] p-8">
                    <h3 className="text-2xl font-semibold">
                      Community Impact
                    </h3>

                    <p className="mt-4 leading-8 text-[color:var(--muted)]">
                      Using technology and nonprofit work to create opportunities.
                    </p>
                  </div>

                  <div className="rounded-[28px] border border-[color:var(--border)] p-8">
                    <h3 className="text-2xl font-semibold">
                      Better Systems
                    </h3>

                    <p className="mt-4 leading-8 text-[color:var(--muted)]">
                      Designing workflows that reduce friction and improve clarity.
                    </p>
                  </div>

                </div>

              </section>

            </FadeIn>

          </div>

        </div>

      </div>

    </main>
  );
}

