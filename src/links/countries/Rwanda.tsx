import { Link } from 'react-router-dom';
import Volcanoes from  '../../links/countries/rwandaimages/volcano.jpg'
import LakeKivu from '../../links/countries/rwandaimages/Lake_Kivu_Serena_Hotel_Beach-1.jpg'
import AkageraNationalpark from '../../links/countries/rwandaimages/akageranationalPark.webp'
import Nyungwe from '../../links/countries/rwandaimages/rwanda1.jpg'
import TopPackages from '../../components/TopPackages';
// import { BsPeopleFill } from "react-icons/bs";


import 'swiper/swiper-bundle.css'; 

// import { FaStar, FaMapMarkerAlt, FaCalendarAlt, FaUsers,FaGlobeAfrica, FaMoneyBillWave, FaLanguage } from 'react-icons/fa';

const Header = 'Rwanda'
// const Header1 = 'Facts About Rwanda:'
const p1 = 'Rwanda is a breathtaking destination where nature, wildlife, and culture come together to create unforgettable experiences. From the misty mountains that shelter the endangered mountain gorillas to the tranquil shores of Lake Kivu, every corner of Rwanda offers adventure and serenity.'

// const Funfacts = [
  
//     "Population: 14 million (2025 estimate)",
//     "Area: 26,338 km²",
//     "Best Time To visit: All year round",
//     "Capital City: Kigali",
//     "Language: Kinyarwanda, English, French; Swahili"
    
    
// ]
const Top_Destinations =[
  {
    name : 'Volcanoes National Park',
    slug:'masaimara',
    img : Volcanoes,
    description: 'Volcanoes National Park lies in north-western Rwanda and borders Virunga National Park',
    DestinationCTA : 'Explore'
  },
    {
    name : 'Lake Kivu',
    img : LakeKivu,
    description: 'Famous for its large herds of elephants and is the best place to get close to free-ranging elephants worldwide.',
    DestinationCTA : 'Explore'
  },
    {
    name : ' Akagera National Park',
    img : AkageraNationalpark,
    description: "Lake Nakuru is a birdwatcher's paradise and is famous internationally for its thousands and sometimes millions of flamingos",
    DestinationCTA : 'Explore'
  },
  {
    name : ' Nyungwe Forest National Park',
    img : Nyungwe,
    description: 'Remarkable, remote, unspoiled terrain and rugged nature. The park is picturesque due to its diverse nature',
    DestinationCTA : 'Explore'
  }
]

const rwanda = () => {
  return (
<>
  <section className="max-w-7xl mx-auto">
    <div className='h-[90vh] bg-[url("./links/countries/rwandaimages/rwanda2.jpg")] bg-cover bg-center bg-fixed relative'>
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent z-20 flex flex-col items-center justify-center text-white">
        {/* <h1 className='text-6xl'>Karibu Kenya</h1> */}
      </div>
    </div>

    <div className="bg-white text-center p-5 gap-8">
      <div className="flex flex-col justify-center p-6 sm:p-10 mx-auto">
        <h1 className="text-2xl sm:text-4xl font-bold mb-4">{Header}</h1>
        <p className="max-w-3xl text-base sm:text-xl text-center px-2 font-light mx-auto">
          {p1}
        </p>
      </div>
    </div>

    <div className="bg-gray-100 p-6 sm:p-10 max-w-7xl mx-auto">
      <h1 className="text-2xl sm:text-4xl text-center py-2 pb-6 sm:pb-8">
        Top Destinations in Rwanda
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-10 w-full sm:w-fit mx-auto place-items-center px-2">
        {Top_Destinations.map((TDestination, index) => (
          <div
            key={index}
            className="bg-white hover:shadow-lg overflow-hidden w-full sm:w-120 transition-transform duration-300 hover:-translate-y-3"
          >
            <div>
              <img
                src={TDestination.img}
                alt=""
                className="hover:scale-105 w-full aspect-video"
              />
            </div>
            <div className="px-4 py-5">
              <h1 className="text-[var(--secondary)] text-xl sm:text-2xl py-3 font-bold">
                {TDestination.name}
              </h1>
              <p className="font-light text-sm sm:text-base pb-4">
                {TDestination.description}
              </p>
              <Link
                to={`/${TDestination.slug}`}
                className="cursor-pointer underline text-[var(--button)]"
              >
                {TDestination.DestinationCTA}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>

    <TopPackages />
  </section>
</>

  );
};

export default rwanda;