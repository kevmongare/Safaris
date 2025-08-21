import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';

import masai from  '../assets/masai-mara-wildlife.jpg'
import LakeNakuru from '../assets/Kenya/Lakenakuru/The-Wonders-of-Lake-Nakuru-National-Park--750x389.jpg'
import Amboseli from '../assets/Kenya/Amboseli/Alone-Maasai-Warrior-at-Amboseli-National-Park-1024x683.webp'
// import Meru from '../../assets/Kenya/Meru/images (2).jpeg'
import Diani from '../assets/Kenya/Diani/diani-sunbeds-1.jpg'
// import Nairobi from '../../assets/Kenya/Nairobi/Nairobi-National-Park-700x450-1.jpg'

const Top_Packages = "Our Latest Special Packages"

const Packages =[
  {
    name: "10 Days East Africa Highlights",
    slug: "tenDayEastAfrica",
    img: masai
  },
  {
    name: "10 Days East Africa Highlights",
    slug: "tenDayEastAfrica",
    img: Diani
  },
  {
    name: "10 Days East Africa Highlights",
    slug: "tenDayEastAfrica",
    img: Amboseli
  },
  {
    name: "10 Days East Africa Highlights",
    slug: "tenDayEastAfrica",
    img: LakeNakuru
  },
  {
    name: "10 Days East Africa Highlights",
    slug: "tenDayEastAfrica",
    img: masai
  },
]
const latestPackages = () =>{
    return(
        <div>
<div className="p-10 bg-white">
      <h1 className="text-center text-4xl font-semibold mb-8">{Top_Packages}</h1>

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
        {Packages.map((packageKe, index) => (
          <SwiperSlide key={index}>
            <div className="p-4">
               <Link
          to={`/${packageKe.slug}`}>
              <img
                src={packageKe.img}
                
                alt={`Top package ${index + 1}`}
                className="w-full h-60 object-cover shadow-md cursor-pointer hover:scale-105 transition-transform duration-300 hover:shaddow-lg"
              />
              </Link>
              <h3 className="text-center mt-2 text-lg font-medium pb-10">{packageKe.name}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
</div>


    )

}
export default latestPackages