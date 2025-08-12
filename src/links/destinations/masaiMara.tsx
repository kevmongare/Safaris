import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/swiper-bundle.css'; // fallback for older versions

//top destinations
import masai from  '../../assets/masai-mara-wildlife.jpg'
import LakeNakuru from '../../assets/Kenya/Lakenakuru/The-Wonders-of-Lake-Nakuru-National-Park--750x389.jpg'
import Amboseli from '../../assets/Kenya/Amboseli/Alone-Maasai-Warrior-at-Amboseli-National-Park-1024x683.webp'
import Meru from '../../assets/Kenya/Meru/images (2).jpeg'
import Diani from '../../assets/Kenya/Diani/diani-sunbeds-1.jpg'
import Nairobi from '../../assets/Kenya/Nairobi/Nairobi-National-Park-700x450-1.jpg'

// slider
import elephant from '../../assets/elephant.avif';
import cheeta from '../../assets/wildlife.jpg';
import WilderBeast from '../../assets/destinationsPictures/Masaimara/homey2.jpg'
import savanah from '../../assets/savannah-landscape-in-the-national-park-of-kenya-P56CU7Y-1.jpg';
import HotairBalloon from '../../assets/destinationsPictures/Masaimara/hot-air-balloon-safari-masai-mara.jpg'
import Birds from '../../assets/destinationsPictures/Masaimara/masai-mara-birdlife-secretary-bird.jpg'

// slider clickable
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';


const images = [savanah, cheeta, elephant, Birds, HotairBalloon, WilderBeast];
// info(text data)
const Header = 'Masai Mara Game Reserve'
const Paragraph = "Masai Mara National Reserve is considered a “must see” for any visitor traveling on safari in Kenya. It is on the “to do” list of most Kenyan visitors because the park is graced by a wide variety of unique and exquisite wild life and birds.Masai Mara is the best place to see all of the “Big Five” animals (elephants, lions, leopards, rhinos and buffalo) together. The famous wildebeest migration also takes place at the Mara."
const Paragraph1 ="Masai Mara National Reserve (also known as Masai Mara or The Mara) is situated within the Great Rift Valley in the southernpart of Kenya. Measuring approximately 1510sq. ilometres (approx. 938sq. miles) in size, this unfenced savannah grassland is roughly 150 miles southeast of Nairobi.Maasai Mara derives its name from the indigenous people of Kenya – the Maasai tribe – and the Mara River that cuts through the park."
// const Paragraph2 ="The Masai Mara provides the best view of the famous wildebeest migration as the animals cross the Mara River between July and August.The Mara is also home to the richest concentration of wildlife, including the “Big Five” (elephants, lions, leopards, rhinos, and buffalo), zebras, antelope, gnus, Oribis, hyenas, giraffes, warthogs, gazelles, hartebeests, hippos, crocodiles and others. The park has the largest concentration of African lions, including the black-maned lion.Birdlife is as plentiful as wildlife at the Masai Mara, which boasts over 400 different birds species. The park experiences a hot and dry climate with a regular rainfall season twice a year. The reserve’s topography is mainly open savannah (grassland) with clusters of acacia trees along the southeastern area of the park. The Mara and Talek rivers grace the rolling plains of the reserve. Myriad seasonal rivers appear during the rainy season but dry out once the rains are gone. Maasai Mara National Reserve does not fall under the jurisdiction of the Kenya Wildlife Service (KWS); instead, it is managed by the local county council of Narok district"
const whatToExpect = "The Masai Mara Game Reserve is one of the best places in Africa for wildlife viewing. Game drives are a great way to experience the park and they take place all year round. If the big cats are what you’re looking for on your Kenyan safari, you are guaranteed to spot them at the Mara.All of the “Big Five” animals (elephants, lions, leopards, rhinos, and buffalo) can be spotted here. However, the population of black rhinos is severely threatened with only 37 black rhinos left as of 2000. Herds of plains zebras are found throughout the park, as well as Masai giraffes, common giraffes, jackals, white-bearded gnus, Oribis, warthogs, Thomson’s and Grant’s gazelles, hartebeests, hyenas, bat-eared foxes, rare Topi antelope and beautiful rone antelope, as well as hippos and crocodiles in the Mara River."

