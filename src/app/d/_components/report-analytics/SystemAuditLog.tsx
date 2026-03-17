"use client";

import React, { useState, useMemo } from "react";
import { Input } from "@/components/ui/input";
import {
  HiOutlineSearch,
  HiOutlineCheckCircle,
  HiOutlineCube,
  HiOutlineExclamationCircle,
  HiOutlineBadgeCheck,
} from "react-icons/hi";
import { cn } from "@/lib/utils";

const ACTIVITY_CONFIG: Record<
  string,
  { icon: any; colorClass: string; bgClass: string }
> = {
  APPROVE: {
    icon: HiOutlineCheckCircle,
    colorClass: "text-emerald-500",
    bgClass: "bg-emerald-50",
  },
  IMPORT: {
    icon: HiOutlineCube,
    colorClass: "text-blue-500",
    bgClass: "bg-blue-50",
  },
  ALERT: {
    icon: HiOutlineExclamationCircle,
    colorClass: "text-orange-500",
    bgClass: "bg-orange-50",
  },
  UPDATE: {
    icon: HiOutlineBadgeCheck,
    colorClass: "text-amber-500",
    bgClass: "bg-amber-50",
  },
};

const SystemAuditLog = ({ activities }: { activities?: any[] }) => {
  // 1. Search State
  const [searchTerm, setSearchTerm] = useState("");

  const initialData = useMemo(
    () =>
      activities || [
        {
          id: "1",
          title: "Approved general mark-up update",
          detail: "Price Approved • Division Manager",
          timestamp: "1 days ago",
          type: "APPROVE",
        },
        {
          id: "2",
          title: "Paracetamol 1000mg",
          detail: "New Registration • System Import",
          timestamp: "3 hour ago",
          type: "IMPORT",
        },
        {
          id: "3",
          title: "Ibuprofen 400mg",
          detail: "Compliance Alert • Auto Monitor",
          timestamp: "1 week ago",
          type: "ALERT",
        },
        {
          id: "4",
          title: "Updated regressive mark-up",
          detail: "Price updated • Market Analyst",
          timestamp: "1 month ago",
          type: "UPDATE",
        },
      ],
    [activities],
  );

  // 2. Filter Logic: Checks if search term exists in Title or Detail
  const filteredActivities = initialData.filter(
    (log) =>
      log.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      log.detail.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="w-full bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
      <div className="p-6 space-y-4">
        <h2 className="text-lg font-bold text-slate-900">
          System Activity & Audit Log
        </h2>

        <div className="relative">
          <HiOutlineSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
          <Input
            placeholder="Search activity..."
            className="pl-10 h-11 bg-white border-slate-200 focus:ring-2 focus:ring-[#00897B]/10"
            // 3. Bind Input to State
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="px-2 pb-6 min-h-[200px]">
        {filteredActivities.length > 0 ? (
          <div className="space-y-1">
            {filteredActivities.map((log) => {
              const config =
                ACTIVITY_CONFIG[log.type] || ACTIVITY_CONFIG["UPDATE"];
              const Icon = config.icon;

              return (
                <div
                  key={log.id}
                  className="flex items-center justify-between p-4 rounded-lg hover:bg-slate-50 transition-colors group"
                >
                  <div className="flex items-center gap-4">
                    <div className={cn("p-2.5 rounded-lg", config.bgClass)}>
                      <Icon className={cn("w-6 h-6", config.colorClass)} />
                    </div>
                    <div>
                      <p className="font-bold text-slate-900 leading-tight">
                        {log.title}
                      </p>
                      <p className="text-sm text-slate-500 font-medium">
                        {log.detail}
                      </p>
                    </div>
                  </div>
                  <span className="text-sm font-medium text-slate-400">
                    {log.timestamp}
                  </span>
                </div>
              );
            })}
          </div>
        ) : (
          // 4. Empty State if no results found
          <div className="py-10 text-center text-slate-400 text-sm">
            No activities found matching "{searchTerm}"
          </div>
        )}
      </div>
    </div>
  );
};

export default SystemAuditLog;
