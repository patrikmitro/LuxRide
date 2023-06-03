import React from "react";
import {
  FaqPageContainer,
  FaqPageWrapper,
  TitleWrapper,
  AccordionWrapper,
  FaqBackGround,
} from "./FaqPage.styles";
import Title from "../../../components/text/Title";
import FaqAccordion from "./Accordion";
import { FaqData } from "./FaqData";
const FaqPage = () => {
  return (
    <FaqPageWrapper>
      <FaqPageContainer>
        <TitleWrapper>
          <Title level={2} fontSize="44px" fontWeight="500">
            Frequently Asked Questions
          </Title>
        </TitleWrapper>
        <AccordionWrapper>
          {FaqData.map(({ title, text }) => (
            <FaqAccordion title={title} text={text} />
          ))}
        </AccordionWrapper>
      </FaqPageContainer>
      <FaqBackGround />
    </FaqPageWrapper>
  );
};

export default FaqPage;
