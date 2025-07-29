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
