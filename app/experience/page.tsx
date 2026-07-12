import Navigation from "../components/Navigation";

export default function ExperiencePage() {
  const roles = [
    {
      industry: "Nonprofit",
      company: "Tech Teens",
      title: "Project Enablement Manager",
      dates: "June 2026 — Present",
      summary:
        "Helping a growing nonprofit expand access to free technology education by improving grant strategy, partnership outreach, documentation, and project organization.",
      highlights: [
        "Built grant research workflows aligned with workforce development and youth technology initiatives.",
        "Coordinated outreach with businesses, schools, libraries, and community partners.",
        "Created documentation and tracking systems that improved organizational capacity.",
        "Supported initiatives that expand access to technology education for teens.",
      ],
    },
    {
      industry: "Operations",
      company: "Cracker Barrel",
      title: "Project Coordinator",
      dates: "September 2022 — February 2025",
      summary:
        "Coordinated operational initiatives across multiple teams while improving communication, reducing delays, and creating more consistent project execution.",
      highlights: [
        "Reduced recurring workflow delays by 24% through process improvements.",
        "Coordinated projects across cross-functional teams with shifting priorities.",
        "Improved stakeholder communication and operational consistency.",
        "Built repeatable workflows that supported day-to-day execution.",
      ],
    },
    {
      industry: "Insurance",
      company: "Assurant",
      title: "Project Specialist",
      dates: "April 2021 — April 2022",
      summary:
        "Supported project delivery by keeping documentation organized, maintaining visibility into project progress, and helping teams stay aligned.",
      highlights: [
        "Maintained project documentation and reporting.",
        "Tracked project progress and deliverables.",
        "Supported cross-functional coordination.",
        "Improved visibility into ongoing work.",
      ],
    },
    {
      industry: "Education",
      company: "1000 Degrees",
      title: "Operations Manager",
      dates: "March 2019 — March 2021",
      summary:
        "Led daily operations while improving scheduling, supporting staff, and creating structure that helped teams operate more effectively.",
      highlights: [
        "Improved operational consistency.",
        "Led staff coordination and scheduling.",
        "Strengthened day-to-day team communication.",
        "Focused on continuous process improvement.",
      ],
    },
    {
      industry: "Fitness",
      company: "Planet Fitness",
      title: "Team Lead",
      dates: "August 2017 — August 2019",
      summary:
        "Developed leadership, customer service, and operational skills while supporting daily facility operations and mentoring team members.",
      highlights: [
        "Supported daily operations.",
        "Led and coached team members.",
        "Maintained high customer experience standards.",
        "Solved operational issues in a fast-paced environment.",
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-[color:var(--background)] text-[color:var(--foreground)]">
      <div className="flex">

        <Navigation />

        <div className="flex-1">

          <div className="mx-auto max-w-7xl px-20 py-24 xl:px-32">

            {/* Hero */}

            <section>

              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[color:var(--accent)]">
                Experience
              </p>

              <h1 className="mt-6 max-w-6xl text-7xl font-semibold leading-[0.95] tracking-tight md:text-8xl">
                Different industries.
                <br />
                The same mindset.
              </h1>

              <p className="mt-10 max-w-4xl text-xl leading-9 text-[color:var(--muted)]">
                Every role has looked different, but the work has followed the
                same pattern. I enjoy bringing structure to complexity,
                improving workflows, and helping people do their best work.
              </p>

            </section>

            {/* What You'll Notice */}

            <section className="mt-24 rounded-[36px] border border-[color:var(--border)] bg-[color:var(--surface)] p-12">

              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[color:var(--accent)]">
                What You'll Notice
              </p>

              <div className="mt-10 grid gap-6 md:grid-cols-2">

                {[
                  "Create structure where there wasn't any.",
                  "Improve workflows that slow teams down.",
                  "Build documentation people actually use.",
                  "Help projects move forward with clarity.",
                ].map((item) => (

                  <div
                    key={item}
                    className="flex items-start gap-4 rounded-2xl border border-[color:var(--border)] p-6"
                  >
                    <span className="text-[color:var(--accent)] text-xl">
                      ✓
                    </span>

                    <p className="text-lg leading-8">
                      {item}
                    </p>

                  </div>

                ))}

              </div>

            </section>

            {/* Roles */}

            <section className="mt-24 space-y-10">

              {roles.map((role) => (

                <article
                  key={role.company}
                  className="rounded-[36px] border border-[color:var(--border)] p-10 transition-all duration-300 hover:-translate-y-1 hover:border-[color:var(--accent)] hover:bg-[color:var(--accent)]/5"
                >

                  <span className="inline-flex rounded-full bg-[color:var(--accent)]/10 px-4 py-2 text-sm font-medium text-[color:var(--accent)]">
                    {role.industry}
                  </span>

                  <p className="mt-8 text-sm uppercase tracking-[0.2em] text-[color:var(--muted)]">
                    {role.dates}
                  </p>

                  <h2 className="mt-3 text-4xl font-semibold">
                    {role.company}
                  </h2>

                  <p className="mt-2 text-lg text-[color:var(--muted)]">
                    {role.title}
                  </p>

                  <p className="mt-8 max-w-4xl text-lg leading-9 text-[color:var(--muted)]">
                    {role.summary}
                  </p>

                  <div className="mt-10">

                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[color:var(--accent)]">
                      Highlights
                    </p>

                    <div className="mt-6 grid gap-5 md:grid-cols-2">

                      {role.highlights.map((item) => (

                        <div
                          key={item}
                          className="flex items-start gap-3"
                        >
                          <span className="mt-1 text-[color:var(--accent)]">
                            ✓
                          </span>

                          <p className="leading-8 text-[color:var(--muted)]">
                            {item}
                          </p>

                        </div>

                      ))}

                    </div>

                  </div>

                </article>

              ))}

            </section>

          </div>

        </div>

      </div>

    </main>
  );
}
