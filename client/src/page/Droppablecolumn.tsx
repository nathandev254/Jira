import { useDroppable } from "@dnd-kit/core";
import Taskscard from "./TaskCard";

export type Task = {
  id: string;
  title: string;
  project: string;
  description: string;
  tags: string[];
  date: string;
  comments: number;
  priority: "Low" | "Medium" | "High";
  assignee: string;
  status: "TODO" | "IN_PROGRESS" | "DONE" | "IN_REVIEW";
};

export type TaskColumn = {
  id: string;
  title: string;
};

function DroppableColumn({
  column,
  tasks,
}: {
  column: TaskColumn;
  tasks: Task[];
}) {
  const { setNodeRef } = useDroppable({ id: column.id });

  return (
    <div className="w-full" ref={setNodeRef}>
      <div className="flex justify-between items-center mb-3">
        <h2>{column.title}</h2>
        <span className="text-sm text-gray-800 h-5 w-5 rounded-full bg-gray-300 flex justify-center items-center">
          {tasks.length}
        </span>
      </div>
      <div className="bg-gray-200 p-5 rounded-md flex flex-col h-full">
        {tasks.map((task) => (
          <Taskscard key={task.id} task={task} title={column.title} />
        ))}
      </div>
    </div>
  );
}

export default DroppableColumn;
