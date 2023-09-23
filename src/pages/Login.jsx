import React from "react";
import { BiSolidUser } from "react-icons/bi";
import "../styles/Login.css";

const Login = () => {
  return (
    <div className="body bg-color-crema">
      <div className="container bg-color-crema">
        <form>
          <div className="form-icon rounded-full w-[100px] overflow-hidden flex items-center justify-center">
            <BiSolidUser className="w-16 h16 fill-color-cafe-claro" />
          </div>
          <h3 className="title text-color-cafe-claro">Log-In</h3>
          <input
            className="form-control"
            type="text"
            placeholder="Email o Nombre de usuario..."
          />
          <input
            className="form-control"
            type="password"
            placeholder="Contraseña..."
          />
          <button
            className="btn text-color-crema bg-color-cafe-claro justify-center"
            type="button"
          >
            Ingresar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
