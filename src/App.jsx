import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Conditions from './components/Conditions/Conditions';
import Treatment from './components/Treatment/Treatment';
import Services from './components/Services/Services';
import Testimonals from './components/Testimonals/Testimonals';
import FAQ from './components/FAQ/FAQ';
import CTA from './components/CTA/CTA';
import Footer from './components/Footer/Footer';
import './styles/global.css';
import ContactMarquee from './components/ContactMarquee/ContactMarquee';
import StatsBar from './components/StatsBar/StatsBar';
import WhatsAppButton from './components/WhatsAppButton/WhatsAppButton';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <ContactMarquee />
      <StatsBar />
      <About />
      <Conditions />
      <Treatment />
      <Services />
      <Testimonals />
      <FAQ />
      <CTA />
      <Footer />
      <WhatsAppButton />
    </>
  );
}

export default App;