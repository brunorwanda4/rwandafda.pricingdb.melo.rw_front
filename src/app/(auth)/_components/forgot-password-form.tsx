"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useTransition } from "react";
import { Controller, useForm } from "react-hook-form";
import { AiOutlineMail } from "react-icons/ai";
import FormError from "@/components/common/form/form-message";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  ForgotPasswordType,
  forgotPasswordSchema,
} from "../_schema/forgot-password-schema";

const ForgotPasswordForm = () => {
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const form = useForm<ForgotPasswordType>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (data: ForgotPasswordType) => {
    setError(null);
    setSuccess(null);

    startTransition(() => {
      // TODO: call your backend API to request a password reset link
      // For now, we just show a success message.
      setTimeout(() => {
        setSuccess(
          "If an account exists for that email, you will receive instructions on how to reset your password."
        );
      }, 500);
    });
  };

  return (
    <form
      id="forgot-password-form"
      className="w-full max-w-sm"
      onSubmit={form.handleSubmit(onSubmit)}
    >
      <FieldGroup>
        <Controller
          name="email"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid} className="w-full">
              <FieldLabel htmlFor="forgot-password-email">Email</FieldLabel>
              <div className="relative">
                <div className="absolute right-3 top-3">
                  <AiOutlineMail size={20} className="text-neutral" />
                </div>
                <Input
                  {...field}
                  id="forgot-password-email"
                  aria-invalid={fieldState.invalid}
                  placeholder="Enter your email"
                  disabled={isPending}
                />
              </div>
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
      </FieldGroup>

      {error && <FormError message={error} />}
      {success && (
        <div className="bg-success/20 text-success p-4 rounded-md my-2">
          {success}
        </div>
      )}

      <Button
        type="submit"
        disabled={form.formState.isSubmitting || isPending}
        className="mt-6 w-full"
        size="lg"
      >
        {form.formState.isSubmitting || isPending ? (
          "Sending..."
        ) : (
          "Send reset link"
        )}
      </Button>
    </form>
  );
};

export default ForgotPasswordForm;
