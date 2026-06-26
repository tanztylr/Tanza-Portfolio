export default function CertificationsPage() {
  const certifications = [
    {
      title: "Google Project Management Professional Certificate",
      organization: "Google",
      year: "2025",
      link: "#",
    },
    {
      title: "Google IT Support Professional Certificate",
      organization: "Google",
      year: "2024",
      link: "#",
    },
    {
      title: "Professional in Human Resources (PHR)",
      organization: "HRCI",
      year: "2024",
      link: "#",
    },
    {
      title: "Technical Specialist Certificate",
      organization: "Chattahoochee Technical College",
      year: "2018",
      link: "#",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-white p-8">
      <div className="max-w-5xl mx-auto">

        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          Certifications
        </h1>

        <p className="text-slate-400 text-lg mb-12">
          Certifications and professional credentials that support my experience
          in project management, operations, technology, and people leadership.
        </p>

        <div className="grid gap-6">

          {certifications.map((cert) => (

            <div
              key={cert.title}
              className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-cyan-400 transition"
            >

              <h2 className="text-2xl font-semibold mb-2">
                {cert.title}
              </h2>

              <p className="text-cyan-400 mb-4">
                {cert.organization} • {cert.year}
              </p>

              <button className="px-4 py-2 rounded-lg border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-black transition">
                View Credential
              </button>

            </div>

          ))}

        </div>

      </div>
    </main>
  );
}
