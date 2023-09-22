import "../src/styles/App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Inventario from "./pages/Inventario";
import Login from "./pages/Login";
import AuthUser from "./Authentication/AuthUser";

function App() {
  return (
    <BrowserRouter basename="">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/inventario" element={<Inventario />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
