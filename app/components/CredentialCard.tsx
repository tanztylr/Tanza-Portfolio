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
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-[color:var(--border)] px-3 py-1 text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
