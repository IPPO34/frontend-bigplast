import React, { useState } from "react";

export default function ProductForm({ initialData = {}, onSubmit }) {
  const [formData, setFormData] = useState({
    nombre: initialData.nombre || "",
    descripcion: initialData.descripcion || "",
    precio: initialData.precio || "",
    imagen_url: initialData.imagen_url || "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(formData);
  }

  return (
    <form onSubmit={handleSubmit} className="bg-[#111827] p-4 rounded-lg text-white">
      <input
        type="text"
        name="nombre"
        placeholder="Nombre"
        value={formData.nombre}
        onChange={handleChange}
        className="w-full mb-2 px-3 py-2 rounded bg-[#1f2937] border border-gray-700"
        required
      />
      <textarea
        name="descripcion"
        placeholder="Descripción"
        value={formData.descripcion}
        onChange={handleChange}
        className="w-full mb-2 px-3 py-2 rounded bg-[#1f2937] border border-gray-700"
      />
      <input
        type="number"
        name="precio"
        placeholder="Precio"
        step="0.01"
        value={formData.precio}
        onChange={handleChange}
        className="w-full mb-2 px-3 py-2 rounded bg-[#1f2937] border border-gray-700"
        required
      />
      <input
        type="text"
        name="imagen_url"
        placeholder="URL de imagen"
        value={formData.imagen_url}
        onChange={handleChange}
        className="w-full mb-4 px-3 py-2 rounded bg-[#1f2937] border border-gray-700"
      />

      <button
        type="submit"
        className="w-full py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-semibold"
      >
        Guardar
      </button>
    </form>
  );
}
