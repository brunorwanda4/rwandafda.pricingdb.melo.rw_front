"use client";

import { useState } from "react";
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
  HiOutlineCheck,
} from "react-icons/hi";
import { IoCheckmarkCircle, IoInformationCircleOutline } from "react-icons/io5";
import { cn } from "@/lib/utils";
import { Item, ItemContent } from "@/components/ui/item";

// ─── Types ────────────────────────────────────────────────────────────────────

type Environment = "Production" | "Staging" | "Development";
type Status = "Active" | "Inactive";

interface ApiKey {
  id: number;
  name: string;
  env: Environment;
  status: Status;
  key: string;
  created: string;
  lastUsed: string;
  calls: string;
  rateLimit: string;
}

// ─── Constants ────────────────────────────────────────────────────────────────

const ENV_STYLES: Record<Environment, string> = {
  Production: "bg-red-50 text-red-600 border-red-100",
  Staging: "bg-amber-50 text-amber-600 border-amber-100",
  Development: "bg-blue-50 text-blue-600 border-blue-100",
};

const INITIAL_KEYS: ApiKey[] = [
  {
    id: 1,
    name: "OpenAI GPT-4 Integration",
    env: "Production",
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
    env: "Staging",
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
    env: "Production",
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
    env: "Production",
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
    env: "Staging",
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
    env: "Development",
    status: "Inactive",
    key: "crm_dev_pk_1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJ",
    created: "Oct 15, 2024",
    lastUsed: "5 months ago",
    calls: "1,665",
    rateLimit: "200/hour",
  },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────

function maskKey(key: string): string {
  return key.slice(0, 10) + "•".repeat(24) + key.slice(-6);
}

// ─── Sub-components ───────────────────────────────────────────────────────────

interface KeyCardProps {
  item: ApiKey;
  isRevealed: boolean;
  isCopied: boolean;
  onToggleReveal: (id: number) => void;
  onCopy: (id: number, key: string) => void;
  onDelete: (item: ApiKey) => void;
  onRotate: (item: ApiKey) => void;
}

function KeyCard({
  item,
  isRevealed,
  isCopied,
  onToggleReveal,
  onCopy,
  onDelete,
  onRotate,
}: KeyCardProps) {
  const isActive = item.status === "Active";

  return (
    <Item variant="outline">
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
              className={cn("px-3 py-0.5", ENV_STYLES[item.env])}
            >
              {item.env}
            </Badge>
            <div
              className={cn(
                "flex items-center gap-1 text-sm font-medium",
                isActive ? "text-emerald-600" : "text-slate-400"
              )}
            >
              {isActive ? (
                <IoCheckmarkCircle />
              ) : (
                <IoInformationCircleOutline />
              )}
              {item.status}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="text-slate-400"
              title="Rotate key"
              onClick={() => onRotate(item)}
            >
              <HiOutlineRefresh className="w-5 h-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-red-400"
              title="Delete key"
              onClick={() => onDelete(item)}
            >
              <HiOutlineTrash className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Key preview */}
        <div className="bg-slate-50 p-3 rounded-lg flex items-center justify-between gap-2">
          <code className="text-sm font-mono text-slate-600 break-all flex-1">
            {isRevealed ? item.key : maskKey(item.key)}
          </code>
          <div className="flex gap-1 flex-shrink-0">
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8"
              title={isRevealed ? "Hide key" : "Reveal key"}
              onClick={() => onToggleReveal(item.id)}
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
              className={cn("h-8 w-8", isCopied && "text-emerald-600")}
              title={isCopied ? "Copied!" : "Copy key"}
              onClick={() => onCopy(item.id, item.key)}
            >
              {isCopied ? (
                <HiOutlineCheck className="w-4 h-4" />
              ) : (
                <HiOutlineClipboardCopy className="w-4 h-4" />
              )}
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-4 gap-4 pt-2">
          {[
            { label: "Created", value: item.created },
            { label: "Last used", value: item.lastUsed },
            { label: "API calls", value: item.calls },
            { label: "Rate limit", value: item.rateLimit },
          ].map(({ label, value }) => (
            <div key={label}>
              <p className="text-xs text-muted-foreground mb-1">{label}</p>
              <p className="text-sm font-bold">{value}</p>
            </div>
          ))}
        </div>
      </ItemContent>
    </Item>
  );
}

