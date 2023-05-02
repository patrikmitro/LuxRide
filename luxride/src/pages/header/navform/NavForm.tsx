import React from "react";
import styled from "styled-components";
import { Theme } from "../../../styles/theme.styles";
import Text from "../../../components/text/Text";

interface Props {
  Backgroundcolor: string;
}
const Button = styled.a<Props>`
  border-radius: 40px;
  padding: 10px 16px;

  background: ${({ Backgroundcolor }) => Backgroundcolor};
  border: none;
  cursor: pointer;
`;

const NavForm = () => {
  return (
    <>
      <Button Backgroundcolor={Theme.colors.grey}>
        <Text fontColor={Theme.colors.white} fontSize="14px" fontWeight="500">
          Log In
        </Text>
      </Button>
      <Button Backgroundcolor={Theme.colors.white}>
        <Text fontColor={Theme.colors.black} fontSize="14px" fontWeight="500">
          Sign Up
        </Text>
      </Button>
    </>
  );
};

export default NavForm;
