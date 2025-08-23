import React from 'react';
import { Link } from 'react-router-dom';
import EastAfrica from '../assets/Map-of-East-Africa-showing-those-sites-that-are-most-important-for-the-conservation-of_Q320.jpg';
import Lodge from '../assets/villa-2-beautiful-bedouin.jpg';
interface PlaceItem {
  name: string;
  slug: string;
  
}
interface DropdownItem {
  country?: string;
  title?: string;
  countrySlug?: string;
  places?: PlaceItem[];
  slug?: string;

  
}

interface DropdownMenuProps {
  title: string;
  items: DropdownItem[];
  compact?: boolean;
}

// Helper function to generate slug from place name
// const generateSlug = (name: string) => {
//   return name.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');
// };

const DropdownMenu: React.FC<DropdownMenuProps> = ({ title, items, compact = false }) => {
  return (
    <div className="group relative z-50">
      <button className="flex items-center text-lg font-medium hover:text-[#c2a75c] transition">
        {title} <span className="ml-1">▾</span>
      </button>
      <div className={`absolute pt-10 top-full left-0 hidden group-hover:flex bg-white/90 shadow-2xl p-6 ${
        compact ? 'w-[400px]' : 'w-[800px]'
      } justify-between z-50`}>
        {compact ? (
          <>
            <ul className="space-y-2 ">
              {items.map((item, idx) => (
                <li key={idx}
                className='w-40'>
                  <Link
                  to={`/${item.slug}`} >
                  <a href="#" className="text-gray-700 text-sm hover:text-[#c2a75c]">
                    {item.title}
                  </a>
                  </Link>
                </li>
              ))}
            </ul>
            <div className="ml-6">
              <h4 className="text-sm text-gray-600 mb-2">DISCOVER</h4>
              <img 
                src={Lodge} 
                alt="Luxury Lodge" 
                className="rounded-lg w-48 h-32 object-cover mb-2"
              />
              <button className="text-sm border border-[#c2a75c] text-[#c2a75c] px-3 py-1 rounded hover:bg-[#c2a75c] hover:text-white transition">
                Learn More
              </button>
            </div>
          </>
        ) 
        : (
          <>
            {items.map((item, idx) => (
              <div key={idx} className="space-y-2">
                {/* Country Link */}
                {item.country && item.countrySlug ? (
                  <Link 
                    to={`/${item.countrySlug}`}  // Changed to match route
                    className="text-[#3a3a2c] font-bold mb-2 hover:text-[#c2a75c] block"
                  >
                    {item.country}
                  </Link>
                ) 
                : 
                (
                  <h4 className="text-[#3a3a2c] font-bold mb-2">{item.country}</h4>
                )}
                
                {/* Destinations List */}
                <ul className="text-sm text-gray-700 space-y-1">
                  {item.places?.map((place, pIdx) => (
                    <li key={pIdx}>
                      {item.countrySlug ? (
                        <Link 
                          to={`/${place.slug}`}  // Using anchor links
                          className="hover:text-[#c2a75c] block"
                        >
                          {place.name}
                        </Link>
                      ) : (
                        <a href="#" className="hover:text-[#c2a75c]">
                          {place.name}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>

              </div>
            ))}
            <div className="ml-6">
              <h4 className="text-sm text-gray-600 mb-2">DISCOVER</h4>
              
              <img 
                src={EastAfrica} 
                alt="Safari Landscape" 
                className=" w-48 h-32 object-cover mb-2"
              />
              
              <Link 
              to="/offers">
              <button className="text-sm border border-[#c2a75c] text-[#c2a75c] px-3 py-1 rounded hover:bg-[#c2a75c] hover:text-white transition">
                Learn More
              </button>
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default DropdownMenu;