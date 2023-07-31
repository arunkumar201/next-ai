'use client'
import { type ClassValue, clsx } from "clsx";
import { CodeIcon, ImageIcon, LayoutDashboardIcon, MusicIcon, Settings, VideoIcon } from "lucide-react";
import { twMerge } from "tailwind-merge";
import { RoutesListTypes } from "./types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}