import React, { MouseEventHandler, useState } from "react";
import { NavLink as Link } from "react-router-dom";

// styled-components
import styled from "styled-components";
// images
import DownArrow from "../../../assets/images/DownArrow.png";
import DownArrowBlack from "../../../assets/images/DownArrowBlack.png";

// styled components
import Text from "../../../components/text/Text";
import NavMenuDropDown from "./NavMenuDropDown";

// colors
import { Theme } from "../../../styles/theme.styles";

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

const Image = styled.img`
  align-self: center;
  cursor: pointer;
`;

const NavMenuItems = ({ url, title, screenWidth, submenu, onClick }: Props) => {
  const [showDropDown, setShowDropDown] = useState(false);

  const handleMouseEnter = () => {
    setShowDropDown(true);
  };

  const handleMouseLeave = () => {
    setShowDropDown(false);
  };

  return (
    <List onMouseLeave={handleMouseLeave}>
      <StyledLink to={url} onMouseEnter={handleMouseEnter}>
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
      </StyledLink>
      {showDropDown && <NavMenuDropDown onClick={onClick} submenu={submenu} />}
    </List>
  );
};

export default NavMenuItems;
