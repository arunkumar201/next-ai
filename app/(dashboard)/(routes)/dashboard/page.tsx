"use client";
import { Card } from "@/components/ui/card";
import { FeatureToolItem } from "@/lib/types";
import { cn } from "@/lib/utils";
import { featuresTools } from "@/public/common";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
export default function DashboardPage() {
  const router =useRouter();
  return (
    <>
      <div className="flex flex-col">
        <div className="space-y-4 mb-9">
          <h1 className="text-xl font-bold text-center md:text-2xl">
            Revolutionize Your Content Creation with Our All-In-One AI-Powered
            Platform
          </h1>
          <p className="text-base font-bold text-center text-muted-foreground md:text-lg">
            Unleash the Power of Smart AI - Chat Your Way to a Smarter Future
          </p>
        </div>
        <div className="flex flex-col px-4 gap-y-2 mt-9">
          {featuresTools &&
            featuresTools.map((tool: FeatureToolItem) => {
              return (
                <>
                  <Card
                  onClick={()=>router.push(tool.href)}
                    key={tool.href}
                    className="flex items-center justify-between p-4 cursor-pointer hover:shadow-md border-black/5 transitions"
                  >
                    <div className="flex items-center gap-x-4">
                      <div className={cn("p-2 w-fit rounded-md", tool.bgColor)}>
                        <tool.icon className={cn("w-8 h-8", tool.color)} />
                      </div>
                      <div className="font-semibold">{tool.label}</div>
                    </div>
                    <ArrowRight className="w-5 h-5" />
                  </Card>
                </>
              );
            })}
        </div>
      </div>
    </>
  );
}
