"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import {
  HiOutlineKey,
  HiOutlineSearch,
  HiOutlineTrash,
  HiOutlineRefresh,
  HiOutlineEye,
  HiOutlineEyeOff,
  HiOutlineClipboardCopy,
} from "react-icons/hi";
import { IoCheckmarkCircle, IoInformationCircleOutline } from "react-icons/io5";
import { cn } from "@/lib/utils";
import { Item, ItemContent } from "@/components/ui/item";

const ENV_COLORS = {
  Production: "bg-red-50 text-red-600 border-red-100",
  Staging: "bg-amber-50 text-amber-600 border-amber-100",
  Development: "bg-blue-50 text-blue-600 border-blue-100",
};

const API_KEYS = [
  {
    id: 1,
    name: "OpenAI GPT-4 Integration",
    env: "Production" as const,
    status: "Active",
    key: "sk-proj-AbCdEfGhIjKlMnOpQrStUvWxYz1234567890AbCdEfGhIjKl",
    created: "Jan 22, 2026",
    lastUsed: "2 hours ago",
    calls: "56,665",
    rateLimit: "1,000/min",
  },
  {
    id: 2,
    name: "Stripe Payments API",
    env: "Staging" as const,
    status: "Active",
    key: "sk_test_4eC39HqLyjWDarjtT1zdp7dc0123456789abcdefghijklmnop",
    created: "Feb 15, 2026",
    lastUsed: "2 days ago",
    calls: "5,875",
    rateLimit: "100/sec",
  },
  {
    id: 3,
    name: "Twilio SMS Gateway",
    env: "Production" as const,
    status: "Active",
    key: "SKa1b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4e5f6a1",
    created: "Mar 1, 2026",
    lastUsed: "5 hours ago",
    calls: "12,340",
    rateLimit: "500/min",
  },
  {
    id: 4,
    name: "AWS S3 Storage Access",
    env: "Production" as const,
    status: "Active",
    key: "AKIAIOSFODNN7EXAMPLE1234567890abcdefghijklmnopqrst",
    created: "Nov 10, 2025",
    lastUsed: "1 hour ago",
    calls: "98,120",
    rateLimit: "3,500/sec",
  },
  {
    id: 5,
    name: "SendGrid Email Service",
    env: "Staging" as const,
    status: "Active",
    key: "SG.1234abcd-EFGHijklmnop.QRSTUVWXYZ0123456789-abcdefghijklmnopqrst",
    created: "Dec 5, 2025",
    lastUsed: "3 days ago",
    calls: "3,210",
    rateLimit: "600/min",
  },
  {
    id: 6,
    name: "Legacy CRM Connector",
    env: "Development" as const,
    status: "Inactive",
    key: "crm_dev_pk_1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJ",
    created: "Oct 15, 2024",
    lastUsed: "5 months ago",
    calls: "1,665",
    rateLimit: "200/hour",
  },
];

type ApiKey = (typeof API_KEYS)[number];

function maskKey(key: string) {
  return key.slice(0, 10) + "•".repeat(24) + key.slice(-6);
}

