// Raact Imports
import React from "react";
// Componentes
import TablaProductos from "./components/TablaProductos";

const Inventario = () => {
  return (
    <div>
      <div className="flex-grow p-4 bg-color-cafe-claro rounded-xl">
        <TablaProductos />
      </div>
    </div>
  );
};

export default Inventario;
