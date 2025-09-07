import Logo from '../assets/viagens logo-white.png';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[var(--primary)] bg-cover bg-fixed text-white  ">
      <div className="container mx-auto px-4 bg-gradient-to-b from-black/90 via-70% to-transparent)] pt-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <img 
              src={Logo} 
              alt="Safari Africa Logo" 
              className="h-14 md:h-20 object-cover  p-5 rounded-xl"
            />
          
            <p className="mb-4 text-gray-300">
              Creating unforgettable African experiences while promoting sustainable tourism and conservation.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-[#c2a75c]">
                <FaFacebookF />
              </a>
              <a href="#" className="text-gray-300 hover:text-[#c2a75c]">
                <FaTwitter />
              </a>
              <a href="#" className="text-gray-300 hover:text-[#c2a75c]">
                <FaInstagram />
              </a>
              <a href="#" className="text-gray-300 hover:text-[#c2a75c]">
                <FaYoutube />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Destinations</h3>
            <ul className="space-y-2">
              {["Kenya", "Tanzania", "Uganda", "Rwanda"].map((dest, idx) => (
                <li key={idx}>
                  <a href="#" className="text-gray-300 hover:text-[#c2a75c]">
                    {dest} Safaris
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["About Us", "Safari Packages", "Travel Tips", "Testimonials", "Contact"].map((link, idx) => (
                <li key={idx}>
                  <a href="#" className="text-gray-300 hover:text-[#c2a75c]">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FaMapMarkerAlt className="text-[#c2a75c] mt-1 mr-3" />
                <span>123 Safari Road, Nairobi, Kenya</span>
              </li>
              <li className="flex items-center">
                <FaPhone className="text-[#c2a75c] mr-3" />
                <span>+254 712 345 678</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="text-[#c2a75c] mr-3" />
                <span>info@safariafrica.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-500 pt-6 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Viagens Africa Safaris. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;