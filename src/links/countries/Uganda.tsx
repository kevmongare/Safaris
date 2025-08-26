import { Link } from 'react-router-dom';
import Murchison from  '../../links/countries/ugandaimages/murchison-falls.jpg'
import Lions from '../../links/countries/ugandaimages/lions.jpeg'
import bwindi from '../../links/countries/ugandaimages/bwindi.jpeg'
import Kibale from '../../links/countries/ugandaimages/Uganda.jpg'
import LakeMburo from '../../links/countries/ugandaimages/Lake-Mburo-28329-scaled.jpg'
import Mgahinga from'../../links/countries/ugandaimages/Uganda-Kibale-National-Park-1658360984.jpg'
import Semliki from '../../links/countries/ugandaimages/book-gorilla-tracking-visit-Uganda-semuliki-hot-springs3.jpg'
import Kidepo from'../../links/countries/ugandaimages/elephant-on-the-plains-kidepo-valley-national-park.jpg'
import TopPackages from '../../components/TopPackages';
// import { BsPeopleFill } from "react-icons/bs";


import 'swiper/swiper-bundle.css'; 

// import { FaStar, FaMapMarkerAlt, FaCalendarAlt, FaUsers,FaGlobeAfrica, FaMoneyBillWave, FaLanguage } from 'react-icons/fa';

const Header = 'Uganda'
// const Header1 = 'Facts About Rwanda:'
const p1 = 'Uganda is a land of stunning contrasts — rolling green hills, snow-capped mountains, mighty rivers, and vast wildlife-rich savannahs. Known as the Pearl of Africa, Uganda offers both adventure and tranquility, making it one of East Africa’s most rewarding destinations.'
// const Funfacts = [
  
//     "Population: 48 million (2025 estimate)",
//     "Area: 241,038 km²",
//     "Best Time To visit: dry seasons (December–February and June–August) are best for wildlife viewing and gorilla trekking.",
//     "Capital City: Kampala",
//     "Language: English and Swahili (plus Luganda)"
    
    
// ]
const Top_Destinations =[
  {
    name : 'Murchison Falls National Park',
    slug:'masaimara',
    img :Murchison,
    description: 'The Masai Mara is regarded as the Jewel of Kenya wildlife',
    DestinationCTA : 'Explore'
  },
    {
    name : 'Queen Elizabeth National Park',
    img : Lions,
    description: 'Famous for its large herds of elephants and is the best place to get close to free-ranging elephants worldwide.',
    DestinationCTA : 'Explore'
  },
    {
    name : 'Bwindi Impenetrable Forest',
     img : bwindi,
    description: "Lake Nakuru is a birdwatcher's paradise and is famous internationally for its thousands and sometimes millions of flamingos",
    DestinationCTA : 'Explore'
  },
  {
    name : 'Kibale Forest National Park',
    img : Kibale,
    description: 'Remarkable, remote, unspoiled terrain and rugged nature. The park is picturesque due to its diverse nature',
    DestinationCTA : 'Explore'
  },
    {
    name : 'Lake Mburo',
    img : LakeMburo,
    description: 'The Masai Mara is regarded as the Jewel of Kenya wildlife',
    DestinationCTA : 'Explore'
  },
    {
    name : 'Mgahinga Gorilla National Park',
    img : Mgahinga,
    description: 'The Masai Mara is regarded as the Jewel of Kenya wildlife',
    DestinationCTA : 'Explore'
  },
    {
    name : 'Semliki National Park',
    img : Semliki,
    description: 'The Masai Mara is regarded as the Jewel of Kenya wildlife',
    DestinationCTA : 'Explore'
  },
    {
    name : 'Kidepo Valley National Park',
    img : Kidepo,
    description: 'The Masai Mara is regarded as the Jewel of Kenya wildlife',
    DestinationCTA : 'Explore'
  }
]

const Uganda = () => {
  return (

   <>
  <section className="max-w-7xl mx-auto">
    <div className='h-screen bg-[url("./links/countries/ugandaimages/Uganda.jpg")] bg-cover bg-center bg-fixed relative'>
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 to-transparent z-20 flex flex-col items-center justify-center text-white">
        {/* Content */}
      <div className="relative z-10 text-center max-w-2xl px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Discover Kenya Like Never Before 
        </h1>
        <p className="text-lg md:text-xl mb-8 text-gray-200">
          Explore breathtaking safaris, cultural experiences, and hidden gems — all in one journey.
        </p>
        <button className="px-6 py-3 bg-yellow-400 text-black font-semibold rounded-2xl shadow-md hover:bg-yellow-300 transition">
          Start Your Adventure
        </button>
      </div>
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
        Top Destinations in Uganda
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

export default Uganda;