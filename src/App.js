import { Route, Routes } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/home/Home";
import Estimaciones from "./pages/Estimaciones";
import Dashboard from "./pages/dashboard/Dashboard";
import Trabajadores from "./pages/trabajadores/Trabajadores";
import Unauthorized from "./pages/Unauthorized";
import Inventario from "./pages/Inventario/Inventario";
import Login from "./pages/Login";
import RequiredAuth from "./components/RequiredAuth";

const App = () => {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/unauthorized" element={<Unauthorized />} />

        <Route>
          <Route path="/" element={<Home />} />
          <Route path="/inventario" element={<Inventario />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>

        <Route>
          <Route path="/trabajadores" element={<Trabajadores />} />
          <Route path="/estimaciones" element={<Estimaciones />} />
        </Route>
      </Route>
    </Routes >
  );
};

export default App;
