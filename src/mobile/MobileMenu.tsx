import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.png';

interface MobileMenuProps {
  onClose: () => void;
}

// Helper function to generate slugs
const generateSlug = (name: string) => {
  return name.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');
};

const MobileMenu: React.FC<MobileMenuProps> = ({ onClose }) => {
  // Country data with places
  const countries = [
    {
      name: "Kenya",
      slug: "kenya",
      places: [
                    { name: "Masai Mara", slug: "masaimara" },
                    { name: "Meru National Park", slug: "merunationalPark" }, 
                    { name: "Lake Nakuru", slug: "lakenakuru" },
                    { name: "Tsavo West", slug: "tsavowest" }, 
                     { name: "Tsavo East", slug: "tsavoeast" }, 
                    { name: "Amboseli", slug: "AmboseliNatioinalPark" },
                    { name: "Nairobi National Park", slug: "NairobiNP" },
                    { name: "Lake Naivasha", slug: "lakenaivasha" },
                    { name: "Aberdare National Park", slug: "aberdarenationalpark" },
                    { name: "Samburu National Park", slug: "AmboseliNatioinalPark" }
                    ]  
    },
    {
      name: "Tanzania",
      slug: "tanzania",
      places: [
                    { name: "Serengeti", slug: "serengeti" }, 
                    { name: "Ngorongoro", slug: "ngorongoro-crater" }, 
                    { name: "Gombe Stream", slug: "gombestream" }, 
                    { name: "Tarangire National Park", slug: "lTarangire-National-Park" },
                    { name: "Selous Game Reserve", slug: "Selous-Game-Reserve" },
                    { name: "Mahale Mountains", slug: "Mahale-Mountains" }, 
                    { name: "Lake Manyara", slug: "Lake-Manyara" },
                    { name: "Ruaha National Park", slug: "Ruaha-National-Park" },   
                  ] 
    },
    {
      name: "Uganda",
      slug: "uganda",
      places: [
                    { name: "Murchison Falls National Park", slug: "bwindi-impenetrable-forest" }, 
                    { name: "Kibale Forest National Park", slug: "kibale-national-park" }, 
                    { name: "Semliki National Park", slug: "murchison-falls" }, 
                    { name: "Queen Elizabeth National Park", slug: "queen-elizabeth-national-park" },
                    { name: "Lake Mburo", slug: "murchison-falls" }, 
                    { name: "Kidepo Valley National Park", slug: "murchison-falls" }, 
                    { name: "Bwindi Impenetrable Forest", slug: "murchison-falls" }, 
                    { name: "Mgahinga Gorilla National Park", slug: "murchison-falls" }, 


                  ] 
    },
    {
      name: "Rwanda",
      slug: "rwanda",
      places: [
                    { name: "Volcanoes National Park", slug: "volcanoes-national-park" }, 
                    { name: "Lake Kivu", slug: "nyungwe-forest" }, 
                    { name: "Akagera National Park", slug: "akagera-national-park" }, 
                    { name: "Nyungwe Forest National Park", slug: "kigali" }
                  ] 
    }
  ];

  // Travel styles data
  const travelStyles = {
    items:[
                { title: "Wildlife Safaris", slug: "bush-lodges" },
                { title: "Family Holidays", slug: "bush-lodges" },
                { title: "Adventure Expeditions", slug: "TravelStyleExpeditions" },   
                { title: "Bush & Beach Safaris", slug: "treehouses" },
                { title: "Budget Safaris", slug: "eco-lodges" },
                { title: "Outbound Holidays", slug: "mobile-camps" }
    ]
            };

  // Navigation items
  const navItems = ["Experiences", "Offers", "Blog", "About"];

  return (
    <div className="md:hidden fixed inset-0 bg-white z-50 overflow-y-auto text-gray-700">
      <div className="container mx-auto px-4 py-5">
        
        <div className="flex justify-between py-4 shaddow-sm">
          <Link to="/">
            <img 
              src={Logo} 
              alt="Safari Africa Logo" 
              className="h-12 md:h-16 object-cover"
            />
            </Link>
          <button 
            onClick={onClose}
            className="text-3xl text-[#c2a75c] hover:text-[#a99252] transition"
            aria-label="Close menu"
          >
            ✕
          </button>
        </div>
        
        <div className="space-y-6">
          {/* Destinations Section */}
          <div className="border-b pb-4">
            <Link
            to="/destination">
            <h3 className="text-lg font-bold mb-4">Destinations</h3>
            </Link>
            <div className="grid grid-cols-2 gap-4">
              {countries.map((country, idx) => (
                <div key={idx}>
                  <Link 
                    to={`/${country.slug}`} 
                    className="text-[#c2a75c] font-medium mb-2 block hover:underline"
                    onClick={onClose}
                  >
                    {country.name}
                  </Link>
                  <ul className="space-y-1 text-sm">
                    {country.places.map((place, placeIdx) => (
                      <li key={placeIdx}>
                        <Link 
                         to={`/${place.slug}`}
                          className="hover:text-[#c2a75c] block py-1"
                          onClick={onClose}
                        >
                          {/* <Link 
                                                    to={`/${place.slug}`}  // Using anchor links
                                                    className="hover:text-[#c2a75c] block"
                                                  >
                                                    {place.name}
                                                  </Link> */}
                          {place.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Travel Styles Section */}
          <div className="border-b pb-4">
            <h3 className="text-lg font-bold mb-3">Travel Styles</h3>
            <ul className="grid grid-cols-2 gap-2">
              {travelStyles.items.map((style, idx) => (
                <li key={idx}>
                  <Link 
                    to={`/${generateSlug(style.slug)}`}
                    className="hover:text-[#c2a75c] block py-2"
                    onClick={onClose}
                  >
                    {style.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col space-y-4">
            {navItems.map((item, idx) => (
              <Link 
                key={idx} 
                to={`/${generateSlug(item)}`}
                className="text-lg font-medium hover:text-[#c2a75c] py-2"
                onClick={onClose}
              >
                {item}
              </Link>
            ))}
          </div>

          {/* Enquire Button */}
          <Link 
            to="/enquire"
            className="block bg-[#c2a75c] text-white py-3 px-6 rounded-full text-center hover:bg-[#a99252] transition"
            onClick={onClose}
          >
            Enquire
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;