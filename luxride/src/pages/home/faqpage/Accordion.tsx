import React from "react";

import AccordionDetails from "@mui/material/AccordionDetails";

import Title from "@/components/text/Title";
import { Theme } from "../../../styles/theme.styles";
import { Paragraph } from "@/components/text/Paragraph";
import { styled } from "@mui/material/styles";

import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";

interface FaqAccordionProps {
  title: string;
  text: string;
}

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary {...props} />
))(({ theme }) => ({
  padding: "4px;",
}));

const FaqAccordion = ({ title, text }: FaqAccordionProps) => {
  return (
    <Accordion>
      <AccordionSummary id="panel1a-header" aria-controls="panel2a-content">
        <Title
          level={3}
          fontSize="20px"
          fontWeight="500"
          fontColor={Theme.colors.baseBlack}
        >
          {title}
        </Title>
      </AccordionSummary>

      <AccordionDetails>
        <Paragraph fontSize="16px" fontColor={Theme.colors.baseBlack}>
          {text}
        </Paragraph>
      </AccordionDetails>
    </Accordion>
  );
};

export default FaqAccordion;
