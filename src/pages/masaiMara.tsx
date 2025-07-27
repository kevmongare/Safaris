// src/pages/MaasaiMaraExperience.tsx
import savanah from '../assets/savannah-landscape-in-the-national-park-of-kenya-P56CU7Y-1.jpg'
import Lodge from '../assets/villa-2-beautiful-bedouin.jpg'
import big from '../assets/safaris.webp'
import { useState } from 'react';
import { FaCalendarAlt, FaUsers, FaMapMarkerAlt, FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const MaasaiMaraExperience = () => {
  // State for gallery lightbox
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  // Safari packages data
  const safariPackages = [
    {
      id: 1,
      title: "Classic Mara Safari",
      duration: "4 Days",
      price: 1895,
      description: "Experience the best of Maasai Mara with game drives and cultural visits",
      highlights: ["Daily game drives", "Maasai village visit", "Sunset viewing", "Professional guide"]
    },
    {
      id: 2,
      title: "Great Migration Special",
      duration: "6 Days",
      price: 2750,
      description: "Witness the spectacular wildebeest migration (July-Oct)",
      highlights: ["River crossing viewing", "Photography specialist", "Hot air balloon option", "Luxury tented camp"]
    },
    {
      id: 3,
      title: "Family Adventure",
      duration: "5 Days",
      price: 2450,
      description: "Kid-friendly safari with educational activities",
      highlights: ["Child-friendly guides", "Bush craft lessons", "Wildlife tracking", "Family accommodations"]
    }
  ];

  // Gallery images
  const galleryImages = [
    { id: 1, src: savanah, alt: "Lions in Maasai Mara" },
    { id: 2, src: Lodge, alt: "Great Migration river crossing" },
    { id: 3, src: savanah, alt: "Hot air balloon over savannah" },
    { id: 4, src: Lodge, alt: "Elephants at sunset" },
    { id: 5, src: savanah, alt: "Maasai warriors" },
    { id: 6, src: Lodge, alt: "Cheetah chasing prey" },
    { id: 7, src: savanah, alt: "Giraffes in acacia trees" },
    { id: 8, src: Lodge, alt: "Safari vehicle on game drive" },
  ];

  // Experience highlights
  const experienceHighlights = [
    { 
      title: "The Great Migration", 
      description: "Witness over 1.5 million wildebeest crossing the Mara River (July-October)", 
      icon: ""
    },
    { 
      title: "Big Five Sightings", 
      description: "Excellent chances to see lions, leopards, elephants, rhinos, and buffalo", 
      icon: ""
    },
    { 
      title: "Maasai Culture", 
      description: "Visit authentic Maasai villages and learn about their traditions", 
      icon: ""
    },
    { 
      title: "Hot Air Balloon Safaris", 
      description: "Spectacular aerial views of the savannah at sunrise", 
      icon: ""
    }
  ];

  // Open lightbox
  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  // Close lightbox
  const closeLightbox = () => {
    setSelectedImage(null);
  };

  // Navigate gallery
  const navigateGallery = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    
    if (direction === 'prev') {
      setSelectedImage(prev => prev === 0 ? galleryImages.length - 1 : prev! - 1);
    } else {
      setSelectedImage(prev => prev === galleryImages.length - 1 ? 0 : prev! + 1);
    }
  };

  return (
    <div className="min-h-screen bg-[#f9f7f2] text-[#3a3a2c]">
      {/* Hero Section */}
      <section className="relative h-screen">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0 bg-[url('./assets/elephant.avif')] bg-no-repeat bg-fixed"
        
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/70 z-1"></div>
        
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
            Maasai Mara Game Reserve
          </h1>
          <p className="text-xl text-amber-100 max-w-3xl mb-8">
            Experience Africa's most iconic wildlife spectacle in Kenya's premier safari destination
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-[var(--primary)]/80 hover:bg-[var(--primary)] text-white px-8 py-3 rounded-lg font-medium transition duration-300 shadow-lg">
              Book Your Safari
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white/10 transition duration-300">
              View Packages
            </button>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6  text-[#3a3a2c]">
              The Ultimate Safari Experience
            </h2>
            <p className="text-lg text-[#8c8479] mb-8">
              The Maasai Mara National Reserve is Kenya's most famous wildlife area, covering 1,510 km² of savannah, woodlands, and riverine forest. 
              Bordering Tanzania's Serengeti National Park, it forms Africa's most diverse and spectacular ecosystem.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {experienceHighlights.map((item, index) => (
              <div key={index} className="bg-[#f9f7f2] p-6 rounded-lg border border-[#8c8479]/30 text-center">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-[#3a3a2c]">{item.title}</h3>
                <p className="text-[#8c8479]">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Travel Arrangements */}
      <section className="py-16 bg-[#f9f7f2]">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#3a3a2c]">
              Safari Packages
            </h2>
            <p className="text-[#8c8479] text-lg">
              Tailored experiences for every type of traveler
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {safariPackages.map((pkg) => (
              <div key={pkg.id} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="p-6 border-b border-[#8c8479]/20">
                  <h3 className="text-xl font-bold mb-2 text-[#3a3a2c]">{pkg.title}</h3>
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center text-[#8c8479]">
                      <FaCalendarAlt className="mr-2" />
                      <span>{pkg.duration}</span>
                    </div>
                    <div className="text-xl font-bold text-[#7c3e2d]">${pkg.price}</div>
                  </div>
                  <p className="text-[#8c8479] mb-4">{pkg.description}</p>
                </div>
                
                <div className="p-6">
                  <h4 className="font-semibold mb-3 text-[#3a3a2c]">Package Includes:</h4>
                  <ul className="mb-6 ">
                    {pkg.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-start mb-2">
                        <span className="text-[#7c3e2d] mr-2">✓</span>
                        <span className="text-[#8c8479]">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                  <button className="w-full bg-[#3a3a2c] hover:bg-[#2c2c22] text-white py-3 rounded-lg font-medium transition duration-300">
                    Select Package
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#3a3a2c]">
              Maasai Mara Gallery
            </h2>
            <p className="text-[#8c8479] text-lg">
              Capturing the magic of Africa's most iconic reserve
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <div 
                key={image.id} 
                className="relative group cursor-pointer overflow-hidden rounded-lg aspect-square"
                onClick={() => openLightbox(index)}
              >
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-medium">{image.alt}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Experience Section */}
      <section className="py-16 bg-[var(--secondary)] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6  text-center text-[#3a3a2c]">
              The Maasai Mara Experience
            </h2>
            
            <div className="bg-white p-6 md:p-8 shadow-lg">
              <div className="flex flex-col md:flex-row gap-8 mb-8">
                <div className="md:w-1/2 mb-6 ">
                  <h3 className="text-2xl font-bold mb-4 text-[#7c3e2d]">Wildlife Wonderland</h3>
                  <p className="text-[#8c8479] mb-4">
                    The Maasai Mara is home to an astonishing concentration of wildlife. With over 95 species of mammals 
                    and 570 recorded species of birds, it's one of Africa's premier game viewing destinations. 
                  </p>
                  <p className="text-[#8c8479]">
                    The reserve is particularly famous for its big cat populations. Lions are commonly seen, 
                    while leopards and cheetahs are regularly spotted during game drives. The Mara River hosts 
                    enormous populations of hippos and crocodiles.
                  </p>
                </div>
                <div className="md:w-1/2 mb-6 ">
                  <img 
                    src={savanah} 
                    alt="Wildlife in Maasai Mara" 
                    className="w-full h-64 object-cover scale-110 transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row-reverse gap-8 mb-8">
                <div className="md:w-1/2 mb-6 ">
                  <h3 className="text-2xl font-bold mb-4 text-[#7c3e2d]">The Great Migration</h3>
                  <p className="text-[#8c8479] mb-4">
                    Between July and October, the Maasai Mara hosts one of nature's greatest spectacles - 
                    the annual migration of over 1.5 million wildebeest and hundreds of thousands of zebras 
                    and gazelles.
                  </p>
                  <p className="text-[#8c8479]">
                    The dramatic river crossings, where herds brave crocodile-infested waters, are the highlight 
                    for many visitors. This natural phenomenon has been described as the "World Cup of Wildlife" 
                    and is truly a once-in-a-lifetime experience.
                  </p>
                </div>
                <div className="md:w-1/2 mb-6 ">
                  <img 
                    src={Lodge} 
                    alt="Great Migration" 
                    className="w-full h-64 object-cover scale-110 transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/2">
                  <h3 className="text-2xl font-bold mb-4 text-[#7c3e2d]">Cultural Encounters</h3>
                  <p className="text-[#8c8479] mb-4">
                    The Maasai people are an integral part of the Mara ecosystem. Visiting a traditional Maasai 
                    village offers insights into a culture that has coexisted with wildlife for centuries.
                  </p>
                  <p className="text-[#8c8479]">
                    Experience traditional dances, learn about medicinal plants, witness warrior training, 
                    and understand the Maasai's deep connection to the land and its wildlife. These cultural 
                    encounters add a rich dimension to the safari experience.
                  </p>
                </div>
                <div className="md:w-1/2">
                  <img 
                    src={big} 
                    alt="Maasai Culture" 
                    className="w-full h-64 object-cover scale-110 transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[var(--secondary)] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6 ">
            Ready for Your Maasai Mara Adventure?
          </h2>
          <p className="text-amber-100 text-xl mb-8 max-w-3xl mx-auto">
            Our safari experts will craft your perfect itinerary with 24/7 support
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-[#7c3e2d] hover:bg-amber-100 px-10 py-4 rounded-lg font-bold text-lg shadow-lg transition duration-300">
              Plan Your Safari
            </button>
            <button className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-10 py-4 rounded-lg font-bold text-lg transition duration-300">
              Contact Our Experts
            </button>
          </div>
        </div>
      </section>

      {/* Lightbox for Gallery */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <button 
            className="absolute top-4 right-4 text-white text-3xl"
            onClick={closeLightbox}
            title="Close gallery"
            aria-label="Close gallery"
          >
            &times;
          </button>
          
          <button 
            className="absolute left-4 text-white text-3xl p-2"
            onClick={() => navigateGallery('prev')}
            title="Previous image"
            aria-label="Previous image"
          >
            <FaChevronLeft size={30} />
          </button>
          
          <div className="max-w-4xl max-h-[90vh]">
            <img 
              src={galleryImages[selectedImage].src} 
              alt={galleryImages[selectedImage].alt}
              className="max-h-[80vh] object-contain"
            />
            <p className="text-white text-center mt-4">{galleryImages[selectedImage].alt}</p>
          </div>
          
          <button 
            className="absolute right-4 text-white text-3xl p-2"
            onClick={() => navigateGallery('next')}
            title="Next image"
            aria-label="Next image"
          >
            <FaChevronRight size={30} />
          </button>
        </div>
      )}
    </div>
  );
};

export default MaasaiMaraExperience;