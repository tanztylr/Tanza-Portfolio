"use client";

import Navigation from "../components/Navigation";
import FadeIn from "../components/FadeIn";

const facts = [
  {
    label: "Based In",
    value: "Atlanta, Georgia",
  },
  {
    label: "Currently Learning",
    value: "Project management, AI, and product design",
  },
  {
    label: "Creative Outlet",
    value: "Writing — usually when I have something I can't stop thinking about",
    link: "https://substack.com/@fineillsayit1",
    linkText: "Read on Substack",
  },
  {
    label: "Currently Into",
    value: "LEGO builds, creative technology, and figuring out how things work",
  },
  {
    label: "Fun Fact",
    value: "I almost always have a random idea or side project in progress.",
  },
  {
    label: "Also Me",
    value: "Nintendo Switch, coloring books, stationery, and good conversations.",
  },
];

export default function BeyondPage() {
  return (
    <main className="min-h-screen bg-[color:var(--background)] text-[color:var(--foreground)]">
      <div className="flex">
        <Navigation />

        <div className="flex-1">
          <div className="mx-auto max-w-7xl px-20 py-24 xl:px-32">

            {/* Header */}

            <FadeIn>
              <section>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[color:var(--accent)]">
                  Beyond the Work
                </p>

                <h1 className="mt-6 max-w-4xl text-7xl font-semibold leading-[0.95] tracking-tight md:text-8xl">
                  A little bit about me
                  <br />
                </h1>
              </section>
            </FadeIn>

            {/* Personal Profile */}

            <FadeIn>
              <section className="mt-24">
                <div className="grid gap-16 lg:grid-cols-[1fr_1.15fr] lg:items-start">

                  {/* Visual */}

                  <div className="overflow-hidden rounded-[32px]">
                    <img
                      src="/images/lego/lego-adidas-finished.jpg"
                      alt="A glimpse into life beyond my work"
                      className="aspect-[4/5] h-full w-full object-cover"
                    />
                  </div>

                  {/* Facts */}

                  <div className="border-t border-[color:var(--border)]">
                    {facts.map((fact) => (
                      <div
                        key={fact.label}
                        className="grid gap-4 border-b border-[color:var(--border)] py-8 md:grid-cols-[160px_1fr]"
                      >
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--muted)]">
                          {fact.label}
                        </p>

                        <div>
                          <p className="text-lg leading-8">
                            {fact.value}
                          </p>

                          {fact.link && (
                            <a
                              href={fact.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="mt-3 inline-flex text-sm font-medium text-[color:var(--accent)] transition-all duration-300 hover:translate-x-1"
                            >
                              {fact.linkText} →
                            </a>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                </div>
              </section>
            </FadeIn>

          </div>
        </div>
      </div>
    </main>
  );
}
