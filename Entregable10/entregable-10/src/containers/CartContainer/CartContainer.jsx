import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import Cart from '../../components/Cart/Cart';
import './CartContainer.css';

const CartContainer = () => {

  const {cartList} = useContext(CartContext);
  const [loadedCart, setLoadedCart] = useState(false);

  const getProducts = (delay) => {
    let promise = new Promise ((resolve, reject) => {
      setTimeout( () => {
        resolve(true)
      }, delay)
    })
    return promise;
  }

  useEffect(() => {
    getProducts(1000)
    .then( (resp) => {
      setLoadedCart(resp);
    })
  }, [])

  return (
    <div>
      {!loadedCart ?
      <div> Loading the cart items...</div>
      :
      <div>
        <Cart items = {cartList} />
      </div>
      }
  </div>
  )
}

export default CartContainer

    // <div className = 'div-main'>
    //     This is the CartContainer
    //     {
    //       cartList.map( (prod) => {
    //         return <li key = {prod.id}> {`Producto : ${prod.name}, Cantidad : ${prod.itemQuantity}`}</li>
    //       })
    //     }
    //     <button onClick = {emptyCart}> Empty Cart </button>
    // </div>