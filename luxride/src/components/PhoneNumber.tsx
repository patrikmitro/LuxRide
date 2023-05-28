import React from "react";
import styled from "styled-components";
import { Theme } from "../styles/theme.styles";
import Text from "./text/Text";
import Call from "../assets/images/Call.png";

interface PhoneNumberProps {
  isFooter?: boolean;
}

const Image = styled.img`
  align-self: center;
  cursor: pointer;
`;

const PhoneWrapper = styled.div<PhoneNumberProps>`
  display: flex;
  gap: 6px;

  ${({ isFooter }) =>
    !isFooter &&
    `@media only screen and (max-width: 1100px) {
    display: none;
  }`}
`;

const PhoneNumber = ({ isFooter }: PhoneNumberProps) => {
  return (
    <PhoneWrapper isFooter={isFooter}>
      <Image src={Call} alt="phone number" />
      <Text fontColor={Theme.colors.white} fontSize="14px" fontWeight="500">
        +42 2323 2323
      </Text>
    </PhoneWrapper>
  );
};

export default PhoneNumber;
