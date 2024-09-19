import AboutUs from "@/components/AboutUs";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Services from "@/components/Services";
import StartJourney from "@/components/StartJourney";
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
