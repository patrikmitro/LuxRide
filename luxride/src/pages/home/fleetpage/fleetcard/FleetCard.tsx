import React from "react";
import {
  FleetCardWrapper,
  FleetCardContainer,
  TextWrapper,
} from "./FleetCard.styles";
import Title from "../../../../components/text/Title";
import { Theme } from "../../../../styles/theme.styles";
import { Paragraph } from "../../../../components/text/Paragraph";
interface FleetCardProps {}

const FleetCard = () => {
  return (
    <FleetCardWrapper backGroundColor={Theme.colors.lightGrey}>
      <FleetCardContainer>
        <TextWrapper>
          <Title
            level={3}
            fontSize="20px"
            fontColor={Theme.colors.baseBlack}
            fontWeight="500"
          >
            Bussines class
          </Title>
          <Paragraph
            fontSize="14px"
            fontColor={Theme.colors.baseBlack}
            fontWeight="400"
          >
            Mercedes-Benz E-Class, BMW 5 Series, Cadillac XTS or similar
          </Paragraph>
        </TextWrapper>
      </FleetCardContainer>
    </FleetCardWrapper>
  );
};

export default FleetCard;
