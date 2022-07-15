import Menu from './components/Menu/Menu';
import './App.css';
import ItemList from './components/ItemList/ItemList';
import Products from './helpers/Products';
import TestComponent from './components/TestComponent/TestComponent';
import Item from './components/Item/Item';

function App() {
  let productos = [
    {id : 1, nombre : 'remera'},
    {id : 2, nombre : 'jean'},
    {id : 3, nombre : 'camisa'}
]
  return (
    <div className="App">
      <Menu />
      <p> Entregable 5</p>
      <p> Generar un componente Item y un Componente ItemList que contenga a los componentes Item</p>
      <ItemList items = {productos} />
      <Item item = {productos[0]}/>
      <TestComponent />
    </div>
  );
}

export default App;
