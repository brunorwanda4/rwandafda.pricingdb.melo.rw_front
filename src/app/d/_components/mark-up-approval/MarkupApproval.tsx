"use client";

import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  HiOutlineCalendar,
  HiOutlineClipboardList,
  HiOutlineThumbUp,
  HiOutlineThumbDown,
  HiOutlineChevronUp,
} from "react-icons/hi";
import { IoCheckmarkCircle, IoTimeOutline } from "react-icons/io5";
import { cn } from "@/lib/utils";

/**
 * Mock data for the approval workflow
 */
const APPROVAL_STEPS = [
  {
    name: "Eric Nkusi",
    role: "Market Analyst",
    date: "Jan 20, 2026",
    status: "Approved",
    isCompleted: true,
  },
  {
    name: "Dr. Sarah Uwera",
    role: "Division Manager",
    date: "Feb 6, 2026",
    status: "Approved",
    isCompleted: true,
  },
  {
    name: "Alice Umubyeyi",
    role: "Market Analyst",
    status: "Pending",
    isCompleted: false,
    note: "Waiting for Approval",
  },
];

const MarkupApproval = () => {
  return (
    <div className="">
      {/* Main Approval Card */}
      <Card className="border-slate-200 overflow-hidden shadow-sm">
        <CardContent className="p-0">
          {/* Header Section */}
          <div className="p-5 border-b border-slate-100">
            <div className="flex items-start justify-between mb-4">
              <div className="flex gap-4">
                <div className="p-3 bg-orange-50 rounded-lg h-fit">
                  <HiOutlineClipboardList className="w-6 h-6 text-orange-500" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-slate-900">
                    Publish February 2026 Benchmark List
                  </h3>
                  <div className="flex items-center gap-4 text-sm font-medium text-slate-500">
                    <span className="flex items-center gap-1.5">
                      <HiOutlineCalendar className="w-4 h-4" /> Jan 30, 2026
                    </span>
                    <span>
                      Requested by:{" "}
                      <span className="text-slate-900">Aline Umuhoza</span>
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1.5 text-orange-500 font-bold bg-orange-50 px-3 py-1.5 rounded-lg">
                  <IoTimeOutline className="w-5 h-5" />
                  <span>Pending</span>
                </div>
                <HiOutlineChevronUp className="w-5 h-5 text-slate-400 cursor-pointer" />
              </div>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-4 gap-3 mb-4">
              {[
                { label: "Total Products", value: "1565" },
                { label: "Updated Prices", value: "80" },
                { label: "Benchmark Version", value: "2026 Feb Version" },
                { label: "Reason", value: "Currency Fluctuation" },
              ].map((metric) => (
                <div
                  key={metric.label}
                  className="p-3 border border-slate-200 rounded-lg bg-white"
                >
                  <p className="text-xs text-slate-500 font-medium mb-1">
                    {metric.label}
                  </p>
                  <p className="text-sm font-bold text-slate-900 truncate">
                    {metric.value}
                  </p>
                </div>
              ))}
            </div>

            {/* Internal Action Button */}
            <div className="flex justify-end">
              <Button>
                <HiOutlineClipboardList className="w-5 h-5" />
                View Product Pricing Details
              </Button>
            </div>
          </div>

          {/* Approval Status Timeline Section */}
          <div className="p-5 bg-white space-y-3">
            <h4 className="text-sm font-black text-slate-900 uppercase tracking-tight mb-4">
              Approval Status
            </h4>

            {APPROVAL_STEPS.map((step, index) => (
              <div
                key={index}
                className={cn(
                  "flex items-center justify-between p-4 rounded-xl border transition-all",
                  step.isCompleted
                    ? "bg-emerald-50/50 border-emerald-100"
                    : "bg-white border-slate-200",
                )}
              >
                <div className="space-y-0.5">
                  <p className="font-bold text-slate-900">{step.name}</p>
                  <p className="text-xs italic text-slate-600">{step.role}</p>
                  <p
                    className={cn(
                      "text-xs font-medium mt-1",
                      step.isCompleted ? "text-slate-500" : "text-orange-500",
                    )}
                  >
                    {step.date || step.note}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  {step.isCompleted ? (
                    <>
                      <IoCheckmarkCircle className="w-6 h-6 text-emerald-500" />
                      <span className="font-black text-emerald-600 uppercase text-xs tracking-widest">
                        Approved
                      </span>
                    </>
                  ) : (
                    <>
                      <IoTimeOutline className="w-6 h-6 text-orange-500" />
                      <span className="font-black text-orange-500 uppercase text-xs tracking-widest">
                        Pending
                      </span>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
        {/* Global Action Buttons */}
        <CardFooter className="grid grid-cols-2 gap-4">
          <Button size={"lg"}>
            <HiOutlineThumbUp className="w-6 h-6" />
            Approve
          </Button>
          <Button variant={"destructive"} size={"lg"}>
            <HiOutlineThumbDown className="w-6 h-6" />
            Reject
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default MarkupApproval;
