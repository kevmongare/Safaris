import { Link } from 'react-router-dom';

import Amboseli1 from '../../links/TravelStyles/AdventureExpeditions/AmboseliPark.jpg'
import MeruNationalPark2 from '../../links/TravelStyles/AdventureExpeditions/MeruNationalPark.jpg'
import RedElephantTsavo3 from '../../links/TravelStyles/AdventureExpeditions/Red-Elephants-at-Tsavo-West-National-Park-scaled.jpg'
import SamburuNationalPark4 from '../../links/TravelStyles/AdventureExpeditions/samburu-national-reserve-5.jpg'

import LatestPackages from '../../components/latestPackages';

// const Header = 'AdventureExpeditions'
const Intro = 'Bush And Beach Safaris'
const ExpeditionsIntro = 'These are simply suggestions for the kind of holiday you might have. Yours will be tailored, altered, and refined until it matches you completely.'



const Top_Expeditions =[
  {
    name : '12 Days Bush and Beach Safari',
    slug:'tenDayEastAfrica',
    img : Amboseli1,
    description: 'Giraffe Manor | Samburu Game Reserve | Masai Mara Game Reserve | Manda Island | Depart',
    DestinationCTA : 'Explore'
  },
    {
    name : '12 Days Bush Romance & Beach Escapes',
    img : MeruNationalPark2,
    description: 'Arusha | Serengeti North | Sasakwa Grumeti Reserve | Oysterbay - Dar Es Salaam | Masai Mara Game Reserve | Depart',
    DestinationCTA : 'Explore'
  },
    {
    name : '13 Days Tanzania Ultimate Bush & Beach',
    img : RedElephantTsavo3,
    description: "Arusha | Tarangire National Park | Swerengeti Plains | Singita Grumeti | Mnemba Island | Depart",
    DestinationCTA : 'Explore'
  },
    {
    name : '12 Days Authentic Bush & Beach',
    img : SamburuNationalPark4,
    description: 'Arusha | Tarangire National Park | Ngorongoro Conservation Area | Serengeti National Park | Lake Manyara National PArk | Zanzibar Island | Depart',
    DestinationCTA : 'Explore'
  }
]


const BushAndBeachSafaris = () =>{
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
    <LatestPackages/>

    </>
  );

}
export default BushAndBeachSafaris