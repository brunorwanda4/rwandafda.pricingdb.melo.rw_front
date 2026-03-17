import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Users, AlertTriangle, CheckCircle, Key } from "lucide-react";
import { cn } from "@/lib/utils";

// 1. Logic-based configuration for different metric types
const METRIC_CONFIG = {
  USERS: {
    label: "Total Users",
    icon: Users,
    color: "text-blue-500",
    bgColor: "bg-blue-50",
  },
  ALERT: {
    label: "System alert",
    icon: AlertTriangle,
    color: "text-red-500",
    bgColor: "bg-red-50",
  },
  STATUS: {
    label: "System Status",
    icon: CheckCircle,
    color: "text-emerald-500",
    bgColor: "bg-emerald-50",
  },
  API: {
    label: "API Keys",
    icon: Key,
    color: "text-purple-500",
    bgColor: "bg-purple-50",
  },
};

const DataOverview = () => {
  // 2. Mock data representing what you'd get from your backend
  const metrics = [
    {
      type: "USERS",
      value: "43",
      trend: "+2.5% from last month",
      trendColor: "text-emerald-600",
    },
    {
      type: "ALERT",
      value: "7",
      trend: "+12.3% from last month",
      trendColor: "text-emerald-600",
    },
    {
      type: "STATUS",
      value: "Online",
      trend: "90% online",
      trendColor: "text-emerald-600",
    },
    {
      type: "API",
      value: "4",
      trend: "Active",
      trendColor: "text-emerald-600",
    },
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
      {metrics.map((item, index) => {
        const config = METRIC_CONFIG[item.type as keyof typeof METRIC_CONFIG];
        const Icon = config.icon;

        return (
          <Card key={index} className="border shadow-none overflow-hidden">
            <CardContent className="">
              <div className="flex items-center gap-4">
                {/* Dynamic Icon Container */}
                <div className={cn("p-3 rounded-xl shrink-0", config.bgColor)}>
                  <Icon className={cn("w-6 h-6", config.color)} />
                </div>

                <div className="flex flex-col">
                  <span className="text-sm font-medium text-slate-500">
                    {config.label}
                  </span>
                  <span className="text-2xl font-bold tracking-tight">
                    {item.value}
                  </span>
                  <span
                    className={cn(
                      "text-xs font-semibold mt-1",
                      item.trendColor,
                    )}
                  >
                    {item.trend}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};

export default DataOverview;
