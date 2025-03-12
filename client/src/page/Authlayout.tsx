import { Outlet } from "react-router-dom";

function AuthLayout() {
  return (
    <div >
      
      <img src="public/capture.svg" alt="App Logo" />

      <Outlet />
    </div>
  );
}

export default AuthLayout;
