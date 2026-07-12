type Props = {
  previous?: {
    title: string;
    href: string;
  };
  next?: {
    title: string;
    href: string;
  };
};

export default function CaseStudyFooter({
  previous,
  next,
}: Props) {
  return (
    <section className="mt-40 border-t border-[color:var(--border)] pt-16">

      <div className="grid gap-8 md:grid-cols-2">

        <div>
          {previous && (
            <a
              href={previous.href}
              className="group block rounded-[28px] border border-[color:var(--border)] p-8 transition hover:-translate-y-1 hover:border-[color:var(--accent)]"
            >
              <p className="text-sm uppercase tracking-[0.25em] text-[color:var(--muted)]">
                ← Previous Project
              </p>

              <h3 className="mt-4 text-3xl font-semibold group-hover:text-[color:var(--accent)]">
                {previous.title}
              </h3>
            </a>
          )}
        </div>

        <div>
          {next && (
            <a
              href={next.href}
              className="group block rounded-[28px] border border-[color:var(--border)] p-8 transition hover:-translate-y-1 hover:border-[color:var(--accent)]"
            >
              <p className="text-right text-sm uppercase tracking-[0.25em] text-[color:var(--muted)]">
                Next Project →
              </p>

              <h3 className="mt-4 text-right text-3xl font-semibold group-hover:text-[color:var(--accent)]">
                {next.title}
              </h3>
            </a>
          )}
        </div>

      </div>

    </section>
  );
}
