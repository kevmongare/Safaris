import Menu from './components/Menu';
import Blog from '../src/components/blog';
import Whatsapp from './components/whatsapp'
import AboutUs from './components/aboutUs';
// import Cards from './components/titleCards';
// import Destinations from './components/Destinations';
import Details from './components/details';
// import DestinationHighlights from './components/DestinationHighlights';
// import PackageCard from './components/packagescard'
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
       <Details />
       {/* <Destinations />
       <DestinationHighlights />
       
        */}
       
       {/* <Cards /> */}
       {/* <PackageCard /> */}
       
       
       <Whatsapp />
        <Blog />
        <AboutUs />
        {/* <Contact /> */}
        <Footer />
        
        
    </>
  )
}

export default App
