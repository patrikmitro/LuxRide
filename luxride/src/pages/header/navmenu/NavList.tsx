import React, { FC } from "react";
import styled, { css } from "styled-components";
import DownArrow from "../../../assets/images/DownArrow.png";
import DownArrowBlack from "../../../assets/images/DownArrowBlack.png";
import Text from "../../../components/text/Text";
import { Theme } from "../../../styles/theme.styles";

interface Props {
  isOpened: boolean;
}

const Image = styled.img`
  align-self: center;
  cursor: pointer;
`;
const UnorderedList = styled.ul`
  display: flex;
  padding-left: 32px;

  @media only screen and (max-width: 1100px) {
    flex-direction: column;

    li {
      &:hover {
        background-color: transparent;
      }
    }
  }
`;
const List = styled.li`
  display: flex;
  gap: 8px;
  padding: 8px 16px;
  border-radius: 40px;
  @media only screen and (max-width: 1100px) {
    justify-content: space-between;
  }
  cursor: pointer;
  &:hover {
    background-color: ${Theme.colors.grey};
  }
`;
const NavMenuWrapper = styled.div<Props>`
  transition: 0.5s ease-in-out;
  @media only screen and (max-width: 1100px) {
    position: fixed;
    transform: translate(100%);
    top: 80px;
    ${(props) =>
      props.isOpened &&
      css`
        transform: translate(0);
        left: 0;
      `}
    width: 100%;
    flex-direction: column;
  }
`;
const NavList = ({ isOpened }: Props) => {
  return (
    <NavMenuWrapper isOpened={isOpened}>
      <UnorderedList>
        <List>
          <Text
            fontColor={isOpened ? Theme.colors.black : Theme.colors.white}
            fontSize={isOpened ? "24px" : "14px"}
            fontWeight="500"
          >
            Home
          </Text>
          <Image src={isOpened ? DownArrowBlack : DownArrow} alt="down arrow" />
        </List>
        <List>
          <Text
            fontColor={isOpened ? Theme.colors.black : Theme.colors.white}
            fontSize={isOpened ? "24px" : "14px"}
            fontWeight="500"
          >
            Pages
          </Text>
          <Image src={isOpened ? DownArrowBlack : DownArrow} alt="down arrow" />
        </List>
        <List>
          <Text
            fontColor={isOpened ? Theme.colors.black : Theme.colors.white}
            fontSize={isOpened ? "24px" : "14px"}
            fontWeight="500"
          >
            Our Fleet
          </Text>
          <Image src={isOpened ? DownArrowBlack : DownArrow} alt="down arrow" />
        </List>
        <List>
          <Text
            fontColor={isOpened ? Theme.colors.black : Theme.colors.white}
            fontSize={isOpened ? "24px" : "14px"}
            fontWeight="500"
          >
            Services
          </Text>
          <Image src={isOpened ? DownArrowBlack : DownArrow} alt="down arrow" />
        </List>
        <List>
          <Text
            fontColor={isOpened ? Theme.colors.black : Theme.colors.white}
            fontSize={isOpened ? "24px" : "14px"}
            fontWeight="500"
          >
            Blog
          </Text>
          <Image src={isOpened ? DownArrowBlack : DownArrow} alt="down arrow" />
        </List>
        <List>
          <Text
            fontColor={isOpened ? Theme.colors.black : Theme.colors.white}
            fontSize={isOpened ? "24px" : "14px"}
            fontWeight="500"
          >
            Contact
          </Text>
          <Image src={isOpened ? DownArrowBlack : DownArrow} alt="down arrow" />
        </List>
      </UnorderedList>
    </NavMenuWrapper>
  );
};

export default NavList;
