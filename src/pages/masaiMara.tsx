import { useParams } from "react-router-dom";
import MasaiMara from '../assets/masai-mara-wildlife.jpg'
import NairobiLodge from '../assets/villa-2-beautiful-bedouin.jpg'
import Nairobitruck from '../assets/safaris.jpeg'
import roadtrip from '../assets/ROADTRIP.png'
import serengeti from  '../assets/safaris.webp'
import hotairballoon from '../assets/Hot air balloon.png'
import elephant from '../assets/elephant.avif'
import cheeta from '../assets/wildlife.jpg'
import savanah from '../assets/savannah-landscape-in-the-national-park-of-kenya-P56CU7Y-1.jpg'
import Menu from '../components/Menu'
import Whatsapp from "../components/whatsapp";
import Footer from "../components/footer";
import '../App.css'

const packageDetails = {
  id: 1,
  title: "7-Day Masai Mara & Serengeti Safari",
  heroImage: MasaiMara,
  location: "Kenya & Tanzania",
  duration: "7 Days / 6 Nights",
  highlights: ["Great Migration", "Luxury Lodges", "Game Drives", "Hot Air Balloon Safari"],
  itinerary: [
  {
    day: 1,
    title: "Arrival in Nairobi",
    desc: "Arrival at Jomo Kenyatta International Airport. Meet and greet by our representative. Transfer to your hotel in Nairobi. Briefing and relaxation.",
    image: NairobiLodge
  },
  {
    day: 2,
    title: "Nairobi City Tour & Drive to Masai Mara",
    desc: "Visit Giraffe Centre and Kazuri Beads. After lunch, drive through the Great Rift Valley to Masai Mara. Evening game drive.",
    image: Nairobitruck
  },
  {
    day: 3,
    title: "Full Day Game Drive in Masai Mara",
    desc: "Explore Masai Mara's Big Five territories. Witness the Great Migration (seasonal). Picnic lunch in the wild.",
    image: roadtrip
  },
  {
    day: 4,
    title: "Hot Air Balloon Safari & Maasai Village Visit",
    desc: "Early morning hot air balloon safari over the savannah. Later, visit a Maasai cultural village for a traditional experience.",
    image: hotairballoon
  },
  {
    day: 5,
    title: "Cross Border to Serengeti",
    desc: "Transfer to Isebania border. Cross into Tanzania and continue into Serengeti. Game drive en route to your lodge.",
    image: serengeti
  },
//   {
//     day: 6,
//     title: "Full Day in Serengeti",
//     desc: "Discover Tanzania's Serengeti plains, known for their endless savannahs and dense predator population.",
//     image: "https://source.unsplash.com/600x400/?cheetah,serengeti"
//   },
//   {
//     day: 7,
//     title: "Fly Back to Nairobi",
//     desc: "Morning game drive or breakfast at leisure. Fly back to Nairobi for your outbound flight or overnight stay.",
//     image: "https://source.unsplash.com/600x400/?airplane,kenya"
//   }
],
  includes: {
    included: ["Accommodation", "All meals", "Park fees", "Local flights", "Transfers"],
    excluded: ["International flights", "Tips", "Personal expenses"],
  },
  gallery: [
    savanah,
    cheeta,
    elephant,
  ],
};

