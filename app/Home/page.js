import AboutUs from "@/Components/AboutUs";
import HeroSection from "@/Components/HeroSection";
import Services from "@/Components/Services";
import StartJourney from "@/Components/StartJourney";
import React from "react";

export default function LandingPage() {
  return (
    <div>
      <HeroSection />
      <Services />
      <AboutUs />
      <StartJourney />
    </div>
  );
}
