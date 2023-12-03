import React from "react";
import Iframe from "react-iframe";
import EstiList from "./estiList";

const Estimaciones = () => {
  return (
    <div className="h-screen flex-1 flex flex-wrap justify-center">
      <p className="text-center mt-4 text-sm text-color-cafe-claro md:mb-4">
        En este apartado podrás ocupar el modelo de predicción de stock, para poder predecir el stock necesario dentro de un mes
      </p>
      <div className="w-full md:w-1/2">
        <Iframe src="https://knn-weatheraus.onrender.com/" height="89%" width="100%" scrolling="no" />
      </div>
      <div className="w-full md:w-1/2">
        <EstiList />
      </div>
    </div>
  );
};

export default Estimaciones;
