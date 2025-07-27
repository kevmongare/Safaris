import savanah from '../assets/savannah-landscape-in-the-national-park-of-kenya-P56CU7Y-1.jpg'
import desert from '../assets/Nyiri-desert.webp'
import wildlife from '../assets/elephant.avif'
import Cheetah from '../assets/wildlife.jpg'

export default function PackagesCard() {
  const packages = [
    {
      title: "10 Days 9 Nights China Canton Fair Package 2025",
      image: savanah,
    },
    {
      title: "Dubai Christmas Packages 2024",
      image: desert,
    },
    {
      title: "7 Days 6 Nights 2024 Thailand Christmas Holidays",
      image: wildlife,
    },
    {
      title: "6 Days 5 Nights Christmas In Dubai",
      image: Cheetah,
    },
  ];

  return (
    <div className="bg-[#8c8479] py-16 px-6 text-center">
      <section className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-4">
          Recommended <span className="text-[var(--primary)]">Themed</span> Packages
        </h2>
        <p className="text-gray-200 mb-12 max-w-2xl mx-auto font-light">
          Leading tour and travels booking website. Over 3,000 packages worldwide. Book travel packages and enjoy your holidays with distinctive experience.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {packages.map((item, index) => (
            <div
              key={index}
              className="bg-white  shadow-md overflow-hidden transition hover:shadow-lg"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-56 object-cover transition-transform duration-300 hover:scale-105"
              />
              <div className="p-5 text-left">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {item.title}
                </h3>
                <button className="mt-2 border border-[#8c8479] text-[#8c8479] px-4 py-2 rounded hover:bg-[#8c8479] hover:text-white transition">
                  View Package
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
