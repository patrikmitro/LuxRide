import styled from "styled-components";

interface HomeProps {
  backGround?: string;
  backGroundImage?: string;
}

export const MainWrapper = styled.main``;

export const LandingPageWrapper = styled.div<HomeProps>`
  position: relative;
  height: 780px;
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${({ backGroundImage }) => backGroundImage});
`;

export const ImageWrapper = styled.div`
  position: relative;
`;
export const Overlay = styled.div<HomeProps>`
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ backGround }) => backGround};
  opacity: 0.52;
`;

export const HeadingWrapper = styled.div`
  width: 1170px;
  margin: auto;
  z-index: 2;
  position: relative;
`;
