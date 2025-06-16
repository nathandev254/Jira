import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const projectData = [
  {
    title: "Website Redesign",
    description: "Redesign the company website with modern UI/UX principles",
    progress: 67,
    completed: "2 of 3 tasks completed",
    priority: "1 high priority",
    color: "bg-blue-500",
  },
  {
    title: "Mobile App Development",
    description: "Develop a cross-platform mobile application",
    progress: 0,
    completed: "0 of 3 tasks completed",
    priority: "1 high priority",
    color: "bg-purple-600",
  },
  {
    title: "Marketing Campaign",
    description: "Q3 marketing campaign for product launch",
    progress: 33,
    completed: "1 of 3 tasks completed",
    priority: "2 high priority",
    color: "bg-pink-600",
  },
  {
    title: "API Integration",
    description: "Integrate with third-party payment providers",
    progress: 0,
    completed: "0 of 3 tasks completed",
    priority: "2 high priority",
    color: "bg-sky-400",
  },
];



function Recentsproject() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">Recent Projects</h2>
      <div className="flex gap-3 p-3">
        {projectData.map((project, index) => (
          <Card key={index} className="w-full">
            <CardContent>
              <div className="flex justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className={`h-3 w-3 rounded-full ${project.color}`}></span>
                  <h2>{project.title}</h2>
                </div>
                <span>{project.progress}</span>
              </div>
              <Progress
                value={project.progress}
                className="h-2 bg-gray-200 mb-3 indicatorClassName={`transition-all duration-700 ${project.color}`}"
              />
              <p className="text-muted-foreground text-sm">{project.description}</p>
              <div className="flex justify-between text-sm mt-2 text-muted-foreground">
                <div className="">{project.completed}</div>
                <div>{project.priority}</div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Recentsproject;


import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const projectData = [
  {
    title: "Website Redesign",
    description: "Redesign the company website with modern UI/UX principles",
    progress: 67,
    completed: "2 of 3 tasks completed",
    priority: "1 high priority",
    color: "bg-blue-500",
  },
  {
    title: "Mobile App Development",
    description: "Develop a cross-platform mobile application",
    progress: 0,
    completed: "0 of 3 tasks completed",
    priority: "1 high priority",
    color: "bg-purple-600",
  },
  {
    title: "Marketing Campaign",
    description: "Q3 marketing campaign for product launch",
    progress: 33,
    completed: "1 of 3 tasks completed",
    priority: "2 high priority",
    color: "bg-pink-600",
  },
  {
    title: "API Integration",
    description: "Integrate with third-party payment providers",
    progress: 0,
    completed: "0 of 3 tasks completed",
    priority: "2 high priority",
    color: "bg-sky-400",
  },
];



function Recentsproject() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">Recent Projects</h2>
      <div className="flex gap-3 p-3">
        {projectData.map((project, index) => (
          <Card key={index} className="w-full">
            <CardContent>
              <div className="flex justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className={`h-3 w-3 rounded-full ${project.color}`}></span>
                  <h2>{project.title}</h2>
                </div>
                <span>{project.progress}</span>
              </div>
              <Progress
                value={project.progress}
                className="h-2 bg-gray-200 mb-3 indicatorClassName={`transition-all duration-700 ${project.color}`}"
              />
              <p className="text-muted-foreground text-sm">{project.description}</p>
              <div className="flex justify-between text-sm mt-2 text-muted-foreground">
                <div className="">{project.completed}</div>
                <div>{project.priority}</div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Recentsproject;

