import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ThemeProvider } from "styled-components";
import { guidelineColors } from "./theme";
import AppRouter from "./App.router";
import FooterComponent from "./components/footer/footer.component";
import { Helmet } from "react-helmet";

const getTheme = () => guidelineColors;

function App() {
  return (
    <ThemeProvider theme={getTheme()}>
    <Helmet>
      <meta charSet="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Dog Search</title>
    </Helmet>
    <AppRouter />
    <FooterComponent />
  </ThemeProvider>
  );
}

export default App;
