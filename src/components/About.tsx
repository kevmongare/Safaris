import Cheetah from '../assets/safaris.jpeg'
export default function FocusSafariSection() {
  return (
    <section className="bg-white py-16 px-6 shadow-sm">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-10 ">
        {/* Text Section */}
        <div>
          <h1 className='text-[var(--primary)] -mt-10 mb-5 underline'>Experience the Extraordinary</h1>
          <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-snug">
            Viagens Africa {" "}
            <span className="relative inline-block">
              Safaris 
              <span className="absolute left-0 bottom-1 w-full h-2 bg-yellow-400 -z-10"></span>
            </span>
          </h2>
          <p className="text-lg text-gray-800 space-y-4">
            We know wildlife is the heart of your safari,<span className="underline decoration-yellow-400 font-bold"> Viagens Africa Safaris </span> is a dynamic and a fast growing Tours and Ticketing Company. That’s why every guest enjoys a{" "}
            
              private and professional local guide
            
            , giving you the freedom to tailor your game drives.We{" "}
            <span className="underline decoration-yellow-400">
              offer off the beaten track 
            </span>{" "}
            – Inbound and Outbound travel products.
            {/* {" "}
            <span className="underline decoration-yellow-400">
              incredible big cat sightings
            </span>
            . Plus, with packed breakfasts and lunches, you can spend more time{" "}
            <span className="underline decoration-yellow-400">
              exploring the wild
            </span>{" "}
            and less time worrying about anything else. */}
          </p>
        </div>
         {/* Image from earlier URL */}
        <div>
          <img
            src= {Cheetah}
            alt="Safari at Sunset"
            className="w-full h-auto  shadow-md"
          />
        </div>
      </div>
    </section>
  );
}

// import wildlife from '../assets/elephant.avif'
// export default function details(){
//     return(
//         <>
//         <section className="flex flex-col md:flex-row w-full h-screen">
//             {/* Left Side: Image */}
//             <div className="w-full md:w-1/2 h-64 md:h-full">
//                 <img
//                 src={wildlife}
//                 alt="Safari vehicle"
//                 className="w-full h-full object-cover"
//                 />
//             </div>

//             {/* Right Side: Text */}
//             <div className="w-full md:w-1/2 bg-[var(--primary)] text-white flex flex-col justify-center items-center p-10 text-center">
//                 <h2 className="text-2xl md:text-4xl font-medium leading-snug">
//                 Book any combination of <br />
//                 Asilia properties for <br />
//                 <span className="font-semibold text-3xl">7+ consecutive nights</span>
//                 <br />
//                 and all in-country transfers are on us!
//                 </h2>
//                 <p className="mt-8 italic text-lg">— All Asilia</p>
//             </div>
//             </section>
//         </>
//     )
// }