import React from "react";

// styled components
import {
  Nav,
  Wrapper,
  NavbarContainer,
  FormWrapper,
  LogoNavMenuWrapper,
  NavMenuWrapper,
  LogoWrapper,
  UlWrapper,
} from "./Header.styles";

//colors
import { Theme } from "../../styles/theme.styles";

//components
import NavList from "./navmenu/NavList";
import NavLogo from "./navlogo/NavLogo";
import NavForm from "./navform/NavForm";
import NavPhoneNumber from "./navphonenumber/NavPhoneNumber";

const Navbar = () => {
  return (
    <Nav Backgroundcolor={Theme.colors.black}>
      <NavbarContainer>
        <LogoNavMenuWrapper>
          <LogoWrapper>
            <NavLogo />
          </LogoWrapper>
          <NavMenuWrapper>
            <UlWrapper>
              <NavList />
            </UlWrapper>
          </NavMenuWrapper>
        </LogoNavMenuWrapper>
        <Wrapper>
          <Wrapper>
            <NavPhoneNumber />
          </Wrapper>
          <FormWrapper>
            <NavForm />
          </FormWrapper>
        </Wrapper>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
