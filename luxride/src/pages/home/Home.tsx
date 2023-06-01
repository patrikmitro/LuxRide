import React from "react";

import { MainWrapper } from "./Home.styles";

import LandingPage from "./landingpage/LandingPage";
import PartnersPage from "./partnerspage/PartnersPage";
import FleetPage from "./fleetpage/FleetPage";
const Home = () => {
  return (
    <MainWrapper>
      <LandingPage />
      <PartnersPage />
      <FleetPage />
    </MainWrapper>
  );
};

export default Home;
