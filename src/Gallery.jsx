import React, { useState, useEffect } from "react";

const images = [
  "/media/photo1.jpg",
  "/media/photo2.jpg",
  "/media/photo3.jpg",
  "/media/photo4.jpg",
  "/media/photo5.jpg",
  "/media/photo6.jpg",
  "/media/photo7.jpg",
  // Добавь ещё при необходимости
];

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(null);
  const [fade, setFade] = useState(false);

  const open = (index) => {
    setCurrentIndex(index);
    setFade(true);
    playClickSound();
  };

  const close = () => setCurrentIndex(null);

  const next = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex((currentIndex + 1) % images.length);
      setFade(true);
      playClickSound();
    }, 150);
  };

  const prev = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex((currentIndex - 1 + images.length) % images.length);
      setFade(true);
      playClickSound();
    }, 150);
  };

  const handleKeyDown = (e) => {
    if (currentIndex === null) return;
    if (e.key === "ArrowRight") next();
    if (e.key === "ArrowLeft") prev();
    if (e.key === "Escape") close();
  };

  const playClickSound = () => {
    const audio = new Audio("/media/shutter.mp3");
    audio.play().catch(() => {});
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  });

  return (
    <div className="font-sans" style={{ fontFamily: "Inter, sans-serif" }}>
      {/* Masonry-сетка */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
        {images.map((src, i) => (
          <div
            key={i}
            onClick={() => open(i)}
            className="relative group cursor-pointer break-inside-avoid"
          >
            <img
              src={src}
              alt={`Work ${i + 1}`}
              className="w-full rounded shadow object-cover transition-transform duration-200 ease-out"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition duration-200 rounded" />
          </div>
        ))}
      </div>

      {/* Зум-перегляд */}
      {currentIndex !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 transition-opacity">
          <button
            onClick={close}
            className="absolute top-4 right-4 text-white text-2xl"
          >
            ×
          </button>
          <button
            onClick={prev}
            className="absolute left-4 text-white text-3xl"
          >
            ‹
          </button>
          <img
            src={images[currentIndex]}
            alt="Expanded work"
            className={`max-w-full max-h-screen object-contain transition-opacity duration-300 ease-in-out ${
              fade ? "opacity-100" : "opacity-0"
            }`}
            onClick={next}
          />
          <button
            onClick={next}
            className="absolute right-4 text-white text-3xl"
          >
            ›
          </button>
        </div>
      )}
    </div>
  );
}
