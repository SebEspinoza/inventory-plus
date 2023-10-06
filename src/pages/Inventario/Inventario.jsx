// Raact Imports
import React from "react";
import { useMediaQuery } from "react-responsive";
// Componentes
import TablaProductos from "./components/TablaProductos";
import TablaResponsive from "./components/Responsive/TablaResponsive";

const Inventario = () => {
  const isDesktopOrLaptop = useMediaQuery({ minWidth: 768 });

  return (
    <div>
      <div className="flex-grow p-4  rounded-xl">{isDesktopOrLaptop ? <TablaProductos /> : <TablaResponsive />}</div>
    </div>
  );
};

export default Inventario;
