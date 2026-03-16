"use client"

import { CartesianGrid, Area, AreaChart, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const chartData = [
  { month: "Sept", publicW: 20, publicR: 19, privateW: 25, privateR: 33 },
  { month: "Oct", publicW: 22, publicR: 21, privateW: 27, privateR: 36 },
  { month: "Nov", publicW: 20, publicR: 20, privateW: 26, privateR: 36 },
  { month: "Dec", publicW: 19, publicR: 19, privateW: 25, privateR: 37 },
  { month: "Jan", publicW: 18, publicR: 20, privateW: 25, privateR: 31 },
  { month: "Feb", publicW: 20, publicR: 23, privateW: 28, privateR: 33 },
]

const chartConfig = {
  publicW: { label: "Public Wholesaler", color: "#8b5cf6" }, // Purple
  publicR: { label: "Public Retail", color: "#f87171" },    // Red/Pink
  privateW: { label: "Private Wholesaler", color: "#22d3ee" }, // Cyan
  privateR: { label: "Private Retail", color: "#fb923c" },   // Orange
} satisfies ChartConfig

export default function PricingTrendChart() {
  return (
    <div className="p-6 bg-white rounded-xl border shadow-sm w-full max-w-4xl">
      <div className="flex justify-between items-start mb-8">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Mark-up Pricing Trends Analysis</h2>
          <p className="text-slate-500">Average product prices over time</p>
        </div>
        <div className="flex gap-3">
            {/* Simple placeholder for your dropdowns */}
            <div className="px-3 py-2 border rounded-md text-sm text-slate-600">Price Range Filter</div>
            <div className="px-3 py-2 border rounded-md text-sm text-slate-600">Last 6 months</div>
        </div>
      </div>

      <ChartContainer config={chartConfig} className="h-[300px] w-full">
        <AreaChart data={chartData} margin={{ left: -20, right: 10 }}>
          <defs>
            {/* These gradients create the 'glow' effect seen in your image */}
            {Object.keys(chartConfig).map((key) => (
              <linearGradient key={key} id={`fade${key}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={chartConfig[key as keyof typeof chartConfig].color} stopOpacity={0.2} />
                <stop offset="95%" stopColor={chartConfig[key as keyof typeof chartConfig].color} stopOpacity={0} />
              </linearGradient>
            ))}
          </defs>

          <CartesianGrid vertical={false} strokeDasharray="3 3" stroke="#e2e8f0" />

          <XAxis
            dataKey="month"
            axisLine={false}
            tickLine={false}
            tickMargin={10}
            tick={{ fill: '#64748b', fontSize: 12 }}
          />

          <YAxis
            axisLine={false}
            tickLine={false}
            ticks={[0, 8, 16, 24, 32, 40]}
            tick={{ fill: '#64748b', fontSize: 12 }}
          />

          <ChartTooltip content={<ChartTooltipContent />} />

          {/* Area Lines */}
          {Object.entries(chartConfig).map(([key, config]) => (
            <Area
              key={key}
              type="linear"
              dataKey={key}
              stroke={config.color}
              strokeWidth={1.5}
              fill={`url(#fade${key})`}
              dot={{ r: 3, fill: "white", stroke: config.color, strokeWidth: 1 }}
              activeDot={{ r: 5, strokeWidth: 0 }}
            />
          ))}
        </AreaChart>
      </ChartContainer>

      {/* Custom Legend to match image */}
      <div className="flex flex-wrap justify-center gap-6 mt-6">
        {Object.entries(chartConfig).map(([key, config]) => (
          <div key={key} className="flex items-center gap-2 text-xs text-slate-600 font-medium">
            <div className="w-3 h-3 rounded-full border-2" style={{ borderColor: config.color }} />
            {config.label}
          </div>
        ))}
      </div>
    </div>
  )
}
