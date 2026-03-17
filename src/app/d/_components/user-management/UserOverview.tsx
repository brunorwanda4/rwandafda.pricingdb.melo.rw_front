"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  HiOutlineUsers,
  HiOutlineUserGroup,
  HiOutlineUserRemove,
  HiOutlineShieldCheck,
  HiOutlineClock,
} from "react-icons/hi";
import {
  IoCheckmarkCircleOutline,
  IoAlertCircleOutline,
} from "react-icons/io5";
import { cn } from "@/lib/utils";

/**
 * User Statistics Data
 * Derived from the metric cards in the screenshots
 */
const USER_STATS = [
  {
    label: "Total users",
    value: "43",
    icon: HiOutlineUsers,
    color: "bg-blue-50 text-blue-500",
  },
  {
    label: "Active users",
    value: "43",
    icon: IoCheckmarkCircleOutline,
    color: "bg-emerald-50 text-emerald-600",
  },
  {
    label: "Inactive users",
    value: "0",
    icon: IoAlertCircleOutline,
    color: "bg-slate-50 text-slate-400",
  },
];

/**
 * Recent System Events Data
 * Based on the "Recent System Events" screenshot
 */
const RECENT_EVENTS = [
  {
    id: 1,
    event: "Role permissions updated",
    user: "admin@fda.gov.rw",
    time: "2 hours ago",
    type: "permission",
    icon: HiOutlineShieldCheck,
    iconColor: "text-purple-500 bg-purple-50",
  },
  {
    id: 2,
    event: "Failed login attempt",
    user: "admin@fda.gov.rw",
    time: "1 hour ago",
    type: "security",
    icon: IoAlertCircleOutline,
    iconColor: "text-red-500 bg-red-50",
  },
  {
    id: 3,
    event: "Database backup completed",
    user: "System",
    time: "5 days ago",
    type: "system",
    icon: IoCheckmarkCircleOutline,
    iconColor: "text-emerald-500 bg-emerald-50",
  },
];

const UserOverview = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {USER_STATS.map((stat) => (
        <Card key={stat.label} className="border-slate-200">
          <CardContent className=" flex items-center gap-4">
            <div className={cn("p-3 rounded-xl", stat.color)}>
              <stat.icon className="w-8 h-8" />
            </div>
            <div>
              <p className="text-3xl font-bold text-slate-900">{stat.value}</p>
              <p className="text-sm font-medium text-slate-500">{stat.label}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default UserOverview;
