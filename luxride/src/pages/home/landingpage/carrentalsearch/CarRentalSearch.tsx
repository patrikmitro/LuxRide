import React from "react";
import { Theme } from "../../../../styles/theme.styles";
import { Text } from "../../../../components/text/Text";

import CalendarIcon from "../../../../assets/images/CalendarIcon.png";
import kokot from "../../../../assets/images/AppleLogo.png";
import {
  SearchWrapper,
  StyledLabel,
  StyledInput,
} from "./CarRentalSearch.styles";

const CarRentaSearch = () => {
  return (
    <SearchWrapper backGround={Theme.colors.white}>
      <StyledLabel>
        <Text fontColor={Theme.colors.grey}>Date</Text>
        <StyledInput type="date"></StyledInput>
      </StyledLabel>

      <StyledLabel>
        <Text fontColor={Theme.colors.grey}>Time</Text>
        <StyledInput type="time"></StyledInput>
      </StyledLabel>
    </SearchWrapper>
  );
};

export default CarRentaSearch;
