// React imports
import React, { useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
// Extra imports
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import Swal from "sweetalert2";

// React icons
import { IoIosArrowBack } from "react-icons/io";
import { AiOutlineAppstore } from "react-icons/ai";
import { BsPerson, BsBoxSeam } from "react-icons/bs";
import { TbReportAnalytics } from "react-icons/tb";
import { MdArrowForwardIos } from "react-icons/md";
import { MdAutoGraph } from "react-icons/md";
import Logo from "../../assets/Logo.png";
// Auth

const Sidebar = () => {
  const state = useSelector((state) => state.UserReducer);
  const [username, setUsername] = useState("Nombre de usuario");
  const [userType, setUserType] = useState("Tipo de usuario");
  // Estado del sidebar
  const [isOpen, setIsOpen] = useState(false);
  const go = useNavigate();

  let isTab = useMediaQuery({
    query: "(max-width:768px)",
  });

  const { pathname } = useLocation();

  const Sidebar_animation = isTab
    ? {
        // Mobile
        open: {
          x: 0,
          width: "16rem",
          transition: {
            damping: 40,
          },
        },
        closed: {
          x: -250,
          width: 0,
          transition: {
            damping: 40,
            delay: 0.15,
          },
        },
      }
    : {
        // Desktop
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
    } else {
      setIsOpen(false);
    }
  }, [isTab]);

  useEffect(() => {
    if (state.user) {
      setUsername(state.user.data);
      if (state.user.type == true) {
        setUserType("Administrador");
      } else {
        setUserType("Trabajador");
      }
    }
  }, []);

  const handleLogout = async () => {
    const result = await Swal.fire({
      title: "¿Seguro que deseas cerrar tu sesión?",
      text: "No podras acceder al sitio si no estas logueado",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      background: "#fff0c9",
      cancelButtonColor: "#d33",
      cancelButtonText: "Cancelar",
      confirmButtonText: "Cerrar sesión",
    });

    if (result.isConfirmed) {
      try {
        localStorage.removeItem("persist:main-root");
        go("/login");
      } catch (error) {
        console.error("Error al cerrar sesión", error);
        Swal.fire("Error", "Ocurrió un error al cerrar sesión ", "error");
      }
    }
  };

  return (
    <div className="h-full fixed md:sticky md:left-0 md:top-0 z-50 lg:pr-0">
      <div
        onClick={() => setIsOpen(false)}
        className={`md:hidden fixed inset-0 max-h-screen z-[998] bg-black/50 ${isOpen ? "block" : "hidden"}`}
      ></div>
      <motion.div
        variants={Sidebar_animation}
        //initial={{ x: isTab ? -250 : 0 }}
        animate={isOpen ? "open" : "closed"}
        className="bg-color-crema text-gray shadow-neumorphicBar rounded-tr-lg rounded-br-lg z-[999]
         w-[16rem] max-w-[16rem] h-screen overflow-hidden md:relative fixed"
      >
        {/*Logo */}
        <div className="flex items-center gap-3 font-medium border-b border-slate-300 py-3 mx-3">
          <img src={Logo} alt=".." width={45} />
          <span className="text-xl whitespace-pre font-Russo">Uno Cafe</span>
        </div>

        {/*Menu */}
        <div className="flex flex-col h-full">
          {/*Primero */}
          <ul
            className="whitespace-pre px-2.5 text-[1.2rem] py-5 flex flex-col gap-1 font-medium overflow-x-hidden scrollbar-thin
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
            <li>
              <NavLink to={"/dashboard"} className="link">
                <TbReportAnalytics size={23} className="min-w-max" />
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink to={"/estimaciones"} className="link">
                <MdAutoGraph size={23} className="min-w-max" />
                Estimaciones
              </NavLink>
            </li>
          </ul>
          {/*Segundo */}
          {isOpen && (
            <div className="flex-1 text-md z-50 max-h-48 my-auto whitespace-pre w-full font-medium">
              <div className="flex items-center justify-between border-y border-slate-300 p-2">
                <div>
                  <p>{username}</p>
                  <small>{userType}</small>
                </div>
                <button className="text-color-crema py-1.5 px-3 text-xs bg-danger rounded-xl shadow-neumorphicLogOutButton" onClick={handleLogout}>
                  Cerrar Sesión
                </button>
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
      <div
        className="md:hidden bg-color-crema rounded-md flex items-center h-[6%] absolute left-[-6px] top-[50%] border"
        onClick={() => setIsOpen(true)}
      >
        <MdArrowForwardIos size={25} className="fill-color-cafe-claro" />
      </div>
    </div>
  );
};

export default Sidebar;
