import React, { useEffect } from "react";
import * as Styled from "./AboutUsPage.styles";
import { Theme } from "@/styles/theme.styles";
import Title from "@/components/text/Title";
import { Paragraph } from "@/components/text/Paragraph";
const AboutUsPage = () => {
  useEffect(() => {
    document.title = "About Us";
  });
  return (
    <Styled.AboutUsPageWrapper backGroundColor={Theme.colors.white}>
      <Styled.AboutUsImage backGroundImage="./images/aboutus/about-us-background-image.png" />
      <Styled.AboutUsPageContainer>
        <Styled.TitleWrapper>
          <Styled.TextWrapper>
            <Title
              level={2}
              fontSize="44px"
              fontWeight="500"
              fontColor={Theme.colors.baseBlack}
            >
              We reimagine the way the world moves for the better
            </Title>
            <Paragraph
              fontSize="16px"
              fontWeight="500"
              fontColor={Theme.colors.baseBlack}
            >
              We offer luxury chauffeur driven airport transfers and pickups to
              London. Exceptional Safe, Meet and Greet. One hour of
              complimentary wait time and flight tracking. Professional Drivers
              & Vehicles. Fixed prices on airport transfers. VIP service, get
              your quote today!
            </Paragraph>
            <Paragraph
              fontSize="16px"
              fontWeight="500"
              fontColor={Theme.colors.baseBlack}
            >
              Et, morbi at sagittis vehicula rutrum. Lacus tortor, quam arcu mi
              et, at lectus leo nunc. Mattis cras auctor vel pharetra tempor.
              Rhoncus pellentesque habitant ac tempor. At aliquam euismod est in
              praesent ornare etiam id. Faucibus libero sit vehicula sed
              condimentum. Vitae in nam porttitor rutrum sed aliquam donec sed.
              Sapien facilisi lectus.
            </Paragraph>
          </Styled.TextWrapper>
        </Styled.TitleWrapper>
      </Styled.AboutUsPageContainer>
    </Styled.AboutUsPageWrapper>
  );
};

export default AboutUsPage;
