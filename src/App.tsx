
import './App.css'
import savanah from './assets/savannah-landscape-in-the-national-park-of-kenya-P56CU7Y-1.jpg'
import desert from './assets/Nyiri-desert.webp'
import bg from './assets/villa-2-beautiful-bedouin.jpg'
import wildlife from './assets/elephant.avif'
import Cheetah from './assets/wildlife.jpg'
import Giraff from './assets/masai-mara-wildlife.jpg'
import Logo from './assets/logo.png'
import Diani from './assets/Diani-Sea-Lodge-copy.png'
// import { CheckCircleIcon } from '@heroicons/react/24/solid'


//slides
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


import 'swiper/swiper-bundle.css'; 


function App() {

  //price comparison
   const safariPackages = [
    {
      title: '4 Day Uganda Fly-in Gorilla Safari',
      image: wildlife, 
      price: 1000,
      details: [
        '1 Night in Entebbe',
        '2 Nights in Bwindi Impenetrable Forest',
        'All meals & House drinks at your Bwindi accommodation',
        'Gorilla Trekking in Bwindi Impenetrable Forest',
        'Community tour that includes a visit to a coffee farm',
        'Flight from Entebbe to Kisoro',
        'Ground transportation by 4x4 Safari Land Cruiser',
        'English speaking Driver/Guide',
        'Gorilla tracking permits',
      ],
    },
    {
      title: '3-Day All Inclusive Fly-in Gorilla Safari',
      image: Cheetah,
      price: 1340,
      details: [
        '2 nights at Nkuringo Bwindi Gorilla Lodge',
        'All meals & House drinks at your Bwindi accommodation',
        'Gorilla Trekking in Bwindi Impenetrable Forest',
        'Gorilla tracking permits',
        'Flight from Entebbe to Kisoro',
        'Ground transportation by 4x4 Safari Land Cruiser',
        'English speaking Driver/Guide',
      ],
    },
  ]
  
  //whatsapp
  const phoneNumber = "254706384510"; 
  const message = "Hello! I'm interested in your services.";

  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  //packages

  const packages = [
  {
    title: "10 Days 9 Nights China Canton Fair Package 2025",
    
    image: savanah,
  },
  {
    title: "Dubai Christmas Packages 2024",
   
    image: desert,
  },
  {
    title: "7 Days 6 Nights 2024 Thailand Christmas Holidays",
   
    image: wildlife,
  },
  {
    title: "6 Days 5 Nights Christmas In Dubai",
    
    image: Cheetah,
  },
];
  

  return (
    <>
     {/* HEADER WITH MEGA MENU DROPDOWN */}
      <header className="sticky top-0 z-50 w-full bg-[#fefcf9]/90 backdrop-blur-md shadow-md">
        <div className="px-5 md:px-20 py-4 flex justify-between items-center">
          <img src={Logo} alt="Logo" className="md:h-16 h-10 mr-5" />

          <nav className="hidden md:flex absolute top-16 left-0 w-full bg-white md:bg-transparent md:static md:items-center md:w-auto py-3 px-3 font-['Playfair Display']">
            {/* EXPERIENCES - MEGA MENU */}
            <div className="group relative">
              <a href="#" className="text-[#3a3a2c] font-semibold hover:text-[#c2a75c] px-4">Experiences ▾</a>
              <div className="absolute top-full left-0 hidden group-hover:flex bg-white shadow-2xl rounded-lg p-8 w-[900px] justify-between z-50">
                <div className="space-y-2">
                  <h4 className="text-sm font-bold text-gray-600 mb-2">EXPERIENCES</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>Beach and Bush</li>
                    <li>Exclusive Kenya Safari</li>
                    <li>Fossil Hunting</li>
                    <li>Into the Heart of Africa</li>
                    <li>Lion King Adventure</li>
                    <li>Masai Mara Migration</li>
                    <li>Photographic Safari</li>
                  </ul>
                </div>

                <div className="space-y-2">
                  <h4 className="text-sm font-bold text-gray-600 mb-2">EXPERIENCES</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>Private Guided Safaris</li>
                    <li>Reconnect to the Wilderness</li>
                    <li>Safari Teaser</li>
                    <li>Wellness & Wilderness</li>
                    <li>Week of Wild Adventure</li>
                    <li>Ultimate Giraffe Safari</li>
                    <li>Helicopter Tours</li>
                  </ul>
                </div>

                <div className="space-y-2">
                  <h4 className="text-sm font-bold text-gray-600 mb-2">HELI-TOURS</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>Cycads & Elephants</li>
                    <li>Jewels of the North</li>
                    <li>Peaks & Lakes</li>
                    <li>Pink Flamingos</li>
                  </ul>
                </div>

                <div className="ml-6">
                  <h4 className="text-sm font-bold text-gray-600 mb-2">DISCOVER</h4>
                  <img
                    src={savanah}
                    alt="Explore Kenya"
                    className="rounded-lg h-32 object-cover mb-2"
                  />
                  <button className="text-sm border border-[#c2a75c] text-[#c2a75c] px-3 py-1 rounded hover:bg-[#c2a75c] hover:text-white">
                    Learn More
                  </button>
                </div>
              </div>
            </div>

            {/* Other Menus */}
            <a href="#Overview" className="text-[#3a3a2c] font-semibold hover:text-[#c2a75c] px-4">Holiday Styles</a>
            <a href="#excursions" className="text-[#3a3a2c] font-semibold hover:text-[#c2a75c] px-4">Excursions</a>
            <a href="#services" className="text-[#3a3a2c] font-semibold hover:text-[#c2a75c] px-4">Services</a>
            <a href="#Aboutus" className="text-[#3a3a2c] font-semibold hover:text-[#c2a75c] px-4">Blog</a>
            <a href="#about" className="text-[#3a3a2c] font-semibold hover:text-[#c2a75c] px-4">About</a>
            <a href="#contact" className="text-[#3a3a2c] font-semibold hover:text-[#c2a75c] px-4">Contact</a>

            <a href="#packages" className="ml-auto bg-[var(--button)] text-white py-2 px-6 rounded hover:opacity-90">
              View Packages
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
        

  {/* <!-- Hero Section --> */}
  <section className="relative">
      <Swiper
  modules={[Autoplay, Pagination, Navigation]}
  autoplay={{ delay: 4000 }}
  loop={true}
  navigation
  pagination={{ clickable: true }}
  className="h-screen"
>
        {[wildlife,Cheetah].map((img, idx) => (
          <SwiperSlide key={idx}>
            <div
              className="h-screen bg-fixed bg-cover bg-center flex items-center justify-start text-white"
              style={{ backgroundImage: `url(${img})` }}
            >
              <h1 className='font-bold text-6xl px-25'>Experience <br/> Africa</h1>
            </div>
             
          </SwiperSlide>
        ))}
      </Swiper>
       </section>
  {/* other */}
    {/* about */}
  <section className="shadow-sm bg-[#fdfbf7] py-24 px-6 md:px-16 flex flex-col md:flex-row items-center justify-between min-h-[60vh]">
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

  {/* Packages */}

  <section className="py-16 px-4 max-w-7xl mx-auto text-center">
      <h2 className="text-4xl font-bold text-gray-800 mb-2">
        Recommended <span className='text-[var(--primary)]'>Themed</span> Packages
      </h2>
      <p className="text-gray-500 mb-10 max-w-xl mx-auto">
        Leading tour and travels booking website. Over 3,000 packages worldwide. Book travel packages and enjoy your holidays with distinctive experience
      </p>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 ">
        {packages.map((item, index) => (
          <div
            key={index}
            className="overflow-hidden  transition bg-[var(--background)] shadow-sm hover:shadow-lg "
          >
            <img
              src={item.image}
              alt={item.title}
              className="h-56 w-full object-cover hover:scale-105"
            />
            <div className="p-4 text-left">
              <h3 className="font-semibold text-gray-800 text-sm mb-1">
                {item.title}
              </h3>
              
              <button
                className="text-white text-sm px-4 py-2 rounded-lg bg-[var(--button)]">
                View Package
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* price comparison */}

    <section className="bg-gray-50 py-16 px-6 md:px-20 ">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary)]">
          Post-trip Gorilla Trekking In Uganda
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        {safariPackages.map((pkg, idx) => (
          <div
            key={idx}
            className="bg-white shadow-lg  overflow-hidden flex flex-col"
          >
            <img
              src={pkg.image}
              alt={pkg.title}
              className="w-full h-64 object-cover"
            />

            <div className="p-6 flex flex-col justify-between flex-grow">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  {pkg.title}
                </h3>
                <ul className="space-y-2 text-sm text-gray-700 mb-6">
                  {pkg.details.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      {/* <CheckCircleIcon className="text-green-600 w-4 h-4 mt-1" /> */}
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-end justify-between mt-auto">
                <div>
                  <p className="text-[var(--secondary)]] font-bold text-xl">
                    ${pkg.price} USD
                  </p>
                  <p className="text-xs text-gray-500">
                    Per person per night
                  </p>
                </div>
                <button className="bg-[var(--button)] text-white px-5 py-2 rounded-md hover:bg-gray-800 text-sm">
                  View Safari
                </button>
              </div>
            </div>
          </div>
        ))}
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

  {/* contaact Us */}
       <a
      href={whatsappURL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-10 right-10 z-50 bg-[var(--secondary)] text-white rounded-full p-4 shadow-lg hover:bg-orange-600  transition  animate-pulse"
    >
       <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
        className="w-6 h-6 md:w-8 md:h-8"
      >
        <path d="M12.04 2.01A10 10 0 0 0 2 12.06a9.84 9.84 0 0 0 1.37 5.09L2 22l5.07-1.33a9.95 9.95 0 0 0 4.96 1.28H12A10 10 0 0 0 12.04 2zM12 20.08a8.07 8.07 0 0 1-4.1-1.13l-.3-.17-3.02.79.8-2.94-.2-.31a8.04 8.04 0 1 1 14.9-4.27 8.03 8.03 0 0 1-8.08 8.03zm4.62-6.03c-.26-.13-1.5-.74-1.73-.83s-.4-.13-.57.13-.66.83-.81 1-.3.2-.56.07a6.6 6.6 0 0 1-1.94-1.2 7.4 7.4 0 0 1-1.37-1.7c-.14-.26 0-.4.12-.53.12-.13.26-.3.4-.45.14-.15.2-.26.3-.43a.5.5 0 0 0-.02-.48c-.07-.14-.57-1.37-.78-1.87s-.4-.42-.56-.43h-.48a.92.92 0 0 0-.67.31 2.78 2.78 0 0 0-.86 2.06c0 1.22.87 2.4 1 2.57.13.17 1.7 2.6 4.13 3.64.58.25 1.04.4 1.4.51a3.35 3.35 0 0 0 1.56.1 2.66 2.66 0 0 0 1.75-1.22c.22-.3.22-.54.16-.74s-.24-.17-.5-.3z" />
      </svg>
    </a>

  {/* <!-- Footer --> */}
  <footer className="bg-[var(--primary)] text-white p-6 mt-12 ">
    <div className="flex flex-col md:flex-row justify-between mx-auto max-w-7xl">
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





// {/* <section className="bg-gray-100 p-10 md:flex md:space-x-8 ">
//   {/* <!-- Left Text Block --> */}
//   <div className="md:w-1/3">
//     <h2 className="text-4xl font-bold text-[var(--primary)] leading-tight mb-4">
//       Welcome to <br />Viagens Africa Safaris
//     </h2>
//     <div className="w-10 h-1 bg-[var(--primary)] mb-4"></div>
//     <p className="mb-4">
//       Embark on an unforgettable journey across Africa with <strong className='text-[var(--primary)]'>Viagens Africa Safaris</strong> — your trusted partner in tailor-made luxury adventures. Whether you're dreaming of witnessing the Great Migration in Kenya, lounging in world-class safari lodges, or exploring hidden gems off the beaten path, we craft every safari with care, comfort, and authenticity.

// Our seasoned East African travel experts bring years of on-the-ground experience to ensure you enjoy a seamless, safe, and immersive experience. From the moment you arrive, expect personalized service, breathtaking wildlife encounters, and access to Africa's most iconic and exclusive destinations.

// Let us turn your African dream into a once-in-a-lifetime memory. Experience the wild, the wonder, and the warm welcome of Africa — with <strong className='text-[var(--primary)]'>Viagens Africa Safaris</strong>.

// </p>
//     <button className="mt-4 px-6 py-2 border-2 border-[#5c5c3d] text-[var(--primary)] hover:bg-[var(--primary)] hover:text-white transition">
//       READ MORE
//     </button>
//   </div>

//   {/* <!-- Right Image Cards --> */}
//   <div className="md:w-2/3 mt-8 md:mt-0 grid grid-cols-1 sm:grid-cols-3 gap-4">
//     <div className="relative">
//       <img src={desert} alt="Adventure Expeditions" className="w-full h-full object-cover" />
//       <p className="absolute bottom-4 left-4 text-white text-lg font-medium">Adventure Expeditions</p>
//     </div>
//     <div className="relative">
//       <img src={savanah} alt="Family Holidays" className="w-full h-full object-cover" />
//       <p className="absolute bottom-4 left-4 text-white text-lg font-medium">Family Holidays</p>
//     </div>
//     <div className="relative">
//       <img src={wildlife} alt="Tribal Expeditions" className="w-full h-full object-cover" />
//       <p className="absolute bottom-4 left-4 text-white text-lg font-medium">Tribal Expeditions</p>
//     </div>
//   </div>
// </section> */}