import CredentialCard from "../components/CredentialCard";
import Navigation from "../components/Navigation";
import FadeIn from "../components/FadeIn";
import PhotoStack from "../components/PhotoStack";

export default function AboutPage() {
  const legoPhotos = [
  {
  src: "/images/lego/lego-adidas-finished.jpg",
  alt: "Tanza holding an Adidas LEGO build",
  title: "LEGO Build Night",
  caption: "Adidas Superstar Build • Atlanta, Georgia",
},
  {
    src: "/images/lego/adidas-build.jpg",
    alt: "Building the Adidas shoe",
    title: "Work in Progress",
    caption: "Half the fun is figuring it out.",
  },
  {
    src: "/images/lego/brickcon-food.jpg",
    alt: "BrickCon food display",
    title: "BrickCon 2025",
    caption: "One of my favorite displays.",
  },
  {
    src: "/images/lego/mario-display.jpg",
    alt: "Mario LEGO display",
    title: "Mario Display",
    caption: "Still trying to figure out how they built this.",
  },
];
  return (
    <main className="min-h-screen bg-[color:var(--background)] text-[color:var(--foreground)]">
      <div className="flex">

        <Navigation />

        <div className="flex-1">

          <div className="mx-auto max-w-7xl px-20 py-24 xl:px-32">

            {/* Hero */}

            <FadeIn>

  <section>

    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[color:var(--accent)]">
      About
    </p>

    <h1 className="mt-6 text-7xl font-semibold leading-[0.95] tracking-tight md:text-8xl">
      Hey, I'm Tanza 👋🏾
    </h1>

    <p className="mt-12 max-w-4xl text-xl leading-9 text-[color:var(--muted)]">
      I manage projects and build things that make work easier for people.
      If a system or process feels more complicated than it needs to be,
      I'm usually the person digging into it to figure out why, asking the
      right questions, and finding a cleaner way forward.
    </p>

    <div className="my-20 border-l-4 border-[color:var(--accent)] pl-8">

      <p className="max-w-3xl text-4xl font-semibold leading-tight">
           When work gets messy,
           <br />
    I create clarity
  </p>

    </div>

    <p className="mt-8 max-w-4xl text-xl leading-9 text-[color:var(--muted)]">
      Over the past few years, I've worked across corporate and nonprofit
      organizations, but my approach has stayed the same: give people clear
      expectations, the right tools, and the space to do their job. I'd much
      rather focus on results than hover over every step.
    </p>

    <p className="mt-8 max-w-4xl text-xl leading-9 text-[color:var(--muted)]">
      I'm comfortable moving between project plans, charters and GitHub repositories,
      taking ideas from conversation to something people can
      actually use.
    </p>

  </section>

</FadeIn>

            {/* Credentials */}

            <FadeIn>

              <section className="mt-32 border-t border-[color:var(--border)] pt-24">

                <h2 className="text-5xl font-semibold tracking-tight">
                  Credentials
                </h2>

                <p className="mt-10 max-w-4xl text-xl leading-9 text-[color:var(--muted)]">
                  I'm always learning something. These certifications represent the skills I've intentionally invested time building. 
                  Click a badge to learn more.
                </p>

                <div className="mt-16 grid gap-8 md:grid-cols-2">

                  <CredentialCard
                    title="Google Professional Project Management"
                    issuer="Google"
                    image="/images/credentials/google-project-management.png"
                    imageAlt="Google Project Management Certificate"
                    credentialUrl="https://www.credly.com/badges/29d1ec4d-a227-489d-a14c-884587793a47"
                    description="Completed Google's Professional Project Management Certificate, building practical skills in Agile delivery, stakeholder communication, project planning, risk management, and project execution."
                    skills={[
                      "Agile",
                      "Scrum",
                      "Project Planning",
                      "Risk Management",
                      "Stakeholders",
                    ]}
                  />

                  <CredentialCard
                    title="Talent Acquisition"
                    issuer="HRCI"
                    image="/images/credentials/hrci-talent-acquisition.png"
                    imageAlt="HRCI Talent Acquisition Certificate"
                    credentialUrl="https://coursera.org/share/b595c8a361662d764078baab31545d46"
                    description="Completed HRCI's Talent Acquisition credential focused on sourcing strategy, interviewing, candidate experience, and modern hiring practices."
                    skills={[
                      "Recruiting",
                      "Interviewing",
                      "Hiring",
                      "Candidate Experience",
                      "Talent Strategy",
                    ]}
                  />

                </div>

              </section>

            </FadeIn>

            {/* When Work Ends */}

<FadeIn>

  <section className="mt-32 border-t border-[color:var(--border)] pt-24">

    <h2 className="text-5xl font-semibold tracking-tight">
      When work ends...
    </h2>

    <p className="mt-10 max-w-3xl text-xl leading-9 text-[color:var(--muted)]">
      I'm naturally curious, which means I don't stay "off" for very long.
      Some weekends you'll find me at a LEGO build event. Other weekends
      I'm experimenting with AI, writing on Substack, or chasing an idea
      that refuses to leave me alone.
    </p>

    <div className="mt-16 grid gap-12 lg:grid-cols-[1.35fr_0.9fr]">

      {/* Photo Gallery */}

      <div>
        <PhotoStack photos={legoPhotos} />
      </div>

      {/* Side Cards */}

      <div className="space-y-6">

        <div className="rounded-3xl border border-[color:var(--border)] p-8">

          <h3 className="text-2xl font-semibold">
            🧱 LEGO Events
          </h3>

          <p className="mt-4 leading-8 text-[color:var(--muted)]">
            Turns out building LEGO with hundreds of tiny pieces isn't
            that different from managing projects both start with
             chaos and end with something people can actually use/see.
          </p>

        </div>

        <div className="rounded-3xl border border-[color:var(--border)] p-8">

          <h3 className="text-2xl font-semibold">
            ✍🏾 Writing
          </h3>

          <p className="mt-4 leading-8 text-[color:var(--muted)]">
            Writing helps me organize ideas, reflect on what I'm learning,
            and occasionally challenge my own thinking.
          </p>

          <a
            href="YOUR SUBSTACK"
            target="_blank"
            className="mt-6 inline-flex font-medium hover:underline"
          >
            Visit Substack →
          </a>

        </div>

        <div className="rounded-3xl border border-[color:var(--border)] p-8">

          <h3 className="text-2xl font-semibold">
            🌱 Currently Exploring
          </h3>

          <div className="mt-6 flex flex-wrap gap-2">

            <span className="rounded-full bg-green-100 px-3 py-1 text-sm">
              AI
            </span>

            <span className="rounded-full bg-blue-100 px-3 py-1 text-sm">
              Product Design
            </span>

            <span className="rounded-full bg-yellow-100 px-3 py-1 text-sm">
              Project Management
            </span>

            <span className="rounded-full bg-purple-100 px-3 py-1 text-sm">
              Systems Thinking
            </span>

          </div>

        </div>

      </div>

    </div>

  </section>

</FadeIn>

            </div>

        </div>

      </div>

    </main>
  );
}
