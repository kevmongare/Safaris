import { Routes, Route} from 'react-router-dom';
import './App.css';
import 'swiper/swiper-bundle.css';

//components
import Scroll from './components/ScrollToTop'
import Menu from './components/Menu';
import Blog from '../src/components/blog';
import Whatsapp from './components/whatsapp';
import AboutUs from './components/aboutUs';
import GallerySlider from './components/GallerySlider';
import TopDestinations from './components/TopDestinations';
import About from './components/About';

import DestinationHighlights from './components/DestinationHighlights';
import Hometravelstyles from './components/TravelStyles';
import Hero from './components/hero';
import Footer from './components/footer';
import AboutPage from './components/AboutPage';
import FreeConsultation from './components/Consultation';
import Enquire from './components/EnquirePage'
// import FloatingEnquire from './components/floatingEnquire';

//Destinations
import Destination from './links/destinations/destinationdemo'
import MasaiMara from './links/destinations/masaiMara'
import Kenya from './links/countries/Kenya';
import Tanzania from './links/countries/Tanzania';
import Uganda from  './links/countries/Uganda'
import Rwanda from './links/countries/Rwanda'

// Travelstyles
import TravelStyleExpeditions from './links/TravelStyles/Expeditions';
import Familyholidays from './links/TravelStyles/familyHolidays';
import WildlifeSafaris from './links/TravelStyles/WildlifeSafaris';
import BushAndBeachSafaris from './links/TravelStyles/bushAndBeach';
import OutBoundHolidays from './links/TravelStyles/outboundHolidays';

//Experiences
import Experience from './links/Experience/Experience';

//Packages
import TenDayEastAfrica from './links/TravelStyles/Packages/EastAfrica/tenDayEastAfrica';

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
             <GallerySlider/>
            <TopDestinations />
            <Hometravelstyles />
            <DestinationHighlights />
            <AboutUs />
            <Blog />
            
            </>}/>
            
          
          <Route path="/kenya" element={<Kenya />} />
           <Route path="/tanzania" element={<Tanzania />} />
           <Route path="/uganda" element={<Uganda />} />
           <Route path='/enquire' element ={<Enquire />}/>
           <Route path='/rwanda' element ={<Rwanda/>} />
           <Route path='/masaimara' element = {<MasaiMara/>}/>
           
           
           
           <Route path='TravelStyleExpeditions' element = {<TravelStyleExpeditions/>}/>
           <Route path='wildlifeSafaris' element = {<WildlifeSafaris/>}/>
           <Route path='familyHolidays' element = {<Familyholidays/>}/>
           <Route path='bushAndBeachSafaris' element = {<BushAndBeachSafaris/>}/>
           <Route path='outBoundHolidyas' element = {<OutBoundHolidays/>}/>

          <Route path="/destination" element={<Destination/>} />
          <Route path="/destination" element={<Destination/>} />
          <Route path="/tenDayEastAfrica" element={<TenDayEastAfrica/>} />
          <Route path="/Experiences" element={<Experience/>} />
          <Route path="/About" element={<AboutPage/>} />
          
          
          
          </Routes>
          <FreeConsultation/ >
          {/* <FloatingEnquire /> */}
          <Whatsapp />
          <Footer />
            </>
   
  );
}

export default App;