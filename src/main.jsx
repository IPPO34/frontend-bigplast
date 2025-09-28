import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import Home from "./components/Home.jsx";
import Productos from "./components/Productos.jsx";
import Nosotros from "./components/Nosotros.jsx"; // ✅ nueva página
import AdminAccessPin from "./components/AdminAccessPin.jsx"; // ✅ nuevo componente para el PIN
import AdminLogin from "./components/AdminLogin.jsx";
import AdminDashboard from "./components/AdminDashboard.jsx";
import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* 🌐 Rutas públicas con Navbar y Footer */}
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="productos" element={<Productos />} />
          <Route path="nosotros" element={<Nosotros />} /> {/* ✅ nueva ruta pública */}
        </Route>

        {/* 🔒 Rutas administrativas (sin navbar/footer) */}
        <Route path="/admin" element={<AdminAccessPin />} /> {/* Paso 1: ingresar PIN */}
        <Route path="/admin/login" element={<AdminLogin />} /> {/* Paso 2: login */}
        <Route path="/admin/dashboard" element={<AdminDashboard />} /> {/* Panel */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
