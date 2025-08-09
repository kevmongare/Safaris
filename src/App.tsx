import { Routes, Route} from 'react-router-dom';
import Scroll from './components/ScrollToTop'
import Menu from './components/Menu';
import Blog from '../src/components/blog';
import Whatsapp from './components/whatsapp';
import AboutUs from './components/aboutUs';
import TopDestinations from './components/TopDestinations';
import About from './components/About';
import DestinationHighlights from './components/DestinationHighlights';
import Hometravelstyles from './components/TravelStyles';
import Hero from './components/hero';
import Contact from './components/contact';
import Footer from './components/footer';
import Destination from './links/destinations/destinationdemo'
import MasaiMara from './links/destinations/masaiMara'
import './App.css';
import Kenya from './links/countries/Kenya';
import Tanzania from './links/countries/Tanzania';
import Uganda from  './links/countries/Uganda'
import Rwanda from './links/countries/Rwanda'
import 'swiper/swiper-bundle.css';
import Enquire from './components/EnquirePage'
import FloatingEnquire from './components/floatingEnquire';
import TravelStyleExpeditions from './links/TravelStyles/Expeditions';
import Offer from './components/OfferCard'
import BlogPage from './components/BlogPage';
import AboutPage from './components/AboutPage';
import FreeConsultation from './components/Consultation';

// Layout component for Menu and Footer
function App() {
  return (
        <>
        <Menu />
        <Scroll/>
        <Routes>
          
            <Route path="/" element={<>
            <Hero />
             <About />
            <TopDestinations />
            <Hometravelstyles />
            <DestinationHighlights />
            <AboutUs />
            <Blog />
            <Contact /> 
            </>}/>
            
          
          <Route path="/kenya" element={<Kenya />} />
           <Route path="/tanzania" element={<Tanzania />} />
           <Route path="/uganda" element={<Uganda />} />
           <Route path='/enquire' element ={<Enquire />}/>
           <Route path='/rwanda' element ={<Rwanda/>} />
           <Route path='/masaimara' element = {<MasaiMara/>}/>
           <Route path='TravelStyleExpeditions' element = {<TravelStyleExpeditions/>}/>
          <Route path="/destination" element={<Destination/>} />
          <Route path="/offers" element={<Offer/>} />
          <Route path="/blog" element={<BlogPage/>} />
          <Route path="/About" element={<AboutPage/>} />
          
          
          
          </Routes>
          <FreeConsultation/ >
          <FloatingEnquire />
          <Whatsapp />
          <Footer />
            </>
   
  );
}

export default App;