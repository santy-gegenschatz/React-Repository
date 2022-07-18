import Menu from './components/Menu/Menu';
import './App.css';
import ItemList from './components/ItemList/ItemList';
import Products from './helpers/Products';
import TestComponent from './components/TestComponent/TestComponent';
import Item from './components/Item/Item';
import Footer from './components/Footer/Footer';
import {BrowserRouter, Routes, Router} from 'react-router-dom'

function App() {

  return (
    // Envolvemos toda la aplicación con el Browser Router pq podemos llegar a necesitar usarlo
    // en casi cualquier, por no decir todos, los componentes.
    <BrowserRouter> 
      <div className="App">
        <Menu />
        <ItemList />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
