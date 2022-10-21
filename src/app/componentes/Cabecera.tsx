import { Link } from "react-router-dom";

export const Cabecera = () => {
  return (
    <div className="container mt-4">
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Risaltex S.A.
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/inicio" className="nav-link">
                  Inicio
                </Link>
              </li>
              <li className="nav-item">
              <Link to="/nosotros" className="nav-link">Nosotros</Link>
              </li>
              <li className="nav-item">
               <Link to="/servicio" className="nav-link">Servicios</Link>
              </li>
              <li className="nav-item dropdown ">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Vendedores
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
            </ul>
            <span className="navbar-text">
              <Link to="/acceso" className="nav-link">Acceso</Link>
             </span>
          </div>
        </div>
      </nav>
    </div>
  );
};
