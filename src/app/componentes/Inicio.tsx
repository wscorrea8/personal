import rolloTela from "../../assets/images/rollotelas.jpg";
import rolloTela2 from "../../assets/images/rolloslino.jpg";
import rollos from "../../assets/images/rolloshilos.jpg";

export const Inicio = () => {
  return (
    <div className="container px-1 py-1" id="custom-cards">
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
    </div>
  );
};
