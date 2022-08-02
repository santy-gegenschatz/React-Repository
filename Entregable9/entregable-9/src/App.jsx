import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Menu from './components/Menu/Menu';
import Footer from './components/Footer/Footer';
import CartContainer from './containers/CartContainer/CartContainer';
import ItemListContainer from './containers/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './containers/ItemDetailContainer/ItemDetailContainer';
import CartContextProvider from './contexts/CartContext';
import TestContext from './contexts/TestContext';
import { createContext } from 'react';

const Contexto = createContext([]);
function App() {

  console.log(Contexto);
  return (
    // Antes del BrowserRouter, que tmabién es un contexto vamos a envolver toda la aplicación en el contexto que creamos en la carpeta contexts.
    // Envolvemos toda la aplicación con el Browser Router pq podemos llegar a necesitar usarlo en casi cualquier, por no decir todos, los componentes.
    <CartContextProvider> 
      <BrowserRouter> 
        <div className="App">
          <Menu />
          <Routes>
            <Route path = '/' element = {<ItemListContainer />} > </Route>
            <Route path = '/cart' element = {<CartContainer />} > </Route>
            <Route path = '/categories/:categoryId' element = {<ItemListContainer />} > </Route>
            <Route path = '/items/:productId' element = {<ItemDetailContainer />} > </Route>
            <Route path = '/newSeason' element = {<ItemListContainer />} />
            <Route path = '*' element = {<Navigate to = '/' />}></Route>
            {/* Ejemplo lazy loading */}
            {/* <Route path = '/detalle' element = {
              <Suspense fallback = {<div> Cargando ...</div>}>
                <ItemDetailContainer />
              </ Suspense>
            }></Route> */}
          </Routes>
          <TestContext> </TestContext>
          <Footer />
        </div>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
