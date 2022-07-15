import Menu from './components/Menu/Menu';
import './App.css';
import ItemList from './components/ItemList/ItemList';
import Products from './helpers/Products';
import TestComponent from './components/TestComponent/TestComponent';
import Item from './components/Item/Item';
import Footer from './components/Footer/Footer';

function App() {

  return (
    <div className="App">
      <Menu />
      <ItemList />
      <Footer />
    </div>
  );
}

export default App;
