import Navigation from "../components/Navigation";

export default function BeyondPage() {
  return (
    <main className="min-h-screen bg-[color:var(--background)] text-[color:var(--foreground)]">

      <Navigation />

      <section className="mx-auto max-w-6xl px-8 py-24">

        <p className="text-6xl font-semibold leading-tight md:text-7xl">
          Curiosity doesn't clock out at 5 PM.
        </p>

        <p className="mt-10 max-w-3xl text-xl leading-9 text-[color:var(--muted)]">
          My best ideas rarely begin with work. They usually begin with
          curiosity.
        </p>

      </section>

      <section className="mx-auto grid max-w-7xl gap-20 px-8 pb-28 lg:grid-cols-2">

        <div>

          <p className="text-sm uppercase tracking-[0.25em] text-[color:var(--muted)]">
            Writing
          </p>

          <h2 className="mt-5 text-4xl font-semibold">
            Fine, I'll Say It
          </h2>

          <p className="mt-6 leading-8 text-[color:var(--muted)]">
            Thoughts on project management, technology, career growth, and the
            conversations people usually keep to themselves.
          </p>

        </div>

        <div>

          <p className="text-sm uppercase tracking-[0.25em] text-[color:var(--muted)]">
            Building
          </p>

          <h2 className="mt-5 text-4xl font-semibold">
            Personal Projects
          </h2>

          <p className="mt-6 leading-8 text-[color:var(--muted)]">
            From AuraCare to The Sim File, I enjoy building things simply
            because I believe a better solution should exist.
          </p>

        </div>

      </section>

      <section className="mx-auto max-w-5xl border-t border-[color:var(--border)] px-8 py-24">

        <p className="text-sm uppercase tracking-[0.25em] text-[color:var(--muted)]">
          Right Now
        </p>

        <h2 className="mt-5 text-4xl font-semibold">
          Currently exploring...
        </h2>

        <ul className="mt-10 space-y-5 text-lg text-[color:var(--muted)]">
          <li>• Product thinking</li>
          <li>• Front-end development</li>
          <li>• Grant strategy & nonprofit growth</li>
          <li>• Building better systems</li>
        </ul>

      </section>

    </main>
  );
}
