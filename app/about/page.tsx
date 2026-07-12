import Navigation from "../components/Navigation";
import FadeIn from "../components/FadeIn";

export default function AboutPage() {
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
                  About
                </p>

                <h1 className="mt-6 text-7xl font-semibold leading-[0.95] tracking-tight md:text-8xl">
                  Hey, I'm Tanza 👋🏾
                </h1>

                <p className="mt-12 max-w-4xl text-xl leading-9 text-[color:var(--muted)]">
                  I manage projects and build things that make work easier for people.
                  If a system or process feels more complicated than it needs to be,
                  I'm usually the person digging into it to figure out why, asking the
                  right questions, and finding a cleaner way forward.
                </p>

                <p className="mt-8 max-w-4xl text-xl leading-9 text-[color:var(--muted)]">
                  Over the past few years, I've worked across corporate and nonprofit
                  organizations, but my approach has stayed the same: give people clear
                  expectations, the right tools, and the space to do their job. I'd much
                  rather focus on results than hover over every step.
                </p>

                <p className="mt-8 max-w-4xl text-xl leading-9 text-[color:var(--muted)]">
                  I'm comfortable moving between traditional project tools, GitHub
                  repositories, and AI to take an idea from a conversation to something
                  real.
                </p>

              </section>

            </FadeIn>

            {/* How I Work */}

            <FadeIn>

              <section className="mt-32 border-t border-[color:var(--border)] pt-24">

                <h2 className="text-5xl font-semibold tracking-tight">
                  How I work
                </h2>

                <p className="mt-10 max-w-4xl text-xl leading-9 text-[color:var(--muted)]">
                  If something feels more complicated than it needs to be,
                  I'm probably going to keep digging until I understand why.
                </p>

                <p className="mt-8 max-w-4xl text-xl leading-9 text-[color:var(--muted)]">
                  Sometimes that means asking questions. Sometimes it means
                  taking a different approach. Other times it means building
                  something better myself.
                </p>

                <p className="mt-8 max-w-4xl text-xl leading-9">
                  Most things just need someone willing to ask better questions.
                </p>

              </section>

            </FadeIn>

            {/* When Work Ends */}

            <FadeIn>

              <section className="mt-32 border-t border-[color:var(--border)] pt-24">

                <h2 className="text-5xl font-semibold tracking-tight">
                  When work ends...
                </h2>

                <p className="mt-10 max-w-4xl text-xl leading-9 text-[color:var(--muted)]">
                  I rarely go long without a project. You can usually find me:
                </p>

                <ul className="mt-10 space-y-5 text-xl leading-9 text-[color:var(--muted)]">

                  <li>
                    • Designing products like{" "}
                    <span className="font-medium text-[color:var(--foreground)]">
                      AuraCare
                    </span>{" "}
                    and building detailed case studies.
                  </li>

                  <li>
                    • Supporting{" "}
                    <span className="font-medium text-[color:var(--foreground)]">
                      Tech Teens
                    </span>{" "}
                    through grant strategy and partnerships.
                  </li>

                  <li>
                    • Writing on{" "}
                    <span className="font-medium text-[color:var(--foreground)]">
                      Substack
                    </span>.
                  </li>

                  <li>
                    • Finding another project that probably wasn't on my to-do list yesterday.
                  </li>

                </ul>

                <p className="mt-12 max-w-4xl text-xl leading-9 text-[color:var(--muted)]">
                  Ultimately, I'm motivated by curiosity. If there's a simpler
                  way to solve a problem or a new tool that can help me do it
                  better, I'm probably already experimenting with it.
                </p>

              </section>

            </FadeIn>

          </div>

        </div>

      </div>

    </main>
  );
}
