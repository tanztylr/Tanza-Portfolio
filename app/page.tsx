export default function Home() {
  return (
    <main className="min-h-screen bg-[#090b10] text-white">
      <div className="mx-auto w-full max-w-7xl px-8">

        {/* Navigation */}

        <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#090b10]/80 backdrop-blur-md">
          <div className="flex h-20 items-center justify-between">

            <a
              href="/"
              className="text-lg font-semibold tracking-[0.2em]"
            >
              TANZA
            </a>

            <div className="flex items-center gap-10 text-sm text-white/70">

              <a href="/about" className="transition hover:text-white">
                About
              </a>

              <a href="/projects" className="transition hover:text-white">
                Work
              </a>

              <a href="/experience" className="transition hover:text-white">
                Experience
              </a>

              <a href="/beyond" className="transition hover:text-white">
                Beyond
              </a>

              <a href="/contact" className="transition hover:text-white">
                Contact
              </a>

            </div>

          </div>
        </nav>

        {/* Hero */}

        <section className="flex min-h-[85vh] items-center">

          <div className="max-w-3xl">

            <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.18em] text-white/60">

              <span className="h-2 w-2 rounded-full bg-green-500"></span>

              <span>Available for Opportunities</span>

              <span>•</span>

              <span>Atlanta, GA</span>

            </div>

            <h1 className="text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl">
              When work gets messy,
              <br />
              I create clarity.
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/70">
              Helping people make sense of complex work through thoughtful
              systems and execution.
            </p>

            <div className="mt-10 flex items-center gap-4">

              <a
                href="/projects"
                className="rounded-full bg-white px-6 py-3 text-sm font-medium text-[#090b10] transition hover:opacity-90"
              >
                View Work
              </a>

              <a
                href="/Tanza_Taylor_Resume.pdf"
                className="rounded-full border border-white/15 px-6 py-3 text-sm font-medium transition hover:border-white/40"
              >
                Download Resume
              </a>

            </div>

          </div>

        </section>

        {/* Featured Work */}

        {/* How I Think */}

        {/* Experience */}

        {/* Beyond */}

        {/* Contact */}

      </div>
    </main>
  );
}