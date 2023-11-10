import React from "react";
import { useLocation } from "react-router-dom";
import Sidebar from "./sidebar/Sidebar";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === "/login";

  const divClass = isLoginPage ? "flex gap-5 bg-[#fff0c9]" : "flex md:gap-5";

  return (
    <div className={divClass}>
      {!isLoginPage && <Sidebar />}
      <main className="max-w-6xl flex-1 mx-auto md:py-4">
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
