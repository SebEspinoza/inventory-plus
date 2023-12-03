import React from "react";
import { useNavigate } from "react-router-dom";

const Unauthorized = () => {
  const navigate = useNavigate();

  const goBack = () => navigate(-1);

  return (
    <section className="flex items-center justify-center h-screen">
      <div className="border md:w-[600px] md:h-[600px] bg-color-cafe-claro text-color-crema rounded-md p-4 flex-col flex justify-evenly items-center">
        <div>
          <h1 className="text-center underline text-4xl">No autorizado</h1>
          <br />
          <p className="text-center text-2xl">
            Usted no tiene acceso a esta sección, contacte con un administrador para solicitar permisos.
          </p>
        </div>
        <div className="bg-color-cafe-claro rounded-lg w-fit text-center mt-2 border">
          <button className="text-color-crema text-sm download-btn" onClick={goBack}>
            Regresar
          </button>
        </div>
      </div>
    </section>
  );
};

export default Unauthorized;