export default function PackageDetails() {
  const { id } = useParams();

  return (
    <>
    <Menu />
    <Whatsapp />

    
    <div className="bg-[var(--primary)] text-gray-200">
      {/* Hero */}
      <section
        className="h-[80vh] bg-cover bg-center relative flex items-center"
        style={{ backgroundImage: `url(${packageDetails.heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative px-10 md:px-32 z-10 text-white">
          <h1 className="text-5xl font-bold mb-2">{packageDetails.title}</h1>
          <p className="text-xl text">{packageDetails.location}</p>
          <p className="mt-2">{packageDetails.duration}</p>
          <a
            href="#book"
            className="mt-6 inline-block bg-[var(--primary)] px-6 py-3 rounded-lg text-white hover:bg-[var(--primary)]/80"
          >
            Book This Safari
          </a>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-16 px-6 md:px-20">
        <h2 className="text-3xl font-bold mb-6">Safari Highlights</h2>
        <div className="flex flex-wrap gap-4 text-gray-700">
          {packageDetails.highlights.map((item, idx) => (
            <span key={idx} className="bg-gray-100 px-4 py-2 rounded-full text-sm">
              {item}
            </span>
          ))}
        </div>
      </section>

      {/* Itinerary */}
<section className="bg-gray-50 py-16 px-6 md:px-20 text-[var(--primary)]">
  <h2 className="text-3xl font-bold mb-6">Itinerary</h2>
  <div className="space-y-10">
    {packageDetails.itinerary.map((item) => (
      <div key={item.day} className="bg-white shadow-lg overflow-hidden md:flex">
        <img src={item.image} alt={`Day ${item.day}`} className="h-60 w-full md:w-1/3 object-cover" />
        <div className="p-6 flex-1">
          <h3 className="font-semibold text-xl mb-2">Day {item.day}: {item.title}</h3>
          <p className="text-gray-800">{item.desc}</p>
        </div>
      </div>
    ))}
  </div>
</section>


      {/* What's Included */}
      <section className="py-16 px-6 md:px-20">
        <h2 className="text-3xl font-bold mb-6 text-white">What's Included</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h4 className="text-xl font-semibold mb-2">Included</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              {packageDetails.includes.included.map((i, idx) => (
                <li key={idx}>{i}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-2">Excluded</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-200">
              {packageDetails.includes.excluded.map((i, idx) => (
                <li key={idx}>{i}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 px-6 md:px-20 bg-white text-[var(--primary)]">
        <h2 className="text-3xl font-bold mb-6">Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {packageDetails.gallery.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt="Safari"
              className=" h-60 object-cover w-full shadow-md"
            />
          ))}
        </div>
      </section>
      <hr />

      {/* CTA */}
      <section id="book" className="bg-white text-[var(--primary)] py-5 px-6 md:px-20 text-center">
                    <section className="bg-gray-100 p-6 sm:p-10 rounded-2xl text-start shadow-xl max-w-3xl mx-auto my-16 border border-[var(--primary)]">
                    <h2 className="text-3xl font-bold text-[#2d3a2e] mb-3">Get a Free Quote for This Safari</h2>
                    <p className="text-sm text-[#4b4b4b] mb-6">
                        <span className="text-[#b98233] font-semibold">No obligation to book</span> – requesting a quote is 100% free and helps us tailor your dream safari.
                    </p>

                    <form className="space-y-5">
                        <div>
                        <label className="block font-medium text-[#2d3a2e] mb-1">Full Name</label>
                        <input
                            type="text"
                            placeholder="e.g. Jane Doe"
                            className="w-full border border-[#d1b89d] rounded-lg px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-[#b98233]"
                        />
                        </div>

                        <div>
                        <label className="block font-medium text-[#2d3a2e] mb-1">Email Address</label>
                        <input
                            type="email"
                            placeholder="you@example.com"
                            className="w-full border border-[#d1b89d] rounded-lg px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-[#b98233]"
                        />
                        </div>

                        <div>
                        <label className="block font-medium text-[#2d3a2e] mb-1">Country of Residence</label>
                        <input
                            type="text"
                            placeholder="Kenya, USA, UK..."
                            className="w-full border border-[#d1b89d] rounded-lg px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-[#b98233]"
                        />
                        </div>

                        <div>
                        <label className="block font-medium text-[#2d3a2e] mb-1">Phone Number</label>
                        <input
                            type="tel"
                            placeholder="+254 712 345678"
                            className="w-full border border-[#d1b89d] rounded-lg px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-[#b98233]"
                        />
                        <p className="text-xs text-gray-500 mt-1">We’ll only use this if we can’t reach you by email.</p>
                        </div>

                        <div>
                        <label className="block font-medium text-[#2d3a2e] mb-1">Your Message</label>
                        <textarea
                            rows={5}
                            placeholder="Tell us your travel dates, group size, interests..."
                            className="w-full border border-[#d1b89d] rounded-lg px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-[#b98233]"
                        ></textarea>
                        </div>

                        <div className="flex items-center">
                        <input type="checkbox" id="remember" className="accent-[#b98233] mr-2" />
                        <label htmlFor="remember" className="text-sm text-[#2d3a2e]">
                            Remember my info for next time
                        </label>
                        </div>

                        <button
                        type="submit"
                        className="bg-[#b98233] hover:bg-[#9d6f2b] text-white font-semibold py-2 px-6 rounded-lg transition duration-300 shadow-md"
                        >
                        Send My Request →
                        </button>
                    </form>
                    </section>
                    <hr />

        <div className="bg-white text-[var(--primary)] py-10 shadow-lg">
            <h2 className="text-4xl font-bold mb-4">Ready to Experience the Wild?</h2>
            <p className="mb-6">Talk to our tour consultant or book your safari now.</p>
            <a
              href="https://wa.me/254712345678"
              className="bg-[var(--primary)] text-white font-bold px-6 py-3 rounded-lg hover:bg-gray-100"
            >
              Book via WhatsApp
            </a>
        </div>
      </section>
    </div>
    <Footer />
    </>
  );
}
