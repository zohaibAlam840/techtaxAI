import AboutUs from "@/Components/AboutUs";
import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import HeroSection from "@/Components/HeroSection";
import Services from "@/Components/Services";
import StartJourney from "@/Components/StartJourney";
import React from "react";

export default function LandingPage() {
  return (
    <div>
      <Header />
      <HeroSection />
      <Services />
      <AboutUs />
      <StartJourney />
      <Footer />
    </div>
  );
}
