
import { FaBinoculars, FaHiking, FaCamera } from 'react-icons/fa';

const DestinationHighlights = () => {
  const experiences = [
    {
      icon: <FaBinoculars className="text-3xl" />,
      title: "Wildlife Safaris",
      description: "Track the Big Five in their natural habitats across East Africa's premier national parks"
    },
    {
      icon: <FaHiking className="text-3xl" />,
      title: "Gorilla Trekking",
      description: "Unforgettable encounters with mountain gorillas in Uganda and Rwanda"
    },
    {
      icon: <FaCamera className="text-3xl" />,
      title: "Photography Tours",
      description: "Capture stunning landscapes and wildlife with expert photography guides"
    }
  ];

  return (
    <section id="experiences" className="bg-[url('./assets/happy-intersection-2.svg.svg')] ">
      <div className=" mx-auto px-4 bg-gray-100/70 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Signature Experiences</h2>
          <div className="w-20 h-1 bg-[#c2a75c] mx-auto"></div>
          <p className="max-w-2xl mx-auto mt-6 text-gray-900">
            Discover unique adventures that showcase the best of East Africa
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {experiences.map((exp, idx) => (
            <div 
              key={idx} 
              className="bg-gray-100 p-8 text-center transition-transform hover:-translate-y-2"
            >
              <div className="text-[var(--primary)] mb-5">{exp.icon}</div>
              <h3 className="text-xl font-serif font-bold mb-3 text-[var(--primary)]">{exp.title}</h3>
              <p className="text-gray-600">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DestinationHighlights;