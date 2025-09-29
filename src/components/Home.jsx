import React, { useEffect, useState } from "react";
import heroImage from "../assets/Fondo_BP.png"; // tu imagen
import { fetchProductos } from "../api"; // 👈 usamos la API real

export default function Home() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    async function loadProductos() {
      try {
        const data = await fetchProductos();
        // Tomar solo los últimos 3 productos, en orden descendente
        const ultimos = data
          .sort((a, b) => new Date(b.creado_en) - new Date(a.creado_en))
          .slice(0, 3);
        setProductos(ultimos);
      } catch (err) {
        console.error("Error cargando productos destacados:", err);
      }
    }
    loadProductos();
  }, []);

  return (
    <div className="bg-[#0f172a] text-white">
      {/* Hero */}
      <section
        className="relative h-[72vh] flex items-center justify-center"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
            Fabricamos y distribuimos sillas plásticas de alta calidad
          </h1>
          <p className="text-gray-200 text-lg md:text-xl mb-6">
            Durabilidad, diseño y confort para hogar, eventos y negocios.
          </p>
          <a
            href="/productos"
            className="inline-block bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold shadow-lg"
          >
            Ver Productos
          </a>
        </div>
      </section>

      {/* Valores / Beneficios */}
      <section className="bg-[#0f172a] py-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center max-w-6xl mx-auto">
        <div>
          <div className="text-4xl mb-4">🏭</div>
          <h3 className="text-xl font-bold mb-2">Fabricación local</h3>
          <p className="text-gray-300">
            Sillas hechas con materiales de primera calidad, producidas en el país.
          </p>
        </div>
        <div>
          <div className="text-4xl mb-4">🚚</div>
          <h3 className="text-xl font-bold mb-2">Entrega rápida</h3>
          <p className="text-gray-300">
            Recibe tus productos en tiempo récord, directo a tu puerta.
          </p>
        </div>
        <div>
          <div className="text-4xl mb-4">🛡️</div>
          <h3 className="text-xl font-bold mb-2">Garantía de calidad</h3>
          <p className="text-gray-300">
            Nuestros productos pasan rigurosos controles de calidad.
          </p>
        </div>
      </section>

      {/* Productos destacados */}
      <section className="py-12 bg-gray-50 text-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6 text-center">Últimos productos</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {productos.length > 0 ? (
              productos.map((p) => (
                <div key={p.id} className="bg-white p-4 rounded-xl shadow">
                  <img
  src={p.imagen_url || "https://via.placeholder.com/300"}
  alt={p.nombre}
  className="w-full h-44 object-contain rounded mb-3 "
/>
                  <h4 className="font-semibold">{p.nombre}</h4>
                  <p className="text-blue-600 font-bold">S/. {p.precio}</p>
                </div>
              ))
            ) : (
              <p className="text-center col-span-3 text-gray-500">
                No hay productos disponibles aún.
              </p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
