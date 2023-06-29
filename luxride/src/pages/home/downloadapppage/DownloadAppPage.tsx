import React from "react";
import {
  ContourLine,
  DownloadAppPageContainer,
  DownloadAppPageWrapper,
  BackGroundImage,
  ButtonWrapper,
} from "./DownloadAppPage.styles";
import Title from "@/components/text/Title";
import { Theme } from "@/styles/theme.styles";
import AppImage from "@/assets/images/AppImage.png";
import { Paragraph } from "@/components/text/Paragraph";
import DownloadAppButton from "@/components/button/DownloadAppButton";
import AppleLogo from "@/assets/images/AppleLogo.png";
import GooglePlayLogo from "@/assets/images/PlayStoreLogo.png";
import { Text } from "@/components/text/Text";
const DownloadAppPage = () => {
  const ContourLines = [];
  let size: number = 108;
  let rotate: number = 15;
  for (let i: number = 0; i < 20; i++) {
    ContourLines.push(<ContourLine size={size} rotate={rotate} />);
    size += 128;
    rotate += 6;
  }

  return (
    <DownloadAppPageWrapper backGroundColor={Theme.colors.lightRed}>
      <DownloadAppPageContainer>
        <Title level={2} fontSize="44px" fontWeight="500">
          Download the app
        </Title>
        <Paragraph fontSize="16px" fontWeight="500">
          Have a personal driver at your fingertips no matter where you <br />{" "}
          are with our easy-to-use smartphone app.
        </Paragraph>
        <ButtonWrapper>
          <DownloadAppButton
            src={AppleLogo}
            alt="apple logo"
            width="120px"
            height="80px"
          >
            <Text fontColor={Theme.colors.white} fontWeight="600">
              App Store
            </Text>
          </DownloadAppButton>
          <DownloadAppButton
            src={GooglePlayLogo}
            alt="apple logo"
            width="120px"
            height="100px"
          >
            <Text fontColor={Theme.colors.white} fontWeight="600">
              Google Play
            </Text>
          </DownloadAppButton>
        </ButtonWrapper>
      </DownloadAppPageContainer>
      <BackGroundImage backGroundImage={AppImage} />
      {ContourLines.map((item, key) => item)}
    </DownloadAppPageWrapper>
  );
};

export default DownloadAppPage;
