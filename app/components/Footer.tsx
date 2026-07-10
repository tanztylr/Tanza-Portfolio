export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">

      <div className="flex flex-col items-center justify-between gap-6 text-sm text-white/50 md:flex-row">

        <p>
          © 2026 Tanza Taylor
        </p>

        <div className="flex gap-8">

          <a href="https://github.com" className="hover:text-white transition">
            GitHub
          </a>

          <a href="https://linkedin.com" className="hover:text-white transition">
            LinkedIn
          </a>

          <a href="mailto:tanztylr@gmail.com" className="hover:text-white transition">
            Email
          </a>

        </div>

      </div>

    </footer>
  );
}
