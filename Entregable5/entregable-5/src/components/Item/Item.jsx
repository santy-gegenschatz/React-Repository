import React from 'react';
// Nunca olvidar importar el css
import './Item.css';

const Item = ({item}) => {
console.log(item.nombre);
  return (
    <div className = 'item-container'>
      <div className = 'image-container'>
        <img src={item.url} alt="item" width = {200} height = {200}/>
      </div>
      <div className = 'details-container'>
          <h5> {item.nombre} </h5>
          <h6> <strong>{item.precio} USD </strong> </h6>
          <button id = 'button-cart'> Add to Cart </button>
          <br />
          <button id = 'button-wishlist'> ❤️ to Wishlist </button>
        </div>
    </div>
  )
}

export default Item