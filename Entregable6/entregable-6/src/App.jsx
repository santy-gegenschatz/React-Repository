import Menu from './components/Menu/Menu';
import './App.css';
import ItemList from './components/ItemList/ItemList';
import Footer from './components/Footer/Footer';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import CartContainer from './containers/CartContainer/CartContainer';
import ItemListContainer from './containers/ItemListContainer/ItemListContainer.jsx';
import { Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import ItemDetailContainer from './containers/ItemDetailContainer/ItemDetailContainer';

function App() {

  return (
    // Envolvemos toda la aplicación con el Browser Router pq podemos llegar a necesitar usarlo
    // en casi cualquier, por no decir todos, los componentes.
    <BrowserRouter> 
      <div className="App">
        <Menu />
        <Routes>
          <Route path = '/' element = {<ItemList />} ></Route>
          <Route path = '/cart' element = {<CartContainer />} ></Route>
          <Route path = '/items' element = {<ItemListContainer />} ></Route>
          <Route path = '/detalles/:productId' element = {<ItemDetailContainer productId = '1' />}> </Route>
          <Route path = '*' element = {<Navigate to = '/' />}></Route>
          {/* Ejemplo lazy loading */}
          {/* <Route path = '/detalle' element = {
            <Suspense fallback = {<div> Cargando ...</div>}>
              <ItemDetailContainer />
            </ Suspense>
          }></Route> */}
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
