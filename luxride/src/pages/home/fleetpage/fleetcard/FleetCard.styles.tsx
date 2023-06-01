import styled from "styled-components";

interface FleetCardProps {
  backGroundColor: string;
}

export const FleetCardWrapper = styled.div<FleetCardProps>`
  width: 370px;
  height: 400px;
  border: 1px solid ${({ backGroundColor }) => backGroundColor};
  border-radius: 6px;
`;

export const FleetCardContainer = styled.div`
  padding: 30px;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
