import React from 'react';

interface ItineraryCardProps {
  title: string;
  days: number;
  image: string;
  highlights: string[];
  description: string;
}

const TravelStyleExpeditions = () => {
  // Sample data - replace with your actual content
  const travelStyle = {
    title: "Wildlife Safaris",
    description: "Immerse yourself in the heart of Africa's wilderness with our expertly crafted wildlife safaris. Experience close encounters with the Big Five and witness the spectacular Great Migration in some of the world's most renowned national parks.",
    itineraries: [
      {
        title: "Classic Kenya Safari",
        days: 8,
        image: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        highlights: [
          "Masai Mara Game Reserve",
          "Amboseli National Park",
          "Lake Nakuru Flamingos",
          "Cultural Maasai Village Visit"
        ],
        description: "Journey through Kenya's most iconic parks with comfortable lodge accommodations and expert guides."
      },
      {
        title: "Tanzania Migration Experience",
        days: 10,
        image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        highlights: [
          "Serengeti National Park",
          "Ngorongoro Crater",
          "Wildebeest River Crossings",
          "Hot Air Balloon Safari"
        ],
        description: "Witness the greatest wildlife spectacle on earth - the Great Migration in the Serengeti ecosystem."
      },
      {
        title: "Uganda Primate Adventure",
        days: 12,
        image: "https://images.unsplash.com/photo-1589552950453-aaafa1a29b98?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        highlights: [
          "Bwindi Gorilla Trekking",
          "Kibale Chimpanzee Tracking",
          "Queen Elizabeth National Park",
          "Boat Safari on Kazinga Channel"
        ],
        description: "Combine incredible primate encounters with classic safari experiences in Uganda's diverse landscapes."
      }
    ]
  };

  return (
    <div className=" mx-auto py-16">
         {/* Hero Section */}
      <section className="relative h-[90vh]">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1546182990-dffeafbe841d?q=80&w=2070&auto=format&fit=crop')",
            backgroundAttachment: 'fixed'
          }}
        />
        
        <div className="relative z-10 mx-auto px-4 h-full flex flex-col justify-center items-center text-center bg-gradient-to-b from-black/80 to-black/30">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-xl">
              Discover Adventure Expeditions
            </h1>
            <p className="text-xl text-amber-100 max-w-3xl mb-8">
              Experience Africa's most iconic wildlife in breathtaking landscapes
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              
              <button className="bg-transparent border-2 border-amber-400 text-amber-100 px-8 py-3 rounded-lg font-medium hover:bg-amber-500/20 transition duration-300 hover:border-amber-300 transform hover:scale-105">
                Download Guide
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className="text-center bg-gray-100 py-10">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">{travelStyle.title}</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          {travelStyle.description}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 bg-gray-100">
        {travelStyle.itineraries.map((itinerary, index) => (
          <ItineraryCard key={index} {...itinerary} />
        ))}
      </div>

      <div className="mt-16 bg-[#f8f5e9] p-8 ">
        <h3 className="text-2xl font-bold text-[#a99252] mb-4">Tailor-Made Itineraries</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="text-gray-700 mb-4">
              Our wildlife safaris are completely customizable to match your preferences. Whether you're a photography enthusiast, 
              bird watcher, or family with children, we'll create the perfect itinerary for you.
            </p>
            <p className="text-gray-700 mb-4">
              We consider all aspects of your journey:
            </p>
            <ul className="grid grid-cols-2 gap-2 mb-6">
              {[
                "Accommodation preferences",
                "Travel dates & duration",
                "Special interests",
                "Physical activity level",
                "Budget requirements",
                "Family needs"
              ].map((item, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-[#c2a75c] mr-2">✓</span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-white p-6  shadow-sm ">
            <h4 className="text-xl font-semibold text-gray-800 mb-4">Why Choose Our Wildlife Safaris?</h4>
            <ul className="space-y-3">
              {[
                "Expert guides with 10+ years experience",
                "Small groups (max 6 people per vehicle)",
                "Premium safari vehicles with pop-up roofs",
                "Responsible tourism practices",
                "24/7 support during your journey"
              ].map((item, i) => (
                <li key={i} className="flex">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#f0e8d1] flex items-center justify-center mr-3">
                    <span className="text-[#c2a75c] text-sm font-bold">{i + 1}</span>
                  </div>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            <button className="mt-6 bg-[#c2a75c] hover:bg-[#a99252] text-white font-medium py-2 px-6 rounded-lg transition w-full">
              Customize Your Safari
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Itinerary Card Component
const ItineraryCard: React.FC<ItineraryCardProps> = ({ 
  title, 
  days, 
  image, 
  highlights,
  description 
}) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-200 transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute bottom-4 right-4 bg-[#c2a75c] text-white text-sm font-bold py-1 px-3 rounded-lg">
          {days} days
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        
        <div className="mb-4">
          <h4 className="font-semibold text-gray-700 mb-2 flex items-center">
            <span className="text-[#c2a75c] mr-2">✦</span> Experience Highlights
          </h4>
          <ul className="space-y-1">
            {highlights.map((highlight, i) => (
              <li key={i} className="flex items-start">
                <span className="text-[#c2a75c] mr-2">•</span>
                <span className="text-gray-600">{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="flex justify-between mt-6">
          <button className="text-[#c2a75c] hover:text-[#a99252] font-medium flex items-center">
            Full Itinerary
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
          <button className="bg-[#c2a75c] hover:bg-[#a99252] text-white text-sm font-medium py-2 px-4 rounded-lg transition">
            Enquire Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default TravelStyleExpeditions;