import { ReactNode } from "react";

type CaseStudyLayoutProps = {
  category: string;
  title: string;
  subtitle: string;
  children: ReactNode;
};

export default function CaseStudyLayout({
  category,
  title,
  subtitle,
  children,
}: CaseStudyLayoutProps) {
  return (
    <main className="min-h-screen bg-[color:var(--background)] text-[color:var(--foreground)]">

      <section className="mx-auto max-w-7xl px-20 py-24 xl:px-32">

        <p className="text-sm uppercase tracking-[0.25em] text-[color:var(--accent)]">
          {category}
        </p>

        <h1 className="mt-6 max-w-5xl text-6xl font-semibold leading-[1.05] md:text-8xl">
          {title}
        </h1>

        <p className="mt-10 max-w-3xl text-xl leading-9 text-[color:var(--muted)]">
          {subtitle}
        </p>

      </section>

      <section className="mx-auto max-w-6xl px-20 pb-32 xl:px-32">

        {children}

      </section>

    </main>
  );
}
