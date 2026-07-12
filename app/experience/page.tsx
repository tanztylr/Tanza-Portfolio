import Navigation from "../components/Navigation";

export default function ExperiencePage() {
  return (
    <main className="min-h-screen bg-[color:var(--background)] text-[color:var(--foreground)]">

      <div className="flex">

        <Navigation />

        <div className="flex-1">

          <div className="mx-auto max-w-7xl px-20 py-24 xl:px-32">

            <section>

              <p className="mb-4 text-sm uppercase tracking-[0.25em] text-[color:var(--muted)]">
                Experience
              </p>

              <h1 className="max-w-5xl text-5xl font-semibold leading-tight md:text-7xl">
                Experience shaped by solving messy problems.
              </h1>

              <p className="mt-10 max-w-3xl text-xl leading-relaxed text-[color:var(--muted)]">
                Across operations, project coordination, and nonprofit leadership,
                I've consistently focused on improving workflows, reducing friction,
                and helping people work more effectively.
              </p>

            </section>

            <section className="mt-28 space-y-20">

              <article className="border-l border-[color:var(--border)] pl-8">

                <p className="text-sm text-[color:var(--muted)]">
                  June 2026 — Present
                </p>

                <h2 className="mt-2 text-4xl font-semibold">
                  Tech Teens
                </h2>

                <p className="mt-3 text-[color:var(--muted)]">
                  Grant Research & Fundraising Support Manager
                </p>

                <ul className="mt-8 space-y-4 leading-8 text-[color:var(--muted)]">

                  <li>• Research grant opportunities that align with workforce development, technology education, and youth initiatives.</li>

                  <li>• Build relationships with businesses, schools, libraries, and community organizations to expand program partnerships.</li>

                  <li>• Track funding opportunities, application requirements, and outreach efforts to improve organizational capacity.</li>

                  <li>• Support initiatives that provide free technology education to teens through community partnerships and fundraising.</li>

                </ul>

              </article>

              <article className="border-l border-[color:var(--border)] pl-8">

                <p className="text-sm text-[color:var(--muted)]">
                  September 2022 — February 2025
                </p>

                <h2 className="mt-2 text-4xl font-semibold">
                  Cracker Barrel
                </h2>

                <p className="mt-3 text-[color:var(--muted)]">
                  Project Coordinator
                </p>

                <ul className="mt-8 space-y-4 leading-8 text-[color:var(--muted)]">

                  <li>• Coordinated operational initiatives across multiple teams while balancing shifting priorities and deadlines.</li>

                  <li>• Identified workflow bottlenecks and implemented process improvements that reduced recurring delays by 24%.</li>

                  <li>• Improved communication between stakeholders to keep projects moving efficiently.</li>

                  <li>• Built repeatable systems that increased consistency across day-to-day operations.</li>

                </ul>

              </article>

              <article className="border-l border-[color:var(--border)] pl-8">

                <p className="text-sm text-[color:var(--muted)]">
                  April 2021 — April 2022
                </p>

                <h2 className="mt-2 text-4xl font-semibold">
                  Assurant
                </h2>

                <p className="mt-3 text-[color:var(--muted)]">
                  Project Specialist
                </p>

                <ul className="mt-8 space-y-4 leading-8 text-[color:var(--muted)]">

                  <li>• Supported project execution and day-to-day operational coordination across cross-functional teams.</li>

                  <li>• Maintained documentation, tracked progress, and helped ensure project deliverables stayed organized.</li>

                </ul>

              </article>

              <article className="border-l border-[color:var(--border)] pl-8">

                <p className="text-sm text-[color:var(--muted)]">
                  Earlier Experience
                </p>

                <h2 className="mt-2 text-4xl font-semibold">
                  Operations Leadership
                </h2>

                <p className="mt-3 text-[color:var(--muted)]">
                  1000 Degrees • Planet Fitness
                </p>

                <ul className="mt-8 space-y-4 leading-8 text-[color:var(--muted)]">

                  <li>• Led daily operations while supporting staff development and customer experience initiatives.</li>

                  <li>• Created structure, improved processes, and maintained high operational standards.</li>

                  <li>• Strengthened leadership, communication, and problem-solving skills across diverse environments.</li>

                </ul>

              </article>

            </section>

          </div>

        </div>

      </div>

    </main>
  );
}
