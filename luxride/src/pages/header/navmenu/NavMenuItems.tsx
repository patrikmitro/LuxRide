import React from "react";
import { NavLink as Link } from "react-router-dom";

// styled-components
import styled from "styled-components";

// styled components
import { Text } from "@/components/text/Text";

// colors
import { Theme } from "@/styles/theme.styles";

interface MenuItems {
  title: string;
  url: string;
  index: number;
}

interface Props {
  url: string;
  title: string;
  screenWidth: boolean;
  submenu?: MenuItems[];
  onClick: () => void;
}

const List = styled.li``;
const StyledLink = styled(Link)`
  display: flex;
  gap: 8px;
  padding: 8px 16px;
  border-radius: 40px;

  @media only screen and (max-width: 920px) {
    justify-content: space-between;
  }
  cursor: pointer;
  &:hover {
    background-color: ${Theme.colors.grey};
  }
`;

const NavMenuItems = ({ url, title, screenWidth, submenu, onClick }: Props) => {
  return (
    <List>
      <StyledLink to={url}>
        <Text
          fontColor={screenWidth ? Theme.colors.black : Theme.colors.white}
          fontSize={screenWidth ? "24px" : "14px"}
          fontWeight="500"
        >
          {title}
        </Text>
      </StyledLink>
    </List>
  );
};

export default NavMenuItems;
