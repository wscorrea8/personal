import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Cabecera } from './app/componentes/Cabecera';
import { Ruteo } from './app/utilidades/rutas/Ruteo';
import { Footer } from './app/componentes/Footer';

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
