import styled from "styled-components";

interface Props {
  BackgroundColor: string;
}

export const StyledFooter = styled.footer<Props>`
  height: 600px;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: ${({ BackgroundColor }) => BackgroundColor};
  color: white;
`;

export const FooterWrapper = styled.div`
  max-width: 1170px;
  padding: 24px 12px;
  margin: auto;
`;

export const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const LogoContactContainer = styled.div`
  display: flex;
  gap: 32px;
  align-items: center;
  @media screen and (max-width: 960px) {
    flex-direction: column;
  }
`;
export const FollowUsContainer = styled.div``;

export const MiddleContainer = styled.div``;
export const BottomContainer = styled.div``;
