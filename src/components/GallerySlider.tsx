import { useState } from "react";
import SafariTruck from "../assets/safaris.jpeg";
import Safari from "../assets/safaris.webp";
import Wildlife from "../assets/elephant.avif";

const images = [
  SafariTruck,
  Safari,
  Wildlife,
  
  // just keep adding more in the array
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="p-6 mx-auto bg-gray-100 max-w-7xl">
      {/* Grid */}
      <div className="text-center max-w-3xl mx-auto mb-10 px-4">
        <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-4">
            Discover Timeless Adventures
        </h2>
        <p className="text-md font-light text-gray-600 leading-relaxed">
            From untamed landscapes to elegant safari moments, our journeys capture the
            essence of luxury and exploration. Step into a world where every scene is a
            masterpiece waiting to be lived.
        </p>
        </div>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 mx-auto max-w-6xl">
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Gallery ${i}`}
            className="w-full h-72 object-cover  shadow cursor-pointer hover:scale-105 transition"
            onClick={() => setSelectedImage(src)}
          />
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <img alt="" src={selectedImage} className="max-h-[90%] max-w-[90%] rounded-lg" />
        </div>
      )}
    </div>
  );
}

