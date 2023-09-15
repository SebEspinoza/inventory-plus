import React, { useState } from "react";
import "../styles/NavBar.css";
import { BiSearchAlt, BiBell, BiSolidUserCircle } from "react-icons/bi";
import { BsQuestionLg } from "react-icons/bs";
const NavBar = () => {
  const [buscar, setBuscar] = useState("");

  const buscarHandler = (event) => {
    setBuscar(event.target.value);
  };
  return (
    <div className="container-nav shadow-xs">
      <div className="textbox">
        <input
          type="text"
          value={buscar}
          onChange={buscarHandler}
          placeholder="Buscar..."
        />
        <BiSearchAlt className="left cursor-default" />
      </div>
      <div className="icons">
        <BiBell className="w-[24px] h-[24px] fill-color-crema cursor-pointer absolute top-[26px] left-[1538px]" />
        <BsQuestionLg className="w-[24px] h-[24px] fill-color-crema cursor-pointer absolute top-[26px] left-[1578px]" />
        <BiSolidUserCircle className="absolute top-[20px] left-[1618px] w-[36px] h-[36px] bg-color-crema opacity-1 overflow-hidden rounded-[18px] " />
      </div>
    </div>
  );
};

export default NavBar;
