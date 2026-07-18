import Image from "next/image";

export default function ProjectCarousel() {
  return (
    <section className="py-40">

      <div className="mb-24 max-w-6xl">

        <p className="mb-5 text-sm uppercase tracking-[0.25em] text-[color:var(--accent)]">
          Featured Work
        </p>

        <h2 className="max-w-6xl text-6xl md:text-7xl xl:text-[5.5rem] font-semibold leading-[0.95] tracking-tight text-[color:var(--foreground)]">
          Products, systems,
          <br />
          and experiences
          <br />
          built to create clarity.
        </h2>

        <p className="mt-10 max-w-4xl text-xl leading-9 text-[color:var(--muted)]">
          Every project starts with the same question:
          how do we make something complex feel simple?
        </p>

      </div>

      <article className="overflow-hidden rounded-[36px] border border-[color:var(--border)] bg-white shadow-sm">

        <div className="grid lg:grid-cols-[1.25fr_.75fr]">

          <div className="relative min-h-[650px]">

  <Image
    src="/images/auracare lite homescreen.png"
    alt="AuraCare"
    fill
    sizes="(min-width:1024px) 60vw,100vw"
    className="object-cover"
  />

  <div className="absolute left-6 top-6 z-10 flex items-center gap-2 rounded-full border border-white/40 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] shadow-sm backdrop-blur-md">
    <span className="h-2 w-2 rounded-full bg-green-500" />
    Live
  </div>

</div>

          <div className="flex justify-center">

            <div className="flex max-w-md flex-col justify-center px-14 py-20">

              <p className="text-sm uppercase tracking-[0.25em] text-[color:var(--accent)]">
                Healthcare Product
              </p>

              <h3 className="mt-5 text-6xl font-semibold leading-none text-[color:var(--foreground)]">
                AuraCare
              </h3>

              <p className="mt-8 text-lg leading-9 text-[color:var(--muted)]">
                Helping emergency information become instantly accessible during the moments people need it most.
              </p>

              <a
                href="/projects/auracare"
                className="mt-12 inline-flex w-fit rounded-full border border-[color:var(--border)] px-8 py-4 text-sm font-medium transition hover:bg-[color:var(--card)]"
              >
                View Case Study →
              </a>

            </div>

          </div>

        </div>

      </article>

    </section>
  );
}
