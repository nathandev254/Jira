// types.ts
export type Task = {
  title: string;
  project: string;
  description: string;
  tags: string[];
  date: string;
  comments: number;
  priority: "Low" | "Medium" | "High";
  assignee: string;
};

export type TaskColumnType = {
  title: string;
  tasks: Task[];
};
