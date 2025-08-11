// src/components/KenyaWildlifePage.tsx
import { Link } from 'react-router-dom';
import cheetah from '../../assets/Diani-Sea-Lodge-copy.png'
import { FaStar, FaMapMarkerAlt, FaCalendarAlt, FaUsers,FaGlobeAfrica, FaMoneyBillWave, FaLanguage } from 'react-icons/fa';

const RwandaWildlifePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-amber-100 text-gray-800">
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
              Discover Kenya's Wildlife
            </h1>
            <p className="text-xl text-amber-100 max-w-3xl mb-8">
              Experience Africa's most iconic wildlife in breathtaking landscapes
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              
              <button className="bg-transparent border-2 border-[--button] text-gray-100 px-8 py-3 font-medium hover:bg-black/50 transition duration-300 hover:border-[var(--button)] transform hover:scale-105">
                Check Destinations
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Kenya Introduction */}
      <section className="mx-auto px-4 py-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
              Welcome to Kenya
            </h2>
            <div className="w-24 h-1 bg-[var(--primary)] mx-auto mb-6 rounded-full"></div>
          </div>

          
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Kenya is a wildlife paradise in East Africa, home to the iconic Big Five (lion, leopard, elephant, buffalo, and rhino) and over 1,000 bird species. From the vast savannahs of the Maasai Mara to the snow-capped peaks of Mount Kenya, the country offers some of Africa's most spectacular wildlife viewing experiences.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                The annual Great Migration, where millions of wildebeest and zebra cross the Mara River, is considered one of the greatest natural spectacles on Earth. Kenya's diverse landscapes range from pristine beaches along the Indian Ocean to the dramatic Rift Valley and lush highlands.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-gray-100 to-white p-8 shadow-lg border ">
              <h3 className="text-2xl font-bold mb-6 text-center text-gray-800">Destination Kenya: Key Facts</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-center">
                  <div className="bg-[var(--primary)] p-4 rounded-full mr-4">
                    <FaCalendarAlt className="text-2xl text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Best time to visit</p>
                    <p className="text-lg font-bold text-gray-800">All Year Round</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-[var(--primary)] p-4 rounded-full mr-4">
                    <FaUsers className="text-2xl text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Population</p>
                    <p className="text-lg font-bold text-gray-800">52 Million</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-[var(--primary)] p-4 rounded-full mr-4">
                    <FaMapMarkerAlt className="text-2xl text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Capital City</p>
                    <p className="text-lg font-bold text-gray-800">Nairobi</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-[var(--primary)] p-4 rounded-full mr-4">
                    <FaGlobeAfrica className="text-2xl text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Geographic Area</p>
                    <p className="text-lg font-bold text-gray-800">580,370km²</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-[var(--primary)] p-4 rounded-full mr-4">
                    <FaMoneyBillWave className="text-2xl text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Currency</p>
                    <p className="text-lg font-bold text-gray-800">Kenya Shilling</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-[var(--primary)] p-4 rounded-full mr-4">
                    <FaLanguage className="text-2xl text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Language</p>
                    <p className="text-lg font-bold text-gray-800">English, Swahili</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Top Destinations Section */}
      <section className="py-16 bg-[#f9f7f2]">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[var(--primary)]">
              Top Destinations in Kenya
            </h2>
            <div className="w-24 h-1 bg-[var(--primary)] mx-auto mb-4 rounded-full"></div>
            <p className="text-gray-600 text-lg">
              Explore Kenya's premier wildlife viewing areas with exceptional biodiversity
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                id: "maasai-mara",
                name: "Maasai Mara",
                slug: "masaimara",
                image: "https://images.unsplash.com/photo-1589560364661-4eae3e0d46e6?q=80&w=2070&auto=format&fit=crop",
                excerpt: "World-famous for the Great Migration and exceptional wildlife viewing",
                rating: 4.9,
                highlights: ["Great Migration", "Big Five", "Maasai Culture", "Hot Air Balloons"]
              },
              {
                id: "amboseli",
                name: "Amboseli",
                image: "https://images.unsplash.com/photo-1589560364661-4eae3e0d46e6?q=80&w=2070&auto=format&fit=crop",
                excerpt: "Stunning views of Mount Kilimanjaro with large elephant herds",
                rating: 4.7,
                highlights: ["Elephant Herds", "Kilimanjaro Views", "Swamps", "Maasai Culture"]
              },
              {
                id: "tsavo",
                name: "Tsavo",
                image: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?q=80&w=2070&auto=format&fit=crop",
                excerpt: "One of the world's largest game sanctuaries with diverse landscapes",
                rating: 4.6,
                highlights: ["Red Elephants", "Mzima Springs", "Volcanic Landscapes", "Birding"]
              },
              {
                id: "samburu",
                name: "Samburu",
                image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=2070&auto=format&fit=crop",
                excerpt: "Unique wildlife species not found in other Kenyan parks",
                rating: 4.5,
                highlights: ["Special Five", "Camel Safaris", "Samburu Culture", "Ewaso River"]
              }
            ].map((destination) => (
              <div 
                key={destination.id} 
                className="bg-white overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={destination.image} 
                    alt={destination.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute top-4 right-4 text-white px-3 py-1 rounded-full flex items-center">
                    <FaStar className="mr-1 text-yellow-300" />
                    <span>{destination.rating}</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {destination.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">{destination.excerpt}</p>
                  
                  <div className="mt-4">
                    <h4 className="font-medium mb-2 text-gray-800">Highlights:</h4>
                    <div className="flex flex-wrap gap-2">
                      {destination.highlights.map((highlight, index) => (
                        <span 
                          key={index}
                          className="bg-[var(--secondary)] text-gray-100 border  text-xs px-3 py-1 rounded-full"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                  <Link
                  to={`/${destination.slug}`} >
                  <button className="cursor-pointer mt-6 w-full bg-[var(--primary)] text-white hover:from-[var(--primary)]  hover:to-[var(--seondary)] py-2 rounded-lg font-medium transition-all duration-300">
                    Explore Destination
                  </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Best Time to Visit */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
                Best Time to Visit Kenya
              </h2>
              <div className="w-24 h-1 bg-[var(--primary)] mx-auto mb-4 rounded-full"></div>
              <p className="text-gray-600 text-lg">
                Kenya offers incredible wildlife experiences throughout the year
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                {
                  season: "January - March",
                  title: "Dry Season",
                  description: "Ideal for bird watching and general wildlife viewing",
                  highlight: "Warm weather, fewer crowds"
                },
                {
                  season: "April - May",
                  title: "Long Rains",
                  description: "Lush green landscapes, lower prices",
                  highlight: "Best for photography, newborn animals"
                },
                {
                  season: "June - October",
                  title: "Peak Season",
                  description: "Witness the Great Migration in Maasai Mara",
                  highlight: "Optimal game viewing, cooler temperatures"
                },
                {
                  season: "November - December",
                  title: "Short Rains",
                  description: "Migratory birds arrive, landscapes refresh",
                  highlight: "Lower prices, comfortable temperatures"
                }
              ].map((period, index) => (
                <div 
                  key={index} 
                  className="bg-gray-100 p-6 border border-amber-100 shadow-sm hover:shadow-lg transition-all duration-300"
                >
                  <div className="text-center  mb-4">
                    <div className="bg-[var(--primary)] text-white text-sm font-bold px-3 py-1 rounded-2xl inline-block">
                      {period.season}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-center text-gray-800 mb-3">
                    {period.title}
                  </h3>
                  <p className="text-gray-700 text-center mb-4">
                    {period.description}
                  </p>
                  <div className="p-3">
                    <p className="text-[var(--primary)] text-sm font-medium text-center">
                      {period.highlight}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[var(--secondary)]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready for Your Kenyan Adventure?
          </h2>
          <p className="text-amber-100 text-xl mb-8 max-w-3xl mx-auto">
            Our safari experts will craft your perfect itinerary with 24/7 support
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-amber-700 hover:bg-amber-50 px-10 py-4 rounded-lg font-bold text-lg shadow-lg transition duration-300 transform hover:scale-105">
              Plan Your Safari
            </button>
            <button className="bg-transparent border-2 border-amber-300 text-amber-100 hover:bg-amber-500/30 px-10 py-4 rounded-lg font-bold text-lg transition duration-300 transform hover:scale-105">
              Contact Our Experts
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default RwandaWildlifePage;