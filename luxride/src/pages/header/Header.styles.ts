import styled from "styled-components";

interface Props {
  Backgroundcolor: string;
}

export const StyledHeader = styled.header<Props>`
  width: 100%;
  height: 80px;
  background-color: ${({ Backgroundcolor }) => Backgroundcolor};
  @media only screen and (max-width: 920px) {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const NavbarContainer = styled.nav`
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1366px;
  margin: auto;
  padding: 0 16px;
`;

export const FormWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

export const LogoNavMenuWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const NavMenuWrapper = styled.div``;

export const LogoWrapper = styled.div``;

export const UlWrapper = styled.div``;

export const BurgerWrapper = styled.div``;
