export const Estadistica=()=>{
    return(
        <>
        <section className="w-full max-w-4xl text-center mb-10">
    <h2 className="text-4xl font-bold text-white mb-6">Estadísticas de Propiedades</h2>
    <p className="text-gray-300 text-lg">
      Información actualizada sobre la disponibilidad de propiedades, ocupación y características de los propietarios.
    </p>
  </section>

 
  <div className="flex flex-col w-full max-w-5xl h-full">
    <div className="grid grid-cols-3 gap-4 mb-4">
      {/* Curiosidades */}
      <div className="flex flex-col items-center">
        <div className="bg-white rounded-full shadow-lg p-6 flex flex-col items-center text-center border border-yellow-600 w-24 h-24 flex items-center justify-center">
          <span className="text-yellow-700 text-4xl font-bold">150+</span>
        </div>
        <p className="text-white text-sm mt-2 font-semibold text-center">Casas Disponibles</p>
      </div>

      {/* Estadística Ocupacional y Rotación de Viviendas */}
      <div className="flex flex-col items-center">
        <div className="bg-white rounded-full shadow-lg p-6 flex flex-col items-center text-center border border-yellow-600 w-24 h-24 flex items-center justify-center">
          <span className="text-yellow-700 text-4xl font-bold">200+</span>
        </div>
        <p className="text-white text-sm mt-2 font-semibold">Usuarios Alojados</p>
      </div>

      {/* Estructura */}
      <div className="flex flex-col items-center">
        <div className="bg-white rounded-full shadow-lg p-6 flex flex-col items-center text-center border border-yellow-600 w-24 h-24 flex items-center justify-center">
          <span className="text-yellow-700 text-4xl font-bold">48%</span>
        </div>
        <p className="text-white text-sm mt-2 font-semibold">Porcentaje de Usuarios que Regresaron</p>
      </div>
    </div>

    <div className="grid grid-cols-3 gap-4 h-1/2">
  {/* Curiosidades - Explicación */}
  <div className="flex-col items-center">
    <p className="text-lg text-gray-300 mx-4 h-[45vh]">
      ¿Buscas el hogar perfecto? Con más de <strong>150 casas disponibles</strong>, ofrecemos una amplia variedad de opciones que se adaptan a tus necesidades y estilo de vida. Desde acogedoras residencias familiares hasta apartamentos modernos, aquí encontrarás el lugar ideal para comenzar tu próxima aventura de intercambio.
    </p>
    <div className="d-flex justify-content-center">
    <button className="border border-yellow-500 text-white py-2 px-4 rounded-lg font-medium hover:bg-yellow-500 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-500 ml-4">
      Conoce
    </button>
    </div>
  </div>

  {/* Estadística Ocupacional y Rotación de Viviendas - Explicación */}
  <div className="border-l-4 border-r-4 border-white-800 h-full flex-col items-center pl-4">
    <p className="text-lg text-gray-300 mx-4 h-[45vh]">
      Más de <strong>200 usuarios alojados</strong> confirman que somos la opción favorita para quienes buscan una experiencia de intercambio de inquilinos gratuita y sin complicaciones. Nuestro compromiso es ofrecer un servicio excepcional, asegurando que cada inquilino se sienta como en casa. ¡Descubre por qué tantos han elegido nuestro servicio de intercambio a nivel mundial!
    </p>
    <div className="d-flex justify-content-center">
    <button className="border border-yellow-500 text-white py-2 px-4 rounded-lg font-medium hover:bg-yellow-500 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-500 ml-4">
      Conoce
    </button>
    </div>
  </div>

  {/* Estructura - Explicación */}
  <div className="flex-col items-center">
    <p className="text-lg text-gray-300 mx-4 h-[45vh]">
      ¿Qué hace que nuestros inquilinos vuelvan? Un asombroso <strong>48% de nuestros usuarios</strong> eligen regresar, y no es casualidad. Desde una atención al cliente excepcional hasta propiedades de calidad, nuestro objetivo es garantizar una experiencia memorable que te invite a volver y disfrutar de nuevos destinos en tu próxima aventura de intercambio.
    </p>
    <div className="d-flex justify-content-center">
    <button className="border border-yellow-500 text-white py-2 px-4 rounded-lg font-medium hover:bg-yellow-500 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-500 ml-4">
      Conoce
    </button>
    </div>
  </div>
</div>

  </div>
        </>
    )
}