//slides
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import SafariTruck from '../assets/safaris.jpeg'
import Safari from '../assets/safaris.webp'
import wildlife from '../assets/elephant.avif'
import 'swiper/swiper-bundle.css';  

export default function Hero(){
    return(
        <>
        {/* <!-- Hero Section --> */}
          <section className="relative bg">
              <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          autoplay={{ delay: 4000 }}
          loop={true}
          navigation
          pagination={{ clickable: true }}
          className="h-screen"
        >
                {[wildlife, Safari, SafariTruck].map((img, idx) => (
                  <SwiperSlide key={idx}
                  className='bg-fixed'>
                    <div
                      className="h-screen bg-fixed bg-cover bg-center z-0 flex items-center justify-start text-white"
                      style={{ backgroundImage: `url(${img})` }}
                    >
                      <div className='px-25 mt-30'>
                        <h1 className='text-6xl mb-10'>Experience <br/> Africa</h1>
                        <a href="" className='mt-20 border-2 rounded-full bg-[var(--primary)]/30 hover:bg-[var(--primary)]/90 px-4 py-3'>View Packages</a>
                      </div>
                    </div>
                     
                  </SwiperSlide>
                ))}
              </Swiper>
               </section>
        </>
    )
}