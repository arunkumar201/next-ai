import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import React from "react";
const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="relative h-full">
        <div className="hidden md:flex md:w-72 md:flex-col md:fixed md:inset-y-0 z-[80] bg-slate-800">
          <Sidebar />
        </div>
        <div className="bg-[#FDCEDF]/50 min-h-screen">
          <main className="flex items-center p-2 md:pl-72 ">
            <Navbar />
          </main>
          <div className="flex justify-center w-full item-start md:pl-[17rem]">
            {children}
          </div>
        </div>
      </div>
    </>
  );
};
export default DashboardLayout;
