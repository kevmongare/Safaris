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
                    { name: "Nairobi NP", slug: "nairobi-national-park" }, 
                    { name: "Diani Beach", slug: "diani-beach" },
                    { name: "Lake Nakuru", slug: "lake-nakuru" }, 
                    { name: "Mt. Kenya", slug: "mount-kenya" }
                    ] 
    },
    {
      name: "Tanzania",
      slug: "tanzania",
      places: [
                    { name: "Serengeti", slug: "serengeti" }, 
                    { name: "Ngorongoro", slug: "ngorongoro-crater" }, 
                    { name: "Zanzibar", slug: "zanzibar" }, 
                    { name: "Arusha", slug: "arusha" }, 
                    { name: "Lake Manyara", slug: "lake-manyara" }
                  ] 
    },
    {
      name: "Uganda",
      slug: "uganda",
      places: [
                    { name: "Bwindi Forest", slug: "bwindi-impenetrable-forest" }, 
                    { name: "Kibale NP", slug: "kibale-national-park" }, 
                    { name: "Murchison Falls", slug: "murchison-falls" }, 
                    { name: "Queen Elizabeth NP", slug: "queen-elizabeth-national-park" }
                  ] 
    },
    {
      name: "Rwanda",
      slug: "rwanda",
      places: [
                    { name: "Volcanoes NP", slug: "volcanoes-national-park" }, 
                    { name: "Nyungwe Forest", slug: "nyungwe-forest" }, 
                    { name: "Akagera NP", slug: "akagera-national-park" }, 
                    { name: "Kigali City", slug: "kigali" }
                  ] 
    }
  ];

  // Travel styles data
  const travelStyles = [
    "Luxury Camps", 
    "Bush Lodges", 
    "Treehouses", 
    "Eco Lodges", 
    "Mobile Camps"
  ];

  // Navigation items
  const navItems = ["Experiences", "Offers", "Blog", "About"];

  return (
    <div className="md:hidden fixed inset-0 bg-white z-40 overflow-y-auto">
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
              {travelStyles.map((style, idx) => (
                <li key={idx}>
                  <Link 
                    to={`/travel-styles/${generateSlug(style)}`}
                    className="hover:text-[#c2a75c] block py-2"
                    onClick={onClose}
                  >
                    {style}
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