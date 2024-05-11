"use client";
import { userLoggedAtom } from "@/atoms";
import { usePathname, useRouter } from "next/navigation";
import { useRecoilValue } from "recoil";
export function useGoTo() {
  const router = useRouter();
  return (route: string) => {
    router.push(route);
  };
}

export function useUserIsLogged() {
  const userLogStatus = useRecoilValue(userLoggedAtom);
  return userLogStatus;
}

export function useSetAppointment() {
  console.log("Deberia deberia deberia");
  return false;
}
