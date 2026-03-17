"use client";

import React, { useState } from "react";
import {
  HiOutlinePlus,
  HiOutlineSave,
  HiOutlineTrash,
  HiOutlinePencilAlt,
  HiOutlineUpload,
} from "react-icons/hi";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ButtonGroup } from "@/components/ui/button-group";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

// Type definition for a mark-up tier
type MarkupTier = {
  min: string;
  max: string;
  rate: string;
};

type SectorType =
  | "Public Wholesaler"
  | "Public Retail"
  | "Private Wholesaler"
  | "Private Retail";

export default function RegressiveMarkupTable() {
  const [activeTab, setActiveTab] = useState<SectorType>("Public Wholesaler");

  // Example data based on your screenshots
  const [data, setData] = useState<Record<SectorType, MarkupTier[]>>({
    "Public Wholesaler": [
      { min: "-", max: "18,000.00", rate: "20.0" },
      { min: "19,291.01", max: "40,000.00", rate: "17.5" },
      { min: "46,670.01", max: "80,000.00", rate: "15.0" },
    ],
    "Public Retail": [
      { min: "-", max: "21,600.00", rate: "20.0" },
      { min: "23,315.01", max: "47,000.00", rate: "17.5" },
    ],
    "Private Wholesaler": [
      { min: "-", max: "18,000.00", rate: "25.0" },
      { min: "19,320.01", max: "40,000.00", rate: "22.0" },
    ],
    "Private Retail": [
      { min: "-", max: "22,500.00", rate: "33.5" },
      { min: "24,548.01", max: "48,800.00", rate: "29.0" },
    ],
  });

  const sectors: SectorType[] = [
    "Public Wholesaler",
    "Public Retail",
    "Private Wholesaler",
    "Private Retail",
  ];

  return (
    <Card>
      <CardHeader className="mb-6">
        <h2 className="text-lg font-bold text-slate-800">
          Regressive Mark-up rates( Maximum)
        </h2>
        <p className="text-sm text-slate-500">
          Adjust the regressive mark-up for{" "}
          <span className="font-bold text-slate-900">{activeTab}</span>.
        </p>
        <ButtonGroup aria-label="Button group" className=" w-full ">
          {sectors.map((sector) => (
            <Button
              key={sector}
              onClick={() => setActiveTab(sector)}
              variant={activeTab === sector ? "default" : "outline"}
              className=""
              size={"lg"}
            >
              {sector}
            </Button>
          ))}
        </ButtonGroup>
      </CardHeader>

      {/* DATA TABLE */}
      <CardContent>
        <Table>
          <TableHeader className="bg-slate-50/50">
            <TableRow>
              <TableHead className="font-bold text-slate-900">
                Import Price Min (RWF)
              </TableHead>
              <TableHead className="font-bold text-slate-900">
                Import Price Max (RWF)
              </TableHead>
              <TableHead className="font-bold text-slate-900">
                Mark-up %
              </TableHead>
              <TableHead className="font-bold text-slate-900 text-right">
                Action
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data[activeTab].map((tier, idx) => (
              <TableRow key={idx}>
                <TableCell>
                  <Input
                    defaultValue={tier.min}
                    className="h-10 bg-white border-slate-200 text-center font-medium"
                  />
                </TableCell>
                <TableCell>
                  <Input
                    defaultValue={tier.max}
                    className="h-10 bg-white border-slate-200 text-center font-medium"
                  />
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2 border rounded-lg px-3 h-10">
                    <input
                      defaultValue={tier.rate}
                      className="w-12 text-center outline-none font-bold"
                    />
                    <span className="text-slate-400 font-bold">%</span>
                  </div>
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-amber-500 hover:text-amber-600 hover:bg-amber-50"
                    >
                      <HiOutlinePencilAlt className="w-5 h-5" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-red-400 hover:text-red-500 hover:bg-red-50"
                    >
                      <HiOutlineTrash className="w-5 h-5" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>

      {/* FOOTER ACTIONS */}
      <CardFooter className="w-full flex flex-col items-start justify-between">
        <div className="flex items-center justify-between w-full ">
          <Button preset="create">Add Tier</Button>

          <div className="flex gap-3">
            <Button preset="save">Save Changes</Button>
          </div>
        </div>
        <div className="flex justify-end mt-4 w-full">
          <Button preset="upload" size="lg">
            Send To Approval
          </Button>
        </div>
      </CardFooter>

      {/* FINAL SUBMIT BUTTON */}
    </Card>
  );
}
