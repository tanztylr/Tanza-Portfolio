import Hero from "./components/Hero";
import Sidebar from "./components/Sidebar";

export default function Home() {
  return (
    <main className="min-h-screen bg-[color:var(--background)] text-[color:var(--foreground)]">

      <div className="flex">

        <Sidebar />

        <div className="flex-1">

          <div className="mx-auto max-w-7xl px-20 xl:px-32">

            <Hero />

            <section className="py-40">

              <div className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr]">

                <div>

                  <p className="text-8xl font-light leading-none text-[color:var(--border)]">
                    01
                  </p>

                  <h2 className="mt-4 text-7xl xl:text-8xl font-semibold leading-[0.9] tracking-tight">
                    AuraCare
                  </h2>

                  <p className="mt-10 max-w-xl text-xl leading-10 text-[color:var(--muted)]">
                    A healthcare product concept designed to make emergency seizure
                    information available in seconds through thoughtful UX and
                    human-centered design.
                  </p>

                  <a
                    href="/projects/auracare"
                    className="mt-10 inline-flex rounded-full border border-[color:var(--border)] px-8 py-4 transition-all hover:border-[color:var(--foreground)] hover:bg-[color:var(--foreground)] hover:text-[color:var(--background)]"
                  >
                    View Case Study →
                  </a>

                </div>

                <div className="overflow-hidden rounded-[40px] shadow-2xl transition duration-500 hover:-translate-y-2 hover:scale-[1.02]">

                  <img
                    src="/images/auracare lite homescreen.png"
                    alt="AuraCare Preview"
                    className="h-[700px] w-full object-cover"
                  />

                </div>

              </div>

            </section>

          </div>

        </div>

      </div>

    </main>
  );
}
