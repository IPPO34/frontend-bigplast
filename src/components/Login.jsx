import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../api";

export default function Login() {
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await login(credentials.username, credentials.password);
      const tokenValue = res.token ?? res.access_token ?? res;
      if (!tokenValue) throw new Error("Respuesta de login inválida");
      localStorage.setItem("token", tokenValue);
      navigate("/productos");
    } catch (err) {
      console.error(err);
      setError("Usuario o contraseña inválidos");
    } finally {
      setLoading(false);
    }
  }

  function handleLogout() {
    localStorage.removeItem("token");
    navigate("/");
  }

  if (token) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-[#0f172a] text-white">
        <h2 className="text-3xl font-bold mb-4">¡Bienvenido Administrador!</h2>
        <button
          className="px-6 py-3 rounded-full bg-red-600 hover:bg-red-700 transition font-semibold shadow-md"
          onClick={handleLogout}
        >
          Cerrar sesión
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#0f172a] text-white p-4">
        {/* Contenedor principal con más estilo */}
      <form 
        onSubmit={handleSubmit} 
        className="w-full max-w-lg bg-[#1e293b] p-8 md:p-12 rounded-3xl shadow-2xl border-t-4 border-blue-600 space-y-6"
      >
        
        {/* Header de Marca y Título */}
        <div className="text-center mb-6">
            <p className="text-2xl font-extrabold text-blue-400">BIG PLAST</p>
            <h2 className="text-3xl font-bold mt-2 text-white">Ingreso Administrador</h2>
        </div>
        
        {/* Input de Usuario */}
        <input
          type="text"
          placeholder="Usuario"
          value={credentials.username}
          onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
          className="w-full px-5 py-3 rounded-xl bg-[#0f172a] text-white border border-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition placeholder-gray-500"
          required
        />
        
        {/* Input de Contraseña */}
        <input
          type="password"
          placeholder="Contraseña"
          value={credentials.password}
          onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
          className="w-full px-5 py-3 rounded-xl bg-[#0f172a] text-white border border-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition placeholder-gray-500"
          required
        />
        
        {error && <p className="text-red-500 font-medium text-center">{error}</p>}
        
        {/* Botón de Entrar */}
        <button 
            type="submit" 
            disabled={loading} 
            className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 transition font-bold text-lg shadow-lg shadow-blue-500/30"
        >
          {loading ? "Ingresando..." : "Entrar al Panel"}
        </button>
        
      </form>
    </div>
  );
}