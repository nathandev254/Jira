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
