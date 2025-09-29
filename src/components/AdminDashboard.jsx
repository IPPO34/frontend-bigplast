import React, { useEffect, useState } from "react";
import {
  fetchProductos,
  createProducto,
  updateProducto,
  deleteProducto,
  uploadImagen,
} from "../api";
import { useNavigate } from "react-router-dom";

export default function AdminDashboard() {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState(null);
  const [formData, setFormData] = useState({
    nombre: "",
    descripcion: "",
    precio: "",
    imagen_url: "",
    ficha_tecnica: "",
  });
  const [editingId, setEditingId] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [activeTab, setActiveTab] = useState("gestion"); // 👈 pestaña activa
  const [showModal, setShowModal] = useState(false);
  const [productoDetalle, setProductoDetalle] = useState(null);

  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      navigate("/admin/login");
      return;
    }
    loadProductos();
  }, []);

  async function loadProductos() {
    try {
      setLoading(true);
      const data = await fetchProductos();
      setProductos(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error(err);
      setMessage({ type: "error", text: "No se pudieron cargar los productos." });
    } finally {
      setLoading(false);
    }
  }

  function resetForm() {
    setFormData({ nombre: "", descripcion: "", precio: "", imagen_url: "", ficha_tecnica: "" });
    setEditingId(null);
    setSelectedFile(null);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      let finalImageUrl = formData.imagen_url;
      if (selectedFile) {
        const imageData = await uploadImagen(selectedFile);
        if (imageData.url) {
          if (imageData.url.startsWith("http")) {
    finalImageUrl = imageData.url;
  } else {
    finalImageUrl = `https://backend-bigplast.onrender.com${imageData.url}`;
  }
        } else {
          throw new Error("Error al subir imagen");
        }
      }
      const productData = { ...formData, precio: parseFloat(formData.precio), imagen_url: finalImageUrl };
      if (editingId) {
        await updateProducto(token, editingId, productData);
        setMessage({ type: "success", text: "Producto actualizado" });
        setTimeout(() => setMessage(null), 3000); // 👈 se borra solo
      } else {
        await createProducto(token, productData);
        setMessage({ type: "success", text: "Producto creado." });
        setTimeout(() => setMessage(null), 3000);
      }

      resetForm();
      loadProductos();
    } catch (err) {
      console.error(err);
      setMessage({ type: "error", text: `Error al guardar producto: ${err.message}` });
    }
  }

  async function handleDelete(id) {
    if (!confirm("¿Eliminar este producto?")) return;
    try {
      await deleteProducto(token, id);
      setMessage({ type: "success", text: "Producto eliminado." });
      loadProductos();
    } catch (err) {
      console.error(err);
      setMessage({ type: "error", text: "Error al eliminar producto." });
    }
  }

  function handleFileChange(e) {
    setSelectedFile(e.target.files[0]);
  }

  function handleLogout() {
    localStorage.removeItem("token");
    navigate("/admin/login");
  }

  return (
    <div className="bg-blue min-h-screen text-white">
      {/* Header */}
      <header className="bg-[#0f172a] shadow-lg fixed top-0 left-0 w-full z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <h1 className="text-xl font-bold text-gray-50">BIG PLAST</h1>
          <div className="flex gap-4">
            
            <button
              onClick={handleLogout}
              className="px-4 py-2 rounded-lg bg-red-600 hover:bg-red-700 transition font-semibold"
            >
              Cerrar sesión
            </button>
          </div>
        </div>
      </header>

      {/* Contenido */}
      <div className="max-w-6xl mx-auto px-6 pt-28 pb-12">
        {message && (
          <div className={`p-3 mb-6 rounded text-center font-semibold ${message.type === "error" ? "bg-red-500" : "bg-green-500"}`}>
            {message.text}
          </div>
        )}

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-8">
          <button
            onClick={() => setActiveTab("gestion")}
            className={`px-6 py-2 rounded-lg ${activeTab === "gestion" ? "bg-[#0f172a]" : "bg-gray-700"} hover:bg-blue-700`}
          >
            Gestión
          </button>
          <button
            onClick={() => setActiveTab("productos")}
            className={`px-6 py-2 rounded-lg ${activeTab === "productos" ? "bg-[#0f172a]" : "bg-gray-700"} hover:bg-blue-700`}
          >
            Productos
          </button>
        </div>

        {/* === Apartado Gestión === */}
        {activeTab === "gestion" && (
          <>
            {/* Formulario */}
<div className="bg-[#111827] p-6 rounded-xl shadow-2xl mb-12">
  <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <input
      type="text"
      placeholder="Nombre"
      value={formData.nombre}
      onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
      className="px-4 py-2 rounded-lg bg-[#0f172a] border border-gray-700 text-white"
      required
    />
    <input
      type="number"
      step="0.01"
      placeholder="Precio"
      value={formData.precio}
      onChange={(e) => setFormData({ ...formData, precio: e.target.value })}
      className="px-4 py-2 rounded-lg bg-[#0f172a] border border-gray-700 text-white"
      required
    />
    <input
      type="text"
      placeholder="URL Imagen"
      value={formData.imagen_url}
      onChange={(e) => setFormData({ ...formData, imagen_url: e.target.value })}
      className="col-span-2 px-4 py-2 rounded-lg bg-[#0f172a] border border-gray-700 text-white"
    />

    {/* 👇 Nuevo estilo para "Seleccionar Archivo" */}
    <div className="col-span-2 flex items-center gap-4">
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        id="file-upload"
        className="hidden" // ocultamos el input
      />
      <label
        htmlFor="file-upload"
        className="px-4 py-2 rounded-lg bg-gray-700 hover:bg-gray-600 cursor-pointer text-white font-semibold shadow-md"
      >
        Seleccionar Imagen
      </label>
      {selectedFile ? (
        <span className="text-gray-300 text-sm">{selectedFile.name}</span>
      ) : (
        <span className="text-gray-500 text-sm">Ningún archivo seleccionado</span>
      )}
    </div>

    <textarea
      placeholder="Descripción"
      value={formData.descripcion}
      onChange={(e) => setFormData({ ...formData, descripcion: e.target.value })}
      className="col-span-2 px-4 py-2 rounded-lg bg-[#0f172a] border border-gray-700 text-white"
    />
    <textarea
      placeholder="Ficha Técnica"
      value={formData.ficha_tecnica}
      onChange={(e) => setFormData({ ...formData, ficha_tecnica: e.target.value })}
      className="col-span-2 px-4 py-2 rounded-lg bg-[#0f172a] border border-gray-700 text-white"
    />

    <div className="col-span-2 flex gap-3">
      <button type="submit" className="px-6 py-2 rounded-lg bg-blue-600 hover:bg-blue-700">
        {editingId ? "Actualizar" : "Crear"}
      </button>
      {editingId && (
        <button
          type="button"
          onClick={resetForm}
          className="px-6 py-2 rounded-lg bg-gray-600 hover:bg-gray-700"
        >
          Cancelar
        </button>
      )}
    </div>
  </form>
</div>

            {/* Tabla */}
            <div className="overflow-x-auto shadow-2xl rounded-lg">
              {loading ? (
                <p className="text-gray-400 text-center">Cargando productos...</p>
              ) : (
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-gray-800 text-gray-50">
                      <th className="p-4">Imagen</th>
                      <th className="p-4">Nombre</th>
                      <th className="p-4">Precio</th>
                      <th className="p-4">Descripción</th>
                      <th className="p-4">Ficha Técnica</th>
                      <th className="p-4 text-center">Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    {productos.map((p) => (
                      <tr key={p.id} className="bg-white text-gray-800 hover:bg-blue-50">
                        <td className="p-4">
                          <img src={p.imagen_url || "https://via.placeholder.com/80"} alt={p.nombre} className="w-16 h-16 object-cover rounded" />
                        </td>
                        <td className="p-4 font-semibold">{p.nombre}</td>
                        <td className="p-4">S/. {p.precio}</td>
                        <td className="p-4">{p.descripcion}</td>
                        <td className="p-4">{p.ficha_tecnica}</td>
                        <td className="p-4 text-center flex gap-2 justify-center">
                          <button
                            onClick={() => {
                              setFormData(p);
                              setEditingId(p.id);
                            }}
                            className="px-3 py-1 bg-blue-500 hover:bg-blue-600 text-white rounded"
                          >
                            Editar
                          </button>
                          <button
                            onClick={() => handleDelete(p.id)}
                            className="px-3 py-1 bg-red-500 hover:bg-red-600 text-white rounded"
                          >
                            Eliminar
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </>
        )}

        {/* === Apartado Productos (Vista pública con edición en modal) === */}
        {activeTab === "productos" && (
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {productos.map((p) => (
              <div key={p.id} className="bg-white text-gray-900 p-4 rounded shadow">
                <img src={p.imagen_url || "https://via.placeholder.com/300"} alt={p.nombre} className="w-full h-40 object-contain rounded mb-3" />
                <h3 className="font-bold text-lg">{p.nombre}</h3>
                <p className="text-sm text-gray-600">{p.descripcion}</p>
                <p className="text-blue-600 font-semibold">S/. {p.precio}</p>
                <button
                  className="mt-2 px-4 py-2 bg-[#0f172a] text-white rounded hover:bg-blue-700"
                  onClick={() => {
                    setProductoDetalle(p);
                    setShowModal(true);
                  }}
                >
                  Ver Detalles
                </button>
              </div>
            ))}

            {/* Modal de Detalles con edición inline */}
            {showModal && productoDetalle && (
              <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4" onClick={() => setShowModal(false)}>
                <div className="bg-white text-gray-900 rounded-lg p-6 max-w-3xl w-full relative" onClick={(e) => e.stopPropagation()}>
                  <button onClick={() => setShowModal(false)} className="absolute top-4 right-4 text-2xl text-gray-500 hover:text-red-600">
                    ✕
                  </button>
                  <h2 className="text-2xl font-bold mb-4">Editar {productoDetalle.nombre}</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      value={productoDetalle.nombre}
                      onChange={(e) => setProductoDetalle({ ...productoDetalle, nombre: e.target.value })}
                      className="border p-2 rounded w-full"
                    />
                    <input
                      type="number"
                      value={productoDetalle.precio}
                      onChange={(e) => setProductoDetalle({ ...productoDetalle, precio: e.target.value })}
                      className="border p-2 rounded w-full"
                    />
                    <textarea
                      value={productoDetalle.descripcion}
                      onChange={(e) => setProductoDetalle({ ...productoDetalle, descripcion: e.target.value })}
                      className="border p-2 rounded col-span-2"
                    />
                    <textarea
                      value={productoDetalle.ficha_tecnica}
                      onChange={(e) => setProductoDetalle({ ...productoDetalle, ficha_tecnica: e.target.value })}
                      className="border p-2 rounded col-span-2"
                    />
                  </div>
                  <div className="mt-4 flex gap-3">
                    <button
                      onClick={async () => {
                        await updateProducto(token, productoDetalle.id, productoDetalle);
                        setShowModal(false);
                        loadProductos();
                      }}
                      className="px-4 py-2 bg-blue-600 text-white rounded"
                    >
                      Guardar
                    </button>
                    <button onClick={() => setShowModal(false)} className="px-4 py-2 bg-gray-500 text-white rounded">
                      Cancelar
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
