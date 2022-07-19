import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Products from '../../helpers/Products';
import ItemDetail from '../../components/ItemDetail/ItemDetail.jsx';

const ItemDetailContainer = ({productId}) => {

  // Lo que vamos a necesitar es un array de productos que llenar mediante un hook de useState
  const [producto, setProducto] = useState(0);
  
  // Primero hacemos una función que busqué la promesa
  function getItem() {
    let promesa = Products(2000, true);
    console.log(promesa);
    return promesa
  } 

  // Luego, solamente la primera vez que se renderiza el componente llamamos 
  // a la función que busca la promesa, y cuando la promesa se resuelva seteamos el
  // estado de un array de productos, lo que hace que se vuelva a triggerear el render,
  // esta vez con productos ahora valiendo distinto de vacio, entonces via un operador ternario
  // que aplica una función que busca en el array de productos el id deseado lo terminamos mandando
  // a el componente Item Detail, que resulta ser un child de ItemDetailContainer
  useEffect( () => {
    getItem().then( (response) => {
      // Dado que cambia un estado se triggerea un re-render
      let producto = response.find((product) => product.id === productId);
      setProducto(producto);
    });
  }, []) 
  return (
    <div>
      ItemDetailContainer
      {producto === 0 ? 
      <p className = 'white-text'> Loading...</p>
      :
      <ItemDetail item = {producto} />}
    </div>
  )
}

export default ItemDetailContainer