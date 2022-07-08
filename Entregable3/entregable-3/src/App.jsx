import './App.css';
import Menu from './components/Menu/Menu';
import Formulario from './components/Formulario/Formulario';
import ItemListContainer from './containers/ItemListContainer/ItemListContainer';

function App() {

const alertar = () => {
  alert("Hola!");
}

// Esta variable sería lo que se conoce como un estado 
let titulo = "Este es un título"; 

  return (
    <div className='main-div'>
      <Menu />
      <Formulario prop = {alertar} />
      <ItemListContainer greeting = "GREETING PASADO A TRAVÉS DE UN PROP Y DESESTRUCTURADO CON ÉXITO :)" />
    </div>
  );
}

export default App;
