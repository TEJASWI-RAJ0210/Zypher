import React, { useRef } from "react";
import HeroSection from "./components/HeroSection.jsx";
import FeaturesSection from "./components/FeaturesSection";
import TripPlanner from "./components/TripPlanner";
import TemplatesSection from "./components/TemplatesSection";
import Footer from "./components/Footer";

export default function App() {
  const featuresRef = useRef(null);
  const tripPlannerRef = useRef(null);
  const templatesRef = useRef(null);
  const footerRef = useRef(null);

  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-full bg-gradient-to-b from-pink-100 to-black text-white">
      <HeroSection
        onNavigate={(section) => {
          if (section === "features") scrollToSection(featuresRef);
          if (section === "templates") scrollToSection(templatesRef);
        }}
      />

      <div ref={featuresRef}>
        <FeaturesSection />
      </div>
      <div ref={tripPlannerRef}>
        <TripPlanner />
      </div>
      <div ref={templatesRef}>
        <TemplatesSection />
      </div>
      <div ref={footerRef}>
        <Footer />
      </div>
    </div>
  );
}
