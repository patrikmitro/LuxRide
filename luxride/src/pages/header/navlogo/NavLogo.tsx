import React from "react";

import Logo from "../../../assets/brand/Logo.png";
import styled from "styled-components";
const Image = styled.img`
  align-self: center;
  cursor: pointer;
`;
const NavLogo = () => {
  return <Image src={Logo} alt="logo" />;
};

export default NavLogo;
