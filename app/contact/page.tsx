import Navigation from "../components/Navigation";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[color:var(--background)] text-[color:var(--foreground)]">

      <Navigation />

      <div className="mx-auto max-w-7xl px-8 py-24">

        <p className="mb-4 text-sm uppercase tracking-[0.25em] text-[color:var(--muted)]">
          Contact
        </p>

        <h1 className="max-w-5xl text-5xl font-semibold leading-tight md:text-7xl">
          Let's build something people remember.
        </h1>

        <p className="mt-10 max-w-3xl text-xl leading-relaxed text-[color:var(--muted)]">
          Whether you're looking for a project coordinator, operations
          professional, or someone who enjoys bringing clarity to messy work,
          I'd love to hear what you're building and how I can help.
        </p>

        <div className="mt-20 grid gap-8 md:grid-cols-2">

          <div className="rounded-3xl border border-[color:var(--border)] bg-[color:var(--surface)] p-8 transition hover:border-[color:var(--foreground)]">

            <p className="text-sm uppercase tracking-[0.25em] text-[color:var(--muted)]">
              Email
            </p>

            <p className="mt-4 text-2xl font-semibold">
              tanztylr@gmail.com
            </p>

            <p className="mt-6 leading-8 text-[color:var(--muted)]">
              The best way to reach me for opportunities,
              collaborations, or questions.
            </p>

          </div>

          <div className="rounded-3xl border border-[color:var(--border)] bg-[color:var(--surface)] p-8 transition hover:border-[color:var(--foreground)]">

            <p className="text-sm uppercase tracking-[0.25em] text-[color:var(--muted)]">
              Resume
            </p>

            <p className="mt-4 text-2xl font-semibold">
              Download a copy
            </p>

            <p className="mt-6 leading-8 text-[color:var(--muted)]">
              View my experience, projects, certifications,
              and professional background.
            </p>

          </div>

        </div>

        <div className="mt-16 flex gap-4">

          <a
            href="mailto:tanztylr@gmail.com"
            className="rounded-full bg-[color:var(--foreground)] px-6 py-3 text-sm font-medium text-[color:var(--background)] transition-all hover:opacity-90"
          >
            Email Me
          </a>

          <a
            href="/Tanza_Taylor_Resume.pdf"
            className="rounded-full border border-[color:var(--border)] px-6 py-3 text-sm font-medium transition-all hover:border-[color:var(--foreground)] hover:bg-[color:var(--foreground)] hover:text-[color:var(--background)]"
          >
            Download Resume
          </a>

        </div>

      </div>

    </main>
  );
}
