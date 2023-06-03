import React from "react";

import { MainWrapper } from "./Home.styles";

import LandingPage from "./landingpage/LandingPage";
import PartnersPage from "./partnerspage/PartnersPage";
import FleetPage from "./fleetpage/FleetPage";
import HowItWorksPage from "./howitworkspage/HowItWorksPage";
import FaqPage from "./faqpage/FaqPage";
const Home = () => {
  return (
    <MainWrapper>
      <LandingPage />
      <PartnersPage />
      <FleetPage />
      <HowItWorksPage />
      <FaqPage />
    </MainWrapper>
  );
};

export default Home;
