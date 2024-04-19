"use client";
import { RecoilRoot } from "recoil";
import { Loader } from "./Loader";
import { Header } from "./Header";

const CustomLayout = ({ children }: any) => {
  return (
    <RecoilRoot>
      <Loader></Loader>
      <Header></Header>
      {children}
    </RecoilRoot>
  );
};

export { CustomLayout };
