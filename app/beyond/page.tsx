import Navigation from "../components/Navigation";

export default function BeyondPage() {
  return (
    <main className="min-h-screen bg-[color:var(--background)] text-white">

      <Navigation />

      <div className="mx-auto max-w-7xl px-8 py-24">

        <p className="mb-4 text-sm uppercase tracking-[0.25em] text-white/50">
          Beyond Work
        </p>

        <h1 className="max-w-5xl text-5xl font-semibold leading-tight md:text-7xl">
          Curiosity doesn't clock out at 5 PM.
        </h1>

        <p className="mt-10 max-w-3xl text-xl leading-relaxed text-white/70">
          Some people separate work from hobbies. I don't. Most of my favorite
          projects start with a question, become an experiment, and eventually
          turn into something useful. Whether I'm writing, designing, or
          building systems, I'm usually trying to solve a problem that caught
          my attention.
        </p>

        <section className="mt-24 space-y-12">

          <article className="rounded-3xl border border-white/10 bg-white/5 p-10">

            <h2 className="text-3xl font-semibold">
              Writing
            </h2>

            <p className="mt-6 max-w-3xl leading-8 text-white/70">
              Through my Substack, <strong>Fine, I'll Say It</strong>, I write
              about career growth, technology, systems thinking, and the
              conversations people often have privately but rarely say out loud.
            </p>

          </article>

          <article className="rounded-3xl border border-white/10 bg-white/5 p-10">

            <h2 className="text-3xl font-semibold">
              Building Products
            </h2>

            <p className="mt-6 max-w-3xl leading-8 text-white/70">
              I enjoy turning ideas into working products. AuraCare, The Sim
              File, and this portfolio all started as personal observations
              about problems that deserved better solutions.
            </p>

          </article>

          <article className="rounded-3xl border border-white/10 bg-white/5 p-10">

            <h2 className="text-3xl font-semibold">
              Always Learning
            </h2>

            <p className="mt-6 max-w-3xl leading-8 text-white/70">
              I'm constantly exploring new tools, earning certifications,
              experimenting with Canva, improving my development skills,
              and finding better ways to connect operations, project
              management, and product thinking.
            </p>

          </article>

        </section>

      </div>

    </main>
  );
}
