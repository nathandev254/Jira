import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import CreateTaskModal from "./CreateTaskModal";
import { Task } from "./types";

function Tasks() {
  const queryClient = useQueryClient();
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);

  // Fetch tasks from backend
  const { data, isLoading, isError } = useQuery<{ tasks: Task[] }>({
    queryKey: ["tasks"],
    queryFn: async () => {
      const res = await axios.get("/task");
      return res.data;
    }
  });

  // Delete task mutation
  const deleteMutation = useMutation({
    mutationFn: async (id: string) => {
      await axios.delete(`/task/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
  });

  return (
    <div className="max-w-3xl mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Tasks</h1>
        <CreateTaskModal />
      </div>
      {isLoading && <div>Loading tasks...</div>}
      {isError && <div>Failed to load tasks.</div>}
      <div className="space-y-4">
        {data?.tasks?.length === 0 && <div>No tasks found.</div>}
        {data?.tasks?.map((task) => (
          <Card key={task.id} className="relative">
            <CardHeader>
              <CardTitle>{task.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-gray-700 mb-2">{task.description}</div>
              <div className="flex gap-4 text-sm text-gray-500">
                <span>Priority: {task.priority}</span>
                <span>Status: {task.status}</span>
                <span>Assignee: {task.assignee}</span>
              </div>
            </CardContent>
            <CardFooter className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setSelectedTask(task)}
              >
                Edit
              </Button>
              <Button
                variant="destructive"
                size="sm"
                onClick={() => deleteMutation.mutate(task.id)}
                disabled={deleteMutation.isPending}
              >
                {deleteMutation.isPending ? "Deleting..." : "Delete"}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      {/* Placeholder for update modal */}
      {/* {selectedTask && <UpdateTaskModal task={selectedTask} onClose={() => setSelectedTask(null)} />} */}
    </div>
  );
}

export default Tasks;
