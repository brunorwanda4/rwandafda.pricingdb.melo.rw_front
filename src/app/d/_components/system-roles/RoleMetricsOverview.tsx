"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  HiOutlineShieldCheck,
  HiOutlineUsers,
  HiOutlineLockClosed,
} from "react-icons/hi2";
import { cn } from "@/lib/utils";

// 1. Data configuration based on your visual reference
const ROLE_METRIC_CONFIG = {
  ACTIVE_ROLES: {
    label: "Active Roles",
    icon: HiOutlineShieldCheck,
    color: "text-blue-500",
    bgColor: "bg-blue-50",
  },
  TOTAL_USERS: {
    label: "Total users",
    icon: HiOutlineUsers,
    color: "text-emerald-600",
    bgColor: "bg-emerald-50",
  },
  PERMISSIONS: {
    label: "Permission types",
    icon: HiOutlineLockClosed,
    color: "text-purple-500",
    bgColor: "bg-purple-50",
  },
};

const RoleMetricsOverview = () => {
  // 2. Mock data reflecting your latest screenshot
  const metrics = [
    { type: "ACTIVE_ROLES", value: "5" },
    { type: "TOTAL_USERS", value: "43" },
    { type: "PERMISSIONS", value: "12" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
      {metrics.map((item, index) => {
        const config =
          ROLE_METRIC_CONFIG[item.type as keyof typeof ROLE_METRIC_CONFIG];
        const Icon = config.icon;

        return (
          <Card key={index} className="border shadow-none">
            <CardContent className="p-4 flex items-center gap-4">
              {/* Icon Container with dynamic background */}
              <div className={cn("p-3 rounded-xl shrink-0", config.bgColor)}>
                <Icon className={cn("w-6 h-6", config.color)} />
              </div>

              {/* Text Content */}
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight">
                  {item.value}
                </span>
                <span className="text-sm font-medium text-slate-600">
                  {config.label}
                </span>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};

export default RoleMetricsOverview;
