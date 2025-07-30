import { Badge } from "@/components/ui/badge";
import { Task } from "./types";
import { Calendar, MessageCircle } from "lucide-react";
import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";

type TasksboardProps = {
  task: Task;
  title: string;
};

function Tasksboard({ task, title }: TasksboardProps) {
  const { attributes, listeners, setNodeRef, transform, isDragging } =
    useDraggable({
      id: task.id,
    });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition: isDragging ? "none" : "transform 200ms ease",
    opacity: isDragging ? 0.6 : 1,
    cursor: "grab",
    zIndex: isDragging ? 1000 : "auto",
    width: "100%",
    maxWidth: "320px",
  };

  return (
    <div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      style={style}
      className="bg-white p-4 rounded-md m-3 shadow"
    >
      <div className="flex justify-between mb-2">
        <Badge variant="destructive">{title}</Badge>
        <span className="text-sm">{task.priority}</span>
        <span className="h-5 w-5 rounded-full bg-gray-300 flex items-center justify-center">
          {task.assignee}
        </span>
      </div>
      <div>
        <h1 className="text-md font-bold mb-1">{task.title}</h1>
        <span className="h-3 w-3 rounded-full bg-red-600 inline-block mr-2"></span>
        <span className="text-sm text-gray-400">{task.project}</span>
        <p className="text-gray-400 mt-1">{task.description}</p>
      </div>
      <div className="p-2 flex gap-2">
        {task.tags.map((tag, idx) => (
          <span key={idx}>{tag}</span>
        ))}
      </div>
      <div className="flex justify-between text-sm text-gray-500">
        <div className="flex gap-1 items-center">
          <Calendar size={16} />
          <span>{task.date}</span>
        </div>
        <div className="flex gap-1 items-center">
          <MessageCircle size={16} />
          <span>{task.comments}</span>
        </div>
      </div>
    </div>
  );
}

export default Tasksboard;
