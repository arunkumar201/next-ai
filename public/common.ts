import { FeatureToolItem, RoutesListTypes } from "@/lib/types";
import {
  BarChartIcon,
  CodeIcon,
  CogIcon,
  FileTextIcon,
  HeartIcon,
  ImageIcon,
  LayoutDashboardIcon,
  LifeBuoyIcon,
  MessageSquare,
  MusicIcon,
  Settings,
  VideoIcon,
} from "lucide-react";

export const featuresRoutes: RoutesListTypes[] = [
  {
    label: "My Dashboard",
    icon: LayoutDashboardIcon,
    href: "/dashboard",
    color: "text-[#FFD95A]",
  },
  {
    label: "Conversation",
    icon: MessageSquare,
    color: "text-[#FFD95A]",
    href: "/conversation",
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

export const featuresTools: FeatureToolItem[] = [
  {
    label: "Conversation",
    icon: MessageSquare,
    color: "text-[#FFD95A]",
    bgColor: "bg-violet-500/10",
    href: "/conversation",
  },
  {
    label: "Music AI",
    icon: MusicIcon,
    color: "text-[#FF8FB1]",
    bgColor: "bg-emerald-500/10",
    href: "/music",
  },
  {
    label: "Image AI",
    icon: ImageIcon,
    color: "text-[#95CD41]",
    bgColor: "bg-pink-700/10",
    href: "/image",
  },
  {
    label: "Video AI",
    icon: VideoIcon,
    color: "text-[#6D67E4]",
    bgColor: "bg-orange-700/10",
    href: "/video",
  },
  {
    label: "Code AI ",
    icon: CodeIcon,
    color: "text-[#46C2CB]",
    bgColor: "bg-green-700/10",
    href: "/code",
  },
  {
    label: "Reports",
    icon: FileTextIcon,
    color: "text-[#FFA500]",
    bgColor: "#FFFFFF",
    href: "/reports",
  },
];
