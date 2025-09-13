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

//countries
import Kenya from './links/countries/Kenya';
import Tanzania from './links/countries/Tanzania';
import Uganda from  './links/countries/Uganda'
import Rwanda from './links/countries/Rwanda'

//Destinations Kenyan
import MasaiMara from './links/destinations/KenyanDestination/masaiMara'
import MeruNlp from './links/destinations/KenyanDestination/MeruNLLP';
import LakeNakuru from './links/destinations/KenyanDestination/LakeNakuru';
import TsavoWest from './links/destinations/KenyanDestination/TsavoWest';
import TsavoEast from './links/destinations/KenyanDestination/TsavoEast';
import NairobiNLP from './links/destinations/KenyanDestination/NairobiNationalPark';
import Amboseli from './links/destinations/KenyanDestination/Amboseli';
import LakeNaivasha from './links/destinations/KenyanDestination/LakeNaivasha';
import Abardare from './links/destinations/KenyanDestination/AberdareNLP';
import Samburu from './links/destinations/KenyanDestination/SamburuNLP';

//Destinations Tanzania
import Serengeti from './links/destinations/TanzaniaDestinations/Serengeti';
import Ngorongoro from './links/destinations/TanzaniaDestinations/Ngorongoro';
import GombeStream from './links/destinations/TanzaniaDestinations/GombeStream';
import Tarangire from './links/destinations/TanzaniaDestinations/TarangireNLP';
import Selous from './links/destinations/TanzaniaDestinations/Selous';
import Mahale from './links/destinations/TanzaniaDestinations/Mahale';
import LakeManyara from './links/destinations/TanzaniaDestinations/LakeManyara';
import Ruaha from './links/destinations/TanzaniaDestinations/Ruaha';

//Destinations Uganda
import Murchison from './links/destinations/UgandaDestinations/Murchison';
import Kibale from './links/destinations/UgandaDestinations/Kibale';
import Semliki from './links/destinations/UgandaDestinations/Semliki';
import Queen from './links/destinations/UgandaDestinations/QueenElizabethNLP';
import Mburo from './links/destinations/UgandaDestinations/LakeMburo';
import Kidepo from './links/destinations/UgandaDestinations/Kidepo';
import Bwindi from './links/destinations/UgandaDestinations/bwindi';
import Mgahinga from './links/destinations/UgandaDestinations/Mgahinga';

//Destinationis Rwanda
import Nyungwe from './links/destinations/RwandaDestinations/NyungweForestNationalPark';
import LakeKivu from './links/destinations/RwandaDestinations/LakeKivu';
import Volcanoes from './links/destinations/RwandaDestinations/VolcanoesNationalPark';
import Akagera from './links/destinations/RwandaDestinations/AkageraNationalPark';

// Travelstyles
import TravelStyleExpeditions from './links/TravelStyles/Expeditions';
import Familyholidays from './links/TravelStyles/familyHolidays';
import WildlifeSafaris from './links/TravelStyles/WildlifeSafaris';
import BushAndBeachSafaris from './links/TravelStyles/bushAndBeach';
import OutBoundHolidays from './links/TravelStyles/outboundHolidays';

//Experiences
import Experience from './links/Experience/Experience';

