import { Activity, Clock, LineChart, Users, CheckCircle } from "lucide-react";
import Summarycard from "./Summarycard";
import Recentsproject from "./Recentsproject";
import KanbanBoard from "./KanbanBoard";
import { useState, ReactNode } from "react";

import CreateTask from "./CreateTaskModal";

type SummaryCard = {
  title: string;
  value: string;
  subtitle: string;
  icon: ReactNode;
  bgColor: string;
  textColor: string;
  iconBg: string;
  shadowColor: string;
};

const summaryCards: SummaryCard[] = [
  {
    title: "Total Tasks",
    value: "12",
    subtitle: "Across all projects",
    icon: <Clock className="w-5 h-5 text-blue-600" />,
    bgColor: "bg-blue-50",
    textColor: "text-blue-800",
    iconBg: "bg-blue-100",
    shadowColor: "shadow-blue-200",
  },
  {
    title: "Projects",
    value: "4",
    subtitle: "Active projects",
    icon: <LineChart className="w-5 h-5 text-purple-600" />,
    bgColor: "bg-purple-50",
    textColor: "text-purple-800",
    iconBg: "bg-purple-100",
    shadowColor: "shadow-purple-200",
  },
  {
    title: "Team Members",
    value: "4",
    subtitle: "Working on projects",
    icon: <Users className="w-5 h-5 text-green-600" />,
    bgColor: "bg-green-50",
    textColor: "text-green-800",
    iconBg: "bg-green-100",
    shadowColor: "shadow-green-200",
  },
  {
    title: "Completion Rate",
    value: "68%",
    subtitle: "Tasks completed on time",
    icon: <CheckCircle className="w-5 h-5 text-orange-600" />,
    bgColor: "bg-orange-50",
    textColor: "text-orange-800",
    iconBg: "bg-orange-100",
    shadowColor: "shadow-orange-200",
  },
];

function Dashboard() {
  const [summarycards, setSummarycards] = useState<SummaryCard[]>(summaryCards);

  return (
    <div>
      <div className="rounded-3xl p-7 shadow-2xl bg-gradient-to-br from-white to-violet-50 m-4">
        <div className="flex items-center justify-between">
          <div className="flex items-start gap-4">
            <div className="p-4 bg-violet-500 flex items-center justify-center rounded-xl shadow-md">
              <Activity className="h-5 w-5 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-violet-600">Dashboard</h1>
              <p className="text-gray-600">
                Welcome to TaskFlow Nexus. Here's an overview of your tasks and
                projects.
              </p>
            </div>
          </div>
          <CreateTask />
        </div>
      </div>

      <div className="flex justify-between items-center gap-3">
        {summarycards.map((card, index) => (
          <Summarycard key={index} {...card} />
        ))}
      </div>

      <Recentsproject />
      <KanbanBoard />
    </div>
  );
}

export default Dashboard;
