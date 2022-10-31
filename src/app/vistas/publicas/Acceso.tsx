export const Acceso = ()=>{
    return(
      <div className="h-100 p-5 text-bg-dark rounded-3 mt-5">
        <div className="d-flex justify-content-center">
           <form>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Correo Electrónico</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">Nosotros no compartimos su correo. Politica Privacidad .</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"/>
  </div>
  
  <button type="submit" className="btn btn-primary">Ingresar</button>
</form>
        </div>
        </div>
    );
};
/* 
<div class="h-100 p-5 text-bg-dark rounded-3">
          <h2>Change the background</h2>
          <p>Swap the background-color utility and add a `.text-*` color utility to mix up the jumbotron look.
           Then, mix and match with additional component themes and more.</p>
          <button class="btn btn-outline-light" type="button">Example button</button>
        </div>

        */