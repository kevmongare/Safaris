export default function Contact(){
    return(
        <>
          {/* <!-- Contact Section --> */}
        <section className="p-8 bg-gray-100" id="contact">
            <h3 className="text-2xl font-bold mb-6 text-center">Contact Us</h3>
            <form className="max-w-xl mx-auto space-y-4">
            <input type="text" placeholder="Your Name" className="w-full border p-2 rounded" />
            <input type="email" placeholder="Your Email" className="w-full border p-2 rounded" />
            <textarea placeholder="Your Message" className="w-full border p-2 rounded h-32"></textarea>
            <button type="submit" className="bg-[var(--primary)] text-white px-4 py-2 rounded">Send Message</button>
            </form>
        </section>
        </>
    )
}