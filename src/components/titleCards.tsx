import wildlife from '../assets/elephant.avif'
import Cheetah from '../assets/wildlife.jpg'

export default function priceCards(){
    //price comparison
   const safariPackages = [
    {
      title: '4 Day Uganda Fly-in Gorilla Safari',
      image: wildlife, 
      price: 1000,
      details: [
        '1 Night in Entebbe',
        '2 Nights in Bwindi Impenetrable Forest',
        'All meals & House drinks at your Bwindi accommodation',
        'Gorilla Trekking in Bwindi Impenetrable Forest',
        'Community tour that includes a visit to a coffee farm',
        'Flight from Entebbe to Kisoro',
        'Ground transportation by 4x4 Safari Land Cruiser',
        'English speaking Driver/Guide',
        'Gorilla tracking permits',
      ],
    },
    {
      title: '3-Day All Inclusive Fly-in Gorilla Safari',
      image: Cheetah,
      price: 1340,
      details: [
        '2 nights at Nkuringo Bwindi Gorilla Lodge',
        'All meals & House drinks at your Bwindi accommodation',
        'Gorilla Trekking in Bwindi Impenetrable Forest',
        'Gorilla tracking permits',
        'Flight from Entebbe to Kisoro',
        'Ground transportation by 4x4 Safari Land Cruiser',
        'English speaking Driver/Guide',
      ],
    },
  ]
  
    return(
        <>
        {/* price comparison */}

    <section className="bg-[var(--secondary)] py-16 px-6 md:px-20 ">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Post-trip Gorilla Trekking In Uganda
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        {safariPackages.map((pkg, idx) => (
          <div
            key={idx}
            className="bg-white shadow-lg  overflow-hidden flex flex-col"
          >
            <img
              src={pkg.image}
              alt={pkg.title}
              className="w-full h-64 object-cover"
            />

            <div className="p-6 flex flex-col justify-between flex-grow">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  {pkg.title}
                </h3>
                <ul className="space-y-2 text-sm text-gray-700 mb-6">
                  {pkg.details.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      {/* <CheckCircleIcon className="text-green-600 w-4 h-4 mt-1" /> */}
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-end justify-between mt-auto">
                <div>
                  <p className="text-[var(--secondary)]] font-bold text-xl">
                    ${pkg.price} USD
                  </p>
                  <p className="text-xs text-gray-500">
                    Per person per night
                  </p>
                </div>
                <button className="bg-[var(--secondary)] text-white px-5 py-2 rounded-md hover:bg-gray-800 text-sm">
                  View Safari
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>

        </>
    )
}