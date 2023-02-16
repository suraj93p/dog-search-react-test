import styled from "styled-components";
import { deviceWidths } from "../../config/config";

export const HeaderWrapper = styled.header`
  width: 100%;
  height: 94px;
  background-color: ${(props) => props.theme.background.primary};

  @media (max-width: ${deviceWidths.phoneWidth}) {
    height: 84px;
  }
`;
