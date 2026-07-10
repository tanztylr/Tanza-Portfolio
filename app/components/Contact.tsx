export default function Contact() {
  return (
    <section className="py-32">

      <div className="rounded-3xl border border-gray-200 bg-white p-16 text-center shadow-sm">

        <p className="mb-4 text-sm uppercase tracking-[0.25em] text-[color:var(--muted)]">
          Let's Connect
        </p>

        <h2 className="text-5xl font-semibold text-[color:var(--foreground)]">
          Let's build something meaningful.
        </h2>

        <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-gray-600">
          Whether it's improving operations, leading projects,
          or creating better systems, I'd love to hear about it.
        </p>

        <div className="mt-12 flex justify-center gap-4">

          <a
            href="mailto:tanztylr@gmail.com"
            className="rounded-full bg-[color:var(--accent)] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
          >
            Email Me
          </a>

          <a
            href="/Tanza_Taylor_Resume.pdf"
            className="rounded-full border border-gray-300 bg-white px-6 py-3 text-sm font-medium text-[color:var(--foreground)] transition hover:bg-gray-50"
          >
            Download Resume
          </a>

        </div>

      </div>

    </section>
  );
}
