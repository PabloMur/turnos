"use client";
import { RecoilRoot } from "recoil";
import { Loader } from "./Loader";
import { Footer } from "./Footer";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import CssBaseline from "@mui/material/CssBaseline";

const CustomLayout = ({ children }: any) => {
  return (
    <RecoilRoot>
      <CssBaseline />
      <Loader></Loader>
      {children}
      <Footer></Footer>
    </RecoilRoot>
  );
};

export { CustomLayout };
