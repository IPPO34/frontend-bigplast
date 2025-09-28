import React from "react";
import heroImage from "../assets/Fondo_BP.png"; // tu imagen

export default function Home() {
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

      {/* Productos destacados (breve preview) */}
      <section className="py-12 bg-gray-50 text-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6 text-center">Productos destacados</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {/* Ejemplos (puedes sustituir por la lógica real o componentes) */}
            <div className="bg-white p-4 rounded-xl shadow">
              <img src="https://unionychicawa.vteximg.com.br/arquivos/ids/175675-1000-1000/70216479-1.jpg?v=638411262647630000" alt="item" className="w-full h-44 object-cover rounded mb-3"/>
              <h4 className="font-semibold">Silla</h4>
              <p className="text-blue-600 font-bold">S/. 45.00</p>
            </div>

            <div className="bg-white p-4 rounded-xl shadow">
              <img src="https://cdnx.jumpseller.com/productos-rey-preu/image/49246503/resize/1200/1200?1717023386" alt="item" className="w-full h-44 object-cover rounded mb-3"/>
              <h4 className="font-semibold">Silla</h4>
              <p className="text-blue-600 font-bold">S/. 89.99</p>
            </div>

            <div className="bg-white p-4 rounded-xl shadow">
              <img src="https://unomasuno.pe/wp-content/uploads/2020/11/barcelona-azul.png" alt="item" className="w-full h-44 object-cover rounded mb-3"/>
              <h4 className="font-semibold">Silla</h4>
              <p className="text-blue-600 font-bold">S/. 30.50</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
