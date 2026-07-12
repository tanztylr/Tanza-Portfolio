import Navigation from "../components/Navigation";

export default function BeyondPage() {
  return (
    <main className="min-h-screen bg-[color:var(--background)] text-[color:var(--foreground)]">

      <div className="flex">

        <Navigation />

        <div className="flex-1">

          <div className="mx-auto max-w-7xl px-20 py-24 xl:px-32">

            {/* Hero */}

            <section>

              <p className="text-sm uppercase tracking-[0.3em] text-[color:var(--accent)]">
                Beyond
              </p>

              <h1 className="mt-6 max-w-5xl text-6xl font-semibold leading-[1.02] md:text-8xl">
                The work that
                <br />
                doesn't fit on
                <br />
                a résumé.
              </h1>

              <p className="mt-10 max-w-3xl text-xl leading-9 text-[color:var(--muted)]">
                Some of my favorite ideas begin long before they become
                projects. This is where curiosity, experimentation, and
                continuous learning come together.
              </p>

            </section>

            {/* Writing */}

            <section className="mt-40 border-t border-[color:var(--border)] pt-20">

              <p className="text-sm uppercase tracking-[0.3em] text-[color:var(--accent)]">
                Writing
              </p>

              <h2 className="mt-8 text-5xl font-semibold">
                Fine, I'll Say It
              </h2>

              <p className="mt-8 max-w-3xl text-lg leading-9 text-[color:var(--muted)]">
                A collection of thoughts on project management, technology,
                systems, career growth, and the conversations most people think
                about—but rarely say out loud.
              </p>

            </section>

            {/* Exploring */}

            <section className="mt-40">

              <p className="text-sm uppercase tracking-[0.3em] text-[color:var(--accent)]">
                Currently Exploring
              </p>

              <div className="mt-12 grid gap-8 lg:grid-cols-3">

                <div className="rounded-[32px] border border-[color:var(--border)] p-10 transition hover:-translate-y-2 hover:shadow-xl">

                  <p className="text-6xl font-light text-[color:var(--border)]">
                    01
                  </p>

                  <h3 className="mt-8 text-3xl font-semibold">
                    Product Thinking
                  </h3>

                  <p className="mt-6 leading-8 text-[color:var(--muted)]">
                    Learning how thoughtful products solve real problems
                    through intentional design.
                  </p>

                </div>

                <div className="rounded-[32px] border border-[color:var(--border)] p-10 transition hover:-translate-y-2 hover:shadow-xl">

                  <p className="text-6xl font-light text-[color:var(--border)]">
                    02
                  </p>

                  <h3 className="mt-8 text-3xl font-semibold">
                    Front-End Development
                  </h3>

                  <p className="mt-6 leading-8 text-[color:var(--muted)]">
                    Building interfaces that communicate ideas as clearly as
                    the systems behind them.
                  </p>

                </div>

                <div className="rounded-[32px] border border-[color:var(--border)] p-10 transition hover:-translate-y-2 hover:shadow-xl">

                  <p className="text-6xl font-light text-[color:var(--border)]">
                    03
                  </p>

                  <h3 className="mt-8 text-3xl font-semibold">
                    Community Impact
                  </h3>

                  <p className="mt-6 leading-8 text-[color:var(--muted)]">
                    Exploring how technology and nonprofit work can create
                    opportunities for underserved communities.
                  </p>

                </div>

              </div>

            </section>

            {/* Current Focus */}

            <section className="mt-40 border-t border-[color:var(--border)] pt-20">

              <p className="text-sm uppercase tracking-[0.3em] text-[color:var(--accent)]">
                Right Now
              </p>

              <blockquote className="mt-8 max-w-5xl text-5xl font-semibold leading-tight">
                Building things that are
                <br />
                thoughtful enough to last
                <br />
                and simple enough to use.
              </blockquote>

            </section>

          </div>

        </div>

      </div>

    </main>
  );
}
