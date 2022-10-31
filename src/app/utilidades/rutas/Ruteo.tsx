import { Route, Routes } from "react-router-dom";
import { Acceso } from "../../vistas/publicas/Acceso";
import { FichaTecnica } from "../../contenedores/FichaTecnica";
import { Nosotros } from "../../contenedores/Nosotros";
import { Reclamos } from "../../contenedores/Reclamos";
import { Vendedores } from "../../contenedores/Vendedores";
import { Inicio } from "../../contenedores/Inicio";


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