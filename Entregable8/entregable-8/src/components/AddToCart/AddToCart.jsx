import React from 'react'
import { useState } from 'react'
import './AddToCart.css'

const AddToCart = ({onAdd}) => {

    const [itemQuantity, setItemQuantity] = useState(0);

    function aumentar() {
        if (itemQuantity <100) {
            setItemQuantity( itemQuantity + 1);
        }
        
    }

    function disminuir() {
        if (itemQuantity >0) {
            setItemQuantity( itemQuantity - 1);
        }
        
    }

    return (
        <div className = 'div-general'>
            AddToCart Component
            <p> Select the number of Items you would like to add to your cart</p>
            <div className = 'div-key-components'>
                <button className = 'btn btn-primary' onClick = {disminuir}> - </button>
                <div className = 'center'>
                    <p className = 'item-counter-label'> {itemQuantity} </p>
                </div>
                <button className = 'btn btn-primary' onClick = {aumentar}> + </button>
            </div>
            <button className = 'btn btn-primary w-75 btn-buy' onClick={onAdd}> Buy Now </button>
            <button className = 'btn btn-info w-75 btn-buy'> Add to Wishlist </button>
        </div>
    )
}

export default AddToCart