'use client';
import { RoutesListTypes } from "@/lib/types";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
interface RouteListPropType {
  routes: RoutesListTypes[];
}
const RouteList = ({ routes }: RouteListPropType) => {
  const pathname = usePathname();
  return (
    <>
      {routes &&
        routes.map((route: RoutesListTypes) => {
          return (
            <>
              <Link
                href={route.href}
                key={route.href}
                className={cn(
                  "flex items-center justify-center w-full px-4 py-2 text-base cursor-pointer rounded-xl transitions hover:text-white hover:bg-white/10 place-content-center",
                  pathname === route.href
                    ? "text-white bg-white/10"
                    : "text-zinc-400"
                )}
              >
                <div
                  className={`flex items-center justify-evenly text-left w-full`}
                >
                  <p>
                  <route.icon
                    className={cn("h-8 w-8 rounded-lg -mr-4", route.color)}
                    />
                    </p>
                  <span>{route.label}</span>
                </div>
              </Link>
            </>
          );
        })}
      <Link href={"/"}></Link>
    </>
  );
};

export default RouteList;
