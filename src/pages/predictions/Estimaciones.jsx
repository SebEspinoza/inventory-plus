import React from "react";
import Iframe from "react-iframe";
import EstiList from "./estiList";

const Estimaciones = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="md:w-1/2">
        <p className="text-center mt-4 text-sm text-color-cafe-claro md:mb-4">
          En este apartado podrás ocupar el modelo de predicción de stock, para poder predecir el stock necesario dentro de un mes
        </p>
        <Iframe src="https://knn-weatheraus.onrender.com/" height="400px" width="100%" scrolling="no" />
      </div>
      <div className="md:w-1/2">
        <EstiList />
      </div>
    </div>
  );
};

export default Estimaciones;
