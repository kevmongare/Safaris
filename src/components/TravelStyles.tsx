// Import your images
import SafariTruck from '../assets/safaris.jpeg';
import Safari from '../assets/safaris.webp';
import wildlife from '../assets/elephant.avif';
import Massai from '../assets/masai-mara-wildlife.jpg';

const TravelStyles = () => {
  const travelStyles = [
    {
      title: "Adventure Expeditions",
      description: "Thrilling journeys through rugged terrains and remote wilderness areas",
      icon: Massai
    },
    {
      title: "Family Holidays",
      description: "Kid-friendly safaris with educational experiences and comfortable stays",
      icon: wildlife
    },
    {
      title: "Wildlife Safaris",
      description: "Expert-led tours focusing on animal encounters and conservation",
      icon: Safari
    },
    {
      title: "Budget Safaris",
      description: "Affordable adventures without compromising on authentic experiences",
      icon: SafariTruck
    },
    {
      title: "Tribal Expeditions",
      description: "Cultural immersions with indigenous communities and traditions",
      icon: Safari
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-[#f8f5eb] to-[#e6e0c9]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-[#3a3a2c] mb-4">
            Discover Your Safari Style
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find the perfect adventure that matches your travel preferences and creates unforgettable memories
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {travelStyles.map((style, index) => (
            <div 
              key={index}
              className="bg-white shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 flex flex-col h-full"
            >
              {/* Image section */}
              <div className="h-48 overflow-hidden">
                <img 
                  src={style.icon} 
                  alt={style.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              
              {/* Content section */}
              <div className="p-6 flex-grow">
                <h3 className="text-xl font-bold text-[#3a3a2c] mb-2">{style.title}</h3>
                <p className="text-gray-600">{style.description}</p>
              </div>
              
              {/* Button section */}
              <div className="bg-[#f8f5eb] px-6 py-3 border-t border-[#e6e0c9]">
                <button className="text-[#c2a75c] font-medium hover:text-[#a99252] transition flex items-center">
                  Explore Options
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-[#c2a75c] hover:bg-[#a99252] text-white font-semibold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105 flex items-center justify-center mx-auto">
            Find Your Perfect Safari
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default TravelStyles;