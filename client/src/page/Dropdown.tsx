import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { User, Settings, LogOut } from "lucide-react";

function Dropdown() {
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <div className="relative h-10 w-10 rounded-full bg-blue-700 text-white flex items-center justify-center text-lg after:content-[''] after:absolute after:w-3 after:h-3 after:bg-green-600 after:rounded-full after:border-white  after:bottom-0 after:right-0">
            JD
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="mt-1 mr-2 w-56">
          <DropdownMenuLabel className="flex items-center gap-2">
            <div className="relative h-10 w-10 rounded-full bg-blue-700 text-white flex items-center justify-center text-lg after:content-[''] after:absolute after:w-3 after:h-3 after:bg-green-600 after:rounded-full after:border-white  after:bottom-0 after:right-0">
              JD
            </div>
            <div className="mb-1">
              <div>John Doe</div>
              <div className="text-xs">Johndoe@gmail.com</div>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <User />
            <div>My profile</div>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Settings />
            <div>Settings</div>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="text-red-500">
            <LogOut className="text-red-500" />
            Log Out
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export default Dropdown;
