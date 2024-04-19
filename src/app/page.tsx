"use client";
import Image from "next/image";
import css from "@/styles/home.module.css";
import { GetTurnoBtn } from "@/components/ui/Buttons";
import { useGoTo } from "@/hooks";

export default function Home() {
  const goto = useGoTo();
  const handleClick = () => {
    goto("/turnos");
  };
  return (
    <main>
      <div className="h-[100vh] flex w-full">
        <div
          className={`w-1/2 ${css.homeBanner} flex justify-center items-center text-6xl`}
        ></div>
        <div className="w-1/2 h-full flex flex-col justify-center items-center px-24">
          <h2 className="text-3xl p-10">Sistema de Turnos</h2>
          <h1 className="font-bold text-5xl p-10">Barberia</h1>
          <GetTurnoBtn handleClick={handleClick}></GetTurnoBtn>
        </div>
      </div>
    </main>
  );
}
