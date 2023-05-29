import styled from "styled-components";

interface Props {
  backGround?: string;
  backGroundIcon?: string;
}

export const SearchWrapper = styled.div<Props>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 100px;
  background-color: ${({ backGround }) => backGround};
  padding: 18px;
`;

export const StyledLabel = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
`;
export const StyledInput = styled.input<Props>`
  display: flex;
  flex-direction: row-reverse;
  gap: 8px;
  border: none;
  border-radius: 100px;
  height: 100%;
  width: 180px;

  ::-webkit-calendar-picker-indicator {
    background-color: #f6f6f6;
    padding: 16px;
    border-radius: 50%;

    cursor: pointer;
  }
`;
