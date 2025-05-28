import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/page/AppSidebar";
import Navbar from "@/page/Navbar";
import { Outlet } from "react-router";

export default function Layout() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <Navbar />
      <main>
        <Outlet />
      </main>
    </SidebarProvider>
  );
}
