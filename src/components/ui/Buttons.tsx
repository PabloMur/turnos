"use client";
import { useGoTo } from "@/hooks";
import { Button } from "@mui/material";

type GetTurnoBtnType = {
  handleClick?: any;
};

export const GetTurnoBtn = ({ handleClick }: GetTurnoBtnType) => {
  return (
    <>
      <Button onClick={handleClick} variant="contained" color="secondary">
        Solicitar Turno
      </Button>
    </>
  );
};

export const LogoBtn = () => {
  const goto = useGoTo();
  const handleClick = () => {
    goto("/admin");
  };
  return (
    <button className="text-black font-bold" onClick={handleClick}>
      BARBERIA
    </button>
  );
};
