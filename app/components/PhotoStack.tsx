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

  return (
    <div>
      {/* Main Image */}
      <div className="overflow-hidden rounded-3xl border border-[color:var(--border)]">
        <img
  src={photos[activePhoto].src}
  alt={photos[activePhoto].alt}
  className="h-auto w-full rounded-3xl object-cover"
/>
      </div>

      {/* Caption */}
      <div className="mt-5">
        <h3 className="text-xl font-semibold">
          {photos[activePhoto].title}
        </h3>

        <p className="mt-2 text-[color:var(--muted)]">
          {photos[activePhoto].caption}
        </p>
      </div>

      {/* Thumbnails */}
      <div className="mt-6 flex gap-3">
        {photos.map((photo, index) => (
          <button
            key={photo.src}
            onClick={() => setActivePhoto(index)}
            className={`overflow-hidden rounded-xl border transition-all ${
              activePhoto === index
                ? "border-[color:var(--accent)] ring-2 ring-[color:var(--accent)]"
                : "border-[color:var(--border)] hover:border-[color:var(--accent)]"
            }`}
          >
            <Image
  unoptimized
              src={photo.src}
              alt={photo.alt}
              width={90}
              height={90}
              className="h-20 w-20 object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
