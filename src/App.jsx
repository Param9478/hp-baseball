import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Divisions from './pages/Divisions';
import News from './pages/News';
import ScrollToTop from './components/ScrollToTop';
import Schedule from './pages/Schedule';
import ContactSection from './components/ContactSection';


export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-[#050505] text-white font-body selection:bg-brand-gold selection:text-black">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/divisions" element={<Divisions />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/news" element={<News />} />
            <Route path='/schedule' element={<Schedule />} />

          </Routes>
        </main>
        <ContactSection />
        <Footer />
      </div>
    </Router>
  );
}