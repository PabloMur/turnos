import { Button } from "@mui/material";
import { LogoBtn } from "./ui/Buttons";
import HomeIcon from "@mui/icons-material/Home";

const Sidebar = () => {
  return (
    <div className="bg-blue-600 w-1/5 p-4">
      <div className="h-[10vh] flex justify-start items-center">
        <LogoBtn></LogoBtn>
      </div>
      <ul className="">
        <Button className="text-white px-4" startIcon={<HomeIcon></HomeIcon>}>
          Inicio
        </Button>
        <Button className="text-white px-4" startIcon={<HomeIcon></HomeIcon>}>
          Inicio
        </Button>
        <Button className="text-white px-4" startIcon={<HomeIcon></HomeIcon>}>
          Inicio
        </Button>
        <Button className="text-white px-4" startIcon={<HomeIcon></HomeIcon>}>
          Inicio
        </Button>
      </ul>
    </div>
  );
};

export { Sidebar };
