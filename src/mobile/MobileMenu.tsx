import React from 'react';


interface MobileMenuProps {
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ onClose }) => {
  return (
    
    <div className="md:hidden fixed inset-0 bg-white z-40 ">
       <div className="container mx-auto px-4 pyb-8">
        <div className="space-y-6">
          <div className="border-b pb-4">
            <div className=' py-4 justify-between flex '>
              <h3 className="text-lg font-bold mb-3 ">Destinations</h3>
              <button onClick={onClose}
              className='text-2xl text-[#c2a75c]'>
                ⏏︎
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="text-[#c2a75c] font-medium mb-2">Kenya</h4>
                <ul className="space-y-1 text-sm">
                  {["Masai Mara", "Nairobi NP", "Diani Beach", "Lake Nakuru"].map((item, idx) => (
                    <li key={idx}><a href="#" className="hover:text-[#c2a75c]">{item}</a></li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-[#c2a75c] font-medium mb-2">Tanzania</h4>
                <ul className="space-y-1 text-sm">
                  {["Serengeti", "Ngorongoro", "Zanzibar", "Arusha"].map((item, idx) => (
                    <li key={idx}><a href="#" className="hover:text-[#c2a75c]">{item}</a></li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-[#c2a75c] font-medium mb-2">Uganda</h4>
                <ul className="space-y-1 text-sm">
                  {["Bwindi Forest", "Kibale NP", "Murchison Falls"].map((item, idx) => (
                    <li key={idx}><a href="#" className="hover:text-[#c2a75c]">{item}</a></li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-[#c2a75c] font-medium mb-2">Rwanda</h4>
                <ul className="space-y-1 text-sm">
                  {["Volcanoes NP", "Nyungwe Forest", "Akagera NP"].map((item, idx) => (
                    <li key={idx}><a href="#" className="hover:text-[#c2a75c]">{item}</a></li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="border-b pb-4">
            <h3 className="text-lg text-[#c2a75c] font-bold mb-3">Travel Styles</h3>
            <ul className="grid grid-cols-2 gap-2">
              {["Luxury Camps", "Bush Lodges", "Treehouses", "Eco Lodges"].map((item, idx) => (
                <li key={idx}><a href="#" className="hover:text-[#c2a75c]">{item}</a></li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col space-y-4 ">
            {["Experiences", "Offers", "Blog", "About"].map((item, idx) => (
              <a 
                key={idx} 
                href={`#${item.toLowerCase()}`} 
                className="text-lg font-medium hover:text-[#c2a75c]"
                onClick={onClose}
              >
                {item}
              </a>
            ))}
          </div>

          <a 
            href="#contact" 
            className="block bg-[#c2a75c] text-white py-3 px-6 rounded-full text-center hover:bg-[#a99252]"
            onClick={onClose}
          >
            Enquire
          </a>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;