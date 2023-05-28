import React from "react";

//Styled components
import {
  FooterWrapper,
  StyledFooter,
  TopContainer,
  LogoContactContainer,
  FollowUsContainer,
  TopWrapper,
  MiddleWrapper,
  BottomWrapper,
} from "./Footer.styles";

//colors
import { Theme } from "../../styles/theme.styles";

// components
import FollowUs from "./followus/FollowUs";
import Logo from "../../components/Logo";
import PhoneNumber from "../../components/PhoneNumber";
import MainSection from "./mainsection/MainSection";
import LegalSection from "./followus/legalsection/LegalSection";
const Footer = () => {
  return (
    <StyledFooter BackgroundColor={Theme.colors.black}>
      <FooterWrapper>
        <TopWrapper BackgroundColor={Theme.colors.grey}>
          <TopContainer>
            <LogoContactContainer>
              <Logo />
              <PhoneNumber isFooter fontSize="18px" />
            </LogoContactContainer>
            <FollowUsContainer>
              <FollowUs />
            </FollowUsContainer>
          </TopContainer>
        </TopWrapper>
        <MiddleWrapper BackgroundColor={Theme.colors.grey}>
          <MainSection />
        </MiddleWrapper>
        <BottomWrapper>
          <LegalSection />
        </BottomWrapper>
      </FooterWrapper>
    </StyledFooter>
  );
};

export default Footer;
