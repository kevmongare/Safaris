// src/components/KenyaWildlifePage.tsx
import '../../App.css'
import { FaStar, FaMapMarkerAlt, FaCalendarAlt, FaUsers, FaTree } from 'react-icons/fa';
import SafariTruck from '../../assets/safaris.jpeg'
import Safari from '../../assets/safaris.webp'
import wildlife from '../../assets/elephant.avif'
import Massai from '../../assets/masai-mara-wildlife.jpg'

// Define TypeScript interfaces
interface Destination {
  id: string;
  name: string;
  image: string;
  excerpt: string;
  rating: number;
  description: string;
  highlights: string[];
}

interface SafariPackage {
  id: string;
  title: string;
  image: string;
  duration: string;
  price: number;
  destinations: string[];
  highlights: string[];
  rating: number;
  reviews: number;
}

const KenyaWildlifePage = () => {
  // Kenya wildlife description
  const kenyaDescription = "Kenya is a wildlife paradise, home to the iconic Big Five (lion, leopard, elephant, buffalo, and rhino) and over 1,000 bird species. From the vast savannahs of the Maasai Mara to the snow-capped peaks of Mount Kenya, the country offers some of Africa's most spectacular wildlife viewing experiences. The annual Great Migration, where millions of wildebeest and zebra cross the Mara River, is considered one of the greatest natural spectacles on Earth.";

  // Top destinations data
  const topDestinations: Destination[] = [
    {
      id: "maasai-mara",
      name: "Maasai Mara National Reserve",
      image: Massai,
      excerpt: "World-famous for the Great Migration and exceptional wildlife viewing",
      rating: 4.9,
      description: "The Maasai Mara is Kenya's flagship conservation area, hosting the annual Great Migration from July to October. With over 95 mammal species and 570 bird species, it offers unparalleled game viewing opportunities.",
      highlights: ["Great Migration", "Big Five", "Maasai Cultural Experiences", "Hot Air Balloon Safaris"]
    },
    {
      id: "amboseli",
      name: "Amboseli National Park",
      image: wildlife,
      excerpt: "Stunning views of Mount Kilimanjaro with large elephant herds",
      rating: 4.7,
      description: "Famous for its large elephant herds and spectacular views of Mount Kilimanjaro, Amboseli offers some of Africa's best photographic opportunities with elephants against the backdrop of Africa's highest peak.",
      highlights: ["Elephant Research", "Kilimanjaro Views", "Swamp Ecosystems", "Maasai Culture"]
    },
    {
      id: "tsavo",
      name: "Tsavo National Park",
      image: Safari,
      excerpt: "One of the world's largest game sanctuaries with diverse landscapes",
      rating: 4.6,
      description: "Tsavo is Kenya's largest national park, divided into East and West sections. Known for its 'red elephants' dusted in red soil, volcanic landscapes, and the famous Mzima Springs where hippos and crocodiles can be seen underwater.",
      highlights: ["Red Elephants", "Mzima Springs", "Volcanic Landscapes", "Bird Watching"]
    },
    {
      id: "samburu",
      name: "Samburu National Reserve",
      image: SafariTruck,
      excerpt: "Unique wildlife species not found in other Kenyan parks",
      rating: 4.5,
      description: "Samburu offers a distinctly different ecosystem from southern parks, with unique wildlife like the reticulated giraffe, Grevy's zebra, and Somali ostrich. The Ewaso Ng'iro river supports a diverse ecosystem in this arid landscape.",
      highlights: ["Special Five Species", "Camel Safaris", "Samburu Culture", "Riverine Forests"]
    }
  ];

  // Top safari packages
  const topPackages: SafariPackage[] = [
    {
      id: "classic-kenya",
      title: "Classic Kenya Safari",
      image: Massai,
      duration: "7 Days",
      price: 2450,
      destinations: ["Nairobi", "Maasai Mara", "Lake Nakuru", "Amboseli"],
      highlights: ["Big Five viewing", "Great Migration (seasonal)", "Flamingo spectacle", "Kilimanjaro views"],
      rating: 4.9,
      reviews: 142
    },
    {
      id: "migration-special",
      title: "Great Migration Adventure",
      image: Safari,
      duration: "5 Days",
      price: 1895,
      destinations: ["Maasai Mara"],
      highlights: ["River crossing viewing", "Hot air balloon safari", "Photography focus", "Cultural village visit"],
      rating: 4.8,
      reviews: 98
    },
    {
      id: "northern-frontier",
      title: "Northern Frontier Explorer",
      image: SafariTruck,
      duration: "9 Days",
      price: 3250,
      destinations: ["Samburu", "Ol Pejeta", "Lake Naivasha", "Maasai Mara"],
      highlights: ["Special Five species", "Chimpanzee sanctuary", "Boat safari", "Walking safari"],
      rating: 4.7,
      reviews: 67
    },
    {
      id: "luxury-kenya",
      title: "Luxury Kenya Experience",
      image: wildlife,
      duration: "10 Days",
      price: 5200,
      destinations: ["Nairobi", "Laikipia", "Maasai Mara", "Diani Beach"],
      highlights: ["Private conservancies", "Boutique lodges", "Helicopter transfers", "Beach extension"],
      rating: 5.0,
      reviews: 56
    }
  ];

  return (
    <div className="min-h-screen bg-[var(--primary)] text-primary">
      {/* Hero Section */}
      <section className="relative h-[90vh] bg-gradient-to-r from-primary/80 to-primary/90 ">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0 bg-[url('./assets/safaris.webp')] bg-fixed"
          
        />
        
        <div className="relative z-10  mx-auto px-4 h-full flex flex-col justify-center items-center text-center bg-gradient-to-b from-black/90  to-transparent">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
            Discover Kenya's Wildlife
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mb-8">
            Experience Africa's most iconic wildlife in breathtaking landscapes
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-[var(--primary)]/90 hover:bg-button/90 text-white px-8 py-3  font-medium transition duration-300 shadow-lg">
              Book a Safari
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-3  font-medium hover:bg-[var(--primary)]/10 transition duration-300">
              Download Guide
            </button>
          </div>
        </div>
      </section>

      {/* Kenya Wildlife Description */}
      <section className=" mx-auto px-4 py-16 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Kenya's Wildlife Wonderland
          </h2>
          <p className="text-lg text-secondary mb-8">
            {kenyaDescription}
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            <div className="bg-gray-50  hover:scale-110 hover:shadow-lg p-6 text-center">
              <FaTree className="text-4xl text-button mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">25+ National Parks</h3>
              <p className="text-secondary">Protected habitats across diverse ecosystems</p>
            </div>
            <div className="bg-gray-50  hover:scale-110 hover:shadow-lg p-6 text-center">
              <FaUsers className="text-4xl text-button mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Big Five</h3>
              <p className="text-secondary">Lion, leopard, elephant, rhino & buffalo</p>
            </div>
            <div className="bg-gray-50  hover:scale-110 hover:shadow-lg p-6 text-center">
              <FaCalendarAlt className="text-4xl text-button mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Year-Round Safaris</h3>
              <p className="text-secondary">Wildlife viewing in every season</p>
            </div>
            <div className="bg-gray-50  hover:scale-110 hover:shadow-lg p-6 text-center">
              <FaMapMarkerAlt className="text-4xl text-button mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">8 UNESCO Sites</h3>
              <p className="text-secondary">World heritage natural and cultural sites</p>
            </div>
          </div>
        </div>
      </section>

      {/* Top Destinations Section */}
      <section className="bg-white/90 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Top Wildlife Destinations
            </h2>
            <p className="text-secondary text-lg">
              Explore Kenya's premier wildlife viewing areas with exceptional biodiversity
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {topDestinations.map((destination) => (
              <div key={destination.id} className="bg-white overflow-hidden shadow-md hover:shadow-2xl">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={destination.image} 
                    alt={destination.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute top-4 right-4 bg-button text-[var(--primary)] px-3 py-1 rounded-full flex items-center">
                    <FaStar className="mr-1 text-yellow-400" />
                    <span className='text-white'>{destination.rating}</span>
                  </div>
                  <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-white">
                    {destination.name}
                  </h3>
                </div>
                
                <div className="p-6">
                  <p className="text-secondary mb-4">{destination.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-lg mb-2">Key Highlights:</h4>
                    <div className="flex flex-wrap gap-2">
                      {destination.highlights.map((highlight, index) => (
                        <span 
                          key={index}
                          className="bg-[var(--primary)] text-white text-sm px-3 py-1 rounded-full"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <button className="bg-[var(--secondary)] text-white hover:bg-button/90 px-6 py-2 rounded-lg font-medium transition duration-300">
                    Explore {destination.name}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
{/* ------------------------- */}
     <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
            Top Safari Packages
          </h2>
          <p className="text-secondary text-lg">
            Curated experiences for unforgettable wildlife adventures
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {topPackages.map((pkg) => (
            <div 
              key={pkg.id} 
              className="overflow-hidden  hover:shadow-2xl transition-all bg-white/90 duration-300 hover:bg-white"
            >
              {/* Image at the top */}
              <div className="relative h-64 w-full">
                <img 
                  src={pkg.image} 
                  alt={pkg.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute top-4 right-4 bg-button text-white px-3 py-1 rounded-full flex items-center">
                  <FaStar className="mr-1 text-yellow-300" />
                  <span>{pkg.rating} ({pkg.reviews})</span>
                </div>
              </div>
              
              {/* Content below the image */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-primary">{pkg.title}</h3>
                  <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                    ${pkg.price.toLocaleString()}
                  </div>
                </div>
                
                <div className="flex items-center text-secondary mb-4">
                  <FaCalendarAlt className="mr-2" />
                  <span>{pkg.duration}</span>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-medium mb-2 flex items-center text-primary">
                    <FaMapMarkerAlt className="mr-2" />
                    Destinations:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {pkg.destinations.map((dest, index) => (
                      <span 
                        key={index}
                        className="bg-gray-800 text-white text-sm px-3 py-1 rounded-lg"
                      >
                        {dest}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-medium mb-2 text-button">
                    Experience Highlights:
                  </h4>
                  <ul className="text-secondary">
                    {pkg.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-start mb-1">
                        <span className="text-button mr-2">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <button className="w-full bg-[var(--primary)] text-white hover:bg-button/90 py-3 rounded-md font-medium transition duration-300">
                  Book This Package
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

      {/* CTA Section */}
      <section className="bg-[var(--secondary)] py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready for Your Kenyan Adventure?
          </h2>
          <p className="text-[var(--primary)]/90 text-xl mb-8 max-w-3xl mx-auto">
            Our safari experts will craft your perfect itinerary with 24/7 support
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[var(--primary)] text-white hover:bg-[var(--primary)]/90 px-10 py-4 rounded-lg font-bold text-lg shadow-lg transition duration-300">
              Plan Your Safari
            </button>
            <button className="bg-transparent border-2 border-white text-gray-100 hover:bg-[var(--primary)]/10 px-10 py-4 rounded-lg font-bold text-lg transition duration-300">
              Contact Our Experts
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default KenyaWildlifePage;