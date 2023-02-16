import React from "react";
import { Footer } from "./style";

const date = new Date();

const FooterComponent = () => (
  <Footer>
    <div className="copy-right">
      © {date.getFullYear()} All Rights Reserved.
    </div>
  </Footer>
);

export default FooterComponent;
