"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { HiOutlinePlus } from "react-icons/hi";
import { z } from "zod";
import FormError from "@/components/common/form/form-message";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import AuthLoadingIcon from "@/app/(auth)/_components/auth-loading-icon";

// ── Schema ──────────────────────────────────────────────────────────────────
const updateMarkupSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().min(1, "Description is required"),
  document: z
    .custom<FileList>()
    .optional()
    .refine(
      (files) => !files || files.length === 0 || files[0].size <= 5_000_000,
      "File must be smaller than 5MB",
    ),
});

type UpdateMarkupType = z.infer<typeof updateMarkupSchema>;

// ── Component ────────────────────────────────────────────────────────────────
export default function UpdateMarkupDialog() {
  const [isOpen, setIsOpen] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string>("");

  const form = useForm<UpdateMarkupType>({
    resolver: zodResolver(updateMarkupSchema),
    defaultValues: {
      title: "",
      description: "",
    },
  });

  const isPending = form.formState.isSubmitting;

  const onSubmit = async (data: UpdateMarkupType) => {
    setError(null);
    try {
      console.log("Submitted:", data);
      // TODO: call your API here
      form.reset();
      setFileName("");
      setIsOpen(false);
    } catch {
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <Dialog
      open={isOpen}
      onOpenChange={(open) => {
        setIsOpen(open);
        if (!open) {
          form.reset();
          setFileName("");
          setError(null);
        }
      }}
    >
      <DialogTrigger asChild>
        <Button variant="default" size="lg" preset="create">
          Add New Reason
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Reason of updating mark-up rate</DialogTitle>
        </DialogHeader>

        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FieldGroup>
            {/* TITLE */}
            <Controller
              name="title"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid} className="w-full">
                  <FieldLabel htmlFor="markup-title">Title</FieldLabel>
                  <Input
                    {...field}
                    id="markup-title"
                    aria-invalid={fieldState.invalid}
                    placeholder="Enter Title"
                    disabled={isPending}
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            {/* DESCRIPTION */}
            <Controller
              name="description"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid} className="w-full">
                  <FieldLabel htmlFor="markup-description">
                    Description
                  </FieldLabel>
                  <Textarea
                    {...field}
                    id="markup-description"
                    aria-invalid={fieldState.invalid}
                    placeholder="Write description"
                    className="min-h-[150px] resize-none"
                    disabled={isPending}
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            {/* FILE UPLOAD */}
            <Controller
              name="document"
              control={form.control}
              render={({ field: { onChange, ref }, fieldState }) => (
                <Field data-invalid={fieldState.invalid} className="w-full">
                  <FieldLabel>Upload support document</FieldLabel>
                  <div className="flex items-center gap-0 border border-slate-200 rounded-lg overflow-hidden h-12">
                    <label className="flex items-center gap-2 px-4 h-full bg-slate-200 text-slate-700 cursor-pointer hover:bg-slate-300 transition-colors border-r border-slate-300">
                      <HiOutlinePlus className="w-5 h-5" />
                      <span className="font-bold text-sm">Upload</span>
                      <input
                        ref={ref}
                        type="file"
                        className="hidden"
                        disabled={isPending}
                        onChange={(e) => {
                          onChange(e.target.files);
                          setFileName(e.target.files?.[0]?.name ?? "");
                        }}
                      />
                    </label>
                    <span className="flex-1 px-4 text-slate-400 text-sm italic truncate">
                      {fileName || "No file chosen"}
                    </span>
                  </div>
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
          </FieldGroup>

          {error && <FormError message={error} />}

          <div className="flex justify-end mt-6">
            <Button type="submit" size="lg" disabled={isPending}>
              {isPending ? <AuthLoadingIcon /> : <span>Submit</span>}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
