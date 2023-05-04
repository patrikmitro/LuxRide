import React, { FC } from "react";
import styled, { css } from "styled-components";

import { menuItems } from "./navmenudata/navMenuItemsData";

import Text from "../../../components/text/Text";
import { Theme } from "../../../styles/theme.styles";
import NavMenuItems from "./NavMenuItems";
interface Props {
  isOpened: boolean;
  screenWidth: boolean;
}
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

const NavMenuWrapper = styled.div<Props>`
  @media only screen and (max-width: 1100px) {
    position: fixed;
    transition: transform 0.5s ease-in-out;
    top: 80px;
    z-index: 99;
    left: 0;
    ${(props) =>
      props.isOpened
        ? css`
            transform: translate(0);
          `
        : css`
            transform: translate(100%);
          `}
    width: 100%;
    height: 100vh;
    background-color: ${Theme.colors.white};
    flex-direction: column;
  }
`;
const NavList = ({ isOpened, screenWidth }: Props) => {
  return (
    <NavMenuWrapper isOpened={isOpened} screenWidth={screenWidth}>
      {" "}
      {/* NEchapem tomu */}
      <UnorderedList>
        {menuItems.map(
          (menu: { title: string; url: string }, index: number) => {
            return (
              <NavMenuItems
                key={index}
                title={menu.title}
                screenWidth={screenWidth}
                url={menu.url}
              />
            );
          }
        )}
      </UnorderedList>
    </NavMenuWrapper>
  );
};

export default NavList;
