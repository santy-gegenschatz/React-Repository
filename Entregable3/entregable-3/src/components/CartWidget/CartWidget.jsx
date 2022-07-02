import React from 'react'

const CartWidget = ({items}) => {
  return (
    <div>
        <div className='cart-div'>
            <p> Cart ({items})</p>
            <img src=".../imgs/cart-image.png" alt="cart-image" />
        </div>
        
    </div>
  )
}

export default CartWidget