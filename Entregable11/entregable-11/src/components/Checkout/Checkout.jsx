import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'
import './Checkout.css'

const Checkout = () => {
  const { cartList, cartIsEmpty } = useContext(CartContext); 
  const verifyFields = () => {
    const emailOne = document.getElementById('emailOne').value;
    const emailTwo = document.getElementById('emailTwo').value;
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    if (name !== "" && phone !== "" && emailOne !== "" && emailTwo !== "") {
      emailOne === emailTwo ? 
      console.log("Calling Final Funciton")
      :
      alert("Sorry, the emails do not match");      
    } else {
      alert("One of the fields is Empty")
    }
  }
  return (
    <div className = 'div-main-Checkout'>
      <h4> Totals2  </h4>
      <h3> Step 1: Review your Items</h3>
      <div>
        {cartList.map( element => {
         return (<li key = {element.id}> {element.name} x {element.itemQuantity}</li>)
        })
        }
      </div>
      <br />
      <h3> Step 2: Review your personal details</h3>
      <div className = 'div-details-Checkout'>
        <input type="text" placeholder = 'Name'/>
        <input type="email" placeholder = 'email' id = 'emailOne'/>
        <input type="email" placeholder = 'Verify email' id = 'emailTwo'/>
        <input type="tel" placeholder = 'Phone' pattern = '[0-9]{2}-[0-9]{4}-[0-9]{4}'/>
      </div>
      <br />
      <button className = 'btn btn-success' onClick={verifyFields}> Place Order </button>
    </div>
  )
}

export default Checkout