interface ConfirmDialogProps {
  open: boolean;
  title: string;
  description: React.ReactNode;
  confirmLabel: string;
  confirmClassName?: string;
  onConfirm: () => void;
  onCancel: () => void;
}

function ConfirmDialog({
  open,
  title,
  description,
  confirmLabel,
  confirmClassName,
  onConfirm,
  onCancel,
}: ConfirmDialogProps) {
  return (
    <AlertDialog open={open} onOpenChange={(open) => !open && onCancel()}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription asChild>
            <span>{description}</span>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={onCancel}>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={onConfirm} className={confirmClassName}>
            {confirmLabel}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function ApiKeyManager() {
  const [keys, setKeys] = useState<ApiKey[]>(INITIAL_KEYS);
  const [searchQuery, setSearchQuery] = useState("");
  const [revealed, setRevealed] = useState<Record<number, boolean>>({});
  const [copiedId, setCopiedId] = useState<number | null>(null);
  const [deleteTarget, setDeleteTarget] = useState<ApiKey | null>(null);
  const [rotateTarget, setRotateTarget] = useState<ApiKey | null>(null);

  const filteredKeys = keys.filter(
    (k) =>
      k.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      k.env.toLowerCase().includes(searchQuery.toLowerCase())
  );

  function handleToggleReveal(id: number) {
    setRevealed((prev) => ({ ...prev, [id]: !prev[id] }));
  }

  function handleCopy(id: number, key: string) {
    navigator.clipboard.writeText(key).catch(console.error);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  }

  function handleConfirmDelete() {
    if (!deleteTarget) return;
    setKeys((prev) => prev.filter((k) => k.id !== deleteTarget.id));
    setDeleteTarget(null);
  }

  function handleConfirmRotate() {
    // TODO: call your API to regenerate the key, then update state
    setRotateTarget(null);
  }

  return (
    <>
      <Card>
        <CardContent className="space-y-3">
          {/* Search */}
          <div className="relative mb-4 max-w-md">
            <HiOutlineSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
            <Input
              placeholder="Search by name or environment…"
              className="pl-10 h-12 text-base"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Key list */}
          {filteredKeys.length > 0 ? (
            filteredKeys.map((item) => (
              <KeyCard
                key={item.id}
                item={item}
                isRevealed={!!revealed[item.id]}
                isCopied={copiedId === item.id}
                onToggleReveal={handleToggleReveal}
                onCopy={handleCopy}
                onDelete={setDeleteTarget}
                onRotate={setRotateTarget}
              />
            ))
          ) : (
            <p className="text-center py-10 text-slate-500">
              No API keys found.
            </p>
          )}
        </CardContent>
      </Card>

      {/* Delete dialog */}
      <ConfirmDialog
        open={!!deleteTarget}
        title="Delete API key"
        description={
          <>
            Are you sure you want to delete{" "}
            <span className="font-semibold text-foreground">
              {deleteTarget?.name}
            </span>
            ? This action cannot be undone — any services using this key will
            immediately lose access.
          </>
        }
        confirmLabel="Delete key"
        confirmClassName="bg-red-600 hover:bg-red-700 text-white"
        onConfirm={handleConfirmDelete}
        onCancel={() => setDeleteTarget(null)}
      />

      {/* Rotate dialog */}
      <ConfirmDialog
        open={!!rotateTarget}
        title="Rotate API key"
        description={
          <>
            Are you sure you want to rotate{" "}
            <span className="font-semibold text-foreground">
              {rotateTarget?.name}
            </span>
            ? The current key will be invalidated immediately and a new key will
            be generated. Make sure to update all services before proceeding.
          </>
        }
        confirmLabel="Rotate key"
        onConfirm={handleConfirmRotate}
        onCancel={() => setRotateTarget(null)}
      />
    </>
  );
}
