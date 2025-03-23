import { Button } from "@/components/ui/button";
import { Outlet } from "react-router-dom";

function AuthLayout() {
  return (
    <main className="bg-neutral-100 min-h-screen">
      <div className="mx-auto max-w-screen-2xl p-4">
        <nav className="flex justify-between items-center">
          <img
            src="public/capture.svg"
            alt="App Logo"
            width={70}
            height={100}
          />
          <div className="flex items-center gap-2">
            <Button variant="secondary">Sign up</Button>
          </div>
        </nav>
        <div className="flex flex-col items-center justify-center pt-4 md:pt-14">
          <Outlet />
        </div>
      </div>
    </main>
  );
}

export default AuthLayout;
