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

                <a
                  href="https://substack.com/@fineillsayit1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-[36px] border border-[color:var(--border)] p-12 transition-all duration-300 hover:-translate-y-2 hover:border-[color:var(--accent)] hover:bg-[color:var(--accent)]/5"
                >

                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[color:var(--accent)]">
                    Writing
                  </p>

                  <h2 className="mt-6 text-4xl font-semibold">
                    Fine, I'll Say It
                  </h2>

                  <p className="mt-8 leading-8 text-[color:var(--muted)]">
                    Honest conversations about project management, technology,
                    career growth, and the ideas most people think about but
                    rarely say out loud.
                  </p>

                  <span className="mt-10 inline-flex rounded-full bg-[color:var(--foreground)] px-6 py-3 text-sm font-medium text-[color:var(--background)] transition group-hover:scale-105">
                    Read on Substack →
                  </span>

                </a>

                <a
                  href="https://github.com/tanztylr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-[36px] border border-[color:var(--border)] p-12 transition-all duration-300 hover:-translate-y-2 hover:border-[color:var(--accent)] hover:bg-[color:var(--accent)]/5"
                >

                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[color:var(--accent)]">
                    Building
                  </p>

                  <h2 className="mt-6 text-4xl font-semibold">
                    Personal Projects
                  </h2>

                  <p className="mt-8 leading-8 text-[color:var(--muted)]">
                    Explore the code behind my portfolio, experiments, and
                    technical projects. It's where I document what I'm learning
                    while building things that solve real problems.
                  </p>

                  <span className="mt-10 inline-flex rounded-full bg-[color:var(--foreground)] px-6 py-3 text-sm font-medium text-[color:var(--background)] transition group-hover:scale-105">
                    View GitHub →
                  </span>

                </a>

              </section>

            </FadeIn>

          </div>

        </div>

      </div>

    </main>
  );
}
