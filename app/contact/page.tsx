import Navigation from "../components/Navigation";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[color:var(--background)] text-[color:var(--foreground)]">

      <div className="flex">

        <Navigation />

        <div className="flex-1">

          <div className="mx-auto max-w-7xl px-20 py-24 xl:px-32">

            <section>

              <p className="text-sm uppercase tracking-[0.25em] text-[color:var(--muted)]">
                Contact
              </p>

              <h1 className="mt-6 max-w-5xl text-6xl font-semibold leading-[1.05] md:text-7xl">
                Let's build something people remember.
              </h1>

              <p className="mt-10 max-w-3xl text-xl leading-9 text-[color:var(--muted)]">
                Whether you're hiring, collaborating, or just want to talk
                through an idea, I'd love to hear from you.
              </p>

            </section>

            <section className="mt-24 border-t border-[color:var(--border)] pt-16">

              <div className="space-y-14">

                <div>

                  <p className="text-sm uppercase tracking-[0.25em] text-[color:var(--muted)]">
                    Email
                  </p>

                  <a
                    href="mailto:tanztylr@gmail.com"
                    className="mt-3 inline-block text-4xl font-semibold transition hover:opacity-70"
                  >
                    tanztylr@gmail.com
                  </a>

                </div>

                <div>

                  <p className="text-sm uppercase tracking-[0.25em] text-[color:var(--muted)]">
                    Resume
                  </p>

                  <a
                    href="/Tanza_Taylor_Resume.pdf"
                    className="mt-3 inline-flex rounded-full border border-[color:var(--border)] px-7 py-3 transition hover:border-[color:var(--foreground)] hover:bg-[color:var(--foreground)] hover:text-[color:var(--background)]"
                  >
                    Download Resume →
                  </a>

                </div>

                <div>

                  <p className="text-sm uppercase tracking-[0.25em] text-[color:var(--muted)]">
                    Find Me
                  </p>

                  <div className="mt-4 flex flex-wrap gap-4">

                    <a
                      href="https://www.linkedin.com/in/tanzataylor/"
                      className="rounded-full border border-[color:var(--border)] px-6 py-3 transition hover:border-[color:var(--foreground)]"
                    >
                      LinkedIn
                    </a>

                    <a
                      href="https://github.com/tanztylr/"
                      className="rounded-full border border-[color:var(--border)] px-6 py-3 transition hover:border-[color:var(--foreground)]"
                    >
                      GitHub
                    </a>

                  </div>

                </div>

              </div>

            </section>

            <section className="mt-32 border-t border-[color:var(--border)] pt-12">

              <p className="max-w-xl text-lg leading-8 text-[color:var(--muted)]">
                Thanks for taking the time to explore my work. I appreciate the
                visit and hope we have the opportunity to build something
                meaningful together.
              </p>

              <p className="mt-12 text-sm uppercase tracking-[0.25em] text-[color:var(--muted)]">
                © 2026 Tanza Taylor
              </p>

            </section>

          </div>

        </div>

      </div>

    </main>
  );
}
