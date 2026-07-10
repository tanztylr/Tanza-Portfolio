import Navigation from "../../components/Navigation";

export default function PortfolioV2Page() {
  return (
    <main className="min-h-screen bg-[color:var(--background)] text-white">

      <Navigation />

      <div className="mx-auto max-w-7xl px-8 py-24">

        <p className="mb-4 text-sm uppercase tracking-[0.25em] text-white/50">
          Portfolio Design
        </p>

        <h1 className="max-w-4xl text-5xl font-semibold leading-tight md:text-7xl">
          Portfolio V2
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/70">
          Rebuilding my portfolio from the ground up with a focus on
          storytelling, thoughtful design, and a scalable architecture.
        </p>

        <div className="mt-20 aspect-[16/9] rounded-3xl border border-white/10 bg-white/5" />

        <section className="mt-24 grid gap-20 lg:grid-cols-[1fr_2fr]">

          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-white/50">
              Overview
            </p>
          </div>

          <div>
            <p className="leading-8 text-white/70">
              Placeholder for the project overview.
            </p>
          </div>

        </section>

        <section className="mt-24 grid gap-20 lg:grid-cols-[1fr_2fr]">

          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-white/50">
              The Challenge
            </p>
          </div>

          <div>
            <p className="leading-8 text-white/70">
              Placeholder for the design challenge.
            </p>
          </div>

        </section>

        <section className="mt-24 grid gap-20 lg:grid-cols-[1fr_2fr]">

          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-white/50">
              My Process
            </p>
          </div>

          <div>
            <p className="leading-8 text-white/70">
              Placeholder for research, design decisions,
              development, and iteration.
            </p>
          </div>

        </section>

        <section className="mt-24 grid gap-20 lg:grid-cols-[1fr_2fr]">

          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-white/50">
              Outcome
            </p>
          </div>

          <div>
            <p className="leading-8 text-white/70">
              Placeholder for results and lessons learned.
            </p>
          </div>

        </section>

      </div>

    </main>
  );
}
