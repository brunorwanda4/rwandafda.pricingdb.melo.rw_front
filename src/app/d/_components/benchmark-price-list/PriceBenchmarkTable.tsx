"use client";

import type React from "react";
import { useState, useMemo } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  HiOutlineSearch,
  HiOutlineFilter,
  HiOutlineShare,
  HiOutlineChevronLeft,
  HiOutlineChevronRight,
  HiOutlineChevronDoubleRight,
} from "react-icons/hi";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import { useSidebar } from "@/components/ui/sidebar";

const MOCK_DATA = [
  {
    id: "2141",
    name: "Paracetamol 500mg Tablet",
    category: "Analgesic",
    landingCost: "15,000 RWF",
    scheme: "Standard",
    pubWholesale: { price: "18,600 RWF", change: "+20.0%" },
    privWholesale: { price: "19,200 RWF", change: "+25.0%" },
    pubRetail: { price: "18,600 RWF", change: "+20.0%" },
    privRetail: { price: "21,000 RWF", change: "+33.5%" },
  },
  {
    id: "2777",
    name: "Metformin 500mg Tablet",
    category: "Antidiabetic",
    landingCost: "50,000 RWF",
    scheme: "Regressive",
    pubWholesale: { price: "57,500 RWF", change: "+15.0%" },
    privWholesale: { price: "60,000 RWF", change: "+18.0%" },
    pubRetail: { price: "57,500 RWF", change: "+15.0%" },
    privRetail: { price: "61,000 RWF", change: "+25.0%" },
  },
];

export default function PriceBenchmarkTable() {
  const [search, setSearch] = useState("");
  const { open } = useSidebar();

  const filteredData = useMemo(() => {
    return MOCK_DATA.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase()),
    );
  }, [search]);

  return (
    // KEY FIX 1: Use w-full with min-w-0 to prevent the card from overflowing its parent.
    // The parent layout (sidebar + main) controls the available width — this card just fills it.
    <Card className="w-full min-w-0 overflow-hidden">
      <CardContent className="p-4 lg:p-6">
        {/* SEARCH & CONTROLS */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 mb-6">
          <div className="relative flex-1 min-w-0 max-w-lg">
            <HiOutlineSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
            <Input
              placeholder="Search by product name..."
              className="pl-10 h-11 bg-white border-slate-200 focus:ring-[#1044A5] w-full"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <Button variant="outline" className="h-11 gap-2 font-bold">
              <HiOutlineFilter /> Filter
            </Button>
            <Button variant="outline" size="icon" className="h-11 w-11">
              <HiOutlineShare />
            </Button>
          </div>
        </div>

        {/* KEY FIX 2: The table wrapper.
            - On mobile/md: overflow-x-auto with no fixed width — scroll horizontally as needed.
            - On lg+: use CSS var to set exact width based on sidebar state.
            - `max-w-full` ensures it never exceeds the card width on any screen.
        */}
        <div
          className={cn(
            "relative overflow-x-auto max-w-full",
            // Only apply the calculated width on large screens
            "lg:[width:var(--table-w)]",
          )}
          style={
            {
              "--table-w": open
                ? "calc(100vw - 22rem - 48px)" // sidebar open (~16rem) + padding
                : "calc(100vw - 6rem - 48px)", // sidebar collapsed (icon ~4rem) + padding
            } as React.CSSProperties
          }
        >
          {/* KEY FIX 3: Remove table-fixed on mobile which causes cramping.
              Use table-auto always so columns size to their content. */}
          <Table className="w-full border-collapse table-auto">
            <TableHeader className="bg-slate-50/50">
              <TableRow className="border-slate-100">
                {/* STICKY LEFT: Product name */}
                <TableHead className="sticky left-0 z-30 bg-slate-50 font-bold text-slate-900 py-4 min-w-[200px] lg:min-w-[240px] border-r shadow-[2px_0_5px_-2px_rgba(0,0,0,0.1)]">
                  Product name
                </TableHead>

                <TableHead className="font-bold whitespace-nowrap min-w-[130px]">
                  Landing cost
                </TableHead>
                <TableHead className="font-bold text-center whitespace-nowrap min-w-[130px]">
                  Mark-up Scheme
                </TableHead>
                <TableHead className="font-bold text-center whitespace-nowrap min-w-[150px]">
                  Public Wholesaler
                </TableHead>
                <TableHead className="font-bold text-center whitespace-nowrap min-w-[150px]">
                  Private Wholesaler
                </TableHead>
                <TableHead className="font-bold text-center whitespace-nowrap min-w-[130px]">
                  Public Retailer
                </TableHead>
                <TableHead className="font-bold text-center whitespace-nowrap min-w-[130px]">
                  Private Retailer
                </TableHead>

                {/* STICKY RIGHT: Action */}
                <TableHead className="sticky right-0 z-30 bg-slate-50 font-bold text-[#00897B] text-right border-l px-4 min-w-[80px]">
                  Action
                </TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {filteredData.map((item) => (
                <TableRow
                  key={item.id}
                  className="border-slate-100 hover:bg-slate-50/50 group"
                >
                  {/* STICKY LEFT: Product name cell */}
                  <TableCell className="sticky left-0 z-10 bg-white group-hover:bg-slate-50 font-bold text-slate-900 py-4 border-r shadow-[2px_0_5px_-2px_rgba(0,0,0,0.05)]">
                    <div className="flex flex-col">
                      <span className="text-sm">{item.name}</span>
                      <span className="text-[10px] font-medium text-slate-400 italic uppercase">
                        {item.category}
                      </span>
                    </div>
                  </TableCell>

                  <TableCell className="text-slate-600 font-medium px-4 whitespace-nowrap">
                    {item.landingCost}
                  </TableCell>

                  <TableCell className="text-center px-4">
                    <span
                      className={cn(
                        "px-3 py-1 rounded-lg font-bold text-xs whitespace-nowrap",
                        item.scheme === "Standard"
                          ? "bg-emerald-100 text-emerald-700"
                          : "bg-orange-100 text-orange-600",
                      )}
                    >
                      {item.scheme}
                    </span>
                  </TableCell>

                  {/* PRICE TIER COLUMNS */}
                  {[
                    item.pubWholesale,
                    item.privWholesale,
                    item.pubRetail,
                    item.privRetail,
                  ].map((tier, i) => (
                    <TableCell
                      key={i}
                      className="text-center px-4 whitespace-nowrap"
                    >
                      <p className="text-slate-900 font-bold text-sm">
                        {tier.price}
                      </p>
                      <p className="text-emerald-600 font-black text-[11px]">
                        {tier.change}
                      </p>
                    </TableCell>
                  ))}

                  {/* STICKY RIGHT: Action cell */}
                  <TableCell className="sticky right-0 z-10 bg-white group-hover:bg-slate-50 text-right border-l px-4">
                    <Button variant="ghost" size="sm">
                      View
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {/* PAGINATION FOOTER */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mt-6">
          <p className="text-sm font-medium text-slate-500">
            Showing 1-4 of 40 items
          </p>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="icon" className="w-9 h-9">
              <HiOutlineChevronLeft />
            </Button>
            <Button className="w-9 h-9 bg-blue-50 text-[#1044A5] hover:bg-blue-100 border-none font-bold">
              1
            </Button>
            <Button variant="ghost" className="w-9 h-9">
              2
            </Button>
            <Button variant="outline" size="icon" className="w-9 h-9">
              <HiOutlineChevronRight />
            </Button>
            <Button variant="outline" size="icon" className="w-9 h-9">
              <HiOutlineChevronDoubleRight />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
