import React, { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'
import CartItem from '../CartItem/CartItem'
import './Cart.css'

const Cart = ({items}) => {
  const {emptyCart, calculateTotalCartValue} = useContext(CartContext);
  console.log(calculateTotalCartValue);

  return (
    <div className = 'div-main3'>
        <div className = 'div-items'>
            { items.map( (item) => {
                console.log(item);
                return ( <CartItem item = {item}/> )
            })}
        </div>

        <div className = 'div-total'>
            <h5> Total : {calculateTotalCartValue()}</h5>
        </div>
        <div className = 'div-button'>
            <button className = 'btn btn-info' onClick = {() => emptyCart()}> Empty Cart </button>
        </div>
    </div>
  )
}

export default Cart