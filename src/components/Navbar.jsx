import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png"; // reemplaza por el nombre real de tu logo en /src/assets
import { FaWhatsapp } from "react-icons/fa";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-[#071022] to-[#0b1220] shadow">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        <div className="flex items-center gap-4">
          <img src={logo} alt="BIG PLAST" className="h-10 w-auto object-contain" />
          <span className="text-white font-bold text-lg">BIG PLAST</span>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-gray-300 font-medium">
          <NavLink to="/" end className={({isActive}) => isActive ? "text-white border-b-2 border-blue-500 pb-1" : "hover:text-white"}>
            Inicio
          </NavLink>
          <NavLink to="/productos" className={({isActive}) => isActive ? "text-white border-b-2 border-blue-500 pb-1" : "hover:text-white"}>
            Productos
          </NavLink>
          <NavLink to="/nosotros" className={({isActive}) => isActive ? "text-white border-b-2 border-blue-500 pb-1" : "hover:text-white"}>
            Nosotros
          </NavLink>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="https://wa.me/51987654321?text=Hola%20quisiera%20informaci%C3%B3n%20sobre%20las%20sillas"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-3 py-2 rounded-lg font-medium"
          >
            <FaWhatsapp /> WhatsApp
          </a>

          
        </div>
      </div>
    </header>
  );
}
