import { z } from "zod";

// Register schema
export const registerSchema = z.object({
  username: z.string().min(3, "Username must be at least 3 characters").max(50, "Username must be less than 50 characters"),
  email: z.string().email({ message: "Please enter a valid email address" }),
  password: z.string().min(6, "Password must be at least 6 characters").max(100, "Password must be less than 100 characters"),
  firstname: z.string().min(2, "First name must be at least 2 characters").max(50, "First name must be less than 50 characters").optional(),
  lastname: z.string().min(2, "Last name must be at least 2 characters").max(50, "Last name must be less than 50 characters").optional(),
});

// Login schema
export const loginSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
  password: z.string().min(1, "Password is required"),
});

// Type inference
export type RegisterInput = z.infer<typeof registerSchema>;
export type LoginInput = z.infer<typeof loginSchema>;
