import { Link } from 'react-router-dom';

import Amboseli1 from '../../links/TravelStyles/AdventureExpeditions/AmboseliPark.jpg'
import MeruNationalPark2 from '../../links/TravelStyles/AdventureExpeditions/MeruNationalPark.jpg'
import RedElephantTsavo3 from '../../links/TravelStyles/AdventureExpeditions/Red-Elephants-at-Tsavo-West-National-Park-scaled.jpg'
import SamburuNationalPark4 from '../../links/TravelStyles/AdventureExpeditions/samburu-national-reserve-5.jpg'
import MountKenya5 from '../../links/TravelStyles/AdventureExpeditions/mtkenya.avif'
import MaasaiMara6 from '../../links/TravelStyles/AdventureExpeditions/maasai-mara-wildlife.jpg';
import Ngorongoro7 from '../../links/TravelStyles/AdventureExpeditions/ng-crater-luxury-tanzania-safaris-1.jpg'
import TarangireNationalPark8 from '../../links/TravelStyles/AdventureExpeditions/Tarangire National Park.webp'

import LatestPackages from '../../components/latestPackages';

// const Header = 'AdventureExpeditions'
const Intro = 'OutBound Holidays'
const ExpeditionsIntro = 'These are simply suggestions for the kind of holiday you might have. Yours will be tailored, altered, and refined until it matches you completely.'



const Top_Expeditions =[
  {
    name : '11 Days Capetown, Victoria Falls & Kruger',
    slug:'tenDayEastAfrica',
    img : Amboseli1,
    description: 'Capetown - the Mother City | A Feast for the Senses | Lion Sands - Untamed Africa | Stylish Johannesburg | Victoria Falls | Depart',
    DestinationCTA : 'Explore'
  },
    {
    name : '6 Days Romantic Capetown Winelands',
    img : MeruNationalPark2,
    description: 'Discover the romance of Cape Town | Indulge your senses in the Winelands | farewell To Franschhoek',
    DestinationCTA : 'Explore'
  },
    {
    name : '3 Days Guangzhou Sightseeing',
    img : RedElephantTsavo3,
    description: "Fly Nairobi - Guangzhou | Explore Guangzhou | Departure from Guangzhou",
    DestinationCTA : 'Explore'
  },
    {
    name : '7 Days Mauritius Exotic Holiday',
    img : SamburuNationalPark4,
    description: 'Nairobi-Mauritius | Ile Aux Cerfs Island | Troux Aux Cerfs + Grand Basin | PampleMousses Gardens | Depart',
    DestinationCTA : 'Explore'
  },
  {
    name : '8 Days Mauritius Holiday Package',
    img : MountKenya5,
    description: 'Nairobi-Mauritius | Day Trip and Sightseeing tour | Seaplane Flight Excursion | Sea and Water Excursions-Snorkeling | Depart',
    DestinationCTA : 'Explore'
  },
    {
    name : '7 Days Seychelles Honeymoon Package',
    img : MaasaiMara6,
    description: 'Nairobi-Seychelles | Sights of Praslin –Full Day tour | Marine park full day Sea Excursion | Helicopter Scenic Flights | Depart',
    DestinationCTA : 'Explore'
  },
    {
    name : '8 days Seychelles Family Safari',
    img : Ngorongoro7,
    description: 'Nairobi - Seychelles | Relaxing on White Sands on Praslin | Flying back to Mahe | Exploration of Seychelles | Tour Ends on Mahe',
    DestinationCTA : 'Explore'
  }
  ,
    {
    name : '8 Days Seychelles Ultimate Luxury',
    img : TarangireNationalPark8,
    description: 'Welcome to the Seychelles | Explore the North Island | Flying back to Mahe | Explore Maia | Tour Ends on Mahe',
    DestinationCTA : 'Explore'
  }
]


const outBoundHolidays = () =>{
  return(
    <>
    <div>
      {/* hero */}
      <div className='h-[98vh] bg-cover bg-center bg-fixed relative bg-[url("./Outbound.jpg")]'>
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
export default outBoundHolidays