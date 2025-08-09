import React from 'react';
import MasaiMara from '../../assets/masai-mara-wildlife.jpg';
import NairobiLodge from '../../assets/villa-2-beautiful-bedouin.jpg';
import Nairobitruck from '../../assets/safaris.jpeg';
import roadtrip from '../../assets/ROADTRIP.png';
import serengeti from '../../assets/safaris.webp';
import hotairballoon from '../../assets/Hot air balloon.png';
import elephant from '../../assets/elephant.avif';
import cheeta from '../../assets/wildlife.jpg';
import savanah from '../../assets/savannah-landscape-in-the-national-park-of-kenya-P56CU7Y-1.jpg';

const packageDetails = {
  id: 1,
  title: "Maasai Mara Game Reserve",
  heroImage: MasaiMara,
  itinerary: [
    {
      day: 1,
      title: "Arrival in Nairobi",
      desc: "Arrival at Jomo Kenyatta International Airport. Meet and greet by our representative. Transfer to your hotel in Nairobi. Briefing and relaxation.",
      image: NairobiLodge
    },
    {
      day: 2,
      title: "Nairobi City Tour & Drive to Masai Mara",
      desc: "Visit Giraffe Centre and Kazuri Beads. After lunch, drive through the Great Rift Valley to Masai Mara. Evening game drive.",
      image: Nairobitruck
    },
    {
      day: 3,
      title: "Full Day Game Drive in Masai Mara",
      desc: "Explore Masai Mara's Big Five territories. Witness the Great Migration (seasonal). Picnic lunch in the wild.",
      image: roadtrip
    },
    {
      day: 4,
      title: "Hot Air Balloon Safari & Maasai Village Visit",
      desc: "Early morning hot air balloon safari over the savannah. Later, visit a Maasai cultural village for a traditional experience.",
      image: hotairballoon
    },
    {
      day: 5,
      title: "Cross Border to Serengeti",
      desc: "Transfer to Isebania border. Cross into Tanzania and continue into Serengeti. Game drive en route to your lodge.",
      image: serengeti
    },
  ],
  includes: {
    included: ["Accommodation", "All meals", "Park fees", "Local flights", "Transfers"],
    excluded: ["International flights", "Tips", "Personal expenses"],
  },
  gallery: [
    savanah,
    cheeta,
    elephant,
  ],
};
const destinations = [
    "Maasai Mara Game Reserve",
    "Amboseli National Park",
    "Lake Nakuru National Park",
    "Aberdare National Park",
    "Meru National Park",
    "Nairobi National Park",
    "Samburu National Reserve",
    "Tsavo East National Park",
    "Tsavo West National Park"
  ];


