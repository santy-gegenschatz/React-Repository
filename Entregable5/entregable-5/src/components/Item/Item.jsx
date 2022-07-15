import React from 'react';
// Nunca olvidar importar el css
import './Item.css';

const Item = ({item}) => {
console.log(item.nombre);
  return (
    <div className = 'item-container'>
      <div className = 'image-container'>
        <img src={item.url} alt="item" width = {100} />
      </div>
      <div className = 'details-container'>
          <p> {item.nombre} </p>
          <p> Precio : {item.precio} </p>
          <p> Stock : {item.stock} </p>

        </div>
    </div>
  )
}

export default Item