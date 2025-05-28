import { SidebarTrigger } from "@/components/ui/sidebar";
import { Input } from "@/components/ui/input";
import { Search, Bell } from "lucide-react";

function Navbar() {
  return (
    <header className="flex items-center justify-between h-20 border-b px-5 bg-white w-full ">
      <div className="flex items-center gap-4">
        <SidebarTrigger />
        <div>
          <span className="text-gray-900">Task</span>
          <span className="text-violet-500">flow</span>
        </div>
      </div>
      <div className=" relative flex items-center w-full max-w-md outline-none ">
        <Search className="absolute text-muted-foreground h-4 w-4 top-1/2 -translate-y-1/2 left-3 " />
        <Input
          type="search"
          placeholder="Search for tasks, projects"
          className="pl-9 bg-muted rounded-full"
        ></Input>
      </div>
      <div className="flex items-center justify-between gap-2">
        <div className="hover:bg-blue-100 p-3 rounded-2xl ">
          <Bell></Bell>
        </div>
        <div className="relative h-10 w-10 rounded-full bg-blue-700 text-white flex items-center justify-center text-lg after:content-[''] after:absolute after:w-3 after:h-3 after:bg-green-600 after:rounded-full after:bottom-0 after:right-0">
          JD
        </div>
      </div>
    </header>
  );
}

export default Navbar;
