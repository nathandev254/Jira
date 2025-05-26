import { Card, CardContent } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { Activity, Users, DollarSign } from "lucide-react";

const data = [
  { name: "Mon", users: 400 },
  { name: "Tue", users: 300 },
  { name: "Wed", users: 500 },
  { name: "Thu", users: 700 },
  { name: "Fri", users: 600 },
];

export default function Dashboard() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Welcome to your Dashboard</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card className="flex items-center gap-4 p-4">
          <Activity className="text-primary" />
          <CardContent>
            <h2 className="text-lg font-semibold">Active Tasks</h2>
            <p className="text-2xl font-bold">12</p>
          </CardContent>
        </Card>

        <Card className="flex items-center gap-4 p-4">
          <Users className="text-primary" />
          <CardContent>
            <h2 className="text-lg font-semibold">Team Members</h2>
            <p className="text-2xl font-bold">5</p>
          </CardContent>
        </Card>

        <Card className="flex items-center gap-4 p-4">
          <DollarSign className="text-primary" />
          <CardContent>
            <h2 className="text-lg font-semibold">Revenue</h2>
            <p className="text-2xl font-bold">$3,200</p>
          </CardContent>
        </Card>
        <Card className="flex items-center gap-4 p-4">
          <DollarSign className="text-primary" />
          <CardContent>
            <h2 className="text-lg font-semibold">Revenue</h2>
            <p className="text-2xl font-bold">$3,200</p>
          </CardContent>
        </Card>
      </div>

      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-4">User Activity</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="users" fill="#4f46e5" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </Card>
    </div>
  );
}
