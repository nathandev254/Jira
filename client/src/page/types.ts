export const initialData: Record<string, TaskColumn> = {
  todo: {
    title: "To Do",
    tasks: [
      {
        id: "task-1",
        title: "Design Login Page",
        project: "UI Revamp",
        description: "Create a modern login page for the new app.",
        tags: ["design", "frontend"],
        date: "2025-07-10",
        comments: 2,
        priority: "High",
        assignee: "Jane Doe",
      },
    ],
  },
  inProgress: {
    title: "In Progress",
    tasks: [
      {
        id: "task-2",
        title: "API Integration",
        project: "Backend Sync",
        description: "Integrate auth and data endpoints.",
        tags: ["backend", "API"],
        date: "2025-07-12",
        comments: 4,
        priority: "Medium",
        assignee: "John Smith",
      },
    ],
  },
  done: {
    title: "Done",
    tasks: [],
  },
};
