import React from "react";
import styled from "styled-components";

interface TextProps {
  children: React.ReactNode;
  fontWeight?: string;
  fontSize?: string;
  fontColor?: string;
  onClick?: () => void;
  hover?: string;
  textDecoration?: string;
}

const Span = styled.span<TextProps>`
  font-weight: ${({ fontWeight }) => fontWeight};
  font-size: ${({ fontSize }) => fontSize};
  color: ${({ fontColor }) => fontColor};

  :hover {
    ${({ hover }) => hover}
  }
`;

const Text = ({
  children,
  fontWeight,
  fontSize,
  fontColor,
  hover,
}: TextProps) => {
  return (
    <Span
      fontWeight={fontWeight}
      fontSize={fontSize}
      fontColor={fontColor}
      hover={hover}
    >
      {children}
    </Span>
  );
};

export default Text;
