import React from "react";
import SideBar from "../components/SideBar";
import Header from "../components/Header";

import "../styles/Home.css";
import VistaGeneral from "../components/VistaGeneral";

const Home = () => {
  return (
    <div>
      <SideBar />
      <div className="flex flex-col h-screen w-full pl-20 lg:pl-[238px]">
        <Header />
        <VistaGeneral />
      </div>
    </div>
  );
};

export default Home;
