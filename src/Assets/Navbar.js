import logo from "../imagenes/logo.png"
import { UserIcon} from "@heroicons/react/outline"
export const Navbar = ({ currentSection , navbarNatural}) => {
  const isWhiteBackground = currentSection === 1 || currentSection === 2 || currentSection === 5 || navbarNatural;
  
  return (
    <nav className={`py-2 px-6 flex justify-between items-center fixed top-0 left-0 w-full z-10 transition-colors duration-300 ${isWhiteBackground ? ' text-gray-800' : 'bg-opacity-75 text-white'}`}>
      <div className="flex flex-col items-center">
        <img src={logo} alt="Logo de UrbanExchange" className="h-8" />
        <h1 className="text-lg font-bold text-center">UrbanExchange</h1>
      </div>
      <ul className="flex items-center space-x-4">
        <li className={`flex items-center  cursor-pointer transition-colors duration-300 ${isWhiteBackground ? 'text-gray-800' : 'hover:text-yellow-300'}`}>
          Mis beneficios
        </li>
        <li className={`flex items-center cursor-pointer  transition-colors duration-300 ${isWhiteBackground ? 'text-gray-800' : 'hover:text-yellow-300'}`}>
          Iniciar Sesion
        </li>
        <li className={`flex items-center transition-colors duration-300 ${isWhiteBackground ? 'text-gray-800' : 'hover:text-yellow-300'}`}>
          <button
            type="button"
            className={`font-medium rounded-lg text-sm px-3 py-2.5 text-center transition-colors duration-300 ${isWhiteBackground ? 'bg-yellow-600 hover:bg-yellow-700' : 'bg-yellow-700 hover:bg-yellow-800'} focus:ring-4 focus:ring-yellow-300 d-flex`}
          >
            <UserIcon className="h-6 w-6" />
            <span className="ml-2">Regístrate Gratis</span>
          </button>
        </li>
      </ul>
    </nav>
  );
};