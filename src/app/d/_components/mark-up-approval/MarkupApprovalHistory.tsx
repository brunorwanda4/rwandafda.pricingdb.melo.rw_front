"use client";

import React from "react";
import {
  HiOutlineCalendar,
  HiOutlineUser,
  HiOutlineCheckCircle,
  HiOutlineClock,
  HiOutlineXCircle,
  HiOutlineChevronDown,
  HiOutlineClipboardList,
} from "react-icons/hi";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import { Item } from "@/components/ui/item";

// Types for the history data
type ApprovalStep = {
  name: string;
  role: string;
  date: string;
  status: "Approved" | "Pending" | "Rejected";
  comment?: string;
};

export default function MarkupApprovalHistory() {
  const approvalSteps: ApprovalStep[] = [
    {
      name: "Eric Nkusi",
      role: "Market Analyst",
      date: "Jan 20, 2026",
      status: "Approved",
    },
    {
      name: "Dr. Sarah Uwera",
      role: "Division Manager",
      date: "Feb 6, 2026",
      status: "Approved",
    },
    {
      name: "Alice Umubyeyi",
      role: "Market Analyst",
      date: "Waiting for Approval",
      status: "Pending",
    },
  ];

  return (
    <Card className="w-full ">
      <CardContent className="space-y-3">
        <CardTitle className="">
          Approval Status History
        </CardTitle>

        {approvalSteps.map((step, idx) => (
          <Item
            key={idx}
            className={cn(
              "flex items-center justify-between p-5 rounded-xl border transition-all",
              step.status === "Approved"
                ? "bg-emerald-50/40 border-emerald-100"
                : "bg-white border-slate-200",
            )}
          >
            <div className="flex items-center gap-4">
              <div
                className={cn(
                  "w-10 h-10 rounded-full flex items-center justify-center font-bold",
                  step.status === "Approved"
                    ? "bg-emerald-100 text-emerald-600"
                    : "bg-slate-100 text-slate-400",
                )}
              >
                {step.name.charAt(0)}
              </div>
              <div>
                <p className="font-bold text-slate-900">{step.name}</p>
                <p className="text-xs font-medium text-slate-500 italic">
                  {step.role}
                </p>
                <p className="text-[11px] text-slate-400 mt-0.5">{step.date}</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              {step.status === "Approved" ? (
                <span className="flex items-center gap-1.5 text-emerald-600 font-bold text-sm">
                  <HiOutlineCheckCircle className="w-5 h-5" /> Approved
                </span>
              ) : step.status === "Rejected" ? (
                <span className="flex items-center gap-1.5 text-red-500 font-bold text-sm">
                  <HiOutlineXCircle className="w-5 h-5" /> Rejected
                </span>
              ) : (
                <span className="flex items-center gap-1.5 text-orange-500 font-bold text-sm">
                  <HiOutlineClock className="w-5 h-5" /> Pending
                </span>
              )}
            </div>
          </Item>
        ))}
      </CardContent>

    </Card>
  );
}
