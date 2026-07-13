import Navigation from "../../components/Navigation";
import Image from "next/image";
import CaseStudyFooter from "../../components/CaseStudyFooter";

export default function AuraCarePage() {
  return (
    <main className="min-h-screen bg-[color:var(--background)] text-[color:var(--foreground)]">

      <div className="flex">

        <Navigation />

        <div className="flex-1">

          <div className="mx-auto max-w-7xl px-20 py-24 xl:px-32">

            {/* Hero */}

            <section>

              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[color:var(--accent)]">
                Healthcare Product
              </p>

              <h1 className="mt-6 max-w-6xl text-7xl font-semibold leading-[0.92] tracking-tight md:text-8xl">
                AuraCare
              </h1>

              <p className="mt-10 max-w-3xl text-xl leading-9 text-[color:var(--muted)]">
                A healthcare product concept focused on making emergency seizure
                information immediately available through calm, thoughtful,
                human-centered design.
              </p>

                            <div className="mt-12 flex flex-wrap gap-3">

                <span className="rounded-full bg-[color:var(--accent)]/10 px-4 py-2 text-sm font-medium text-[color:var(--accent)]">
                  UX Design
                </span>

                <span className="rounded-full bg-[color:var(--accent)]/10 px-4 py-2 text-sm font-medium text-[color:var(--accent)]">
                  Healthcare
                </span>

                <span className="rounded-full bg-[color:var(--accent)]/10 px-4 py-2 text-sm font-medium text-[color:var(--accent)]">
                  Product Thinking
                </span>

              </div>

              <div className="mt-16 grid gap-8 border-t border-black/15 pt-10 md:grid-cols-4">

                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-[color:var(--muted)]">
                    Role
                  </p>
                  <p className="mt-3 text-lg font-medium">
                    Product Designer & Project Manager
                  </p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-[color:var(--muted)]">
                    Timeline
                  </p>
                  <p className="mt-3 text-lg font-medium">
                    2026
                  </p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-[color:var(--muted)]">
                    Tools
                  </p>
                  <p className="mt-3 text-lg font-medium">
                    Next.js · React · GitHub · Vercel · AI
                  </p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-[color:var(--muted)]">
                    Status
                  </p>
                  <p className="mt-3 text-lg font-medium">
                    In Progress
                  </p>
                </div>

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

            <section className="mt-32 grid gap-20 border-t border-black/15 pt-20 lg:grid-cols-[260px_1fr]">

              <div>

                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[color:var(--accent)]">
                  Overview
                </p>

              </div>

              <div className="space-y-8">

                <p className="text-xl leading-10 text-[color:var(--muted)]">
                  During a seizure, every second matters. Existing epilepsy
                  applications often attempted to solve every problem at once,
                  creating crowded interfaces that buried the information users
                  actually needed during an emergency.
                </p>

                <p className="text-xl leading-10 text-[color:var(--muted)]">
                  AuraCare explores the opposite approach. Remove friction,
                  reduce cognitive load, and make critical actions instantly
                  accessible.
                </p>
<p className="text-xl leading-10 text-[color:var(--muted)]">
  Instead of asking what features the app could include, I focused on what users would actually need during the first few seconds of an emergency.
</p>
              </div>

            </section>

            {/* Goals */}

            <section className="mt-32">

              <p className="mb-12 text-sm font-semibold uppercase tracking-[0.3em] text-[color:var(--accent)]">
                Design Principles
              </p>

              <div className="grid gap-8 md:grid-cols-2">

                {[
                  "Make emergency information accessible within seconds.",
                  "Reduce unnecessary decisions during emergencies.",
                  "Help identify seizure patterns over time.",
                  "Create a calm, distraction-free experience."
                ].map((goal) => (

                  <div
                    key={goal}
                    className="rounded-[32px] border border-black/15 p-8 transition duration-300 hover:-translate-y-2 hover:border-[color:var(--accent)] hover:bg-[color:var(--accent)]/5"
                  >
                    <p className="text-lg leading-8">
                      {goal}
                    </p>
                  </div>

                ))}

              </div>

            </section>

            {/* Research */}

            <section className="mt-32 grid gap-20 border-t border-black/15 pt-20 lg:grid-cols-[260px_1fr]">

              <div>

                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[color:var(--accent)]">
                  Research
                </p>

              </div>

              <div>

                <div className="rounded-[28px] border border-black/15 p-8">

                  <ul className="space-y-6 text-lg leading-9 text-[color:var(--muted)]">

                    <li>• Most seizure apps prioritize long-term tracking over immediate emergency response.</li>

                    <li>• During an emergency, users should never have to search for critical information.</li>

                    <li>• Reducing cognitive load became more important than adding additional features.</li>

                    <li>• Every screen was designed to support calm, confident decision-making under pressure.</li>

                  </ul>

                </div>

              </div>

            </section>

            {/* Features */}

            <section className="mt-32">

              <p className="mb-12 text-sm font-semibold uppercase tracking-[0.3em] text-[color:var(--accent)]">
                Key Features
              </p>

              <div className="grid gap-8 md:grid-cols-2">

                {[
                  [
                    "Emergency Button",
                    "Large, immediately visible emergency action requiring virtually no navigation."
                  ],
                  [
                    "Seizure Log",
                    "Track seizure events over time to recognize patterns and trends."
                  ],
                  [
                    "Aura Journal",
                    "Capture aura symptoms and warning signs before episodes occur."
                  ],
                  [
                    "Emergency Contacts",
                    "Quick access to trusted contacts without navigating through the phone."
                  ]
                ].map(([title, body]) => (

                  <div
                    key={title}
                    className="rounded-[32px] border border-black/15 p-8 transition duration-300 hover:-translate-y-2 hover:border-[color:var(--accent)] hover:bg-[color:var(--accent)]/5"
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

                        {/* Reflection */}

            <section className="mt-32 border-t border-black/15 pt-20">

              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[color:var(--accent)]">
                Reflections
              </p>

              <h2 className="mt-8 max-w-4xl text-5xl font-semibold leading-tight">
                Good design isn't about adding more.
                <br />
                It's about knowing what to leave out.
              </h2>

              <p className="mt-10 max-w-3xl text-xl leading-9 text-[color:var(--muted)]">
                AuraCare reinforced one lesson above all else. Thoughtful
                products succeed when they reduce complexity instead of adding
                it. Every design decision was made to help users stay calm,
                confident, and focused when every second matters.
              </p>

              <p className="mt-8 max-w-3xl text-xl leading-9 text-[color:var(--muted)]">
                Building AuraCare also reinforced how closely product
                management and design work together. Every feature required
                balancing user needs, technical feasibility, and simplicity
                without losing sight of the core problem the product was
                built to solve.
              </p>

            </section>

            <CaseStudyFooter
              next={{
                title: "Portfolio V2",
                href: "/projects/portfolio-v2",
              }}
            />

          </div>

        </div>

      </div>

    </main>
  );
}
