import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0f172a] text-gray-100">
      {/* 🔝 Navbar fijo */}
      <header className="fixed top-0 left-0 w-full z-50 shadow-md bg-[#0f172a]/95 backdrop-blur-md">
        <Navbar />
      </header>

      {/* 🧩 Contenido dinámico de cada página */}
      <main className="flex-grow pt-20 animate-fade-in">
        <Outlet />
      </main>

      {/* 🔻 Footer fijo al final */}
      <footer className="mt-auto">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