const ApiKeyManager = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [keys, setKeys] = useState(API_KEYS);
  const [revealed, setRevealed] = useState<Record<number, boolean>>({});
  const [copied, setCopied] = useState<number | null>(null);

  // Dialog state
  const [deleteTarget, setDeleteTarget] = useState<ApiKey | null>(null);
  const [rotateTarget, setRotateTarget] = useState<ApiKey | null>(null);

  const filteredKeys = keys.filter(
    (item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.env.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const toggleReveal = (id: number) => {
    setRevealed((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const copyKey = (id: number, key: string) => {
    navigator.clipboard.writeText(key);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  const confirmDelete = () => {
    if (deleteTarget) {
      setKeys((prev) => prev.filter((k) => k.id !== deleteTarget.id));
      setDeleteTarget(null);
    }
  };

  const confirmRotate = () => {
    // Rotation logic goes here (e.g., API call to regenerate the key)
    setRotateTarget(null);
  };

  return (
    <>
      <Card>
        <CardContent className="space-y-3">
          {/* Search */}
          <div className="relative mb-4 max-w-md">
            <HiOutlineSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
            <Input
              placeholder="Search API keys by name or environment..."
              className="pl-10 h-12 text-base"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Key Cards */}
          {filteredKeys.map((item) => {
            const isRevealed = revealed[item.id];
            const isCopied = copied === item.id;

            return (
              <Item variant="outline" key={item.id}>
                <ItemContent className="space-y-4">
                  {/* Header */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 flex-wrap">
                      <div className="p-2 bg-blue-50 rounded-lg">
                        <HiOutlineKey className="w-6 h-6 text-blue-500" />
                      </div>
                      <h3 className="font-bold text-lg">{item.name}</h3>
                      <Badge
                        variant="outline"
                        className={cn("px-3 py-0.5", ENV_COLORS[item.env])}
                      >
                        {item.env}
                      </Badge>
                      <div
                        className={cn(
                          "flex items-center gap-1 text-sm font-medium",
                          item.status === "Active"
                            ? "text-emerald-600"
                            : "text-slate-400",
                        )}
                      >
                        {item.status === "Active" ? (
                          <IoCheckmarkCircle />
                        ) : (
                          <IoInformationCircleOutline />
                        )}
                        {item.status}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="text-slate-400 cursor-pointer"
                        onClick={() => setRotateTarget(item)}
                        title="Rotate key"
                      >
                        <HiOutlineRefresh className="w-5 h-5" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="text-red-400 cursor-pointer"
                        onClick={() => setDeleteTarget(item)}
                        title="Delete key"
                      >
                        <HiOutlineTrash className="w-5 h-5" />
                      </Button>
                    </div>
                  </div>

                  {/* Key Preview */}
                  <div className="bg-slate-50 p-3 rounded-lg flex items-center justify-between">
                    <code className="text-sm font-mono text-slate-600 break-all flex-1">
                      {isRevealed ? item.key : maskKey(item.key)}
                    </code>
                    <div className="flex gap-1 ml-2 flex-shrink-0">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 cursor-pointer"
                        onClick={() => toggleReveal(item.id)}
                        title={isRevealed ? "Hide key" : "Reveal key"}
                      >
                        {isRevealed ? (
                          <HiOutlineEyeOff className="w-4 h-4" />
                        ) : (
                          <HiOutlineEye className="w-4 h-4" />
                        )}
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className={cn(
                          "h-8 w-8 cursor-pointer",
                          isCopied ? "text-success" : "",
                        )}
                        onClick={() => copyKey(item.id, item.key)}
                        title="Copy key"
                      >
                        <HiOutlineClipboardCopy className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-4 gap-4 pt-2">
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">
                        Created
                      </p>
                      <p className="text-sm font-bold">{item.created}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">
                        Last used
                      </p>
                      <p className="text-sm font-bold">{item.lastUsed}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">
                        API Calls
                      </p>
                      <p className="text-sm font-bold">{item.calls}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">
                        Rate limit
                      </p>
                      <p className="text-sm font-bold">{item.rateLimit}</p>
                    </div>
                  </div>
                </ItemContent>
              </Item>
            );
          })}

          {filteredKeys.length === 0 && (
            <p className="text-center py-10 text-slate-500">
              No API keys found.
            </p>
          )}
        </CardContent>
      </Card>

      {/* Delete Confirmation Dialog */}
      <AlertDialog
        open={!!deleteTarget}
        onOpenChange={(open) => !open && setDeleteTarget(null)}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete API Key</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to delete{" "}
              <span className="font-semibold text-foreground">
                {deleteTarget?.name}
              </span>
              ? This action cannot be undone and any services using this key
              will immediately lose access.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={confirmDelete}
              className="bg-red-600 hover:bg-red-700 text-white"
            >
              Delete Key
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/* Rotate Confirmation Dialog */}
      <AlertDialog
        open={!!rotateTarget}
        onOpenChange={(open) => !open && setRotateTarget(null)}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Rotate API Key</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to rotate{" "}
              <span className="font-semibold text-foreground">
                {rotateTarget?.name}
              </span>
              ? The current key will be invalidated immediately and a new key
              will be generated. Make sure to update all services using this
              key.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={confirmRotate}>
              Rotate Key
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default ApiKeyManager;
