import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Package, AlertCircle, RefreshCcw } from "lucide-react";
import { cn } from "@/lib/utils"; // shadcn utility for classes

// 1. Define the logic for icons and colors based on the Action
const ACTION_CONFIG = {
  UPDATE: {
    icon: CheckCircle2,
    color: "text-emerald-600",
    bgColor: "bg-emerald-100",
  },
  REGISTRATION: {
    icon: Package,
    color: "text-blue-600",
    bgColor: "bg-blue-100",
  },
  ALERT: {
    icon: AlertCircle,
    color: "text-amber-600",
    bgColor: "bg-amber-100",
  },
  DEFAULT: {
    icon: RefreshCcw,
    color: "text-slate-600",
    bgColor: "bg-slate-100",
  },
};

const RecentActivity = () => {
  // 2. This array represents what your "Real Data" from an API would look like
  const activityData = [
    {
      id: "act_1",
      action: "UPDATE",
      title: "Updated general mark-up",
      details: "Price Approved • Division Manager",
      timestamp: "5 days ago",
    },
    {
      id: "act_2",
      action: "REGISTRATION",
      title: "Paracetamol 1000mg",
      details: "New Registration • System Import",
      timestamp: "1 hour ago",
    },
    {
      id: "act_3",
      action: "ALERT",
      title: "Ibuprofen 400mg",
      details: "Compliance Alert • Auto Monitor",
      timestamp: "1 month ago",
    },
  ];

  return (
    <Card className="w-full">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-xl font-bold">Recent Activity</CardTitle>
        <Button variant="link" className="text-emerald-600 font-semibold p-0">
          View All
        </Button>
      </CardHeader>
      <CardContent className="space-y-6">
        {activityData.map((item) => {
          // 3. Logic: Select config based on action, fallback to DEFAULT
          const config =
            ACTION_CONFIG[item.action as keyof typeof ACTION_CONFIG] ||
            ACTION_CONFIG.DEFAULT;
          const Icon = config.icon;

          return (
            <div
              key={item.id}
              className="flex items-start justify-between group"
            >
              <div className="flex gap-4">
                {/* Dynamic Icon Container */}
                <div className={cn("p-2 rounded-lg shrink-0", config.bgColor)}>
                  <Icon className={cn("w-5 h-5", config.color)} />
                </div>

                <div className="space-y-1">
                  <p className="text-sm font-bold leading-none">{item.title}</p>
                  <p className="text-sm text-muted-foreground">
                    {item.details}
                  </p>
                </div>
              </div>

              <div className="text-sm text-muted-foreground tabular-nums">
                {item.timestamp}
              </div>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
};

export default RecentActivity;
