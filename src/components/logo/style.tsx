import styled from "styled-components";
import { deviceWidths } from "../../config/config";

export const LogoWrapper = styled.div`
  .logo-wrapper {
    img {
      cursor: pointer;
      height: 90px;
      @media (max-width: ${deviceWidths.phoneWidth}) {
        height: 60px;
      }
    }
  }
`;
