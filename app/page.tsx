import Image from "next/image";
import Hero from "./components/Hero";
import Sidebar from "./components/Sidebar";

export default function Home() {
  return (
    <main className="min-h-screen bg-[color:var(--background)] text-[color:var(--foreground)]">

      <div className="flex">

        <Sidebar />

        <div className="flex-1">

          <div className="mx-auto max-w-7xl px-20 xl:px-32">

            {/* Hero */}

            <Hero />

            {/* Featured Project */}

            <section className="py-40">

              <div className="grid items-center gap-16 lg:grid-cols-[0.85fr_1.15fr]">

                <div>

                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[color:var(--accent)]">
                    Featured Project
                  </p>

                  <h2 className="mt-6 text-7xl font-semibold leading-[0.9] tracking-tight">
                    AuraCare
                  </h2>

                  <p className="mt-10 max-w-xl text-xl leading-10 text-[color:var(--muted)]">
                    A healthcare product concept focused on making emergency
                    seizure information available in seconds through calm,
                    thoughtful, human-centered design.
                  </p>

                  <a
                    href="/projects/auracare"
                    className="mt-10 inline-flex rounded-full bg-[color:var(--foreground)] px-8 py-4 text-sm font-medium text-[color:var(--background)] transition hover:scale-105"
                  >
                    View Case Study →
                  </a>

                </div>

                <div className="overflow-hidden rounded-[40px] shadow-2xl transition duration-500 hover:-translate-y-2">

                  <Image
                    src="/images/auracare lite homescreen.png"
                    alt="AuraCare Preview"
                    width={1400}
                    height={900}
                    className="w-full transition duration-700 hover:scale-[1.02]"
                    priority
                  />

                </div>

              </div>

            </section>

            {/* How I Work */}

            <section className="border-t border-[color:var(--border)] py-32">

              <div className="grid gap-20 lg:grid-cols-[0.8fr_1.2fr]">

                <div>

                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[color:var(--accent)]">
                    How I Work
                  </p>

                  <h2 className="mt-6 text-5xl font-semibold leading-tight">
                    I like turning
                    <br />
                    complexity into
                    <br />
                    clarity.
                  </h2>

                </div>

                <div>

                  <p className="text-xl leading-10 text-[color:var(--muted)]">
                    Whether I'm coordinating projects, improving operations,
                    designing products, or supporting nonprofits, my approach
                    stays the same. I look for unnecessary friction, simplify
                    the process, and build systems people actually enjoy using.
                  </p>

                  <div className="mt-14 grid gap-6 md:grid-cols-2">

                    {[
                      "Create structure where there wasn't any.",
                      "Improve workflows that slow teams down.",
                      "Build documentation people actually use.",
                      "Help projects move forward with clarity.",
                    ].map((item) => (

                      <div
                        key={item}
                        className="flex items-start gap-4 rounded-[24px] border border-[color:var(--border)] p-6 transition hover:border-[color:var(--accent)] hover:bg-[color:var(--accent)]/5"
                      >

                        <span className="text-xl text-[color:var(--accent)]">
                          ✓
                        </span>

                        <p className="leading-8">
                          {item}
                        </p>

                      </div>

                    ))}

                  </div>

                </div>

              </div>

            </section>
                        {/* Selected Experience */}

            <section className="border-t border-[color:var(--border)] py-32">

              <div className="flex items-end justify-between">

                <div>

                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[color:var(--accent)]">
                    Selected Experience
                  </p>

                  <h2 className="mt-6 text-5xl font-semibold">
                    Building better
                    <br />
                    systems everywhere.
                  </h2>

                </div>

                <a
                  href="/experience"
                  className="hidden rounded-full border border-[color:var(--border)] px-6 py-3 transition hover:border-[color:var(--foreground)] hover:bg-[color:var(--foreground)] hover:text-[color:var(--background)] md:inline-flex"
                >
                  View Experience →
                </a>

              </div>

              <div className="mt-16 grid gap-8 lg:grid-cols-3">

                {[
                  {
                    company: "Tech Teens",
                    role: "Project Enablement Manager",
                    body:
                      "Helping a growing nonprofit improve grant strategy, partnerships, and project organization to expand access to technology education.",
                  },
                  {
                    company: "Cracker Barrel",
                    role: "Project Coordinator",
                    body:
                      "Improved operational workflows, coordinated cross-functional initiatives, and reduced recurring delays by 24%.",
                  },
                  {
                    company: "Assurant",
                    role: "Project Specialist",
                    body:
                      "Supported project delivery through documentation, coordination, and maintaining visibility across multiple initiatives.",
                  },
                ].map((job) => (

                  <article
                    key={job.company}
                    className="rounded-[32px] border border-[color:var(--border)] p-8 transition duration-300 hover:-translate-y-2 hover:border-[color:var(--accent)] hover:bg-[color:var(--accent)]/5"
                  >

                    <h3 className="text-3xl font-semibold">
                      {job.company}
                    </h3>

                    <p className="mt-3 text-[color:var(--accent)] font-medium">
                      {job.role}
                    </p>

                    <p className="mt-6 leading-8 text-[color:var(--muted)]">
                      {job.body}
                    </p>

                  </article>

                ))}

              </div>

            </section>

            {/* Currently Building */}

            <section className="border-t border-[color:var(--border)] py-32">

              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[color:var(--accent)]">
                Currently Building
              </p>

              <div className="mt-12 grid gap-6 md:grid-cols-2">

                {[
                  "Expanding Tech Teens' grant strategy and community partnerships.",
                  "Growing this portfolio with thoughtful case studies.",
                  "Building products that emphasize clarity over complexity.",
                  "Continuing my journey in project and product management.",
                ].map((item) => (

                  <div
                    key={item}
                    className="flex items-start gap-4 rounded-[24px] border border-[color:var(--border)] p-6"
                  >

                    <span className="text-xl text-[color:var(--accent)]">
                      ✦
                    </span>

                    <p className="text-lg leading-8">
                      {item}
                    </p>

                  </div>

                ))}

              </div>

            </section>

            {/* Final CTA */}

            <section className="border-t border-[color:var(--border)] py-32">

              <div className="max-w-4xl">

                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[color:var(--accent)]">
                  Let's Work Together
                </p>

                <h2 className="mt-6 text-6xl font-semibold leading-tight">
                  Great work starts
                  <br />
                  with a conversation.
                </h2>

                <p className="mt-10 max-w-2xl text-xl leading-9 text-[color:var(--muted)]">
                  Whether you're hiring, exploring a new opportunity,
                  or simply want to connect, I'd love to hear what you're
                  building and how I can help.
                </p>

                <div className="mt-12 flex flex-wrap gap-5">

                  <a
  href="mailto:tanzaneya.taylor1@gmail.com?subject=Let's%20Connect"
  className="rounded-full bg-[color:var(--foreground)] px-8 py-4 text-sm font-medium text-[color:var(--background)] transition hover:scale-105"
>
  Get In Touch
</a>

                  <a
                    href="/T.Taylor_Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-[color:var(--border)] px-8 py-4 text-sm font-medium transition hover:border-[color:var(--foreground)] hover:bg-[color:var(--foreground)] hover:text-[color:var(--background)]"
                  >
                    View Resume
                  </a>

                </div>

              </div>

            </section>

          </div>

        </div>

      </div>

    </main>
  );
}
