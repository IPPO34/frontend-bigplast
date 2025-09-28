import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../api";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState(null);
  const [loading, setLoading] = useState(false);
  const nav = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    setErr(null);
    setLoading(true);
    try {
      const res = await login(username, password);
      localStorage.setItem("token", res.token);
      localStorage.setItem("rol", res.rol);
      setLoading(false);
      if (res.rol === "admin") {
        nav("/admin/dashboard"); // 🚀 solo admins acceden
      } else {
        nav("/productos"); // ⚡ usuarios normales a productos
      }
    } catch (err) {
      console.error(err);
      setErr("Credenciales inválidas");
      setLoading(false);
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-[#0f172a] text-white">
      {/* Navbar fijo arriba */}
      <Navbar />

      {/* Contenido principal */}
      <main className="flex-grow flex items-center justify-center px-4 pt-20">
        <div className="w-full max-w-md bg-[#1e293b] p-8 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-bold text-center mb-6">
            Ingreso Administrador
          </h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Usuario"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-[#0f172a] text-white border border-gray-700 focus:border-blue-500 focus:outline-none"
              required
            />
            <input
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-[#0f172a] text-white border border-gray-700 focus:border-blue-500 focus:outline-none"
              required
            />

            {err && <p className="text-red-500 text-sm">{err}</p>}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-xl bg-blue-500 hover:bg-blue-600 transition font-semibold"
            >
              {loading ? "Ingresando..." : "Entrar"}
            </button>
          </form>
        </div>
      </main>

      {/* Footer fijo abajo */}
      <Footer />
    </div>
  );
}
