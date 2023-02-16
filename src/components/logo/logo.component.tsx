import React from "react";
import { LogoWrapper } from "./style";
import logo from "../../assets/dog.png";

type LogoProps = {
  handleLogoClick: Function;
};

const Logo: React.FunctionComponent<LogoProps> = ({ handleLogoClick }) => (
  <LogoWrapper>
    <div className="logo-wrapper" onClick={() => handleLogoClick()}>
      <img src={logo} alt="Github Logo" />
    </div>
  </LogoWrapper>
);

export default Logo;
