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
      "At Tech Teens, I work across grant research, fundraising strategy, partnerships, and internal planning. A lot of my role is figuring out what the organization needs, turning that into something actionable, and building the structure to keep it moving.",
    contributions: [
  "Built and maintain a grant tracker that keeps funding opportunities, deadlines, eligibility requirements, and application progress in one place.",
  "Research and qualify grant opportunities based on mission alignment, eligibility, funding priorities, and realistic application potential.",
  "Identify and pursue partnership opportunities with schools, libraries, businesses, and community organizations.",
  "Turn grant and partnership research into clear recommendations that leadership can use to decide where to focus time and resources.",
  "Create documentation and repeatable workflows that give the organization more structure as its fundraising and partnership efforts grow.",
    ],
    impact:
  "The systems I've built give Tech Teens a clearer view of its funding opportunities and partnership pipeline. Leadership can see what's worth pursuing, what's coming next, and where follow-up is needed without starting the research process over each time.",
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
      "My work at Cracker Barrel sat between retail operations and project coordination. I supported projects involving inventory, merchandising, reporting, and internal systems—keeping track of timelines, dependencies, and the details that had to come together for the work to actually get done.",
    contributions: [
  "Coordinated retail projects involving inventory, item setup, merchandising, reporting, and internal systems.",
  "Tracked project timelines, milestones, dependencies, and risks to keep work moving across teams.",
  "Worked across business and technical teams to coordinate project requirements and operational priorities.",
  "Supported inventory and data readiness efforts, including reporting and system-related initiatives.",
  "Identified gaps in existing workflows and recommended process improvements to make execution more efficient.",
    ],
    impact:
  "The role gave me a closer look at how decisions in one part of a business can affect everything downstream. Keeping projects moving meant paying attention to the details—what was ready, what was delayed, who was waiting on what, and where a process needed to change.",
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
    "At Assurant, I worked across insurance cases that required a lot of coordination, documentation, and follow-up. I combined related cases, gathered supporting documents, communicated with customers and outside insurance teams, and made sure cases had the information they needed before being sent to vendors for the next step.",

  contributions: [
    "Managed insurance cases from initial documentation through vendor handoff, including combining related cases and gathering required supporting documents.",
    "Handled inbound calls and emails, made outbound follow-ups when needed, and documented each interaction to maintain an accurate record of the case.",
    "Worked with external insurance partners and representatives to verify information and resolve missing or incomplete case details.",
    "Participated in special projects alongside regular case responsibilities, adapting to changing priorities and additional operational needs.",
    "Created a separate tracking system to maintain productivity when the primary system became unavailable or unresponsive, using claim numbers instead of personally identifiable information to keep customer information protected.",
  ],

  impact:
    "The work required me to balance speed with accuracy because every case depended on complete documentation and a clear record of what happened before it could move forward. Creating my own backup tracking process also gave me a way to keep working through system interruptions without putting customer information at risk.",

  skills: [
    "Case Management",
    "Documentation",
    "Cross-functional Coordination",
    "Process Improvement",
    "Data Privacy",
  ],
},
  {
  id: "1000degrees",
  company: "1000 Degrees",
  title: "Operations Manager",
  dates: "Mar 2019 – Mar 2021",
  overview:
    "At 1000 Degrees, I managed the day-to-day operations of a fast-paced pizza restaurant and a team of up to eight employees. My job was to make sure we had the staff, ingredients, equipment, cash, and supplies needed to open and operate each day while handling everything from scheduling and inventory to hiring, training, payroll, and vendor coordination.",

  contributions: [
    "Managed daily restaurant operations and a team of up to eight employees, including staffing, scheduling, hiring, training, payroll, inventory, and shift coverage.",
    "Created a dedicated shift-coverage process that gave employees one place to communicate availability and open shifts while keeping management informed of schedule changes.",
    "Built a bank deposit log to track daily deposits, store cash needs, and the amount of money available for registers and operational purchases.",
    "Reorganized storage areas, consolidated duplicate ingredient labels, and introduced a weekly prep schedule to improve organization and keep necessary ingredients ready for service.",
    "Created opening, mid-day, and closing cleaning checklists that clearly assigned responsibilities to each shift and made missed tasks easier to identify and address.",
    "Coordinated with owners, vendors, employees, and customers to resolve day-to-day issues and keep restaurant operations running smoothly.",
  ],

  impact:
    "A lot of the problems I solved weren't one-time issues—they were things that kept happening because there wasn't a clear process behind them. Creating systems for scheduling, shift coverage, deposits, food prep, storage, and cleaning made responsibilities easier to understand and gave me a better way to see where something had gone wrong when it did.",

  skills: [
    "Operations Management",
    "Team Leadership",
    "Process Improvement",
    "Scheduling",
    "Inventory Management",
    "Training",
    "Cash Management",
  ],
},
  {
  id: "planetfitness",
  company: "Planet Fitness",
  title: "Team Lead",
  dates: "Aug 2017 – Aug 2019",
  overview:
    "My first job and my first experience leading a team. I managed three employees, helped keep the gym running day to day, and handled opening and closing responsibilities.",

  contributions: [
    "Managed a team of three employees during assigned shifts.",
    "Opened and closed the gym and handled daily operational responsibilities.",
    "Helped maintain the facility and equipment to keep the gym clean and ready for members.",
    "Supported members and handled customer concerns as needed.",
  ],

  impact:
    "This was where I first learned how to be responsible for more than just my own work. It gave me an early foundation in leadership, accountability, and keeping day-to-day operations moving.",

  skills: [
    "Team Leadership",
    "Customer Experience",
    "Daily Operations",
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

            {/* PROFESSIONAL JOURNEY */}

            <FadeIn>
              <section>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[color:var(--accent)]">
                  Experience
                </p>

                <h1 className="mt-6 max-w-5xl text-7xl font-semibold leading-[0.95] tracking-tight md:text-8xl">
                  Where I&apos;ve Worked
                </h1>

                <p className="mt-10 max-w-3xl text-xl leading-9 text-[color:var(--muted)]">
                  Every role taught me something different, but they&apos;ve all
                  had one thing in common: making work simpler, clearer, and
                  easier for the people around me.
                </p>
              </section>
            </FadeIn>

            {/* CAREER TIMELINE */}

            <FadeIn>
              <section className="mt-32">

                <div className="border-b border-[color:var(--border)] pb-8">
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[color:var(--accent)]">
                    Career Timeline
                  </p>

                  <h2 className="mt-4 text-5xl font-semibold tracking-tight">
                    Where I&apos;ve Worked
                  </h2>
                </div>


                <div className="mt-12 grid gap-16 lg:grid-cols-[280px_1fr]">

                  {/* Timeline */}

                  <div>
                    {jobs.map((job, index) => {
                      const active = selectedJob.id === job.id;

                      return (
                        <button
                          key={job.id}
                          onClick={() => setSelectedJob(job)}
                          className={`group relative w-full border-b border-[color:var(--border)] py-6 text-left transition-all duration-300 ${
                            active
                              ? "pl-5"
                              : "hover:pl-3"
                          }`}
                        >

                          {active && (
                            <span className="absolute left-0 top-7 h-2 w-2 rounded-full bg-[color:var(--accent)]" />
                          )}

                          <div className="flex items-start gap-4">

                            <span className="pt-1 text-xs text-[color:var(--muted)]">
                              0{index + 1}
                            </span>

                            <div>
                              <h3
                                className={`text-lg font-semibold transition-colors ${
                                  active
                                    ? "text-[color:var(--foreground)]"
                                    : "text-[color:var(--muted)] group-hover:text-[color:var(--foreground)]"
                                }`}
                              >
                                {job.company}
                              </h3>

                              <p className="mt-1 text-sm text-[color:var(--muted)]">
                                {job.title}
                              </p>

                              <p className="mt-2 text-xs uppercase tracking-[0.15em] text-[color:var(--muted)]">
                                {job.dates}
                              </p>
                            </div>

                          </div>
                        </button>
                      );
                    })}
                  </div>


                  {/* Selected Role */}

                  <FadeIn key={selectedJob.id}>
                    <div>

                      <div className="border-b border-[color:var(--border)] pb-10">

                        <h2 className="mt-5 text-5xl font-semibold leading-tight">
                          {selectedJob.title}
                        </h2>

                      </div>


                      {/* Overview */}

                      <div className="grid gap-8 border-b border-[color:var(--border)] py-10 md:grid-cols-[160px_1fr]">

                        <h3 className="text-lg font-semibold">
                          Overview
                        </h3>

                        <p className="text-lg leading-8 text-[color:var(--muted)]">
                          {selectedJob.overview}
                        </p>

                      </div>


                      {/* Achievements */}

                      <div className="grid gap-8 border-b border-[color:var(--border)] py-10 md:grid-cols-[160px_1fr]">

                        <h3 className="text-lg font-semibold">
                          Selected Achievements
                        </h3>

                        <ul className="space-y-5 text-lg leading-8 text-[color:var(--muted)]">

                          {selectedJob.contributions.map((item) => (
                            <li
                              key={item}
                              className="flex gap-4"
                            >
                              <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--accent)]" />

                              <span>
                                {item}
                              </span>
                            </li>
                          ))}

                        </ul>

                      </div>


                      {/* Impact */}

                      <div className="grid gap-8 border-b border-[color:var(--border)] py-10 md:grid-cols-[160px_1fr]">

                        <h3 className="text-lg font-semibold">
                          Impact
                        </h3>

                        <p className="text-lg leading-8 text-[color:var(--muted)]">
                          {selectedJob.impact}
                        </p>

                      </div>


                      {/* Skills */}

                      <div className="grid gap-8 py-10 md:grid-cols-[160px_1fr]">

                        <h3 className="text-lg font-semibold">
                          Skills in Practice
                        </h3>

                        <div className="flex flex-wrap gap-3">

                          {selectedJob.skills?.map((skill, index) => (
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

                </div>

              </section>
            </FadeIn>


            {/* CREDENTIALS */}

            <FadeIn>
              <section className="mt-32 border-t border-[color:var(--border)] pt-24">

                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[color:var(--accent)]">
                  Credentials
                </p>

                <h2 className="mt-4 text-5xl font-semibold tracking-tight">
                  Professional Development
                </h2>

                <p className="mt-8 max-w-4xl text-xl leading-9 text-[color:var(--muted)]">
  My experience taught me how to do the work. These credentials helped me put
  names, frameworks, and structure around a lot of what I had already learned
  by doing.
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
