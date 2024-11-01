export const Hero=()=>{
    return(
        <div className="relative h-full">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center text-white p-10 flex flex-col justify-center items-center h-full">
          <h2 className="text-4xl font-bold mb-6">¿Te imaginas vivir en una ciudad nueva sin pagar por alojamiento?</h2>
          <p className="text-lg mb-6">Descubre cómo puedes intercambiar tu hogar en entornos urbanos vibrantes y convertir cada viaje en una experiencia única y enriquecedora.</p>
          <div className="flex flex-row space-x-4 my-3">
          <button
            type="button"
            className="text-white bg-yellow-700 hover:bg-yellow-800 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5"
          >
            ¿Cuáles son los Beneficios?
          </button>
          <button
            type="button"
            className="text-white bg-yellow-700 hover:bg-yellow-800 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5"
          >
            Ver experiencias de otros usuarios
          </button>
        </div>
        </div>
        
      </div>
    )
}