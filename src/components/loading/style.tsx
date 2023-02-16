import styled from "styled-components";
import { deviceWidths } from "../../config/config";

export const LoaderTheme = styled.div`
  min-height: calc(100vh - 52px);
  .loading-img {
    color: ${(props) => props.theme.blue};
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  @media (max-width: ${deviceWidths.phoneWidth}) {
    min-height: calc(100vh - 76px);
  }
`;
