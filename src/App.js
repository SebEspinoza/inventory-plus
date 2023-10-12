import { Route, Routes } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import Analytics from "./pages/Analytics";
import Trabajadores from "./pages/trabajadores/Trabajadores";
import Settings from "./pages/Settings";
import Inventario from "./pages/Inventario/Inventario";
import Login from "./pages/Login";
import RequiredAuth from "./components/RequiredAuth";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        // Rutas públicas
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/inventario" element={<Inventario />} />
        <Route path="/settings" element={<Settings />} />
        // Rutas protegidas
        <Route element={<RequiredAuth allowedRoles={true} />}>
          <Route path="/trabajadores" element={<Trabajadores />} />
          <Route path="/Estadísticas/:aID" element={<Analytics />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
