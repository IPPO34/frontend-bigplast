import React, { useEffect, useState } from "react";
import { fetchProductos } from "../api";

export default function Productos() {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [productoDetalle, setProductoDetalle] = useState(null);

  const token = localStorage.getItem("token");
  const isAdmin =
    token && JSON.parse(atob(token.split(".")[1])).rol === "admin";

  useEffect(() => {
    loadProductos();
  }, []);

  async function loadProductos() {
    try {
      setLoading(true);
      const data = await fetchProductos();
      setProductos(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  // --- Ficha técnica de ejemplo ---
  function getFichaTecnica(nombre) {
    if (nombre.includes("Silla Neo")) {
      return [
        "Material: Polipropileno virgen de alta resistencia.",
        "Resistencia: 150 kg (Certificada).",
        "Uso: Interior y Exterior (Protección UV).",
        "Diseño: Ergonómico y apilable.",
      ];
    }
    return [
      "Material: Plástico inyectado de alta calidad.",
      "Dimensiones: 85cm alto x 45cm ancho.",
      "Ideal para: Eventos y restaurantes.",
      "Mantenimiento: Fácil de limpiar y resistente a manchas.",
    ];
  }

  // 🧩 Función para mostrar correctamente la imagen (desde Render)
  const getImageUrl = (imgPath) => {
    if (!imgPath) return "https://via.placeholder.com/300x200?text=Sin+imagen";
    return imgPath.startsWith("http")
      ? imgPath
      : `https://backend-bigplast.onrender.com${imgPath}`;
  };

  if (loading)
    return (
      <div className="text-center py-20 text-gray-500">
        Cargando productos...
      </div>
    );

  return (
    <section className="bg-gray-100 min-h-screen pt-24 pb-16 px-6">
      {/* Título */}
      <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">
        Nuestros Productos
      </h1>

      {/* Grid de productos */}
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-7xl mx-auto">
        {productos.map((p) => (
          <div
            key={p.id}
            className="bg-white rounded-xl shadow-lg hover:shadow-xl transition p-4 border border-gray-200"
          >
            <img
              src={getImageUrl(p.imagen_url)}
              alt={p.nombre}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-900 line-clamp-1">
              {p.nombre}
            </h3>
            <p className="text-gray-500 text-sm line-clamp-2 min-h-[3rem]">
              {p.descripcion || "Descripción no disponible."}
            </p>
            <p className="text-blue-600 font-bold mt-2 text-lg">
              S/. {p.precio}
            </p>

            <button
              className="mt-4 w-full py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition shadow-md"
              onClick={() => {
                setProductoDetalle(p);
                setShowModal(true);
              }}
            >
              Ver detalles
            </button>
          </div>
        ))}
      </div>

      {/* 🚀 MODAL DETALLE */}
      {showModal && productoDetalle && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-[100] p-4 backdrop-blur-sm"
          onClick={() => setShowModal(false)}
        >
          <div
            className="bg-white text-gray-900 rounded-xl shadow-2xl w-full max-w-4xl max-h-[95vh] overflow-y-auto relative transition-all duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Botón cerrar */}
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-red-600 text-3xl font-light p-2 rounded-full hover:bg-gray-100 transition z-10"
              onClick={() => setShowModal(false)}
            >
              ✕
            </button>

            {/* Cuerpo del Modal */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
              {/* Imagen */}
              <div className="md:w-full">
                <img
                  src={getImageUrl(productoDetalle.imagen_url)}
                  alt={productoDetalle.nombre}
                  className="w-full h-auto object-cover rounded-lg shadow-lg border border-gray-200"
                />
              </div>

              {/* Info */}
              <div className="md:w-full flex flex-col space-y-5">
                <h2 className="text-3xl font-extrabold text-gray-900 border-b pb-2 border-gray-200">
                  {productoDetalle.nombre}
                </h2>

                <p className="text-2xl font-bold text-green-600">
                  Precio: S/. {productoDetalle.precio}
                </p>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    Descripción:
                  </h3>
                  <p className="text-gray-700">
                    {productoDetalle.descripcion || "Sin descripción detallada"}
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mt-4">
                    Ficha Técnica:
                  </h3>
                  <p className="text-gray-700 whitespace-pre-line">
                    {productoDetalle.ficha_tecnica || "No registrada"}
                  </p>
                </div>

                {/* 🔹 Acciones admin */}
                {isAdmin && (
                  <div className="flex flex-wrap gap-4 mt-6">
                    <button
                      className="px-5 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold"
                      onClick={() => {
                        setShowModal(false);
                        window.location.href = `/admin/dashboard?edit=${productoDetalle.id}`;
                      }}
                    >
                      Editar
                    </button>
                    <button
                      className="px-5 py-2 rounded-lg bg-red-600 hover:bg-red-700 text-white font-semibold"
                      onClick={() => {
                        if (confirm("¿Eliminar este producto?")) {
                          console.log("Eliminar producto", productoDetalle.id);
                        }
                      }}
                    >
                      Eliminar
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
