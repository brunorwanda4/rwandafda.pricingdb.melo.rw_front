"use client";

import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { HiOutlineCodeBracket } from "react-icons/hi2";
import { LuShieldCheck, LuActivity, LuDownload } from "react-icons/lu";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

// 1. Configuration for Documentation links
const DOC_LINKS = [
  {
    title: "REST API Reference",
    description: "Endpoint documentation",
    icon: HiOutlineCodeBracket,
    color: "text-blue-500",
    bgColor: "bg-blue-50",
  },
  {
    title: "Authentication Guide",
    description: "API key usage and security",
    icon: LuShieldCheck,
    color: "text-emerald-600",
    bgColor: "bg-emerald-50",
  },
  {
    title: "Rate Limiting",
    description: "Throttling and quotas",
    icon: LuActivity,
    color: "text-purple-500",
    bgColor: "bg-purple-50",
  },
];

const ApiDocumentation = () => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-start justify-between relative z-10">
        <div className="space-y-1">
          <CardTitle>API Documentation</CardTitle>
          <CardDescription>
            Integration guides and endpoint references
          </CardDescription>
        </div>
        <Button type="button" variant={"ghost"}>
          <LuDownload className="w-6 h-6 text-slate-600" />
        </Button>
      </CardHeader>

      <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-4 relative z-10">
        {DOC_LINKS.map((doc, index) => {
          const Icon = doc.icon;
          return (
            <div
              key={index}
              className="flex items-center gap-4 p-4 border rounded-xl hover:border-slate-300 transition-all cursor-pointer bg-white/50"
            >
              <div className={cn("p-3 rounded-xl shrink-0", doc.bgColor)}>
                <Icon className={cn("w-6 h-6", doc.color)} />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-sm leading-tight">
                  {doc.title}
                </span>
                <span className="text-xs text-slate-500 mt-1">
                  {doc.description}
                </span>
              </div>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
};

export default ApiDocumentation;
