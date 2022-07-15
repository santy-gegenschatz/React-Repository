import Menu from './components/Menu/Menu';
import './App.css';
import ItemList from './components/ItemList/ItemList';
import Products from './helpers/Products';
import TestComponent from './components/TestComponent/TestComponent';
import Item from './components/Item/Item';

function App() {

  return (
    <div className="App">
      <Menu />
      <ItemList />
    </div>
  );
}

export default App;
