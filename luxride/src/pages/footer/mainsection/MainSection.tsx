import React from "react";
import { Link } from "react-router-dom";

// Styled components
import * as Styled from "./MainSection.styles";

// main section data
import { mainSectionData } from "./mainsectiondata/mainSectionData";

// Components
import { Text } from "@/components/text/Text";

// Colors
import { Theme } from "../../../styles/theme.styles";

// images
import DownloadAppButton from "@/components/button/DownloadAppButton";
import AppleLogo from "../../../assets/images/AppleLogo.png";
import GooglePlayLogo from "../../../assets/images/PlayStoreLogo.png";

// Define interface for sub-menu items
interface SubMenu {
  heading: string;
  link: string;
}

// Define interface for menu items
interface Menu {
  heading: string;
  submenu: SubMenu[];
}

const MainSection = () => {
  return (
    <Styled.MainSectionWrapper>
      <Styled.LinkWrapper>
        {mainSectionData.map((menu: Menu) => (
          <Styled.Wrapper key={menu.heading}>
            <Text
              fontColor={Theme.colors.white}
              fontSize="18px"
              fontWeight="600"
              style={{ marginBottom: "20px" }}
            >
              {menu.heading}
            </Text>
            <ul>
              {menu.submenu.map((subMenu: SubMenu) => (
                <Styled.List key={subMenu.heading}>
                  <Link to={subMenu.link}>
                    <Text
                      fontColor={Theme.colors.white}
                      hover={"text-decoration: underline"}
                    >
                      {subMenu.heading}
                    </Text>
                  </Link>
                </Styled.List>
              ))}
            </ul>
          </Styled.Wrapper>
        ))}
      </Styled.LinkWrapper>
      <Styled.DownloadAppWrapper>
        <Text fontWeight="600" fontSize="16px">
          Download The App
        </Text>
        <DownloadAppButton src={AppleLogo} alt="apple logo" width="auto">
          <Text fontColor={Theme.colors.white} fontWeight="600">
            App Store
          </Text>
        </DownloadAppButton>
        <DownloadAppButton src={GooglePlayLogo} alt="apple logo" width="auto">
          <Text fontColor={Theme.colors.white} fontWeight="600">
            Google Play
          </Text>
        </DownloadAppButton>
      </Styled.DownloadAppWrapper>
    </Styled.MainSectionWrapper>
  );
};

export default MainSection;
