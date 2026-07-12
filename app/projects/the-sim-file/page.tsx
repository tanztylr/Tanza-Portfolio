import Navigation from "../../components/Navigation";
import CaseStudyFooter from "../../components/CaseStudyFooter";

export default function PortfolioV2Page() {
  return (
    <main className="min-h-screen bg-[color:var(--background)] text-[color:var(--foreground)]">

      <div className="flex">

        <Navigation />

        <div className="flex-1">

          <div className="mx-auto max-w-7xl px-20 py-24 xl:px-32">

            {/* Hero */}

            <section>

              <p className="text-sm uppercase tracking-[0.3em] text-[color:var(--accent)]">
                Personal Brand
              </p>

              <h1 className="mt-6 max-w-5xl text-7xl font-semibold leading-[0.92] tracking-tight md:text-8xl">
                Portfolio V2
              </h1>

              <p className="mt-10 max-w-3xl text-xl leading-9 text-[color:var(--muted)]">
                More than a portfolio—this project became an exercise in
                product thinking, storytelling, and intentional design.
              </p>

            </section>

            {/* Overview */}

            <section className="mt-32 grid gap-20 border-t border-[color:var(--border)] pt-20 lg:grid-cols-[260px_1fr]">

              <div>

                <p className="text-sm uppercase tracking-[0.3em] text-[color:var(--accent)]">
                  Challenge
                </p>

              </div>

              <div className="space-y-8">

                <p className="text-xl leading-10 text-[color:var(--muted)]">
                  Traditional portfolios often become long lists of jobs,
                  skills, and certifications. They explain what someone has
                  done, but rarely communicate how they think.
                </p>

                <p className="text-xl leading-10 text-[color:var(--muted)]">
                  This redesign focuses on clarity, storytelling, and helping
                  recruiters understand my decision-making process—not just my
                  experience.
                </p>

              </div>

            </section>

            {/* Principles */}

            <section className="mt-32">

              <p className="mb-12 text-sm uppercase tracking-[0.3em] text-[color:var(--accent)]">
                Design Principles
              </p>

              <div className="grid gap-8 md:grid-cols-2">

                {[
                  "Human over corporate.",
                  "Evidence over buzzwords.",
                  "Calm, editorial-inspired layouts.",
                  "Every section should answer a recruiter question."
                ].map((item) => (

                  <div
                    key={item}
                    className="rounded-[32px] border border-[color:var(--border)] p-8 transition duration-300 hover:-translate-y-2 hover:border-[color:var(--accent)] hover:bg-[color:var(--accent)]/5"
                  >
                    <p className="leading-8">
                      {item}
                    </p>
                  </div>

                ))}

              </div>

            </section>

            {/* Reflection */}

            <section className="mt-32 border-t border-[color:var(--border)] pt-20">

              <p className="text-sm uppercase tracking-[0.3em] text-[color:var(--accent)]">
                Reflection
              </p>

              <h2 className="mt-8 max-w-4xl text-5xl font-semibold leading-tight">
                Your portfolio should explain how you solve problems—not just
                prove that you have.
              </h2>

              <p className="mt-10 max-w-3xl text-xl leading-9 text-[color:var(--muted)]">
                Every decision in this redesign—from the typography to the
                navigation—supports that philosophy. The result is a portfolio
                that feels less like a résumé and more like a product.
              </p>

            </section>

          </div>

        </div>

      </div>
      <CaseStudyFooter
  previous={{
    title: "Portfolio V2",
    href: "/projects/portfolio-v2",
  }}
/>

    </main>
  );
}
