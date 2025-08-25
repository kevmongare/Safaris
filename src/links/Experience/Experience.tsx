import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import GiraffeCenter from '../../links/Experience/ExperiencesPictures/excursion-giraffe-center.jpg';
import DavidShedrickElephantOrphanage from '../../links/Experience/ExperiencesPictures/excursion-daphne-shedricks.jpg';
import KarenBlixenMuseum from '../../links/Experience/ExperiencesPictures/excursion-karenblixenmuseum.jpg';
import DaytourtoNairobiNationalPark from '../../links/Experience/ExperiencesPictures/excursion-nairobi-national-park.jpg';
import CarnivoreExperience from '../../links/Experience/ExperiencesPictures/excursion-carnivore.jpg';
import VisittoKiambethuTeaFarm from '../../links/Experience/ExperiencesPictures/excursion-kiambethu-tea-farm.jpg';

import LatestPackages from '../../components/latestPackages';

// African print background
const africanPattern = "data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23d4af37' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E";

const Experiences = [
  'Giraffe Center',
  'David Shedrick\'s Elephant Orphanage',
  'Karen Blixen Museum',
  'Daytour to Nairobi National Park',
  'Carnivore Experience',
  'Visit to Kiambethu Tea Farm'
];

const Top_Experiences = [
  {
    name: 'Giraffe Center',
    slug: 'giraffe-center',
    img: GiraffeCenter,
    details: `The Giraffe Centre is located at Langata, approximately 5 kilometres (3.1 mi) from the centre of Nairobi, Kenya. It was established in order to protect the endangered Rothschild giraffe, Giraffa camelopardalis rothschildi, that is found only in the grasslands of East Africa. The Giraffe Centre was started by Jock Leslie-Melville, the Kenyan grandson of a Scottish Earl, when he and his wife Betty captured a baby giraffe to start a programme of breeding giraffe in captivity at their home in Langata - home of the present centre. Since then the programme has had huge success, resulting in the introduction of several breeding pairs of Rothschild Giraffe into Kenyan national parks. In 1979, Leslie-Melville added an education centre to his (then still private) giraffe sanctuary. By 1983 he had raised enough money to establish the Giraffe Visitor's Centre as a tourist destination in Nairobi.`,
  },
  {
    name: 'David Shedrick\'s Elephant Orphanage',
    slug: 'elephant-orphanage',
    img: DavidShedrickElephantOrphanage,
    details: `Daphne Sheldrick's Elephant Sanctuary - The David Sheldrick Wildlife Trust, a small flexible charity established in the name of the founder Warden of Tsavo East National Park, pioneered the hand-rearing and complicated strategy of successfully rehabilitation of black rhino calves, into established wild rhino communities. They have been responsible for saving many orphaned rhino calves, and their hands on practical experience and inside knowledge of this species is unmatched.

His wife, Daphne Sheldrick, was the first person in the entire world, to successfully hand rear fully milk dependent African Elephant orphans. By 2008, the Trust had successfully raised over 82 infant African Elephant calves. Others are still in the gradual process of reintegration, and others yet are in early infancy at the Daphne Sheldrick Elephant & Rhino Nursery. The Sanctuary has a team of competent Elephant Keepers who take the place of the orphan's lost elephant family, until such time as their transition to the wild herds has been accomplished – this can take up to 10 years, since elephants develop through age progression. In addition to the rearing of orphaned rhinos & elephants, the Trust also contributes to part of the electrical fencing of the northern boundary of the Tsavo National Park, continues to pressure CITES to uphold the ivory ban through aggressive public campaigns, works to repatriate other animal species, runs desnaring operations and a Mobile Veterinary project, as well as establishing many boreholes & windmills and general conservation issues in Tsavo National Park.`,
  },
  {
    name: 'Karen Blixen Museum',
    slug: 'karen-blixen-museum',
    img: KarenBlixenMuseum,
    details: "The Karen Blixen Museum is located in the Nairobi suburb of Karen, Kenya. The museum is dedicated to the Danish author Karen Blixen, who lived in the house from 1917 to 1931. The house and surrounding gardens were made famous by Blixen's memoir, Out of Africa, which was later adapted into an Academy Award-winning film. Visitors can explore the beautifully preserved colonial-era house, see personal effects and photographs of Karen Blixen, and learn about the history of European settlement in Kenya during the early 20th century.",
  },
  {
    name: 'Daytour to Nairobi National Park',
    slug: 'nairobi-national-park',
    img: DaytourtoNairobiNationalPark,
    details: 'Nairobi National Park is unique as it is the only protected area in the world close to a capital city. The park is located just 7 km from Nairobi city center. Despite its proximity to civilization, the park is home to a wide variety of wildlife including lions, leopards, cheetahs, hyenas, buffalos, giraffes, and diverse birdlife with over 400 species recorded. Visitors can enjoy game drives against the backdrop of the city skyline, making for incredible photographic opportunities. The park also has a successful rhinoceros sanctuary that is helping to protect these endangered animals.',
  },
  {
    name: 'Carnivore Experience',
    slug: 'carnivore-experience',
    img: CarnivoreExperience,
    details: 'The Carnivore Restaurant is known as "Africa\'s Greatest Eating Experience." It offers a unique dining experience where meats of various kinds are roasted over charcoal and carved right at your table. Traditional accompaniments and a variety of salads and vegetable dishes are also served. The restaurant features a signature dish known as "Beast of the Day" which could be anything from ostrich, crocodile, or camel to more familiar meats like beef, lamb, and chicken. The atmosphere is lively with live music and entertainment, making it a must-visit for those looking to experience Kenyan cuisine and culture.'
  },
  {
    name: 'Visit to Kiambethu Tea Farm',
    slug: 'kiambethu-tea-farm',
    img: VisittoKiambethuTeaFarm,
    details: 'Kiambethu Tea Farm is located in Limuru, about 30 km from Nairobi, and offers a fascinating insight into the cultivation and production of tea. The farm has been run by the same family since 1910. Visitors can take a guided tour through the tea plantation, learn about the tea production process from leaf to cup, and enjoy a traditional lunch in the beautiful gardens. The farm is also home to a indigenous forest where visitors can take a walk and learn about the native plants and their traditional uses. It\'s a perfect day trip for those interested in agriculture, nature, and colonial history.'
  }
];

