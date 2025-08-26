import { Link } from 'react-router-dom';
import masai from  '../../assets/masai-mara-wildlife.jpg'
import LakeNakuru from '../../assets/Kenya/Lakenakuru/The-Wonders-of-Lake-Nakuru-National-Park--750x389.jpg'
import Amboseli from '../../assets/Kenya/Amboseli/Alone-Maasai-Warrior-at-Amboseli-National-Park-1024x683.webp'
import Meru from '../../assets/Kenya/Meru/images (2).jpeg'
import Diani from '../../assets/Kenya/Diani/diani-sunbeds-1.jpg'
import Nairobi from '../../assets/Kenya/Nairobi/Nairobi-National-Park-700x450-1.jpg'
import TopPackages from '../../components/TopPackages';
// import { BsPeopleFill } from "react-icons/bs";


import 'swiper/swiper-bundle.css'; 

// import { FaStar, FaMapMarkerAlt, FaCalendarAlt, FaUsers,FaGlobeAfrica, FaMoneyBillWave, FaLanguage } from 'react-icons/fa';

const Header = 'Tanzania'
// const Header1 = 'Facts About Rwanda:'
const p1 = 'Tanzania is a land of epic wildlife safaris, world-famous national parks, and stunning natural beauty. From the Serengeti plains to the heights of Kilimanjaro and the turquoise waters of Zanzibar, Tanzania offers a unique blend of adventure, culture, and relaxation.';
// const Funfacts = [
  
//     "Population: 52 Million",
//     "Area: 580,370km²",
//     "Best Time To visit: All Year Round",
//     "Capital City: Nairobi",
//     "Language: English, Swahili"
    
    
// ]
const Top_Destinations =[
  {
    name : 'Masai Mara',
    slug:'masaimara',
    img : masai,
    description: 'The Masai Mara is regarded as the Jewel of Kenya wildlife',
    DestinationCTA : 'Explore'
  },
    {
    name : 'Amboseli',
    img : Amboseli,
    description: 'Famous for its large herds of elephants and is the best place to get close to free-ranging elephants worldwide.',
    DestinationCTA : 'Explore'
  },
    {
    name : 'Lake Nakuru National Park',
    img : LakeNakuru,
    description: "Lake Nakuru is a birdwatcher's paradise and is famous internationally for its thousands and sometimes millions of flamingos",
    DestinationCTA : 'Explore'
  },
  {
    name : 'Meru National Park',
    img : Meru,
    description: 'Remarkable, remote, unspoiled terrain and rugged nature. The park is picturesque due to its diverse nature',
    DestinationCTA : 'Explore'
  },
    {
    name : 'Diani',
    img : Diani,
    description: 'The Masai Mara is regarded as the Jewel of Kenya wildlife',
    DestinationCTA : 'Explore'
  },
    {
    name : 'Nairobi National Park',
    img : Nairobi,
    description: 'The Masai Mara is regarded as the Jewel of Kenya wildlife',
    DestinationCTA : 'Explore'
  }
]

const Tanzania = () => {
return (

    <>
  <section className="max-w-7xl mx-auto">
    <div className='h-[90vh] bg-[url("./links/countries/Tanzaniaimages/Tanzania.jpg")] bg-cover bg-center bg-fixed relative'>
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
        Top Destinations in Tanzania
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


export default Tanzania;