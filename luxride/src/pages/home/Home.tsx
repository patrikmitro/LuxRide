import React from "react";

import { Theme } from "../../styles/theme.styles";

import Image from "../../components/image/Image";

import {
  MainWrapper,
  LandingPageWrapper,
  ImageWrapper,
  Overlay,
} from "./Home.styles";

import LandingPageBackground from "../../assets/images/MercedesBackGround.png";
const Home = () => {
  return (
    <MainWrapper>
      <LandingPageWrapper>
        <ImageWrapper>
          <Image
            src={LandingPageBackground}
            alt="Mercedes"
            width="100%"
            height="780px"
            objectFit="cover"
          />
          <Overlay backGround={Theme.colors.black} />
        </ImageWrapper>
      </LandingPageWrapper>
    </MainWrapper>
  );
};

export default Home;
