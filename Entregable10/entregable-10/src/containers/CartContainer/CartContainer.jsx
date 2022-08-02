import React from 'react'
import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import './CartContainer.css';

const CartContainer = () => {
  const {cartList} = useContext(CartContext);
  return (
    <div className = 'div-main'>
        This is the CartContainer element 2
        {
          cartList.map( (prod) => {
            return <li key = {prod.id}> {`Producto : ${prod.name}, Cantidad : ${prod.itemQuantity}`}</li>
          })
        }
    </div>
  )
}

export default CartContainer