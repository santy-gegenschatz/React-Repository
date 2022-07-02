import './App.css';
import Menu from './components/Menu/Menu';
import Titulo from './components/Título/Titulo';
import Formulario from './components/Formulario/Formulario';

function App() {

// Esta variable sería lo que se conoce como un estado 
let titulo = "Este es un título"; 

  return (
    <div>
      <Menu />
      <Formulario />
    </div>
  );
}

export default App;
