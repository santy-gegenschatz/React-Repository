import React, { useEffect, useState } from 'react'
import Item from '../Item/Item';
import Products from '../../helpers/Products';
import './ItemList.css';

const ItemList = () => {
let [productos, setProductos] = useState([]);
let [cargando, setCargando] = useState(true);

useEffect(() => {
  let promesa = Products(true, 2000);
  promesa.then( (response) => {
    setProductos(response);
    setCargando(false);
  });
}, [])

  return (
    <div>
      <p> This is an Item List</p>
      {cargando ? 
        <p> Loading...</p>
      :
        <div className = 'div-contenedor'>
        {productos.map(function(producto) {
          return < Item key = {producto.id} item = {producto} />
          })}
        </div>
      } 
    </div>
  )
}
export default ItemList