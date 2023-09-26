// React imports
import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
// Extra imports
import { motion } from "framer-motion";
// React icons
import { IoIosArrowDown } from "react-icons/io";

const SubMenu = ({ data }) => {
  const { pathname } = useLocation();
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  return (
    <>
      <li className={`link ${pathname.includes(data.name) && "bg-color-cafe-claro text-color-crema"}`} onClick={() => setSubMenuOpen(!subMenuOpen)}>
        {/* Iconos dinamicos */}
        <data.icon size={23} className="min-w-max" />
        <p className="capitalize flex-1">{data.name}</p>
        <IoIosArrowDown className={`${subMenuOpen && "rotate-180"} duration-200`} />
      </li>

      <motion.ul
        animate={subMenuOpen ? { height: "fit-content" } : { height: 0 }}
        className="flex flex-col pl-14 text-[0.8rem] font-normal overflow-hidden h-0"
      >
        {data.menus.map((menu) => (
          <li key={menu}>
            {/* /build/auth
                /build/hosting */}
            <NavLink className="link capitalize" to={`/${data.name}/${menu}`}>
              {menu}
            </NavLink>
          </li>
        ))}
      </motion.ul>
    </>
  );
};

export default SubMenu;
