import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Contact from './components/Contact';
import WhatsAppButton from './components/WhatsAppButton';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen bg-dark-espresso text-[#282c3f] selection:bg-gold/20 selection:text-gold">
      {/* Sticky Header Navigation */}
      <Header />

      {/* Main content layouts */}
      <main>
        {/* Hero Section with key stats */}
        <Hero />

        {/* Highlight Stats Strip */}
        <Stats />

        {/* Request dynamic callback or quote forum */}
        <Contact />
      </main>

      {/* Floating interactive WhatsApp conversation trigger */}
      <WhatsAppButton />

      {/* Global Brand footer links */}
      <Footer />
    </div>
  );
}

