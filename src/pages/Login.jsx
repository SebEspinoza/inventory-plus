import React, { useEffect, useRef, useState } from "react";
import { BiSolidUser } from "react-icons/bi";
import "../styles/Login.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useAuth from "../hooks/useAuth";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { ApiCall } from "../components/ApiCall/ApiCall";

const Login = () => {
  const state = useSelector((state) => state.UserReducer);
  const dispatch = useDispatch();
  const initialValue = useRef(true);

  useEffect(() => {
    if (!initialValue.current) {
      console.log(state);
    } else {
      initialValue.current = false;
    }
  }, []);

  const { setAuth } = useAuth();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Actualiza el estado del botón
    if (formData.email.trim() !== "" && formData.password.trim() !== "") {
      setIsButtonDisabled(!isButtonDisabled);
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

  const errorLogin = (e) => {
    toast.error(e, {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  const handleLogin = async () => {
    if (formData.email.trim() === "" && formData.password.trim() !== "") {
      errorLogin("Rellene el campo email");
    }
    if (formData.password.trim() === "" && formData.email.trim() !== "") {
      errorLogin("Rellene el campo contraseña");
    }

    if (formData.email.trim() === "" && formData.password.trim() === "") {
      errorLogin("Rellene los campos vacíos");
      return;
    }

    if (formData.email.trim() !== "" && formData.password.trim() !== "") {
      try {
        const response = await ApiCall({ email: formData.email, password: formData.password }, dispatch);
        // Datos correctos
        if (response.success === true) {
          const authToken = response?.token;
          const role = response?.type;
          const userName = response?.data;
          setAuth({ authToken, role, userName });
          loginSucces();

          setTimeout(() => {
            navigate(from, { replace: true });
          }, 2000);

          // Datos incorrectos
        } else {
          errorLogin("Los datos son incorrectos");
          setTimeout(() => {
            window.location.reload();
          }, 2000);
        }
      } catch (error) {
        if (error.response && error.response.status === 401) {
          // Respuesta con estatus 401
          errorLogin(error.response.data.message);
        } else {
          console.error("Error al iniciar sesión: ", error);
          errorLogin("Error al iniciar sesión");
        }
      }
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
          <input
            className="form-control"
            type="email"
            name="email"
            placeholder="Correo..."
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <input
            className="form-control"
            type="password"
            name="password"
            placeholder="Contraseña..."
            value={formData.password}
            onChange={handleInputChange}
            required
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
