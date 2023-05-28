import React from "react";
import { Link } from "react-router-dom";
import brandLogo from "../assets/brand/brandLogo.png";
import styled from "styled-components";
const Image = styled.img`
  align-self: center;
  cursor: pointer;
  width: 120px;
`;
const Logo = () => {
  return (
    <Link to="/">
      <Image src={brandLogo} alt="logo" />
    </Link>
  );
};

export default Logo;
