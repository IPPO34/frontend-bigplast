import React from 'react';
import FondoBP from '../assets/Fondo_BP.png'; 
// Asume que tienes un componente Icon o puedes usar librerías como Heroicons (puedes instalar 'lucide-react' o similar)
// Para este ejemplo, usaremos placeholders con iconos de un CDN para mayor claridad.

export default function Nosotros() {
  return (
    <div className="bg-gray-50 text-gray-900 min-h-screen">
      
      {/* 1. HERO - Imagen de Impacto */}
      <div className="relative h-96 bg-gray-300 overflow-hidden">
        {/* Aquí va la imagen de tu fábrica, equipo o control de calidad */}
        <img 
  src={FondoBP} 
  alt="Fondo de BIG PLAST"
  className="w-full h-full object-cover"
/>
        <div className="absolute inset-0 bg-blue-900/50 flex items-center justify-center">
          <h1 className="text-5xl font-extrabold text-white text-center drop-shadow-lg">
            Sobre Nosotros
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        
        {/* 2. Introducción y Misión */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Sobre BIG PLAST</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            BIG PLAST es líder en fabricación y distribución de sillas plásticas para hogar y eventos. Nuestra misión es entregar productos "duraderos, funcionales y estéticos" a precios altamente competitivos.
          </p>
        </div>

        {/* 3. Misión y Valores Destacados */}
        <div className="bg-[#11162C] text-white p-10 rounded-xl shadow-2xl mb-16">
          <h3 className="text-3xl font-bold text-center mb-8">Nuestros Pilares</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            
            <div className="flex flex-col items-center">
              {/* Icono de Innovación */}
              <svg className="w-10 h-10 mb-3 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9.75 14L2.25 14L2.25 11L9.75 11L9.75 8L17.25 8L17.25 11L24.75 11L24.75 14L17.25 14L17.25 17L9.75 17Z" /></svg>
              <p className="font-semibold text-xl">INNOVACIÓN</p>
              <p className="text-sm text-gray-300">Diseños modernos y procesos de vanguardia.</p>
            </div>

            <div className="flex flex-col items-center">
              {/* Icono de Calidad */}
              <svg className="w-10 h-10 mb-3 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <p className="font-semibold text-xl">CALIDAD TOTAL</p>
              <p className="text-sm text-gray-300">Materia prima certificada y rigurosos controles.</p>
            </div>

            <div className="flex flex-col items-center">
              {/* Icono de Servicio */}
              <svg className="w-10 h-10 mb-3 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>
              <p className="font-semibold text-xl">SERVICIO</p>
              <p className="text-sm text-gray-300">Garantía y soporte post-venta personalizado.</p>
            </div>
          </div>
        </div>

        {/* 4. Bloques de Contenido (Historia, Producción, Atención) con Iconos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          
          <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-blue-[#11162C]">
            <div className="flex items-center mb-4">
              {/* Icono de Historia */}
              <svg className="w-8 h-8 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <h3 className="text-xl font-bold">Nuestra Historia</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Con "más de 25 años" en el mercado, hemos evolucionado de un pequeño taller a una planta de producción a gran escala. Nuestra experiencia es tu mejor garantía de durabilidad y logística eficiente.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-blue-[#11162C]">
            <div className="flex items-center mb-4">
              {/* Icono de Producción */}
              <svg className="w-8 h-8 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L15 13.586m-1-4.586a2 2 0 012-2h2.586a2 2 0 011.414.586L21 12m-6 3l-5-5-5 5m-1 0h14" /></svg>
              <h3 className="text-xl font-bold">Producción Local</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Apoyamos la industria nacional y el empleo local. Nuestros procesos están "certificados y son responsables" con el medio ambiente, garantizando la trazabilidad de la materia prima.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-blue-[#11162C]">
            <div className="flex items-center mb-4">
              {/* Icono de Atención */}
              <svg className="w-8 h-8 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 0a1.5 1.5 0 00-2.121 0l-1.414 1.414a1.5 1.5 0 000 2.121l3.536 3.536m0 0a1.5 1.5 0 002.121 0l1.414-1.414a1.5 1.5 0 000-2.121l-3.536-3.536z" /></svg>
              <h3 className="text-xl font-bold">Atención al Cliente</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Nuestro compromiso no termina con la venta. Ofrecemos "soporte postventa dedicado" y "garantías claras" de hasta 3 años en todos nuestros modelos. Tu satisfacción es nuestra prioridad.
            </p>
          </div>
        </div>
        
        {/* 5. CTA Final */}
        <div className="mt-16 text-center">
    {/* Nota: Corregí la clase del h3. Tailwind no usa 'text-blue-[#hex]'. El color debe ser más claro para contrastar. */}
    <h3 className="text-3xl font-semibold mb-4 text-blue-[#11162C]">¿Listo para ver nuestra calidad?</h3>
    <a 
        href="/productos" // REEMPLAZA ESTA RUTA si es necesario
        className="inline-block px-10 py-4 text-lg font-bold text-white bg-blue-600 rounded-full hover:bg-blue-700 transition duration-300 shadow-xl"
    >
        Explorar Nuestro Catálogo
    </a>
</div>
      </div>
    </div>
  );
}