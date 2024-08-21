"use client";
import { CurrentShift } from "./CurrentShift";
import { DashboardSidebar } from "./DashboardSidebar";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import { TodayShifts } from "./TodayShifts";

const AdminDashboard = () => {
  return (
    <div className="flex h-full w-full">
      <Sidebar></Sidebar>
      <div className="bg-white h-full w-full p-4">
        <Header></Header>
        <div className="flex gap-4">
          <div className="bg-red-400 h-[85vh] w-2/3 gap-4 flex flex-col">
            <div className="h-1/3">
              <CurrentShift></CurrentShift>
            </div>
            <div className="h-2/3">
              <TodayShifts></TodayShifts>
            </div>
          </div>
          <div>
            <DashboardSidebar></DashboardSidebar>
          </div>
        </div>
      </div>
    </div>
  );
};

export { AdminDashboard };
