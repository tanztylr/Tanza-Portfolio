import Navigation from "../components/Navigation";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[color:var(--background)] text-white">

      <Navigation />

      <div className="mx-auto max-w-7xl px-8 py-24">

        <p className="mb-4 text-sm uppercase tracking-[0.25em] text-white/50">
          Contact
        </p>

        <h1 className="max-w-5xl text-5xl font-semibold leading-tight md:text-7xl">
          Let's build something people remember.
        </h1>

        <p className="mt-10 max-w-3xl text-xl leading-relaxed text-white/70">
          Whether you're looking for a project coordinator, operations
          professional, or someone who enjoys bringing clarity to messy work,
          I'd love to hear what you're building and how I can help.
        </p>

        <div className="mt-20 grid gap-8 md:grid-cols-2">

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

            <p className="text-sm uppercase tracking-[0.25em] text-white/40">
              Email
            </p>

            <p className="mt-4 text-2xl font-semibold">
              tanztylr@gmail.com
            </p>

            <p className="mt-6 leading-8 text-white/70">
              The best way to reach me for opportunities,
              collaborations, or questions.
            </p>

          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

            <p className="text-sm uppercase tracking-[0.25em] text-white/40">
              Resume
            </p>

            <p className="mt-4 text-2xl font-semibold">
              Download a copy
            </p>

            <p className="mt-6 leading-8 text-white/70">
              View my experience, projects, certifications,
              and professional background.
            </p>

          </div>

        </div>

        <div className="mt-16 flex gap-4">

          <a
            href="mailto:tanztylr@gmail.com"
            className="rounded-full bg-white px-6 py-3 text-sm font-medium text-[#090b10]"
          >
            Email Me
          </a>

          <a
            href="/Tanza_Taylor_Resume.pdf"
            className="rounded-full border border-white/20 px-6 py-3 text-sm font-medium"
          >
            Download Resume
          </a>

        </div>

      </div>

    </main>
  );
}
