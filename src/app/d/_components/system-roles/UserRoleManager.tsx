"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  HiOutlineSearch,
  HiOutlineUsers,
  HiOutlineShieldCheck,
} from "react-icons/hi";
import { IoCheckmarkOutline, IoCloseOutline } from "react-icons/io5";
import { cn } from "@/lib/utils";
import { Item, ItemContent } from "@/components/ui/item";
import { ROLE_PERMISSIONS_DATA } from "@/consts/user-example";

const UserRoleManager = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredRoles = ROLE_PERMISSIONS_DATA.filter((role) =>
    role.title.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <Card>
      {/* Search Bar */}
      <CardContent className="space-y-6">
        <div className="relative max-w-md">
          <HiOutlineSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
          <Input
            placeholder="Search by roles..."
            className="pl-10 h-12 text-base"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Roles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredRoles.map((roleData) => (
            <Item variant="outline" key={roleData.role} className="h-full">
              <ItemContent className="flex flex-col h-full space-y-4">
                {/* Header */}
                <div className="flex items-start gap-3">
                  <div
                    className={cn(
                      "p-2 rounded-lg",
                      roleData.role === "SUPER_ADMIN"
                        ? "bg-blue-50 text-blue-500"
                        : "bg-slate-50 text-slate-500",
                    )}
                  >
                    <HiOutlineShieldCheck className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg leading-tight">
                      {roleData.title}
                    </h3>
                    <p className="text-sm text-slate-500 mt-1">
                      {roleData.description}
                    </p>
                  </div>
                </div>

                {/* Stats & Status */}
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1.5 text-sm text-slate-600 font-medium">
                    <HiOutlineUsers className="w-4 h-4" />
                    {roleData.userCount} users
                  </div>
                  <Badge className="bg-emerald-50 text-emerald-600 border-emerald-100 px-3">
                    Active
                  </Badge>
                </div>

                <hr className="border-slate-100" />

                {/* Permissions Grid */}
                <div className="flex-1">
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
                    Permissions
                  </p>
                  <div className="grid grid-cols-2 gap-y-2 gap-x-4">
                    {Object.entries(roleData.permissions).map(
                      ([key, hasAccess]) => (
                        <div key={key} className="flex items-center gap-2">
                          {hasAccess ? (
                            <IoCheckmarkOutline className="text-emerald-500 w-4 h-4" />
                          ) : (
                            <IoCloseOutline className="text-slate-300 w-4 h-4" />
                          )}
                          <span
                            className={cn(
                              "text-sm",
                              hasAccess
                                ? "text-slate-700 font-medium"
                                : "text-slate-400",
                            )}
                          >
                            {key
                              .replace(/([A-Z])/g, " $1")
                              .replace(/^./, (str) => str.toUpperCase())}
                          </span>
                        </div>
                      ),
                    )}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-2 pt-2">
                  <Button
                    variant="outline"
                    className="flex-1 h-10 border-slate-200 hover:bg-slate-50"
                  >
                    Edit
                  </Button>
                  <Button
                    variant="outline"
                    className="flex-1 h-10 border-slate-200 hover:bg-slate-50"
                  >
                    Clone
                  </Button>
                </div>
              </ItemContent>
            </Item>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default UserRoleManager;
