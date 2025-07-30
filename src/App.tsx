import { Routes, Route} from 'react-router-dom';
import Menu from './components/Menu';
import Blog from '../src/components/blog';
import Whatsapp from './components/whatsapp';
import AboutUs from './components/aboutUs';
import TopDestinations from './components/TopDestinations';
import About from './components/About';
import DestinationHighlights from './components/DestinationHighlights';
import Hero from './components/hero';
import Contact from './components/contact';
import Footer from './components/footer';
import Destination from '../src/pages/destinationdemo'
import './App.css';
import Kenya from '../src/pages/Kenya';
import 'swiper/swiper-bundle.css';

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
            <DestinationHighlights />
            <Whatsapp />
            <AboutUs />
            <Blog />
            <Contact />
            </>}/>
            
          
          <Route path="/kenya" element={<Kenya />} />
          <Route path="/destination" element={<Destination/>} />
          </Routes>
          <Footer />
            </>
   
  );
}

export default App;