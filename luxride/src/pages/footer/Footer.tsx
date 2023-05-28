import React from "react";

//Styled components
import {
  FooterWrapper,
  StyledFooter,
  TopContainer,
  LogoContactContainer,
  MiddleContainer,
  BottomContainer,
  FollowUsContainer,
} from "./Footer.styles";

import { Theme } from "../../styles/theme.styles";
import FollowUs from "./followus/FollowUs";
import Logo from "../../components/Logo";
import PhoneNumber from "../../components/PhoneNumber";

const Footer = () => {
  return (
    <StyledFooter BackgroundColor={Theme.colors.black}>
      <FooterWrapper>
        <TopContainer>
          <LogoContactContainer>
            <Logo />
            <PhoneNumber isFooter />
          </LogoContactContainer>
          <FollowUsContainer>
            <FollowUs />
          </FollowUsContainer>
        </TopContainer>
      </FooterWrapper>
    </StyledFooter>
  );
};

export default Footer;
