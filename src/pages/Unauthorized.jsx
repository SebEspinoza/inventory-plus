import React from "react";
import { useNavigate } from "react-router-dom";

const Unauthorized = () => {
  const navigate = useNavigate();

  const goBack = () => navigate(-1);

  return (
    <section className="flex flex-col items-center top-[50%]">
      <h1>No autorizado</h1>
      <br />
      <p>Usted no tiene acceso a esta sección</p>
      <div className="flex-grow bg-color-cafe-claro rounded-lg w-[60px] text-center mt-2">
        <button className=" text-color-crema text-sm" onClick={goBack}>
          Regresar
        </button>
      </div>
    </section>
  );
};

export default Unauthorized;
