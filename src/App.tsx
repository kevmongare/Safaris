import { Routes, Route} from 'react-router-dom';
import Menu from './components/Menu';
import Blog from '../src/components/blog';
import Whatsapp from './components/whatsapp';
import AboutUs from './components/aboutUs';
import TopDestinations from './components/TopDestinations';
import About from './components/About';
import DestinationHighlights from './components/DestinationHighlights';
import TStyles from './components/TravelStyles';
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

// Layout component for Menu and Footer
function App() {
  return (
        <>
        <Menu />
        <Routes>
            <Route path="/" element={<>
            <Hero />
            <About />
            <TopDestinations />
            <TStyles />
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
          <Route path="/destination" element={<Destination/>} />
          
          </Routes>
          <FloatingEnquire />
          <Whatsapp />
          <Footer />
            </>
   
  );
}

export default App;