export default function Beyond() {
  return (
    <section className="py-40">

      <div className="mb-24 max-w-6xl">

        <p className="mb-5 text-sm uppercase tracking-[0.25em] text-[color:var(--accent)]">
          Beyond Work
        </p>

        <h2 className="max-w-6xl text-6xl md:text-7xl xl:text-[5.5rem] font-semibold leading-[0.95] tracking-tight text-[color:var(--foreground)]">
          Building doesn't
          <br />
          stop when work
          <br />
          ends.
        </h2>

        <p className="mt-10 max-w-4xl text-xl leading-9 text-[color:var(--muted)]">
          Outside of work, I enjoy creating products, writing about what I'm
          learning, and supporting initiatives that create more opportunities
          for others.
        </p>

      </div>

      <div className="grid gap-8 lg:grid-cols-3">

        <article className="rounded-[36px] border border-[color:var(--border)] bg-white p-12 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">

          <p className="mb-10 text-6xl">✍🏾</p>

          <h3 className="text-4xl font-semibold text-[color:var(--foreground)]">
            Writing
          </h3>

          <p className="mt-6 text-lg leading-9 text-[color:var(--muted)]">
            Sharing honest thoughts on project management, systems thinking,
            career growth, and the lessons I'm learning along the way.
          </p>

        </article>

        <article className="rounded-[36px] border border-[color:var(--border)] bg-white p-12 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">

          <p className="mb-10 text-6xl">🤝</p>

          <h3 className="text-4xl font-semibold text-[color:var(--foreground)]">
            Community
          </h3>

          <p className="mt-6 text-lg leading-9 text-[color:var(--muted)]">
            Supporting nonprofits, researching grants, and helping create more
            opportunities for young people exploring careers in technology.
          </p>

        </article>

        <article className="rounded-[36px] border border-[color:var(--border)] bg-white p-12 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">

          <p className="mb-10 text-6xl">💡</p>

          <h3 className="text-4xl font-semibold text-[color:var(--foreground)]">
            Creative Labs
          </h3>

          <p className="mt-6 text-lg leading-9 text-[color:var(--muted)]">
            Building products like AuraCare, experimenting in Canva, and
            creating ideas simply because they deserve to exist.
          </p>

        </article>

      </div>

    </section>
  );
}
