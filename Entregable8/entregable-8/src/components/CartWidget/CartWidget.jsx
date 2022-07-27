import React from 'react'
import './CartWidget.css';
import { Link } from 'react-router-dom';
const image = require('./cart-image.png');


const CartWidget = ({items}) => {
  console.log(typeof items);
  return (
    <div>
      <Link to = '/cart' className = 'no-under-link-black'>
        <div className='cart-div'>
            <img src={ image } alt="cart" id = 'small-image'/>
            {items == 0 ?
            <p id = 'label-cart'> Cart </p>
            :
            <p id = "label-cart"> Cart {`(${items})`}</p>
            }
        </div>
      </Link>
        
    </div>
  )
}

export default CartWidget