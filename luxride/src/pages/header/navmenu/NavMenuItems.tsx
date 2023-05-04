import React from "react";
import { NavLink as Link } from "react-router-dom";

// styled-components
import styled from "styled-components";
// images
import DownArrow from "../../../assets/images/DownArrow.png";
import DownArrowBlack from "../../../assets/images/DownArrowBlack.png";

// styled components
import Text from "../../../components/text/Text";

// colors
import { Theme } from "../../../styles/theme.styles";

interface Props {
  url: string;
  title: string;
  screenWidth: boolean;
}
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

const Image = styled.img`
  align-self: center;
  cursor: pointer;
`;

const NavMenuItems = ({ url, title, screenWidth }: Props) => {
  return (
    <Link to={url}>
      <List>
        <Text
          fontColor={screenWidth ? Theme.colors.black : Theme.colors.white}
          fontSize={screenWidth ? "24px" : "14px"}
          fontWeight="500"
        >
          {title}
        </Text>
        <Image
          src={screenWidth ? DownArrowBlack : DownArrow}
          alt="down arrow"
        />
      </List>
    </Link>
  );
};

export default NavMenuItems;
