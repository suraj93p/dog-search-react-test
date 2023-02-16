import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { LoaderTheme } from "./style";

const LoadingComponent = () => (
  <LoaderTheme>
    <div className="loading-img">
      <CircularProgress color="inherit" disableShrink />
    </div>
  </LoaderTheme>
);

export default LoadingComponent;
