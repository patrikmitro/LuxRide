import styled from "styled-components";

interface Props {
  Backgroundcolor: string;
}

export const Nav = styled.nav<Props>`
  width: 100%;
  height: 80px;
  background-color: ${({ Backgroundcolor }) => Backgroundcolor};
`;
export const Image = styled.img``;

export const Wrapper = styled.div``;
