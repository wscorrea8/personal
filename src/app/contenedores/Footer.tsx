import { Link } from "react-router-dom";

export const Footer = ()=>{
    return(
        <div className="container">

<footer className="d-flex flex-wrap justify-content-between align-items-center py-1 my-1 border-top">
    <p className="col-md-4 mb-0 text-muted">© 2022 Risaltex, Textiles Risaralda S.A. 
    | Calle 8 # 12-30 Sector el Acero, Dosquebradas |(57)-(606)-(3303550) 
    | risaltex@une.net.co | ventasper@risaltex.com.co​</p>

     <ul className="nav col-md-8 justify-content-end">
     <li className="nav-item"><Link to="/inicio" className="nav-link">Inicio</Link></li>
     <li className="nav-item"><Link to="/nosotros" className="nav-link">Nosotros</Link></li>
     <li className="nav-item"><Link to="/vendedor" className="nav-link">Vendedores</Link></li>
     <div>
     <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Servicios
                </a>
                <ul className="dropdown-menu">
              
                  <li>
                   <Link to="/reclamo" className="dropdown-item">Reclamos</Link>
                  </li>
                  <li>
                  <Link to="/ficha_tecnica" className="dropdown-item">Ficha Tecnica</Link>
                  </li>
                </ul>
              </li>
              </div>
    </ul>
 
  </footer>
        </div>
    );
};
