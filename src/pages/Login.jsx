import React, { useState } from "react";
import { BiSolidUser } from "react-icons/bi";
import axios from "axios";
import "../styles/Login.css";
import { useNavigate } from "react-router-dom";
import storage from "../Storage/storage";

const url = "https://inventoryplus.cyclic.app/auth/login"; // URL de inicio de sesión

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const go = useNavigate();
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    if (formData.email.trim() !== "" && formData.password.trim() !== "") {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post(url, {
        email: formData.email,
        password: formData.password,
      });
      // Datos correctos
      if (response.data.success === true) {
        const authToken = response.data.token;
        storage.set("authUser", response.data.data);
        storage.set("authToken", authToken);
        go("/");
        // Datos incorrectos
      } else if (response.data.success === false) {
        alert("Los datos son incorrectos");
      }
    } catch (error) {
      console.log("Datos erroneos");
      console.error("Error al iniciar sesión: ", error);
    }
  };

  return (
    <div className="body bg-color-crema">
      <div className="containerLogin bg-color-crema">
        <form>
          <div className="form-icon rounded-full w-[100px] overflow-hidden flex items-center justify-center">
            <BiSolidUser className="w-16 h-16 fill-color-cafe-claro" />
          </div>
          <h3 className="title text-color-cafe-claro">Log-In</h3>
          <input className="form-control" type="email" name="email" placeholder="Correo..." value={formData.email} onChange={handleInputChange} />
          <input
            className="form-control"
            type="password"
            name="password"
            placeholder="Contraseña..."
            value={formData.password}
            onChange={handleInputChange}
          />
          <button className="btn text-color-crema bg-color-cafe-claro justify-center" type="button" onClick={handleLogin} disabled={isButtonDisabled}>
            Ingresar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
