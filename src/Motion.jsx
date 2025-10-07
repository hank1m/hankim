import React from "react";

export default function Motion() {
  const videos = [
    // Добавляй сюда новые ссылки на Vimeo (или YouTube)
    "https://player.vimeo.com/video/1043116248",
    "https://player.vimeo.com/video/949982171",
    "https://player.vimeo.com/video/785679541",
  ];

  return (
    <section className="space-y-12">
      {videos.map((url, index) => (
        <div key={index} className="w-full aspect-video">
          <iframe
            src={url}
            className="w-full h-full rounded shadow-lg"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            title={`Video ${index + 1}`}
          ></iframe>
        </div>
      ))}
    </section>
  );
}
