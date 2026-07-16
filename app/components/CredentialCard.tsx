import Image from "next/image";
import Link from "next/link";

type CredentialCardProps = {
  title: string;
  issuer: string;
  description: string;
  image: string;
  imageAlt: string;
  credentialUrl: string;
  skills: string[];
};

export default function CredentialCard({
  title,
  issuer,
  description,
  image,
  imageAlt,
  credentialUrl,
  skills,
}: CredentialCardProps) {
  return (
    <article className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <Link
        href={credentialUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group block"
      >
        <Image
  src={image}
  alt={imageAlt}
  width={600}
  height={400}
  loading="eager"
  priority
  className="w-full rounded-xl transition-transform duration-300 group-hover:scale-[1.03]"
/>
      </Link>

      <div className="mt-6">
        <h3 className="text-2xl font-semibold">{title}</h3>

        <p className="mt-1 text-sm text-[color:var(--muted)]">
          {issuer}
        </p>

        <p className="mt-4 leading-8 text-[color:var(--muted)]">
          {description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {skills.map((skill) => {
  const color =
    ["Agile", "Scrum"].includes(skill)
      ? "bg-[#E5EFE6] text-[#3F5A46] border-[#AFC3B2]"
      : ["Project Planning", "Risk Management"].includes(skill)
      ? "bg-[#E7EEF4] text-[#41576B] border-[#B7C9D8]"
      : ["Recruiting", "Interviewing", "Hiring", "Talent Strategy", "Candidate Experience"].includes(skill)
      ? "bg-[#F5EEE3] text-[#7A5A2B] border-[#DEC8A4]"
      : "bg-[color:var(--accent)]/12 text-[color:var(--accent)] border-[color:var(--accent)]/35";

  return (
    <span
      key={skill}
      className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 hover:shadow-sm ${color}`}
    >
      {skill}
    </span>
  );
})}
        </div>
      </div>
    </article>
  );
}
