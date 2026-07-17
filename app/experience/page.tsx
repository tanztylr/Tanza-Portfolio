"use client";

import { useState } from "react";
import Navigation from "../components/Navigation";
import FadeIn from "../components/FadeIn";
import FeaturedCredential from "../components/FeaturedCredential";

const jobs = [
  {
    id: "techteens",
    company: "Tech Teens",
    title: "Project Enablement Manager",
    dates: "June 2026 – Present",
    overview:
  "As Project Enablement Manager, I helped turn ideas into organized plans. My work focused on researching funding opportunities, building community partnerships, and creating systems that made it easier for Tech Teens to grow and deliver free technology programs for students.",
    contributions: [
  "Built and maintained the organization's grant tracker so funding opportunities, deadlines, and application progress stayed organized in one place.",
  "Researched grant opportunities that aligned with Tech Teens' mission instead of chasing every available funding source.",
  "Connected with schools, libraries, businesses, and community organizations to create new partnership opportunities.",
  "Prepared meeting notes, funding recommendations, and planning documents that leadership could immediately use.",
  "Created repeatable workflows that made grant research and partnership outreach easier to manage over time",
],
    impact:
  "My work helped create a stronger foundation for future fundraising and community engagement. By organizing grant research, documenting opportunities, and building partnership pipelines, I made it easier for leadership to make informed decisions and focus on expanding opportunities for the teens Tech Teens serves.",
    skills: [
      "Grant Strategy",
      "Partnership Development",
      "Operational Systems",
      "Documentation",
      "Research",
    ],
  },
  {
    id: "crackerbarrel",
    company: "Cracker Barrel",
    title: "Project Coordinator",
    dates: "Sept 2022 – Feb 2025",
    overview:
      "Improved scheduling workflows that reduced recurring operational delays by 24%.",
    contributions: [
      "Coordinated projects across multiple departments to keep work organized and on schedule.",
      "Identified recurring operational bottlenecks and recommended process improvements.",
      "Maintained project documentation and communicated updates with stakeholders.",
      "Supported scheduling and planning efforts to improve day-to-day operations.",
      "Helped create more consistent processes that reduced delays and improved team efficiency.",
    ],
    impact:
  "By improving communication, documentation, and day-to-day coordination, I helped reduce recurring delays and created more consistent ways for teams to work together. Small operational improvements added up to smoother project execution.",
    skills: [
      "Operations",
      "Communication",
      "Team Development",
      "Cross-functional Collaboration",
    ],
  },
  {
    id: "assurant",
    company: "Assurant",
    title: "Project Specialist",
    dates: "Apr 2021 – Apr 2022",
    overview:
  "As a Project Specialist, I supported project execution by keeping documentation organized, tracking progress, and helping cross-functional teams stay aligned. I focused on creating clarity so projects could move forward efficiently.",
  contributions: [
  "Maintained project documentation and tracked milestones across multiple initiatives.",
  "Supported communication between teams to keep projects aligned.",
  "Monitored project progress and reported updates to stakeholders.",
  "Organized information so teams had access to accurate project documentation.",
  "Helped improve consistency across project coordination efforts.",
],
    impact:
  "Reliable documentation and consistent communication helped projects stay organized and reduced confusion between teams. My work contributed to smoother execution by making information easier to access and act on.",
    skills: [
      "Project Tracking",
      "Reporting",
      "Documentation",
      "Communication",
    ],
  },
  {
    id: "1000degrees",
    company: "1000 Degrees",
    title: "Operations Manager",
    dates: "Mar 2019 – Mar 2021",
    overview:
  "As an Operations Manager, I led daily operations while supporting staff, improving processes, and creating an environment where both employees and students could succeed. The role strengthened my ability to organize people, priorities, and resources.",
  contributions: [
  "Managed daily operations and coordinated staff responsibilities.",
  "Improved scheduling and operational consistency across the organization.",
  "Coached and supported team members through day-to-day challenges.",
  "Maintained organized processes that supported program delivery.",
  "Balanced multiple priorities while keeping operations running smoothly.",
],
    impact:
  "Strong operations created a more reliable experience for both staff and students. By bringing structure and consistency to daily work, I helped the organization operate more effectively while supporting the people behind the mission.",
    skills: [
      "Operations",
      "Leadership",
      "Scheduling",
      "Training",
    ],
  },
  {
    id: "planetfitness",
    company: "Planet Fitness",
    title: "Team Lead",
    dates: "Aug 2017 – Aug 2019",
    overview:
      "Supported daily operations, coached team members, and helped create a positive member experience in a fast-paced environment.",
    contributions: [
      "Supported daily facility operations.",
      "Assisted with team training.",
      "Resolved member concerns.",
      "Maintained operational standards.",
      "Balanced leadership with customer service."
    ],
    impact:
      "The role built the leadership, communication, and operational foundation that continues to shape how I manage projects today.",
    skills: [
      "Leadership",
      "Customer Experience",
      "Operations",
    ],
  },
];

