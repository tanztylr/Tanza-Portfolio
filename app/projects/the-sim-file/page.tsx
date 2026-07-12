import Navigation from "../../components/Navigation";
import CaseStudyFooter from "../../components/CaseStudyFooter";

export default function SimFilePage() {
  return (
    <main className="min-h-screen bg-[color:var(--background)] text-[color:var(--foreground)]">

      <div className="flex">

        <Navigation />

        <div className="flex-1">

          <div className="mx-auto max-w-7xl px-20 py-24 xl:px-32">

            {/* Hero */}

            <section>

              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[color:var(--accent)]">
                Creative System
              </p>

              <h1 className="mt-6 max-w-6xl text-7xl font-semibold leading-[0.92] tracking-tight md:text-8xl">
                The Sim File
              </h1>

              <p className="mt-10 max-w-3xl text-xl leading-9 text-[color:var(--muted)]">
                A world-building system that transforms a creative hobby into an
                organized project using documentation, databases, and repeatable
                workflows.
              </p>

              <div className="mt-12 flex flex-wrap gap-3">

                <span className="rounded-full bg-[color:var(--accent)]/10 px-4 py-2 text-sm font-medium text-[color:var(--accent)]">
                  Information Architecture
                </span>

                <span className="rounded-full bg-[color:var(--accent)]/10 px-4 py-2 text-sm font-medium text-[color:var(--accent)]">
                  Documentation
                </span>

                <span className="rounded-full bg-[color:var(--accent)]/10 px-4 py-2 text-sm font-medium text-[color:var(--accent)]">
                  Systems Thinking
                </span>

              </div>

            </section>

            {/* Challenge */}

            <section className="mt-32 grid gap-20 border-t border-[color:var(--border)] pt-20 lg:grid-cols-[260px_1fr]">

              <div>

                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[color:var(--accent)]">
                  Challenge
                </p>

              </div>

              <div className="space-y-8">

                <p className="text-xl leading-10 text-[color:var(--muted)]">
                  Managing a long-running Sims world quickly became difficult.
                  Hundreds of characters, careers, businesses, households,
                  relationships, and timelines existed across multiple saves,
                  screenshots, and notes.
                </p>

                <p className="text-xl leading-10 text-[color:var(--muted)]">
                  Instead of accepting the chaos, I approached it like any other
                  project. I built a system that made information easy to find,
                  maintain, and expand over time.
                </p>

              </div>

            </section>

            {/* System */}

            <section className="mt-32">

              <p className="mb-12 text-sm font-semibold uppercase tracking-[0.3em] text-[color:var(--accent)]">
                The System
              </p>

              <div className="grid gap-8 md:grid-cols-2">

                {[
                  [
                    "Character Database",
                    "A centralized directory containing biographies, careers, aspirations, households, and important details for every resident."
                  ],
                  [
                    "Relationship Tracking",
                    "Mapped family trees, friendships, rivalries, and connections to keep long-term stories consistent."
                  ],
                  [
                    "World Directory",
                    "Organized every neighborhood, home, business, and public space into one searchable structure."
                  ],
                  [
                    "Story Documentation",
                    "Documented major events, timelines, and milestones to create continuity across multiple generations."
                  ],
                ].map(([title, body]) => (

                  <div
                    key={title}
                    className="rounded-[32px] border border-[color:var(--border)] p-8 transition duration-300 hover:-translate-y-2 hover:border-[color:var(--accent)] hover:bg-[color:var(--accent)]/5"
                  >

                    <h3 className="text-2xl font-semibold">
                      {title}
                    </h3>

                    <p className="mt-5 text-lg leading-8 text-[color:var(--muted)]">
                      {body}
                    </p>

                  </div>

                ))}

              </div>

            </section>

            {/* Principles */}

            <section className="mt-32 grid gap-20 border-t border-[color:var(--border)] pt-20 lg:grid-cols-[260px_1fr]">

              <div>

                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[color:var(--accent)]">
                  Design Principles
                </p>

              </div>

              <div>

                <ul className="space-y-6 text-lg leading-9 text-[color:var(--muted)]">

                  <li>• Everything should have one home.</li>

                  <li>• Information should be easy to search.</li>

                  <li>• Creative projects deserve structure.</li>

                  <li>• Good systems reduce friction instead of adding it.</li>

                </ul>

              </div>

            </section>

            {/* Reflection */}

            <section className="mt-32 border-t border-[color:var(--border)] pt-20">

              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[color:var(--accent)]">
                Reflection
              </p>

              <h2 className="mt-8 max-w-4xl text-5xl font-semibold leading-tight">
                I didn't build this because it was necessary.
                <br />
                I built it because my brain naturally looks for structure.
              </h2>

              <p className="mt-10 max-w-3xl text-xl leading-9 text-[color:var(--muted)]">
                This project reminded me that systems thinking isn't limited to
                work. Whether I'm organizing healthcare information, improving a
                nonprofit, coordinating projects, or building a fictional world,
                I naturally look for ways to reduce complexity and make things
                easier to understand.
              </p>

            </section>

            <CaseStudyFooter
              previous={{
                title: "Portfolio V2",
                href: "/projects/portfolio-v2",
              }}
            />

          </div>

        </div>

      </div>

    </main>
  );
}
