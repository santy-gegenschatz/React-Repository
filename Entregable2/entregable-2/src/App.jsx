import './App.css';
import Menu from './components/Menu/Menu';
import Titulo from './components/Título/Titulo';
import Formulario from './components/Formulario/Formulario';
import ComponenteContenedor from './containers/ComponenteContenedor';

function App() {

const saludo = () => {
  alert("Hola!");
}

// Esta variable sería lo que se conoce como un estado 
let titulo = "Este es un título"; 

  return (
    <div className='main-div'>
      <ComponenteContenedor saludo = 'Hola Soy Container'/>
    </div>
  );
}

export default App;
