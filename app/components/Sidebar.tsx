"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  const links = [
    ["01", "Home", "/"],
    ["02", "About", "/about"],
    ["03", "Projects", "/projects"],
    ["04", "Experience", "/experience"],
    ["05", "Beyond", "/beyond"],
    ["06", "Contact", "/contact"],
  ];

  return (
    <aside className="sticky top-0 hidden h-screen w-72 shrink-0 border-r border-[color:var(--border)] bg-[color:var(--surface)] lg:flex">

      <div className="flex h-full flex-col justify-between px-10 py-12">

        <div>

          <h1 className="text-3xl font-semibold tracking-[0.2em]">
            T
          </h1>

          <p className="mt-8 text-xs uppercase tracking-[0.25em] text-[color:var(--muted)]">
            Tanza Taylor
          </p>

          <p className="mt-2 text-xs uppercase tracking-[0.25em] text-[color:var(--accent)]">
            Atlanta, Georgia
          </p>

        </div>

        <nav className="space-y-2">

          {links.map(([num, label, href]) => {
            const active = pathname === href;

            return (
              <Link
                key={href}
                href={href}
                className={`group flex items-center gap-4 py-3 text-sm uppercase tracking-[0.18em] transition-all ${
                  active
                    ? "translate-x-2 text-[color:var(--foreground)]"
                    : "text-[color:var(--muted)] hover:translate-x-2 hover:text-[color:var(--foreground)]"
                }`}
              >
                <span
                  className={`text-[11px] ${
                    active ? "text-[color:var(--accent)]" : "opacity-40"
                  }`}
                >
                  {num}
                </span>

                <span>{label}</span>

                {active && (
                  <span className="ml-auto h-2 w-2 rounded-full bg-[color:var(--accent)]" />
                )}
              </Link>
            );
          })}

        </nav>

        <div className="space-y-6">

          <div className="border-t border-[color:var(--border)] pt-6">

            <p className="text-[10px] uppercase tracking-[0.3em] text-[color:var(--muted)]">
              Currently
            </p>

            <p className="mt-3 text-sm leading-6">
              Building systems.
              <br />
              Open to PM roles.
            </p>

          </div>

          <p className="text-[11px] uppercase tracking-[0.25em] text-[color:var(--muted)]">
            © 2026
          </p>

        </div>

      </div>

    </aside>
  );
}
