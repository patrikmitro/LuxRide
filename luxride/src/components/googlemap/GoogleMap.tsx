import React from "react";
import styled from "styled-components";

interface Props {
  location: string;
}

const StyledIframe = styled.iframe`
  border: 0;
  width: 100%;
  height: 600px;

  @media only screen and (max-width: 560px) {
    height: 300px;
  }
`;
const GoogleMapWrapper = styled.div`
  width: 100%;
`;

const GoogleMap = () => {
  return (
    <GoogleMapWrapper>
      <StyledIframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.25280131257!2d-74.14448472211717!3d40.69763123290145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2zTmV3IFlvcmssIFNwb2plbsOpIMWhdMOhdHkgYW1lcmlja8Op!5e0!3m2!1ssk!2ssk!4v1686231926585!5m2!1ssk!2ssk"
        loading="lazy"
      />
    </GoogleMapWrapper>
  );
};

export default GoogleMap;
