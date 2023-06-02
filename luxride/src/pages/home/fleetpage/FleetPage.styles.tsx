import styled from "styled-components";

interface Props {
  marginLeft: string;
}
export const FleetPageWrapper = styled.section`
  padding: 30px;
`;

export const FleetPageContainer = styled.div`
  width: 100%;
  max-width: 1170px;
  margin: 90px auto;
  display: flex;
  flex-direction: column;
  gap: 46px;
  @media only screen and (max-width: 990px) {
    margin: 0 auto;
    gap: 24px;
  }
`;

export const FleetTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const MoreFleetContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;
export const FleetCardWrapper = styled.div<Props>`
  transform: translateX(${({ marginLeft }) => marginLeft}px);

  display: flex;
  gap: 32px;
  transition: 1s;
  @media only screen and (max-width: 900px) {
    overflow-x: scroll;
    margin: 0 -30px;
    padding: 0 30px;
  }
`;
export const SliderButtonWrapper = styled.div`
  display: flex;
  gap: 16px;
  @media only screen and (max-width: 900px) {
    display: none;
  }
`;
