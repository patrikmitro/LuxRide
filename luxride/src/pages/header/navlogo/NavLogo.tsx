import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../../assets/brand/Logo.png";
import styled from "styled-components";
const Image = styled.img`
  align-self: center;
  cursor: pointer;
  width: 120px;
`;
const NavLogo = () => {
  return (
    <Link to="/">
      <Image src={Logo} alt="logo" />
    </Link>
  );
};

export default NavLogo;
