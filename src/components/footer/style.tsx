import styled from "styled-components";
import { deviceWidths } from "../../config/config";

export const Footer = styled.footer`
  background: ${(props) => props.theme.blue};
  bottom: 0;
  color: ${(props) => props.theme.white};
  padding: 16px 200px;
  position: fixed;
  width: 100%;

  @media (max-width: ${deviceWidths.smallDesktop}) {
    padding: 16px 60px;
  }

  @media (max-width: ${deviceWidths.tabletLandscapeWidth}) {
    padding: 16px 40px;
  }

  @media (max-width: ${deviceWidths.tabletWidth}) {
    font-size: 16px;
    padding: 10px 0 5px;
    .copy-right {
      margin: 10px 0;
    }
  }

  @media (max-width: ${deviceWidths.phoneWidth}) {
    font-size: 14px;
    padding: 10px;
    text-align: center;
  }
`;
