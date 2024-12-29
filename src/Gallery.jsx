import React from "react";

const Gallery = () => {
  const galleryImages = [
    { src: "/gallery/amu.jpg", alt: "Amu at the Event" },
    { src: "/gallery/parthiban.jpg", alt: "Parthiban Award Presentation" },
    { src: "/gallery/prize.jpg", alt: "Prize Distribution Ceremony" },
    { src: "/gallery/prize2.jpg", alt: "Winner Receiving Trophy" },
    { src: "/gallery/prize3.jpg", alt: "Celebrating Achievement" },
    { src: "/gallery/prize4.jpg", alt: "Team on Stage" },
    { src: "/gallery/prize5.jpg", alt: "Group Receiving Certificates" },
    { src: "/gallery/screen.jpg", alt: "Event Highlights on Screen" },
    { src: "/gallery/screen2.jpg", alt: "Live Event Coverage" },
    { src: "/gallery/prize6.jpg", alt: "Special Recognition Award" },
    { src: "/gallery/prize7.jpg", alt: "Judges Panel Applause" },
    { src: "/gallery/prize8.jpg", alt: "End of Event Group Photo" },
  ];

  return (
    <div className="p-6 sm:p-8 md:p-12 bg-gradient-to-bl from-black to-purple-950 text-white">
      <h2 className="text-center text-4xl md:text-5xl font-bold text-goldz mb-10">
        Gallery
      </h2>

      {/* Gallery Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {galleryImages.map((image, index) => (
          <div
            key={index}
            className="relative group rounded-lg overflow-hidden shadow-lg border-2 border-gray-800"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-64 object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
            <div className="absolute bottom-4 left-4 text-lg font-bold text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {image.alt}
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <footer className="mt-16 text-center">
        <div className="border-t-2 border-gray-600 w-1/2 mx-auto my-6"></div>
        <p className="text-2xl font-semibold text-goldz tracking-wide">
          MEI International Film Festival{" "}
          <span className="text-indigo-500">2025</span>
        </p>
        <p className="text-gray-400 text-lg italic mt-2">
          Celebrating Excellence in Cinema
        </p>
      </footer>
    </div>
  );
};

export default Gallery;
