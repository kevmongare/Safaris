
const TourOffersPage = () => {
  // Updated tour data with East Africa focus
  const featuredTours = [
    {
      id: 1,
      title: "Kenya Wildlife Safari",
      description: "7-day luxury safari experience in Masai Mara and Amboseli National Parks",
      duration: "7 days",
      tag: "Popular"
    },
    {
      id: 2,
      title: "Uganda Gorilla Trekking",
      description: "4-day adventure with guided gorilla trekking in Bwindi Impenetrable Forest",
      
      duration: "4 days",
      tag: "Limited"
    },
    {
      id: 3,
      title: "Tanzania Migration Experience",
      description: "10-day tour to witness the Great Migration in Serengeti and Ngorongoro",
      
      duration: "10 days",
      tag: "Premium"
    },
    {
      id: 4,
      title: "Rwanda Cultural Journey",
      description: "6-day exploration of Rwanda's culture, history and mountain gorillas",
    
      duration: "6 days",
      tag: "New"
    }
  ];

  return (
    <div className="min-h-screen bg-[#f9f7f2]">
      {/* Hero Section */}
      <div className="relative bg-[#3a3a2c] text-[#f9f7f2] py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">East Africa Safari Deals</h1>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Discover our exclusive offers for Kenya, Uganda, Tanzania and Rwanda. Curated experiences at unbeatable prices.
          </p>
          <button className="bg-[var(--primary)] hover:bg-[#6a3526] text-[#f9f7f2] font-bold py-3 px-8  text-lg transition duration-300 transform hover:scale-105">
            Explore All Safaris
          </button>
        </div>
      </div>

      {/* Featured Offers */}
      <div className="max-w-7xl mx-auto py-16 px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#3a3a2c] mb-4">Featured Safari Packages</h2>
          <div className="w-20 h-1 bg-[var(--primary)] mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredTours.map((tour) => (
            <div 
              key={tour.id}
              className="bg-white  shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border border-[#f9f7f2]"
            >
              <div className="h-48 relative">
                {/* Country flag overlay */}
                <div className="absolute top-3 right-3 bg-[#f9f7f2] px-2 py-1 text-xs font-medium text-[#3a3a2c]">
                  {tour.title.includes("Kenya") && "Kenya"}
                  {tour.title.includes("Uganda") && "Uganda"}
                  {tour.title.includes("Tanzania") && "Tanzania"}
                  {tour.title.includes("Rwanda") && "Rwanda"}
                </div>
                
                {/* Placeholder for image */}
                <div className="bg-gray-200 border-2 border-dashed w-full h-full" />
              </div>
              
              <div className="p-6">
                {tour.tag && (
                  <span className="inline-block px-3 py-1 text-xs font-semibold bg-[#f9f7f2] text-[var(--primary)]  mb-3">
                    {tour.tag}
                  </span>
                )}
                
                <h3 className="text-xl font-bold text-[#3a3a2c] mb-2">{tour.title}</h3>
                <p className="text-[#8c8479] mb-4">{tour.description}</p>
                
                <div className="flex items-center mb-4">
                  
                  <span className="ml-auto text-sm bg-[#f9f7f2] text-[#3a3a2c] px-2 py-1 ">
                    {tour.duration}
                  </span>
                </div>
                
                <button className="w-full bg-[var(--primary)] hover:bg-[#6a3526] text-[#f9f7f2] font-medium py-3  transition duration-300 ">
                  Inquire Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Special Offer Banner */}
      <div className="max-w-7xl mx-auto px-4 mb-16">
        <div className="bg-gradient-to-r from-[var(--primary)] to-[#3a3a2c] -2xl p-8 md:p-12 flex flex-col md:flex-row items-center">
          <div className="flex-1 mb-6 md:mb-0">
            <h3 className="text-3xl font-bold text-[#f9f7f2] mb-2">Last Minute Deal!</h3>
            <p className="text-[#f9f7f2] max-w-md">
              Inquire any East Africa safari in the next 48 hours and get additional 15% discount with code: SAFARI15
            </p>
          </div>
          <div>
            <button className="bg-[#f9f7f2] hover:bg-[#e8e6e1] text-[#3a3a2c] font-bold py-4 px-8 text-lg transition duration-300">
              Claim Discount
            </button>
          </div>
        </div>
      </div>

      {/* Countries Section */}
      <div className="max-w-7xl mx-auto px-4 mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#3a3a2c] mb-4">Explore Our Destinations</h2>
          <p className="text-[#8c8479] max-w-2xl mx-auto">
            Discover the unique experiences each East African country has to offer
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white p-6 -xl shadow-md text-center border border-[#f9f7f2]">
            <div className="bg-gray-200 border-2 border-dashed w-16 h-16 mx-auto mb-4 rounded-full"></div>
            <h3 className="text-xl font-bold text-[#3a3a2c] mb-2">Kenya</h3>
            <p className="text-[#8c8479] mb-4">Wildlife safaris, beaches, and Maasai culture</p>
            <button className="text-[var(--primary)] hover:text-[#6a3526] font-medium">
              View Tours
            </button>
          </div>
          
          <div className="bg-white p-6  shadow-md text-center border border-[#f9f7f2]">
            <div className="bg-gray-200 border-2 border-dashed  w-16 h-16 mx-auto mb-4 rounded-full"></div>
            <h3 className="text-xl font-bold text-[#3a3a2c] mb-2">Uganda</h3>
            <p className="text-[#8c8479] mb-4">Gorilla trekking, primates, and Nile adventures</p>
            <button className="text-[var(--primary)] hover:text-[#6a3526] font-medium">
              View Tours
            </button>
          </div>
          
          <div className="bg-white p-6 shadow-md text-center border border-[#f9f7f2]">
            <div className="bg-gray-200 border-2 border-dashed  w-16 h-16 mx-auto mb-4 rounded-full"></div>
            <h3 className="text-xl font-bold text-[#3a3a2c] mb-2">Tanzania</h3>
            <p className="text-[#8c8479] mb-4">Serengeti, Kilimanjaro, and Zanzibar beaches</p>
            <button className="text-[var(--primary)] hover:text-[#6a3526] font-medium">
              View Tours
            </button>
          </div>
          
          <div className="bg-white p-6 shadow-md text-center border border-[#f9f7f2]">
            <div className="bg-gray-200 border-2 border-dashed  w-16 h-16 mx-auto mb-4 rounded-full"></div>
            <h3 className="text-xl font-bold text-[#3a3a2c] mb-2">Rwanda</h3>
            <p className="text-[#8c8479] mb-4">Mountain gorillas, culture, and scenic beauty</p>
            <button className="text-[var(--primary)] hover:text-[#6a3526] font-medium">
              View Tours
            </button>
          </div>
        </div>
      </div>

      {/* Newsletter */}
      <div className="bg-[var(--secondary)] text-[#f9f7f2] py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-4">Never Miss a Safari Deal</h3>
          <p className="text-[#f9f7f2] mb-8 max-w-xl mx-auto">
            Subscribe to our newsletter for exclusive East Africa offers and travel tips
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-1 px-4 py-3 bg-white text-[#3a3a2c] focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-[var(--primary)] hover:bg-[#6a3526] text-[#f9f7f2] font-bold py-3 px-6  transition duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourOffersPage;