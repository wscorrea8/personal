import { Route, Routes } from "react-router-dom";
import { Acceso } from "../../vistas/publicas/Acceso";
import { FichaTecnica } from "../../componentes/FichaTecnica";
import { Nosotros } from "../../componentes/Nosotros";
import { Reclamos } from "../../componentes/Reclamos";
import { Vendedores } from "../../componentes/Vendedores";
import { Inicio } from "../../componentes/Inicio";


export const Ruteo = ()=>{
    return(
        <Routes>
        <Route path="/inicio" element={<Inicio/>}/>
           <Route path="/nosotros" element={<Nosotros/>}/>
           <Route path="/vendedor" element={<Vendedores/>}/>
           <Route path="/reclamo" element={<Reclamos/>}/>
           <Route path="/ficha_tecnica" element={<FichaTecnica/>}/>
           <Route path="/acceso" element={<Acceso/>}/>          
        </Routes>
    );
};