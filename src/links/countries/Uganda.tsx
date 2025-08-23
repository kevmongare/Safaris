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
    <section className='max-w-7xl mx-auto'>
      <div className='h-[90vh]  bg-[url("./links/countries/ugandaimages/Uganda.jpg")] bg-cover bg-center bg-fixed relative'>
      <div className="absolute inset-0 bg-gradient-to-b from-black/50  to-transparent z-20 flex flex-col items-center justify-center text-white">
      {/* <h1 className='text-6xl'>Karibu Kenya</h1> */}
     
      </div>
      </div>

     <div className='bg-white text-center p-5 gap-8'>
        <div className='flex flex-col justify-center p-10 mx-auto'>
          <h1 className='text-4xl font-bold mb-4 '>{Header}</h1>
          <p className='max-w-3xl text-xl text-center px-2 font-light mx-auto'>{p1}</p>
        </div>

        {/* <div className='bg-[#f9f7f2] mx-auto text-center'>
          <div className='p-10 mx-auto text-center'>
            <h1 className='text-4xl font-bold mb-4'>{Header1}</h1>
            <ul className='flex space-x-10 mx-auto'>
              {Funfacts.map((item, index) =>(
                <li key={index}>{item}
                </li>
              ))}
            </ul>
          </div>

        </div> */}




  {/* <div className='bg-[#f9f7f2] shadow-md px-4  p-4'>
    <h1 className='text-4xl font-bold mb-6 text-center'>{Header1}</h1>
    <ul className='max-w-6xl text-xl text-center md:text-left px-2 font-light grid grid-cols-2 mx-auto space-x-5'>{
      Funfacts.map((facts, index) =>
      (
        <li key={index}
        className="list-none mx-auto">* {facts}</li>
        
      ))
    }</ul>
  </div> */}
  </div>
<div className=' bg-gray-100 p-10 max-w-7xl mx-auto '>
  <h1 className='text-4xl text-center py-2 pb-8'>Top Destinations in Uganda</h1>
  <div className='grid grid-cols-1 md:grid-cols-2 p-10 gap-10 w-fit mx-auto place-items-center'>
 {Top_Destinations.map((TDestination, index) =>(
      <div key={index} className='bg-white  hover:shadow-lg overflow-hidden w-120 h-110 transition-transform duration-300 hover:-translate-y-3'>
        <div>
        <img  src={TDestination.img} alt=""className='hover:scale-105 w-120 aspect-video'/>
        </div>
        <div className='px-4 py-5 '>
          <h1 className='text-[var(--secondary)] text-2xl py-3 font-bold'>{TDestination.name}</h1>
          <p className='font-light pb-4'>{TDestination.description}</p>
          <Link
          to={`/${TDestination.slug}`}
          className='cursor-pointer underline text-[var(--button)]'>
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