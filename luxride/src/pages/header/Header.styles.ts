import styled from "styled-components";

interface Props {
  Backgroundcolor: string;
}

export const Nav = styled.nav<Props>`
  width: 100%;
  height: 80px;
  background-color: ${({ Backgroundcolor }) => Backgroundcolor};
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const NavbarContainer = styled.div`
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1366px;
  margin: auto;
  padding: 0 16px;
`;

export const Button = styled.button<Props>`
  border-radius: 40px;
  padding: 10px 16px;

  background: ${({ Backgroundcolor }) => Backgroundcolor};
  border: none;
  cursor: pointer;
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
