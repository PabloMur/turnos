"use client";
import { loaderAtom } from "@/atoms";
import { useRecoilValue } from "recoil";

const Loader = () => {
  const active = useRecoilValue(loaderAtom);
  return (
    active && (
      <div className="absolute top-0 left-0 right-0 bottom-0 z-20 text-white bg-black flex justify-center items-center">
        <p>Cargando ...</p>
      </div>
    )
  );
};
export { Loader };
