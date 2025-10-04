import { z } from "zod";

// Create Task schema - EXACT copy from frontend CreateTaskModal.tsx
export const createTaskSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().optional(),
  priority: z.enum(["HIGH", "MEDIUM", "LOW"], {
    message: "Select a priority"
  }),
  status: z.enum(["COMPLETED", "PENDING", "IN_PROGRESS", "REVIEW"], {
    message: "Select a status"
  }),
  dueDate: z.string().optional(),
  assignee: z.string().optional(),
});

// Update Task schema - for editing existing tasks
export const updateTaskSchema = z.object({
  title: z.string().min(1, "Title is required").optional(),
  description: z.string().optional(),
  priority: z.enum(["HIGH", "MEDIUM", "LOW"]).optional(),
  status: z.enum(["COMPLETED", "PENDING", "IN_PROGRESS", "REVIEW"]).optional(),
  dueDate: z.string().optional(),
  assignee: z.string().optional() ,
});

// Type inference
export type CreateTaskInput = z.infer<typeof createTaskSchema>;
export type UpdateTaskInput = z.infer<typeof updateTaskSchema>;
