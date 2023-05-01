import React from "react";
import styled from "styled-components";
import Text from "../../components/text/Text";
import { Wrapper } from "./Navbar.styles";
import { Nav, Image } from "./Navbar.styles";
import { Theme } from "../../styles/theme.styles";

import Logo from "../../assets/brand/Logo.png";
const Navbar: React.FC = () => {
  return (
    <Nav Backgroundcolor={Theme.colors.black}>
      <Wrapper>
        <Image src={Logo} alt="logo" />
      </Wrapper>
    </Nav>
  );
};

export default Navbar;
