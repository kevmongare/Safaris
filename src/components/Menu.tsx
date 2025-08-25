import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../assets/viagens logo-color.png';
import WhiteLogo from '../assets/viagens logo-white.png'
import DropdownMenu from '../mobile/DropdownMenu';
import MobileMenu from '../mobile/MobileMenu';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const navigate = useNavigate(); 

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent text-white py-4'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/">
            <img 
              src={scrolled?Logo:WhiteLogo} 
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
                    { name: "Masai Mara", slug: "masaimara" },
                    { name: "Nairobi NP", slug: "nairobi-national-park" }, 
                    { name: "Diani Beach", slug: "diani-beach" },
                    { name: "Lake Nakuru", slug: "lake-nakuru" }, 
                    { name: "Mt. Kenya", slug: "mount-kenya" }
                    ] 
                },
                { 
                  country: "Tanzania", 
                  countrySlug: "tanzania", 
                  places: [
                    { name: "Serengeti", slug: "serengeti" }, 
                    { name: "Ngorongoro", slug: "ngorongoro-crater" }, 
                    { name: "Zanzibar", slug: "zanzibar" }, 
                    { name: "Arusha", slug: "arusha" }, 
                    { name: "Lake Manyara", slug: "lake-manyara" }
                  ] 
                },
                { 
                  country: "Uganda", 
                  countrySlug: "uganda", 
                  places: [
                    { name: "Bwindi Forest", slug: "bwindi-impenetrable-forest" }, 
                    { name: "Kibale NP", slug: "kibale-national-park" }, 
                    { name: "Murchison Falls", slug: "murchison-falls" }, 
                    { name: "Queen Elizabeth NP", slug: "queen-elizabeth-national-park" }
                  ] 
                },
                { 
                  country: "Rwanda", 
                  countrySlug: "rwanda", 
                  places: [
                    { name: "Volcanoes NP", slug: "volcanoes-national-park" }, 
                    { name: "Nyungwe Forest", slug: "nyungwe-forest" }, 
                    { name: "Akagera NP", slug: "akagera-national-park" }, 
                    { name: "Kigali City", slug: "kigali" }
                  ] 
                }
              ]}
            />
            
            <DropdownMenu 
            
              title="Travel Styles" 
              items={[
                { title: "Adventure Expeditions", slug: "TravelStyleExpeditions" },
                { title: "Family Holidays", slug: "bush-lodges" },
                { title: "Wildlife Safaris", slug: "treehouses" },
                { title: "Budget Safaris", slug: "eco-lodges" },
                { title: "Tribal Expeditions", slug: "mobile-camps" }
              ]}
              compact
            />
            <Link
            to ='/Experiences'>
            <a href="#experiences" className="text-lg font-medium hover:text-[#c2a75c] transition">Experiences</a>
            </Link>
            {/* <Link
            to ='/offers'>
            <a href="#offers" className="text-lg font-medium hover:text-[#c2a75c] transition">Offers</a>
            </Link>
            <Link
            to = '/blog'>
            <a href="#blog" className="text-lg font-medium hover:text-[#c2a75c] transition">Blog</a>
            </Link> */}
            <Link
            to = '/about'>
            <a href="#about" className="text-lg font-medium hover:text-[#c2a75c] transition">About</a>
            </Link>
            
          </nav>
          <button 
              onClick={() => navigate('/enquire')}
              className={`hidden md:block   py-2 px-6 rounded-5 hover:bg-[#a99252] transition ${
      scrolled ? 'bg-[#c2a75c] text-white' : 'bg-transparent text-white border-2 border-[#a99252] rounded-full'
    }`}>

              Enquire
            </button>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-2xl text-[#c2a75c] z-50"
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