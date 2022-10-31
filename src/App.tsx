import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Cabecera } from './app/contenedores/Cabecera';
import { Ruteo } from './app/utilidades/rutas/Ruteo';
import { Footer } from './app/contenedores/Footer';


function App() {
  return (
    <div className='container'>
      <BrowserRouter>
      <Cabecera/>
      <Ruteo/>
      <Footer/>
    </BrowserRouter>

    </div>
  );
}

export default App;
