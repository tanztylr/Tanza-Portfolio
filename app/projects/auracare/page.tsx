import Navigation from "../../components/Navigation";
import Image from "next/image";


export default function AuraCarePage() {
  return (
    <main className="min-h-screen bg-[color:var(--background)] text-[color:var(--foreground)]">

      <Navigation />

      <div className="mx-auto max-w-7xl px-8 py-24">

        {/* Hero */}

        <p className="mb-4 text-sm uppercase tracking-[0.25em] text-[color:var(--foreground)]/50">
          Healthcare Product
        </p>

        <h1 className="max-w-5xl text-5xl font-semibold leading-tight md:text-7xl">
          AuraCare
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-[color:var(--foreground)]/70">
          A healthcare product concept designed to make critical seizure
          information accessible in seconds through a simple,
          distraction-free experience.
        </p>

        <div className="mt-20">
  <Image
    src="/images/auracare lite homescreen.png"
    alt="AuraCare Homepage"
    width={1400}
    height={800}
    className="w-full rounded-3xl border border-white/10"
    priority
  />
</div>

        {/* Problem */}

        <section className="mt-32 grid gap-16 lg:grid-cols-[300px_1fr]">

          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-[color:var(--foreground)]/40">
              The Problem
            </p>
          </div>

          <div>

            <p className="text-lg leading-9 text-[color:var(--foreground)]/70">
              During a seizure, every second matters. While exploring
              existing epilepsy applications, I noticed that many attempted
              to solve every problem at once. Features were hidden behind
              menus, dashboards became crowded, and emergency information
              often took a back seat.
            </p>

            <p className="mt-8 text-lg leading-9 text-[color:var(--foreground)]/70">
              AuraCare explores a different philosophy: simplify first,
              everything else second.
            </p>

          </div>

        </section>

        {/* Research */}

        <section className="mt-32 grid gap-16 lg:grid-cols-[300px_1fr]">

          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-[color:var(--foreground)]/40">
              Research & Insights
            </p>
          </div>

          <div>

            <ul className="space-y-6 text-lg leading-8 text-[color:var(--foreground)]/70">

              <li>• Reviewed existing seizure tracking applications.</li>

              <li>• Researched common seizure triggers and emergency response recommendations.</li>

              <li>• Focused on reducing decision-making during emergencies.</li>

              <li>• Prioritized immediate access to critical information.</li>

            </ul>

          </div>

        </section>

        {/* Goals */}

        <section className="mt-32 grid gap-16 lg:grid-cols-[300px_1fr]">

          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-[color:var(--foreground)]/40">
              Goals
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              Make emergency information accessible within seconds.
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              Help users identify seizure patterns over time.
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              Remove unnecessary complexity.
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              Create a calm, focused experience.
            </div>

          </div>

        </section>

        {/* Key Features */}

        <section className="mt-32">

          <p className="mb-12 text-sm uppercase tracking-[0.25em] text-[color:var(--foreground)]/40">
            Key Features
          </p>

          <div className="grid gap-8 md:grid-cols-2">

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <h3 className="text-2xl font-semibold">
                Emergency Button
              </h3>

              <p className="mt-4 leading-8 text-[color:var(--foreground)]/70">
                A large, immediately visible emergency button designed to
                reduce navigation when every second matters.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <h3 className="text-2xl font-semibold">
                Seizure Log
              </h3>

              <p className="mt-4 leading-8 text-[color:var(--foreground)]/70">
                Record seizure activity to identify trends and potential
                triggers over time.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <h3 className="text-2xl font-semibold">
                Aura Journal
              </h3>

              <p className="mt-4 leading-8 text-[color:var(--foreground)]/70">
                Capture warning signs and symptoms before seizures occur.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <h3 className="text-2xl font-semibold">
                Emergency Contacts
              </h3>

              <p className="mt-4 leading-8 text-[color:var(--foreground)]/70">
                Keep trusted contacts available without searching through
                the device.
              </p>
            </div>

          </div>

        </section>

        {/* Design Decisions */}

        <section className="mt-32 grid gap-16 lg:grid-cols-[300px_1fr]">

          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-[color:var(--foreground)]/40">
              Design Decisions
            </p>
          </div>

          <div>

            <p className="text-lg leading-9 text-[color:var(--foreground)]/70">
              One of the hardest decisions was choosing what not to build.
              Instead of filling the app with dozens of features, I focused
              on creating a calm experience that prioritized accessibility,
              speed, and confidence.
            </p>

          </div>

        </section>

        {/* Reflection */}

        <section className="mt-32 grid gap-16 lg:grid-cols-[300px_1fr]">

          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-[color:var(--foreground)]/40">
              Reflection
            </p>
          </div>

          <div>

            <p className="text-lg leading-9 text-[color:var(--foreground)]/70">
              AuraCare reinforced that solving a problem isn't about adding
              more functionality—it's about understanding what people need
              most and removing everything that gets in the way.
            </p>

          </div>

        </section>

      </div>

    </main>
  );
}
