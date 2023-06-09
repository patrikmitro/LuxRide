import styled from "styled-components";
import { Theme } from "@/styles/theme.styles";
interface ButtonProps {
  children: React.ReactNode;
  borderRadius: string;
  backGroundColor?: string;

  onClick?: () => void;
}

const StyledActionButton = styled.button<ButtonProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  padding: 14px 24px;
  border-radius: ${({ borderRadius }) => borderRadius};
  background-color: ${Theme.colors.black};
  :hover {
    background-color: ${Theme.colors.orange};
  }
  cursor: pointer;
`;

const ActionButton = ({
  children,
  backGroundColor,
  borderRadius,
  onClick,
}: ButtonProps) => {
  return (
    <StyledActionButton
      borderRadius={borderRadius}
      backGroundColor={backGroundColor}
      onClick={onClick}
    >
      {children}
    </StyledActionButton>
  );
};

export default ActionButton;
