import React from "react";
import * as Styled from "./Contact.styles";
import HeroPages from "@/components/heropages/HeroPages";
import GoogleMap from "@/components/googlemap/GoogleMap";

const Contact = () => {
  return (
    <>
      <HeroPages name="Contact Us" />
      <GoogleMap />
    </>
  );
};

export default Contact;
