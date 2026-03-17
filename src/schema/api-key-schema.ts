import * as z from "zod";

export const apiKeySchema = z.object({
  name: z
    .string()
    .min(3, { message: "Key name must be at least 3 characters long" })
    .max(50, { message: "Key name is too long" }),
  environment: z.enum(["Production", "Staging", "Development"], {
    errorMap: () => ({ message: "Please select a valid environment" }),
  }),
});

export type ApiKeyType = z.infer<typeof apiKeySchema>;
