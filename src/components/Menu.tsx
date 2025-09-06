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
                    { name: "Meru National Park", slug: "merunationalPark" }, 
                    { name: "Lake Nakuru", slug: "lakenakuru" },
                    { name: "Tsavo West", slug: "tsavowest" }, 
                     { name: "Tsavo East", slug: "tsavoeast" }, 
                    { name: "Amboseli", slug: "AmboseliNatioinalPark" },
                    { name: "Nairobi National Park", slug: "NairobiNP" },
                    { name: "Lake Naivasha", slug: "lakenaivasha" },
                    { name: "Aberdare National Park", slug: "aberdarenationalpark" },
                    { name: "Samburu National Park", slug: "Samburu-National-Park" }
                    ] 
                },
                { 
                  country: "Tanzania", 
                  countrySlug: "tanzania", 
                  places: [
                    { name: "Serengeti", slug: "serengeti" }, 
                    { name: "Ngorongoro", slug: "ngorongoro-crater" }, 
                    { name: "Gombe Stream", slug: "gombestream" }, 
                    { name: "Tarangire National Park", slug: "Tarangire-National-Park" },
                    { name: "Selous Game Reserve", slug: "Selous-Game-Reserve" },
                    { name: "Mahale Mountains", slug: "Mahale-Mountains" }, 
                    { name: "Lake Manyara", slug: "Lake-Manyara" },
                    { name: "Ruaha National Park", slug: "Ruaha-National-Park" },   
                  ] 
                },
                { 
                  country: "Uganda", 
                  countrySlug: "uganda", 
                  places: [
                    { name: "Murchison Falls National Park", slug: "murchison-falls" }, 
                    { name: "Kibale Forest National Park", slug: "kibale-national-park" }, 
                    { name: "Semliki National Park", slug: "Semliki-National-Park" }, 
                    { name: "Queen Elizabeth National Park", slug: "queen-elizabeth-national-park" },
                    { name: "Lake Mburo", slug: "Lake-Mburo" }, 
                    { name: "Kidepo Valley National Park", slug: "Kidepo-Valley-National-Park" }, 
                    { name: "Bwindi Impenetrable Forest", slug: "Bwindi-Impenetrable-Forest" }, 
                    { name: "Mgahinga Gorilla National Park", slug: "Mgahinga-Gorilla-National-Park" }, 


                  ] 
                },
                { 
                  country: "Rwanda", 
                  countrySlug: "rwanda", 
                  places: [
                    { name: "Volcanoes National Park", slug: "volcanoes-national-park" }, 
                    { name: "Lake Kivu", slug: "Lake-Kivu" }, 
                    { name: "Akagera National Park", slug: "akagera-national-park" }, 
                    { name: "Nyungwe Forest National Park", slug: "Nyungwe-Forest-National-Park" }
                  ] 
                }
              ]}
            />
            
            <DropdownMenu 
            
              title="Travel Styles" 
              items={[
                { title: "Wildlife Safaris", slug: "wildlifeSafaris" },
                { title: "Family Holidays", slug: "familyHolidays" },
                { title: "Adventure Expeditions", slug: "TravelStyleExpeditions" },   
                { title: "Bush & Beach Safaris", slug: "bushAndBeachSafaris" },
                { title: "Outbound Holidays", slug: "outBoundHolidyas" }
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
      scrolled ? 'bg-[#c2a75c] text-white shadow-md' : 'bg-transparent text-white border-2 border-[#a99252] rounded-full'
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