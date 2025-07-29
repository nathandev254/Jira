import Tasksboard from "./Tasksboard";

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

const COLUMNS: TaskColumn[] = [
  { id: "TODO", title: "To Do" },
  { id: "IN_PROGRESS", title: "In Progress" },
  { id: "DONE", title: "Done" },
];

const tasks: Task[] = [
  {
    id: "1",
    title: "Create social media content calendar",
    project: "Marketing Campaign",
    description: "Plan posts for Twitter, LinkedIn and Instagram",
    tags: ["Research"],
    date: "Jul 15, 2023",
    comments: 0,
    priority: "Medium",
    assignee: "JS",
    status: "TODO",
  },
  {
    id: "2",
    title: "Fix login page responsiveness",
    project: "Mobile App Development",
    description: "Ensure login page displays correctly on mobile devices",
    tags: ["Bug", "Design"],
    date: "Jun 20, 2023",
    comments: 0,
    priority: "Low",
    assignee: "JD",
    status: "TODO",
  },
  {
    id: "3",
    title: "Implement authentication system",
    project: "Mobile App Development",
    description: "Set up user authentication with JWT",
    tags: ["Feature"],
    date: "Jul 01, 2023",
    comments: 0,
    priority: "High",
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
    priority: "High",
    assignee: "RJ",
    status: "IN_REVIEW",
  },
  {
    id: "5",
    title: "Create wireframes for homepage",
    project: "Website Redesign",
    description: "Design wireframes for the new homepage layout",
    tags: ["Design"],
    date: "May 15, 2023",
    comments: 1,
    priority: "High",
    assignee: "JD",
    status: "DONE",
  },
];

function KanbanBoard() {
  return (
    <div className="p-2 w-full">
      <h1 className="font-medium text-2xl mb-2">TaskBoard</h1>
      <div className="flex gap-6 overflow-x-hidden">
        {COLUMNS.map((column, index) => {
          const columnTasks = tasks.filter((task) => task.status === column.id);

          return (
            <div className="w-full" key={index}>
              <div className="flex justify-between items-center mb-3">
                <h2>{column.title}</h2>
                <span className="text-sm text-gray-800 h-5 w-5 rounded-full bg-gray-300 flex justify-center items-center">
                  {columnTasks.length}
                </span>
              </div>
              <div className="bg-gray-200 p-5 rounded-md flex flex-col h-full">
                <Tasksboard tasks={columnTasks} title={column.title} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default KanbanBoard
