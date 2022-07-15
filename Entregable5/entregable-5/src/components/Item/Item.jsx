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
          <h5 className = 'white-text item-title'> {item.nombre} </h5>
          <p className = 'grey-text'> <i>"{item.description}"</i></p>
          <h6 className = 'white-text'> <strong>{item.precio} USD </strong> </h6>
          <div>
            <button id = 'button-cart'> <strong> Add to Cart </strong> </button>
            <button id = 'button-wishlist'> <strong> Add to Wishlist ❤️ </strong> </button>
          </div>

        </div>
    </div>
  )
}

export default Item