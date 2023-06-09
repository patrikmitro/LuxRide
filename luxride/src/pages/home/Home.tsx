import React, { useEffect } from "react";

import { MainWrapper } from "./Home.styles";

import LandingPage from "./landingpage/LandingPage";
import PartnersPage from "./partnerspage/PartnersPage";
import FleetPage from "./fleetpage/FleetPage";
import HowItWorksPage from "./howitworkspage/HowItWorksPage";
import FaqPage from "./faqpage/FaqPage";
import ShowCasePage from "./showcasepage/ShowCasePage";
import ServicesPage from "./servicespage/ServicesPage";
import RegionPage from "./regionpage/RegionPage";
import DownloadAppPage from "./downloadapppage/DownloadAppPage";
import TestimonialsPage from "./testimonialspage/TestimonialsPage";
const Home = () => {
  useEffect(() => {
    document.title = "LUXRIDE";
  });
  return (
    <>
      <LandingPage />
      <PartnersPage />
      <FleetPage />
      <HowItWorksPage />

      <ServicesPage />
      <ShowCasePage />
      <RegionPage />
      <TestimonialsPage />
      <FaqPage />
      <DownloadAppPage />
    </>
  );
};

export default Home;
