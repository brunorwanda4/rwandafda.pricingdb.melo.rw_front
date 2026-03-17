"use client";

import React, { useState, useMemo } from "react";
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

// Combined mock data from your various screenshots
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

  const filteredData = useMemo(() => {
    return MOCK_DATA.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase()),
    );
  }, [search]);

  const { open } = useSidebar();

  return (
    <Card className="w-full overflow-hidden">
      {/* 1. BLUE HEADER SECTION */}

      <CardContent className="">
        {/* 2. SEARCH & CONTROLS */}
        <div className="flex items-center justify-between gap-4 mb-6">
          <div className="relative flex-1 max-w-lg">
            <HiOutlineSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
            <Input
              placeholder="Search by product name..."
              className="pl-10 h-12 bg-white border-slate-200 focus:ring-[#1044A5]"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" className="h-12 gap-2 font-bold">
              <HiOutlineFilter /> Filter
            </Button>
            <Button variant="outline" size="icon" className="h-12 w-12">
              <HiOutlineShare />
            </Button>
          </div>
        </div>

        {/* 3. THE RESPONSIVE TABLE ENGINE */}
        {/*Can you help me to make condition which make 100vw - sidebar width */}
        <div
          className="relative overflow-x-auto lg:[width:var(--w)]"
          style={{
            "--w": open
              ? "calc(100vw - 22rem - 48px)"
              : "calc(100vw - 10rem - 48px)",
          }}
        >
          <Table className="w-full border-collapse table-fixed md:table-auto">
            <TableHeader className="bg-slate-50/50">
              <TableRow className="border-slate-100">
                {/* STICKY COLUMN 1: PRODUCT IDENTITY */}
                <TableHead className="sticky left-0 z-30 bg-slate-50 font-bold text-slate-900 py-4 min-w-[220px] border-r shadow-[2px_0_5px_-2px_rgba(0,0,0,0.1)]">
                  Product name
                </TableHead>

                <TableHead className="font-bold whitespace-nowrap">
                  Landing cost
                </TableHead>
                <TableHead className="font-bold text-center">
                  Mark-up Scheme
                </TableHead>
                <TableHead className="font-bold text-center">
                  Public Wholesaler
                </TableHead>
                <TableHead className="font-bold text-center">
                  Private Wholesaler
                </TableHead>
                <TableHead className="font-bold text-center">
                  Public Retailer
                </TableHead>
                <TableHead className="font-bold text-center">
                  Private Retailer
                </TableHead>

                {/* STICKY COLUMN 2: ACTION */}
                <TableHead className="sticky right-0 z-30 bg-slate-50 font-bold text-[#00897B] text-right border-l px-4">
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
                  {/* STICKY PRODUCT NAME */}
                  <TableCell className="sticky left-0 z-10 bg-white group-hover:bg-slate-50 font-bold text-slate-900 py-4 border-r shadow-[2px_0_5px_-2px_rgba(0,0,0,0.05)]">
                    <div className="flex flex-col">
                      <span>{item.name}</span>
                      <span className="text-[10px] font-medium text-slate-400 italic uppercase">
                        {item.category}
                      </span>
                    </div>
                  </TableCell>

                  <TableCell className="text-slate-600 font-medium px-4">
                    {item.landingCost}
                  </TableCell>

                  <TableCell className="text-center px-4">
                    <span
                      className={cn(
                        "px-3 py-1 rounded-lg font-bold text-xs",
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

                  {/* STICKY ACTION BUTTON */}
                  <TableCell className="sticky right-0 z-10 bg-white group-hover:bg-slate-50 text-right border-l px-4">
                    <Button variant="ghost">View</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {/* 4. PAGINATION FOOTER */}
        <div className="flex items-center justify-between mt-6">
          <p className="text-sm font-medium text-slate-500">
            Showing 1-4 of 40 items
          </p>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="icon" className="w-10 h-10">
              <HiOutlineChevronLeft />
            </Button>
            <Button className="w-10 h-10 bg-blue-50 text-[#1044A5] hover:bg-blue-100 border-none font-bold">
              1
            </Button>
            <Button variant="ghost" className="w-10 h-10">
              2
            </Button>
            <Button variant="outline" size="icon" className="w-10 h-10">
              <HiOutlineChevronRight />
            </Button>
            <Button variant="outline" size="icon" className="w-10 h-10">
              <HiOutlineChevronDoubleRight />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
