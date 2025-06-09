import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/page/AppSidebar";
import Navbar from "@/page/Navbar";
import { Outlet } from "react-router";

export default function Layout() {
  return (
    <SidebarProvider className="flex w-screen h-screen">
      <AppSidebar />
      <div className="flex flex-col w-screen">
        <Navbar />
        <main className="pl-3 pt-2">
          <Outlet />
        </main>
      </div>
    </SidebarProvider>
  );
}
