import Image from "next/image";
import Navigation from "../../components/Navigation";

export default function TheSimFilePage() {
  return (
    <main className="min-h-screen bg-[color:var(--background)] text-white">
      <Navigation />

      <div className="mx-auto max-w-7xl px-8 py-24">
        <p className="mb-4 text-sm uppercase tracking-[0.25em] text-white/50">
          Product & Automation
        </p>

        <h1 className="max-w-4xl text-5xl font-semibold leading-tight md:text-7xl">
          The Sim File
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/70">
          The Sim File is a creative product concept that combines
          structured prompts, automation, and system design to generate
          believable Sims 4 households. Rather than relying on random
          generators, the project focuses on creating characters with
          intentional relationships, personalities, motivations, and
          long-term storytelling potential.
        </p>

        <Image
          src="/images/sim-file-home.png"
          alt="The Sim File Homescreen"
          width={1724}
          height={940}
          className="mt-20 w-full rounded-3xl border border-white/10"
          priority
        />

        {/* The Challenge */}

        <section className="mt-24 grid gap-20 lg:grid-cols-[1fr_2fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-white/50">
              The Challenge
            </p>
          </div>

          <div>
            <p className="leading-8 text-white/70">
              Creating compelling Sims 4 households often starts with a
              blank screen. Existing generators typically randomize names,
              traits, or aspirations, but rarely produce characters that
              feel connected or believable. I wanted to design a system
              that reduced creative friction while generating households
              with built-in relationships, conflict, and storytelling
              potential.
            </p>
          </div>
        </section>

        {/* My Process */}

        {/* My Process */}

<section className="mt-24 grid gap-20 lg:grid-cols-[1fr_2fr]">
  <div>
    <p className="text-sm uppercase tracking-[0.25em] text-white/50">
      My Process
    </p>
  </div>

  <div>
    <p className="leading-8 text-white/70">
      Before building prompts, I identified the pieces that make fictional
      households feel believable: relationships, aspirations, personalities,
      careers, strengths, flaws, and story hooks. Instead of generating
      everything randomly, I organized those elements into a structured
      system that could consistently produce households with depth while
      still leaving room for unexpected stories.
    </p>

    <Image
      src="/images/TheSimFile Generation Screen.png"
      alt="The Sim File Generation Screen"
      width={1724}
      height={940}
      className="mt-12 w-full rounded-3xl border border-white/10"
    />
  </div>
</section>

        {/* Outcome */}

        <section className="mt-24 grid gap-20 lg:grid-cols-[1fr_2fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-white/50">
              Outcome
            </p>
          </div>

          <div>
            <p className="leading-8 text-white/70">
              The Sim File became more than a Sims generator—it became a
              framework for structured creativity. The project reinforced
              how thoughtful systems can reduce decision fatigue while
              producing richer, more engaging experiences.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
