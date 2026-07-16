"use client";

import Navigation from "../components/Navigation";
import FadeIn from "../components/FadeIn";
import Image from "next/image";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[color:var(--background)] text-[color:var(--foreground)]">
      <div className="flex">
        <Navigation />

        <div className="flex-1">
          <div className="mx-auto max-w-7xl px-20 py-24 xl:px-32">
            {/* Hero */}

            <FadeIn>
              <section>
                <p className="text-sm uppercase tracking-[0.25em] text-[color:var(--accent)]">
                  Selected Work
                </p>

                <h1 className="mt-6 max-w-5xl text-6xl font-semibold leading-[1.02] md:text-8xl">
                  Products,
                  <br />
                  systems &
                  <br />
                  thoughtful solutions
                </h1>

                <p className="mt-14 max-w-3xl text-xl leading-9 text-[color:var(--muted)]">
                  Every project starts with the same question:
                  <strong className="text-[color:var(--foreground)]">
                    {" "}
                    How can this be simpler?
                  </strong>
                </p>
              </section>
            </FadeIn>

            {/* AuraCare */}
            <FadeIn>
              <section className="mt-32">
                <a
                  href="/projects/auracare"
                  className="group grid items-center gap-16 lg:grid-cols-[1.2fr_0.8fr]"
                >
                  <div className="overflow-hidden rounded-[36px] border border-[color:var(--border)] bg-white shadow-xl transition-shadow duration-500 group-hover:shadow-2xl">
                    <Image
                      src="/images/auracare lite homescreen.png"
                      alt="AuraCare"
                      width={1400}
                      height={900}
                      className="transition duration-700 group-hover:scale-105"
                    />
                  </div>

                  <div>
                    <p className="text-sm uppercase tracking-[0.3em] text-[color:var(--accent)]">
                      01 Healthcare Product
                    </p>

                    <h2 className="mt-4 text-6xl font-semibold">
                      AuraCare
                    </h2>

                    <p className="mt-8 max-w-md text-lg leading-9 text-[color:var(--muted)]">
                      A healthcare concept focused on making emergency seizure
                      information immediately available through calm,
                      human-centered design.
                    </p>

                    <p className="mt-10 inline-block text-sm font-medium uppercase tracking-[0.25em] transition-transform duration-300 group-hover:translate-x-1">
                      View Case Study →
                    </p>
                  </div>
                </a>
              </section>
            </FadeIn>

            {/* Portfolio */}
            <FadeIn>
              <section className="mt-40">
                <a
                  href="/projects/portfolio-v2"
                  className="group grid items-center gap-16 lg:grid-cols-[0.8fr_1.2fr]"
                >
                  <div>
                    <p className="text-sm uppercase tracking-[0.3em] text-[color:var(--accent)]">
                      02 Personal Brand
                    </p>

                    <h2 className="mt-4 text-6xl font-semibold">Portfolio V2</h2>

                    <p className="mt-8 max-w-md text-lg leading-9 text-[color:var(--muted)]">
                      Designing a portfolio that showcases not just what I've
                      done—but how I think, solve problems, and communicate.
                    </p>

                    <p className="mt-10 inline-block text-sm font-medium uppercase tracking-[0.25em] transition-transform duration-300 group-hover:translate-x-1">
                      View Case Study →
                    </p>
                  </div>

                  <div className="flex h-[560px] items-center justify-center rounded-[36px] border border-[color:var(--border)] bg-[color:var(--card)] shadow-xl transition-shadow duration-500 group-hover:shadow-2xl">
                    <p className="text-lg uppercase tracking-[0.35em] text-[color:var(--muted)]">
                      Coming Soon
                    </p>
                  </div>
                </a>
              </section>
            </FadeIn>

            {/* Sim File */}

            <FadeIn>
  <section className="mt-40 pb-24">
                <a
                  href="/projects/the-sim-file"
                  className="group grid items-center gap-16 lg:grid-cols-[1.2fr_0.8fr]"
                >
                  <div className="overflow-hidden rounded-[36px] border border-[color:var(--border)] bg-white shadow-xl transition-shadow duration-500 group-hover:shadow-2xl">
                    <Image
                      src="/images/sim-file-home.png"
                      alt="The Sim File"
                      width={1400}
                      height={900}
                      className="transition duration-700 group-hover:scale-105"
                    />
                  </div>

                  <div>
                    <p className="text-sm uppercase tracking-[0.3em] text-[color:var(--accent)]">
                      03 Creative System
                    </p>

                    <h2 className="mt-4 text-6xl font-semibold">
                      The Sim File
                    </h2>

                    <p className="mt-8 max-w-md text-lg leading-9 text-[color:var(--muted)]">
                      A structured world-building system that combines automation,
                      documentation, storytelling, and creative workflows.
                    </p>

                    <p className="mt-10 inline-block text-sm font-medium uppercase tracking-[0.25em] transition-transform duration-300 group-hover:translate-x-1">
                      View Case Study →
                    </p>
                  </div>
                </a>
              </section>
            </FadeIn>
          </div>
        </div>
      </div>
    </main>
  );
}
