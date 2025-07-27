// export default function footer(){
//     return(
//         <>
//                     {/* <!-- Footer --> */}
//             <footer className="bg-[var(--primary)] text-white p-6 mt-12 ">
//                 <div className="flex flex-col md:flex-row justify-between mx-auto max-w-7xl">
//                 <div>
//                     <h4 className="font-bold">Quick Links</h4>
//                     <ul>
//                     <li><a href="#" className="text-sm">Home</a></li>
//                     <li><a href="#" className="text-sm">Contact</a></li>
//                     <li><a href="#" className="text-sm">Privacy Policy</a></li>
//                     </ul>
//                 </div>
//                 <div>
//                     <h4 className="font-bold">Contact Us</h4>
//                     <p className="text-sm">Nairobi, Kenya</p>
//                     <p className="text-sm">info@viagensafricasafaris.com</p>
//                 </div>
//                 <div>
//                     <h4 className="font-bold">Follow Us</h4>
//                     <div className="space-x-2">
//                     <a href="#" className="text-sm">Facebook</a>
//                     <a href="#" className="text-sm">Instagram</a>
//                     </div>
//                 </div>
//                 </div>
//             </footer>
//         </>
//     )
// }
import Logo from '../assets/logo.png';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[var(--primary)] text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <img 
              src={Logo} 
              alt="Safari Africa Logo" 
              className="h-12 md:h-16 object-cover bg-white p-5 rounded-xl"
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
                <span>+254 115 351564 | +254 106 355764 </span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="text-[#c2a75c] mr-3" />
                <span>info@viagensafricasafaris.com</span>
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