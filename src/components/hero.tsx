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

