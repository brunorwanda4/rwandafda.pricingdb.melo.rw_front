"use client";

import React from "react";
import { LuActivity } from "react-icons/lu";
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart";

const chartConfig = {
  api: { label: "API Calls", color: "#22c55e" },
  logins: { label: "User Logins", color: "#3b82f6" },
  errors: { label: "Errors", color: "#ef4444" },
} satisfies ChartConfig;

const chartData = [
  { time: "00:00", logins: 8, api: 28, errors: 3 },
  { time: "02:00", logins: 6, api: 65, errors: 1 },
  { time: "04:00", logins: 5, api: 62, errors: 2 },
  { time: "06:00", logins: 7, api: 70, errors: 3 },
  { time: "08:00", logins: 18, api: 64, errors: 1 },
  { time: "10:00", logins: 20, api: 35, errors: 5 },
  { time: "12:00", logins: 13, api: 58, errors: 3 },
  { time: "14:00", logins: 10, api: 30, errors: 1 },
  { time: "16:00", logins: 12, api: 45, errors: 4 },
  { time: "18:00", logins: 9, api: 15, errors: 2 },
  { time: "20:00", logins: 8, api: 72, errors: 5 },
  { time: "22:00", logins: 3, api: 63, errors: 1 },
];

export function SystemActivityChart() {
  return (
    /* added relative and overflow-hidden for the background pattern */
    <Card className="w-full relative overflow-hidden">
      {/* 1. Notebook Line Background Pattern */}
      <div
        className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`,
          backgroundSize: "20px 20px",
        }}
      />

      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-7 relative ">
        <div className="space-y-1">
          <CardTitle>System Activity (Last 24 Hours)</CardTitle>
          <CardDescription>
            User logins, API calls, and error tracking
          </CardDescription>
        </div>
        <LuActivity className="w-6 h-6 text-slate-900" />
      </CardHeader>

      <CardContent className="relative z-10">
        <ChartContainer
          config={chartConfig}
          className="aspect-[4/3] w-full max-h-[350px]"
        >
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{ left: -20, right: 10 }}
          >
            {/* The CartesianGrid matches the notebook lines inside the chart */}
            <CartesianGrid
              vertical={false}
              strokeDasharray="3 3"
              stroke="#e2e8f0"
            />
            <XAxis
              dataKey="time"
              tickLine={false}
              axisLine={false}
              tickMargin={10}
              fontSize={12}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tickMargin={10}
              fontSize={12}
            />
            <ChartTooltip content={<ChartTooltipContent />} />

            <Line
              dataKey="api"
              type="monotone"
              stroke={chartConfig.api.color}
              strokeWidth={2}
              dot={{
                fill: "#fff",
                stroke: chartConfig.api.color,
                strokeWidth: 2,
                r: 4,
              }}
            />
            <Line
              dataKey="logins"
              type="monotone"
              stroke={chartConfig.logins.color}
              strokeWidth={2}
              dot={{
                fill: "#fff",
                stroke: chartConfig.logins.color,
                strokeWidth: 2,
                r: 4,
              }}
            />
            <Line
              dataKey="errors"
              type="monotone"
              stroke={chartConfig.errors.color}
              strokeWidth={2}
              dot={{
                fill: "#fff",
                stroke: chartConfig.errors.color,
                strokeWidth: 2,
                r: 4,
              }}
            />
            <ChartLegend content={<ChartLegendContent />} className="mt-6" />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
