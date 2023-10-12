import React, { useState } from "react";
import { BiSolidUser } from "react-icons/bi";
import axios from "axios";
import "../styles/Login.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useAuth from "../hooks/useAuth";
import { useNavigate, useLocation } from "react-router-dom";

const url = "https://inventoryplus.cyclic.app/auth/login"; // URL de inicio de sesión

const Login = () => {
  const { setAuth } = useAuth();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

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

  // Toast
  const loginSucces = () => {
    toast.success("Bienvenido!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post(url, {
        email: formData.email,
        password: formData.password,
      });
      // Datos correctos
      if (response.data.success === true) {
        const authToken = response?.data?.token;
        const role = response?.data?.type;
        const userName = response?.data?.data;
        setAuth({ authToken, role, userName });
        loginSucces();
        setTimeout(() => {
          navigate(from, { replace: true });
        }, 2000);

        // Datos incorrectos
      } else if (response.data.success === false) {
        alert("Los datos son incorrectos");
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
      <ToastContainer />
    </div>
  );
};

export default Login;
