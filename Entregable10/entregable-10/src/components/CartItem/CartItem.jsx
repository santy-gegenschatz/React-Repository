import React from 'react'
import './CartItem.css'

const CartItem = ({item}) => {
  return (
    <div className = 'div-main2'> 
        <div className = 'div-photo'>
            <img src={item.url} alt="product" width = {150} height = {130}/>
        </div>

        <div className = 'div-details'>
            <h4> {item.name} </h4>
            <h6> {item.brand} </h6>
            <p id = 'special-paragraph'> <strong> {item.price} USD </strong></p> 
            <p id = 'special-paragraph'> {`Quantity : ${item.itemQuantity}`} </p> 
        </div>
        
        <div className = 'div-button'>
            <button className = 'btn btn-info'> Remove Item</button>
        </div>
    </div>
  )
}

export default CartItem