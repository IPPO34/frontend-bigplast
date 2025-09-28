// 🌐 URL base del backend (Render)
const API_URL = "https://backend-bigplast.onrender.com/api";

// 📦 Obtener productos
export async function fetchProductos() {
  const res = await fetch(`${API_URL}/productos`);
  if (!res.ok) throw new Error("Error al obtener los productos");
  return res.json();
}

// 🔑 Login administrador
export async function login(username, password) {
  const res = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  });
  if (!res.ok) throw new Error("Error en el inicio de sesión");
  return res.json();
}

// ➕ Crear producto
export async function createProducto(token, data) {
  const res = await fetch(`${API_URL}/productos`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("Error al crear el producto");
  return res.json();
}

// ✏️ Editar producto
export async function updateProducto(token, id, data) {
  const res = await fetch(`${API_URL}/productos/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("Error al actualizar el producto");
  return res.json();
}

// ❌ Eliminar producto
export async function deleteProducto(token, id) {
  const res = await fetch(`${API_URL}/productos/${id}`, {
    method: "DELETE",
    headers: { Authorization: `Bearer ${token}` },
  });
  if (!res.ok) throw new Error("Error al eliminar el producto");
  return res.json();
}

// 📂 Subir imagen
export async function uploadImagen(file) {
  const formData = new FormData();
  formData.append("file", file);

  const res = await fetch(`${API_URL}/upload`, {
    method: "POST",
    body: formData,
  });

  if (!res.ok) throw new Error("Error al subir la imagen");
  return res.json(); // backend devuelve { url: "/uploads/archivo.jpg" }
}
