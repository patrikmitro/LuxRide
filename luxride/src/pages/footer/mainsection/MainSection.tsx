import React from "react";
import { Link } from "react-router-dom";
import {
  MainSectionWrapper,
  LinkWrapper,
  Wrapper,
  List,
  DownloadAppWrapper,
} from "./MainSection.styles";
import { mainSectionData } from "./mainsectiondata/mainSectionData";
import Text from "../../../components/text/Text";
import { Theme } from "../../../styles/theme.styles";
import DownloadAppButton from "./downloadapp/DownloadAppButton";
import AppleLogo from "../../../assets/images/AppleLogo.png";
import GooglePlayLogo from "../../../assets/images/PlayStoreLogo.png";
interface SubMenu {
  heading: string;
  link: string;
}

interface Menu {
  heading: string;
  submenu: SubMenu[];
}

const MainSection = () => {
  return (
    <MainSectionWrapper>
      <LinkWrapper>
        {mainSectionData.map((menu: Menu) => (
          <Wrapper key={menu.heading}>
            <Text
              fontColor={Theme.colors.white}
              fontSize="18px"
              fontWeight="600"
            >
              {menu.heading}
            </Text>
            <ul>
              {menu.submenu.map((subMenu: SubMenu) => (
                <List key={subMenu.heading}>
                  <Link to={subMenu.link}>
                    <Text
                      fontColor={Theme.colors.white}
                      hover={"text-decoration: underline"}
                    >
                      {subMenu.heading}
                    </Text>
                  </Link>
                </List>
              ))}
            </ul>
          </Wrapper>
        ))}
      </LinkWrapper>
      <DownloadAppWrapper>
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
      </DownloadAppWrapper>
    </MainSectionWrapper>
  );
};

export default MainSection;
