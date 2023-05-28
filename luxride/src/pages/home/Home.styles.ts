import styled from "styled-components";

interface HomeProps {
  backGround: string;
}

export const MainWrapper = styled.main``;

export const LandingPageWrapper = styled.div`
  position: relative;
`;

export const ImageWrapper = styled.div``;
export const Overlay = styled.div<HomeProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ backGround }) => backGround};
  opacity: 0.52;
`;
