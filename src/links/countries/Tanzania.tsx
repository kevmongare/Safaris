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

const Header = 'Rwanda'
const Header1 = 'Facts About Rwanda:'
const p1 = 'The birthplace of the safari, Kenya is a world-class wildlife destination, recommended both for experienced safari-goers and for those booking a first-time safari. The peerless Masai Mara National Reserve offers excellent big cat encounters and is the setting for the yearly wildebeest and zebra migration. Palm-lined beaches offer a perfect place to relax after a thrilling safari.'

const Funfacts = [
  
    "Population: 52 Million",
    "Area: 580,370km²",
    "Best Time To visit: All Year Round",
    "Capital City: Nairobi",
    "Language: English, Swahili"
    
    
]
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
    <section>
      <div className='h-[90vh]  bg-[url("./links/TravelStyles/AdventureExpeditions/ng-crater-luxury-tanzania-safaris-1.jpg")] bg-cover bg-center bg-fixed relative'>
      <div className="absolute inset-0 bg-gradient-to-t from-black/50  to-transparent z-20 flex flex-col items-center justify-center text-white">

      </div>
      </div>

     <div className='bg-white grid md:grid-cols-2 p-5 gap-8'>
  <div className='flex flex-col justify-center p-4'>
    <h1 className='text-4xl font-bold mb-4'>{Header}</h1>
    <p className='max-w-3xl text-xl text-center md:text-left px-2 font-light'>{p1}</p>
  </div>

  <div className='bg-[#f9f7f2] shadow-md px-4 flex flex-col p-4'>
    <h1 className='text-4xl font-bold mb-6 text-center'>{Header1}</h1>
    <ul className='max-w-3xl text-xl text-center md:text-left px-2 font-light'>{
      Funfacts.map((facts, index) =>
      (
        <li key={index}
        className="list-none">* {facts}</li>
        
      ))
    }</ul>
  </div>
  </div>
<div className=' bg-gray-100 p-10'>
  <h1 className='text-4xl text-center py-2 pb-8'>Top Destinations in Kenya</h1>
  <div className='space-x-8 space-y-10 grid grid-cols-1 md:grid-cols-3 p-10 w-fit py-2 mx-auto'>
    {Top_Destinations.map((TDestination, index) =>(
      <div key={index} className='bg-white  hover:shadow-lg overflow-hidden w-90 h-110 transition-transform duration-300 hover:-translate-y-3'>
        <div>
        <img  src={TDestination.img} alt=""className='h-60 hover:scale-105'/>
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

export default Tanzania;