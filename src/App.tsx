import { Routes, Route, Outlet } from 'react-router-dom';
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
const MainLayout = () => {
  return (
    <>
      <Menu />
      <Outlet />  {/* This renders the child route components */}
      <Footer />
    </>
  );
};

function App() {
  return (
    <Routes>
      {/* Routes using MainLayout */}
      <Route element={<MainLayout />}>
        {/* Landing page with all components */}
        <Route path="/" element={
          <>
            <Hero />
            <About />
            <TopDestinations />
            <DestinationHighlights />
            <Whatsapp />
            <AboutUs />
            <Blog />
            <Contact />
          </>
        } />
        
        {/* Other pages (only Menu + Page Content + Footer) */}
        <Route path="/Kenya" element={<Kenya />} />
        <Route path='/Destination' element = {<Destination/>}/>
        {/* Add more routes here as needed */}
      </Route>
    </Routes>
  );
}

export default App;