import React, { useState, useEffect } from "react";

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
  BurgerWrapper,
} from "./Header.styles";

//colors
import { Theme } from "../../styles/theme.styles";

//components
import NavList from "./navmenu/NavList";
import NavLogo from "./navlogo/NavLogo";
import NavForm from "./navform/NavForm";
import NavPhoneNumber from "./navphonenumber/NavPhoneNumber";
import NavBurger from "./mobileview/navburger/NavBurger";

const Navbar = () => {
  const [isOpened, setIsOpened] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1000) {
        setIsOpened(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const toggleOpen = () => {
    setIsOpened((isOpened) => !isOpened);
  };
  return (
    <Nav Backgroundcolor={Theme.colors.black}>
      <NavbarContainer>
        <LogoNavMenuWrapper>
          <LogoWrapper>
            <NavLogo />
          </LogoWrapper>
          <NavMenuWrapper>
            <UlWrapper>
              <NavList isOpened={isOpened} />
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
          <BurgerWrapper>
            <NavBurger isOpened={isOpened} onClick={toggleOpen} />
          </BurgerWrapper>
        </Wrapper>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
