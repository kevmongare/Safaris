import Menu from './components/Menu';
import Blog from '../src/components/blog';
import Whatsapp from './components/whatsapp'
import AboutUs from './components/aboutUs';
// import Details from './components/details';
import PackageCard from './components/packagescard'
import Hero from './components/hero';
// import Contact from './components/contact';
import Footer from './components/footer'
import './App.css'
// import { FaEnvelope, FaPhone } from 'react-icons/fa';



import 'swiper/swiper-bundle.css'; 



function App() {
  

  return (
    <>
      <Menu />
      <Hero />
       <AboutUs />
       <PackageCard />
       <Whatsapp />
        <Blog />
        {/* <Contact /> */}
        <Footer />
        
        {/* <Details /> */}
    </>
  )
}

export default App
