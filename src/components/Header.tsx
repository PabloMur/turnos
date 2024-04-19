import { useRecoilValue } from "recoil";
import { LogoBtn } from "./ui/Buttons";
import { userLoggedAtom } from "@/atoms";
const Header = () => {
  const active = useRecoilValue(userLoggedAtom);
  return (
    active && (
      <header className="bg-lime-400 flex p-4 justify-between items-center h-[10vh]">
        <LogoBtn></LogoBtn>
        <nav>NAVEGACion</nav>
      </header>
    )
  );
};

export { Header };
