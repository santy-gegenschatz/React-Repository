import React, { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'
import CartItem from '../CartItem/CartItem'
import './Cart.css'

const Cart = ({items}) => {
  const {emptyCart} = useContext(CartContext);

  return (
    <div className = 'div-main3'>
        <div className = 'div-items'>
            { items.map( (item) => {
                console.log(item);
                return ( <CartItem item = {item}/> )
            })}
        </div>
        <div className = 'div-button'>
            <button className = 'btn btn-info' onClick = {() => emptyCart()}> Empty Cart </button>
        </div>
    </div>
  )
}

export default Cart