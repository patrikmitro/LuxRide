import styled from "styled-components";

export const LinkWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 920px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;

export const MainSectionWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  @media only screen and (max-width: 920px) {
    grid-template-columns: 1fr;
  }
`;

export const CardWrapper = styled.div``;

export const Wrapper = styled.div``;

export const List = styled.li`
  padding: 8px 0;
`;

export const DownloadAppWrapper = styled.div`
  padding-left: 150px;
  @media only screen and (max-width: 920px) {
    padding-left: 0;
  }
`;
