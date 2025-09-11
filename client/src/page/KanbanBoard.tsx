import { useState } from "react";
import DroppableColumn from "./Droppablecolumn";

import { DndContext, DragEndEvent } from "@dnd-kit/core";

export type Task = {
  id: string;
  title: string;
  project: string;
  description: string;
  tags: string[];
  date: string;
  comments: number;
  priority: "HIGH" | "MEDIUM" | "LOW";
  assignee: string;
  status: "COMPLETED" | "PENDING" | "IN_PROGRESS" | "REVIEW";
};

export type TaskColumn = {
  id: string;
  title: string;
};

const COLUMNS: TaskColumn[] = [
  { id: "PENDING", title: "To Do" },
  { id: "IN_PROGRESS", title: "In Progress" },
  { id: "REVIEW", title: "In Review" },
  { id: "COMPLETED", title: "Done" },
];

const initialTasks: Task[] = [
  {
    id: "1",
    title: "Create social media content calendar",
    project: "Marketing Campaign",
    description: "Plan posts for Twitter, LinkedIn and Instagram",
    tags: ["Research"],
    date: "Jul 15, 2023",
    comments: 0,
    priority: "MEDIUM",
    assignee: "JS",
    status: "PENDING",
  },
  {
    id: "2",
    title: "Fix login page responsiveness",
    project: "Mobile App Development",
    description: "Ensure login page displays correctly on mobile devices",
    tags: ["Bug", "Design"],
    date: "Jun 20, 2023",
    comments: 0,
    priority: "LOW",
    assignee: "JD",
    status: "PENDING",
  },
  {
    id: "3",
    title: "Implement authentication system",
    project: "Mobile App Development",
    description: "Set up user authentication with JWT",
    tags: ["Feature"],
    date: "Jul 01, 2023",
    comments: 0,
    priority: "HIGH",
    assignee: "RJ",
    status: "IN_PROGRESS",
  },
  {
    id: "4",
    title: "Integrate Stripe payment gateway",
    project: "API Integration",
    description: "Implement payment processing with Stripe API",
    tags: ["Feature"],
    date: "Apr 25, 2023",
    comments: 1,
    priority: "HIGH",
    assignee: "RJ",
    status: "REVIEW",
  },
  {
    id: "5",
    title: "Create wireframes for homepage",
    project: "Website Redesign",
    description: "Design wireframes for the new homepage layout",
    tags: ["Design"],
    date: "May 15, 2023",
    comments: 1,
    priority: "HIGH",
    assignee: "JD",
    status: "COMPLETED",
  },
];

function KanbanBoard() {
  const [Tasks, setTasks] = useState<Task[]>(initialTasks);

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (!over) return;

    const taskId = active.id as string;
    const newStatus = over.id as Task["status"];

    setTasks((prev) =>
      prev.map((task) =>
        task.id === taskId ? { ...task, status: newStatus } : task
      )
    );
  };

  return (
    <div className="p-2 w-full">
      <h1 className="font-medium text-2xl mb-2">TaskBoard</h1>
      <div className="flex gap-6 overflow-x-auto">
        <DndContext onDragEnd={handleDragEnd}>
          {COLUMNS.map((column) => {
            const columnTasks = Tasks.filter(
              (task) => task.status === column.id
            );
            
            return (
              <DroppableColumn
                key={column.id}
                column={column}
                tasks={columnTasks}
              />
            );
          })}
        </DndContext>
      </div>
    </div>
  );
}

export default KanbanBoard;
