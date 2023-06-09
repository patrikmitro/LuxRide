import styled from "styled-components";

interface Props {
  backGroundColor?: string;
  size?: number;
  rotate?: number;
  backGroundImage?: string;
}

export const DownloadAppPageWrapper = styled.div<Props>`
  position: relative;
  padding: 24px;
  background-color: ${({ backGroundColor }) => backGroundColor};
  overflow: hidden;

  z-index: 1;
`;
export const DownloadAppPageContainer = styled.div`
  max-width: 1170px;
  margin: 76px auto;
  z-index: 4;
  display: flex;
  flex-direction: column;
  gap: 14px;
  p {
    padding-bottom: 24px;
  }
  @media only screen and (max-width: 560px) {
    margin: 0 auto;
    gap: 0;
    p {
      padding: 8px;
    }
  }
`;
export const ContourLine = styled.div<Props>`
  position: absolute;
  height: ${({ size }) => size}px;
  width: ${({ size }) => size}px;
  border: 1px solid rgba(0, 0, 0, 0.07);
  top: 100%;
  left: 50%;
  z-index: -2;
  border-radius: 30%;
  transform-origin: top left;
  transform: rotate(${({ rotate }) => rotate}deg) translate(-50%, -50%);
`;
export const BackGroundImage = styled.div<Props>`
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-image: url(${({ backGroundImage }) => backGroundImage});
  background-repeat: no-repeat;
  background-position: right;
  @media only screen and (max-width: 990px) {
    display: none;
  }
`;
export const ButtonWrapper = styled.div`
  display: flex;
  gap: 24px;
  @media only screen and (max-width: 560px) {
    flex-direction: column;
    gap: 0;
  }
`;
