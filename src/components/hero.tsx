// //slides
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay, Pagination, Navigation } from 'swiper/modules';
// import SafariTruck from '../assets/safaris.jpeg'
// import Safari from '../assets/safaris.webp'
// import wildlife from '../assets/elephant.avif'
// import 'swiper/swiper-bundle.css';  

// export default function Hero(){
//     return(
//         <>
//         {/* <!-- Hero Section --> */}
//           <section className="relative bg">
//               <Swiper
//           modules={[Autoplay, Pagination, Navigation]}
//           autoplay={{ delay: 4000 }}
//           loop={true}
//           navigation
//           pagination={{ clickable: true }}
//           className="h-screen"
//         >
//                 {[wildlife, Safari, SafariTruck].map((img, idx) => (
//                   <SwiperSlide key={idx}
//                   className='bg-fixed'>
//                     <div
//                       className="h-screen bg-fixed bg-cover bg-center z-0 flex items-center justify-start text-white"
//                       style={{ backgroundImage: `url(${img})` }}
//                     >
//                       <div className='px-25 mt-30'>
//                         <h1 className='text-6xl mb-10'>Experience <br/> Africa</h1>
//                         <a href="" className='mt-20 border-2 rounded-full bg-[var(--primary)]/30 hover:bg-[var(--primary)]/90 px-4 py-3'>View Packages</a>
//                       </div>
//                     </div>
                     
//                   </SwiperSlide>
//                 ))}
//               </Swiper>
//                </section>
//         </>
//     )
// }
// import '../App.css';
// import bg from '../assets/safaris.webp'
const Hero = () => {
  return (
    <section 
    className="h-screen bg-[url('./assets/safaris.webp')]  bg-cover bg-center relative"
    >
      <div className=" h-screen bg-black/60 flex items-center justify-center pt-20">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 leading-tight">
            Discover East Africa's Wilderness
          </h1>
          <p className="text-xl max-w-2xl mx-auto mb-10">
            Experience the magic of Kenya, Tanzania, Uganda, and Rwanda through our expertly crafted safari adventures
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#destinations"
              className="bg-[#c2a75c] hover:bg-[#a99252] text-white font-medium py-3 px-8 rounded-full transition duration-300"
            >
              Explore Destinations
            </a>
            <a
              href="#packages"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#3a3a2c] font-medium py-3 px-8 rounded-full transition duration-300"
            >
              View Packages
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

