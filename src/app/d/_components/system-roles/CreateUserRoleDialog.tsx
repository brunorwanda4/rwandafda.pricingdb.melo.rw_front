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
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { HiOutlinePlus, HiOutlineShieldCheck } from "react-icons/hi";
import { cn } from "@/lib/utils";

// Permission keys based on your role management UI
const PERMISSION_FIELDS = [
  { id: "userManagement", label: "User Management" },
  { id: "roleManagement", label: "Role Management" },
  { id: "systemSettings", label: "System Settings" },
  { id: "dataImportExport", label: "Data Import/ Export" },
  { id: "auditLogAccess", label: "Audit Log Access" },
  { id: "apiManagement", label: "API Management" },
];

const CreateUserRoleDialog = () => {
  const [open, setOpen] = useState(false);
  const [permissions, setPermissions] = useState<Record<string, boolean>>({
    userManagement: false,
    roleManagement: false,
    systemSettings: false,
    dataImportExport: false,
    auditLogAccess: false,
    apiManagement: false,
  });

  const togglePermission = (id: string) => {
    setPermissions((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleCreate = () => {
    // Logic to save the new role with selected permissions
    console.log("Creating Role with:", permissions);
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button preset="create">Create New Role</Button>
      </DialogTrigger>
      <DialogContent className="">
        <DialogHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-blue-50 rounded-lg">
              <HiOutlineShieldCheck className="w-6 h-6 text-blue-500" />
            </div>
            <div>
              <DialogTitle className="text-xl">Create User Role</DialogTitle>
              <DialogDescription>
                Define a new administrative or staff role and set permissions.
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>

        <div className="grid gap-6 py-4">
          {/* Role Basic Info */}
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Role Name</Label>
              <Input
                id="name"
                placeholder="e.g. Compliance Officer"

              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                placeholder="Briefly describe the responsibilities of this role..."
                className="resize-none"
              />
            </div>
          </div>

          <hr className="border-slate-100" />

          {/* Permissions Grid */}
          <div className="space-y-4">
            <Label className="text-xs font-bold uppercase tracking-wider text-slate-500">
              System Permissions
            </Label>
            <div className="grid grid-cols-2 gap-4">
              {PERMISSION_FIELDS.map((field) => (
                <div
                  key={field.id}
                  className={cn(
                    "flex items-center justify-between p-3 rounded-lg border transition-colors",
                    permissions[field.id]
                      ? "bg-blue-50/50 border-blue-100"
                      : "bg-slate-50 border-slate-100",
                  )}
                >
                  <Label
                    htmlFor={field.id}
                    className="text-sm font-medium cursor-pointer"
                  >
                    {field.label}
                  </Label>
                  <Switch
                    id={field.id}
                    checked={permissions[field.id]}
                    onCheckedChange={() => togglePermission(field.id)}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <DialogFooter className="gap-2 sm:gap-0">
          <Button variant="ghost" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button onClick={() => handleCreate()}>Save Role</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CreateUserRoleDialog;
