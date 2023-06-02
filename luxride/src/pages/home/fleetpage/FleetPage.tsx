import React, { useState } from "react";
import {
  FleetPageWrapper,
  FleetPageContainer,
  FleetTitleContainer,
  MoreFleetContainer,
  FleetCardWrapper,
  SliderButtonWrapper,
} from "./FleetPage.styles";
import { Text } from "../../../components/text/Text";
import { Theme } from "../../../styles/theme.styles";
import Image from "../../../components/image/Image";
import Title from "../../../components/text/Title";
import TopRightArrow from "../../../assets/images/TopRightArrow.png";
import { Link } from "react-router-dom";
import FleetCard from "./fleetcard/FleetCard";
import SliderButton from "../../../components/button/SliderButton";
import LeftSliderArrow from "../../../assets/images/LeftSliderArrow.png";
import RightSliderArrow from "../../../assets/images/RightSliderArrow.png";

import { FleetData } from "./fleetcard/FleetData";

const FleetPage = () => {
  const [fleetCardIndex, setFleetCardIndex] = useState(FleetData.length - 1);
  const [fleetCardMargin, setFleetCardMargin] = useState(0);

  const handleFleetCardMarginLeft = () => {
    if (fleetCardIndex >= 0 && fleetCardIndex < FleetData.length - 1) {
      setFleetCardMargin((prevState) => prevState + 430);
      setFleetCardIndex((prevState) => prevState + 1);
    }
  };
  const handleFleetCardMarginRight = () => {
    if (fleetCardIndex <= FleetData.length - 1 && fleetCardIndex > 0) {
      setFleetCardMargin((prevState) => prevState - 430);
      setFleetCardIndex((prevState) => prevState - 1);
    }
  };
  return (
    <FleetPageWrapper>
      <FleetPageContainer>
        <FleetTitleContainer>
          <Title
            level={2}
            fontColor={Theme.colors.baseBlack}
            fontSize="44px"
            fontWeight="500"
          >
            Our fleet
          </Title>
          <Link to="/fleet">
            <MoreFleetContainer>
              <Text
                fontSize="16px"
                fontColor={Theme.colors.baseBlack}
                fontWeight="600"
              >
                More Fleet
              </Text>
              <Image src={TopRightArrow} width="12px" alt="top-right-arrow" />
            </MoreFleetContainer>
          </Link>
        </FleetTitleContainer>
        <FleetCardWrapper marginLeft={fleetCardMargin.toString()}>
          {FleetData.map(({ title, text, url, passengers, luggage }) => (
            <FleetCard
              title={title}
              text={text}
              url={url}
              passengers={passengers}
              luggage={luggage}
            />
          ))}
        </FleetCardWrapper>
        <SliderButtonWrapper>
          <SliderButton
            onClick={handleFleetCardMarginLeft}
            backGroundColor={
              fleetCardIndex >= 0 && fleetCardIndex < FleetData.length - 1
                ? Theme.colors.whiteGrey
                : Theme.colors.white
            }
            borderColor={
              fleetCardIndex >= 0 && fleetCardIndex < FleetData.length - 1
                ? Theme.colors.baseBlack
                : Theme.colors.lightGrey
            }
          >
            <Image src={LeftSliderArrow} alt="left-arrow" width="20px" />
          </SliderButton>

          <SliderButton
            onClick={handleFleetCardMarginRight}
            backGroundColor={
              fleetCardIndex <= 6 && fleetCardIndex > 0
                ? Theme.colors.whiteGrey
                : Theme.colors.white
            }
            borderColor={
              fleetCardIndex <= 6 && fleetCardIndex > 0
                ? Theme.colors.baseBlack
                : Theme.colors.lightGrey
            }
          >
            <Image src={RightSliderArrow} alt="right-arrow" width="20px" />
          </SliderButton>
        </SliderButtonWrapper>
      </FleetPageContainer>
    </FleetPageWrapper>
  );
};

export default FleetPage;
