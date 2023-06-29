// React import
import React from "react";

// Styled components imports
import {
  FleetPageWrapper,
  FleetPageContainer,
  FleetTitleContainer,
  MoreFleetContainer,
  FleetBackGround,
} from "./FleetPage.styles";

// Component imports
import { Text } from "@/components/text/Text";
import { Theme } from "../../../styles/theme.styles";
import Image from "@/components/image/Image";
import Title from "@/components/text/Title";
import TopRightArrow from "@/assets/images/TopRightArrow.png";
import { Link } from "react-router-dom";
import FleetCard from "./fleetcard/FleetCard";

// Data import
import { FleetData } from "./fleetcard/FleetData";

import SlideShow from "@/components/slideshow/SlideShow";

// FleetPage component
const FleetPage = () => {
  return (
    <FleetPageWrapper>
      <FleetPageContainer>
        {/* Fleet title section */}
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
            {/* "More Fleet" link */}
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

        {/* Fleet slideshow */}
        <SlideShow data={FleetData.length}>
          {/* Mapping through FleetData and rendering FleetCard for each item */}
          {FleetData.map(({ title, text, url, passengers, luggage }, index) => (
            <FleetCard
              key={index}
              title={title}
              text={text}
              url={url}
              passengers={passengers}
              luggage={luggage}
            />
          ))}
        </SlideShow>
      </FleetPageContainer>

      {/* Fleet background */}
      <FleetBackGround />
    </FleetPageWrapper>
  );
};

export default FleetPage;
