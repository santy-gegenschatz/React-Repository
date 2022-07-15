import React, { useEffect, useState } from 'react'
import Item from '../Item/Item';
import Products from '../../helpers/Products';

const ItemList = () => {
let [productos, setProductos] = useState([]);

useEffect(() => {
  let promesa = Products(true, 2000);
  promesa.then( (response) => {
    setProductos(response);
    console.log(productos);
  });
}, [])


  return (
    <div>
      <p> This is an Item List</p>
      <p> Loading...</p>
      <div>
          {productos.map(function(producto) {
            return < Item key = {producto.id} item = {producto} />
            })}
      </div>
    </div>
    )
}
export default ItemList