//Packages Wilderness
import TenDayEastAfrica from './links/TravelStyles/Packages/WildlifeSafaris/tenDayEastAfrica';
import EightDaysPureRomance from './links/TravelStyles/Packages/WildlifeSafaris/8DaysPureRomance';
import EightDaysTrueWilderness from './links/TravelStyles/Packages/WildlifeSafaris/8DaysTrueWilderness';
import NineDaysBigFive from './links/TravelStyles/Packages/WildlifeSafaris/9DaysBigFiveAdventure';
import NineDaysTanzania from './links/TravelStyles/Packages/WildlifeSafaris/9DaysTanzaniaBestofNorth';
import ElevenDaysEpicWilderness from './links/TravelStyles/Packages/WildlifeSafaris/11DaysEpicWildernessAdventure';
import ElevenDaysTanzaniaBigCats from './links/TravelStyles/Packages/WildlifeSafaris/11DaysTanzaniaBigCatsSafari';
import TweleveDaysGreateWildlife from './links/TravelStyles/Packages/WildlifeSafaris/12DaysGreatWildlifeEnccounters';

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
            <AboutUs />
            <Hometravelstyles />
            <DestinationHighlights />
            
            <Blog />
            
            </>}/>
            
          
          <Route path="/kenya" element={<Kenya />} />
           <Route path="/tanzania" element={<Tanzania />} />
           <Route path="/uganda" element={<Uganda />} />
           <Route path='/enquire' element ={<Enquire />}/>
           <Route path='/rwanda' element ={<Rwanda/>} />

           //Kenyan Destinations
           <Route path='/masaimara' element = {<MasaiMara/>}/>
           <Route path='/merunationalPark' element = {<MeruNlp/>}/>
           <Route path='/lakenakuru' element = {<LakeNakuru/>}/>
           <Route path='/tsavowest' element = {<TsavoWest/>}/>
           <Route path='/tsavoeast' element = {<TsavoEast/>}/>
           <Route path='/AmboseliNatioinalPark' element = {<Amboseli/>}/>
           <Route path='/NairobiNP' element = {<NairobiNLP/>}/>
           <Route path='/lakenaivasha' element = {<LakeNaivasha/>}/>
           <Route path='/aberdarenationalpark' element = {<Abardare/>}/>
           <Route path='/Samburu-National-Park' element = {<Samburu/>}/>

           //Tanzania destinations
           <Route path='/serengeti' element = {<Serengeti/>}/>
           <Route path='/ngorongoro-crater' element = {<Ngorongoro/>}/>
           <Route path='/gombestream' element = {<GombeStream/>}/>
           <Route path='/Tarangire-National-Park' element = {<Tarangire/>}/>
           <Route path='/Selous-Game-Reserve' element = {<Selous/>}/>
           <Route path='/Mahale-Mountains' element = {<Mahale/>}/>
           <Route path='/Lake-Manyara' element = {<LakeManyara/>}/>
           <Route path='/Ruaha-National-Park' element = {<Ruaha/>}/>

           //Uganda Destinations
           <Route path='/murchison-falls' element = {<Murchison/>}/>
           <Route path='/kibale-national-park' element = {<Kibale/>}/>
           <Route path='/Semliki-National-Park' element = {<Semliki/>}/>
           <Route path='/queen-elizabeth-national-park' element = {<Queen/>}/>
           <Route path='/Lake-Mburo' element = {<Mburo/>}/>
           <Route path='/Kidepo-Valley-National-Park' element = {<Kidepo/>}/>
           <Route path='/Bwindi-Impenetrable-Forest' element = {<Bwindi/>}/>
           <Route path='/Mgahinga-Gorilla-National-Park' element = {<Mgahinga/>}/>

           //Rwanda Destinations
           <Route path='/Nyungwe-Forest-National-Park' element = {<Nyungwe/>}/>
           <Route path='/Lake-Kivu' element = {<LakeKivu/>}/>
           <Route path='/volcanoes-national-park' element = {<Volcanoes/>}/>
           <Route path='/akagera-national-park' element = {<Akagera/>}/>

           
           
           <Route path='TravelStyleExpeditions' element = {<TravelStyleExpeditions/>}/>
           <Route path='wildlifeSafaris' element = {<WildlifeSafaris/>}/>
           <Route path='familyHolidays' element = {<Familyholidays/>}/>
           <Route path='bushAndBeachSafaris' element = {<BushAndBeachSafaris/>}/>
           <Route path='outBoundHolidyas' element = {<OutBoundHolidays/>}/>

         {/* //Packages Wilderness */}
          <Route path="/tenDayEastAfrica" element={<TenDayEastAfrica/>} />
          <Route path="/8daysPureRomance" element={<EightDaysPureRomance/>} />
          <Route path="/8daysTrueWilderness" element={<EightDaysTrueWilderness/>} />
          <Route path="/9DaysBigFive" element={<NineDaysBigFive/>} />
          <Route path="/9DaysTanzania" element={<NineDaysTanzania/>} />
          <Route path="/11daysEpicWilderness" element={<ElevenDaysEpicWilderness/>} />
          <Route path="/11daysTanzaniaBigCats" element={<ElevenDaysTanzaniaBigCats/>} />
          <Route path="/12DaysGreateWildlife" element={<TweleveDaysGreateWildlife/>} />
   



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