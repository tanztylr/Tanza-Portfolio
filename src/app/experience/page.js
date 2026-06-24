export default function ExperiencePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white p-8">
      <div className="max-w-5xl mx-auto">

        <h1 className="text-5xl md:text-6xl font-bold mb-2">
          Experience
        </h1>

        <p className="text-cyan-300 text-lg mb-12">
          Building Systems That Help Teams Work Better
        </p>

        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 mb-12">
          <p className="text-slate-300 leading-relaxed">
            My experience spans project coordination, operations leadership,
            process improvement, training, workflow design, and digital product
            development. Across every role, the focus has remained the same:
            bringing structure to complexity and helping people execute work
            more effectively.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">

          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6">
            <h2 className="text-xl font-semibold text-cyan-400 mb-3">
              Restaurant Operations Leadership
            </h2>

            <p className="text-slate-300">
              Led hiring, onboarding, scheduling, inventory management,
              training, and daily operations while supporting multiple
              restaurant locations and teams.
            </p>
          </div>

          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6">
            <h2 className="text-xl font-semibold text-cyan-400 mb-3">
              Workflow & Process Improvement
            </h2>

            <p className="text-slate-300">
              Designed training resources, accountability systems,
              documentation, and operational workflows that improved
              consistency and reduced confusion across teams.
            </p>
          </div>

          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6">
            <h2 className="text-xl font-semibold text-cyan-400 mb-3">
              Project Coordination
            </h2>

            <p className="text-slate-300">
              Supported collaborative projects through planning,
              communication, documentation, presentation development,
              stakeholder alignment, and execution tracking.
            </p>
          </div>

          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6">
            <h2 className="text-xl font-semibold text-cyan-400 mb-3">
              Digital Product Development
            </h2>

            <p className="text-slate-300">
              Planned and developed independent projects including AuraCare
              and The Sim File while learning deployment workflows,
              GitHub collaboration, and modern web technologies.
            </p>
          </div>

        </div>

        <div className="mt-20">
          <h2 className="text-3xl font-bold mb-8">
            Selected Experience Highlights
          </h2>

          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8">

            <p className="text-cyan-400 uppercase tracking-widest text-sm mb-4">
              Operations Leadership
            </p>

            <h3 className="text-2xl font-bold mb-4">
              Creating Structure at 1000 Degrees Pizza
            </h3>

            <p className="text-slate-300 leading-relaxed">
              During my time supporting restaurant operations, I became
              responsible for far more than day-to-day execution. Hiring,
              onboarding, scheduling, inventory management, training, and
              communication often relied on verbal knowledge and inconsistent
              processes.
            </p>

            <p className="text-slate-300 leading-relaxed mt-4">
              To improve consistency, I developed documentation, training
              resources, operational checklists, inventory workflows, and
              manager support systems that helped create clearer expectations
              and better accountability across the team.
            </p>

            <p className="text-slate-300 leading-relaxed mt-4">
              The experience reinforced a lesson that continues to influence
              how I approach projects today: strong systems create clarity,
              reduce friction, and help people perform at their best.
            </p>

            <div className="grid md:grid-cols-2 gap-4 mt-8">

              <div className="rounded-xl border border-cyan-500/20 bg-slate-900/40 p-4">
                Training Systems
              </div>

              <div className="rounded-xl border border-cyan-500/20 bg-slate-900/40 p-4">
                Inventory Management
              </div>

              <div className="rounded-xl border border-cyan-500/20 bg-slate-900/40 p-4">
                Operations Documentation
              </div>

              <div className="rounded-xl border border-cyan-500/20 bg-slate-900/40 p-4">
                Team Accountability Processes
              </div>

            </div>

          </div>
        </div>

      </div>
    </main>
  );
}