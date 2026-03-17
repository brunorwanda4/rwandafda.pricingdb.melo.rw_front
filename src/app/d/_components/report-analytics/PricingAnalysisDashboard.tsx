"use client";

import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Data for Enforcement & Mark-up Trends
const MOCK_TREND_DATA = [
  {
    name: "Sept",
    violations: 20,
    warnings: 30,
    correcteds: 50,
    pubRetail: 20,
    privWholesale: 25,
    pubWholesale: 18,
    privRetail: 35,
  },
  {
    name: "Oct",
    violations: 18,
    warnings: 28,
    correcteds: 78,
    pubRetail: 22,
    privWholesale: 28,
    pubWholesale: 20,
    privRetail: 38,
  },
  {
    name: "Nov",
    violations: 12,
    warnings: 22,
    correcteds: 72,
    pubRetail: 18,
    privWholesale: 26,
    pubWholesale: 19,
    privRetail: 39,
  },
  {
    name: "Dec",
    violations: 15,
    warnings: 28,
    correcteds: 82,
    pubRetail: 16,
    privWholesale: 25,
    pubWholesale: 18,
    privRetail: 40,
  },
  {
    name: "Jan",
    violations: 10,
    warnings: 20,
    correcteds: 70,
    pubRetail: 15,
    privWholesale: 22,
    pubWholesale: 17,
    privRetail: 32,
  },
  {
    name: "Feb",
    violations: 8,
    warnings: 22,
    correcteds: 62,
    pubRetail: 22,
    privWholesale: 28,
    pubWholesale: 19,
    privRetail: 35,
  },
];

// Data for Compliance Donut
const COMPLIANCE_DATA = [
  { name: "Compliant", value: 1045, color: "#00897B" },
  { name: "Pending Review", value: 89, color: "#FFB300" },
  { name: "Non-Compliant", value: 44, color: "#D32F2F" },
];

const PricingAnalysisDashboard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
      {/* 1. Policy Enforcement Metrics */}
      <Card className="shadow-sm border-slate-200">
        <CardHeader>
          <CardTitle className="text-lg font-bold text-slate-900">
            Policy Enforcement Metrics
          </CardTitle>
          <CardDescription>
            Monthly violations, warnings, and corrections
          </CardDescription>
        </CardHeader>
        <CardContent className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={MOCK_TREND_DATA}>
              <CartesianGrid
                strokeDasharray="3 3"
                vertical={false}
                stroke="#f1f5f9"
              />
              <XAxis
                dataKey="name"
                stroke="#94a3b8"
                fontSize={12}
                tickLine={false}
                axisLine={false}
              />
              <YAxis
                stroke="#94a3b8"
                fontSize={12}
                tickLine={false}
                axisLine={false}
              />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="correcteds"
                stroke="#26A69A"
                strokeWidth={2}
                dot={{ r: 4 }}
              />
              <Line
                type="monotone"
                dataKey="warnings"
                stroke="#FFB300"
                strokeWidth={2}
                dot={{ r: 4 }}
              />
              <Line
                type="monotone"
                dataKey="violations"
                stroke="#EF5350"
                strokeWidth={2}
                dot={{ r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* 2. Compliance Status Donut */}
      <Card className="shadow-sm border-slate-200">
        <CardHeader>
          <CardTitle className="text-lg font-bold text-slate-900">
            Compliance Status
          </CardTitle>
          <CardDescription>
            Overall regulatory compliance distribution
          </CardDescription>
        </CardHeader>
        <CardContent className="flex items-center justify-center h-[300px]">
          <div className="relative w-full h-full flex items-center">
            <ResponsiveContainer width="60%" height="100%">
              <PieChart>
                <Pie
                  data={COMPLIANCE_DATA}
                  innerRadius={70}
                  outerRadius={100}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {COMPLIANCE_DATA.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className="w-[40%] space-y-4 pr-4">
              {COMPLIANCE_DATA.map((item) => (
                <div
                  key={item.name}
                  className="flex items-center justify-between text-sm"
                >
                  <div className="flex items-center gap-2 font-medium text-slate-600">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: item.color }}
                    />
                    {item.name}
                  </div>
                  <span className="font-bold text-slate-900">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 3. Pricing Mark-up & Trend Comparison */}
      <Card className="shadow-sm border-slate-200">
        <CardHeader>
          <CardTitle className="text-lg font-bold text-slate-900">
            Pricing mark-up & trend comparison
          </CardTitle>
          <CardDescription>
            Pharmaceutical product pricing mark-up policy rate
          </CardDescription>
        </CardHeader>
        <CardContent className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={MOCK_TREND_DATA}>
              <CartesianGrid
                strokeDasharray="3 3"
                vertical={false}
                stroke="#f1f5f9"
              />
              <XAxis
                dataKey="name"
                stroke="#94a3b8"
                fontSize={12}
                tickLine={false}
              />
              <YAxis stroke="#94a3b8" fontSize={12} tickLine={false} />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="privRetail"
                stroke="#FFB300"
                strokeWidth={2}
                dot={{ r: 4 }}
              />
              <Line
                type="monotone"
                dataKey="privWholesale"
                stroke="#26C6DA"
                strokeWidth={2}
                dot={{ r: 4 }}
              />
              <Line
                type="monotone"
                dataKey="pubRetail"
                stroke="#FF8A65"
                strokeWidth={2}
                dot={{ r: 4 }}
              />
              <Line
                type="monotone"
                dataKey="pubWholesale"
                stroke="#9575CD"
                strokeWidth={2}
                dot={{ r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* 4. Reasons for Updating Mark-up */}
      <Card className="shadow-sm border-slate-200">
        <CardHeader>
          <CardTitle className="text-lg font-bold text-slate-900">
            Reasons for updating mark-up
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="p-4 border border-slate-100 rounded-xl bg-slate-50/30">
            <div className="flex justify-between items-start mb-2">
              <h4 className="font-bold text-slate-900">Inflation Adjustment</h4>
              <span className="text-xs font-medium text-slate-500">
                Jan 24, 2024
              </span>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">
              Mark-up updated to reflect current inflation rates and maintain
              alignment with market economic conditions.
            </p>
            <button type="button" className="link link-hover link-info">
              Read More...
            </button>
          </div>

          <div className="p-4 border border-slate-100 rounded-xl bg-slate-50/30">
            <div className="flex justify-between items-start mb-2">
              <h4 className="font-bold text-slate-900">Policy Update</h4>
              <span className="text-xs font-medium text-slate-500">
                Jun 20, 2023
              </span>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">
              Mark-up revised following changes in government pricing policy and
              regulatory requirements.
            </p>
            <button type="button" className="link link-hover link-info">
              Read More...
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PricingAnalysisDashboard;
