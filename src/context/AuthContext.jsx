import { createContext, useContext, useState } from "react";

// Crea un contexto de autenticación
export const AuthContext = createContext();

// Un componente que proporcionará el contexto
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = (response) => {
    // Aquí puedes realizar la lógica de autenticación y establecer isAuthenticated en true si el inicio de sesión es exitoso.
    console.log(response.data.data);
    alert("Inicio de sesión exitoso");
    setIsAuthenticated(true);
    console.log(isAuthenticated);
  };

  const logout = () => {
    // Aquí puedes realizar la lógica de cierre de sesión y establecer isAuthenticated en false.
    setIsAuthenticated(false);
    console.log(isAuthenticated);
  };

  return <AuthContext.Provider value={{ isAuthenticated, login, logout }}>{children}</AuthContext.Provider>;
};

// Un custom hook para acceder al contexto de autenticación
export const useAuth = () => useContext(AuthContext);
