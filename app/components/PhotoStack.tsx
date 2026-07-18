"use client";

import { useState } from "react";
import Image from "next/image";

type Photo = {
  src: string;
  alt: string;
  title: string;
  caption: string;
};

type PhotoStackProps = {
  photos: Photo[];
};

export default function PhotoStack({ photos }: PhotoStackProps) {
  const [activePhoto, setActivePhoto] = useState(0);
  const showPrevious = () => {
  setActivePhoto((current) =>
    current === 0 ? photos.length - 1 : current - 1
  );
};

const showNext = () => {
  setActivePhoto((current) =>
    current === photos.length - 1 ? 0 : current + 1
  );
};

  return (
    <div>
      {/* Main Image */}
<div className="relative overflow-hidden rounded-3xl border border-[color:var(--border)]">
  <img
  key={photos[activePhoto].src}
  src={photos[activePhoto].src}
  alt={photos[activePhoto].alt}
  className="h-auto w-full animate-[fadeIn_0.5s_ease-in-out] object-cover"
/>

  <button
    onClick={showPrevious}
    aria-label="Previous photo"
    className="absolute bottom-5 left-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-white/60 text-xl shadow-sm backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-white/85"
  >
    ←
  </button>

  <button
    onClick={showNext}
    aria-label="Next photo"
    className="absolute bottom-5 right-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-white/60 text-xl shadow-sm backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-white/85"
  >
    →
  </button>
</div>
    </div>
  );
}
