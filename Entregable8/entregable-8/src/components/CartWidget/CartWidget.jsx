import React from 'react'
import './CartWidget.css';
import { Link } from 'react-router-dom';
const image = require('./cart-image.png');


const CartWidget = ({items}) => {
  return (
    <div>
      <Link to = '/cart' className = 'no-under-link-black'>
        {items === 0 ?
        <div className = 'cart-div-without-items'> 
            <img src={ image } alt="cart" id = 'small-image'/>
            <p id = "label-cart"> Cart </p>
        </div>
        :
        <div className='cart-div-with-items'>
            <img src={ image } alt="cart" id = 'small-image'/>
            <p id = "label-cart"> Cart {`(${items})`}</p>
        </div>
        }

      </Link>
        
    </div>
  )
}

export default CartWidget