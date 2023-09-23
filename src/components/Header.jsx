import React, { useState } from "react";
import { BiSearchAlt, BiUserCircle } from "react-icons/bi";
import { FaRegBell } from "react-icons/fa";

const Header = () => {
  const [buscar, setBuscar] = useState("");

  const buscarHandler = (event) => {
    setBuscar(event.target.value);
  };
  return (
    <div className="bg-color-cafe-oscuro p-3 flex justify-between items-center shadow-xs">
      <div className="flex items-center overflow-hidden ml-[16px]">
        <BiSearchAlt className="fill-color-crema w-[20px] h-[20px] absolute ml-[20px] mt-[3px]" />
        <input
          className="bg-color-cafe-claro w-[150px] md:w-[445px] h-[35px] md:h-[44px] pl-[44px] pr-[16px] rounded-[4px] outline-none
           placeholder:text-color-crema hover:text-color-crema font-body"
          type="text"
          placeholder="Buscar..."
          value={buscar}
          onChange={buscarHandler}
        />
      </div>

      <div className="md:pr-[16px]">
        <ul className="flex items-center gap-[10px]">
          <li>
            <FaRegBell className="fill-color-crema w-[20px] md:w-[24px] h-[20px] md:h-[24px] cursor-pointer" />
          </li>
          <li>
            <BiUserCircle className="fill-color-crema w-[20px] md:w-[36px] h-[20px] md:h-[36px] cursor-pointer" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