const SimilarTopDestinations ="Other Top Destinations in Kenya"
const Top_Destinations =[
  {
    name : 'Masai Mara',
    slug:'kenya',
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
const Activities =[
  {
    name: "Wildebeest Migration",
    img: WilderBeast,
    details: "Masai Mara National Reserve is Kenya’s flagship park. Sightings of four of the Big Five are pretty much guaranteed. Black rhino is more elusive, but can sometimes be spotted in the Mara Triangle. The reserve is one of the best for big cats, but sightings of smaller predators such as bat-eared fox, black-backed jackal and spotted hyena also tend to be rewarding. Antelope include impala, reedbuck, Thomson's gazelle, eland and topi, while buffalo, elephant and giraffe are relaxed and easily spotted."

  },
  {
    name: "The Big Five",
    img: cheeta,
    details: "Masai Mara National Reserve is Kenya’s flagship park. Sightings of four of the Big Five are pretty much guaranteed. Black rhino is more elusive, but can sometimes be spotted in the Mara Triangle. The reserve is one of the best for big cats, but sightings of smaller predators such as bat-eared fox, black-backed jackal and spotted hyena also tend to be rewarding. Antelope include impala, reedbuck, Thomson's gazelle, eland and topi, while buffalo, elephant and giraffe are relaxed and easily spotted."

  },
  {
    name: "Hot Air Balloons",
    img: HotairBalloon,
    details: "Masai Mara National Reserve is Kenya’s flagship park. Sightings of four of the Big Five are pretty much guaranteed. Black rhino is more elusive, but can sometimes be spotted in the Mara Triangle. The reserve is one of the best for big cats, but sightings of smaller predators such as bat-eared fox, black-backed jackal and spotted hyena also tend to be rewarding. Antelope include impala, reedbuck, Thomson's gazelle, eland and topi, while buffalo, elephant and giraffe are relaxed and easily spotted."

  }, 
   {
    name: "Maasai Mara Bird Life",
    img: Birds,
    details: "Masai Mara National Reserve is Kenya’s flagship park. Sightings of four of the Big Five are pretty much guaranteed. Black rhino is more elusive, but can sometimes be spotted in the Mara Triangle. The reserve is one of the best for big cats, but sightings of smaller predators such as bat-eared fox, black-backed jackal and spotted hyena also tend to be rewarding. Antelope include impala, reedbuck, Thomson's gazelle, eland and topi, while buffalo, elephant and giraffe are relaxed and easily spotted."

  }
]
const MaasaiMara = () =>{
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  return(
    <>
    <section>
      <div className='bg-[url("./assets/wildlife.jpg")] h-[90vh] bg-cover text-white z-0 relative'>
       <div className='bg-gradient-to-b from-black/90 to-transparent h-[90vh] inset-0 absolute z-20 flex flex-col items-center justify-center text-white'>
       <h1 className='text-white text-7xl'>Masai Mara</h1>
       <h2>Safari</h2>
       </div>
      </div>

      <div className="bg-gray-100  p-10">
        <h1 className="text-4xl text-center">{Header}</h1>
        <p className="max-w-6xl font-light text-2xl p-10 mx-auto text-center ">{Paragraph}</p>
        <br />
        <p className="max-w-6xl font-light text-2xl p-10 mx-auto text-center ">{Paragraph1}</p>
        <br />
    
        
      </div>
          <div className='bg-white py-10'>
            <h1 className='text-3xl text-center p-10'>WHERE TO FIND MAASAI MARA GAME RESERVE</h1>
        <div className="w-full aspect-[16/9] max-w-6xl mx-auto">
             <iframe
            title="Maasai Mara National Reserve"
               src="https://www.google.com/maps/d/embed?mid=1Lgg_AlGwUOPNb72LKGCi_iWhkzK2vSwP"
              width="100%"               
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy">

              </iframe>
    </div>
         </div>
         <div className='p-10 bg-[#f9f7f2]'>
          <h1 className=' text-5xl text-center p-10'>Top Activities</h1>
          <p className="max-w-6xl font-light text-2xl p-10 mx-auto text-cente">{whatToExpect}</p>
          <hr className='p-5'/>
          <div className='grid grid-cols-2 space-x-5 space-y-8 overflow-hidden relative p-5 '>
            {Activities.map((activity, index) =>(
              <div className='overflow-hidden relative bg-white hover:shadow-md transition-transform duration-300 hover:-translate-y-3 h-140 w-140'>
                <ul key={index} className=''>
                <img src={activity.img} alt=""   className="hover:scale-105 transition-transform duration-300 w-full h-64 object-cover origin-center"
  />
                <h1 className='text-4xl p-5 text-[var(--secondary)]'>{activity.name}</h1>
                <p className='z-20 overflow-hidden p-5 font-light py-5'>{activity.details}</p>
                </ul>
              </div>
            ) )
            }
          </div>
         </div>
       
      <div className="py-10 bg-white">
        <h2 className="text-center text-gray-600 text-5xl mb-6">Masai Mara Gallery</h2>
       <Swiper
        spaceBetween={30}
        slidesPerView={2}
        loop={true}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        modules={[Navigation, Pagination]}
        className="w-full max-w-5xl mx-auto"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <img
              src={src}
              alt={`Masai Mara image ${index + 1}`}
              className="w-full h-[60vh] object-cover cursor-pointer"
              onClick={() => {
                setCurrentIndex(index);
                setOpen(true);
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={currentIndex}
        slides={images.map((img) => ({ src: img }))}
      />
      </div>
      {/* //Top Destination */}
       <div className="p-10 bg-gray-100">
      <h1 className="text-center text-4xl font-semibold mb-8">{SimilarTopDestinations}</h1>

      <Swiper
        spaceBetween={20}
        slidesPerView={4}
        loop={true}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 }, // show 4 on large screens
        }}
        modules={[Navigation, Pagination]}
        className="w-full max-w-7xl mx-auto"
      >
        {Top_Destinations.map((destination, index) => (
          <SwiperSlide key={index}>
            <div className="p-4">
               <Link
          to={`/${destination.slug}`}>
              <img
                src={destination.img}
                
                alt={`Top destination ${index + 1}`}
                className="w-full h-60 object-cover shadow-md cursor-pointer hover:scale-105 transition-transform duration-300"
              />
              </Link>
              <h3 className="text-center mt-2 text-lg font-medium">{destination.name}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>

      


        {/* <Link
        to={'/'}>
      
        </Link> */}
    </section>
    
    </>
  )

} 
export default MaasaiMara

// // import React from 'react';
// import MasaiMara from '../../assets/masai-mara-wildlife.jpg';
// // import NairobiLodge from '../../assets/villa-2-beautiful-bedouin.jpg';
// // import Nairobitruck from '../../assets/safaris.jpeg';
// // import roadtrip from '../../assets/ROADTRIP.png';
// // import serengeti from '../../assets/safaris.webp';
// // import hotairballoon from '../../assets/Hot air balloon.png';
// import elephant from '../../assets/elephant.avif';
// import cheeta from '../../assets/wildlife.jpg';
// import savanah from '../../assets/savannah-landscape-in-the-national-park-of-kenya-P56CU7Y-1.jpg';

// const packageDetails = {
//   id: 1,
//   title: "Maasai Mara Game Reserve",
//   heroImage: MasaiMara,
  
//   includes: {
//     included: ["Accommodation", "All meals", "Park fees", "Local flights", "Transfers"],
//     excluded: ["International flights", "Tips", "Personal expenses"],
//   },
//   gallery: [
//     savanah,
//     cheeta,
//     elephant,
//   ],
// };
// const destinations = [
//     "Maasai Mara Game Reserve",
//     "Amboseli National Park",
//     "Lake Nakuru National Park",
//     "Aberdare National Park",
//     "Meru National Park",
//     "Nairobi National Park",
//     "Samburu National Reserve",
//     "Tsavo East National Park",
//     "Tsavo West National Park"
//   ];


// export default function PackageDetails() {
//   return (
//     <div className="min-h-screen" style={{ backgroundColor: '#f9f7f2', color: '#3a3a2c' }}>
//       {/* Hero Section */}
//       <div className="relative h-[70vh]">
//         <div className="absolute inset-0">
//           <img 
//             src={packageDetails.heroImage} 
//             alt="Masai Mara Wildlife" 
//             className="w-full h-full object-cover"
//           />
//         </div>
//         <div className="absolute inset-0 bg-black/40"></div>
//         <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
//           <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-wide">{packageDetails.title}</h1>
//           <div className="h-1 w-32 bg-[#c2a75c] mx-auto mb-6"></div>
          
//           <a
//             href="#book"
//             className="mt-8 inline-block px-10 py-3 font-bold text-lg uppercase tracking-wider"
//             style={{ 
//               backgroundColor: '#c2a75c', 
//               color: '#3a3a2c',
//             }}
//           >
//             Book This Safari
//           </a>
//         </div>
//       </div>

//       {/* Highlights Section */}
//       <section className="py-16 px-4 max-w-6xl mx-auto">
//         <div className="flex flex-col md:flex-row gap-12">
//           <div className="md:w-1/2">
//             <h2 className="text-4xl font-bold mb-6 relative">
//               <span className="absolute -left-6 top-3 text-3xl" style={{ color: '#c2a75c' }}>+</span>
//               MASAI MARA EXPERIENCE
//             </h2>
//             <p className="mb-4 text-lg" style={{ color: '#8c8479' }}>
//               Kenya is a wildlife paradise in East Africa, home to the iconic Big Five (lion, leopard, elephant, buffalo, and rhino) and over 1,000 bird species. From the vast savannahs of the Maasai Mara to the snow-capped peaks of Mount Kenya, the country offers some of Africa's most spectacular wildlife viewing experiences.
//             </p>
//             <p className="mb-4 text-lg" style={{ color: '#8c8479' }}>
//               The annual Great Migration, where millions of wildebeest and zebra cross the Mara River, is considered one of the greatest natural spectacles on Earth. Kenya's diverse landscapes range from pristine beaches along the Indian Ocean to the dramatic Rift Valley and lush highlands.
//             </p>
//           </div>
          
//           <div className="md:w-1/2 flex flex-col gap-6">
           
//           </div>
//         </div>
//       </section>

//       {/* Experience Section */}
//       <section className="py-16 px-4" style={{ backgroundColor: '#3a3a2c' }}>
//         <div className="max-w-6xl mx-auto">
//           <div className="flex items-center mb-12">
//             <h2 className="text-4xl font-bold text-white mr-4">WILDLIFE HIGHLIGHTS</h2>
//             <span className="text-3xl" style={{ color: '#c2a75c' }}>+</span>
//           </div>
          
//           <div className="grid md:grid-cols-3 gap-8">
//             <div className="bg-white p-6">
//               <div className="flex items-center mb-4">
//                 <span className="text-3xl mr-2" style={{ color: '#c2a75c' }}>+</span>
//                 <h3 className="text-xl font-bold">The Great Migration</h3>
//               </div>
//               <p>Witness millions of wildebeest and zebra crossing the Mara River</p>
//             </div>
            
//             <div className="bg-white p-6">
//               <div className="flex items-center mb-4">
//                 <span className="text-3xl mr-2" style={{ color: '#c2a75c' }}>+</span>
//                 <h3 className="text-xl font-bold">Big Five Safari</h3>
//               </div>
//               <p>Track lions, leopards, elephants, buffalo, and rhinos</p>
//             </div>
            
//             <div className="bg-white p-6">
//               <div className="flex items-center mb-4">
//                 <span className="text-3xl mr-2" style={{ color: '#c2a75c' }}>+</span>
//                 <h3 className="text-xl font-bold">Maasai Culture</h3>
//               </div>
//               <p>Experience traditional Maasai village life</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Map Section */}
//       <section className="py-16 px-4 max-w-6xl mx-auto">
//         <div className="flex items-center mb-6">
//           <h2 className="text-3xl font-bold mr-4">MAP LOCATION</h2>
//           <span className="text-3xl" style={{ color: '#c2a75c' }}>+</span>
//         </div>
        
//         <div>
//           <div className="w-full aspect-[16/9]">
//             <iframe
//               title="Maasai Mara National Reserve"
//               src="https://www.google.com/maps/d/u/0/embed?mid=1MlmYXhh8T1sQQF3J9nxRF-5OT_qfkaw&ehbc=2E312F"
//               width="100%"
//               height="100%"
//               style={{ border: 0 }}
//               allowFullScreen
//               loading="lazy"
//             ></iframe>
//           </div>
//         </div>
//       </section>

//       {/* Included Section */}
//       <section className="py-16 px-4" style={{ backgroundColor: '#3a3a2c' }}>
//         <div className="max-w-6xl mx-auto">
//           <div className="flex items-center mb-12">
//             <h2 className="text-4xl font-bold text-white mr-4">WHAT'S INCLUDED</h2>
//             <span className="text-3xl" style={{ color: '#c2a75c' }}>+</span>
//           </div>
          
//           <div className="grid md:grid-cols-2 gap-8">
//             <div className="bg-white p-8">
//               <h3 className="text-2xl font-bold mb-4" style={{ color: '#c2a75c' }}>Included</h3>
             
//             </div>
            
//             <div className="bg-white p-8">
//               <h3 className="text-2xl font-bold mb-4" style={{ color: '#c2a75c' }}>Not Included</h3>
//               <ul className="space-y-3">
//                 {packageDetails.includes.excluded.map((item, index) => (
//                   <li key={index} className="flex items-start">
//                     <span className="text-xl mr-2" style={{ color: '#c2a75c' }}>→</span>
//                     <span className="text-gray-800">{item}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Gallery Section */}
//       <section className="py-16 px-4 max-w-6xl mx-auto">
//         <div className="flex items-center mb-6">
//           <h2 className="text-3xl font-bold mr-4">GALLERY</h2>
//           <span className="text-3xl" style={{ color: '#c2a75c' }}>+</span>
//         </div>
        
//         <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
//           {packageDetails.gallery.map((src, idx) => (
//             <div 
//               key={idx} 
//               className="overflow-hidden"
//             >
//               <img
//                 src={src}
//                 alt="Safari"
//                 className="w-full h-64 object-cover"
//               />
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Top Destinations Section */}
// <section className="py-16 px-4" style={{ backgroundColor: '#f9f7f2' }}>
//   <div className="max-w-6xl mx-auto">
//     <div className="flex items-center mb-12">
//       <h2 className="text-3xl md:text-4xl font-bold mr-4" style={{ color: '#3a3a2c' }}>
//         Top Destinations in Kenya
//       </h2>
//       <span className="text-3xl" style={{ color: '#c2a75c' }}>+</span>
//     </div>
    
//     <p className="text-gray-600 max-w-3xl mb-12 text-lg" style={{ color: '#8c8479' }}>
//       Some of the highlights of top destinations you can visit while travelling to Kenya. 
//       You will experience top wildlife encounters, abundant birdlife, amazing cultures 
//       and lots of knowledge from Kenya!
//     </p>

//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//       {destinations.map((destination, index) => (
//         <div 
//           key={index}
//           className="bg-white  overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
//         >
//           <div className="h-48 overflow-hidden">
//             <img
//               src={savanah}
//               alt={destination}
//               className="w-full h-full object-cover"
//             />
//           </div>
//           <div className="p-6">
//             <div className="flex items-center">
//               <span className="text-2xl mr-2" style={{ color: '#c2a75c' }}>+</span>
//               <h3 className="text-xl font-semibold" style={{ color: '#3a3a2c' }}>{destination}</h3>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   </div>
// </section>
//     </div>
//   );
// }