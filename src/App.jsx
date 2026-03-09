import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import FleetSection from "./components/FleetSection";
import FaqSection from "./components/FaqSection";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <BrowserRouter>
        <Navbar />
        <HeroSection />
        <ServicesSection />
        <FleetSection />
        <FaqSection />

        <main className="flex-1"></main>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
