"use client";
import { useGoTo } from "@/hooks";

type GetTurnoBtnType = {
  handleClick?: any;
};

export const GetTurnoBtn = ({ handleClick }: GetTurnoBtnType) => {
  return (
    <button
      onClick={handleClick}
      className="bg-lime-400 p-4 rounded-lg font-bold text-black w-full mt-1"
    >
      Solicitar Turno
    </button>
  );
};

export const LogoBtn = () => {
  const goto = useGoTo();
  const handleClick = () => {
    goto("/");
  };
  return (
    <button className="text-black font-bold" onClick={handleClick}>
      BARBERIA
    </button>
  );
};
