import React from "react";

import * as Styled from "./ContactForm.styles";

import Input from "@/components/input/Input";
import Title from "@/components/text/Title";
import { Theme } from "@/styles/theme.styles";
import ActionButton from "@/components/button/ActionButton";
import { Text } from "@/components/text/Text";
import Image from "@/components/image/Image";

import TopRightArrowWhite from "@/assets/images/TopRightArrowWhite.png";
const ContactForm = () => {
  return (
    <Styled.ContactFormWrapper>
      <Styled.ContactFormContainer>
        <Title
          level={3}
          fontColor={Theme.colors.baseBlack}
          fontWeight="500"
          fontSize="44px"
        >
          Leave us your info
        </Title>
        <Styled.FormWrapper>
          <Styled.FormContainer>
            <Input type="text" placeHolder="Name" />
            <Input type="email" placeHolder="Email" />
            <Input type="text" placeHolder="Subject" />
            <Styled.TextArea placeholder="Message" />
          </Styled.FormContainer>
        </Styled.FormWrapper>

        <ActionButton borderRadius="6px">
          <Text fontSize="16px" fontColor={Theme.colors.white} fontWeight="500">
            Get in Touch
          </Text>

          <Image src={TopRightArrowWhite} width="10px" alt="arrow" />
        </ActionButton>
      </Styled.ContactFormContainer>
    </Styled.ContactFormWrapper>
  );
};

export default ContactForm;
