import React from "react";
import img from "../../../assets/images/MacBookMockUp.png";
import Image from "../../../components/image/Image";
import {
  HowItWorksWrapper,
  HowItWorksContainer,
  TextWrapper,
  ImageWrapper,
  TextInstructionsWrapper,
  TextImageWrapper,
} from "./HowItWorksPage.styles";
import { Theme } from "../../../styles/theme.styles";
import { Text } from "../../../components/text/Text";
import { Paragraph } from "../../../components/text/Paragraph";
import Title from "../../../components/text/Title";
const HowItWorksPage = () => {
  return (
    <HowItWorksWrapper backGroundColor={Theme.colors.black}>
      <HowItWorksContainer>
        <Title
          level={2}
          fontColor={Theme.colors.white}
          fontWeight="500"
          fontSize="44px"
        >
          How It Works
        </Title>
        <TextImageWrapper>
          <TextWrapper>
            <TextInstructionsWrapper>
              <Text
                fontSize="18px"
                fontWeight="600"
                fontColor={Theme.colors.white}
              >
                Create Your Route
              </Text>
              <Paragraph
                fontColor={Theme.colors.whiteGrey}
                fontSize="14px"
                fontWeight="500"
              >
                Enter your pickup & dropoff locations or the number of hours you
                wish to book a car and driver for
              </Paragraph>
            </TextInstructionsWrapper>
            <TextInstructionsWrapper>
              <Text
                fontSize="18px"
                fontWeight="600"
                fontColor={Theme.colors.white}
              >
                Choose Vehicle For You
              </Text>
              <Paragraph
                fontColor={Theme.colors.whiteGrey}
                fontSize="14px"
                fontWeight="500"
              >
                On the day of your ride, you will receive two email and SMS
                updates - one informing you that.
              </Paragraph>
            </TextInstructionsWrapper>
            <TextInstructionsWrapper>
              <Text
                fontSize="18px"
                fontWeight="600"
                fontColor={Theme.colors.white}
              >
                Enjoy The Journey
              </Text>
              <Paragraph
                fontColor={Theme.colors.whiteGrey}
                fontSize="14px"
                fontWeight="500"
              >
                After your ride has taken place, we would appreciate it if you
                could rate your car and driver.
              </Paragraph>
            </TextInstructionsWrapper>
          </TextWrapper>
          <ImageWrapper>
            <Image src={img} alt="macbook-mockup" width="100%" />
          </ImageWrapper>
        </TextImageWrapper>
      </HowItWorksContainer>
    </HowItWorksWrapper>
  );
};

export default HowItWorksPage;
