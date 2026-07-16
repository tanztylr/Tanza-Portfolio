"use client";

import Navigation from "../components/Navigation";
import FadeIn from "../components/FadeIn";
import { NotebookPen } from "lucide-react";

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
