import React from 'react'
import './CartWidget.css';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import { useState } from 'react';
const image = require('./cart-image.png');


const CartWidget = () => {
  const {cartList} = useContext(CartContext);
  const [cart, SetCart] = useState(cartList);
  const [itemCount, setItemCount] = useState(0);
  const calculateTotalItems = () => {
    let counter = 0;
    cartList.forEach(element => {
      counter += element.itemQuantity;
    });
    setItemCount(counter);
  }
  return (
    <div>
      {console.log("rendering", cart.length)}
      <Link to = '/cart' className = 'no-under-link-black'>
        {cart.length === 0 ?
        <div className = 'cart-div-without-items'> 
            <img src={ image } alt="cart" id = 'small-image'/>
            <p id = "label-cart"> Cart </p>
        </div>
        :
        <div className='cart-div-with-items'>
            <img src={ image } alt="cart" id = 'small-image'/>
            <p id = "label-cart"> Cart {`(${cart.length})`}</p>
        </div>
        }

      </Link>
        
    </div>
  )
}

export default CartWidget