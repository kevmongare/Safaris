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
    <section className='mx-auto '>
      <div className='h-[90vh]  bg-[url("./links/countries/rwandaimages/rwanda2.jpg")] bg-cover bg-center bg-fixed relative'>
      <div className="absolute inset-0 bg-gradient-to-b from-black/80  to-transparent z-20 flex flex-col items-center justify-center text-white">
      {/* <h1 className='text-6xl'>Karibu Kenya</h1> */}
     
      </div>
      </div>

     <div className='bg-gray-50 backdrop-blur-2xl text-center p-5 gap-8'>
        <div className='flex flex-col justify-center p-10 mx-auto'>
          <h1 className='text-5xl font-bold mb-4 '>{Header}</h1>
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
<div className=' bg-gray-100 p-10'>
  <h1 className='text-4xl text-center py-2 pb-8'>Top Destinations in Rwanda</h1>
  <div className='grid grid-cols-1 md:grid-cols-2 p-10 gap-10 w-fit mx-auto place-items-center'>
      {Top_Destinations.map((TDestination, index) =>(
      <div key={index} className='bg-white  hover:shadow-lg overflow-hidden w-120 h-110 transition-transform duration-300 hover:-translate-y-3'>
        <div>
        <img  src={TDestination.img} alt=""className='h-60 w-120 hover:scale-105'/>
        </div>
        <div className='px-4 py-5 '>
          <h1 className='text-[var(--secondary)] text-2xl py-3 font-bold'>{TDestination.name}</h1>
          <p className='font-light pb-4'>{TDestination.description}</p>
          <Link
          to={`/${TDestination.slug}`}>
          <a href="" className='cursor-pointer underline text-[var(--button)]'>{TDestination.DestinationCTA}</a>
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