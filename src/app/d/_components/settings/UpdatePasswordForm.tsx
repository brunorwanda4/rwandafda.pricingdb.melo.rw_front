"use client";

import type React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  HiOutlineEye,
  HiOutlineEyeOff,
  HiOutlineLockClosed,
} from "react-icons/hi";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const UpdatePasswordForm = () => {
  const [showPasswords, setShowPasswords] = useState({
    current: false,
    new: false,
    confirm: false,
  });

  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const toggleVisibility = (field: keyof typeof showPasswords) => {
    setShowPasswords((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  const handleUpdatePassword = (e: React.FormEvent) => {
    e.preventDefault();
    // Verification logic (e.g., check if new matches confirm)
    console.log("Updating password...", passwordData);
  };

  return (
    <Card>
      {/* Header Section */}
      <CardHeader className=" border-b border-slate-100 bg-slate-50/30">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-slate-200/50 rounded-lg">
            <HiOutlineLockClosed className="w-5 h-5 text-slate-600" />
          </div>
          <h2 className="text-lg font-bold text-slate-900">Change Password</h2>
        </div>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleUpdatePassword} className=" space-y-6">
          {/* Current Password */}
          <div className="space-y-2">
            <Label htmlFor="currentPassword">Current Password</Label>
            <div className="relative">
              <Input
                id="currentPassword"
                type={showPasswords.current ? "text" : "password"}
                placeholder="Enter current password"
                className="h-12 bg-white border-slate-200 pr-12 focus:ring-2 focus:ring-blue-500/20"
                value={passwordData.currentPassword}
                onChange={(e) =>
                  setPasswordData({
                    ...passwordData,
                    currentPassword: e.target.value,
                  })
                }
              />
              <button
                type="button"
                onClick={() => toggleVisibility("current")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
              >
                {showPasswords.current ? (
                  <HiOutlineEyeOff className="w-5 h-5" />
                ) : (
                  <HiOutlineEye className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>

          {/* New Password */}
          <div className="space-y-2">
            <Label htmlFor="newPassword">New Password</Label>
            <div className="relative">
              <Input
                id="newPassword"
                type={showPasswords.new ? "text" : "password"}
                placeholder="Enter new password"
                className="h-12 bg-white border-slate-200 pr-12 focus:ring-2 focus:ring-blue-500/20"
                value={passwordData.newPassword}
                onChange={(e) =>
                  setPasswordData({
                    ...passwordData,
                    newPassword: e.target.value,
                  })
                }
              />
              <button
                type="button"
                onClick={() => toggleVisibility("new")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
              >
                {showPasswords.new ? (
                  <HiOutlineEyeOff className="w-5 h-5" />
                ) : (
                  <HiOutlineEye className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>

          {/* Confirm New Password */}
          <div className="space-y-2">
            <Label htmlFor="confirmPassword">Confirm New Password</Label>
            <div className="relative">
              <Input
                id="confirmPassword"
                type={showPasswords.confirm ? "text" : "password"}
                placeholder="Confirm new password"
                className="h-12 bg-white border-slate-200 pr-12 focus:ring-2 focus:ring-blue-500/20"
                value={passwordData.confirmPassword}
                onChange={(e) =>
                  setPasswordData({
                    ...passwordData,
                    confirmPassword: e.target.value,
                  })
                }
              />
              <button
                type="button"
                onClick={() => toggleVisibility("confirm")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
              >
                {showPasswords.confirm ? (
                  <HiOutlineEyeOff className="w-5 h-5" />
                ) : (
                  <HiOutlineEye className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>

          {/* Action Button */}
          <div className="pt-4">
            <Button type="submit" size={"lg"} className="w-full">
              Update Password
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default UpdatePasswordForm;
