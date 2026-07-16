import Navigation from "../../components/Navigation";
import Image from "next/image";
import CaseStudyFooter from "../../components/CaseStudyFooter";

export default function TechTeensPage() {
  return (
    <main className="min-h-screen bg-[color:var(--background)] text-[color:var(--foreground)]">

      <div className="flex">

        <Navigation />

        <div className="flex-1">

          <div className="mx-auto max-w-7xl px-20 py-24 xl:px-32">

            {/* Hero */}

            <section>

              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[color:var(--accent)]">
                Nonprofit Project
              </p>

              <h1 className="mt-6 max-w-6xl text-7xl font-semibold leading-[0.92] tracking-tight md:text-8xl">
                Tech Teens
              </h1>

              <p className="mt-10 max-w-3xl text-xl leading-9 text-[color:var(--muted)]">
                Supporting a growing nonprofit by building grant research systems,
organizing partnership initiatives, and creating workflows that made
fundraising and collaboration easier to manage.
              </p>

              <div className="mt-12 flex flex-wrap gap-3">

                <span className="rounded-full bg-[color:var(--accent)]/10 px-4 py-2 text-sm font-medium text-[color:var(--accent)]">
                  Project Management
                </span>

                <span className="rounded-full bg-[color:var(--accent)]/10 px-4 py-2 text-sm font-medium text-[color:var(--accent)]">
                  Grant Strategy
                </span>

                <span className="rounded-full bg-[color:var(--accent)]/10 px-4 py-2 text-sm font-medium text-[color:var(--accent)]">
                  Nonprofit Operations
                </span>

              </div>

              <div className="mt-20 overflow-hidden rounded-[40px] shadow-2xl">

                <Image
                  src="/images/auracare lite homescreen.png"
                  alt="AuraCare"
                  width={1600}
                  height={900}
                  priority
                  className="w-full transition duration-700 hover:scale-[1.02]"
                />

              </div>

            </section>

            {/* Overview */}

            <section className="mt-32 grid gap-20 border-t border-[color:var(--border)] pt-20 lg:grid-cols-[260px_1fr]">

              <div>

                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[color:var(--accent)]">
                  Overview
                </p>

              </div>

              <div className="space-y-8">

                <p className="text-xl leading-10 text-[color:var(--muted)]">
                  Tech Teens was growing quickly, but many of the internal systems
supporting fundraising, partnerships, and documentation were still
being developed. Information lived across multiple tools, grant
opportunities were constantly changing, and there wasn't a consistent
process for tracking research or organizing supporting materials.
                </p>

                <p className="text-xl leading-10 text-[color:var(--muted)]">
                  My role was to bring structure to that work by creating repeatable
systems, improving visibility, and making it easier for leadership to
move opportunities from research to action.
                </p>

              </div>

            </section>
{/* Responsibilities */}

<section className="mt-32">

  <p className="mb-12 text-sm font-semibold uppercase tracking-[0.3em] text-[color:var(--accent)]">
    Responsibilities
  </p>

  <div className="grid gap-8 md:grid-cols-2">

    {[
      "Managed the organization's centralized grant tracker and funding pipeline.",
      "Researched grant opportunities and corporate funding prospects.",
      "Organized documentation and supporting materials for grant applications.",
      "Developed repeatable workflows for partnership and fundraising efforts.",
    ].map((item) => (

      <div
        key={item}
        className="rounded-[32px] border border-[color:var(--border)] p-8 transition duration-300 hover:border-[color:var(--accent)] hover:bg-[color:var(--accent)]/5"
      >
        <p className="text-lg leading-8">
          {item}
        </p>
      </div>

    ))}

  </div>

</section>
{/* Project Execution */}

<section className="mt-32 grid gap-20 border-t border-[color:var(--border)] pt-20 lg:grid-cols-[260px_1fr]">

  <div>

    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[color:var(--accent)]">
      Project Execution
    </p>

  </div>

  <div>

    <div className="rounded-[28px] border border-[color:var(--border)] p-8">

      <ul className="space-y-6 text-lg leading-9 text-[color:var(--muted)]">

        <li>• Researched grant opportunities, corporate partnerships, and funding prospects.</li>

        <li>• Built and maintained a centralized grant opportunity tracker.</li>

        <li>• Organized supporting documentation using SharePoint and Microsoft 365.</li>

        <li>• Established recurring grant strategy meetings and documented next steps.</li>

        <li>• Created repeatable workflows that made research and follow-up easier to manage.</li>

      </ul>

    </div>

  </div>

</section>

            {/* Key Outcomes */}

<section className="mt-32">

  <p className="mb-12 text-sm font-semibold uppercase tracking-[0.3em] text-[color:var(--accent)]">
    Key Outcomes
  </p>

  <div className="grid gap-8 md:grid-cols-2">

    {[
      [
        "Grant Research System",
        "Created a structured process for identifying, tracking, and prioritizing funding opportunities."
      ],
      [
        "Documentation",
        "Centralized grant materials, notes, and supporting documents to improve accessibility."
      ],
      [
        "Partnership Pipeline",
        "Developed an organized approach for researching and tracking potential community and corporate partners."
      ],
      [
        "Project Coordination",
        "Supported recurring planning sessions, documented action items, and kept work moving across multiple initiatives."
      ]
    ].map(([title, body]) => (

      <div
        key={title}
        className="rounded-[32px] border border-[color:var(--border)] p-8 transition duration-300 hover:border-[color:var(--accent)] hover:bg-[color:var(--accent)]/5"
      >

        <h3 className="text-2xl font-semibold">
          {title}
        </h3>

        <p className="mt-5 text-lg leading-8 text-[color:var(--muted)]">
          {body}
        </p>

      </div>

    ))}

  </div>

</section>
            {/* Reflections */}

<section className="mt-32 border-t border-[color:var(--border)] pt-20">

  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[color:var(--accent)]">
    Reflections
  </p>

  <h2 className="mt-8 max-w-4xl text-5xl font-semibold leading-tight">
    Project management isn't just about keeping work organized.
  </h2>

  <p className="mt-10 max-w-3xl text-xl leading-9 text-[color:var(--muted)]">
    Working with Tech Teens reinforced that the biggest challenge isn't
    usually a lack of ideas—it's creating systems that make good ideas
    easier to execute. Whether researching grants, organizing
    documentation, or coordinating priorities, every improvement reduced
    friction for the team and made future work easier.
  </p>

  <p className="mt-8 max-w-3xl text-xl leading-9 text-[color:var(--muted)]">
    The experience also showed me that project management extends far
    beyond timelines and task lists. It involves creating clarity,
    improving communication, and building processes that people can rely
    on as organizations grow.
  </p>

</section>

          </div>

        </div>

      </div>

    </main>
  );
}

