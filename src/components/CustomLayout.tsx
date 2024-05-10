"use client";
import { RecoilRoot } from "recoil";
import { Loader } from "./Loader";
import { Header } from "./Header";
import { Footer } from "./Footer";

const CustomLayout = ({ children }: any) => {
  return (
    <RecoilRoot>
      <Loader></Loader>
      <Header></Header>
      {children}
      <Footer></Footer>
    </RecoilRoot>
  );
};

export { CustomLayout };
