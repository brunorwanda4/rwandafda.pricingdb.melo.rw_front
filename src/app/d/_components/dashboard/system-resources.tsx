import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import { HiOutlineCpuChip } from "react-icons/hi2";
import { BiMemoryCard } from "react-icons/bi";
import { BsDatabase, BsServer } from "react-icons/bs";
import { cn } from "@/lib/utils";

// 1. Icon and Color Mapping based on resource type
const RESOURCE_CONFIG = {
  CPU: {
    icon: HiOutlineCpuChip,
    color: "text-blue-500",
    label: "CPU Usage",
  },
  MEMORY: {
    icon: BiMemoryCard,
    color: "text-emerald-500",
    label: "Memory Usage",
  },
  DATABASE: {
    icon: BsDatabase,
    color: "text-purple-500",
    label: "Database Size",
  },
  DEFAULT: {
    icon: BsServer,
    color: "text-slate-500",
    label: "Resource",
  },
};

const SystemResources = () => {
  // 2. Data array for easy mapping
  const resources = [
    {
      id: "res_1",
      type: "CPU",
      subtitle: "Server load",
      value: "32%",
    },
    {
      id: "res_2",
      type: "MEMORY",
      subtitle: "RAM allocation",
      value: "48%",
    },
    {
      id: "res_3",
      type: "DATABASE",
      subtitle: "PostgreSQL",
      value: "2.4GB",
    },
  ];

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-bold">System Resources</CardTitle>
          <BsServer className="w-6 h-6" />
        </div>
        <CardDescription>Infrastructure utilization</CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        {resources.map((item) => {
          const config =
            RESOURCE_CONFIG[item.type as keyof typeof RESOURCE_CONFIG] ||
            RESOURCE_CONFIG.DEFAULT;
          const Icon = config.icon;

          return (
            /* Inner Card for each item */
            <div
              key={item.id}
              className="flex items-center justify-between p-4 border rounded-xl"
            >
              <div className="flex items-center gap-4">
                <Icon className={cn("w-7 h-7", config.color)} />
                <div className="flex flex-col">
                  <span className="font-bold leading-none">{config.label}</span>
                  <span className="text-sm text-muted-foreground mt-1">
                    {item.subtitle}
                  </span>
                </div>
              </div>
              <div className="text-xl font-bold">{item.value}</div>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
};

export default SystemResources;
