import React from "react";
import styled from "styled-components";
import { Theme } from "../../../styles/theme.styles";
import Text from "../../../components/text/Text";
import Call from "../../../assets/images/Call.png";
const Image = styled.img`
  align-self: center;
  cursor: pointer;
`;

const NavPhoneNumber = () => {
  return (
    <>
      <Image src={Call} alt="phone number" />
      <Text fontColor={Theme.colors.white} fontSize="14px" fontWeight="500">
        +42 2323 2323
      </Text>
    </>
  );
};

export default NavPhoneNumber;
