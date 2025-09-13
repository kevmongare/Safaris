import { Link } from 'react-router-dom';

import Amboseli1 from '../../links/TravelStyles/AdventureExpeditions/AmboseliPark.jpg'
import MeruNationalPark2 from '../../links/TravelStyles/AdventureExpeditions/MeruNationalPark.jpg'
import RedElephantTsavo3 from '../../links/TravelStyles/AdventureExpeditions/Red-Elephants-at-Tsavo-West-National-Park-scaled.jpg'
import SamburuNationalPark4 from '../../links/TravelStyles/AdventureExpeditions/samburu-national-reserve-5.jpg'
import MountKenya5 from '../../links/TravelStyles/AdventureExpeditions/mtkenya.avif'
import MaasaiMara6 from '../../links/TravelStyles/AdventureExpeditions/maasai-mara-wildlife.jpg';
import Ngorongoro7 from '../../links/TravelStyles/AdventureExpeditions/ng-crater-luxury-tanzania-safaris-1.jpg'
import TarangireNationalPark8 from '../../links/TravelStyles/Packages/WildlifeSafaris/pictures/3-days-queen-elizabeth-national-park_5_.webp'


// import LatestPackages from '../../components/latestPackages';

// const Header = 'AdventureExpeditions'
const Intro = 'WILDLIFE SAFARIS'
const ExpeditionsIntro = 'These are simply suggestions for the kind of holiday you might have. Yours will be tailored, altered, and refined until it matches you completely.'



const Top_Expeditions =[
  {
    name : '10 Days East Africa Highlights',
    slug:'tenDayEastAfrica',
    img : Amboseli1,
    description: 'Nairobi | Lake Nakuru National Park | Masai Mara Game Reserve | Serengeti National Park | Ngorongoro Crater',
    DestinationCTA : 'Explore'
  },
    {
    name : '8 Days Pure Romance',
    slug:'8daysPureRomance',
    img : MeruNationalPark2,
    description: 'Nairobi | Meru National Park | Masai Mara Game Reserve | Depart',
    DestinationCTA : 'Explore'
  },
    {
    name : '8 Days True Wilderness',
    slug:'8daysTrueWilderness',
    img : RedElephantTsavo3,
    description: "Masai Mara Game Reserve | Lake Nakuru National Park | Amboseli National Park | Tsavo West National Park | Depart",
    DestinationCTA : 'Explore'
  },
    {
    name : '9 Days Big Five Adventure',
    slug:'9DaysBigFive',
    img : SamburuNationalPark4,
    description: 'Nairobi | Samburu National Reserve | Aberdare National Park | Lake Nakuru National Park | Masai Mara Game Reserve | Depart',
    DestinationCTA : 'Explore'
  },
  {
    name : '11 Days Epic Wilderness Adventure',
    slug:'11daysEpicWilderness',
    img : MountKenya5,
    description: 'Nairobi | Masai Mara Game Reserve | Samburu Game Reserve | Mount Kenya...',
    DestinationCTA : 'Explore'
  },
    {
    name : '12 Days Great Wildlife Enccounters',
    slug:'12DaysGreateWildlife',
    img : MaasaiMara6,
    description: 'Nairobi National Park | Tsavo East National Park | Amboseli National Park |...',
    DestinationCTA : 'Explore'
  },
    {
    name : '9 Days Tanzania - Best of North',
    slug:'9DaysTanzania',
    img : Ngorongoro7,
    description: 'Arusha | Tarangire National Park | Ngorongoro Conservation Area | Serengeti National Park | Olduvai Gorge | Depart',
    DestinationCTA : 'Explore'
  }
  ,
    {
    name : '11 Days Tanzania Big Cats Safari',
    slug:'11daysTanzaniaBigCats',
    img : TarangireNationalPark8,
    description: 'Arusha | Tarangire National Park | Lake Manyara National Park | Ngorongoro Crater | Serengeti National Park | Depart',
    DestinationCTA : 'Explore'
  }
]


const WildlifeSafaris = () =>{
  return(
    <>
    <div>
      {/* hero */}
      <div className='h-[90vh] bg-cover bg-center bg-fixed relative bg-[url("./assets/AdventuresExpeditions.webp")]'>
     <div className="absolute inset-0 bg-gradient-to-b from-black/90  to-transparent z-20 flex flex-col items-center justify-center text-white">
      {/* <h1 className='text-6xl'>{Header}</h1> */}
      </div>
      </div>


      {/* into  */}
      <div className="bg-white text-center p-10 mx-auto">
        <h1 className="text-4xl p-10">{Intro}</h1>
        <div className='max-w-2xl mx-auto'>
          <p className='font-extralight text-center'>{ExpeditionsIntro}</p>
        </div>
        <hr className="bg-[var(--button)] w-[20%] mx-auto my-4 mt-10" />
      </div>
      
      {/* cards */}
      <div className='bg-gray-100 mx-auto p-15 space-x-10'>
      
        <div className='space-x-10 space-y-10 grid grid-cols-1 md:grid-cols-2 p-5 max-w-6xl py-2 mx-auto '>
        {Top_Expeditions.map((TDestination, index) =>(
          <div key={index} className=' border border-gray-200 hover:border-none bg-white  hover:shadow-lg overflow-hidden w-130 h-105 transition-transform duration-300 hover:-translate-y-3 mx-auto'>
       
        <img  src={TDestination.img} alt=""className='h-60 w-130 hover:scale-105 bg-cover'/>
       
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
    </div>
    {/* <LatestPackages/> */}

    </>
  );

}
export default WildlifeSafaris