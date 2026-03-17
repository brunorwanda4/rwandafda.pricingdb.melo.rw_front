"use client";

import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
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
import { Card, CardContent, CardHeader } from "@/components/ui/card";

// Mock data based on your "Product Landing Cost" screenshot
const PRODUCTS_DATA = [
  {
    id: "2141",
    name: "Amoxicillin",
    strength: "500 mg",
    dosageForm: "Capsules",
    origin: "China",
    importer: "PharmaLife Ltd",
    landingCost: "10,000 RWF",
  },
  {
    id: "1931",
    name: "Amoxicillin",
    strength: "500 mg",
    dosageForm: "Capsules",
    origin: "Kenya",
    importer: "Pha Distributors",
    landingCost: "10,500 Rf",
  },
  {
    id: "2216",
    name: "Ibuprofen",
    strength: "200 mg",
    dosageForm: "Tablets",
    origin: "India",
    importer: "HealthPlus Ltd",
    landingCost: "8,000 RWF",
  },
  {
    id: "2777",
    name: "Piroxicam BP",
    strength: "20mg",
    dosageForm: "Capsules",
    origin: "Kenya",
    importer: "MediChem Ltd",
    landingCost: "6200 RWF",
  },
];

const ProductLandingCostTable = () => {
  return (
    <Card>
      {/* Search and Filters Header */}
      <CardHeader className="flex items-center justify-between gap-4">
        <div className="relative flex-1 max-w-xl">
          <HiOutlineSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
          <Input
            placeholder="Search product by name, GTIN or Registration number"
            className="pl-10 h-12 bg-slate-50 border-slate-200 focus:bg-white transition-all text-sm"
          />
        </div>
        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            className="gap-2 h-12 px-5 font-bold text-slate-600 border-slate-200"
          >
            <HiOutlineFilter className="w-5 h-5 text-slate-400" />
            Filter
            <span className="ml-1 border-l pl-2 border-slate-200 text-slate-400 font-normal">
              <svg
                width="10"
                height="6"
                viewBox="0 0 10 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
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
          <Button
            variant="outline"
            className="gap-2 h-12 px-5 font-bold text-slate-600 border-slate-200"
          >
            <HiOutlineDownload className="w-5 h-5 text-slate-400" /> Export
          </Button>
        </div>
      </CardHeader>

      {/* Landing Cost Table */}
      <CardContent>
        <Table>
          <TableHeader className="bg-white">
            <TableRow className="border-slate-100 hover:bg-transparent">
              <TableHead className="font-bold text-slate-800 py-4">
                ID
              </TableHead>
              <TableHead className="font-bold text-slate-800">
                Product Name
              </TableHead>
              <TableHead className="font-bold text-slate-800">
                Dosage Form
              </TableHead>
              <TableHead className="font-bold text-slate-800">Origin</TableHead>
              <TableHead className="font-bold text-slate-800">
                Importer
              </TableHead>
              <TableHead className="font-bold text-slate-800">
                Landing cost
              </TableHead>
              <TableHead className="font-bold text-slate-800 text-right">
                Action
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {PRODUCTS_DATA.map((product) => (
              <TableRow
                key={product.id}
                className="border-slate-100 hover:bg-slate-50/50 group"
              >
                <TableCell className="text-slate-600 py-5">
                  {product.id}
                </TableCell>
                <TableCell>
                  <div className="space-y-0.5">
                    <p className="font-bold text-[#1044A5]">{product.name}</p>
                    <p className="text-sm text-slate-500">{product.strength}</p>
                  </div>
                </TableCell>
                <TableCell className="text-slate-600">
                  {product.dosageForm}
                </TableCell>
                <TableCell className="text-slate-600">
                  {product.origin}
                </TableCell>
                <TableCell className="text-slate-600">
                  {product.importer}
                </TableCell>
                <TableCell className="font-medium text-slate-700">
                  {product.landingCost}
                </TableCell>
                <TableCell className="text-right">
                  <button className="text-[#00897B] font-bold hover:underline">
                    View
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        {/* Pagination Footer */}
        <div className="flex items-center justify-between pt-4">
          <div className="text-sm font-medium text-slate-600">
            Showing <span className="font-bold">1-4</span> of{" "}
            <span className="font-bold">40</span> items
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
              className="w-10 h-10 rounded-lg text-slate-600 font-medium"
            >
              2
            </Button>
            <Button
              variant="ghost"
              className="w-10 h-10 rounded-lg text-slate-600 font-medium"
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
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductLandingCostTable;
