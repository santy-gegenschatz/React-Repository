import Menu from './components/Menu/Menu';
import './App.css';
import AñadirProducto from './components/AñadirProducto/AñadirProducto';
import ItemListCointainer from './components/ItemListContainer/ItemListCointainer';

function App() {
  return (
    <div className="App">
      <Menu />
      <p> Entregable 4</p>
      <p> Generar un componente que permita añadir productos al carrito</p>
      <AñadirProducto start = { 0 }/>
      <p> Acá va un item list container</p>
      <ItemListCointainer greeting = "Hola, soy ItemListContainer" />
    </div>
  );
}

export default App;
