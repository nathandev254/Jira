import { Badge } from "@/components/ui/badge";
import { Calendar, MessageCircle } from "lucide-react";

const taskBoard = [
  {
    title: "To Do",
    tasks: [
      {
        title: "Create social media content calendar",
        project: "Marketing Campaign",
        description: "Plan posts for Twitter, LinkedIn and Instagram",
        tags: ["Research"],
        date: "Jul 15, 2023",
        comments: 0,
        priority: "Medium",
        assignee: "JS",
      },
      {
        title: "Fix login page responsiveness",
        project: "Mobile App Development",
        description: "Ensure login page displays correctly on mobile devices",
        tags: ["Bug", "Design"],
        date: "Jun 20, 2023",
        comments: 0,
        priority: "Low",
        assignee: "JD",
      },
    ],
  },
  {
    title: "In Progress",
    tasks: [
      {
        title: "Implement authentication system",
        project: "Mobile App Development",
        description: "Set up user authentication with JWT",
        tags: ["Feature"],
        date: "Jul 01, 2023",
        comments: 0,
        priority: "High",
        assignee: "RJ",
      },
    ],
  },
  {
    title: "In Review",
    tasks: [
      {
        title: "Integrate Stripe payment gateway",
        project: "API Integration",
        description: "Implement payment processing with Stripe API",
        tags: ["Feature"],
        date: "Apr 25, 2023",
        comments: 1,
        priority: "High",
        assignee: "RJ",
      },
    ],
  },
  {
    title: "Completed",
    tasks: [
      {
        title: "Create wireframes for homepage",
        project: "Website Redesign",
        description: "Design wireframes for the new homepage layout",
        tags: ["Design"],
        date: "May 15, 2023",
        comments: 1,
        priority: "High",
        assignee: "JD",
      },
    ],
  },
];

function KanbanBoard() {
  return (
    <div className=" p-2 w-full">
      <h1 className="font-medium text-2xl mb-2">TaskBoard</h1>
      <div className="flex gap-6 overflow-x-hidden  ">
        {taskBoard.map((column, index) => (
          <div className="w-full" key={index}>
            <div className="flex justify-between items-center mb-3">
              <h2>{column.title}</h2>
              <span className="text-sm text-gray-800 h-5 w-5 rounded-full bg-gray-300 flex justify-center items-center">
                {column.tasks.length}
              </span>
            </div>
            <div className="bg-gray-200 p-5 rounded-md flex flex-col gap-5">
              {column.tasks.map((task, index) => (
                <div key={index} className="bg-white p-4 rounded-md">
                  <div className="flex justify-between mb-2">
                    <Badge variant="destructive">{column.title}</Badge>
                    <span className="text-sm">{task.priority}</span>
                    <span className="h-5 w-5 rounded-full bg-gray-300 flex items-center justify-center">
                      {task.assignee}
                    </span>
                  </div>
                  <div>
                    <h1 className="text-md font-bold mb-1">{task.title}</h1>
                    <span className="h-3 w-3 rounded-full bg-red-600"></span>
                    <span className="text-sm text-gray-400">
                      {task.project}
                    </span>
                    <p className="text-gray-400 mt-1">{task.description}</p>
                  </div>
                  <div className="p-2 flex gap-2">
                    {task.tags.map((tag, idx) => (
                      <span key={idx}>{tag}</span>
                    ))}
                  </div>
                  <div className="flex">
                    <div>
                      <Calendar/>
                      {task.date}
                    </div>
                    <div>
                      Messa
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default KanbanBoard;
