import styled from "styled-components";
interface Props {
  backGroundColor: string;
}
export const PartnersPageWrapper = styled.section<Props>`
  padding: 30px;
  ::after {
    content: "";
    display: block;
    height: 1px;
    width: calc(100% + 60px);
    margin-bottom: -30px;
    margin-left: -30px;
    opacity: 0.5;
    background-color: ${({ backGroundColor }) => backGroundColor};
  }
`;
export const PartnersPageContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1170px;
  margin: 74px auto;
`;
export const TitleWrapper = styled.div``;

export const IconsWrapper = styled.div`
  display: flex;
  gap: 96px;
`;
