import React from "react";
import Sidebar from "../components/SideBar";
import Header from "../components/Header";
import Productos from "../components/Productos";

const Inventario = () => {
  return (
    <div>
      <Sidebar />
      <div className="flex flex-col h-screen w-full pl-20 lg:pl-[238px] bg-color-crema">
        <Header />
        <Productos />
      </div>
    </div>
  );
};

export default Inventario;
