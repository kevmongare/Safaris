import savanah from '../assets/savannah-landscape-in-the-national-park-of-kenya-P56CU7Y-1.jpg'
import desert from '../assets/Nyiri-desert.webp'
import wildlife from '../assets/elephant.avif'
import Cheetah from '../assets/wildlife.jpg'


export default function packagesCard(){
    //packages
    
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
      
    return(
        <>
         {/* packages */}
  <div className=' mx-auto text-center px-10  relative z-10'>
    <section className="py-16 px-4 max-w-7xl mx-auto text-center">
      <div className='bg-white/95 shadow-sm pt-5 pb-5 mb-10 rounded-t-xl'>
        <h2 className="text-4xl font-bold text-gray-800 mb-2">
          Recommended <span className='text-[var(--primary)]'>Themed</span> Packages
        </h2>
        <p className="text-gray-500 mb-10 max-w-xl mx-auto">
          Leading tour and travels booking website. Over 3,000 packages worldwide. Book travel packages and enjoy your holidays with distinctive experience
        </p>
      </div>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 z-20">
        {packages.map((item, index) => (
          <div
            key={index}
            className="overflow-hidden  transition bg-[var(--background)]/25"
          >
            <img
              src={item.image}
              alt={item.title}
              className="h-56 w-full object-cover hover:scale-115"
            />
            <div className="p-4 text-left">
              <h3 className="font-medium text-gray-50 text-2xl mb-1">
                {item.title}
              </h3>
              
              <button
                className="text-white text-sm px-4 py-2 rounded-lg bg-[var(--primary)]">
                View Package
              </button>
            </div>
          </div>
        ))}
      </div>
    </section> 
  </div>

  {/* Packages */}
        
        </>
    )
}