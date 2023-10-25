import { Route, Routes } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import Analytics from "./pages/Analytics";
import Trabajadores from "./pages/trabajadores/Trabajadores";
import Unauthorized from "./pages/Unauthorized";
import Inventario from "./pages/Inventario/Inventario";
import Login from "./pages/Login";
import RequiredAuth from "./components/RequiredAuth";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/inventario" element={<Inventario />} />
        <Route path="/unauthorized" element={<Unauthorized />} />

        <Route element={<RequiredAuth allowedRoles={true} />}>
          <Route path="/trabajadores" element={<Trabajadores />} />
          <Route path="/Estadísticas/:aID" element={<Analytics />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
