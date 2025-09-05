// import Cheetah from '../assets/safaris.jpeg'
export default function About() {
  return (
    <section className=" bg-white py-15 px-6 ">
     
      <div className="max-w-7xl mx-auto text-center items-center gap-5 ">
        {/* Text Section */}
        <div>
          {/* <h1 className='text-[var(--primary)] -mt-10 mb-5 underline'>Experience the Extraordinary</h1> */}
          <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-snug">
            Viagens Africa {" "}
            <span className="relative inline-block">
              Safaris 
              <span className="absolute left-0 bottom-1 w-full h-2 bg-yellow-400 -z-10"></span>
            </span>
          </h2>
          <p className="text-md text-gray-800 space-y-4 max-w-5xl mx-auto p-2 whitespace-pre-line font-light">
            Our love for nature necessitated the passion for travel. Africa has amazing people, beautiful sceneries & wildlife and wonderful culture. It is for this reason that we would like the world to come and witness what the gem Africa is for themselves. Whoever comes to Africa falls in love with it and would never want to leave!

We have lived here since our birth and travelled extensively especially within East Africa Region, where our specialty is. Having been trained at Africa’s leading hospitality college – The Kenya Utalii College and several years of work experience at East Africa’s leading Tour Operators, we have the knowledge, skills, expertise and more so confidence to arrange the best and authentic safaris that provide life time memories for our clients….at Mumo Tours and Travel, we do not create the same safari twice!
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
        {/* <div>
          <img
            src= {Cheetah}
            alt="Safari at Sunset"
            className="w-full h-auto  shadow-md"
          />
        </div> */}
      </div>
    

    </section>
  );
}