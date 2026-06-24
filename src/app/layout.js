"use client";
import { useEffect } from 'react';
import './globals.css';

export default function RootLayout({ children }) {
  useEffect(() => {
    const moveCursor = (e) => {
      document.documentElement.style.setProperty('--cursor-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--cursor-y', `${e.clientY}px`);
    };
    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  return (
    <html lang="en">
      <body>
        <div className="custom-glowing-cursor" />
        <nav className="sticky top-0 z-50 w-full backdrop-blur-xl bg-slate-950/70 border-b border-cyan-500/10">
  <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-8">

    <a
  href="/"
  className="text-cyan-400 font-bold tracking-widest text-xl"
>
  TANZA
</a>

    <div className="hidden md:flex items-center gap-6 text-sm text-slate-300">

      <a href="/" className="hover:text-cyan-400 transition-colors">
        Home
      </a>

      <a href="/about" className="hover:text-cyan-400 transition-colors">
        About
      </a>

      <a href="/projects" className="hover:text-cyan-400 transition-colors">
  Projects
</a>

      <a href="/experience" className="hover:text-cyan-400 transition-colors">
        Experience
      </a>

      <a href="/beyond" className="hover:text-cyan-400 transition-colors">
        Beyond
      </a>

    </div>

    <a
      href="/Tanza_Taylor_Resume.pdf"
      download
      className="px-4 py-2 rounded-lg border border-cyan-500/30 text-cyan-300 text-sm hover:bg-cyan-500/10 transition"
    >
      Resume
    </a>

  </div>
</nav>
        {children}
      </body>
    </html>
  );
}
