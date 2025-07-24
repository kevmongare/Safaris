import Menu from './components/Menu';
import Blog from '../src/components/blog';
import Whatsapp from './components/whatsapp'
import AboutUs from './components/aboutUs';
import TopDestinations from './components/TopDestinations';
import About from './components/About';
import DestinationHighlights from './components/DestinationHighlights';
import Hero from './components/hero';
import Contact from './components/contact';
import Footer from './components/footer'
import './App.css'
// import { FaEnvelope, FaPhone } from 'react-icons/fa';



import 'swiper/swiper-bundle.css'; 



function App() {
  

  return (
    <>
      <Menu />
      <Hero />
       <About />
       <TopDestinations />
       <DestinationHighlights />
       <Whatsapp />
       <AboutUs />
        <Blog />     
        <Contact />
        <Footer />
        
        
    </>
  )
}

export default App
