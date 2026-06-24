export default function SimFilePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white p-8">
      <div className="max-w-5xl mx-auto">

        <p className="text-cyan-400 uppercase tracking-widest text-sm mb-4">
          Knowledge Management
        </p>

        <h1 className="text-5xl md:text-6xl font-bold mb-2">
          The Sim File
        </h1>

        <p className="text-cyan-300 text-lg mb-12">
          Household & Worldbuilding Management System
        </p>

        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            Project Overview
          </h2>

          <p className="text-slate-300 leading-relaxed">
            The Sim File is a concept designed to help simulation players
            organize households, family trees, character histories, genetics,
            lore, gameplay notes, and worldbuilding information in one
            centralized workspace.
          </p>
        </div>

        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            My Role
          </h2>

          <p className="text-slate-300 leading-relaxed">
            Product Planning, Information Architecture, User Experience Design,
            Feature Prioritization, Workflow Design, and Systems Organization.
          </p>
        </div>

        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8">
          <h2 className="text-2xl font-semibold mb-4">
            Key Focus Areas
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="rounded-xl border border-cyan-500/20 bg-slate-900/40 p-4">
              Household Management
            </div>

            <div className="rounded-xl border border-cyan-500/20 bg-slate-900/40 p-4">
              Character Tracking
            </div>

            <div className="rounded-xl border border-cyan-500/20 bg-slate-900/40 p-4">
              Worldbuilding Systems
            </div>

            <div className="rounded-xl border border-cyan-500/20 bg-slate-900/40 p-4">
              Information Organization
            </div>
          </div>
        </div>
<div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 mt-8">
  <h2 className="text-2xl font-semibold mb-4">
    Project Screenshots
  </h2>

  <div className="space-y-8">

    <div>
      <img
        src="/images/simfile-home.png"
        alt="The Sim File Home Screen"
        className="rounded-xl border border-white/10"
      />

      <p className="text-slate-400 text-sm mt-3">
        Landing page introducing The Sim File experience and allowing users
        to begin generating new households and story concepts.
      </p>
    </div>

    <div>
      <img
        src="/images/simfile-parameters.png"
        alt="The Sim File Parameters"
        className="rounded-xl border border-white/10"
      />

      <p className="text-slate-400 text-sm mt-3">
        Household generation controls allowing users to customize gameplay
        style, drama levels, household size, and content influences.
      </p>
    </div>

    <div>
      <img
        src="/images/simfile-results.png"
        alt="The Sim File Results"
        className="rounded-xl border border-white/10"
      />

      <p className="text-slate-400 text-sm mt-3">
        Generated household dossier displaying character profiles,
        relationships, world placement, gameplay hooks, and storytelling
        opportunities.
      </p>
    </div>

  </div>
</div>
      </div>
    </main>
  );
}