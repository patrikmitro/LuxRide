import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

interface ImageProps {
  to: string;
  src: string;
  alt: string;
  width: string;
  padding?: string;
  height?: string;
}

const StyledImage = styled.img<ImageProps>`
  align-self: center;
  cursor: pointer;
  width: ${({ width }) => width};
  padding: ${({ padding }) => padding};
  height: ${({ height }) => height};
`;
const ActionImage = ({ to, src, alt, width, padding, height }: ImageProps) => {
  return (
    <Link to={to}>
      <StyledImage
        src={src}
        alt={alt}
        to={to}
        width={width}
        padding={padding}
        height={height}
      />
    </Link>
  );
};

export default ActionImage;
