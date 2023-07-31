"use client";
import Link from "next/link";
import logo from "./../public/logo.png";
import Image from "next/image";
import { cn } from "@/lib/utils";
import RouteList from "./RouteList";
import { Montserrat } from "next/font/google";
import {
  CodeIcon,
  ImageIcon,
  LayoutDashboardIcon,
  MusicIcon,
  Settings,
  VideoIcon,
} from "lucide-react";
import { RoutesListTypes } from "@/lib/types";
import { featuresRoutes } from "@/public/common";
const montserrat = Montserrat({
  weight: "800",
  subsets: ["latin"],
});
const featuresRoutes1: RoutesListTypes[] = [
  {
    label: "My Dashboard",
    icon: LayoutDashboardIcon,
    href: "/dashboard",
    color: "text-[#FFD95A]",
  },
  {
    label: "Image Generation ",
    icon: ImageIcon,
    href: "/image",
    color: "text-[#95CD41]",
  },
  {
    label: "Code Generation",
    icon: CodeIcon,
    href: "/code",
    color: "text-[#46C2CB]",
  },
  {
    label: "Music Generation",
    icon: MusicIcon,
    href: "/music",
    color: "text-[#FF8FB1]",
  },
  {
    label: "Video Generation",
    icon: VideoIcon,
    href: "/video",
    color: "text-[#6D67E4]",
  },
  {
    label: "Settings",
    icon: Settings,
    href: "/settings",
  },
];

const Sidebar = () => {
  return (
    <>
      <div className="absolute flex flex-col items-start justify-center w-full h-full px-2 py-4 space-y-4 text-white bg-slate-800">
        <div className="items-start flex-1 px-3 py-2 mb-12 ">
          <Link
            href="/"
            className="flex items-center justify-center gap-2 px-2"
          >
            <Image
              src={
                "https://www.reshot.com/preview-assets/icons/Y3AS2MK9TL/cloud-ai-Y3AS2MK9TL.svg"
              }
              alt="logo"
              className="rounded-full w-14 h-14"
              width={200}
              height={200}
            />
            <p className={cn("text-2xl text-yellow-300", montserrat.className)}>
              Nextia AI
            </p>
          </Link>
        </div>
        <div className="flex flex-col items-start justify-start w-full h-full gap-2 ">
          <RouteList routes={featuresRoutes} />
        </div>
      </div>
    </>
  );
};
export default Sidebar;