const Experience = () => {
  const [active, setActive] = useState<number>(0);
  const [expanded, setExpanded] = useState<boolean>(false);
  const [needsReadMore, setNeedsReadMore] = useState<boolean>(false);
  const detailsRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const handleClick = (index: number) => {
    setActive(index);
    setExpanded(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const toggleReadMore = () => {
    setExpanded(!expanded);
  };

  // Check if text needs "Read More" functionality
  useEffect(() => {
    if (detailsRef.current) {
      const lineHeight = parseInt(getComputedStyle(detailsRef.current).lineHeight);
      const maxHeight = lineHeight * 6; // Show approximately 6 lines
      setNeedsReadMore(detailsRef.current.scrollHeight > maxHeight);
    }
  }, [active]);

  return (
    <>
      {/* Background image section covering up to the menu */}
      <div className="h-full bg-[url('./assets/ROADTRIP.png')] bg-fixed bg-cover bg-center relative">
        <div className="h-full bg-gradient-to-b from-black/70 to-white flex items-end justify-center pb-8">
          {/* <h1 className="text-4xl font-bold text-white">Kenyan Experiences</h1> */}
      

      {/* Main content area */}
      <div className="flex flex-col md:flex-row max-w-6xl mx-auto px-4 py-8 mt-25 relative z-10 ">
        
        {/* Left Sidebar with African Pattern */}
        <div 
          className="w-full md:w-1/4 bg-white p-6  max-h-[75vh] shadow-lg mb-6 md:mb-0 md:sticky md:top-24 md:h-[calc(100vh-120px)] md:overflow-y-auto"
          style={{ backgroundImage: `url(${africanPattern})` }}
        >
          <h2 className="text-xl font-bold text-[var(--secondary)] mb-4 border-b-2 border-[var(--button)] pb-2">
            Experiences
          </h2>
          <ul className="space-y-3">
            {Experiences.map((item, index) => (
              <li
                key={index}
                className={`p-3 rounded-lg cursor-pointer transition-all duration-200 ${
                  active === index
                    ? "bg-[var(--button)] text-white font-semibold shadow-md"
                    : "bg-white/80 text-gray-700 font-medium hover:bg-gray-100"
                }`}
                onClick={() => handleClick(index)}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Experience Details */}
        <div className="w-full md:w-3/4 md:pl-8">
          <div className="bg-white shadow-md overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2 p-6 flex flex-col justify-center">
                <h1 className="text-2xl sm:text-3xl font-bold text-[var(--secondary)] mb-4">
                  {Top_Experiences[active].name}
                </h1>
                <div 
                  ref={detailsRef}
                  className={`text-gray-700 text-sm sm:text-base leading-relaxed mb-6 font-light transition-all duration-300 ${
                    expanded ? '' : 'max-h-70 overflow-hidden'
                  }`}
                >
                  {Top_Experiences[active].details}
                </div>
                
                {needsReadMore && (
                  <button
                    onClick={toggleReadMore}
                    className="text-[var(--button)] font-medium mb-4 focus:outline-none self-start"
                  >
                    {expanded ? 'Read Less' : 'Read More'}
                  </button>
                )}

                <button
                  onClick={() => navigate("/enquire")}
                  className="bg-[var(--button)] text-white px-6 py-3 font-medium cursor-pointer transition-colors duration-200 inline-flex items-center w-fit hover:bg-[var(--button-hover)] mt-4"
                >
                  Inquire
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </button>
              </div>

              <div className="md:w-1/2">
                <img
                  src={Top_Experiences[active].img}
                  alt={Top_Experiences[active].name}
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
        </div>
      </div>

      <LatestPackages />
    </>
  );
};

export default Experience;