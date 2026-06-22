export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white p-8">
      <div className="max-w-4xl mx-auto">
       <h1 className="text-5xl md:text-6xl font-bold mb-4">
          Creating Clarity Through Structure
        </h1>
    <p className="text-cyan-400 uppercase tracking-widest text-sm mb-12">
  About Me
</p>

        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 transition-all duration-300 hover:border-cyan-400 hover:shadow-[0_0_35px_rgba(34,211,238,0.3)]">
          <p>
            I've always been curious about how things work, why they break down,
            and what can be done to improve them.
          </p>

          <p>
            Throughout my career, I've found myself drawn to situations where
            information is scattered, processes are unclear, or teams are
            struggling with inefficiencies.
          </p>

          <p>
            What interests me most isn't organization for its own sake—it's
            helping people navigate complexity with greater clarity.
          </p>
        </div>
              <div className="grid md:grid-cols-2 gap-6 mt-12">

  <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 transition-all duration-300 hover:border-cyan-400 hover:shadow-[0_0_35px_rgba(34,211,238,0.3)]">
    <h2 className="text-xl font-semibold mb-3 text-cyan-400">
      Workflow Optimization
    </h2>
    <p className="text-slate-300">
      I enjoy examining how work moves through a process and identifying
      opportunities to reduce friction, improve communication, and create
      consistency.
    </p>
  </div>

  <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 transition-all duration-300 hover:border-cyan-400 hover:shadow-[0_0_35px_rgba(34,211,238,0.3)]">
    <h2 className="text-xl font-semibold mb-3 text-cyan-400">
      Digital Solutions Development
    </h2>
    <p className="text-slate-300">
      I enjoy using digital tools, AI platforms, and product-thinking
      principles to transform ideas into practical solutions that improve
      access to information and simplify workflows.
    </p>
  </div>

</div>
        <div className="mt-12">
  <h2 className="text-2xl font-bold mb-6">
    Core Strengths
  </h2>

  <div className="flex flex-wrap gap-3">
    {[
      "Workflow Design",
      "Systems Organization",
      "Process Improvement",
      "Project Planning",
      "Research & Analysis",
      "Documentation",
      "Stakeholder Communication",
      "Digital Product Planning"
    ].map((skill) => (
      <span
        key={skill}
        className="px-4 py-2 rounded-full border border-cyan-500/20 bg-slate-900/40 text-slate-300"
      >
        {skill}
      </span>
    ))}
  </div>
</div>
      </div>
    </main>
  );
}
