import { Link } from "react-router-dom";

/* Imagenes Carrusel */
import fondo01 from "../../assets/image/fondo01.jpg";
import fondo02 from "../../assets/image/fondo02.jpg";
import fondo03 from "../../assets/image/fondo03.png";
import fondo04 from "../../assets/image/fondo04.jpg";

/* Imagenes productos venta */
import rolloTela from "../../assets/image/rollotelas.jpg";
import rolloTela2 from "../../assets/image/rolloslino.jpg";
import rollos from "../../assets/image/rolloshilos.jpg";

export const Inicio = () => {
  return (
    <div className="container px-1 py-1" id="custom-cards">
      <main>

         {/* Carousel: Inicio */}
        {/* *************************************************************** */}
        <section>
        <div id="myCarousel" className="carousel slide mt-3" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide-to="1"
              aria-label="Slide 2"
              className=""
            ></button>
            <button
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide-to="2"
              aria-label="Slide 3"
              className=""
            ></button>
            <button
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide-to="3"
              aria-label="Slide 4"
              className=""
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={fondo01} alt="Not Picture " width="100%" height="100%"/>
              <div className="container">
                <div className="carousel-caption">
                  <h1>Nuestras Telas</h1>
                  <p>Generan empleo a manos LABORIOSAS</p> 
                  <p>
                    <a className="btn btn-sm btn-primary" href="/#">
                      Más información
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="carousel-item">
              <img src={fondo02} alt="Not Picture " width="100%" height="100%"/>
              <div className="container">
                <div className="carousel-caption text-end">
                  <h1>Alta calidad </h1>
                  <p>Con Estandares de Alta calidad</p>
                  <p>
                    <a className="btn btn-sm btn-primary" href="/#">
                      Más información
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="carousel-item">
              <img src={fondo03} alt="Not Picture " width="100%" height="100%" />
              <div className="container">
                <div className="carousel-caption text-start">
                  <h1>Innovación</h1>
                  <p>Innovación en procesos de Producción</p>
                  <p>
                    <a className="btn btn-sm btn-primary" href="/#">
                      Más información
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="carousel-item">
              <img src={fondo04} alt="Not Picture " width="100%" height="100%" />
              <div className="container">
                <div className="carousel-caption text-start">
                  <h1>Meteriales biodegradables</h1>
                  <p>Trabajamos con materiales que reducen nuestra huella de carbón</p>
                  <p>
                    <a className="btn btn-sm btn-primary" href="/#">
                      Más información
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
    </section>
        {/* *************************************************************** */}
        {/* Carousel: Fin */}
       <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
        <div className="col">
          <div className="card card-cover h-60 overflow-hidden text-bg-dark rounded-4 shadow-lg">
         
            <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
              <h3 className="pt-1 mt-2 mb-5 display-6 lh-1 fw-bold">
                Telas de Alta Calidad
              </h3>
              <ul className="d-flex list-unstyled mt-auto">
                <li className="me-auto">
                  <img
                    src={rollos}
                    alt="Bootstrap"
                    className="rounded-circle border border-white"
                    width="250"
                    height="250"
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card card-cover h-60 overflow-hidden text-bg-dark rounded-4 shadow-lg">
         
            <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
              <h3 className="pt-1 mt-2 mb-5 display-6 lh-1 fw-bold">
                Somos Especialistas 
              </h3>
              <ul className="d-flex list-unstyled mt-auto">
                <li className="me-auto">
                  <img
                    src={rolloTela}
                    alt="Bootstrap"
                    className="rounded-circle border border-white"
                    width="250"
                    height="250"
                  />
                </li>
            
              </ul>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card card-cover h-60 overflow-hidden text-bg-dark rounded-4 shadow-lg">
               
            <div className="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
              <h3 className="pt-1 mt-2 mb-2 display-6 lh-1 fw-bold">
               Orgullo de Risaralda 40 años  
              </h3>
              <ul className="d-flex list-unstyled mt-auto">
                <li className="me-auto">
                  <img
                    src={rolloTela2}
                    alt="Bootstrap"
                    className="rounded-circle border border-white"
                    width="250"
                    height="250"
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
   
       
</main>
    </div>
  );
};
