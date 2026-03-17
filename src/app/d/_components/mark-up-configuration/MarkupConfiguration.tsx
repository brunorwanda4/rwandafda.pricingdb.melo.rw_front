"use client";

import React, { useState } from "react";
import {
  HiOutlinePlus,
  HiOutlineSave,
  HiOutlineChevronDown,
} from "react-icons/hi";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { FiSave } from "react-icons/fi";
import UpdateMarkupDialog from "./UpdateMarkupDialog";

export default function MarkupConfiguration() {
  // State for the mark-up values
  const [markup, setMarkup] = useState({
    publicWholesale: "20.00",
    privateWholesale: "25.00",
    publicRetail: "20.00",
    privateRetail: "33.50",
    threshold: "18,000",
  });

  const handleSave = () => {
    console.log("Saving Mark-up Configuration:", markup);
    // Add your API call logic here
  };

  return (
    <div className=" space-y-8">
      {/* 1. TOP BAR: REASON SELECTION */}
      <div className="flex flex-row items-center justify-start sm:justify-end gap-4">
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <label className="text-sm font-bold text-slate-700 whitespace-nowrap">
            Reason for Update:
          </label>
          <Select defaultValue="initial">
            <SelectTrigger className="w-[180px] h-11 bg-white border-slate-200 font-medium">
              <SelectValue placeholder="Select reason" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="initial">Initial Mark-up</SelectItem>
              <SelectItem value="inflation">Inflation Adjustment</SelectItem>
              <SelectItem value="policy">Policy Update</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <UpdateMarkupDialog />
      </div>

      {/* 2. MAIN CONFIGURATION CARD */}
      <Card>
        {/* Header with Threshold */}
        <CardHeader className="flex flex-row items-center justify-between gap-4">
          <h2 className="text-xl font-bold">General Mark-up (Maximum)</h2>

          <div className="flex items-center gap-3">
            <label className="text-sm font-medium text-slate-500 italic">
              Price Threshold:
            </label>
            <div className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg">
              <input
                className="w-20 font-bold text-slate-900 outline-none text-right"
                value={markup.threshold}
                onChange={(e) =>
                  setMarkup({ ...markup, threshold: e.target.value })
                }
              />
              <span className="text-slate-400 font-bold text-sm">RWF</span>
            </div>
          </div>
        </CardHeader>

        {/* PRICING GRID */}
        <CardContent className="grid grid-cols-3 gap-y-8 items-end">
          {/* Labels Column */}
          <div className="space-y-10 pb-3">
            <p className="text-slate-500 font-medium italic">
              Edit general mark-up
            </p>
            <p className="text-slate-900 font-bold">Wholesale mark-up :</p>
            <p className="text-slate-900 font-bold">Retail mark-up :</p>
          </div>

          {/* PUBLIC COLUMN */}
          <div className="space-y-8">
            <p className="text-center font-bold  text-lg">Public</p>
            <div className="flex justify-center">
              <PercentageInput
                value={markup.publicWholesale}
                onChange={(v) => setMarkup({ ...markup, publicWholesale: v })}
              />
            </div>
            <div className="flex justify-center">
              <PercentageInput
                value={markup.publicRetail}
                onChange={(v) => setMarkup({ ...markup, publicRetail: v })}
              />
            </div>
          </div>

          {/* PRIVATE COLUMN */}
          <div className="space-y-8">
            <p className="text-center font-bold  text-lg">Private</p>
            <div className="flex justify-center">
              <PercentageInput
                value={markup.privateWholesale}
                onChange={(v) => setMarkup({ ...markup, privateWholesale: v })}
              />
            </div>
            <div className="flex justify-center">
              <PercentageInput
                value={markup.privateRetail}
                onChange={(v) => setMarkup({ ...markup, privateRetail: v })}
              />
            </div>
          </div>
        </CardContent>

        {/* SAVE BUTTON */}
        <CardFooter className="flex justify-end pt-4">
          <Button onClick={handleSave} variant="default" size="lg">
            <FiSave className="w-5 h-5" />
            Save Changes
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}

/**
 * Custom Percentage Input Component
 * Designed to look exactly like the screenshot
 */
function PercentageInput({
  value,
  onChange,
}: {
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="flex items-center gap-2 px-3 py-2.5 bg-white border border-slate-200 rounded-lg focus-within:ring-2 focus-within:ring-[#00897B]/10 transition-all">
      <input
        type="text"
        className="w-14 font-bold text-slate-900 outline-none text-right"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <span className="text-slate-400 font-bold text-sm">%</span>
    </div>
  );
}
