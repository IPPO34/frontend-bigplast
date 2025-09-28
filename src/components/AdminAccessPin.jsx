import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminAccessPin() {
  const [pin, setPin] = useState("");
  const [error, setError] = useState("");
  const [isVerifying, setIsVerifying] = useState(false);
  const navigate = useNavigate();

  const SECRET_PIN = "4321"; // 🔐 PIN fijo (puedes cambiarlo luego o moverlo a .env)

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setIsVerifying(true);

    setTimeout(() => {
      if (pin === SECRET_PIN) {
        navigate("/admin/login");
      } else {
        setError("❌ PIN incorrecto. Inténtalo nuevamente.");
        setIsVerifying(false);
      }
    }, 600);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-[#0f172a] to-[#1e3a8a] text-white px-4">
      <div className="bg-[#111827]/90 backdrop-blur-md p-10 rounded-2xl shadow-2xl w-full max-w-sm text-center border border-gray-700">
        <h1 className="text-3xl font-extrabold mb-2 text-blue-400 tracking-wide">
          BIG PLAST
        </h1>
        <h2 className="text-xl font-semibold mb-6 text-gray-200">
          Acceso Administrativo 🔐
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="password"
            value={pin}
            onChange={(e) => setPin(e.target.value)}
            placeholder="Ingrese el PIN secreto"
            className="w-full px-4 py-3 rounded-lg bg-[#0f172a] border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-white text-center text-lg tracking-widest"
            maxLength="6"
          />

          {error && (
            <p className="text-red-400 text-sm font-medium animate-pulse">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={isVerifying}
            className={`w-full py-3 rounded-lg font-bold text-white transition-all duration-300 shadow-md ${
              isVerifying
                ? "bg-blue-800 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {isVerifying ? "Verificando..." : "Verificar PIN"}
          </button>
        </form>

        <p className="text-xs text-gray-400 mt-6">
          Acceso exclusivo para administradores autorizados.
        </p>
      </div>
    </div>
  );
}
