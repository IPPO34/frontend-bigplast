import { NavLink } from "react-router-dom";
import { FaFacebook, FaEnvelope, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { SiTiktok } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="bg-[#0f172a] text-gray-300 py-10 mt-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-8">
        <div>
          <h3 className="text-white font-bold text-lg mb-4">Navegación</h3>
          <ul className="space-y-2">
            <li><NavLink to="/" className="hover:text-white">Inicio</NavLink></li>
            <li><NavLink to="/nosotros" className="hover:text-white">Sobre Nosotros</NavLink></li>
            <li><NavLink to="/productos" className="hover:text-white">Productos</NavLink></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-bold text-lg mb-4">Contacto</h3>
          <ul className="space-y-2">
            <li className="flex items-center gap-2"><FaEnvelope/> contacto@big-plast.pe</li>
            <li>
              <a href="https://wa.me/51987654321?text=Hola%20quisiera%20informaci%C3%B3n" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white">
                <FaWhatsapp className="text-green-500"/> +51 987 654 321
              </a>
            </li>
            <li className="flex items-center gap-2"><span>Av. Ejemplo 123, Ciudad</span></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-bold text-lg mb-4">Síguenos</h3>
          <ul className="flex gap-4 text-xl">
            <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook/></a></li>
            <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram/></a></li>
            <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter/></a></li>
            <li><a href="https://tiktok.com" target="_blank" rel="noopener noreferrer"><SiTiktok/></a></li>
          </ul>
        </div>
      </div>

            {/* Línea inferior centrada */}
      <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-400">
        <p>© 2025 BIG PLAST. Todos los derechos reservados.</p>

        {/* 🔑 Acceso Administrativo centrado */}
        <div className="mt-3">
          <NavLink
            to="/admin"
            className="text-xs text-gray-500 hover:text-white transition underline"
          >
            Acceso Administrativo
          </NavLink>
        </div>
      </div>

    </footer>
  );
}
