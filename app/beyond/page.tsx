"use client";

import Navigation from "../components/Navigation";
import FadeIn from "../components/FadeIn";
import { NotebookPen } from "lucide-react";

const exploring = [
  "Making work less complicated",
  "Questions worth asking",
  "Building better systems",
  "Turning ideas into products",
  "Finding smarter tools",
  "Creating things people actually use",
];

const backpack = [
  "🎮 Nintendo Switch",
  "🖍️ Coloring Books",
  "📒 Stationery",
  "🧩 Projects I Probably Didn't Need To Start",
  "☕ Good Conversations",
  "💡 Random Ideas That Become Real",
];

export default function BeyondPage() {
  return (
    <main className="min-h-screen bg-[color:var(--background)] text-[color:var(--foreground)]">

      <div className="flex">

        <Navigation />

        <div className="flex-1">

          <div className="mx-auto max-w-7xl px-20 py-24 xl:px-32">

            {/* Hero */}

            <FadeIn>

              <section>

                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[color:var(--accent)]">
                  Beyond the Work
                </p>

                <h1 className="mt-6 text-7xl font-semibold leading-[0.95] tracking-tight md:text-8xl">
  A few things that keep me{" "}
  <span role="img" aria-label="thinking">
    💭
  </span>
</h1>

                <p className="mt-12 max-w-4xl text-xl leading-9 text-[color:var(--muted)]">
                  Work tells you what I do.
                  This page gives you a glimpse of what I naturally gravitate toward when nobody's assigning me a project.
                </p>

              </section>

            </FadeIn>

            {/* Building */}

            <FadeIn>

              <section className="mt-32 border-t border-[color:var(--border)] pt-24">

                <h2 className="text-5xl font-semibold tracking-tight">
                  Building Outside of Work.
                </h2>

                <div className="mt-12 grid gap-8 md:grid-cols-3">

                  <div className="rounded-[28px] border border-[color:var(--border)] p-8">

                    <h3 className="text-2xl font-semibold">
                      AuraCare
                    </h3>

                    <p className="mt-6 leading-8 text-[color:var(--muted)]">
                      Designing a tool that gives seizure survivors a few extra
                      seconds when they matter most.
                    </p>

                  </div>

                  <div className="rounded-[28px] border border-[color:var(--border)] p-8">

                    <h3 className="text-2xl font-semibold">
                      The Sim File
                    </h3>

                    <p className="mt-6 leading-8 text-[color:var(--muted)]">
                      Building an entertainment universe because world-building
                      is surprisingly fun.
                    </p>

                  </div>

                  <div className="rounded-[28px] border border-[color:var(--border)] p-8">

                    <h3 className="text-2xl font-semibold">
                      This Portfolio
                    </h3>

                    <p className="mt-6 leading-8 text-[color:var(--muted)]">
                      Treating my own portfolio like a product instead of a
                      résumé.
                    </p>

                  </div>

                </div>

              </section>

            </FadeIn>

            {/* Writing */}

            <FadeIn>

              <section className="mt-32 border-t border-[color:var(--border)] pt-24">

                <h2 className="text-5xl font-semibold tracking-tight">
                  Writing & Ideas.
                </h2>

                <p className="mt-10 max-w-4xl text-xl leading-9 text-[color:var(--muted)]">
                  Sometimes I write to organize my thinking.
                </p>

                <div className="mt-10 space-y-5">

                  <div className="rounded-[24px] border border-[color:var(--border)] p-6">
                    What Grow with Google Actually Gave Me
                  </div>

                  <div className="rounded-[24px] border border-[color:var(--border)] p-6">
                    Opportunity Doesn't Always Look Like a Paycheck
                  </div>

                  <div className="rounded-[24px] border border-[color:var(--border)] p-6">
                    Mental Overload: A Black Perspective
                  </div>

                </div>

                <a
                  href="https://substack.com/@fineillsayit1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-10 inline-flex items-center gap-3 rounded-full bg-[color:var(--foreground)] px-6 py-3 text-[color:var(--background)] transition hover:scale-105"
                >

                  <NotebookPen size={18} />

                  View on Substack

                </a>

              </section>

            </FadeIn>
                        {/* Rabbit Holes */}

            <FadeIn>

              <section className="mt-32 border-t border-[color:var(--border)] pt-24">

                <h2 className="text-5xl font-semibold tracking-tight">
                  Rabbit Holes
                </h2>

                <div className="mt-10 space-y-5">

                  {exploring.map((item) => (

                    <div
                      key={item}
                      className="rounded-[24px] border border-[color:var(--border)] p-6"
                    >
                      {item}
                    </div>

                  ))}

                </div>

              </section>

            </FadeIn>

            {/* Backpack */}

            <FadeIn>

              <section className="mt-32 border-t border-[color:var(--border)] pt-24">

                <h2 className="text-5xl font-semibold tracking-tight">
                  What's in My Backpack?
                </h2>

                <p className="mt-10 max-w-4xl text-xl leading-9 text-[color:var(--muted)]">
                  The best ideas usually show up when I'm supposed to be relaxing.
                </p>

                <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

                  {backpack.map((item) => (

                    <div
                      key={item}
                      className="rounded-[28px] border border-[color:var(--border)] p-8 transition duration-300 hover:-translate-y-1 hover:border-[color:var(--accent)] hover:bg-[color:var(--accent)]/5"
                    >

                      <p className="text-lg leading-8">
                        {item}
                      </p>

                    </div>

                  ))}

                </div>

              </section>

            </FadeIn>

          </div>

        </div>

      </div>

    </main>
  );
}
