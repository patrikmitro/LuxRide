import React from "react";

import { Theme } from "../../../styles/theme.styles";
import { Text } from "../../../components/text/Text";
import Image from "../../../components/image/Image";
import Title from "../../../components/text/Title";
import {
  LandingPageWrapper,
  ImageWrapper,
  Overlay,
  HeadingWrapper,
  LandingPageContainer,
} from "../landingpage/LandingPage.styles";

import LandingPageBackground from "../../../assets/images/MercedesBackGround.png";
import CarRentaSearch from "./carrentalsearch/CarRentalSearch";
const LandingPage = () => {
  return (
    <LandingPageWrapper backGroundImage={LandingPageBackground}>
      <LandingPageContainer>
        <HeadingWrapper>
          <Text fontColor={Theme.colors.white} fontSize="16px">
            Where Would You Like To Go?
          </Text>
          <Title
            level={1}
            fontColor={Theme.colors.white}
            fontSize="52px"
            fontWeight="500"
          >
            Your Personal <br />
            Chauffeur Services
          </Title>
        </HeadingWrapper>

        <CarRentaSearch />
      </LandingPageContainer>
      <Overlay backGround={Theme.colors.black} />
    </LandingPageWrapper>
  );
};

export default LandingPage;
