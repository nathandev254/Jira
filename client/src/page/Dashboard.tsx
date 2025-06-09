import { Activity } from "lucide-react";

function Dashboard() {
  return (
    <div>
      <div className="rounded-3xl p-7 shadow-2xl mr-2 bg-gradient-to-br from-white to-violet-50 m-4	">
        <div className="flex gap-4">
          <div className="p-4 bg-violet-500 flex items-center justify-center rounded-xl  shadow-md">
            <Activity className="h-5 w-5 text-white" />
          </div>
          <div>
            <h1 className="text-violet-500 font-bold text-2xl">Dashboard</h1>
            <p className="text-grey">
              Welcome to the Taskflow, here is the overview of your tasks
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-around">
        <div className="bg-blue-50 p-6">
          <h2 className="pb-5">Total tasks</h2>
          <p>12</p>
          <p>Across all projects</p>
        </div>
        <div className="bg-blue-50 p-5">
          <h2>Total tasks</h2>
          <p>12</p>
          <p>Across all projects</p>
        </div>
        <div className="bg-blue-50 p-5">
          <h2>Total tasks</h2>
          <p>12</p>
          <p>Across all projects</p>
        </div>
        <div className="bg-blue-50 p-5">
          <h2>Total tasks</h2>
          <p>12</p>
          <p>Across all projects</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
