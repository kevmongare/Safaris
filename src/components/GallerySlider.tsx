import { useState, useEffect } from "react";
import kenya from "../assets/Main/LION.jpg";
import Uganda from "../links/countries/ugandaimages/Uganda.jpg";
import Tanzania from "../links/countries/Tanzaniaimages/Tanzania.jpg";
import Rwanda from "../links/countries/rwandaimages/rwanda2.jpg"

const images = [kenya, Uganda, Rwanda, Tanzania]; // add as needed

const countryData = [
  { name: "Kenya", flag: "" },
  { name: "Uganda", flag: "" },
  { name: "Rwanda", flag: "" },
  { name: "Tanzania", flag: "" },
];

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Change active card every 4s
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);
  return (
    
      <div className="relative mx-auto max-w-7xl h-[80vh]">
        <div className="absolute max-w-7xl inset-0 z-0 bg-fixed bg-[url('./assets/Main/Lioness.jpeg')] bg-cover bg-center  opacity-80" />
        <div className="bg-gradient-b from-black to-transparent h-[90vh] absolute inset-0 mx-auto"/>

      {/* Grid */}
        <div className="relative z-10  p-10  ">
          <div className="text-center max-w-3xl mx-auto px-4">
            <h2 className="text-4xl font-bold tracking-tight text-gray-100 mb-4 pt-5">
              Discover Timeless Adventures
            </h2>
            <p className="text-md font-light text-gray-200 leading-relaxed">
              From untamed landscapes to elegant safari moments, our journeys capture
              the essence of luxury and exploration. Step into a world where every
              scene is a masterpiece waiting to be lived.
            </p>
          </div>
 {/* Flip Card Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-2 mx-auto max-w-6xl mt-10">
          {images.map((src, i) => {
            const isActive = i === activeIndex;
            return (
              <div
                key={i}
                className="relative w-84 h-70 [perspective:1000px] "
              >
                <div
                  className={`relative  w-full h-full transition-transform duration-700 [transform-style:preserve-3d] ${
                    isActive ? "[transform:rotateY(0deg)] " : ""
                  }`
                }
                >
                  {/* Front (Flag side) */}
                  <div 
                  className="absolute hidden md:flex z-0 inset-0 flex-col items-center justify-center bg-gradient-to-t from-transparent via-black/50 to-transparent text-gray-100  shadow-lg [backface-visibility:hidden]"
                  onClick={() => setSelectedImage(src)}>
                    <span className="text-5xl">
                      {countryData[i % countryData.length].flag}
                    </span>
                    <h3 className="text-xl font-bold mt-2">
                      {countryData[i % countryData.length].name}
                    </h3>
                  </div>

                  {/* Back (Image side) */}
                  <div className="cursor-pointer absolute hidden md:block inset-0 z-40 overflow-hidden shadow-lg [transform:rotateY(0deg)] [backface-visibility:hidden]">
                    <img
                      src={src}
                      alt={`Gallery ${i}`}
                      className="w-full h-full object-cover"
                      onClick={() => setSelectedImage(src)}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <img alt="" src={selectedImage} className="max-h-[90%] max-w-[90%] " />
        </div>
      )}
    </div>
  );
}
