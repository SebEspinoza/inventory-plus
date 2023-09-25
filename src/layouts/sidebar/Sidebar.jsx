// React imports
import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
// Extra imports
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
// Componentes
import SubMenu from "./SubMenu";
// React icons
import { IoIosArrowBack } from "react-icons/io";
import { SlSettings } from "react-icons/sl";
import { AiOutlineAppstore } from "react-icons/ai";
import { BsPerson, BsBoxSeam } from "react-icons/bs";
import { TbReportAnalytics } from "react-icons/tb";
import { RiBuilding3Line } from "react-icons/ri";
import Logo from "../../assets/Logo.png";

const Sidebar = () => {
  // Estado del sidebar
  const [isOpen, setIsOpen] = useState(true);

  let isTab = useMediaQuery({
    query: "(max-width:768px)",
  });

  const { pathname } = useLocation();

  const Sidebar_animation = {
    // Desktop view
    open: {
      width: "16rem",
      transition: {
        damping: 40,
      },
    },
    closed: {
      width: "4rem",
      transition: {
        damping: 40,
      },
    },
  };

  useEffect(() => {
    if (isTab) {
      // Mobile
      setIsOpen(false);
    }
  }, [isTab]);

  // Al cambiar el pathname -> cierra el sidebar
  useEffect(() => {
    isTab && setIsOpen(false);
  }, [pathname, isTab]);

  const subMenusList = [
    {
      // Menu principal (app, settings, etc...)
      name: "build",
      icon: RiBuilding3Line,
      // Submenus
      menus: ["auth", "app settings", "storage", "hosting"],
    },
    {
      name: "analytics",
      icon: TbReportAnalytics,
      menus: ["dashboard", "realtime", "events"],
    },
  ];

  return (
    <div className="h-full sticky top-0 z-10 pr-10 lg:pr-0">
      <div
        onClick={() => setIsOpen(false)}
        className={`md:hidden fixed inset-0 max-h-screen z-[998] bg-black/50 ${isOpen ? "block" : "hidden"}`}
      ></div>
      <motion.div
        variants={Sidebar_animation}
        //initial={{ x: isTab ? -250 : 0 }}
        animate={isOpen ? "open" : "closed"}
        className="bg-color-crema text-gray shadow-neumorphicBar rounded-tr-xl rounded-br-xl z-[999]
         w-[16rem] max-w-[16rem] h-screen overflow-hidden md:relative fixed"
      >
        {/*Logo */}
        <div className="flex items-center gap-3 font-medium border-b border-slate-300 py-3 mx-3">
          <img src={Logo} alt=".." width={45} />
          <span className="text-xl whitespace-pre">Uno Cafe</span>
        </div>

        {/*Menu */}
        <div className="flex flex-col h-full">
          {/*Primero */}
          <ul
            className="whitespace-pre px-2.5 text-[0.9rem] py-5 flex flex-col gap-1 font-medium overflow-x-hidden scrollbar-thin
           scrollbar-track-white scrollbar-thumb-slate-100 h-[70%] md:h-[68%]"
          >
            <li>
              <NavLink to={"/"} className={"link"}>
                <AiOutlineAppstore size={23} className="min-w-max" />
                Vista general
              </NavLink>
            </li>
            <li>
              <NavLink to={"/trabajadores"} className={"link"}>
                <BsPerson size={23} className="min-w-max" />
                Trabajadores
              </NavLink>
            </li>
            <li>
              <NavLink to={"/inventario"} className="link">
                <BsBoxSeam size={23} className="min-w-max" />
                Inventario
              </NavLink>
            </li>

            {/* SubMenu */}
            {isOpen && (
              <div className="border-y py-5 border-slate-300">
                <h2 className="pl-3 text-slate-500 inline-block mb-2">Product catego</h2>
                {subMenusList.map((menu) => (
                  <div key={menu.name} className="flex flex-col gap-1">
                    <SubMenu data={menu} />
                  </div>
                ))}
              </div>
            )}

            <li>
              <NavLink to={"/settings"} className="link">
                <SlSettings size={23} className="min-w-max" />
                Settings
              </NavLink>
            </li>
          </ul>
          {/*Segundo */}
          {isOpen && (
            <div className="flex-1 text-sm z-50 max-h-48 my-auto whitespace-pre w-full font-medium">
              <div className="flex items-center justify-between border-y border-slate-300 p-4">
                <div>
                  <p>Nombre Usuario</p>
                  <small>Tipo de Usuario</small>
                </div>
                <p className="text-color-crema py-1.5 px-3 text-xs bg-color-cafe-claro rounded-xl">Cerrar Sesión</p>
              </div>
            </div>
          )}
        </div>

        {/*Icono para abrir y cerrar */}
        <motion.div
          onClick={() => setIsOpen(!isOpen)}
          animate={isOpen ? { x: 0, y: 0, rotate: 0 } : { x: -10, y: 0, rotate: 180 }}
          transition={{ duration: 0 }}
          className="absolute w-fit h-fit z-50 right-2 bottom-5 cursor-pointer md:block"
        >
          <IoIosArrowBack size={25} />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Sidebar;
