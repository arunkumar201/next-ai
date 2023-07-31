'use client'
import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetTrigger, SheetContent } from "./ui/sheet";
import Sidebar from "./Sidebar";
import { useEffect, useState } from "react";
import Navbar from "./Navbar";

const MobileSidebar = () => {
  const [isMounted, setIsMounted] = useState<boolean>(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  if(!isMounted){
    return null;
  }
  return (
    <>
      <Sheet>
        <SheetTrigger>
          <div className="flex items-center justify-start">
            <Button variant={"ghost"}>
              <Menu className="flex " />
            </Button>
          </div>
        </SheetTrigger>
        <SheetContent side="left" className="w-[16rem] p-0">
          <Sidebar />
        </SheetContent>
      </Sheet>
    </>
  );
};

export default MobileSidebar;