export default function ExperiencePage() {
  const [selectedJob, setSelectedJob] = useState(jobs[0]);

  return (
    <main className="min-h-screen bg-[color:var(--background)] text-[color:var(--foreground)]">
      <div className="flex">

        <Navigation />

        <div className="flex-1">

          <div className="mx-auto max-w-7xl px-20 py-24 xl:px-32">

            <FadeIn>

              <section>

                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[color:var(--accent)]">
                  Experience
                </p>

                <h1 className="mt-6 text-7xl font-semibold leading-[0.95] tracking-tight md:text-8xl">
                  Where I've Worked
                </h1>

                <p className="mt-10 max-w-3xl text-xl leading-9 text-[color:var(--muted)]">
                  Every role taught me something different, but they've all had
                  one thing in common: making work simpler, clearer, and easier
                  for the people around me.
                </p>

              </section>

            </FadeIn>

            <section className="mt-24 grid gap-12 lg:grid-cols-[340px_1fr]">

              {/* Left */}

              <div className="space-y-4">

                {jobs.map((job) => {

                  const active = selectedJob.id === job.id;

                  return (

                    <button
                      key={job.id}
                      onClick={() => setSelectedJob(job)}
                      className={`w-full rounded-3xl border p-6 text-left transition duration-300 ${
                        active
                          ? "border-[color:var(--accent)] bg-[color:var(--accent)]/10"
                          : "border-[color:var(--border)] hover:border-[color:var(--accent)]"
                      }`}
                    >

                      <h3 className="text-xl font-semibold">
                        {job.company}
                      </h3>

                      <p className="mt-2 text-[color:var(--muted)]">
                        {job.title}
                      </p>

                      <p className="mt-1 text-sm uppercase tracking-[0.15em] text-[color:var(--muted)]">
                        {job.dates}
                      </p>

                    </button>

                  );

                })}

              </div>

              {/* Right */}

<FadeIn key={selectedJob.id}>

  <div className="rounded-[36px] border border-[color:var(--border)] shadow-sm p-12">

    <h2 className="text-5xl font-semibold">
      {selectedJob.title}
    </h2>

    <p className="mt-4 text-lg text-[color:var(--muted)]">
      {selectedJob.company}
    </p>

    <p className="mt-2 uppercase tracking-[0.2em] text-[color:var(--muted)]">
      {selectedJob.dates}
    </p>

    <div className="mt-16">

      <h3 className="text-2xl font-semibold">Overview</h3>

      <p className="mt-6 text-lg leading-9 text-[color:var(--muted)]">
        {selectedJob.overview}
      </p>

      <div className="mt-16">

        <h3 className="text-2xl font-semibold">
          Highlights
        </h3>

        <ul className="mt-6 space-y-4 text-lg leading-8 text-[color:var(--muted)]">

          {selectedJob.contributions.map((item) => (

            <li key={item} className="flex gap-3">

              <span className="mt-2 h-2 w-2 rounded-full bg-[color:var(--accent)] shrink-0" />

              <span>{item}</span>

            </li>

          ))}

        </ul>

      </div>

    </div>

    <div className="mt-12">

      <h3 className="text-2xl font-semibold">
        Skills
      </h3>

      <div className="mt-8 flex flex-wrap gap-3">

        {selectedJob.skills.map((skill, index) => (

  <span
    key={skill}
    className={`rounded-full border px-5 py-2 text-sm transition-all duration-300 hover:-translate-y-1 hover:rotate-1 ${
      index % 3 === 0
        ? "border-green-200 bg-green-50"
        : index % 3 === 1
        ? "border-amber-200 bg-amber-50"
        : "border-blue-200 bg-blue-50"
    }`}
  >
    {skill}
  </span>

))}

      </div>

    </div>
</div>
</FadeIn>

</section>

{/* Professional Development */}

<FadeIn>

  <section className="mt-32 w-full border-t border-[color:var(--border)] pt-24">

    <h2 className="text-5xl font-semibold tracking-tight">
      Professional Development
    </h2>

    <p className="mt-10 max-w-4xl text-xl leading-9 text-[color:var(--muted)]">
      The best project managers never stop learning. I intentionally invest in
      certifications and coursework that strengthen how I lead projects,
      improve operations, and support teams.
    </p>

    <div className="mt-16 space-y-8">

      <FeaturedCredential
        title="Google Professional Project Management"
        issuer="Google"
        image="/images/credentials/google-project-management.png"
        imageAlt="Google Project Management Certificate"
        credentialUrl="https://www.credly.com/badges/29d1ec4d-a227-489d-a14c-884587793a47"
        description="Completed Google's Professional Project Management Certificate, developing practical skills in Agile delivery, stakeholder communication, project planning, risk management, and project execution."
        skills={[
          "Agile",
          "Scrum",
          "Project Planning",
          "Risk Management",
          "Stakeholder Management",
        ]}
      />

      <FeaturedCredential
        title="Talent Acquisition"
        issuer="HRCI"
        image="/images/credentials/hrci-talent-acquisition.png"
        imageAlt="HRCI Talent Acquisition Certificate"
        credentialUrl="https://coursera.org/share/b595c8a361662d764078baab31545d46"
        description="Completed HRCI's Talent Acquisition credential focused on recruiting strategy, interviewing, candidate experience, and modern hiring practices."
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

        </div>

      </div>

      </div>

    </main>
  );
}
