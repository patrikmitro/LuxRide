import React from "react";

import { Theme } from "../../styles/theme.styles";

import Image from "../../components/image/Image";
import Title from "../../components/text/Title";
import { MainWrapper } from "./Home.styles";

import LandingPage from "./landingpage/LandingPage";

const Home = () => {
  return (
    <MainWrapper>
      <LandingPage />
    </MainWrapper>
  );
};

export default Home;
