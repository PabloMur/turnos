import { atom } from "recoil";

export const loaderAtom = atom({
  key: "loaderAtom",
  default: false,
});

export const userLoggedAtom = atom({
  key: "userLoggedAtom",
  default: false,
});
