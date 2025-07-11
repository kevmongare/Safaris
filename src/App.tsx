
import './App.css'
import savanah from './assets/savannah-landscape-in-the-national-park-of-kenya-P56CU7Y-1.jpg'
import desert from './assets/Nyiri-desert.webp'
import wildlife from './assets/wildlife.jpg'


function App() {
  

  return (
    <>
       {/* <!-- Header --> */}
  <header className="flex justify-between items-center p-6 shadow-md sticky top-0 bg-white z-50">
    <h1 className="text-xl font-bold">Viagens Africa</h1>
    <nav className="space-x-4 hidden md:block">
      <a href="#destinations" className="hover:text-yellow-600">Destinations</a>
      <a href="#about" className="hover:text-yellow-600">About</a>
      <a href="#packages" className="hover:text-yellow-600">Packages</a>
      <a href="#gallery" className="hover:text-yellow-600">Gallery</a>
      <a href="#blog" className="hover:text-yellow-600">Blog</a>
      <a href="#contact" className="hover:text-yellow-600">Contact</a>
    </nav>
    <div className="space-x-2">
      <button className="text-sm">EN/PT</button>
      <button className="bg-yellow-600 text-white px-4 py-2 rounded">Book Now</button>
    </div>
  </header>

{/* other */}
<section className="bg-gray-100 p-10 md:flex md:space-x-8">
  {/* <!-- Left Text Block --> */}
  <div className="md:w-1/3">
    <h2 className="text-4xl font-bold text-[#5c5c3d] leading-tight mb-4">
      Welcome to <br />Safari Partners Africa
    </h2>
    <div className="w-10 h-1 bg-[#5c5c3d] mb-4"></div>
    <p className="mb-4">
      <strong>Safari Partners</strong> is a specialty <strong>African Safari</strong> company
      that specializes in <strong>Tailormade Africa Luxury Safaris</strong>.
      We take you to top wildlife destinations while giving you access to exclusive luxury camps and lodges as you explore Africa. 
      Our tour consultants have immense Safari experience within the East African region, thus we guarantee you an exclusive experience and value for your money.
    </p>
    <button className="mt-4 px-6 py-2 border-2 border-[#5c5c3d] text-[#5c5c3d] hover:bg-[#5c5c3d] hover:text-white transition">
      READ MORE
    </button>
  </div>

  {/* <!-- Right Image Cards --> */}
  <div className="md:w-2/3 mt-8 md:mt-0 grid grid-cols-1 sm:grid-cols-3 gap-4">
    <div className="relative">
      <img src={desert} alt="Adventure Expeditions" className="w-full h-full object-cover" />
      <p className="absolute bottom-4 left-4 text-white text-lg font-medium">Adventure Expeditions</p>
    </div>
    <div className="relative">
      <img src={savanah} alt="Family Holidays" className="w-full h-full object-cover" />
      <p className="absolute bottom-4 left-4 text-white text-lg font-medium">Family Holidays</p>
    </div>
    <div className="relative">
      <img src={wildlife} alt="Tribal Expeditions" className="w-full h-full object-cover" />
      <p className="absolute bottom-4 left-4 text-white text-lg font-medium">Tribal Expeditions</p>
    </div>
  </div>
</section>
  {/* <!-- Hero Section --> */}
  <section className="h-screen bg-cover bg-center hero-bg flex items-center justify-center text-white text-center" >
    <div className="bg-black/60 bg-opacity-50 p-6 rounded">
      <h2 className="text-4xl font-bold mb-4">Your African Safari Adventure Starts Here</h2>
      <div className="space-x-4">
        <button className="bg-yellow-600 px-4 py-2 rounded">View Packages</button>
        <button className="bg-transparent border border-white px-4 py-2 rounded">Contact Agent</button>
      </div>
    </div>
  </section>

  {/* about */}
  <section className="bg-[#fdfbf7] py-24 px-6 md:px-16 flex flex-col md:flex-row items-center justify-between min-h-screen">
  {/* <!-- Left Column --> */}
  <div className="md:w-1/2 mb-10 md:mb-0">
    <h1 className="text-5xl md:text-6xl font-extrabold text-[#5c5c3d] leading-tight">
      Experience the <br /> Extraordinary
    </h1>
  </div>

  {/* <!-- Right Column --> */}
  <div className="md:w-1/2 max-w-xl">
    <p className="text-lg text-gray-800 mb-8">
      A journey with Afrika Milele is a journey through exceptional adventure destinations in some of the most beautiful natural settings in Africa. Travelling with Afrika Milele is not only a luxury experience that promises to reawaken the soul, but an incredible encounter that captures the imagination of discerning travellers of all ages.
    </p>
    <button className="px-6 py-3 border-2 border-[#5c5c3d] text-[#5c5c3d] font-bold rounded-full hover:bg-[#5c5c3d] hover:text-white transition">
      Explore
    </button>
  </div>
</section>

  {/* <!-- Featured Tours --> */}
  <section className="p-8" id="packages">
    <h3 className="text-2xl font-bold mb-6 text-center">Featured Tours</h3>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="border rounded p-4">
        <img src={savanah} alt="Tour 1" className="mb-4 rounded"/>
        <h4 className="text-lg font-bold">Savannah Adventure</h4>
        <p className="text-sm text-gray-600">Explore the heart of Kenya's wildlife.</p>
      </div>
      <div className="border rounded p-4">
        <img src={desert} alt="Tour 2" className="mb-4 rounded"/>
        <h4 className="text-lg font-bold">Desert & Dunes</h4>
        <p className="text-sm text-gray-600">A journey through Namibia's stunning dunes.</p>
      </div>
      <div className="border rounded p-4">
        <img src={wildlife} alt="Tour 3" className="mb-4 rounded"/>
        <h4 className="text-lg font-bold">Wildlife Wonders</h4>
        <p className="text-sm text-gray-600">Get close to the Big Five in Tanzania.</p>
      </div>
    </div>
  </section>

  {/* <!-- Gallery Section --> */}
  {/* <section className="p-8 bg-gray-50" id="gallery">
    <h3 className="text-2xl font-bold mb-6 text-center">Gallery</h3>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      <img src="https://source.unsplash.com/400x300/?safari,tour1" alt="Gallery Image" className="rounded"/>
      <img src="https://source.unsplash.com/400x300/?safari,tour2" alt="Gallery Image" className="rounded"/>
      <img src="https://source.unsplash.com/400x300/?safari,tour3" alt="Gallery Image" className="rounded"/>
      <img src="https://source.unsplash.com/400x300/?safari,tour4" alt="Gallery Image" className="rounded"/>
      <img src="https://source.unsplash.com/400x300/?safari,tour5" alt="Gallery Image" className="rounded"/>
      <img src="https://source.unsplash.com/400x300/?safari,tour6" alt="Gallery Image" className="rounded"/>
    </div>
  </section> */}

  {/* <!-- Blog Section --> */}
  <section className="p-8" id="blog">
    <h3 className="text-2xl font-bold mb-6 text-center">Travel Blog</h3>
    <div className="grid md:grid-cols-3 gap-6">
      <div className="border p-4 rounded">
        <h4 className="font-bold text-lg">Tips for First-Time Safari Travelers</h4>
        <p className="text-sm text-gray-600">What to pack, expect, and prepare for your first African safari adventure.</p>
      </div>
      <div className="border p-4 rounded">
        <h4 className="font-bold text-lg">Top 5 National Parks in Kenya</h4>
        <p className="text-sm text-gray-600">A quick guide to Kenya's most scenic and wildlife-rich national parks.</p>
      </div>
      <div className="border p-4 rounded">
        <h4 className="font-bold text-lg">Cultural Highlights of a Safari Tour</h4>
        <p className="text-sm text-gray-600">Immerse yourself in the rich culture and traditions of East Africa.</p>
      </div>
    </div>
  </section>

  {/* <!-- Contact Section --> */}
  <section className="p-8 bg-gray-100" id="contact">
    <h3 className="text-2xl font-bold mb-6 text-center">Contact Us</h3>
    <form className="max-w-xl mx-auto space-y-4">
      <input type="text" placeholder="Your Name" className="w-full border p-2 rounded" />
      <input type="email" placeholder="Your Email" className="w-full border p-2 rounded" />
      <textarea placeholder="Your Message" className="w-full border p-2 rounded h-32"></textarea>
      <button type="submit" className="bg-yellow-600 text-white px-4 py-2 rounded">Send Message</button>
    </form>
  </section>

  {/* <!-- Footer --> */}
  <footer className="bg-black text-white p-6 mt-12">
    <div className="flex flex-col md:flex-row justify-between">
      <div>
        <h4 className="font-bold">Quick Links</h4>
        <ul>
          <li><a href="#" className="text-sm">Home</a></li>
          <li><a href="#" className="text-sm">Contact</a></li>
          <li><a href="#" className="text-sm">Privacy Policy</a></li>
        </ul>
      </div>
      <div>
        <h4 className="font-bold">Contact Us</h4>
        <p className="text-sm">Nairobi, Kenya</p>
        <p className="text-sm">info@viagensafricasafaris.com</p>
      </div>
      <div>
        <h4 className="font-bold">Follow Us</h4>
        <div className="space-x-2">
          <a href="#" className="text-sm">Facebook</a>
          <a href="#" className="text-sm">Instagram</a>
        </div>
      </div>
    </div>
  </footer>
    </>
  )
}

export default App
