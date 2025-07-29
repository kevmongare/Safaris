

const AfricanSafariPage = () => {
  const similarSafaris = [
    { id: 1, name: 'Serengeti National Park', country: 'Tanzania' },
    { id: 2, name: 'Okavango Delta', country: 'Botswana' },
    { id: 3, name: 'Kruger National Park', country: 'South Africa' },
    { id: 4, name: 'Etosha National Park', country: 'Namibia' },
  ];

  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <section className="relative h-[70vh]">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1546182990-dffeafbe841d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1750&q=80')" }}
        ></div>
        <div className="relative z-20 h-full flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Maasai Mara Safari
          </h1>
          <p className="text-xl md:text-2xl text-white max-w-2xl">
            Experience the Great Migration in Kenya's Premier Wildlife Reserve
          </p>
          <button className="mt-8 bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300">
            Book Your Adventure
          </button>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Discover Maasai Mara</h2>
            <p className="mb-4 text-lg leading-relaxed">
              The Maasai Mara National Reserve in Kenya is one of Africa's most renowned wildlife destinations. 
              Spanning over 1,500 square kilometers, it hosts the spectacular Great Migration where millions of 
              wildebeest, zebra, and gazelle traverse its plains.
            </p>
            <p className="mb-4 text-lg leading-relaxed">
              Home to the Big Five (lion, leopard, rhinoceros, elephant, and buffalo) and over 95 species of mammals, 
              the Mara offers unparalleled game viewing opportunities. Its rolling grasslands, acacia woodlands, 
              and riverine forests create a diverse ecosystem teeming with life.
            </p>
          </div>
          <div className="md:w-1/2">
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl overflow-hidden h-64 bg-gray-200 border-2 border-white shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1599427303058-f04cbcf4756f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                  alt="Maasai Mara landscape" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-xl overflow-hidden h-64 bg-gray-200 border-2 border-white shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1505142468610-359e7d316be0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                  alt="Maasai Mara wildlife" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-xl overflow-hidden h-64 bg-gray-200 border-2 border-white shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1589561253898-768105ca91a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                  alt="Maasai culture" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-xl overflow-hidden h-64 bg-gray-200 border-2 border-white shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1567599754264-fb9a81a16d1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                  alt="Safari jeep" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 bg-amber-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">The Safari Experience</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Game Drives",
                description: "Twice-daily drives in specialized 4x4 vehicles with expert guides",
                icon: "🦁"
              },
              {
                title: "Great Migration",
                description: "Witness river crossings between July-October",
                icon: "🐃"
              },
              {
                title: "Cultural Visits",
                description: "Interact with Maasai communities and learn traditions",
                icon: "👨🏾"
              },
              {
                title: "Balloon Safaris",
                description: "Aerial views at sunrise followed by champagne breakfast",
                icon: "🎈"
              },
              {
                title: "Bird Watching",
                description: "Over 450 bird species including 57 birds of prey",
                icon: "🦅"
              },
              {
                title: "Bush Dinners",
                description: "Fine dining under the African stars",
                icon: "✨"
              }
            ].map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-md border border-amber-100">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">Location Map</h2>
        <div className="aspect-video rounded-xl overflow-hidden shadow-xl border-2 border-amber-200">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d510564.6498664422!2d34.95723734999999!3d-1.565337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f3f20d5d4a1b5%3A0xe6a4991e1e8e1e3d!2sMaasai%20Mara%20National%20Reserve!5e0!3m2!1sen!2sus!4v1689876323437!5m2!1sen!2sus" 
            width="100%" 
            height="100%" 
            loading="lazy"
            className="border-0"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      {/* How to Get There */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">How to Get There</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="text-amber-600 text-3xl mb-4">✈️</div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">By Air</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Daily flights from Nairobi (Wilson Airport)</li>
                <li>Flight duration: 45-60 minutes</li>
                <li>Multiple airstrips throughout the reserve</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="text-amber-600 text-3xl mb-4">🚗</div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">By Road</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>5-6 hour drive from Nairobi</li>
                <li>4WD vehicles essential</li>
                <li>Scenic route through Great Rift Valley</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="text-amber-600 text-3xl mb-4">📅</div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Best Time to Visit</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Wildlife viewing: Year-round</li>
                <li>Great Migration: July - October</li>
                <li>Bird watching: November - April</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Similar Safaris */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">Similar Safaris You Might Like</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {similarSafaris.map((safari) => (
            <div key={safari.id} className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gray-200 border-b">
                <img 
                  src={`https://source.unsplash.com/random/400x300?${safari.name}`} 
                  alt={safari.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-1 text-gray-900">{safari.name}</h3>
                <p className="text-amber-600 font-medium">{safari.country}</p>
                <button className="mt-4 text-amber-700 hover:text-amber-800 font-semibold">
                  Explore Safari →
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AfricanSafariPage;