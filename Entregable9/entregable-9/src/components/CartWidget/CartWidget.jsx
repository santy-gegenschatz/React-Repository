import React from 'react'
import './CartWidget.css';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import { useState } from 'react';
import { useEffect } from 'react';
const image = require('./cart-image.png');


const CartWidget = () => {
  const {cartList} = useContext(CartContext);
  const [itemCount, setItemCount] = useState(0);
  const calculateTotalItems = () => {
    let counter = 0;
    cartList.forEach(element => {
      counter += element.itemQuantity;
    });
    setItemCount(counter);
  }
  // Vamos a probar resovler el problema con un hook
  useEffect( () => {
    console.log("Sth happened");
    calculateTotalItems();
    console.log(itemCount);
  }, [cartList])
  return (
    <div>
      {console.log("rendering", cartList.length)}
      <Link to = '/cart' className = 'no-under-link-black'>
        {itemCount === 0 ?
        <div className = 'cart-div-without-items'> 
            <img src={ image } alt="cart" id = 'small-image'/>
            <p id = "label-cart"> Cart </p>
        </div>
        :
        <div className='cart-div-with-items'>
            <img src={ image } alt="cart" id = 'small-image'/>
            <p id = "label-cart"> Cart {`(${itemCount})`}</p>
        </div>
        }

      </Link>
        
    </div>
  )
}

export default CartWidget