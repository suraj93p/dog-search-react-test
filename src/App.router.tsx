import React, { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HeaderComponent from "./components/header/header.component";
import LoadingComponent from "./components/loading/loading.component";
import Card from "@mui/material/Card";

const Home = lazy(() => import("./pages/home/home.page"));

const AppRouter = () => (
  <BrowserRouter>
    <Suspense fallback={<LoadingComponent />}>
      <HeaderComponent />
      <Card className="router-card">
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </Card>
    </Suspense>
  </BrowserRouter>
);

export default AppRouter;
