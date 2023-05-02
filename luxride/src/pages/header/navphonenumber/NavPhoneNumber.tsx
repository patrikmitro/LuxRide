import React from "react";
import styled from "styled-components";
import { Theme } from "../../../styles/theme.styles";
import Text from "../../../components/text/Text";
import Call from "../../../assets/images/Call.png";
const Image = styled.img`
  align-self: center;
  cursor: pointer;
`;

const PhoneWrapper = styled.div`
  display: flex;
  gap: 6px;
  @media only screen and (max-width: 1100px) {
    display: none;
  }
`;

const NavPhoneNumber = () => {
  return (
    <PhoneWrapper>
      <Image src={Call} alt="phone number" />
      <Text fontColor={Theme.colors.white} fontSize="14px" fontWeight="500">
        +42 2323 2323
      </Text>
    </PhoneWrapper>
  );
};

export default NavPhoneNumber;
