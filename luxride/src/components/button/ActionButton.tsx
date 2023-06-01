import styled from "styled-components";

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
  background-color: #000;
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
