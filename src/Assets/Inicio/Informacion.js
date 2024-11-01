import {ChatIcon, CheckCircleIcon, HomeIcon, SearchIcon, StarIcon, UserIcon, UsersIcon} from "@heroicons/react/outline"
export const Informacion=({visibleCards,setVisibleCards})=>{
    return(
        <div className="container min-h-screen flex flex-col justify-center text-black rounded-lg  p-6">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-yellow-500">
            ¿Te interesaría el intercambio de casas?
          </h2>
          <p className="text-lg mb-6">
            ¡Te explicamos todo en simples pasos y en solo 60 segundos!
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-start md:items-center">
        <div className="md:w-1/2 mb-6 md:mb-0 pr-4">
          <div className="space-y-4">
            {/* Renderizar cada tarjeta con una clase de animación condicional */}
            {[
              { title: "1. Regístrate", subtitle: "Crea una cuenta en la plataforma", icon: <UsersIcon className="h-6 w-6 text-yellow-600" /> },
              { title: "2. Completa tu perfil", subtitle: "Verifica tu identidad y agrega información", icon: <CheckCircleIcon className="h-6 w-6 text-yellow-600" /> },
              { title: "3. Explora casas", subtitle: "Busca y selecciona tu opción favorita", icon: <HomeIcon className="h-6 w-6 text-yellow-600" /> },
              { title: "4. Comunícate", subtitle: "Coordina detalles con el propietario", icon: <ChatIcon className="h-6 w-6 text-yellow-600" /> },
              { title: "5. Disfruta", subtitle: "Vive la experiencia de intercambio", icon: <StarIcon className="h-6 w-6 text-yellow-600" /> },
            ].map((card, index) => (
              <div
                key={index}
                className={`transform transition duration-500 ${
                  visibleCards?.includes(index) ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                }`}
              >
                <Card title={card.title} subtitle={card.subtitle} icon={card.icon} />
              </div>
            ))}
          </div>
        </div>
      
        <div className="md:w-1/2 flex items-center justify-center h-full">
          <iframe
            className="w-full h-[35vh] rounded-lg shadow-lg"
            src="https://www.youtube.com/embed/Su_dOf9a4FI?si=IimTQ_2rW0Tu37_M"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      
      </div>
    )
}

const Card = ({ title, subtitle, icon }) => {
    return (
      <div className="flex items-start p-4 border rounded-lg shadow-md bg-white">
        <div className="mr-4 text-yellow-600">{icon}</div>
        <div>
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-sm text-gray-600">{subtitle}</p>
        </div>
      </div>
    );
  };