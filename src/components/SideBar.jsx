import React, { useState } from "react";
import Logo from "../assets/Logo.png";
import { RiBarChartGroupedFill } from "react-icons/ri";
import { BiSolidReport } from "react-icons/bi";
import { FaHome } from "react-icons/fa";
import { BsBoxSeam } from "react-icons/bs";
import { AiOutlineHistory } from "react-icons/ai";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import "../styles/SideBar.css";

const Sidebar = () => {
  const [showSubMenu, setShowSubMenu] = useState(false);

  const toggleSubMenu = () => {
    setShowSubMenu(!showSubMenu);
  };

  return (
    <div className="bg-color-crema h-screen w-20 lg:w-[238px] fixed shadow-xl">
      <div className="container-top flex">
        <div className="logo flex mt-[24px] ml-[24px] mr-[16px]">
          <img src={Logo} alt="Logo" className="w-[48px] h-[48px]" />
        </div>
        <div className="empresa flex-col">
          <h1 className="mt-[24px] w-[143px] h-[26px] font-heading text-[16px] font-bold leading-[26px] text-color-cafe-oscuro">Nombre Empresa</h1>
          <h4 className="mt-[2px] font-body text-[12px] font-normal leading-[20px] text-[#56566cff]">Categoria</h4>
        </div>
      </div>
      <div className="menu mt-[55px] ml-[9px] mr-[33px] flex flex-col font-body font-normal text-[14px] leading-[22px] opacity-1 w-[196px] h-[220px]">
        <ul className="itemsUl flex flex-col h-full gap-[5px] opacity-1 w-full">
          <li className="home rounded-[4px] relative font-bold bg-color-cafe-claro">
            <a href="/home" className="flex items-center text-color-crema">
              <i>
                <FaHome className="w-[24px] h-[24px] fill-color-crema" />
              </i>
              Vista General
            </a>
          </li>
          <li className="submenu">
            <button onClick={toggleSubMenu} className="flex items-center">
              <BiSolidReport className="w-[24px] h-[24px] fill-color-cafe-claro" />
              Reportes
              <IoIosArrowDown className="w-[24px] h-[24px] ml-[43px]" />
            </button>
            <ul className={`hover:block ${showSubMenu ? "" : "hidden"}`}>
              <li>
                <a href="/estimaciones" className="flex items-center">
                  <RiBarChartGroupedFill className="w-[24px] h-[24px] fill-color-cafe-claro" />
                  Estimaciones
                </a>
              </li>
              <li>
                <a href="/inventario" className="flex items-center">
                  <BsBoxSeam className="w-[24px] h-[24px] fill-color-cafe-claro" />
                  Inventario
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a href="/historial" className="flex items-center ">
              <AiOutlineHistory className="w-[24px] h-[24px] fill-color-cafe-claro " />
              Historial
              <IoIosArrowForward className="ml-[45px] w-[24px] h-[24px]" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
