import React from "react";
import Iframe from "react-iframe";

const Estimaciones = () => {
  return (
    <div className="h-screen">
      <h1 className="text-5xl underline text-center text-color-cafe-claro mt-2">Estimaciones</h1>
      <p className="text-center mt-4 text-lg text-color-cafe-claro md:mb-4">
        En este apartado podrás ocupar el modelo de predicción de stock, para poder predecir el stock necesario dentro de un mes
        La cantidad y mes deben ser valores númericos. Ejemplo: Cantidad: 100, Mes: 1 (Enero)
      </p>
      <Iframe src="https://knn-weatheraus.onrender.com/" height="52%" width="100%" scrolling="no" />
    </div>
  );
};

export default Estimaciones;
