import React from "react";
import styled from "styled-components";

interface Props {
  children: React.ReactNode;
  fontWeight: string;
  color: string;
  fontSize: string;
}

const Text = styled.h1<Props>`
  font-weight: ${({ fontWeight }) => fontWeight};
  color: ${({ color }) => color};
  font-size: ${({ fontSize }) => fontSize};
`;

const Heading: React.FC<Props> = ({
  children,
  fontWeight,
  color,
  fontSize,
}) => {
  return (
    <Text fontWeight={fontWeight} color={color} fontSize={fontSize}>
      {children}
    </Text>
  );
};

export default Heading;
