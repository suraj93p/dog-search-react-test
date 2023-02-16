import React from "react";
import { useNavigate } from "react-router-dom";

import Logo from "../logo/logo.component";

import { HeaderWrapper } from "./style";

const HeaderComponent = () => {
  const navigate = useNavigate();

  const onLogoClick = () => {
    navigate("/");
  };

  return (
    <HeaderWrapper>
      <Logo handleLogoClick={onLogoClick} />
    </HeaderWrapper>
  );
};

export default HeaderComponent;
