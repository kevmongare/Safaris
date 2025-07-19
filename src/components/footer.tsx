export default function footer(){
    return(
        <>
                    {/* <!-- Footer --> */}
            <footer className="bg-[var(--primary)] text-white p-6 mt-12 ">
                <div className="flex flex-col md:flex-row justify-between mx-auto max-w-7xl">
                <div>
                    <h4 className="font-bold">Quick Links</h4>
                    <ul>
                    <li><a href="#" className="text-sm">Home</a></li>
                    <li><a href="#" className="text-sm">Contact</a></li>
                    <li><a href="#" className="text-sm">Privacy Policy</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-bold">Contact Us</h4>
                    <p className="text-sm">Nairobi, Kenya</p>
                    <p className="text-sm">info@viagensafricasafaris.com</p>
                </div>
                <div>
                    <h4 className="font-bold">Follow Us</h4>
                    <div className="space-x-2">
                    <a href="#" className="text-sm">Facebook</a>
                    <a href="#" className="text-sm">Instagram</a>
                    </div>
                </div>
                </div>
            </footer>
        </>
    )
}