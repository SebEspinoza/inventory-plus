import React from "react";
import { useLocation } from "react-router-dom";
import Sidebar from "./sidebar/Sidebar";

const RootLayout = ({ children }) => {
  const location = useLocation();
  const isLoginPage = location.pathname === "/login";

  const divClass = isLoginPage ? "flex gap-5 bg-[#fff0c9]" : "flex md:gap-5";

  return (
    <div className={divClass}>
      {!isLoginPage && <Sidebar />}
      <main className="max-w-5xl flex-1 mx-auto py-4">{children}</main>
    </div>
  );
};

export default RootLayout;
