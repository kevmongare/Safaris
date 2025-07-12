
import './App.css'
import savanah from './assets/savannah-landscape-in-the-national-park-of-kenya-P56CU7Y-1.jpg'
import desert from './assets/Nyiri-desert.webp'
import wildlife from './assets/wildlife.jpg'
import Logo from './assets/logo.png'


function App() {
  

  return (
    <>
       {/* <!-- Header --> */}
  <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md shadow-md">
        <div className="px-5 md:px-20 py-4 flex justify-between items-center">
          <img src={Logo} alt="" className="md:h-15 h-10 mr-5" />

          <nav className=" hidden md:flex absolute top-16 left-0 w-full bg-blue-950  md:bg-transparent md:static  md:space-x-6 md:items-center md:w-auto py-3 px-3 space-x-4"
          id='menu'>
            <a href="#" className="md:text-gray-900  text-white hover:text-[var(--primary)]">Destinations</a>
            <a href="#Overview" className="md:text-gray-900  text-white hover:text-[var(--primary)]">Holiday Styles</a>
            <a href="#" className="md:text-gray-900  text-white hover:text-[var(--primary)]">Excursions</a>
            <a href="#services" className="md:text-gray-900  text-white hover:text-[var(--primary)]">Services</a>
            <a href="#Aboutus" className="md:text-gray-900  text-white hover:text-[var(--primary)]">Blog</a>
            <a href="#contact" className="md:text-gray-900  text-white hover:text-[var(--primary)]">About Us</a>
            <a href="#contact" className="md:text-gray-900  text-white hover:text-[var(--primary)]">Contact Us</a>
            <a
              href="#"
              className="hidden md:block bg-[var(--primary)] hover:bg-[var(--primary)] text-white py-2 px-4 rounded-md text-sm font-medium"
            >
              View Packages
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="border border-[var(--primary)] rounded-full py-1 px-4 hover:bg-[var(--primary)] hover:text-white"
            id='menu-btn'>
              Menu
            </button>
          </div>
        </div>
      </header>



  {/* <!-- Hero Section --> */}
  <section className="h-screen bg-cover bg-center hero-bg flex items-center justify-center text-white text-center" >
    <div className="bg-black/60 bg-opacity-50 p-6 rounded">
      <h2 className="text-4xl font-bold mb-4">Your African Safari Adventure Starts Here</h2>
      <div className="space-x-4">
        <button className="bg-yellow-600 px-4 py-2 rounded">Our Packages</button>
        <button className="bg-transparent border border-white px-4 py-2 rounded">Contact Agent</button>
      </div>
    </div>
  </section>
  {/* other */}
  <section className="bg-gray-100 p-10 md:flex md:space-x-8">
  {/* <!-- Left Text Block --> */}
  <div className="md:w-1/3">
    <h2 className="text-4xl font-bold text-[var(--primary)] leading-tight mb-4">
      Welcome to <br />Viagens Africa Safaris
    </h2>
    <div className="w-10 h-1 bg-[var(--primary)] mb-4"></div>
    <p className="mb-4">
      Embark on an unforgettable journey across Africa with <strong className='text-[var(--primary)]'>Viagens Africa Safaris</strong> — your trusted partner in tailor-made luxury adventures. Whether you're dreaming of witnessing the Great Migration in Kenya, lounging in world-class safari lodges, or exploring hidden gems off the beaten path, we craft every safari with care, comfort, and authenticity.

Our seasoned East African travel experts bring years of on-the-ground experience to ensure you enjoy a seamless, safe, and immersive experience. From the moment you arrive, expect personalized service, breathtaking wildlife encounters, and access to Africa's most iconic and exclusive destinations.

Let us turn your African dream into a once-in-a-lifetime memory. Experience the wild, the wonder, and the warm welcome of Africa — with <strong className='text-[var(--primary)]'>Viagens Africa Safaris</strong>.

</p>
    <button className="mt-4 px-6 py-2 border-2 border-[#5c5c3d] text-[var(--primary)] hover:bg-[var(--primary)] hover:text-white transition">
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

  {/* about */}
  <section className="bg-[#fdfbf7] py-24 px-6 md:px-16 flex flex-col md:flex-row items-center justify-between min-h-[60vh]">
  {/* <!-- Left Column --> */}
  <div className="md:w-1/2 mb-10 md:mb-0">
    <h1 className="text-5xl md:text-6xl font-extrabold text-[var(--primary)] leading-tight">
      Experience the <br /> Extraordinary
    </h1>
  </div>

  {/* <!-- Right Column --> */}
  <div className="md:w-1/2 max-w-7xl">
    <p className="text-lg text-gray-800 mb-8">
      A journey with Viagens Africa Safaris is a journey through exceptional adventure destinations in some of the most beautiful natural settings in Africa. Travelling with Viagens Africa Safaris is not only a luxury experience that promises to reawaken the soul, but an incredible encounter that captures the imagination of discerning travellers of all ages.
    </p>
    <button className="px-6 py-3 border-2 border-[var(--primary)] text-[var(--primary)] font-bold rounded-full hover:bg-[#5c5c3d] hover:text-white transition">
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
        <p className="text-sm text-gray-600">A journey through stunning Desert and dunes.</p>
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
      <button type="submit" className="bg-[var(--primary)] text-white px-4 py-2 rounded">Send Message</button>
    </form>
  </section>

  {/* <!-- Footer --> */}
  <footer className="bg-[var(--primary)] text-white p-6 mt-12">
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
