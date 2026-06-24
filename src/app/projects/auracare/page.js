export default function AuraCarePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white p-8">
      <div className="max-w-5xl mx-auto">

        <p className="text-cyan-400 uppercase tracking-widest text-sm mb-4">
          Healthcare Innovation
        </p>

        <h1 className="text-5xl md:text-6xl font-bold mb-2">
          AuraCare
        </h1>

        <p className="text-cyan-300 text-lg mb-12">
          Improving Accessibility & Emergency Preparedness
        </p>

        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            Project Overview
          </h2>

          <p className="text-slate-300 leading-relaxed">
            AuraCare began as a healthcare-focused project designed to
            improve access to critical information for individuals living
            with epilepsy. The concept explored how technology could help
            users organize medical information, prepare for emergencies,
            and provide caregivers with faster access to important details
            when needed.
          </p>
        </div>

        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            My Role
          </h2>

          <p className="text-slate-300 leading-relaxed">
            Product Planning, Workflow Design, Feature Prioritization,
            User Experience Planning, Information Architecture,
            Testing, Deployment Coordination, and Documentation.
          </p>
        </div>

        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8">
          <h2 className="text-2xl font-semibold mb-4">
            Key Focus Areas
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="rounded-xl border border-cyan-500/20 bg-slate-900/40 p-4">
              Emergency Information Access
            </div>

            <div className="rounded-xl border border-cyan-500/20 bg-slate-900/40 p-4">
              User Workflow Design
            </div>

            <div className="rounded-xl border border-cyan-500/20 bg-slate-900/40 p-4">
              Accessibility Planning
            </div>

            <div className="rounded-xl border border-cyan-500/20 bg-slate-900/40 p-4">
              Healthcare Information Organization
            </div>
          </div>
        </div>
        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 mt-8">
          <h2 className="text-2xl font-semibold mb-6">
            Project Screenshots
          </h2>

          <div className="space-y-8">

  <div>
    <img
      src="/images/auracare-home.png"
      alt="AuraCare Emergency Screen"
      className="rounded-xl border border-white/10"
    />

    <p className="text-slate-400 text-sm mt-3">
      Emergency dashboard providing immediate access to alerts, first aid
      guidance, and critical response tools during a seizure event.
    </p>
  </div>

  <div>
    <img
      src="/images/auracare-guide.png"
      alt="AuraCare First Aid Guide"
      className="rounded-xl border border-white/10"
    />

    <p className="text-slate-400 text-sm mt-3">
      Step-by-step seizure response instructions designed to help caregivers
      and bystanders quickly follow recommended first aid procedures.
    </p>
  </div>

  <div>
    <img
      src="/images/auracare-log.png"
      alt="AuraCare Event Log"
      className="rounded-xl border border-white/10"
    />

    <p className="text-slate-400 text-sm mt-3">
      Post-event logging feature allowing users to record seizure details,
      duration, and notes for future reference and healthcare discussions.
    </p>
  </div>

</div>
        </div>
      </div>
    </main>
  );
}