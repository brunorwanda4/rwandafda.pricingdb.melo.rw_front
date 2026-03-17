"use client";

import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  HiOutlineSearch,
  HiOutlineDownload,
  HiOutlineFilter,
  HiOutlinePencil,
  HiOutlineTrash,
  HiOutlineChevronLeft,
  HiOutlineChevronRight,
  HiOutlineChevronDoubleRight,
} from "react-icons/hi";
import { IoCheckmarkCircle } from "react-icons/io5";
import { cn } from "@/lib/utils";

// Mock data based on your screenshot
const USERS_DATA = [
  {
    id: "FDA-2024-0145",
    name: "Dr. Jean Mutabazi",
    email: "jean.mutabazi@fda.gov.rw",
    role: "Market Analyst",
    department: "Market, Pricing and Industrial Support Analyst",
    status: "Active",
    lastLogin: "2 hours ago",
    roleColor: "bg-emerald-50 text-emerald-600 border-emerald-100",
  },
  {
    id: "FDA-2023-0089",
    name: "Dr. Marie Uwase",
    email: "marie.uwase@fda.gov.rw",
    role: "Super Admin",
    department: "IT Department",
    status: "Active",
    lastLogin: "1 day ago",
    roleColor: "bg-blue-50 text-blue-600 border-blue-100",
  },
  {
    id: "FDA-2023-0078",
    name: "Prof. Paul Mugisha",
    email: "paul.kagame@fda.gov.rw",
    role: "HLGS Viewer",
    department: "Ministry of Health",
    status: "Active",
    lastLogin: "30 minutes ago",
    roleColor: "bg-red-50 text-red-600 border-red-100",
  },
  {
    id: "FDA-2023-0056",
    name: "Dr. Emmanuel Hirwa",
    email: "emmanuel.h@fda.gov.rw",
    role: "Supply Chain",
    department: "Pharmaceutical Production and Supply Chain",
    status: "Active",
    lastLogin: "1 week ago",
    roleColor: "bg-purple-50 text-purple-600 border-purple-100",
  },
];

const UserManagementTable = () => {
  const [selectedUsers, setSelectedUsers] = useState<string[]>([]);

  const toggleSelectAll = () => {
    if (selectedUsers.length === USERS_DATA.length) {
      setSelectedUsers([]);
    } else {
      setSelectedUsers(USERS_DATA.map((u) => u.id));
    }
  };

  const toggleUser = (id: string) => {
    setSelectedUsers((prev) =>
      prev.includes(id) ? prev.filter((uid) => uid !== id) : [...prev, id],
    );
  };

  return (
    <div className="w-full space-y-4 bg-white p-6 rounded-xl border border-slate-200">
      {/* Search and Filters Header */}
      <div className="flex items-center justify-between gap-4">
        <div className="relative flex-1 max-w-md">
          <HiOutlineSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
          <Input
            placeholder="Search users by name, email, or employee ID..."
            className="pl-10 h-11 bg-slate-50 border-slate-200 focus:bg-white transition-all"
          />
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            className="gap-2 h-11 font-semibold text-slate-600"
          >
            <HiOutlineDownload className="w-5 h-5" /> Export
          </Button>
          <Button
            variant="outline"
            className="gap-2 h-11 font-semibold text-slate-600"
          >
            <HiOutlineFilter className="w-5 h-5" /> Filter
          </Button>
        </div>
      </div>

      {/* Bulk Actions Bar (Visible when users are selected) */}
      {selectedUsers.length > 0 && (
        <div className="flex items-center justify-between p-3 bg-blue-50/50 border border-blue-100 rounded-lg animate-in fade-in slide-in-from-top-1">
          <span className="text-sm font-bold text-slate-700 ml-2">
            {selectedUsers.length} user{selectedUsers.length > 1 ? "s" : ""}{" "}
            selected
          </span>
          <div className="flex items-center gap-2">
            <Button
              size="sm"
              variant="outline"
              className="bg-white border-slate-200 font-bold px-6"
            >
              Active
            </Button>
            <Button
              size="sm"
              variant="outline"
              className="bg-white border-slate-200 font-bold px-6"
            >
              Deactivate
            </Button>
            <Button
              size="sm"
              variant="outline"
              className="bg-white border-red-100 text-red-600 hover:bg-red-50 font-bold px-6"
            >
              Delete
            </Button>
          </div>
        </div>
      )}

      {/* Table Section */}
      <div className="rounded-lg border border-slate-100 overflow-hidden">
        <Table>
          <TableHeader className="bg-slate-50/50">
            <TableRow className="hover:bg-transparent border-slate-100">
              <TableHead className="w-12">
                <Checkbox
                  checked={selectedUsers.length === USERS_DATA.length}
                  onCheckedChange={toggleSelectAll}
                />
              </TableHead>
              <TableHead className="font-bold text-slate-700">User</TableHead>
              <TableHead className="font-bold text-slate-700 text-center">
                Role
              </TableHead>
              <TableHead className="font-bold text-slate-700">
                Department
              </TableHead>
              <TableHead className="font-bold text-slate-700">Status</TableHead>
              <TableHead className="font-bold text-slate-700">
                Last Login
              </TableHead>
              <TableHead className="font-bold text-slate-700 text-right">
                Actions
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {USERS_DATA.map((user) => (
              <TableRow
                key={user.id}
                className="group border-slate-100 hover:bg-slate-50/50 transition-colors"
              >
                <TableCell>
                  <Checkbox
                    checked={selectedUsers.includes(user.id)}
                    onCheckedChange={() => toggleUser(user.id)}
                  />
                </TableCell>
                <TableCell>
                  <div className="space-y-0.5">
                    <p className="font-bold text-slate-900">{user.name}</p>
                    <p className="text-xs text-slate-500">{user.email}</p>
                    <p className="text-[10px] font-mono text-slate-400">
                      ID: {user.id}
                    </p>
                  </div>
                </TableCell>
                <TableCell className="text-center">
                  <Badge
                    variant="outline"
                    className={cn(
                      "font-medium px-3 py-1 rounded-full border shadow-sm",
                      user.roleColor,
                    )}
                  >
                    {user.role}
                  </Badge>
                </TableCell>
                <TableCell className="max-w-20">
                  <p
                    title={user.department}
                    className="text-sm font-semibold text-slate-700 leading-tight truncate"
                  >
                    {user.department}
                  </p>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-1.5 text-emerald-600">
                    <IoCheckmarkCircle className="w-5 h-5" />
                    <span className="text-sm font-bold">{user.status}</span>
                  </div>
                </TableCell>
                <TableCell className="text-sm text-slate-500 font-medium">
                  {user.lastLogin}
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-1 transition-opacity">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-orange-400 hover:text-orange-500 hover:bg-orange-50"
                    >
                      <HiOutlinePencil className="w-5 h-5" />
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
      </div>

      {/* Pagination Footer */}
      <div className="flex items-center justify-between pt-2">
        <p className="text-sm font-medium text-slate-500">
          Showing 1-4 of 43 items
        </p>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="icon"
            className="w-9 h-9 border-slate-200"
          >
            <HiOutlineChevronLeft className="w-5 h-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="w-9 h-9 bg-blue-50 border-blue-200 text-blue-600 font-bold"
          >
            1
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="w-9 h-9 text-slate-600"
          >
            2
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="w-9 h-9 text-slate-600"
          >
            3
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="w-9 h-9 border-slate-200"
          >
            <HiOutlineChevronRight className="w-5 h-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="w-9 h-9 border-slate-200"
          >
            <HiOutlineChevronDoubleRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UserManagementTable;
