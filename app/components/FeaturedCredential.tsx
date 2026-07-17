type FeaturedCredentialProps = {
  title: string;
  issuer: string;
  image: string;
  imageAlt: string;
  credentialUrl: string;
  description: string;
  skills: string[];
};

export default function FeaturedCredential({
  title,
  issuer,
  image,
  imageAlt,
  credentialUrl,
  description,
  skills,
}: FeaturedCredentialProps) {
  return (
    <article className="w-full py-12">

      <div className="grid gap-12 lg:grid-cols-[320px_1px_1fr] lg:items-start">

        {/* Certificate */}

        <div>

          <img
            src={image}
            alt={imageAlt}
            className="w-full rounded-2xl border border-[color:var(--border)]"
          />

        </div>
<div className="hidden h-full bg-[color:var(--border)] lg:block" />
        {/* Content */}

        <div>

          <p className="text-sm uppercase tracking-[0.25em] text-[color:var(--muted)]">
            {issuer}
          </p>

          <h3 className="mt-3 text-4xl font-semibold leading-tight">
            {title}
          </h3>

          <p className="mt-8 text-lg leading-8 text-[color:var(--muted)]">
            {description}
          </p>

          <div className="mt-10 flex flex-wrap gap-3">

            {skills.map((skill) => (

              <span
                key={skill}
                className="rounded-full border border-[color:var(--border)] px-4 py-2 text-sm"
              >
                {skill}
              </span>

            ))}

          </div>

          <a
            href={credentialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex text-lg font-medium"
          >
            View Credential →
          </a>

        </div>

      </div>

    </article>
  );
}
