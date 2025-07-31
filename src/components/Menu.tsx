import { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import Logo from '../assets/logo.png';
import DropdownMenu from '../mobile/DropdownMenu';
import MobileMenu from '../mobile/MobileMenu';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-md py-2' : 'bg-white shadow-md py-4'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/">
            <img 
              src={Logo} 
              alt="Safari Africa Logo" 
              className="h-12 md:h-16 object-cover"
            />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <DropdownMenu 
              title="Destinations" 
              items={[
                { 
                  country: "Kenya",
                  countrySlug: "kenya", 
                  places: [
                    "Masai Mara", 
                    "Nairobi NP", 
                    "Diani Beach",
                     "Lake Nakuru", 
                     "Mt. Kenya"] 
                },
                { 
                  country: "Tanzania", 
                  countrySlug: "tanzania", 
                  places: ["Serengeti", "Ngorongoro", "Zanzibar", "Arusha", "Lake Manyara"] 
                },
                { 
                  country: "Uganda", 
                  countrySlug: "uganda", 
                  places: ["Bwindi Forest", "Kibale NP", "Murchison Falls", "Queen Elizabeth NP"] 
                },
                { 
                  country: "Rwanda", 
                  countrySlug: "rwanda", 
                  places: ["Volcanoes NP", "Nyungwe Forest", "Akagera NP", "Kigali City"] 
                }
              ]}
            />
            
            <DropdownMenu 
              title="Travel Styles" 
              items={[
                { title: "Luxury Camps" },
                { title: "Bush Lodges" },
                { title: "Treehouses" },
                { title: "Eco Lodges" },
                { title: "Mobile Camps" }
              ]}
              compact
            />
            
            <a href="#experiences" className="text-lg font-medium hover:text-[#c2a75c] transition">Experiences</a>
            <a href="#offers" className="text-lg font-medium hover:text-[#c2a75c] transition">Offers</a>
            <a href="#blog" className="text-lg font-medium hover:text-[#c2a75c] transition">Blog</a>
            <a href="#about" className="text-lg font-medium hover:text-[#c2a75c] transition">About</a>
            
            <a 
              href="#contact" 
              className="bg-[var(--primary)] text-white py-2 px-6 rounded-5 hover:bg-[#a99252] transition"
            >
              Enquire
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-2xl"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && <MobileMenu onClose={() => setMobileMenuOpen(false)} />}
    </header>
  );
};

export default Header;