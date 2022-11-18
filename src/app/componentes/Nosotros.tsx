import nosotros from "../../assets/image/teamwork.jpg";
export const Nosotros = () => {
  return (
    <div className="container mt-5">
      <div className="row featurette">
        <div className="col-md-5">
          <h2 className="featurette-heading fw-normal lh-1">
            Nuestra <span className="text-muted">Historia.</span>
          </h2>
          <p className="lead">
          Desde que Risaltex se fundó en el año 1973, nuestros clientes nos han reconocido por brindar nuestros 
          servicios y productos de alta calidad,nuestra eficiencia excepcional y el gran profesionalísmo con el 
          que cuentan nuestros empleados.
          Independientemente del servicio que solicite, nosotros le podemos garantizar que no solo cumpliremos este,
          sino que también superaremos sus expectativas, asegurando de esta manera su plena satisfacción.
          Contamos con un personal altamente preparado para proporcionarle una atención de calidad, 
          administrando las solicitudes con la rapidez y eficacia que se merecen nuestros clientes. 
          ¿Que esperas? Contáctanos y conoce nuestra empresa, nuestro equipo de trabajo e ir a fondo con nuestro 
          proceso de distribución.
          </p>
        </div>
        <div className="col-md-5">
       <img src={nosotros} alt="Acerca de Risaltex S.A." width="100%" height="100%"/>
        </div>
      </div>
    </div>
  );
};
