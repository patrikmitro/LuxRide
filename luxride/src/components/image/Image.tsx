import React from "react";

import styled from "styled-components";

interface ImageProps {
  src: string;
  alt: string;
  width: string;
  padding?: string;
  height?: string;
  objectFit?: string;
}

const StyledImage = styled.img<ImageProps>`
  align-self: center;

  width: ${({ width }) => width};
  padding: ${({ padding }) => padding};
  height: ${({ height }) => height};
  object-fit: ${({ objectFit }) => objectFit};
`;
const Image = ({ src, alt, width, padding, height, objectFit }: ImageProps) => {
  return (
    <StyledImage
      src={src}
      alt={alt}
      width={width}
      padding={padding}
      height={height}
      objectFit={objectFit}
    />
  );
};

export default Image;
