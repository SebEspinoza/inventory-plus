import React from "react";

import TablaTrabajadores from "./components/TablaTrabajadores";
import { useMediaQuery } from "react-responsive";
import TablaResponsiveTrabajador from "./components/responsive/TablaResponsiveTrabajador";

const Trabajadores = () => {
  const isDesktopOrLaptop = useMediaQuery({ minWidth: 768 });
  return (
    <div>
      <div className="flex-grow md:p-4  md:rounded-xl bg-color-cafe-claro">
        {isDesktopOrLaptop ? <TablaTrabajadores /> : <TablaResponsiveTrabajador />}
      </div>
    </div>
  );
};

export default Trabajadores;
