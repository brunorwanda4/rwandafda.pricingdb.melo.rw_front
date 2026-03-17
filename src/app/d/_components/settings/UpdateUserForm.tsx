"use client";

import type React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { HiOutlineUpload, HiOutlineSave, HiOutlineX } from "react-icons/hi";
import { cn } from "@/lib/utils";
import { FiSave } from "react-icons/fi";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { BsCardChecklist } from "react-icons/bs";

const UpdateUserForm = ({ initialData }: { initialData?: any }) => {
  // Form State populated with existing user data
  const [formData, setFormData] = useState({
    fullName: initialData?.name || "Dr. Jean Mutabazi",
    employeeId: initialData?.id || "FDA-2024-0001",
    email: initialData?.email || "jean@fda.gov.rw",
    phoneNumber: "+250 788 888 888",
    department: initialData?.department || "IT Support",
    role: initialData?.role || "System Admin",
  });

  const handleUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Updating User Data:", formData);
    // Add your update API call logic here
  };

  return (
    <Card>
      {/* Profile Header Section */}
      <CardHeader className=" border-b border-slate-100 bg-slate-50/30">
        <div className="flex items-center gap-6">
          <div className="relative group">
            <div className="w-24 h-24 rounded-full border-2 border-dashed border-slate-300 flex flex-col items-center justify-center bg-white transition-colors group-hover:border-blue-400">
              <HiOutlineUpload className="w-6 h-6 text-slate-400 group-hover:text-blue-500" />
              <span className="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-tight">
                Upload
              </span>
            </div>
            <input
              type="file"
              className="absolute inset-0 opacity-0 cursor-pointer"
            />
          </div>

          <div className="space-y-2">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                {formData.fullName}
              </h2>
              <p className="text-slate-500 font-medium">{formData.role}</p>
            </div>
            <div className="flex gap-2">
              <Badge className="bg-emerald-100 text-emerald-700 border-emerald-200 hover:bg-emerald-100">
                Active
              </Badge>
              <Badge className="bg-blue-50 text-blue-600 border-blue-100 hover:bg-blue-50">
                Verified
              </Badge>
            </div>
          </div>
        </div>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleUpdate} >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
            {/* Row 1 */}
            <div className="space-y-2">
              <Label
                htmlFor="fullName"

              >
                Full Name
              </Label>
              <Input
                id="fullName"
                value={formData.fullName}
                onChange={(e) =>
                  setFormData({ ...formData, fullName: e.target.value })
                }
                className="h-12 bg-white border-slate-200 focus:ring-2 focus:ring-blue-500/20 transition-all"
              />
            </div>

            <div className="space-y-2">
              <Label
                htmlFor="employeeId"

              >
                Employee ID
              </Label>
              <Input
                id="employeeId"
                value={formData.employeeId}
                onChange={(e) =>
                  setFormData({ ...formData, employeeId: e.target.value })
                }
                className="h-12 bg-white border-slate-200 focus:ring-2 focus:ring-blue-500/20 transition-all"
              />
            </div>

            {/* Row 2 */}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-bold text-slate-700">
                Official Email
              </Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="h-12 bg-white border-slate-200 focus:ring-2 focus:ring-blue-500/20 transition-all"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone" className="text-sm font-bold text-slate-700">
                Phone Number
              </Label>
              <Input
                id="phone"
                value={formData.phoneNumber}
                onChange={(e) =>
                  setFormData({ ...formData, phoneNumber: e.target.value })
                }
                className="h-12 bg-white border-slate-200 focus:ring-2 focus:ring-blue-500/20 transition-all"
              />
            </div>

            {/* Row 3 */}
            <div className="space-y-2">
              <Label
                htmlFor="department"

              >
                Department
              </Label>
              <Input
                id="department"
                value={formData.department}
                onChange={(e) =>
                  setFormData({ ...formData, department: e.target.value })
                }
                className="h-12 bg-white border-slate-200 focus:ring-2 focus:ring-blue-500/20 transition-all"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="role" className="text-sm font-bold text-slate-700">
                Role
              </Label>
              <Input
                id="role"
                value={formData.role}
                onChange={(e) =>
                  setFormData({ ...formData, role: e.target.value })
                }
                className="h-12 bg-white border-slate-200 focus:ring-2 focus:ring-blue-500/20 transition-all"
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-10 flex justify-end items-center gap-3">
            <Button type="button" variant="outline" size="lg">
              Cancel
            </Button>
            <Button type="submit" size="lg">
              <FiSave className="w-5 h-5" />
              Save Changes
            </Button>
          </div>
        </form>
    </CardContent>
    </Card>
  );
};

export default UpdateUserForm;
