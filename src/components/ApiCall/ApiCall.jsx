import axios from "axios";
import { startLogin, successLogin, failedLogin } from "../Actions/Actions";

const url = "https://inventoryplusbackend.cyclic.app/auth/login";

export const ApiCall = async (userCredentials, dispatch) => {
  dispatch(startLogin());
  try {
    const user = await axios.post(url, userCredentials);
    // Verificar si la respuesta contiene un campo "success"
    if (user.data.success === true) {
      dispatch(successLogin(user.data));
      return user.data; // Devuelve los datos exitosos
    } else {
      throw new Error("Los datos son incorrectos"); // Lanza un error en caso de fallo
    }
  } catch (error) {
    dispatch(failedLogin(error.message));
    throw error; // Relanza el error para que pueda ser manejado en handleLogin
  }
};
