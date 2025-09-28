const API_URL = "https://backend-bigplast.onrender.com/api";

// 📦 Obtener productos
export async function fetchProductos() {
  const res = await fetch(`${API_BASE}/api/productos`);
  if (!res.ok) throw new Error("Error fetching productos");
  return res.json();
}

// 🔑 Login admin
export async function login(username, password) {
  const res = await fetch(`${API_BASE}/api/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  });
  if (!res.ok) throw res;
  return res.json();
}

// ➕ Crear producto
export async function createProducto(token, data) {
  const res = await fetch(`${API_BASE}/api/productos`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("Error al crear producto");
  return res.json();
}

// ✏️ Editar producto
export async function updateProducto(token, id, data) {
  const res = await fetch(`${API_BASE}/api/productos/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("Error al actualizar producto");
  return res.json();
}

// ❌ Eliminar producto
export async function deleteProducto(token, id) {
  const res = await fetch(`${API_BASE}/api/productos/${id}`, {
    method: "DELETE",
    headers: { Authorization: `Bearer ${token}` },
  });
  if (!res.ok) throw new Error("Error al eliminar producto");
  return res.json();
}

// 📂 Subir imagen
export async function uploadImagen(file) {
  const formData = new FormData();
  formData.append("file", file);

  const res = await fetch(`${API_BASE}/api/upload`, {
    method: "POST",
    body: formData,
  });

  if (!res.ok) throw new Error("Error al subir imagen");
  return res.json(); // el backend debería devolver { url: "/uploads/archivo.jpg" }
}