export default function PackageDetails() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#f9f7f2', color: '#3a3a2c' }}>
      {/* Hero Section */}
      <div className="relative h-[70vh]">
        <div className="absolute inset-0">
          <img 
            src={packageDetails.heroImage} 
            alt="Masai Mara Wildlife" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-wide">{packageDetails.title}</h1>
          <div className="h-1 w-32 bg-[#c2a75c] mx-auto mb-6"></div>
          
          <a
            href="#book"
            className="mt-8 inline-block px-10 py-3 font-bold text-lg uppercase tracking-wider"
            style={{ 
              backgroundColor: '#c2a75c', 
              color: '#3a3a2c',
            }}
          >
            Book This Safari
          </a>
        </div>
      </div>

      {/* Highlights Section */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold mb-6 relative">
              <span className="absolute -left-6 top-3 text-3xl" style={{ color: '#c2a75c' }}>+</span>
              MASAI MARA EXPERIENCE
            </h2>
            <p className="mb-4 text-lg" style={{ color: '#8c8479' }}>
              Kenya is a wildlife paradise in East Africa, home to the iconic Big Five (lion, leopard, elephant, buffalo, and rhino) and over 1,000 bird species. From the vast savannahs of the Maasai Mara to the snow-capped peaks of Mount Kenya, the country offers some of Africa's most spectacular wildlife viewing experiences.
            </p>
            <p className="mb-4 text-lg" style={{ color: '#8c8479' }}>
              The annual Great Migration, where millions of wildebeest and zebra cross the Mara River, is considered one of the greatest natural spectacles on Earth. Kenya's diverse landscapes range from pristine beaches along the Indian Ocean to the dramatic Rift Valley and lush highlands.
            </p>
          </div>
          
          <div className="md:w-1/2 flex flex-col gap-6">
           
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 px-4" style={{ backgroundColor: '#3a3a2c' }}>
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center mb-12">
            <h2 className="text-4xl font-bold text-white mr-4">WILDLIFE HIGHLIGHTS</h2>
            <span className="text-3xl" style={{ color: '#c2a75c' }}>+</span>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6">
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-2" style={{ color: '#c2a75c' }}>+</span>
                <h3 className="text-xl font-bold">The Great Migration</h3>
              </div>
              <p>Witness millions of wildebeest and zebra crossing the Mara River</p>
            </div>
            
            <div className="bg-white p-6">
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-2" style={{ color: '#c2a75c' }}>+</span>
                <h3 className="text-xl font-bold">Big Five Safari</h3>
              </div>
              <p>Track lions, leopards, elephants, buffalo, and rhinos</p>
            </div>
            
            <div className="bg-white p-6">
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-2" style={{ color: '#c2a75c' }}>+</span>
                <h3 className="text-xl font-bold">Maasai Culture</h3>
              </div>
              <p>Experience traditional Maasai village life</p>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="flex items-center mb-6">
          <h2 className="text-3xl font-bold mr-4">MAP LOCATION</h2>
          <span className="text-3xl" style={{ color: '#c2a75c' }}>+</span>
        </div>
        
        <div>
          <div className="w-full aspect-[16/9]">
            <iframe
              title="Maasai Mara National Reserve"
              src="https://www.google.com/maps/d/u/0/embed?mid=1MlmYXhh8T1sQQF3J9nxRF-5OT_qfkaw&ehbc=2E312F"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Itinerary Section */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="flex items-center mb-6">
          <h2 className="text-3xl font-bold mr-4">ITINERARY</h2>
          <span className="text-3xl" style={{ color: '#c2a75c' }}>+</span>
        </div>
        
        <div className="space-y-8">
          {packageDetails.itinerary.map((item) => (
            <div 
              key={item.day} 
              className="flex flex-col md:flex-row"
            >
              <div className="md:w-1/3">
                <img 
                  src={item.image} 
                  alt={`Day ${item.day}`} 
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="p-6 flex-1">
                <div className="flex items-center mb-2">
                  <span className="text-xl font-bold mr-2" style={{ color: '#c2a75c' }}>+</span>
                  <h3 className="text-xl font-bold">Day {item.day}: {item.title}</h3>
                </div>
                <p className="text-gray-700">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Included Section */}
      <section className="py-16 px-4" style={{ backgroundColor: '#3a3a2c' }}>
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center mb-12">
            <h2 className="text-4xl font-bold text-white mr-4">WHAT'S INCLUDED</h2>
            <span className="text-3xl" style={{ color: '#c2a75c' }}>+</span>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8">
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#c2a75c' }}>Included</h3>
              <ul className="space-y-3">
                {packageDetails.includes.included.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-xl mr-2" style={{ color: '#c2a75c' }}>→</span>
                    <span className="text-gray-800">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-white p-8">
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#c2a75c' }}>Not Included</h3>
              <ul className="space-y-3">
                {packageDetails.includes.excluded.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-xl mr-2" style={{ color: '#c2a75c' }}>→</span>
                    <span className="text-gray-800">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="flex items-center mb-6">
          <h2 className="text-3xl font-bold mr-4">GALLERY</h2>
          <span className="text-3xl" style={{ color: '#c2a75c' }}>+</span>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {packageDetails.gallery.map((src, idx) => (
            <div 
              key={idx} 
              className="overflow-hidden"
            >
              <img
                src={src}
                alt="Safari"
                className="w-full h-64 object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Top Destinations Section */}
<section className="py-16 px-4" style={{ backgroundColor: '#f9f7f2' }}>
  <div className="max-w-6xl mx-auto">
    <div className="flex items-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold mr-4" style={{ color: '#3a3a2c' }}>
        Top Destinations in Kenya
      </h2>
      <span className="text-3xl" style={{ color: '#c2a75c' }}>+</span>
    </div>
    
    <p className="text-gray-600 max-w-3xl mb-12 text-lg" style={{ color: '#8c8479' }}>
      Some of the highlights of top destinations you can visit while travelling to Kenya. 
      You will experience top wildlife encounters, abundant birdlife, amazing cultures 
      and lots of knowledge from Kenya!
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {destinations.map((destination, index) => (
        <div 
          key={index}
          className="bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
        >
          <div className="h-48 overflow-hidden">
            <img
              src={savanah}
              alt={destination}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6">
            <div className="flex items-center">
              <span className="text-2xl mr-2" style={{ color: '#c2a75c' }}>+</span>
              <h3 className="text-xl font-semibold" style={{ color: '#3a3a2c' }}>{destination}</h3>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
    </div>
  );
}