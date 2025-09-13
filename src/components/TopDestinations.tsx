// src/components/Destinations.js
import { Link } from 'react-router-dom';
import SafariTruck from '../assets/safaris.jpeg'
import Safari from '../assets/safaris.webp'
import wildlife from '../assets/elephant.avif'

const Destinations = () => {
  const destinations = [
    {
      id: 1,
      name: "Serengeti National Park",
      location: "Tanzania",
       slug:'serengeti',
      description: "Witness the Great Migration and experience the quintessential African safari.",
      image: SafariTruck
    },
    {
      id: 2,
      name: "Maasai Mara",
      slug:'masaimara',
      location: "Kenya",
      
      description: "Home to the Big Five and the spectacular wildebeest migration crossing.",
      image: Safari
    },
    {
      id: 3,
      name: "Kibale Forest National Park",
      location: "Uganda",
      slug:'kibale-national-park',
      description: "Explore the world's largest inland delta with unique water-based safaris.",
      image: wildlife
    }
  ];

  return (
    <section id="destinations" className="py-10 bg-white ">
      <div className="container px-4 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-16 after:h-1 after:bg-[var(--secondary)]">
            East Africa Top Destinations
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            Explore our handpicked selection of East Africa's most extraordinary destinations that promise adventure, beauty, and unforgettable memories.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {destinations.map((destination) => (
            <div 
              key={destination.id} 
              className="bg-white  overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="h-64 overflow-hidden">
                <img 
                  src={destination.image} 
                  alt={destination.name} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{destination.name}</h3>
                <p className="text-gray-600 mb-2">{destination.location}</p>
                {/* <p className="text-[var(--secondary)] font-semibold mb-3">{destination.price}</p> */}
                <p className="text-gray-600 mb-4">{destination.description}</p>
                <Link 
                to={`/${destination.slug}`}>
                <button className="border-2 border-[var(--secondary)] text-[var(--secondary)] hover:bg-[var(--secondary)] hover:text-white font-medium py-2 px-6 rounded-full transition duration-300">
                  View Package
                </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destinations;