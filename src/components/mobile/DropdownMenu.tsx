import React from 'react';
import savanah from '../../assets/savannah-landscape-in-the-national-park-of-kenya-P56CU7Y-1.jpg';
import Lodge from '../../assets/villa-2-beautiful-bedouin.jpg';

interface DropdownItem {
  country?: string;
  title?: string;
  places?: string[];
  
}

interface DropdownMenuProps {
  title: string;
  items: DropdownItem[];
  compact?: boolean;
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ title, items, compact = false }) => {
  return (
    <div className="group relative">
      <button className="flex items-center text-lg font-medium hover:text-[#c2a75c] transition">
        {title} <span className="ml-1">▾</span>
      </button>
      <div className={`absolute top-full left-0 hidden group-hover:flex bg-white shadow-2xl p-6 ${
        compact ? 'w-[400px]' : 'w-[800px]'
      } justify-between z-50`}>
        {compact ? (
          <>
            <ul className="space-y-2">
              {items.map((item, idx) => (
                <li key={idx}>
                  <a href="#" className="text-gray-700 hover:text-[#c2a75c]">
                    {item.title}
                  </a>
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
        ) : (
          <>
            {items.map((item, idx) => (
              <div key={idx} className="space-y-2">
                <h4 className="text-[#3a3a2c] font-bold mb-2">{item.country}</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  {item.places?.map((place, pIdx) => (
                    <li key={pIdx}>
                      <a href="#" className="hover:text-[#c2a75c]">
                        {place}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="ml-6">
              <h4 className="text-sm text-gray-600 mb-2">DISCOVER</h4>
              <img 
                src={savanah} 
                alt="Safari Landscape" 
                className="rounded-lg w-48 h-32 object-cover mb-2"
              />
              <button className="text-sm border border-[#c2a75c] text-[#c2a75c] px-3 py-1 rounded hover:bg-[#c2a75c] hover:text-white transition">
                Learn More
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default DropdownMenu;