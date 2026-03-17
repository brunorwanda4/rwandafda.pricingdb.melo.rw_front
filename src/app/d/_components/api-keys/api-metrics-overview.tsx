"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { HiOutlineKey } from "react-icons/hi2";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { LuActivity } from "react-icons/lu";
import { IoShieldOutline } from "react-icons/io5";
import { cn } from "@/lib/utils";

// 1. Logic-based configuration for API Metrics
const API_METRIC_CONFIG = {
  TOTAL_KEYS: {
    label: "Total API Keys",
    icon: HiOutlineKey,
    color: "text-blue-500",
    bgColor: "bg-blue-50",
  },
  ACTIVE_KEYS: {
    label: "Active Keys",
    icon: IoCheckmarkCircleOutline,
    color: "text-emerald-600",
    bgColor: "bg-emerald-50",
  },
  CALLS: {
    label: "API Calls Today",
    icon: LuActivity,
    color: "text-purple-500",
    bgColor: "bg-purple-50",
  },
  SUCCESS: {
    label: "Success Rate",
    icon: IoShieldOutline,
    color: "text-red-500",
    bgColor: "bg-red-50",
  },
};

const ApiMetricsOverview = () => {
  // 2. Mock Data Array (Real backend data structure)
  const apiData = [
    { type: "TOTAL_KEYS", value: "3" },
    { type: "ACTIVE_KEYS", value: "2" },
    { type: "CALLS", value: "85.4K" },
    { type: "SUCCESS", value: "98.1%" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
      {apiData.map((item, index) => {
        const config =
          API_METRIC_CONFIG[item.type as keyof typeof API_METRIC_CONFIG];
        const Icon = config.icon;

        return (
          <Card key={index} className="border shadow-none">
            <CardContent className="p-4 flex items-center gap-4">
              {/* Dynamic Icon Container */}
              <div className={cn("p-3 rounded-xl shrink-0", config.bgColor)}>
                <Icon className={cn("w-6 h-6", config.color)} />
              </div>

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

export default ApiMetricsOverview;
