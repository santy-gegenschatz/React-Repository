import React from 'react';
// Nunca olvidar importar el css
import './Item.css';
import { Link } from 'react-router-dom';

const Item = ({item}) => {
  return (
    <div className = 'item-container'>
      <div className = 'image-container'>
        <Link to = {`/items/${item.id}`}>
          <img src={item.url} alt="item" width = {200} height = {200}/>
        </Link>
      </div>
      <div className = 'details-container'>
          <Link to = {`/items/${item.id}`} className = 'no-under-link'>
            <h5 className = 'white-text item-title'> {item.name} </h5>
          </Link>
          <p className = 'grey-text'> <i>"{item.description}"</i></p>
          <h6 className = 'white-text'> <strong>{item.price} USD </strong> </h6>
          <div>
            <button id = 'button-cart'> <strong> Add to Cart </strong> </button>
            <button id = 'button-wishlist'> <strong> Add to Wishlist ❤️ </strong> </button>
          </div>

        </div>
    </div>
  )
}

export default Item