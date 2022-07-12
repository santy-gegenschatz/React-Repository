import Menu from './components/Menu/Menu';
import './App.css';
import AñadirProducto from './components/AñadirProducto/AñadirProducto';

function App() {
  return (
    <div className="App">
      <Menu />
      <p> Entregable 4</p>
      <p> Generar un componente que permita añadir productos al carrito</p>
      <AñadirProducto inicial = { 0 }/>
    </div>
  );
}

export default App;
