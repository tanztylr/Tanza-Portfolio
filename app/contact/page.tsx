import Navigation from "../components/Navigation";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[color:var(--background)] text-[color:var(--foreground)]">

      <div className="flex">

        <Navigation />

        <div className="flex-1">

          <div className="mx-auto max-w-7xl px-20 py-24 xl:px-32">

            {/* Hero */}

            <section>

              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[color:var(--accent)]">
                Contact
              </p>

              <h1 className="mt-6 max-w-6xl text-7xl font-semibold leading-[0.95] tracking-tight md:text-8xl">
                Let's build
                <br />
                something meaningful.
              </h1>

              <p className="mt-10 max-w-3xl text-xl leading-9 text-[color:var(--muted)]">
                Whether you're hiring, looking for a collaborator, or simply
                want to connect, I'd love to hear what you're working on.
              </p>

            </section>

            {/* Contact Cards */}

            <section className="mt-24 grid gap-8 lg:grid-cols-2">

              <div className="rounded-[36px] border border-[color:var(--border)] p-10 transition duration-300 hover:-translate-y-2 hover:border-[color:var(--accent)] hover:bg-[color:var(--accent)]/5">

                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[color:var(--accent)]">
                  Email
                </p>

                <a
                  href="mailto:tanztylr@gmail.com"
                  className="mt-6 block text-3xl font-semibold transition hover:opacity-70"
                >
                  tanztylr@gmail.com
                </a>

                <p className="mt-8 leading-8 text-[color:var(--muted)]">
                  The fastest way to reach me for opportunities,
                  collaborations, or questions.
                </p>

              </div>

              <div className="rounded-[36px] border border-[color:var(--border)] p-10 transition duration-300 hover:-translate-y-2 hover:border-[color:var(--accent)] hover:bg-[color:var(--accent)]/5">

                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[color:var(--accent)]">
                  Resume
                </p>

                <p className="mt-6 text-3xl font-semibold">
                  Download a copy
                </p>

                <p className="mt-8 leading-8 text-[color:var(--muted)]">
                  Explore my professional experience, featured projects,
certifications, and technical background.
                </p>

                <a
  href="/T.Taylor_Resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="mt-10 inline-flex rounded-full bg-[color:var(--foreground)] px-6 py-3 text-sm font-medium text-[color:var(--background)] transition hover:scale-105"
>
  View Resume
</a>

              </div>

            </section>

            {/* Connect */}

            <section className="mt-24 border-t border-[color:var(--border)] pt-20">

              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[color:var(--accent)]">
                Connect
              </p>

              <div className="mt-10 flex flex-wrap gap-5">

                <a
                  href="https://www.linkedin.com/in/tanzataylor/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-[color:var(--border)] px-7 py-3 transition hover:border-[color:var(--accent)] hover:bg-[color:var(--accent)]/5"
                >
                  LinkedIn
                </a>

                <a
                  href="https://github.com/tanztylr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-[color:var(--border)] px-7 py-3 transition hover:border-[color:var(--accent)] hover:bg-[color:var(--accent)]/5"
                >
                  GitHub
                </a>

                <a
                  href="https://substack.com/@fineillsayit1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-[color:var(--border)] px-7 py-3 transition hover:border-[color:var(--accent)] hover:bg-[color:var(--accent)]/5"
                >
                  Substack
                </a>

              </div>

            </section>

            {/* Closing */}

            <section className="mt-24 border-t border-[color:var(--border)] pt-20">

              <p className="max-w-2xl text-xl leading-9 text-[color:var(--muted)]">
                Thanks for taking the time to explore my work. I hope this
                portfolio gave you a clear picture of how I think, how I work,
                and the kinds of problems I enjoy solving.
              </p>

              <p className="mt-12 text-sm uppercase tracking-[0.3em] text-[color:var(--muted)]">
                © 2026 Tanza Taylor
              </p>

            </section>

          </div>

        </div>

      </div>

    </main>
  );
}
