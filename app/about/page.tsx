import React from "react";
import Navigation from "../components/Navigation";

export default function AboutPage(): React.JSX.Element {
  return (
    <main className="min-h-screen bg-[color:var(--background)] text-[color:var(--foreground)]">

      <Navigation />

      <section className="mx-auto max-w-6xl px-8 py-24">

        <h1 className="max-w-5xl text-6xl font-semibold leading-[1.05] md:text-7xl">
          I build structure where there wasn't any before.
        </h1>

        <p className="mt-10 max-w-3xl text-xl leading-9 text-[color:var(--muted)]">
          My career has never followed one straight path—and that's become one
          of my biggest strengths. Across every role, I've naturally gravitated
          toward simplifying complexity and helping people work better.
        </p>

      </section>

      <section className="mx-auto grid max-w-7xl gap-24 px-8 py-10 lg:grid-cols-[1fr_2fr]">

        <div>

          <p className="text-sm uppercase tracking-[0.25em] text-[color:var(--muted)]">
            Philosophy
          </p>

        </div>

        <div>

          <p className="leading-8 text-[color:var(--muted)]">
            I enjoy stepping into projects that feel overwhelming and turning
            them into something people can actually understand, use, and improve.
            Whether that means organizing workflows, planning initiatives, or
            designing products, I look for clarity first.
          </p>

          <p className="mt-8 leading-8 text-[color:var(--muted)]">
            That mindset shows up everywhere—from AuraCare to nonprofit work to
            personal projects built simply because a better solution should exist.
          </p>

        </div>

      </section>

      <section className="mx-auto max-w-5xl border-t border-[color:var(--border)] px-8 py-24">

        <blockquote className="max-w-4xl text-4xl font-semibold leading-relaxed">
          "Good systems make good work feel effortless."
        </blockquote>

        <p className="mt-8 max-w-2xl leading-8 text-[color:var(--muted)]">
          That's the principle behind almost everything I build.
        </p>

      </section>

    </main>
  );
}
