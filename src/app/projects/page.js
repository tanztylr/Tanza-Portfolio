export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white p-8">
      <div className="max-w-5xl mx-auto">

        <h1 className="text-5xl md:text-6xl font-bold mb-2">
          Projects
        </h1>

        <p className="text-cyan-300 text-lg mb-12">
          Ideas, Systems & Digital Products
        </p>

        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 mb-12">
          <p className="text-slate-300 leading-relaxed">
            I enjoy exploring ideas that improve organization, accessibility,
            workflows, and decision making. These projects reflect a combination
            of product thinking, systems design, problem solving, and curiosity.
          </p>
        </div>

        <div className="space-y-8">

          <a
            href="/projects/auracare"
            className="block backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 transition-all duration-300 hover:border-cyan-400 hover:shadow-[0_0_35px_rgba(34,211,238,0.3)]"
          >
            <p className="text-cyan-400 uppercase tracking-widest text-sm mb-2">
              Healthcare Innovation
            </p>

            <h2 className="text-3xl font-bold mb-4">
              AuraCare
            </h2>

            <p className="text-slate-300 leading-relaxed">
              AuraCare began as a healthcare-focused concept designed to improve
              information accessibility and emergency preparedness for individuals
              living with epilepsy. The project involved user workflow planning,
              feature prioritization, interface design, and deployment using modern
              web technologies.
            </p>
          </a>

          <a
            href="/projects/thesimfile"
            className="block backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 transition-all duration-300 hover:border-cyan-400 hover:shadow-[0_0_35px_rgba(34,211,238,0.3)]"
          >
            <p className="text-cyan-400 uppercase tracking-widest text-sm mb-2">
              Knowledge Management
            </p>

            <h2 className="text-3xl font-bold mb-4">
              The Sim File
            </h2>

            <p className="text-slate-300 leading-relaxed">
              The Sim File is a concept focused on helping simulation players
              organize households, character histories, family trees, genetics,
              lore, and world-building information within a structured digital
              workspace. The project explores organization systems, user
              experience design, and information architecture.
            </p>
          </a>

          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8">
            <p className="text-cyan-400 uppercase tracking-widest text-sm mb-2">
              Future Projects
            </p>

            <h2 className="text-3xl font-bold mb-4">
              What's Next
            </h2>

            <p className="text-slate-300 leading-relaxed">
              I'm currently exploring new project ideas focused on workflow
              optimization, AI-assisted productivity, operational dashboards,
              and digital tools that help people organize information more
              effectively. These concepts are still evolving and may become
              future portfolio projects.
            </p>
          </div>

        </div>

      </div>
    </main>
  );
}