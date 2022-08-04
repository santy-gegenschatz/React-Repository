import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'
import './Checkout.css'

const Checkout = () => {
  const { cartList, cartIsEmpty } = useContext(CartContext); 
  const array = []
  return (
    // { cartIsEmpty ? <div> Hello </div> :
    <div className = 'div-main-Checkout'>
      <h4> Totals </h4>
      <h3> Step 1: Review your Items</h3>
      <div>
        {/* We are going to use the curly braces to escape to jsx */}
        {
        cartList.forEach( element => {
          array.push(<li key = {element.id}> {element.name}</li>)
        })
        }
        <li> Hola </li>

      </div>
      <br />
      <h3> Step 2: Review your personal details</h3>
      <div className = 'div-details-Checkout'>
        <input type="text" placeholder = 'Name'/>
        <input type="email" placeholder = 'email'/>
        <input type="email" placeholder = 'Verify email'/>
        <input type="tel" placeholder = 'Phone' pattern = '[0-9]{2}-[0-9]{4}-[0-9]{4}'/>
      </div>
      <br />
      <button className = 'btn btn-success'> Place Order </button>
    </div>
  // }
  )
}

export default Checkout
