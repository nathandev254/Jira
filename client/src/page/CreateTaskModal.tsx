"use client";

import {
  DialogTrigger,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Plus } from "lucide-react";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const taskSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().optional(),
  priority: z.enum(["HIGH", "MEDIUM", "LOW"], {
    errorMap: () => ({ message: "Select a priority" }),
  }),
  status: z.enum(["COMPLETED", "PENDING", "IN_PROGRESS", "REVIEW"], {
    errorMap: () => ({ message: "Select a status" }),
  }),
  dueDate: z.string().optional(),
  assignee: z.string().optional(),
});

type TaskFormData = z.infer<typeof taskSchema>;

const Addtask = async (data: TaskFormData) => {
  const res = await axios.post("/task", data);
  return res.data;
};

function CreateTaskModal() {
  const QueryClient = useQueryClient();
  
  const {
    register,
    handleSubmit,
    setValue,
    trigger,
    formState: { errors },
  } = useForm<TaskFormData>({
    resolver: zodResolver(taskSchema),
    defaultValues: {
      title: "",
      description: "",
      dueDate: "",
      priority: "MEDIUM",
      assignee: "",
      status: "PENDING",
    },
  });

  const mutation = useMutation({
    mutationFn: Addtask,
    onSuccess: () => {
      QueryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
    onError: (error: any) => {
      alert(error.response?.data?.message || "Something went wrong");
    },
  });

  const onSubmit = async (data: TaskFormData) => {
    await mutation.mutateAsync(data);
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-purple-500 hover:bg-purple-600 text-white font-semibold px-4 py-2 rounded-lg shadow-md flex items-center gap-2">
          <Plus size={16} />
          Create Task
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-2xl">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <DialogHeader>
            <DialogTitle>Create New Task</DialogTitle>
            <DialogDescription>
              Fill in the details below to create a new task.
            </DialogDescription>
          </DialogHeader>

          
          <div className="space-y-2">
            <Label htmlFor="title">Title *</Label>
            <Input
              id="title"
              placeholder="Enter task title..."
              {...register("title")}
            />
            {errors.title && (
              <p className="text-sm text-red-500">{errors.title.message}</p>
            )}
          </div>

          
          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              placeholder="Enter task description..."
              {...register("description")}
            />
          </div>

          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Priority</Label>
              <Select
                onValueChange={(value) => {
                  setValue("priority", value as TaskFormData["priority"]);
                  trigger("priority");
                }}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select priority" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="HIGH">High Priority</SelectItem>
                  <SelectItem value="MEDIUM">Medium Priority</SelectItem>
                  <SelectItem value="LOW">Low Priority</SelectItem>
                </SelectContent>
              </Select>
              {errors.priority && (
                <p className="text-sm text-red-500">
                  {errors.priority.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label>Status</Label>
              <Select
                onValueChange={(value) => {
                  setValue("status", value as TaskFormData["status"]);
                  trigger("status");
                }}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="COMPLETED">Completed</SelectItem>
                  <SelectItem value="PENDING">Pending</SelectItem>
                  <SelectItem value="IN_PROGRESS">In Progress</SelectItem>
                  <SelectItem value="REVIEW">Review</SelectItem>
                </SelectContent>
              </Select>
              {errors.status && (
                <p className="text-sm text-red-500">{errors.status.message}</p>
              )}
            </div>
          </div>

          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="dueDate">Due Date</Label>
              <Input type="date" id="dueDate" {...register("dueDate")} />
            </div>
            <div className="space-y-2">
              <Label>Assignee</Label>
              <Select onValueChange={(value) => setValue("assignee", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select assignee" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="unassigned">Unassigned</SelectItem>
                  <SelectItem value="alice">Alice</SelectItem>
                  <SelectItem value="bob">Bob</SelectItem>
                  <SelectItem value="charlie">Charlie</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          
          <DialogFooter className="mt-4">
            <DialogClose asChild>
              <Button variant="outline" type="button">
                Cancel
              </Button>
            </DialogClose>
            <Button
              disabled={mutation.isPending}
              className="bg-purple-500 hover:bg-purple-600"
              type="submit"
            >
              {mutation.isPending ? "Loading..." : "Create Task"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default CreateTaskModal;
