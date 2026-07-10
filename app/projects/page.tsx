import Navigation from "../components/Navigation";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[color:var(--background)] text-white">

      <Navigation />

      <div className="mx-auto max-w-7xl px-8 py-24">

        <p className="mb-4 text-sm uppercase tracking-[0.25em] text-white/50">
          Projects
        </p>

        <h1 className="max-w-4xl text-5xl font-semibold leading-tight md:text-7xl">
          Selected work.
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/70">
          A collection of projects that explore product thinking,
          systems design, and creating clarity through intentional
          execution.
        </p>

        <div className="mt-24 space-y-10">

          {/* AuraCare */}

          <article className="rounded-3xl border border-white/10 bg-white/5 p-10 transition hover:border-white/20">

            <p className="text-sm uppercase tracking-[0.2em] text-white/50">
              Healthcare Product
            </p>

            <h2 className="mt-3 text-4xl font-semibold">
              AuraCare
            </h2>

            <p className="mt-6 max-w-2xl leading-8 text-white/70">
              A product concept designed to make critical seizure
              information accessible in seconds through a simple,
              distraction-free experience.
            </p>

            <a
              href="/projects/auracare"
              className="mt-8 inline-flex rounded-full border border-white/20 px-6 py-3"
            >
              Open Case Study →
            </a>

          </article>

          {/* The Sim File */}

          <article className="rounded-3xl border border-white/10 bg-white/5 p-10 transition hover:border-white/20">

            <p className="text-sm uppercase tracking-[0.2em] text-white/50">
              Product & Automation
            </p>

            <h2 className="mt-3 text-4xl font-semibold">
              The Sim File
            </h2>

            <p className="mt-6 max-w-2xl leading-8 text-white/70">
              A structured workflow for generating immersive Sims 4
              households through prompts, organization, and automation.
            </p>

            <a
              href="/projects/the-sim-file"
              className="mt-8 inline-flex rounded-full border border-white/20 px-6 py-3"
            >
              Open Case Study →
            </a>

          </article>

          {/* Portfolio V2 */}

          <article className="rounded-3xl border border-white/10 bg-white/5 p-10 transition hover:border-white/20">

            <p className="text-sm uppercase tracking-[0.2em] text-white/50">
              Portfolio Design
            </p>

            <h2 className="mt-3 text-4xl font-semibold">
              Portfolio V2
            </h2>

            <p className="mt-6 max-w-2xl leading-8 text-white/70">
              Rebuilding my portfolio with a focus on storytelling,
              thoughtful UX, and scalable front-end architecture.
            </p>

            <a
              href="/projects/portfolio-v2"
              className="mt-8 inline-flex rounded-full border border-white/20 px-6 py-3"
            >
              Open Case Study →
            </a>

          </article>

        </div>

      </div>

    </main>
  );
}
