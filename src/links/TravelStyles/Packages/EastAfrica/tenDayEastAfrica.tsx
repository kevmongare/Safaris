import { useState } from 'react'
const Header ="10 Days East Africa Highlights"
// import bg from '../../../../assets/Nyiri-desert.webp'

import FlamingoHillCamp from '../../../../assets/Packages/EasAfrica/Flamingo-Hill-Camp-10.jpg'
const  Itinerary = [
    {
        Topic:"Itinerary",
        day: "Day 1: Nairobi - Lake Nakuru National Park",
        activity: "You will be picked from Nairobi airport or your hotel and you’ll drive to Lake Nakuru National Park which is famous for its millions of seasonal pink flamingos and other aquatic birds. After that, you’ll have a game drive en route to Flamingo Hill Camp for lunch. In the afternoon, you can experience another game tracking session around the lake, where rhino, zebra, gazelle, buffalo, leopard, and waterbuck can easily and closely be spotted.",
        Accommodation:"Accommodation:Flamingo Hill Camp  ",
        image: FlamingoHillCamp,
        colorCode: 'bg-gray-50',
        meals:[
            {
                name: "Meals:",
                ExpectedMeals:[
                    
                    "BreakFast",
                    "Lunch",
                    "Dinner"
                ]
            }
        
        ]

    },

    {
        day: "Day 1: Nairobi - Lake Nakuru National Park",
        activity: "You will be picked from Nairobi airport or your hotel and you’ll drive to Lake Nakuru National Park which is famous for its millions of seasonal pink flamingos and other aquatic birds. After that, you’ll have a game drive en route to Flamingo Hill Camp for lunch. In the afternoon, you can experience another game tracking session around the lake, where rhino, zebra, gazelle, buffalo, leopard, and waterbuck can easily and closely be spotted.",
         colorCode:'bg-[#f9f7f2]',
        meals:[
            {
                name: "Meals",
                ExpectedMeals:[
                    "BreakFast",
                    "Lunch",
                    "Dinner"
                ]
            }
        
        ]

    },
    {
        day: "Day 1: Nairobi - Lake Nakuru National Park",
        activity: "You will be picked from Nairobi airport or your hotel and you’ll drive to Lake Nakuru National Park which is famous for its millions of seasonal pink flamingos and other aquatic birds. After that, you’ll have a game drive en route to Flamingo Hill Camp for lunch. In the afternoon, you can experience another game tracking session around the lake, where rhino, zebra, gazelle, buffalo, leopard, and waterbuck can easily and closely be spotted.",
        colorCode:'bg-gray-50',
        meals:[
            {
                name: "Meals",
                ExpectedMeals:[
                    "BreakFast",
                    "Lunch",
                    "Dinner"
                ]
            }
        
        ]

    },
    {
        day: "Day 2: Lake Nakuru National Park - Maasai Mara",
        activity: "After breakfast,t depart for Masai Mara, one of East Africa’s most famous reserves. Maasai Mara Mara consists of undulating hills and great rolling grasslands that sustain some of the most varied wildlife in Africa, if not the world. Arrive in time for lunch at Mara Sopa Lodge. In the afternoon, there is a safari game viewing in the Maasai Mara reserves, where lion, elephant, cheetah, giraffe, buffalo, wildebeest, gazelle and other plains game abound, not forgetting the hundreds of species of birds.",
        Accommodation:"Accommodation: Mara Toto Camp",
         colorCode:'bg-[#f9f7f2]',
        // img: ,
        meals:[
            {
                name: "Meals",
                ExpectedMeals:[
                    "BreakFast",
                    "Lunch",
                    "Dinner"
                ]
            }
        
        ]

    },
    {
        day: "Day 1: Nairobi - Lake Nakuru National Park",
        activity: "You will be picked from Nairobi airport or your hotel and you’ll drive to Lake Nakuru National Park which is famous for its millions of seasonal pink flamingos and other aquatic birds. After that, you’ll have a game drive en route to Flamingo Hill Camp for lunch. In the afternoon, you can experience another game tracking session around the lake, where rhino, zebra, gazelle, buffalo, leopard, and waterbuck can easily and closely be spotted.",
        colorCode:'bg-gray-50',
        meals:[
            {
                name: "Meals",
                ExpectedMeals:[
                    "BreakFast",
                    "Lunch",
                    "Dinner"
                ]
            }
        
        ]

    }
]
const SafriInclution ="Safari Inclusions And Exclusions"
const included ="Tour Inclusions"
const excluded ="Tour Exclusions"
const Inclutions =[
    "Meet/greet&welcome on arrival + Hotel Transfer",
    "Accommodation as stipulated on itinerary",
    "Transport in 4x4 Landcruiser",
    "Schedule or Charter Flights as stipulated on itinerary",
    "Park Entrance Fees",
    "Game Drives per day while on Safari",
    "Flying Doctor's emergency service",
    "Bottled mineral water while on Safari"
]
const Exclutions =[
    "Premium Alcoholic drinks",
    "Hot Air Balloon safari Excursion",
    "Any Excursion not specified in itinerary",
    "Tips to your driver/guide",
    "Tourist Visas",
    "International Flights"
]
const tenDayEastAfrica = () =>{
    // const [card, cardState] =useState(false)
    const[inclustionCard1, inclutionState1] =useState(false)
    const[inclustionCard2, inclutionState2] =useState(false)
return(
    <>
    <div className='h-[90vh] bg-cover bg-center bg-fixed relative bg-[url("./assets/Packages/EasAfrica/First-time-on-East-Africa-safari.webp")]'>
     <div className="absolute inset-0 bg-gradient-to-b from-black/80  to-transparent z-20 flex flex-col items-center justify-center text-white">
      <h1 className='text-6xl'>{Header}</h1>
      </div>
     
    </div>
     {Itinerary.map((days,index) =>(
    <div className={`${days.colorCode} p-10 fade-in-up`}>
        <h1 className='text-center text-5xl pb-5'>{days.Topic}</h1>
       
            <div key={index} className='max-w-6xl mx-auto space-y-8 grid grid-cols-2 items-center'>
                <div className='p-10 '>
                    <h1 className='text-4xl text-[var(--button)] pb-4 cursor-pointer'>{days.day}</h1>
                    
                    <div>
                        <p className='text-xl font-light'>{days.activity}</p>
                        {days.meals.map((meal, index) =>(
                             <div>
                                 <p key={index} className='text-2xl pt-5'>{meal.name}</p>
                                <div className='flex gap-4 items-center'>
                                  {meal.ExpectedMeals.map((meals, index) =>(
                                    <p key={index} className="text-green-950 ">
                                     {meals}
                                    </p>))
                                    }
                                    </div>
                             </div>
                        ))}
                      </div>
                    </div>
                <img src={days.image} alt="" className='max-w-4xl mx-auto h-100 flex justify-between hover:scale-102 shadow-md hover:shadow-lg'/>
               
                <hr className='text-[var(--button)] w-[50%] h-0.5 -mr-200'/>
            </div>
      </div>
      ))}

      <div className='bg-gray-100 p-10'>
        <h1 className='text-center text-4xl p-10'>{SafriInclution}</h1>
        <div className='mx-auto flex'>
            <div className='grid grid-cols-2 mx-auto space-x-20 text-white bg-[var(--primary)] border w-6xl '>
            
            <div>
                <h1 className='p-5 text-[var(--button)] text-2xl cursor-pointer flex justify-between ml-15'
                 onClick={()=>inclutionState1(prev => !prev)}>{included}<span className='text-white font-bold text-3xl'> + </span></h1>
                        {inclustionCard1 &&<ul className=''>
                            {Inclutions.map((included, index) =>(
                                <li key={index} className='border-b border-gray-600 p-2 pl-5'>* {included}</li>
                            ))}
                        </ul>}
            </div>
            
            <div>
                <h1 className='p-5 text-[var(--button)] text-2xl cursor-pointer flex justify-between ml-15'
                 onClick={()=>inclutionState2(prev => !prev)}>{excluded}<span className='text-white font-bold text-3xl'> + </span></h1>
                    {inclustionCard2 &&<ul>
                        {Exclutions.map((excluded, index) =>(
                            <li key={index} className='border-b border-gray-600 p-2'>{excluded}</li>
                        ))}
                    </ul>}
            </div>
            
            </div>
        </div>


    </div>
    </>
)
}
export default tenDayEastAfrica