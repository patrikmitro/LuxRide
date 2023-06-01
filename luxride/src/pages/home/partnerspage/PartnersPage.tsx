import React from "react";
import { Text } from "../../../components/text/Text";
import Title from "../../../components/text/Title";
import Image from "../../../components/image/Image";
import { Theme } from "../../../styles/theme.styles";
import {
  PartnersPageWrapper,
  PartnersPageContainer,
  TitleWrapper,
  IconsWrapper,
} from "./PartnersPage.styles";
import PartnerIcon1 from "../../../assets/images/Partner1.png";
import PartnerIcon2 from "../../../assets/images/Partner2.png";
import PartnerIcon3 from "../../../assets/images/Partner3.png";
import PartnerIcon4 from "../../../assets/images/Partner4.png";
const PartnersPage = () => {
  return (
    <PartnersPageWrapper backGroundColor={Theme.colors.grey}>
      <PartnersPageContainer>
        <TitleWrapper>
          <Title
            level={2}
            fontColor={Theme.colors.black}
            fontSize="24px"
            fontWeight="500"
          >
            The partners who sell
            <br /> our products
          </Title>
        </TitleWrapper>
        <IconsWrapper>
          <Image
            src={PartnerIcon1}
            alt="partner-1"
            width="auto"
            height="26px"
          />
          <Image
            src={PartnerIcon2}
            alt="partner-2"
            width="auto"
            height="26px"
          />
          <Image
            src={PartnerIcon3}
            alt="partner-3"
            width="auto"
            height="26px"
          />
          <Image
            src={PartnerIcon4}
            alt="partner-4"
            width="auto"
            height="26px"
          />
        </IconsWrapper>
      </PartnersPageContainer>
    </PartnersPageWrapper>
  );
};

export default PartnersPage;
