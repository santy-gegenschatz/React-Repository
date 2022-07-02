import './App.css';
import Menu from './components/Menu/Menu';
import Titulo from './components/Título/Titulo';

function App() {
  return (
    <div>
      <Menu />
      {/* lo de arriba es una llamada a una función */}
      {/* Para las props imagina un objeto js que se va generando */}
      <Titulo titulo = 'aquí una prop' subTitulo = 'aquí un subtítulo'/>
    </div>
  );
}

export default App;
