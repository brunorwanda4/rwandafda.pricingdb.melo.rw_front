"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { HiOutlineUserAdd, HiOutlineIdentification } from "react-icons/hi";
import { userRoles } from "@/types/user";
import { formatUserRole } from "@/helpers/format-text";

const CreateUserDialog = () => {
  const [open, setOpen] = useState(false);

  // Form State based on the User Table requirements
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    employeeId: "",
    role: "",
    department: "",
  });

  const handleCreate = () => {
    // Logic to save the new user
    console.log("Creating User:", formData);
    setOpen(false);
    // Reset form
    setFormData({
      name: "",
      email: "",
      employeeId: "",
      role: "",
      department: "",
    });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button preset="create">Add New User</Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-xl">Create New User</DialogTitle>
          <DialogDescription>
            Register a new staff member and assign their initial role and
            department.
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-5 py-4">
          {/* Full Name */}
          <div className="grid gap-2">
            <Label htmlFor="name">Full Name</Label>
            <Input
              id="name"
              placeholder="e.g. Dr. Jean Mutabazi"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            {/* Email Address */}
            <div className="grid gap-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                placeholder="name@fda.gov.rw"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>
            {/* Employee ID */}
            <div className="grid gap-2">
              <Label htmlFor="employeeId">Employee ID</Label>
              <Input
                id="employeeId"
                placeholder="FDA-2026-XXXX"
                value={formData.employeeId}
                onChange={(e) =>
                  setFormData({ ...formData, employeeId: e.target.value })
                }
              />
            </div>
          </div>

          {/* Department Selection */}
          <div className="grid gap-2">
            <Label htmlFor="department">Department</Label>
            <Select
              onValueChange={(value) =>
                setFormData({ ...formData, department: value })
              }
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select department" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="IT Department">IT Department</SelectItem>
                <SelectItem value="Market Analyst">
                  Market, Pricing and Industrial Support
                </SelectItem>
                <SelectItem value="Pharmacy">
                  Pharmaceutical Production & Supply Chain
                </SelectItem>
                <SelectItem value="Ministry">Ministry of Health</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Role Selection */}
          <div className="grid gap-2">
            <Label htmlFor="role">System Role</Label>
            <Select
              onValueChange={(value) =>
                setFormData({ ...formData, role: value })
              }
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Assign a role" />
              </SelectTrigger>
              <SelectContent>
                {userRoles.map((role) => (
                  <SelectItem key={role} value={role} className="">
                    {formatUserRole(role)}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <DialogFooter className="gap-2 sm:gap-0 border-t pt-4 mt-2">
          <Button variant="ghost" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button
            onClick={handleCreate}
            disabled={!formData.name || !formData.email}
          >
            Create User
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CreateUserDialog;
