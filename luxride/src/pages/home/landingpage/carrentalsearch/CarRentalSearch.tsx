import React, { useState } from "react";
import { Theme } from "../../../../styles/theme.styles";
import { Text } from "@/components/text/Text";
import Image from "@/components/image/Image";
import {
  SearchWrapper,
  StyledLabel,
  StyledInput,
  StyledSelect,
  StyledOption,
  SearchContainer,
} from "./CarRentalSearch.styles";

import FromLocationIcon from "../../../../assets/images/FromLocationIcon.png";
import ToLocationIcon from "../../../../assets/images/ToLocationIcon.png";
import SearchIcon from "../../../../assets/images/SearchIcon.png";
import { LocationsData } from "./LocationsData";
import ActionButton from "@/components/button/ActionButton";
const CarRentalSearch = () => {
  const [time, setTime] = useState("");

  const onChangeDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTime(e.target.value);
  };

  return (
    <SearchWrapper>
      <SearchContainer backGround={Theme.colors.white}>
        <StyledLabel backGround={Theme.colors.white}>
          <StyledInput type="date" onChange={onChangeDate} />
        </StyledLabel>

        <StyledLabel backGround={Theme.colors.white}>
          <StyledInput type="time" />
        </StyledLabel>
        <StyledLabel backGround={Theme.colors.white}>
          <Image src={FromLocationIcon} alt="from-arrow" width="20px" />
          <StyledSelect>
            <StyledOption value="Select Location">Select Location</StyledOption>
            {LocationsData.map(({ value, location }) => (
              <StyledOption key={value} value={value}>
                {location}
              </StyledOption>
            ))}
          </StyledSelect>
        </StyledLabel>
        <StyledLabel backGround={Theme.colors.white}>
          <Image src={ToLocationIcon} alt="from-arrow" width="20px" />
          <StyledSelect>
            <StyledOption value="Select Location">Select Location</StyledOption>
            {LocationsData.map(({ value, location }) => (
              <StyledOption key={value} value={value}>
                {location}
              </StyledOption>
            ))}
          </StyledSelect>
        </StyledLabel>

        <ActionButton borderRadius="60px">
          <Image src={SearchIcon} alt="search-icon" width="20px" />
          <Text fontSize="16px" fontColor={Theme.colors.white} fontWeight="500">
            Search
          </Text>
        </ActionButton>
      </SearchContainer>
    </SearchWrapper>
  );
};

export default CarRentalSearch;
