import wildlife from '../assets/elephant.avif'
export default function details(){
    return(
        <>
        <section className="flex flex-col md:flex-row w-full h-screen">
            {/* Left Side: Image */}
            <div className="w-full md:w-1/2 h-64 md:h-full">
                <img
                src={wildlife}
                alt="Safari vehicle"
                className="w-full h-full object-cover"
                />
            </div>

            {/* Right Side: Text */}
            <div className="w-full md:w-1/2 bg-[var(--primary)] text-white flex flex-col justify-center items-center p-10 text-center">
                <h2 className="text-2xl md:text-4xl font-medium leading-snug">
                Book any combination of <br />
                Asilia properties for <br />
                <span className="font-semibold text-3xl">7+ consecutive nights</span>
                <br />
                and all in-country transfers are on us!
                </h2>
                <p className="mt-8 italic text-lg">— All Asilia</p>
            </div>
            </section>
        </>
    )
}