"use client";

import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { HiOutlineDatabase, HiOutlineShieldCheck } from "react-icons/hi";
import { MdOutlineErrorOutline } from "react-icons/md";
import { VscKey } from "react-icons/vsc";
import { cn } from "@/lib/utils";

// 1. Action Logic Mapping
const EVENT_CONFIG = {
  BACKUP: {
    icon: HiOutlineDatabase,
    color: "text-emerald-500",
    bgColor: "bg-emerald-50",
  },
  FAILURE: {
    icon: MdOutlineErrorOutline,
    color: "text-red-500",
    bgColor: "bg-red-50",
  },
  SECURITY: {
    icon: VscKey,
    color: "text-blue-500",
    bgColor: "bg-blue-50",
  },
  PERMISSION: {
    icon: HiOutlineShieldCheck,
    color: "text-purple-500",
    bgColor: "bg-purple-50",
  },
};

const SystemEvents = () => {
  // 2. Data Array
  const events = [
    {
      id: 1,
      type: "BACKUP",
      title: "Database backup completed",
      user: "By System",
      time: "5 days ago",
    },
    {
      id: 2,
      type: "FAILURE",
      title: "Failed login attempt",
      user: "By admin@fda.gov.rw",
      time: "1 hour ago",
    },
    {
      id: 3,
      type: "SECURITY",
      title: "API key regenerated",
      user: "By IRIMS Integration",
      time: "1 month ago",
    },
    {
      id: 4,
      type: "PERMISSION",
      title: "Role permissions updated",
      user: "By admin@fda.gov.rw",
      time: "2 hours ago",
    },
  ];

  return (
    <Card className="w-full relative overflow-hidden bg-white">
      <CardHeader className="flex flex-row items-center justify-between relative z-10">
        <CardTitle className="text-xl font-bold">
          Recent System Events
        </CardTitle>
        <Button
          variant="link"
          className="text-emerald-600 font-semibold p-0 h-auto"
        >
          View All
        </Button>
      </CardHeader>

      <CardContent className="grid gap-6 relative z-10">
        {events.map((event) => {
          const config = EVENT_CONFIG[event.type as keyof typeof EVENT_CONFIG];
          const Icon = config.icon;

          return (
            <div
              key={event.id}
              className="flex items-center justify-between group"
            >
              <div className="flex items-center gap-4">
                <div className={cn("p-2.5 rounded-lg", config.bgColor)}>
                  <Icon className={cn("w-5 h-5", config.color)} />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-bold leading-none">
                    {event.title}
                  </span>
                  <span className="text-sm text-muted-foreground mt-1.5">
                    {event.user}
                  </span>
                </div>
              </div>
              <div className="text-sm text-muted-foreground whitespace-nowrap">
                {event.time}
              </div>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
};

export default SystemEvents;
