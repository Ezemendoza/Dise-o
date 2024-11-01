import { Link } from "react-router-dom";
import { HouseData } from "../../Data/HouseData.js";

export const CasasDisponibles = () => {
  console.log("Componente CasasDisponibles montado"); 

  return (
    <section className="py-10 px-6 bg-gray-100 flex flex-col justify-center items-center">
      <div className="flex justify-center h-[20vh]">
        <h2 className="text-3xl font-bold text-yellow-700 mb-6">Casas disponibles</h2>
      </div>
      <div className="carousel w-full flex justify-evenly">
        {HouseData.map((house, index) => (
          <div key={index} className="flex-none mx-2 relative">
            <div className="w-[22rem] h-[38rem] bg-white text-black rounded-lg overflow-hidden shadow-lg border border-yellow-300 transition-transform transform hover:scale-105 hover:shadow-2xl">
              <img
                src={house.medalla}
                alt={`Imagen del usuario que publica esta casa en ${house.location}`}
                className="absolute top-4 left-4 w-12 h-12 rounded-full border-2 border-yellow-500 object-cover shadow-md"
              />
              <img
                src={house.image}
                alt={`Imagen de una casa ubicada en ${house.location}`}
                className="w-full h-[60%] object-cover"
                loading="lazy"
              />
              <div className="p-4 h-[15vh]">
                <h3 className="text-2xl font-semibold mb-2 text-yellow-500 line-clamp-1">
                  {house.location}
                </h3>
                <p className="text-md text-gray-700 line-clamp-3">
                  {house.description}
                </p>
              </div>
         
              <div className="flex justify-between items-center p-4 border-t border-yellow-300">
                <Link to={`/casa/${house.id}`}>
                  <button
                    className="border border-yellow-500 text-yellow-500 py-2 px-4 rounded-lg font-medium hover:bg-yellow-500 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    onClick={(e) => {
                      e.preventDefault();
                      console.log("Botón clickeado", e, house);
                    }}
                  >
                    Conoce
                  </button>
                </Link>
                {house.medalla && (
                  <div className="absolute bottom-4 right-4 flex space-x-2">
                    <span className="border border-yellow-600 rounded-full p-2 shadow-md">
                      <img src={house.medalla} alt="Medalla" className="w-10 h-10" />
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export const BotonCasa=({house})=>{

  return(
    
    <Link to={`/casas/${house.id}`}>
  <button className="border border-yellow-500 text-yellow-500 py-2 px-4 rounded-lg font-medium hover:bg-yellow-500 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-500">
    Conoce
  </button>
  </Link>
  )
}