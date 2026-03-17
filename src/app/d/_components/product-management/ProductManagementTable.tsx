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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  HiOutlineSearch,
  HiOutlineDownload,
  HiOutlineFilter,
  HiOutlineChevronLeft,
  HiOutlineChevronRight,
  HiOutlineChevronDoubleRight,
} from "react-icons/hi";
import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

// Mock data based on your specific "Product Management" screenshots
const INITIAL_PRODUCTS = [
  {
    regNo: "Rwanda FDA-HMP-MA-2141",
    name: "Paracetamol",
    strength: "125 mg",
    dosageForm: "Syrup",
    status: "Active",
  },
  {
    regNo: "Rwanda FDA-HMP-MA-1931",
    name: "Amoxicillin",
    strength: "500 mg",
    dosageForm: "Capsules",
    status: "Active",
  },
  {
    regNo: "Rwanda FDA-HMP-MA-2216",
    name: "Ibuprofen",
    strength: "200 mg",
    dosageForm: "Tablets",
    status: "Pending",
  },
  {
    regNo: "RWANDA-FDA23/HM/0295/0027",
    name: "Piroxicam BP",
    strength: "20mg",
    dosageForm: "Capsules",
    status: "Active",
  },
];

const ProductManagementTable = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All Status");

  // Filter Logic
  const filteredProducts = useMemo(() => {
    return INITIAL_PRODUCTS.filter((product) => {
      const matchesSearch =
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.regNo.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesStatus =
        statusFilter === "All Status" || product.status === statusFilter;
      return matchesSearch && matchesStatus;
    });
  }, [searchTerm, statusFilter]);

  return (
    <Card>
      {/* Search and Filters Header */}
      <CardHeader className="flex items-center justify-between gap-4">
        <div className="relative flex-1 max-w-xl">
          <HiOutlineSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
          <Input
            placeholder="Search product by name, GTIN or Registration number"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className=" pl-10"
          />
        </div>

        <div className="flex items-center gap-3">
          {/* Status Filter Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="gap-2 h-12 px-5 font-bold text-slate-600 border-slate-200"
              >
                <HiOutlineFilter className="w-5 h-5 text-slate-400" />
                {statusFilter}
                <span className="ml-1 border-l pl-2 border-slate-200 text-slate-400">
                  <svg
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    className="inline-block"
                  >
                    <path
                      d="M1 1L5 5L9 1"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-[180px]  border-none">
              <DropdownMenuItem
                onClick={() => setStatusFilter("All Status")}
                className=""
              >
                All Status
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => setStatusFilter("Pending")}
                className=""
              >
                Pending
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => setStatusFilter("Active")}
                className=""
              >
                Active
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Button
            variant="outline"
            className="gap-2 h-12 px-5 font-bold text-slate-600 border-slate-200"
          >
            <HiOutlineDownload className="w-5 h-5 text-slate-400" /> Export
          </Button>
        </div>
      </CardHeader>

      {/* Product Table */}
      <CardContent className="rounded-lg border border-slate-100 overflow-hidden">
        <Table>
          <TableHeader className="bg-white">
            <TableRow className="border-slate-100 hover:bg-transparent">
              <TableHead className="font-bold text-[#1044A5] py-4">
                Registration No.
              </TableHead>
              <TableHead className="font-bold text-[#1044A5]">
                Product Name
              </TableHead>
              <TableHead className="font-bold text-[#1044A5]">
                Strength
              </TableHead>
              <TableHead className="font-bold text-[#1044A5]">
                Dosage Form
              </TableHead>
              <TableHead className="font-bold text-[#1044A5]">Status</TableHead>
              <TableHead className="font-bold text-[#1044A5] text-right">
                Action
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredProducts.map((product, idx) => (
              <TableRow
                key={idx}
                className="border-slate-100 hover:bg-slate-50/50 group"
              >
                <TableCell className="text-slate-600 font-medium py-5">
                  {product.regNo}
                </TableCell>
                <TableCell className="font-bold text-[#1044A5]">
                  {product.name}
                </TableCell>
                <TableCell className="text-slate-600">
                  {product.strength}
                </TableCell>
                <TableCell className="text-slate-600">
                  {product.dosageForm}
                </TableCell>
                <TableCell>
                  <span
                    className={cn(
                      "px-3 py-1.5 rounded-lg font-bold text-xs uppercase tracking-wide",
                      product.status === "Active"
                        ? "bg-emerald-100 text-emerald-700"
                        : "bg-orange-100 text-orange-600",
                    )}
                  >
                    {product.status}
                  </span>
                </TableCell>
                <TableCell className="text-right">
                  <button type="button" className="link link-primary">
                    View
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>

      {/* Pagination Footer */}
      <CardFooter className="flex items-center justify-between pt-4">
        <div className="text-sm font-medium text-slate-600">
          Showing <span className="font-bold">1-{filteredProducts.length}</span>{" "}
          of <span className="font-bold">40</span> items
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="icon"
            className="w-10 h-10 rounded-lg border-slate-200 text-slate-600"
          >
            <HiOutlineChevronLeft className="w-5 h-5" />
          </Button>
          <Button className="w-10 h-10 rounded-lg bg-blue-50 hover:bg-blue-100 border-none text-[#1044A5] font-bold">
            1
          </Button>
          <Button
            variant="ghost"
            className="w-10 h-10 rounded-lg text-slate-600 font-medium hover:bg-slate-50"
          >
            2
          </Button>
          <Button
            variant="ghost"
            className="w-10 h-10 rounded-lg text-slate-600 font-medium hover:bg-slate-50"
          >
            3
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="w-10 h-10 rounded-lg border-slate-200 text-slate-600"
          >
            <HiOutlineChevronRight className="w-5 h-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="w-10 h-10 rounded-lg border-slate-200 text-slate-600"
          >
            <HiOutlineChevronDoubleRight className="w-5 h-5" />
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProductManagementTable;
