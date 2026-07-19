"use client";

import { useRef } from "react";
import { motion, useMotionValue, animate } from "motion/react";

const articles = [
  {
    title: "Opportunity Doesn't Always Look Like a Paycheck",
    excerpt:
      "I used to think career growth only counted when it came with a title or salary. Volunteering changed how I measure progress—and completely reshaped how I think about success.",
    url: "https://substack.com/@fineillsayit1",
  },
  {
    title: "Coming Soon",
    excerpt:
      "More essays on project management, systems thinking, career growth, and building in public.",
    url: "https://substack.com/@fineillsayit1",
  },
  {
    title: "Coming Soon",
    excerpt:
      "This space will grow as I publish more of the ideas I've been collecting.",
    url: "https://substack.com/@fineillsayit1",
  },
];

export default function SubstackCarousel() {
  const containerRef = useRef<HTMLDivElement>(null);
const trackRef = useRef<HTMLDivElement>(null);

const x = useMotionValue(0);
  return (
    <div
  ref={containerRef}
  className="mt-12 overflow-hidden"
  onMouseMove={(e) => {
    
  if (!containerRef.current) return;
  

  const rect = containerRef.current.getBoundingClientRect();

  const mouseX = e.clientX - rect.left;

  const percentage = mouseX / rect.width;

  if (!trackRef.current) return;

  const maxOffset = Math.max(
    trackRef.current.scrollWidth - rect.width,
    0
  );

  animate(x, -(maxOffset * percentage), {
    type: "spring",
    stiffness: 70,
    damping: 20,
  });
}}
>
  <motion.div
  ref={trackRef}
  style={{ x }}
  className="flex gap-6"
>
      {articles.map((article, index) => (
        <div
  key={index}
  className="group w-[500px] shrink-0 snap-start rounded-3xl border border-[color:var(--border)] p-10 transition-all duration-300 hover:border-[color:var(--accent)] hover:-translate-y-1"
>
          <h3 className="text-2xl font-semibold leading-tight transition-colors duration-300 group-hover:text-[color:var(--accent)]">
  {article.title}
</h3>
          <p>{article.excerpt}</p>

          <a
  href={article.url}
  target="_blank"
  rel="noopener noreferrer"
  className="mt-8 inline-flex items-center gap-2 font-medium text-[color:var(--accent)]"
>
  Read on Substack

  <span className="transition-transform duration-300 group-hover:translate-x-1">
    →
  </span>
</a>
        </div>
            ))}
    </motion.div>
</div>
  );
}
