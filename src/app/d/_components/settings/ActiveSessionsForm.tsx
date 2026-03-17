"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { HiOutlineDesktopComputer, HiOutlineLogout } from "react-icons/hi";
import { IoCheckmarkCircle } from "react-icons/io5";
import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Item, ItemContent } from "@/components/ui/item";

// Mock data representing the active sessions seen in your screenshots
const SESSIONS = [
  {
    id: 1,
    device: "Chrome on Windows",
    location: "Kigali, Rwanda",
    isCurrent: true,
    lastActive: "Active now",
  },
  {
    id: 2,
    device: "Safari on iPhone 15",
    location: "Kigali, Rwanda",
    isCurrent: false,
    lastActive: "2 hours ago",
  },
  {
    id: 3,
    device: "Firefox on MacOS",
    location: "Butare, Rwanda",
    isCurrent: false,
    lastActive: "Yesterday at 4:30 PM",
  },
];

const ActiveSessionsForm = () => {
  const handleLogoutAll = () => {
    console.log("Logging out from all other devices...");
  };

  const handleLogoutSingle = (id: number) => {
    console.log(`Logging out from session ${id}`);
  };

  return (
    <Card>
      {/* Header Section */}
      <CardHeader className=" flex justify-between items-center">
        <div>
          <CardTitle>Active Sessions</CardTitle>
          <CardDescription>
            Manage and sign out of your active sessions on different devices.
          </CardDescription>
        </div>
        <Button variant="outline" onClick={handleLogoutAll}>
          Sign Out All Other Devices
        </Button>
      </CardHeader>

      {/* Sessions List */}
      <CardContent>
        <div className=" gap-2 flex flex-col">
          {SESSIONS.map((session) => (
            <Item key={session.id} variant={"outline"}>
              <ItemContent className="flex flex-row items-center gap-4">
                <div
                  className={cn(
                    "p-3 rounded-xl border",
                    session.isCurrent
                      ? "bg-primary/20 border-primary/30"
                      : "bg-slate-50 border-slate-100",
                  )}
                >
                  {session.isCurrent ? (
                    <IoCheckmarkCircle className="w-6 h-6 text-primary" />
                  ) : (
                    <HiOutlineDesktopComputer className="w-6 h-6 text-slate-400" />
                  )}
                </div>

                <div className="space-y-0.5">
                  <div className="flex items-center gap-2">
                    <p className="font-bold text-slate-900">{session.device}</p>
                    {session.isCurrent && (
                      <span className="text-[10px] bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full font-black uppercase tracking-tighter">
                        Current Session
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-slate-500 font-medium">
                    {session.location} • {session.lastActive}
                  </p>
                </div>
              </ItemContent>

              {!session.isCurrent ? (
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-error hover:text-error"
                  onClick={() => handleLogoutSingle(session.id)}
                >
                  <HiOutlineLogout className="w-4 h-4" />
                  Sign Out
                </Button>
              ) : (
                <span className="text-xs font-bold text-emerald-600 px-3">
                  Active Now
                </span>
              )}
            </Item>
          ))}
        </div>
      </CardContent>

      {/* Security Note Footer */}
      <div className="p-6 bg-slate-50/50 border-t border-slate-100 mt-2">
        <p className="text-xs text-slate-400 leading-relaxed font-medium">
          If you see a device or location you don't recognize, we recommend
          <span className="text-blue-600 cursor-pointer hover:underline mx-1">
            changing your password
          </span>
          immediately to secure your account.
        </p>
      </div>
    </Card>
  );
};

export default ActiveSessionsForm;
