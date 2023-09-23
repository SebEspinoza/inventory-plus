import React, { useState } from "react";
import { BiSolidUser } from "react-icons/bi";
import bcrypt from "bcryptjs";
import axios from "axios";
import "../styles/Login.css";

const url = "https://inventoryplus.cyclic.app/users";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [isButtonDisabled, setIsButtonDisabled] = useState(true); // Estado para habilitar/deshabilitar el botón

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Validación: Habilitar el botón solo si ambos campos tienen valores
    if (formData.email.trim() !== "" && formData.password.trim() !== "") {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  };

  const handleLogin = async () => {
    try {
      const response = await axios.get(`${url}?email=${formData.email}`);

      if (response.data.length === 1) {
        const user = response.data[0];
        const passwordMatch = await bcrypt.compare(
          formData.password,
          user.password
        );

        if (passwordMatch) {
          alert("Inicio de sesión exitoso");
        } else {
          alert("Contraseña incorrecta");
        }
      } else {
        console.log(response.data);
      }
    } catch (error) {
      console.error("Error al iniciar sesión: ", error);
    }
  };

  return (
    <div className="body bg-color-crema">
      <div className="containerLogin bg-color-crema">
        <form>
          <div className="form-icon rounded-full w-[100px] overflow-hidden flex items-center justify-center">
            <BiSolidUser className="w-16 h16 fill-color-cafe-claro" />
          </div>
          <h3 className="title text-color-cafe-claro">Log-In</h3>
          <input
            className="form-control"
            type="email"
            name="email"
            placeholder="Correo..."
            value={formData.email}
            onChange={handleInputChange}
          />
          <input
            className="form-control"
            type="password"
            name="password"
            placeholder="Contraseña..."
            value={formData.password}
            onChange={handleInputChange}
          />
          <button
            className="btn text-color-crema bg-color-cafe-claro justify-center"
            type="button"
            onClick={handleLogin}
            disabled={isButtonDisabled} // Deshabilita el botón si isButtonDisabled es verdadero
          >
            Ingresar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
