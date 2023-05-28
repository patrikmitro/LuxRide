import React, { useState, useEffect } from "react";

// styled components
import {
  Wrapper,
  NavbarContainer,
  FormWrapper,
  LogoNavMenuWrapper,
  NavMenuWrapper,
  LogoWrapper,
  UlWrapper,
  BurgerWrapper,
  StyledHeader,
} from "./Header.styles";

//colors
import { Theme } from "../../styles/theme.styles";

//components
import NavList from "./navmenu/NavList";
import Logo from "../../components/Logo";
import NavForm from "./navform/NavForm";
import PhoneNumber from "../../components/PhoneNumber";
import NavBurger from "./mobileview/navburger/NavBurger";

const Navbar = () => {
  const [isOpened, setIsOpened] = useState(false);
  const [isScreenWidth, setIsScreenWidth] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 920) {
        setIsScreenWidth(false);
      } else {
        setIsScreenWidth(true);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });
  const toggleOpen = () => {
    setIsOpened((prevState) => !prevState);
  };
  return (
    <StyledHeader Backgroundcolor={Theme.colors.black}>
      <NavbarContainer>
        <LogoNavMenuWrapper>
          <LogoWrapper>
            <Logo />
          </LogoWrapper>
          <NavMenuWrapper>
            <UlWrapper>
              <NavList
                isOpened={isOpened}
                screenWidth={isScreenWidth}
                onClick={toggleOpen}
              />
            </UlWrapper>
          </NavMenuWrapper>
        </LogoNavMenuWrapper>
        <Wrapper>
          <Wrapper>
            <PhoneNumber />
          </Wrapper>
          <FormWrapper>
            <NavForm />
          </FormWrapper>
          <BurgerWrapper>
            <NavBurger isOpened={isOpened} onClick={toggleOpen} />
          </BurgerWrapper>
        </Wrapper>
      </NavbarContainer>
    </StyledHeader>
  );
};

export default Navbar;
