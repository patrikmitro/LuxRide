import React from "react";
import {
  FleetPageWrapper,
  FleetPageContainer,
  FleetTitleContainer,
  MoreFleetContainer,
  FleetBackGround,
} from "./FleetPage.styles";
import { Text } from "@/components/text/Text";
import { Theme } from "../../../styles/theme.styles";
import Image from "@/components/image/Image";
import Title from "@/components/text/Title";
import TopRightArrow from "../../../assets/images/TopRightArrow.png";
import { Link } from "react-router-dom";
import FleetCard from "./fleetcard/FleetCard";

import { FleetData } from "./fleetcard/FleetData";
import SlideShow from "@/components/slideshow/SlideShow";

const FleetPage = () => {
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
        <SlideShow data={FleetData.length}>
          {FleetData.map(({ title, text, url, passengers, luggage }) => (
            <FleetCard
              title={title}
              text={text}
              url={url}
              passengers={passengers}
              luggage={luggage}
            />
          ))}
        </SlideShow>
      </FleetPageContainer>
      <FleetBackGround />
    </FleetPageWrapper>
  );
};

export default FleetPage;
