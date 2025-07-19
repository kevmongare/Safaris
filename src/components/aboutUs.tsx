export default function aboutUs(){
    return(
        <>
         {/* about */}
  <section className="shadow-sm  px-6 md:px-16 min-h-[60vh]">
    <div className=' mx-auto text-center -mt-15 py-10 px-10  max-w-3xl relative z-10 bg-white/90 shadow-md rounded-sm'>
      <h1 className="text-3xl font-bold">Viagens Africa Safaris </h1>
    </div>
  <div className="flex flex-col md:flex-row items-center justify-between  py-24">
    {/* <!-- Left Column --> */}
    <div className="md:w-1/2 mb-10 md:mb-0">
      <h1 className="text-5xl md:text-6xl font-extrabold  pt-20 text-white">
        Experience the <br /> Extraordinary
      </h1>
    </div>
    {/* <!-- Right Column --> */}
    <div className="md:w-1/2 max-w-7xl">
      <p className="text-lg text-gray-200 mb-8">
        A journey with Viagens Africa Safaris is a journey through exceptional adventure destinations in some of the most beautiful natural settings in Africa. Travelling with Viagens Africa Safaris is not only a luxury experience that promises to reawaken the soul, but an incredible encounter that captures the imagination of discerning travellers of all ages.
      </p>
      <button className="px-6 py-3 border-2 border-white text-white font-bold rounded-full hover:bg-[#5c5c3d] hover:text-white transition">
        Explore
      </button>
    </div>
  </div>
</section>
        </>
    );
}