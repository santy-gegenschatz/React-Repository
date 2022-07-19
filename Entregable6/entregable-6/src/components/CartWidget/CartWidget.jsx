import React from 'react'
import './CartWidget.css';
const image = require('./cart-image.png');

const CartWidget = ({items}) => {
  return (
    <div>
        <div className='cart-div'>
            <img src={ image } alt="cart" id = 'small-image'/>
            <p id = "label-cart"> Cart ({items})</p>
        </div>
        
    </div>
  )
}

export default CartWidget