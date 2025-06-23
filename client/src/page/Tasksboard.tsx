import { Badge } from "@/components/ui/badge";
import { Task } from "./types";
import { Calendar, MessageCircle } from "lucide-react";

type TasksboardProps = {
  tasks: Task[];
  title: string;
};

function Tasksboard({ tasks, title }: TasksboardProps) {
  return (
    <div>
      {tasks.map((task, index) => (
        <div key={index} className="bg-white p-4 rounded-md">
          <div className="flex justify-between mb-2">
            <Badge variant="destructive">{title}</Badge>
            <span className="text-sm">{task.priority}</span>
            <span className="h-5 w-5 rounded-full bg-gray-300 flex items-center justify-center">
              {task.assignee}
            </span>
          </div>
          <div>
            <h1 className="text-md font-bold mb-1">{task.title}</h1>
            <span className="h-3 w-3 rounded-full bg-red-600"></span>
            <span className="text-sm text-gray-400">{task.project}</span>
            <p className="text-gray-400 mt-1">{task.description}</p>
          </div>
          <div className="p-2 flex gap-2">
            {task.tags.map((tag, idx) => (
              <span key={idx}>{tag}</span>
            ))}
          </div>
          <div className="flex justify-between text-sm text-gray-500">
            <div className="flex">
              <Calendar />
              <span>{task.date}</span>
            </div>
            <div className="flex">
              <MessageCircle />
              <span>{task.comments}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Tasksboard;
