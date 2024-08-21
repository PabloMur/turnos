import { useRecoilValue } from "recoil";
import { userLoggedAtom } from "@/atoms";
import { HeaderUserIcon } from "./ui/HeaderUserIcon";
const Header = () => {
  const active = useRecoilValue(userLoggedAtom);
  return (
    active && (
      <header className="flex py-4 justify-between items-center h-[10vh]">
        <h3 className="text-black text-2xl">Bienvenido nuevamente, Pablo 👋</h3>
        <HeaderUserIcon></HeaderUserIcon>
      </header>
    )
  );
};

export { Header };
