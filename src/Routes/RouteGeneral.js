import { HashRouter, Route, Routes } from 'react-router-dom';
import { Inicio } from '../Inicio/Inicio';
import { CasaDetalle } from '../Assets/Publicaciones/CasaDetalle';


const RouteGeneral = () => {

   

    return (
        <HashRouter>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/casas/:id" element={<CasaDetalle />} />
        </Routes>
      </HashRouter>
    );
};

export default RouteGeneral;
