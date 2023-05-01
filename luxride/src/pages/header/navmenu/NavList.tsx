import React from "react";
import styled from "styled-components";
import DownArrow from "../../../assets/images/DownArrow.png";
import Text from "../../../components/text/Text";
import { Theme } from "../../../styles/theme.styles";

interface Props {
  children: React.ReactNode;
}

const StyledLi = styled.li`
  display: flex;

  align-items: center;
  justify-content: center;
  padding: 10px 16px;
  border-radius: 40px;
  &:hover {
    background-color: ${Theme.colors.grey};
  }
  cursor: pointer;
`;
const Image = styled.img`
  align-self: center;
  cursor: pointer;
`;
const UnorderedList = styled.ul`
  display: flex;
`;
const List = styled.li`
  display: flex;
  gap: 8px;
  padding: 8px 16px;
  border-radius: 40px;
  &:hover {
    background-color: ${Theme.colors.grey};
  }
`;

const NavList = () => {
  return (
    <UnorderedList>
      <List>
        <Text fontColor={Theme.colors.white} fontSize="14px" fontWeight="500">
          Home
        </Text>
        <Image src={DownArrow} alt="down arrow" />
      </List>
      <List>
        <Text fontColor={Theme.colors.white} fontSize="14px" fontWeight="500">
          Pages
        </Text>
        <Image src={DownArrow} alt="down arrow" />
      </List>
      <List>
        <Text fontColor={Theme.colors.white} fontSize="14px" fontWeight="500">
          Our Fleet
        </Text>
        <Image src={DownArrow} alt="down arrow" />
      </List>
      <List>
        <Text fontColor={Theme.colors.white} fontSize="14px" fontWeight="500">
          Services
        </Text>
        <Image src={DownArrow} alt="down arrow" />
      </List>
      <List>
        <Text fontColor={Theme.colors.white} fontSize="14px" fontWeight="500">
          Blog
        </Text>
        <Image src={DownArrow} alt="down arrow" />
      </List>
      <List>
        <Text fontColor={Theme.colors.white} fontSize="14px" fontWeight="500">
          Contact
        </Text>
        <Image src={DownArrow} alt="down arrow" />
      </List>
    </UnorderedList>
  );
};

export default NavList;
