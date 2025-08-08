import { FaMountain, FaUsers, FaHeart, FaHandshake, FaMapMarkedAlt, FaAward } from 'react-icons/fa';

const AboutPage = () => {
  const teamMembers = [
    { id: 1, name: "David Kamau", role: "Founder & CEO", bio: "20+ years in East African tourism" },
    { id: 2, name: "Sarah Nalwoga", role: "Tour Operations", bio: "Uganda safari specialist" },
    { id: 3, name: "James Mwita", role: "Guide Training", bio: "Tanzanian wildlife expert" },
    { id: 4, name: "Grace Uwase", role: "Customer Experience", bio: "Rwandan cultural ambassador" }
  ];

  const values = [
    { icon: <FaHeart className="text-3xl" />, title: "Passion", description: "We're deeply passionate about sharing East Africa's wonders" },
    { icon: <FaHandshake className="text-3xl" />, title: "Integrity", description: "Ethical operations and transparent pricing" },
    { icon: <FaMapMarkedAlt className="text-3xl" />, title: "Expertise", description: "Local knowledge you can trust" },
    { icon: <FaAward className="text-3xl" />, title: "Excellence", description: "Consistently delivering exceptional experiences" }
  ];

  const stats = [
    { value: "12+", label: "Years Experience" },
    { value: "15K+", label: "Happy Travelers" },
    { value: "98%", label: "Positive Reviews" },
    { value: "4", label: "Countries Covered" }
  ];

  return (
    <div className="min-h-screen bg-[#f9f7f2]">
     

      {/* Hero Section */}
      <div className="relative bg-[#3a3a2c] text-[#f9f7f2] py-20 md:py-28 h-[80vh] align-middle items-center text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Our East African Story</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Dedicated to creating unforgettable safari experiences in Kenya, Uganda, Tanzania and Rwanda
          </p>
        </div>
      </div>

      {/* Our Story */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-96"></div>
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-[#3a3a2c] mb-6 pb-2 border-b-2 border-[#7c3e2d] inline-block">Our Journey</h2>
            <p className="text-[#8c8479] mb-4">
              SafariExplorer began in 2012 with a simple mission: to showcase the breathtaking beauty of East Africa while supporting local communities and conservation efforts. Founded by David Kamau, a Kenyan native with a passion for wildlife, our company has grown from a small tour operator to a trusted name in East African safaris.
            </p>
            <p className="text-[#8c8479] mb-4">
              What started as a single Land Cruiser taking small groups through the Masai Mara has evolved into a comprehensive safari company offering experiences across Kenya, Uganda, Tanzania and Rwanda. Despite our growth, we've maintained our commitment to authentic, sustainable tourism that benefits both travelers and local communities.
            </p>
            <p className="text-[#8c8479]">
              Today, we're proud to have introduced over 15,000 travelers to the wonders of East Africa while contributing to conservation projects and community development across the region.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-[#3a3a2c] text-[#f9f7f2] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="p-6">
                <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Our Mission */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#3a3a2c] mb-4">Our Mission & Values</h2>
          <div className="w-20 h-1 bg-[#7c3e2d] mx-auto mb-6"></div>
          <p className="text-[#8c8479] max-w-3xl mx-auto">
            At SafariExplorer, we're committed to creating meaningful connections between travelers and the extraordinary landscapes, wildlife, and cultures of East Africa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-md text-center border border-[#f9f7f2]">
              <div className="text-[#7c3e2d] mb-4 flex justify-center">
                {value.icon}
              </div>
              <h3 className="text-xl font-bold text-[#3a3a2c] mb-3">{value.title}</h3>
              <p className="text-[#8c8479]">{value.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Team Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-white">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#3a3a2c] mb-4">Meet Our Team</h2>
          <div className="w-20 h-1 bg-[#7c3e2d] mx-auto mb-6"></div>
          <p className="text-[#8c8479] max-w-3xl mx-auto">
            Our passionate team of East Africa experts brings local knowledge, deep connections, and genuine enthusiasm to every safari we create.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map(member => (
            <div key={member.id} className="bg-white rounded-xl shadow-md overflow-hidden text-center border border-[#f9f7f2]">
              <div className="h-56 bg-gray-200 border-2 border-dashed"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#3a3a2c] mb-1">{member.name}</h3>
                <p className="text-[#7c3e2d] font-medium mb-3">{member.role}</p>
                <p className="text-[#8c8479]">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Conservation */}
      <div className="bg-[#f9f7f2] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-[#3a3a2c] mb-6 pb-2 border-b-2 border-[#7c3e2d] inline-block">Conservation Commitment</h2>
              <p className="text-[#8c8479] mb-4">
              At SafariExplorer, we believe tourism should actively contribute to conservation. That's why we partner with local organizations across East Africa to protect wildlife habitats and support endangered species.
              </p>
              <p className="text-[#8c8479] mb-4">
              For every safari booked, we contribute $50 to conservation initiatives in the region. These funds support anti-poaching patrols, habitat restoration, and community conservation programs that create sustainable alternatives to wildlife exploitation.
              </p>
              <p className="text-[#8c8479] mb-6">
              Our travelers also have the opportunity to visit these projects and see firsthand how their safari makes a difference.
              </p>
              <button className="bg-[#7c3e2d] hover:bg-[#6a3526] text-[#f9f7f2] font-medium py-3 px-6 rounded-lg transition-colors">
                Learn About Our Projects
              </button>
            </div>
            <div className="md:w-1/2">
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-96"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="bg-[#3a3a2c] text-[#f9f7f2] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Traveler Experiences</h2>
            <div className="w-20 h-1 bg-[#7c3e2d] mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#f9f7f2] text-[#3a3a2c] p-8 rounded-xl">
              <div className="text-[#7c3e2d] text-5xl mb-4">"</div>
              <p className="italic mb-6">
              "Our Uganda gorilla trekking experience with SafariExplorer was life-changing. The expertise of our guide and the care shown to both travelers and wildlife was exceptional."
              </p>
              <div className="font-bold">— Michael & Sarah, USA</div>
            </div>
            
            <div className="bg-[#f9f7f2] text-[#3a3a2c] p-8 rounded-xl">
              <div className="text-[#7c3e2d] text-5xl mb-4">"</div>
              <p className="italic mb-6">
              "From the Serengeti to Zanzibar, every detail was perfect. We felt we were experiencing the real Tanzania, not just the tourist highlights."
              </p>
              <div className="font-bold">— Emma, Australia</div>
            </div>
            
            <div className="bg-[#f9f7f2] text-[#3a3a2c] p-8 rounded-xl">
              <div className="text-[#7c3e2d] text-5xl mb-4">"</div>
              <p className="italic mb-6">
              "The cultural interactions in Rwanda and Kenya gave us insights we never would have discovered on our own. Truly transformative travel."
              </p>
              <div className="font-bold">— James & Family, UK</div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h2 className="text-3xl font-bold text-[#3a3a2c] mb-6">Ready for Your East African Adventure?</h2>
        <p className="text-[#8c8479] max-w-2xl mx-auto mb-8">
        Let our team of experts craft your perfect safari experience in Kenya, Uganda, Tanzania or Rwanda.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-[#7c3e2d] hover:bg-[#6a3526] text-[#f9f7f2] font-bold py-3 px-8 rounded-lg transition-colors">
            Explore Our Safaris
          </button>
          <button className="bg-[#3a3a2c] hover:bg-[#2c2c22] text-[#f9f7f2] font-bold py-3 px-8 rounded-lg transition-colors">
            Contact Our Team
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;