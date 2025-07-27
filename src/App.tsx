import React, { useState } from 'react';

const AfricanSafariPage = () => {
  const [activeTab, setActiveTab] = useState('overview');
  
  const safariExperiences = [
    { 
      title: "Game Drives", 
      description: "Twice daily game drives in specialized 4x4 vehicles with expert guides and trackers", 
      icon: "🦁"
    },
    { 
      title: "Great Migration", 
      description: "Witness the spectacular river crossings from July to October", 
      icon: "🐃"
    },
    { 
      title: "Balloon Safari", 
      description: "Aerial views at sunrise followed by champagne breakfast", 
      icon: "🎈"
    },
    { 
      title: "Cultural Visits", 
      description: "Authentic Maasai village visits to learn about traditions", 
      icon: "👨🏾"
    },
    { 
      title: "Bird Watching", 
      description: "Over 470 bird species including raptors and migratory birds", 
      icon: "🦜"
    },
    { 
      title: "Bush Dining", 
      description: "Romantic dinners under the African stars", 
      icon: "✨"
    }
  ];

  const similarSafaris = [
    { 
      id: 1, 
      name: "Serengeti National Park", 
      country: "Tanzania", 
      highlight: "Great Migration, Big Five" 
    },
    { 
      id: 2, 
      name: "Okavango Delta", 
      country: "Botswana", 
      highlight: "Water-based safaris, unique ecosystem" 
    },
    { 
      id: 3, 
      name: "Amboseli National Park", 
      country: "Kenya", 
      highlight: "Elephant herds, views of Mount Kilimanjaro" 
    },
    { 
      id: 4, 
      name: "Kruger National Park", 
      country: "South Africa", 
      highlight: "Diverse wildlife, luxury lodges" 
    }
  ];

  return (
    <div className="font-sans text-gray-800 bg-amber-50">
      {/* Hero Section */}
      <section className="relative h-[80vh]">
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/70 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1546182990-dffeafbe841d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1750&q=80')" }}
        ></div>
        
        <div className="relative z-20 h-full flex flex-col justify-end pb-20 px-4 md:px-8 max-w-7xl mx-auto">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Maasai Mara National Reserve
            </h1>
            <p className="text-xl md:text-2xl text-amber-200 max-w-2xl mb-8">
              Experience the Great Migration in Kenya's Premier Wildlife Sanctuary
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300 shadow-lg">
                Book Your Safari
              </button>
              <button className="bg-transparent hover:bg-amber-600 text-white border-2 border-white hover:border-amber-600 font-bold py-3 px-8 rounded-lg transition duration-300">
                View Packages
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 border-l-4 border-amber-600 pl-4">Discover the Maasai Mara</h2>
            <p className="mb-4 text-lg leading-relaxed">
              The Maasai Mara National Reserve in southwestern Kenya is one of Africa's most renowned wildlife destinations. 
              Spanning over 1,500 square kilometers, it hosts the spectacular Great Migration where millions of 
              wildebeest, zebra, and gazelle traverse its plains.
            </p>
            <p className="mb-4 text-lg leading-relaxed">
              Home to the Big Five (lion, leopard, rhinoceros, elephant, and buffalo) and over 95 species of mammals, 
              the Mara offers unparalleled game viewing opportunities. Its rolling grasslands, acacia woodlands, 
              and riverine forests create a diverse ecosystem teeming with life throughout the year.
            </p>
            <div className="mt-8 bg-amber-100 border-l-4 border-amber-600 p-4 rounded-r">
              <p className="text-lg italic">
                "The Maasai Mara is not just a park, it's an experience that connects you to the raw beauty of Africa."
              </p>
            </div>
          </div>
          
          <div className="lg:w-1/2">
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

      {/* Experience Tabs */}
      <section className="py-16 bg-amber-900 text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">The Safari Experience</h2>
          
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {['overview', 'wildlife', 'accommodation', 'activities', 'culture'].map((tab) => (
              <button
                key={tab}
                className={`px-6 py-3 rounded-full font-medium capitalize transition-colors ${
                  activeTab === tab 
                    ? 'bg-amber-600 text-white' 
                    : 'bg-white/10 text-amber-100 hover:bg-white/20'
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {safariExperiences.map((item, index) => (
              <div key={index} className="bg-amber-800 p-8 rounded-xl shadow-lg border border-amber-700">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-amber-100">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map & How to Get There */}
      <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Map Section */}
          <div>
            <h2 className="text-3xl font-bold mb-8 text-gray-900">Location & Map</h2>
            <div className="aspect-video rounded-xl overflow-hidden shadow-xl border-4 border-amber-200">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d510564.6498664422!2d34.95723734999999!3d-1.565337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f3f20d5d4a1b5%3A0xe6a4991e1e8e1e3d!2sMaasai%20Mara%20National%20Reserve!5e0!3m2!1sen!2sus!4v1689876323437!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                loading="lazy"
                className="border-0"
                allowFullScreen
              ></iframe>
            </div>
            <div className="mt-6 p-6 bg-amber-50 rounded-lg border border-amber-200">
              <h3 className="text-xl font-bold mb-3 text-gray-900">Reserve Information</h3>
              <ul className="space-y-2">
                <li className="flex"><span className="font-bold w-32">Size:</span> 1,510 km² (580 sq mi)</li>
                <li className="flex"><span className="font-bold w-32">Established:</span> 1961</li>
                <li className="flex"><span className="font-bold w-32">Elevation:</span> 1,500-2,180 m (4,920-7,150 ft)</li>
                <li className="flex"><span className="font-bold w-32">Nearest Town:</span> Narok (110 km)</li>
              </ul>
            </div>
          </div>
          
          {/* How to Get There */}
          <div>
            <h2 className="text-3xl font-bold mb-8 text-gray-900">How to Get There</h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-amber-100">
                <div className="flex items-center mb-4">
                  <div className="text-amber-600 text-3xl mr-4">✈️</div>
                  <h3 className="text-xl font-bold text-gray-900">By Air</h3>
                </div>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Daily scheduled flights from Nairobi Wilson Airport (45-60 minutes)</li>
                  <li>Multiple airstrips throughout the reserve (Keekorok, Serena, etc.)</li>
                  <li>Private charters available directly from Jomo Kenyatta International Airport</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-amber-100">
                <div className="flex items-center mb-4">
                  <div className="text-amber-600 text-3xl mr-4">🚗</div>
                  <h3 className="text-xl font-bold text-gray-900">By Road</h3>
                </div>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>5-6 hour drive from Nairobi via the Great Rift Valley</li>
                  <li>4WD vehicles essential, especially during rainy seasons</li>
                  <li>Scenic route passes through Narok town and Maasai villages</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-amber-100">
                <div className="flex items-center mb-4">
                  <div className="text-amber-600 text-3xl mr-4">📅</div>
                  <h3 className="text-xl font-bold text-gray-900">Best Time to Visit</h3>
                </div>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li><span className="font-bold">Wildlife viewing:</span> Year-round</li>
                  <li><span className="font-bold">Great Migration:</span> July - October (river crossings)</li>
                  <li><span className="font-bold">Bird watching:</span> November - April (migratory birds)</li>
                  <li><span className="font-bold">Low season:</span> April-May (lush landscapes, fewer crowds)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Similar Safaris */}
      <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Explore More African Safaris</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover other incredible safari destinations that offer unique wildlife experiences
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {similarSafaris.map((safari) => (
            <div key={safari.id} className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="h-48 bg-gray-200 border-b relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"></div>
                <img 
                  src={`https://source.unsplash.com/random/600x400?${safari.name}`} 
                  alt={safari.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 left-4 z-20">
                  <h3 className="font-bold text-xl text-white">{safari.name}</h3>
                  <p className="text-amber-300 font-medium">{safari.country}</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">{safari.highlight}</p>
                <button className="w-full bg-amber-600 hover:bg-amber-700 text-white font-medium py-2 px-4 rounded-lg transition duration-300">
                  Discover Safari
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-amber-900 text-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready for Your African Adventure?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-amber-100">
            Book your Maasai Mara safari today and experience the wildlife spectacle of a lifetime
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-amber-900 hover:bg-amber-100 font-bold py-4 px-8 rounded-lg transition duration-300 shadow-lg text-lg">
              Request a Quote
            </button>
            <button className="bg-transparent border-2 border-white hover:bg-white/10 font-bold py-4 px-8 rounded-lg transition duration-300 text-lg">
              Contact Our Experts
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AfricanSafariPage;