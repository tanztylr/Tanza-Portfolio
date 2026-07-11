"use client";

import Navigation from "../components/Navigation";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[color:var(--background)] text-[color:var(--foreground)]">

      <Navigation />

      <section className="mx-auto max-w-7xl px-8 py-24">

        <p className="text-sm uppercase tracking-[0.25em] text-[color:var(--muted)]">
          Projects
        </p>

        <h1 className="mt-6 max-w-5xl text-6xl font-semibold leading-[1.05] md:text-7xl">
          Not every problem needs another feature.
          <br />
          Some need a better way of thinking.
        </h1>

        <p className="mt-8 max-w-3xl text-xl leading-9 text-[color:var(--muted)]">
          I enjoy taking complicated ideas and turning them into products,
          systems, and experiences that feel simple to use.
        </p>

      </section>

      {/* Featured */}

      <section className="mx-auto max-w-7xl px-8 pb-32">

        <div className="rounded-[36px] border border-[color:var(--border)] bg-[color:var(--surface)] p-14 transition-all hover:-translate-y-1 hover:border-[color:var(--foreground)] hover:shadow-xl">

          <p className="text-sm uppercase tracking-[0.25em] text-[color:var(--accent)]">
            Featured Project
          </p>

          <h2 className="mt-4 text-5xl font-semibold">
            AuraCare
          </h2>

          <p className="mt-8 max-w-2xl leading-8 text-[color:var(--muted)]">
            A healthcare product concept designed to make emergency seizure
            information accessible in seconds through a calm, distraction-free
            experience.
          </p>

          <a
            href="/projects/auracare"
            className="mt-10 inline-flex rounded-full border border-[color:var(--border)] px-7 py-3 transition-all hover:border-[color:var(--foreground)] hover:bg-[color:var(--foreground)] hover:text-[color:var(--background)]"
          >
            Read Case Study →
          </a>

        </div>

      </section>

      {/* More Projects */}

      <section className="mx-auto max-w-5xl px-8 pb-32">

        <h2 className="text-3xl font-semibold">
          More Projects
        </h2>

        <div className="mt-12 divide-y divide-[color:var(--border)]">

          <article className="py-12 transition-all hover:translate-x-2">

            <p className="text-sm uppercase tracking-[0.2em] text-[color:var(--muted)]">
              Portfolio
            </p>

            <h3 className="mt-3 text-3xl font-semibold">
              Portfolio V2
            </h3>

            <p className="mt-4 max-w-2xl leading-8 text-[color:var(--muted)]">
              Rebuilding my professional website around storytelling,
              thoughtful UX, and product thinking.
            </p>

            <a
              href="/projects/portfolio-v2"
              className="mt-6 inline-flex text-sm font-medium"
            >
              Read Case Study →
            </a>

          </article>

          <article className="py-12 transition-all hover:translate-x-2">

            <p className="text-sm uppercase tracking-[0.2em] text-[color:var(--muted)]">
              Creative Systems
            </p>

            <h3 className="mt-3 text-3xl font-semibold">
              The Sim File
            </h3>

            <p className="mt-4 max-w-2xl leading-8 text-[color:var(--muted)]">
              A structured creative workflow that combines organization,
              automation, and storytelling for The Sims 4.
            </p>

            <a
              href="/projects/the-sim-file"
              className="mt-6 inline-flex text-sm font-medium"
            >
              Read Case Study →
            </a>

          </article>

        </div>

      </section>

      {/* CTA */}

      <section className="mx-auto max-w-5xl px-8 pb-28">

        <div className="rounded-[32px] border border-[color:var(--border)] p-12">

          <h2 className="text-4xl font-semibold">
            Interested in how I think?
          </h2>

          <p className="mt-6 max-w-2xl leading-8 text-[color:var(--muted)]">
            Beyond building products, I write about project management,
            systems thinking, career growth, and the ideas that shape my work.
          </p>

          <a
            href="/beyond"
            className="mt-8 inline-flex rounded-full bg-[color:var(--foreground)] px-7 py-3 text-sm font-medium text-[color:var(--background)] transition-all hover:opacity-90"
          >
            Explore Beyond →
          </a>

        </div>

      </section>

    </main>
  );
}
