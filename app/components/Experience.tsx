import FeaturedCredential from "../components/FeaturedCredential";
export default function Experience() {
  const roles = [
    {
      years: "2026 — Present",
      company: "Tech Teens",
      title: "Grant Research & Partnerships",
      summary:
        "Researching grant opportunities, building strategic partnerships, and helping expand access to technology education for underserved teens.",
    },
    {
      years: "2024 — 2025",
      company: "Cracker Barrel",
      title: "Project Coordinator",
      summary:
        "Improved operational workflows, coordinated cross-functional initiatives, and implemented process improvements that reduced recurring delays.",
    },
    {
      years: "Earlier",
      company: "Assurant • 1000 Degrees • Planet Fitness",
      title: "Operations & Leadership",
      summary:
        "Built experience leading teams, improving processes, and creating operational structure across multiple industries.",
    },
  ];

  return (
    <section className="py-40">

      <div className="mb-24 flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">

        <div className="max-w-6xl">

          <p className="mb-5 text-sm uppercase tracking-[0.25em] text-[color:var(--accent)]">
            Experience
          </p>

          <h2 className="max-w-6xl text-6xl md:text-7xl xl:text-[5.5rem] font-semibold leading-[0.95] tracking-tight text-[color:var(--foreground)]">
            Building systems
            <br />
            that help people
            <br />
            do their best work.
          </h2>

          <p className="mt-10 max-w-4xl text-xl leading-9 text-[color:var(--muted)]">
            Across operations, project coordination, and nonprofit leadership,
            I've consistently focused on improving workflows, reducing friction,
            and helping teams work more effectively.
          </p>

        </div>

        <a
          href="/experience"
          className="inline-flex w-fit rounded-full border border-[color:var(--border)] bg-white px-8 py-4 text-sm font-medium transition hover:bg-gray-50"
        >
          View Full Experience →
        </a>

      </div>

      <div className="space-y-8">

        {roles.map((role) => (
          <article
            key={role.company}
            className="rounded-[36px] border border-[color:var(--border)] bg-white p-14 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >

            <div className="grid gap-10 md:grid-cols-[220px_1fr]">

              <div>

                <p className="text-lg font-medium text-[color:var(--accent)]">
                  {role.years}
                </p>

              </div>

              <div>

                <h3 className="text-4xl font-semibold text-[color:var(--foreground)]">
                  {role.company}
                </h3>

                <p className="mt-3 text-lg text-[color:var(--muted)]">
                  {role.title}
                </p>

                <p className="mt-8 max-w-4xl text-lg leading-9 text-[color:var(--muted)]">
                  {role.summary}
                </p>

              </div>

            </div>

          </article>
        ))}

      </div>

    </section>
  );
}
