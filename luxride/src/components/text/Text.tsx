import React from "react";
import styled from "styled-components";

interface TextProps {
  children: React.ReactNode;
  fontWeight?: string;
  fontSize?: string;
  fontColor?: string;
  onClick?: () => void;
}

const Span = styled.span<TextProps>`
  font-weight: ${({ fontWeight }) => fontWeight};
  font-size: ${({ fontSize }) => fontSize};
  color: ${({ fontColor }) => fontColor};
`;

const Text = ({ children, fontWeight, fontSize, fontColor }: TextProps) => {
  return (
    <Span fontWeight={fontWeight} fontSize={fontSize} fontColor={fontColor}>
      {children}
    </Span>
  );
};

export default Text;
