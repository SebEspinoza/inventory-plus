import { BrowserRouter, Route, Routes } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import Analytics from "./pages/Analytics";
import Trabajadores from "./pages/Trabajadores";
import Settings from "./pages/Settings";
import Inventario from "./pages/Inventario/Inventario";
import Login from "./pages/Login";
import ProtectedRoutes from "./components/ProtectedRoutes";

const App = () => {
  return (
    <BrowserRouter basename="/inventory-plus">
      <RootLayout>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/trabajadores" element={<Trabajadores />} />
          <Route path="/inventario" element={<Inventario />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/Estadísticas/:aID" element={<Analytics />} />
        </Routes>
      </RootLayout>
    </BrowserRouter>
  );
};

export default App;
