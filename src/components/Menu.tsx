import Logo from '../assets/logo.png'
import { useState, useEffect } from 'react';
import savanah from '../assets/savannah-landscape-in-the-national-park-of-kenya-P56CU7Y-1.jpg'
import Lodge from '../assets/villa-2-beautiful-bedouin.jpg'
export default function Menu(){
    // menu
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

    return(
        <>
        <header
              className={`fixed top-0 left-0 w-full z-50  transition-all duration-300 ${
                scrolled ? 'bg-white shadow-md text-[#3a3a2c]' : 'bg-white shadow-md text-[#3a3a2c]'
              }`}
            >
               <div className="px-5 md:px-20 py-4 flex justify-between items-center">
          <img src={Logo} alt="Logo" className="rounded-full md:h-16 h-10 mr-5" />
        
          {/* Main Navigation */}
          <nav className="hidden md:flex absolute top-16 left-0 w-full bg-white md:bg-transparent md:static md:items-center md:w-auto py-3 px-3 font-['Playfair Display']">
            
            {/* DESTINATIONS */}
                <div className="group relative">
                  <a href="#" className="px-4 text-lg hover:text-[var(--primary)] transition">Destinations ▾</a>
                  <div className="absolute top-full left-0 hidden group-hover:flex bg-white shadow-2xl p-8 w-[800px] justify-between z-50">
                    {/* Kenya */}
                    <div className="space-y-2">
                      <h4 className="text-[var(--secondary)] mb-2">Kenya</h4>
                      <ul className="text-sm text-gray-700 font-light space-y-1">
                        <li><a href="#" className="hover:text-[var(--primary)]">Masai Mara</a></li>
                        <li><a href="#" className="hover:text-[var(--primary)]">Nairobi National Park</a></li>
                        <li><a href="#" className="hover:text-[var(--primary)]">Diani Beach</a></li>
                        <li><a href="#" className="hover:text-[var(--primary)]">Lake Nakuru</a></li>
                        <li><a href="#" className="hover:text-[var(--primary)]">Mt. Kenya</a></li>
                      </ul>
                    </div>
        
                    {/* Tanzania */}
                    <div className="space-y-2">
                      <h4 className="text-[var(--secondary)] mb-2">Tanzania</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li><a href="#" className="hover:text-[var(--primary)]">Serengeti</a></li>
                        <li><a href="#" className="hover:text-[var(--primary)]">Ngorongoro Crater</a></li>
                        <li><a href="#" className="hover:text-[var(--primary)]">Zanzibar</a></li>
                        <li><a href="#" className="hover:text-[var(--primary)]">Arusha</a></li>
                        <li><a href="#" className="hover:text-[var(--primary)]">Lake Manyara</a></li>
                      </ul>
                    </div>
        
                    {/* Uganda */}
                    <div className="space-y-2">
                      <h4 className="text-[var(--secondary)] mb-2">Uganda</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li><a href="#" className="hover:text-[var(--primary)]">Bwindi Forest</a></li>
                        <li><a href="#" className="hover:text-[var(--primary)]">Kibale NP</a></li>
                        <li><a href="#" className="hover:text-[var(--primary)]">Murchison Falls</a></li>
                        <li><a href="#" className="hover:text-[var(--primary)]">Queen Elizabeth NP</a></li>
                        <li><a href="#" className="hover:text-[var(--primary)]">Lake Victoria</a></li>
                      </ul>
                    </div>
        
                    {/* Highlight Card */}
                    <div className="ml-6">
                      <h4 className="text-sm text-gray-600 mb-2">DISCOVER</h4>
                      <img src={savanah} alt="Explore Kenya" className="rounded-lg h-32 object-cover mb-2" />
                      <button className="text-sm border border-[#c2a75c] text-[#c2a75c] px-3 py-1 rounded hover:bg-[#c2a75c] hover:text-white transition">
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
        
                {/* CAMP & LODGES - DROPDOWN */}
                <div className="group relative">
                  <a href="#" className="px-4 text-lg hover:text-[var(--primary)] transition">Travel Styles▾</a>
                  <div className="absolute top-full left-0 hidden group-hover:flex bg-white shadow-2xl p-8 w-[400px] justify-between z-50">
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li><a href="#" className="hover:text-[var(--primary)]">Luxury Camps</a></li>
                      <li><a href="#" className="hover:text-[var(--primary)]">Bush Lodges</a></li>
                      <li><a href="#" className="hover:text-[var(--primary)]">Treehouses</a></li>
                      <li><a href="#" className="hover:text-[var(--primary)]">Eco Lodges</a></li>
                      <li><a href="#" className="hover:text-[var(--primary)]">Mobile Camps</a></li>
                    </ul>
                    <div className="ml-6">
                      <h4 className="text-sm text-gray-600 mb-2">DISCOVER</h4>
                      <img src={Lodge} alt="Explore Kenya" className="rounded-lg h-32 object-cover mb-2" />
                      <button className="text-sm border border-[#c2a75c] text-[#c2a75c] px-3 py-1 rounded hover:bg-[#c2a75c] hover:text-white transition">
                        Learn More
                      </button>
                    </div>
                  </div>
                  
                </div>
        
                {/* EXPERIENCES - DROPDOWN */}
                <div className="group relative">
                  <a href="#" className="px-4 text-lg hover:text-[var(--primary)] transition">Experiences ▾</a>
                  <div className="absolute top-full left-0 hidden group-hover:block bg-white shadow-lg z-40 py-4 px-6">
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li><a href="#" className="hover:text-[var(--primary)]">Game Drives</a></li>
                      <li><a href="#" className="hover:text-[var(--primary)]">Balloon Safari</a></li>
                      <li><a href="#" className="hover:text-[var(--primary)]">Bird Watching</a></li>
                      <li><a href="#" className="hover:text-[var(--primary)]">Cultural Tours</a></li>
                      <li><a href="#" className="hover:text-[var(--primary)]">Walking Safari</a></li>
                    </ul>
                  </div>
                </div>
        
                {/* OFFERS */}
                <div className="group relative">
                  <a href="#" className="px-4 text-lg hover:text-[var(--primary)] transition">Offers ▾</a>
                  <div className="absolute top-full left-0 hidden group-hover:block bg-white shadow-lg z-40 py-4 px-6">
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li><a href="#" className="hover:text-[var(--primary)]">Early Bird</a></li>
                      <li><a href="#" className="hover:text-[var(--primary)]">Honeymoon</a></li>
                      <li><a href="#" className="hover:text-[var(--primary)]">Family Safari</a></li>
                      <li><a href="#" className="hover:text-[var(--primary)]">Group Discounts</a></li>
                      <li><a href="#" className="hover:text-[var(--primary)]">Weekend Getaways</a></li>
                    </ul>
                  </div>
                </div>
        
                {/* BLOG */}
                <div className="group relative">
                  <a href="#" className="px-4 text-lg hover:text-[var(--primary)] transition">Blog ▾</a>
                  <div className="absolute top-full left-0 hidden group-hover:block bg-white shadow-lg z-40 py-4 px-6">
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li><a href="#" className="hover:text-[var(--primary)]">Travel Tips</a></li>
                      <li><a href="#" className="hover:text-[var(--primary)]">Best Time to Visit</a></li>
                      <li><a href="#" className="hover:text-[var(--primary)]">Safari Checklist</a></li>
                      <li><a href="#" className="hover:text-[var(--primary)]">Photography Guide</a></li>
                      <li><a href="#" className="hover:text-[var(--primary)]">Culture & Traditions</a></li>
                    </ul>
                  </div>
                </div>
        
                {/* ABOUT */}
                <a href="#about" className="px-4 text-lg hover:text-[var(--primary)] transition">About</a>
        
                {/* ENQUIRE BUTTON */}
                <a href="#packages" className="ml-auto bg-[var(--primary)] text-white py-2 px-4 hover:opacity-90 rounded transition">
                  Enquire
                </a>
              </nav>
        
              {/* Mobile Button */}
              <div className="md:hidden">
                <button className="border border-[#c2a75c] rounded-full py-1 px-4 hover:bg-[#c2a75c] hover:text-white">
                  Menu
                </button>
              </div>
            </div>
        
              </header>
        </>
    )
}